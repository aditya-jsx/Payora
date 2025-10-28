import { NextRequest, NextResponse } from "next/server";
import client from "@/app/lib/db";
import z from "zod";

const requiredBody = z.object({
    to: z.string(),
    amount: z.string()
})

export async function POST(request: NextRequest){
    const body = await request.json();
    const userIdHeader = request.headers.get('user-id');
    const parsedData = requiredBody.safeParse(body);

    if(!parsedData.success){
        return NextResponse.json({
            msg: "Invalid received id or amount"
        }, {
            status:400
        })
    }

    const { to, amount } = parsedData.data;

    if(!userIdHeader){
        return NextResponse.json({
            msg: "Not Authorized"
        }, {
            status: 401
        })
    }

    const userId = parseInt(userIdHeader);
    const receiverId = parseInt(to);
    const sendingAmount = parseInt(amount);

    if(isNaN(userId)){
        return NextResponse.json({
            msg: "Invalid user id"
        }, {
            status: 400
        })
    }
    if(isNaN(receiverId)){
        return NextResponse.json({
            msg: "Invalid account"
        }, {
            status: 400
        })
    }
    if(isNaN(sendingAmount)){
        return NextResponse.json({
            msg: "Invalid amount"
        }, {
            status: 400
        })
    }

    try{
        const senderAccount = await client.accounts.findFirst({
            where: {
                userId: userId
            }
        });
        
        if(!senderAccount){
            return NextResponse.json({
                msg: "Can't get sender's account"
            }, {
                status: 400
            })
        }

        const senderAccountId = senderAccount?.id;
        const senderBalance = senderAccount?.balance;

        
        // if(!senderBalance){
        //     return NextResponse.json({
        //         msg: "Can't get sender's balance"
        //     }, {
        //         status: 400
        //     })
        // }

        const receiverAccount = await client.accounts.findFirst({
            where: {
                userId: receiverId
            }
        });

        if(!receiverAccount){
            return NextResponse.json({
                msg: "Can't get receiver's account"
            }, {
                status: 400
            })
        }

        const receiverAccountId = receiverAccount?.id
        
        const receiverBalance = receiverAccount?.balance;

        // if(!receiverBalance){
        //     return NextResponse.json({
        //         msg: "Can't get receiver's balance"
        //     }, {
        //         status: 400
        //     })
        // }

        if(sendingAmount>senderBalance){
            return NextResponse.json({
                msg: "Insufficient balance"
            }, {
                status: 400
            });
        }

        const senderNewBalance = senderBalance - sendingAmount;
        const receiverNewBalance = receiverBalance + sendingAmount;

        // const transactionOne = await client.accounts.update({
        //     where: {
        //         id: senderAccountId,
        //     }, 
        //     data: {
        //         balance: senderNewBalance,
        //     },
        // });

        // const transactionTwo = await client.accounts.update({
        //     where: {
        //         id: receiverAccountId,
        //     },
        //     data: {
        //         balance: receiverNewBalance,
        //     }
        // });

        // await client.$transaction([transactionOne, transactionTwo]);

        // transaction
        await client.$transaction([
            client.accounts.update({ where: { id: senderAccountId }, data: { balance: senderNewBalance }}),
            client.accounts.update({ where: { id: receiverAccountId }, data: { balance: receiverNewBalance }}),
        ]);

        return NextResponse.json({
            msg: "Transfer successfull",
            balance: senderNewBalance
        }, {
            status: 200
        });
        

    }catch(e){
        console.log("Server Error while sending money", e);
        return NextResponse.json({
            msg: "Transfer failed"
        }, {
            status: 500
        })
    }
}
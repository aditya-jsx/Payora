import { NextRequest, NextResponse } from "next/server";
import client from "@/app/lib/db";

export async function GET(request: NextRequest){
    const userIdHeader = request.headers.get('user-id');

    if(!userIdHeader){
        return NextResponse.json({
            msg: "Not Authorized"
        }, {
            status: 401
        });
    }

    const userId = parseInt(userIdHeader);

    if(isNaN(userId)){
        return NextResponse.json({
            msg: "Invalid user id"
        }, {
            status: 400
        })
    }

    try{
        const user = await client.accounts.findFirst({
            where: {
                userId: userId
            }
        })
        if(!user){
            return NextResponse.json({
                msg: "User account not found"
            }, {
                status: 404
            })
        }
        return NextResponse.json({
            msg: "Balance fetched successfully!",
            balance: user.balance
        }, {
            status: 200
        })
    }catch(e){
        console.log("Failed to fetch the balance", e);
        return NextResponse.json({
            msg: "Server Error"
        }, {
            status: 500
        })
    }
}
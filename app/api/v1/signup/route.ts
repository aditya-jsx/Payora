import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import bcrypt from "bcrypt";
import client from "@/app/lib/db"

export async function POST(req:NextRequest) {
    const body = await req.json();
    const requiredBody = z.object({
        username: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        password: z
            .string()
            .min(8, "Password must contain atleast 8 characters")
            .regex(/[A-Z]/, "Must contain an uppercase letter")
            .regex(/[a-z]/, "Must contain an lowercase letter"),
    });
    const parsedData = requiredBody.safeParse(body);
    if(!parsedData.success){
        return NextResponse.json({
            msg: "Invalid Format",
            error: parsedData.error.flatten().fieldErrors
        }, {
            status: 400
        });
    }
    const { username, firstName, lastName, password } = parsedData.data;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await client.user.findFirst({where: {username: username}});
        if(existingUser){
            return NextResponse.json({
                msg: "User with this username already exists"
            }, {
                status: 400
            })
        }
        const user = await client.user.create({
            data: {
                username: username,
                firstName: firstName,
                lastName: lastName,
                password: hashedPassword
            }
        })
        const userId = user.id;

        // giving random balance to a user

        const balance = await client.accounts.create({
            data: {
                balance: Math.floor(1 + Math.random() * 1000),
                userId: userId
            }
        })
        return NextResponse.json({
            msg: "Signup Completed Successfully!"
        }, {
            status: 200
        })
    }catch(e){
        console.error("Database error occured during signup", e);
        if (e instanceof Error) {
            return NextResponse.json({
                msg: "An unexpected error occurred during signup",
                error: e.message 
            }, {
                status: 500
            })
        }else{
            return NextResponse.json({
                msg: "An unexpected and unknown error occurred",
                error: String(e)
            }, {
                status: 500
            });
        }
    }
}

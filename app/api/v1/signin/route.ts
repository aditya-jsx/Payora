import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import bcrypt from "bcrypt";
import client from "@/app/lib/db"
import { JWT_SECRET } from "@/app/lib/config";
import jwt from "jsonwebtoken"

export async function POST(req:NextRequest) {
    const body = await req.json();
    const requiredBody = z.object({
        username: z.string(),
        password: z
            .string()
            .min(8, "Password must contain atleast 8 characters")
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
    const { username, password } = parsedData.data;
    try{
        const user = await client.user.findFirst({where: {username: username}})
        if(!user){
            return NextResponse.json({
                msg: "Invalid username or Password"
            }, {
                status: 403
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(passwordMatch){
            if(!JWT_SECRET){
                console.error("JWT secret is not configured");
                return NextResponse.json({
                    msg: "Server Configuration error"
                }, {
                    status: 500
                })
            }
            const token = jwt.sign({
                userId: user.id.toString()
            }, JWT_SECRET, {
                expiresIn: '1h'
            });
            const response = NextResponse.json({msg: "User logged in successfully"});
            response.cookies.set("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60, sameSite: 'lax', path: "/" });
            return response;
        }else{
            return NextResponse.json({
                msg: "Invalid username or password"
            }, {
                status: 403
            });
        }
    }catch(e){
        console.error("Error during signin", e);
        if (e instanceof Error) {
            return NextResponse.json({
                msg: "An unexpected error occurred during signin",
                error: e.message 
            }, {
                status: 500
            });
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

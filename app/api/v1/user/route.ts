import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import client from "@/app/lib/db";
import bcrypt from "bcrypt";

const requiredBody = z.object({
        password: z
            .string()
            .min(8, "Password must contain atleast 8 characters")
            .regex(/[A-Z]/, "Must contain an uppercase letter")
            .regex(/[a-z]/, "Must contain an lowercase letter")
            .optional(),
        firstName: z.string().optional(),
        lastName: z.string().optional()
})

export async function PUT(request: NextRequest){
    const user_Id = request.headers.get('user-id');
    const body = await request.json();

    if(!user_Id){
        return NextResponse.json({
            msg: "Not Authorized"
        }, {
            status: 401
        });
    }

    const userId = parseInt(user_Id);

    const parsedResult  = requiredBody.safeParse(body);

    if(!parsedResult.success){
        return NextResponse.json({
            msg: "Error while updating information",
            error: parsedResult.error.flatten().fieldErrors,
        }, {
            status: 400
        })
    }

    const { password, firstName, lastName } = parsedResult.data;

    try{
        const dataToUpdate: {
            password?: string,
            firstName?: string,
            lastName?: string
        } = {};

        if(password){
            dataToUpdate.password = await bcrypt.hash(password, 10);
        }
        if(firstName){
            dataToUpdate.firstName = firstName;
        }
        if(lastName){
            dataToUpdate.lastName = lastName;
        }

        if(Object.keys(dataToUpdate).length === 0){
            return NextResponse.json({
                msg: "No fields to update"
            }, {
                status: 400
            })
        }

        const updatedUser = await client.user.update({
            where: {
                id: userId,
            },
            data: dataToUpdate,
        });

        const {password: userPassword, ...userWithoutPassword} = updatedUser;

        return NextResponse.json({
            msg: "Updated successfully",
            user: userWithoutPassword
        }, {
            status: 200
        });
        
    }catch(e){
        console.error("Error updating user:", e);
        return NextResponse.json(
          { msg: "An unexpected error occurred" },
          { status: 500 }
        );
    }
}
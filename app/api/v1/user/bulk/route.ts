import { NextRequest, NextResponse } from "next/server";
import client from "@/app/lib/db";
// import { User } from "@/app/generated/prisma/client";
import { User } from "@prisma/client";

export async function GET(request: NextRequest){

    try{

        const searchParams = request.nextUrl.searchParams;
        const filter = searchParams.get('filter');

        if(!filter){
            return NextResponse.json({
                msg: "Filter query parameter is required"
            }, {
                status: 400
            })
        }
        const users = await client.user.findMany({
            where: {
                OR: [
                    {
                        firstName: {
                            contains: filter,
                            mode: "insensitive"
                        }
                    },
                    {
                        lastName: {
                            contains: filter,
                            mode: "insensitive"
                        }
                    },
                ],
            },
        });
        if(users.length === 0){
            return NextResponse.json({
                msg: "No users found matching that filter"
            }, {
                status: 404
            })
        }
        return NextResponse.json({
            users: users.map((user: User) => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                id: user.id
            })),
        });

    }catch(e){
        console.error("Error searching for users:", e);
        return NextResponse.json(
          { msg: "An unexpected error occurred" },
          { status: 500 }
        );
    }
}

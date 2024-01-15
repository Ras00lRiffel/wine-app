import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
    const res = await request.json();
    const { email, password } = res;

    let user;
    try {
        user = await prisma.user.create({
            data: {
                email,
                password
            }
        });
    } catch (e) {
        console.error(e);
    }

    return NextResponse.json({ message: "User was created", user })

}
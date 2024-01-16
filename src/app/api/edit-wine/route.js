import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma"

export async function DELETE(request, { params }) {
    const id = params.id
    console.log(id);

    const post = await prisma.post.findMany({
        where: { id }
    })
    return NextResponse.json(post)
}
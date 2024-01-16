import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma"

export async function UPDATE(request, { params }) {
    const id = params.id

    const post = await prisma.post.findMany({
        where: { id }
    })
    return NextResponse.json(post)
}
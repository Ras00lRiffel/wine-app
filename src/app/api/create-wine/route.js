import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
    debugger;
    const res = await request.json();
    const { name, year, type, varietal, rating, consumed } = res;

    const wine = await prisma.wine.create({
        data: {
            name,
            year,
            type,
            varietal,
            rating,
            consumed
        }
    })

    return NextResponse.json({ message: "Wine was added", wine })
}
'use server'
import prisma from "../../../../lib/prisma";

export async function GetWine(id) {
    const wine = await prisma.wine.findUnique({
        where: { id: id }
    })
    return await wine;
}

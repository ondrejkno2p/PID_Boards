import { preload_db } from "../preload";
import { prisma } from "$lib/server/prisma";

export async function load() {
    await preload_db()
    // console.log(await prisma.LineInfo.findMany({where:{stop_gtfsid:'U669Z1P'}}))
    return{ok:1}
}
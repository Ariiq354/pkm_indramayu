import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await prisma.tb_berita.findMany();
  return NextResponse.json(data);
}

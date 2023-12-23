// nextjs api route that returns hello

import { NextResponse } from "next/server";

export async function GET(req) {
  console.log(req);
  return NextResponse.json({ hello: "world" });
}

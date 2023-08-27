import { JSONResponse } from "../../../../src/lib/server/response";
import { NextRequest } from "next/server";
import { randomUUID } from "crypto";

export async function GET(request: NextRequest, { params }: { params: { entity: string; node: string } }) {
  const offset = Number(request.nextUrl.searchParams.get("offset")) || 0;
  const sort = request.nextUrl.searchParams.get("sort") || ["dateCreated", "DESC"];
  const limit = Number(request.nextUrl.searchParams.get("limit")) || 50;
  const page = Number(request.nextUrl.searchParams.get("page")) || 0;

  const mockdata = Array.from({ length: 200 }, (_, i) => ({
    uuid: randomUUID(),
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 47304000000)),
    id: `${params.entity}-${i}${1}`,
  }));

  return JSONResponse(mockdata, { offset, page, limit, sort });
}

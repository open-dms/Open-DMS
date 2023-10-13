import { buildJsonResponse, parseSearchParams } from "@/src/lib/server/helper";

import { NextRequest } from "next/server";
import { randomUUID } from "crypto";

export async function GET(
  request: NextRequest,
  { params }: { params: { model: string; node: string } }
) {
  const searchParams = parseSearchParams(request);

  const mockdata = Array.from({ length: 200 }, (_, i) => ({
    uuid: randomUUID(),
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 47304000000)),
    id: `${params.model}-${i}${1}`,
  }));

  return buildJsonResponse(mockdata, { query: { ...searchParams } });
}

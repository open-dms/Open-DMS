import { buildJsonResponse, parseSearchParams } from "@/src/lib/server/helper";

import { NextRequest } from "next/server";
import { randomUUID } from "crypto";

export async function GET(
  request: NextRequest,
  { params }: { params: { model: string } }
) {
  const searchParams = parseSearchParams(request);
  const data = []; //... await prisma.$ENTITY.$QUERY;
  return buildJsonResponse(data, {
    model: params.model,
    query: {
      ...searchParams,
    },
    event: {
      at: new Date(),
      uuid: randomUUID().replaceAll("-", ""),
    },
  });
}

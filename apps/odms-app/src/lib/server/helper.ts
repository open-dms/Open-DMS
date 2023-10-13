"server only";

import { NextRequest, NextResponse } from "next/server";

export const buildJsonResponse = (
  data: Array<any> | Record<string, any>,
  options: Record<string, any>
) => {
  /** @note return generic payload on any API call, so UI can react more generic / optimisic */
  /*
   * status 200
   * {
   *    "res": ...always returns array: []=0, [a]=1, [a,b,c]=n
   *    "obj": ...metadata, can contain type, schema, model, query, counter, pager, event
   * }
   *  else
   * {
   *    "err": ...always return (err as Error)?.message ?? "ODMS_GENERIC_ERROR"
   *    "obj": ...metadata see above
   * }
   */

  if (Array.isArray(data)) {
    return NextResponse.json({
      res: data,
      obj: { total: data.length, ...options },
    });
  }
  return NextResponse.json({ res: [data], obj: { total: 1, ...options } });
};

export function parseSearchParams(
  req: NextRequest
): Record<string, string | string[]> {
  const urlSearchParams = new URLSearchParams(req.url.split("?")[1] || "");
  if (!urlSearchParams.entries()) return [] as never;
  const queryParams: Record<string, string | string[]> = {};

  for (const [key, value] of urlSearchParams.entries()) {
    if (queryParams.hasOwnProperty(key)) {
      if (Array.isArray(queryParams[key])) {
        (queryParams[key] as string[]).push(value);
      } else {
        queryParams[key] = [queryParams[key] as string, value];
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

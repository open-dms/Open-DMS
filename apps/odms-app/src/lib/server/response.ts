import { NextResponse } from "next/server";

export const JSONResponse = (data: Array<any> | Record<string, any>, options: Record<string, any>) => {
  if (Array.isArray(data)) {
    return NextResponse.json({ res: data, _meta: { total: data.length, ...options } });
  }
  return NextResponse.json({ res: [data], _meta: { total: 1, ...options } });
};

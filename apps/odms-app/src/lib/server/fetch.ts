"server only";

/** @note timeout to enforce revalidation after (set to 1 day) */
const paginatedFetchRevalidationTimeout = 86400;

export interface PaginationArgs {
  limit?: number | undefined;
  offset?: number | undefined;
  page?: number | 0;
  sort?: Array<string> | ["dateCreated", "ASC"];
}

/** @note app wide API fetch function */
/** with configurable cache expiry & ability to force-revalidate */
/** see: https://nextjs.org/docs/app/api-reference/functions/revalidateTag) */

export const paginatedFetch = async (
  path: string,
  entity: string,
  params: PaginationArgs
) => {
  /** @todo add better validation for passed props */

  const searchParams = new URLSearchParams(params as Record<string, string>);
  const searchString = searchParams.toString();

  const apiRequestURI = process.env.NEXTAUTH_URL + path + searchString;
  return await fetch(apiRequestURI, {
    next: { tags: [entity], revalidate: paginatedFetchRevalidationTimeout },
  });
};

"server only";

/** @note default timeout to enforce revalidation after */
const paginatedFetchRevalidationTimeout = 604800;

export interface PaginationArgs {
  limit: number;
  offset: number;
  page: number | 0;
  sort: Array<string>;
}

/** @note API fetch function */
/** with configurable cache expiry and ability to force revalidate */
/** see: https://nextjs.org/docs/app/api-reference/functions/revalidateTag) */

export const paginatedFetch = async (path: string, entity: string, params: PaginationArgs) => {
  /** @todo add better validation for passed props */
  const apiRequestURI = process.env.NEXTAUTH_URL + path;
  return await fetch(apiRequestURI, {
    next: { tags: [entity], revalidate: paginatedFetchRevalidationTimeout },
  });
};

import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}`;
  const totalPosts = await fetchJson<string>(url);
  return totalPosts;
};

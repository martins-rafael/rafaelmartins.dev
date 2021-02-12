import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fethJson } from '../../utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?&${query}`;
  const posts = await fethJson<PostData[]>(url);
  return posts;
};

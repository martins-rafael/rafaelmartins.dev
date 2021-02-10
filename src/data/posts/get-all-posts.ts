import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fethJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fethJson<PostData[]>(POSTS_URL);
  return posts;
};

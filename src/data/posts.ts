import { POSTS_URL } from 'config/app-config';
import { PostData } from 'types/post';
import { fetchJson } from 'utils/fetch-json';
import { markdownToHtml } from 'utils/markdown-to-html';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}`;
  const totalPosts = await fetchJson<string>(url);
  return totalPosts;
};

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?&${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  const content = await markdownToHtml(jsonPosts[0].content);
  const finalContent = { ...jsonPosts[0], content };
  return [finalContent];
};

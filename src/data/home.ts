import { WELCOME_URL } from 'config/app-config';
import { ABOUT_URL } from 'config/app-config';
import { CONTACT_URL } from 'config/app-config';
import { HomeData } from 'types/home';
import { HomeWelcome } from 'types/home';
import { HomeAbout } from 'types/home';
import { HomeContact } from 'types/home';
import { fetchJson } from 'utils/fetch-json';
import { markdownToHtml } from 'utils/markdown-to-html';

export const getData = async (): Promise<HomeData> => {
  const welcome = await fetchJson<HomeWelcome>(WELCOME_URL);
  const contact = await fetchJson<HomeContact>(CONTACT_URL);
  const about = await fetchJson<HomeAbout>(ABOUT_URL);
  const content = await markdownToHtml(about.about.content);
  about.about.content = content;

  const homeData = {
    welcome,
    about,
    contact,
  };

  return homeData;
};

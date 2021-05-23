import { WELCOME_URL } from '../../config/app-config';
import { ABOUT_URL } from '../../config/app-config';
import { CONTACT_URL } from '../../config/app-config';
import { HomeData } from '../../domain/home/home';
import { HomeWelcome } from '../../domain/home/home';
import { HomeAbout } from '../../domain/home/home';
import { HomeContact } from '../../domain/home/home';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

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

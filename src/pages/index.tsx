import { GetStaticProps } from 'next';

import { getData } from 'data/home';
import { HomeData } from 'types/home';

import HomeTemplate from 'templates/Home';

type HomeProps = {
  data: HomeData;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();

  return {
    props: { data },
  };
};

const Home = ({ data }: HomeProps) => <HomeTemplate data={data} />;

export default Home;

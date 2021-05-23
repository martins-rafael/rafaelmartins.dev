import { GetStaticProps } from 'next';

import { getData } from '../data/home/get-data';
import { HomeData } from '../domain/home/home';

import HomePage from '../templates/HomePage';

type HomeProps = {
  data: HomeData;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();

  return {
    props: { data },
  };
};

const Home = ({ data }: HomeProps) => <HomePage data={data} />;

export default Home;

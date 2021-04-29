import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import Footer from '../../components/Footer';

type BaseTemplateProps = {
  children: React.ReactNode;
};

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <>
    <Header />
    <MainContainer>{children}</MainContainer>
    <Footer />
  </>
);

export default BaseTemplate;

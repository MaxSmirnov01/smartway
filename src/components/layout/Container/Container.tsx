import { ContainerWrapper, Section } from './styles';
import RepositoryBox from '../RepositoryBox/RepositoryBox';
import Input from '../Input/Input';
import FavoriteRepositoryBox from '../RepositoryBox/FavoriteRepositoryBox';

const Container = () => {
  return (
    <ContainerWrapper>
      <Input />
      <Section>
        <RepositoryBox />
        <FavoriteRepositoryBox />
      </Section>
    </ContainerWrapper>
  );
};

export default Container;

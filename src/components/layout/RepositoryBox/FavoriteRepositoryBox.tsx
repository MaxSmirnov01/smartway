import { observer } from 'mobx-react-lite';
import useStore from '../../../hooks/useStore';
import { Item } from '../../../types/types';
import RepositoryCard from '../RepositoryCard/RepositoryCard';
import { RepositoryBoxWrapper, ItemBox, H2Wrapper, HrWrapper } from './styles';

const FavoriteRepositoryBox = observer(() => {
  const { favoriteRepositories } = useStore();

  return (
    <RepositoryBoxWrapper>
      <H2Wrapper>Список избранных репозиториев:</H2Wrapper>
      <HrWrapper />
      <ItemBox>
        {favoriteRepositories && favoriteRepositories.map((item: Item) => <RepositoryCard key={item.id} item={item} />)}
      </ItemBox>
    </RepositoryBoxWrapper>
  );
});

export default FavoriteRepositoryBox;

import { observer } from 'mobx-react-lite';
import useStore from '../../../hooks/useStore';
import { Item } from '../../../types/types';
import Repository from '../Repository/Repository';
import { RepositoryBoxWrapper, ItemBox, H2Wrapper, HrWrapper } from './styles';

const FavoriteRepositoryBox = observer(() => {
  const { favoriteRepositories } = useStore();

  return (
    <RepositoryBoxWrapper>
      <H2Wrapper>Список избранных репозиториев:</H2Wrapper>
      <HrWrapper />
      <ItemBox>
        {favoriteRepositories && favoriteRepositories.map((item: Item) => <Repository key={item.id} item={item} />)}
      </ItemBox>
    </RepositoryBoxWrapper>
  );
});

export default FavoriteRepositoryBox;

import { observer } from 'mobx-react-lite';
import useStore from '../../../hooks/useStore';
import { Item } from '../../../types/types';
import Repository from '../Repository/Repository';
import { ItemBox, RepositoryBoxWrapper, Error, H2Wrapper, HrWrapper } from './styles';

const RepositoryBox = observer(() => {
  const store = useStore();
  const { repositories, error, state } = store;

  return (
    <RepositoryBoxWrapper>
      <H2Wrapper>Список репозиториев:</H2Wrapper>
      <HrWrapper />
      {state === 'pending' && <strong>Загрузка данных...</strong>}
      {repositories?.total_count === 0 && <strong>Не найдено</strong>}
      {state === 'error' ? (
        <Error>{error}</Error>
      ) : (
        <ItemBox>
          {repositories &&
            repositories.items &&
            repositories.items.map((item: Item) => <Repository key={item.id} item={item} />)}
        </ItemBox>
      )}
    </RepositoryBoxWrapper>
  );
});

export default RepositoryBox;

import { observer } from 'mobx-react-lite';
import useStore from '../../../hooks/useStore';
import { Item } from '../../../types/types';
import { CardContent, ItemContainer, ItemImg, Link, CardText, Button } from './styles';

const Repository = observer(({ item }: Item) => {
  const store = useStore();

  const addFavorite = () => {
    store.addFavoriteRepo(item);
  };

  return (
    <ItemContainer onClick={addFavorite}>
      <div>
        <ItemImg src={item.owner.avatar_url} alt={item.name} />
      </div>
      <CardContent>
        <div>
          <Link href={item.html_url} rel="noopener" target="_blank">
            {item.name}
          </Link>
        </div>
        <CardText>Число старов: {item.stargazers_count}</CardText>
        <CardText>Число форков: {item.forks}</CardText>
        <Button>Подробнее</Button>
      </CardContent>
    </ItemContainer>
  );
});

export default Repository;

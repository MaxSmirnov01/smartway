import { observer } from 'mobx-react-lite';
import useStore from '../../../hooks/useStore';
import { Item } from '../../../types/types';
import { CardContent, ItemContainer, ItemImg, LinkWrapper, Link, CardText, Button } from './styles';

const Repository = observer(({ item }: Item) => {
  const store = useStore();

  const addFavorite = () => {
    store.addFavoriteRepo(item);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <ItemContainer onClick={addFavorite}>
      <div>
        <ItemImg src={item.owner.avatar_url} alt={item.name} />
      </div>
      <CardContent>
        <LinkWrapper>
          <Link href={item.html_url} rel="noopener" target="_blank">
            {item.name}
          </Link>
        </LinkWrapper>
        <CardText>Число старов: {item.stargazers_count}</CardText>
        <CardText>Число форков: {item.forks}</CardText>
        <Button onClick={(e) => handleClick(e)}>Подробнее</Button>
      </CardContent>
    </ItemContainer>
  );
});

export default Repository;

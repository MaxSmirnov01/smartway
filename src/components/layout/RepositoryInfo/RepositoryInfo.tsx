import { useParams } from 'react-router-dom';
import { Container, Link, Text } from './styles';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import NotFound from '../../../pages/NotFound';

const RepositoryInfo = observer(() => {
  const { name } = useParams();
  const store = useStore();

  if (!name) {
    return null;
  }

  const currentRepository = store.getRepository(name);

  if (!currentRepository) {
    return <NotFound />;
  }

  return (
    <Container>
      {currentRepository.homepage && (
        <Link href={currentRepository.homepage} rel="noopener" target="_blank">
          Сайт
        </Link>
      )}
      <h2>Полное название: {currentRepository.full_name}</h2>
      {currentRepository?.language && <Text>Язык: {currentRepository.language}</Text>}
      <Text>Открытые вопросы: {currentRepository?.open_issues}</Text>
      <Text>Просмотры: {currentRepository?.watchers}</Text>
      {currentRepository.license?.name && <Text>Лицензия: {currentRepository.license.name}</Text>}
      <Text>Видимость: {currentRepository?.visibility}</Text>
    </Container>
  );
});

export default RepositoryInfo;

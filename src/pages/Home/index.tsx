import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { usePagination } from '../../hooks/usePagination';
import { useLoader } from '../../hooks/useLoader';
import generateUrlParamsMarvelApi from '../../utils/generateUrlParamsMarvelApi';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CardGrid from '../../components/CardGrid';
import Loading from '../../components/Loading';

import * as S from './styles';

interface Comic {
  id: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
}

function Home() {
  const [comics, setComics] = useState<Comic[]>([]);

  const { nextPage, offset } = usePagination();
  const { isLoading, showLoader, hideLoader } = useLoader();

  useEffect(() => {
    async function loadData() {
      try {
        showLoader();
        const updatedComics = [...comics];

        const response = await api.get(
          `/comics?offset=${offset}&${generateUrlParamsMarvelApi()}`
        );

        response.data.data.results.forEach((comic: any) => {
          updatedComics.push({
            id: comic.id,
            thumbnail: comic.thumbnail,
            title: comic.title,
          });
        });

        setComics([...updatedComics]);
      } catch (err) {
        console.log(err);
      } finally {
        hideLoader();
      }
    }

    loadData();
  }, [offset]);

  return (
    <S.Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <S.Content>
          <Input type="text" placeholder="Buscar pelo nome do quadrinho" />

          <CardGrid>
            {comics.map((item: Comic) => (
              <Card
                key={item.id}
                imgUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                title={item.title}
              />
            ))}
          </CardGrid>

          <Button
            onClick={() => nextPage(comics.length)}
            title="Carregar Mais"
          />
        </S.Content>
      )}
    </S.Container>
  );
}

export default Home;

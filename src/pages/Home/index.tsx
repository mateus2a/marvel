import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { useLoader } from '../../hooks/useLoader';
import useDebounce from '../../hooks/useDebounce';
import { usePagination } from '../../hooks/usePagination';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
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
  description: string;
  creators: {
    items: [{ name: string }];
  };
  characters: {
    items: [{ name: string }];
  };
  pageCount: number;
}

function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [totalComics, setTotalComics] = useState(0);
  const [oldDebouncedSearchFilter, setOldDebouncedSearchFilter] = useState('');

  const { nextPage, offset } = usePagination();
  const { isLoading, showLoader, hideLoader } = useLoader();
  const debouncedSearchFilter = useDebounce(searchFilter, 500);

  useEffect(() => {
    async function loadData() {
      try {
        showLoader();

        let updatedComics: Comic[] = [];

        if (oldDebouncedSearchFilter === debouncedSearchFilter) {
          updatedComics = [...comics];
        } else {
          nextPage(0);
          setOldDebouncedSearchFilter(debouncedSearchFilter);
        }

        let response;

        if (debouncedSearchFilter) {
          response = await api.get(
            `https://gateway.marvel.com/v1/public/comics?offset=${offset}&titleStartsWith=${debouncedSearchFilter}`
          );
        } else {
          response = await api.get(
            `https://gateway.marvel.com/v1/public/comics?offset=${offset}`
          );
        }

        response.data.data.results.forEach((comicItem: any) => {
          updatedComics.push({
            id: comicItem.id,
            thumbnail: comicItem.thumbnail,
            title: comicItem.title,
            description: comicItem.description,
            creators: comicItem.creators,
            characters: comicItem.characters,
            pageCount: comicItem.pageCount,
          });
        });

        setTotalComics(response.data.data.total);

        setComics([...updatedComics]);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } finally {
        hideLoader();
      }
    }

    loadData();
  }, [offset, debouncedSearchFilter]);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <Input
          type="text"
          placeholder="Buscar pelo nome do quadrinho"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <CardGrid comics={comics} />

            {totalComics > offset + 20 && (
              <Button
                onClick={() => nextPage(comics.length)}
                title="Carregar Mais"
              />
            )}
          </>
        )}
      </S.Content>
    </S.Container>
  );
}

export default Home;

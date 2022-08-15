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
}

function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [filterComics, setFilterComics] = useState<Comic[]>([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [totalComics, setTotalComics] = useState(0);

  const { nextPage, offset } = usePagination();
  const { isLoading, showLoader, hideLoader } = useLoader();
  const debouncedSearchFilter = useDebounce(searchFilter, 500);

  useEffect(() => {
    async function loadData(data: Comic[], setData: (data: Comic[]) => void) {
      try {
        showLoader();

        const updatedData = [...data];

        let response;

        if (debouncedSearchFilter) {
          response = await api.get(
            `/comics?offset=${offset}&titleStartsWith=${debouncedSearchFilter}`
          );
        } else {
          response = await api.get(`/comics?offset=${offset}`);
        }

        response.data.data.results.forEach((comic: any) => {
          updatedData.push({
            id: comic.id,
            thumbnail: comic.thumbnail,
            title: comic.title,
          });
        });

        setTotalComics(response.data.data.total);

        setData([...updatedData]);
      } catch (err) {
        console.log(err);
      } finally {
        hideLoader();
      }
    }

    if (!debouncedSearchFilter && comics.length === 0) {
      nextPage(0);
      setFilterComics([]);
      loadData(comics, setComics);
    } else if (!debouncedSearchFilter && comics.length > 0) {
      loadData(comics, setComics);
    } else if (debouncedSearchFilter && filterComics.length === 0) {
      nextPage(0);
      setComics([]);
      loadData(filterComics, setFilterComics);
    } else if (debouncedSearchFilter && filterComics.length > 0) {
      loadData(filterComics, setFilterComics);
    }
  }, [offset, debouncedSearchFilter]);

  return (
    <S.Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <S.Content>
          <Input
            type="text"
            placeholder="Buscar pelo nome do quadrinho"
            value={searchFilter}
            onChange={(event) => setSearchFilter(event.target.value)}
          />

          <CardGrid comics={debouncedSearchFilter ? filterComics : comics} />

          {totalComics > offset + 20 && (
            <Button
              onClick={() =>
                nextPage(
                  debouncedSearchFilter ? filterComics.length : comics.length
                )
              }
              title="Carregar Mais"
            />
          )}
        </S.Content>
      )}
    </S.Container>
  );
}

export default Home;

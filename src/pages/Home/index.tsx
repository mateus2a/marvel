import { useEffect, useState } from 'react';

import generateUrlParamsMarvelApi from '../../utils/generateUrlParamsMarvelApi';
import { api } from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CardGrid from '../../components/CardGrid';

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
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/comics?${generateUrlParamsMarvelApi()}`);

      setComics(response.data.data.results);
    }

    loadData();
  }, []);

  return (
    <S.Container>
      <Header />
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

        <Button onClick={() => {}} title="Carregar Mais" />
      </S.Content>
    </S.Container>
  );
}

export default Home;

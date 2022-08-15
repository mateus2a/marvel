import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CardGrid from '../../components/CardGrid';

import * as S from './styles';

function Home() {
  const arr = [
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
    'Homem Aranha',
  ];

  return (
    <S.Container>
      <Header />
      <S.Content>
        <Input type="text" placeholder="Buscar pelo nome do quadrinho" />

        <CardGrid>
          {arr.map((item, index) => (
            <Card
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              imgUrl="https://ik.imagekit.io/lzkiso6iri/image_2_wFEaPwPbK.png?updatedAt=1640369489047"
              title={item}
            />
          ))}
        </CardGrid>

        <Button onClick={() => {}} title="Carregar Mais" />
      </S.Content>
    </S.Container>
  );
}

export default Home;

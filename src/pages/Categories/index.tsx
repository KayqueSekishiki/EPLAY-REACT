import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Descrição do jogo 1',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['R%250,00', '-10%'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description: 'Descrição do jogo 1',
    title: 'Diablo',
    system: 'PS5',
    infos: ['R%290,00', '-5%'],
    image: diablo
  },
  {
    id: 3,
    category: 'Aventura',
    description: 'Descrição do jogo 1',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['R%250,00', '-10%'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Descrição do jogo 1',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['R%250,00', '-10%'],
    image: starWars
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={promocoes} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={promocoes} title="FPS" background="black" />
  </>
)

export default Categories

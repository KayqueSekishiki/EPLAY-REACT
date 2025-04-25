import Banner from '../../components/Banner'
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

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Descrição do jogo 1',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Descrição do jogo 1',
    title: 'Diablo',
    system: 'PS5',
    infos: ['25/07'],
    image: diablo
  },
  {
    id: 7,
    category: 'Aventura',
    description: 'Descrição do jogo 1',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['13/09'],
    image: zelda
  },
  {
    id: 8,
    category: 'Ação',
    description: 'Descrição do jogo 1',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['12/12'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home

import Tag from '../Tag'
import { Card, Title, Description } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" alt="" />
    <Title>Nome do Jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Sistema</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, animi
      atque labore adipisci aut deleniti beatae rem voluptatum nihil est, sit
      totam hic, nemo sint fugiat reprehenderit voluptatem porro mollitia.
    </Description>
  </Card>
)

export default Product

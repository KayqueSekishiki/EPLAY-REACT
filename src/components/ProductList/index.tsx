import Product from '../Product'

import { Container, Title, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          image="https://placehold.co/222x250"
          title="Nome do Jogo"
          category="Ação"
          system="Windows"
          description="Teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="https://placehold.co/222x250"
          title="Nome do Jogo"
          category="Ação"
          system="Windows"
          description="Teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="https://placehold.co/222x250"
          title="Nome do Jogo"
          category="Ação"
          system="Windows"
          description="Teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="https://placehold.co/222x250"
          title="Nome do Jogo"
          category="Ação"
          system="Windows"
          description="Teste"
          infos={['-10%', 'R$ 150']}
        />
      </List>
    </div>
  </Container>
)

export default ProductList

import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import { formatPrices } from '../ProductList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrices = () => {
    return items.reduce((a, value) => {
      return (a += value.prices.current!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrices(item.prices.current)}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  removeItem(item.id)
                }}
              />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos no carrinho</Quantity>
        <Prices>
          Total de {formatPrices(getTotalPrices())}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'

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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  removeItem(item.id)
                }}
              />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogos no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrices())}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

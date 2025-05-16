import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to={'/'} title="Clique aqui para retornar a sessão inicial">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  to="/categories"
                  title="Clique aqui para acessar a página de categorias"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  to="/#soon"
                  title="Clique aqui para acessar a sessão de em breve"
                >
                  Em breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  to="/#on-sale"
                  title="Clique aqui para acessar a sessão de promoções"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              to="/categories"
              title="Clique aqui para acessar a página de categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              to="/#soon"
              title="Clique aqui para acessar a sessão de em breve"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              to="/#on-sale"
              title="Clique aqui para acessar a sessão de promoções"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}
export default Header

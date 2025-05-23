import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import close from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 22.5rem;
  width: 100%;
  background-color: ${colors.gray};
  z-index: 1;
  padding: 2.5rem 1rem;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: ${colors.white};
    text-align: center;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  color: ${colors.white};
  margin-bottom: 1.5rem;

  span {
    display: block;
    font-size: 0.75rem;
    color: ${colors.lightGray};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: ${colors.white};
  margin-top: 2rem;
  margin-bottom: 1rem;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 0.5rem 0;
  border-bottom: 0.0625rem solid ${colors.lightGray};

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    margin-right: 1.25rem;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 1rem;
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 0.875rem;
  }

  ${TagContainer} {
    margin: 0.5rem 1rem 1rem 0;
  }

  button {
    background-image: url(${close});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 0.5rem;
    right: 0;
    cursor: pointer;
  }
`

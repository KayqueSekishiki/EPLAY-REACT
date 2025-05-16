import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 560px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 340px;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Title = styled.h2`
  font-size: 2.25rem;
  max-width: 450px;
`

export const Prices = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;

  span {
    text-decoration: line-through;
  }
`

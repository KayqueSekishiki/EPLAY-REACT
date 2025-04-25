import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
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
  }

  ${TagContainer} {
    position: absolute;
    top: 2rem;
  }
`

export const Titulo = styled.h2`
  font-size: 2.25rem;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;

  span {
    text-decoration: line-through;
  }
`

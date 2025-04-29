import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  position: relative;
  height: 30rem;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 1rem;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  ${TagContainer} {
    margin-right: 0.5rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    z-index: 1;
  }
`

export const Infos = styled.div`
  max-width: 18rem;
  padding: 1rem;
  background-color: ${cores.preta};
  font-weight: bold;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.125rem;
    margin: 1rem 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`

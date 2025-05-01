import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  display: block;
  position: relative;
  background-color: ${cores.cinza};
  padding: 0.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${cores.branca};

  img {
    display: block;
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 0.5rem;
  }
`

export const Title = styled.h3`
  display: block;
  font-size: 1rem;
  font-weight: bold;

  margin: 1rem 0 0.5rem;
`

export const Description = styled.p`
  display: block;
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin-top: 1rem;
`

export const Infos = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

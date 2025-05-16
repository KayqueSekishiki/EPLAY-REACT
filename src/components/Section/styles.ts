import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 2rem 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }

  p{
  max-width: 40rem;
  font-size 0.875rem;
  line-heigth: 1.375rem;
  text-align: justify;
  }
`
export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
`

import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  border-radius: 0.5rem;
  background-color: ${colors.gray};
  padding: 1.5rem;
  margin-bottom: 2.5rem;

  h2,
  h3 {
    font-size: 1.125rem;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 1.5rem;
  }

  .margin-top {
    margin-top: 1.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
`

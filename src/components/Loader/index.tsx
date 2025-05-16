import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles'
import * as S from './styles'

const Loader = () => {
  return (
    <S.Container>
      <PacmanLoader color={colors.white} />
    </S.Container>
  )
}
export default Loader

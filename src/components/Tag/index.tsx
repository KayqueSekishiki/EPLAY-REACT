import * as S from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ size = 'small', children }: Props) => (
  <S.TagContainer size={size}>{children}</S.TagContainer>
)

export default Tag

import Section from '../Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'

import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type GalleyItem = {
  type: 'image' | 'video'
  url: string
}
const mock: GalleyItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ'
  }
]

type Props = {
  name: string
  defaultCover: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleyItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleyItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Ícone de fechar" />
          </header>
          <img src={spiderman} alt="Iamgem do jogo" />
        </ModalContent>
        <div className="overlay" />
      </Modal>
    </>
  )
}

export default Gallery

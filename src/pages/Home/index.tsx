import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: sale } = useGetOnSaleQuery()
  const { data: soon } = useGetSoonQuery()

  if (sale && soon) {
    return (
      <>
        <Banner />
        <ProductList games={sale} title="Promoções" background="gray" />
        <ProductList games={soon} title="Em Breve" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home

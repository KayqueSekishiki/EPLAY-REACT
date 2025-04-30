import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

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
  const [sale, setSale] = useState<Game[]>([])
  const [soon, setSoon] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes').then((res) =>
      res.json().then((res) => setSale(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve').then((res) =>
      res.json().then((res) => setSoon(res))
    )
  }, [])

  return (
    <>
      <Banner />
      <ProductList games={sale} title="Promoções" background="gray" />
      <ProductList games={soon} title="Em Breve" background="black" />
    </>
  )
}

export default Home

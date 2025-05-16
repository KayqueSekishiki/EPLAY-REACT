import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: sale, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soon, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        games={sale}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductList
        games={soon}
        title="Em Breve"
        background="black"
        id="soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home

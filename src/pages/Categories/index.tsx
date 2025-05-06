import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAction } = useGetActionGamesQuery()
  const { data: gamesSports } = useGetSportGamesQuery()
  const { data: gamesSimulation } = useGetSimulationGamesQuery()
  const { data: gamesFight } = useGetFightGamesQuery()
  const { data: gamesRPG } = useGetRPGGamesQuery()

  if (gamesAction && gamesSports && gamesSimulation && gamesFight && gamesRPG) {
    return (
      <>
        <ProductList games={gamesAction} title="Ação" background="gray" />
        <ProductList games={gamesSports} title="Esportes" background="black" />
        <ProductList
          games={gamesSimulation}
          title="Simulação"
          background="gray"
        />
        <ProductList games={gamesFight} title="Luta" background="black" />
        <ProductList games={gamesRPG} title="RPG" background="gray" />
        <ProductList
          games={[]}
          title="Em Breve Novas Categorias"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Categories

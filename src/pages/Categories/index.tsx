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
        <ProductList
          id="action"
          games={gamesAction}
          title="Ação"
          background="gray"
        />
        <ProductList
          id="sports"
          games={gamesSports}
          title="Esportes"
          background="black"
        />
        <ProductList
          id="simulation"
          games={gamesSimulation}
          title="Simulação"
          background="gray"
        />
        <ProductList
          id="fight"
          games={gamesFight}
          title="Luta"
          background="black"
        />
        <ProductList id="rpg" games={gamesRPG} title="RPG" background="gray" />
        <ProductList
          id="em-breve"
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

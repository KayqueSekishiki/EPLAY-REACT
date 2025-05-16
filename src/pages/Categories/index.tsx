import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAction, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesSports, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: gamesSimulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesFight, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: gamesRPG, isLoading: isLoadingRPG } = useGetRPGGamesQuery()

  return (
    <>
      <ProductList
        id="action"
        games={gamesAction}
        title="Ação"
        background="gray"
        isLoading={isLoadingAction}
      />
      <ProductList
        id="sports"
        games={gamesSports}
        title="Esportes"
        background="black"
        isLoading={isLoadingSports}
      />
      <ProductList
        id="simulation"
        games={gamesSimulation}
        title="Simulação"
        background="gray"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        id="fight"
        games={gamesFight}
        title="Luta"
        background="black"
        isLoading={isLoadingFight}
      />
      <ProductList
        id="rpg"
        games={gamesRPG}
        title="RPG"
        background="gray"
        isLoading={isLoadingRPG}
      />
      <ProductList
        id="em-breve"
        games={[]}
        title=""
        background="black"
        isLoading={false}
      />
    </>
  )
}

export default Categories

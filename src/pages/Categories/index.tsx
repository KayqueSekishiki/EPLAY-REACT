import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao').then((res) =>
      res.json().then((res) => setGamesAction(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes').then((res) =>
      res.json().then((res) => setGamesSports(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao').then((res) =>
      res.json().then((res) => setGamesSimulation(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta').then((res) =>
      res.json().then((res) => setGamesFight(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg').then((res) =>
      res.json().then((res) => setGamesRPG(res))
    )
  }, [])

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
export default Categories

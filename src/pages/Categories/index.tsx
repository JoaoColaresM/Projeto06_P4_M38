import ProductsList from "../../components/ProductsList"
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportnGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportnGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList games={actionGames} title='Ação' background='gray' id="action" />
        <ProductsList games={sportnGames} title='Esportes' background='black' id="sports" />
        <ProductsList games={fightGames} title='Luta' background='gray' id="fight" />
        <ProductsList games={rpgGames} title='rpg' background='black' id="rpg" />
        <ProductsList games={simulationGames} title='Simulação' background='gray' id="simulation" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
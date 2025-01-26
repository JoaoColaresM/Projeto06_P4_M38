import ProductsList from "../../components/ProductsList"

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isloadingAction } = useGetActionGamesQuery()
  const { data: sportnGames, isLoading: isloadingSport } = useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isloadingSimulation } = useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isloadingFight } = useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isloadingRpg } = useGetRpgGamesQuery()

    return (
      <>
        <ProductsList games={actionGames} title='Ação' background='gray' id="action" isLoading= {isloadingAction} />
        <ProductsList games={sportnGames} title='Esportes' background='black' id="sports" isLoading= {isloadingSport} />
        <ProductsList games={fightGames} title='Luta' background='gray' id="fight" isLoading= {isloadingFight} />
        <ProductsList games={rpgGames} title='rpg' background='black' id="rpg" isLoading= {isloadingRpg} />
        <ProductsList games={simulationGames} title='Simulação' background='gray' id="simulation" isLoading= {isloadingSimulation} />
      </>
    )
  }

export default Categories
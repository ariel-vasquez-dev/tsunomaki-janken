import { Layout } from '../layouts'
import { Game, HeadSeo } from '../components'
import { GameProvider } from '../context/GameProvider'

export default function GamePage() {
  return (
    <>
      <HeadSeo
        title={'Tsunomaki Janken | Game'}
      />

      <Layout>
        <GameProvider>
          <Game />
        </GameProvider>
      </Layout>
    </>
  )
}

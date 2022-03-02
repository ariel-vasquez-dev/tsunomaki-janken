import Link from 'next/link'
import { Hero, HeadSeo, MessagesGrid } from '../components'
import { Layout } from '../layouts'

export default function MessagePage() {
  return (
    <>
      <HeadSeo
        title={'Tsunomaki Janken | Message'}
      />

      <Layout>
        {/* <img src="/img/backgrounds/watame-yellow.jpeg" alt ='Watame' /> */}

        <MessagesGrid />
      </Layout>
    </>
  )
}

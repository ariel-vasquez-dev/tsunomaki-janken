import { HeadSeo, MessagesGrid } from '../components'
import { Layout } from '../layouts'

export default function MessagePage() {
  return (
    <>
      <HeadSeo
        title={'Tsunomaki Janken | Message'}
      />

      <Layout>
        <MessagesGrid />
      </Layout>
    </>
  )
}

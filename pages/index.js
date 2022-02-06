import Link from 'next/link'
import { Hero, HeadSeo } from '../components'
import { Layout } from '../layouts'

export default function HomePage() {
  return (
    <>
      <HeadSeo
        title={'Tsunomaki Janken | Home'}
      />

      <Layout>
        <Hero />
      </Layout>
    </>
  )
}

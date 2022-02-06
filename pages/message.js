import Link from 'next/link'
import { Hero, HeadSeo } from '../components'
import { Layout } from '../layouts'

export default function MessagePage() {
  return (
    <>
      <HeadSeo
        title={'Tsunomaki Janken | Message'}
      />

      <Layout>
        <p>Tsunomaki Janken | Message</p>
        <img src="https://somoskudasai.com/wp-content/uploads/2020/03/portada_higurashi-2020-31-mar.jpg" />

        <Link href="/">
          <a>home</a>
        </Link>

      </Layout>
    </>
  )
}

import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'

//import { posts as localPosts } from 'pages/data/posts' // ローカルのpostsデータをインポート

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import { getImageBuffer } from 'lib/getImageBuffer'

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />

      <Hero 
        title="Pickleball Club" 
        subtitle="楽しく交流できるピックルボールクラブ！初心者歓迎！体験レッスン受付中！" 
        sentence="私たちの使命は、ピックルボールの普及と認知度の向上に努めることです。より多くのコートを設置し、コミュニティイベントを開催することで、あらゆる年齢や技術レベルのプレーヤーが楽しみ、上達できる環境を提供いたします。" 
        isHomePage
      />

      
      <Posts posts={posts} />
      <Pagination nextUrl="/event" nextText="More Posts" />

    </Container>
  )
}
export async function getStaticProps() {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
/*
export async function getStaticProps() {
  const posts = localPosts; // ローカルのpostsデータを使用

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}

*/
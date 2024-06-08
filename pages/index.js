import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import NewsList from 'components/newslist'
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
        title="Pickle" 
        subtitle="Welcome to Pickleball Club" 
        sentence="Our mission is to promote the sport of pickleball by increasing its accessibility and awareness. We aim to establish more courts, organize community events, and provide resources for players of all ages and skill levels to improve their game and enjoy the benefits of this fast-growing sport. Through partnerships with local schools and community centers, we strive to introduce pickleball to a wider audience and foster a community that values health, wellness, and social interaction." 
        isHomePage
      />

      <NewsList posts={posts} />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />

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
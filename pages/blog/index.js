import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from "components/hero"
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import { getImageBuffer } from 'lib/getImageBuffer'

export default function Blog({ posts }) {
    return (
    <Container>
        <Meta pageTitle="イベント情報" pageDesc="イベントの記事一覧" />
        <Hero title="イベント" subtitle="当社では、ピックルボールを通じた交流や地域活性化を目的とした各種イベントの企画・運営を行っております。" />

        <Posts posts={posts} />
    </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()
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
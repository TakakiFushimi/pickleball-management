import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'
import styles from 'styles/Home.module.css' // CSSファイルをインポート

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

      {/* サービス紹介 */}
      <section className={styles.serviceSection}>
        {/* 個人向けサービス */}
        <div className={styles.serviceCard + ' ' + styles.individualService}>
          <h2 className={styles.serviceTitle}>個人向けレッスン</h2>
          <p className={styles.serviceDescription}>
            初心者から上級者まで、楽しみながらスキルアップできるプログラムを提供します。
          </p>
          <ul className={styles.serviceList}>
            <li>初心者向けレッスン（体験レッスンあり）</li>
            <li>定期的なクラブ交流会</li>
            <li>健康維持を目的としたプレイセッション</li>
          </ul>
        </div>

        {/* 法人向けサービス */}
        <div className={styles.serviceCard + ' ' + styles.businessService}>
          <h2 className={styles.serviceTitle}>法人向けレッスン</h2>
          <p className={styles.serviceDescription}>
            企業の健康経営をサポートし、従業員の心身のリフレッシュを促進します。
          </p>
          <ul className={styles.serviceList}>
            <li>企業向けピックルボール研修</li>
            <li>チームビルディングイベント</li>
            <li>健康プログラムとの連携</li>
          </ul>
        </div>
      </section>

      {/* 参加の流れ */}
      <section className={styles.flowSection}>
        <h2 className={styles.flowTitle}>ご利用の流れ</h2>
        <div className={styles.flowGrid}>
          <div className={styles.flowStep}>
            <h3>① お問い合わせ</h3>
            <p>まずはお気軽にお問い合わせください。</p>
          </div>
          <div className={styles.flowStep}>
            <h3>② 体験レッスン</h3>
            <p>個人・法人向けに無料体験レッスンをご用意。</p>
          </div>
          <div className={styles.flowStep}>
            <h3>③ 参加・契約</h3>
            <p>お客様のニーズに合わせたプランでご参加いただけます。</p>
          </div>
        </div>
      </section>

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
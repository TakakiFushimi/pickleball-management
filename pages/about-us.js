import Meta from 'components/meta'
import Container from 'components/container'
import Hero from "components/hero";
import PostBody from 'components/post-body';
import Contact from 'components/contact';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
import whatis from 'images/image_play3.png'
import Link from 'next/link'

export default function Whatispickleball() {
    return (
        <Container>
            <Meta
             pageTitle="私たちについて"
             pageDesc="ピックルボールは、テニス、バドミントン、卓球の要素を組み合わせた楽しくてエキサイティングなスポーツです。小さなコートで行われるため、初心者でも簡単に始められ、すぐに上達を感じられます。プレーにはパドルとプラスチック製のボールを使用し、ネットを挟んで相手とラリーを楽しみます。老若男女問わず楽しめるこのスポーツは、軽い運動と社交を兼ね備えており、健康維持や新しい友人作りにも最適です。"
             pageImg={whatis.src}
             pageImgW={whatis.width}
             pageImgH={whatis.height}
            />

            <Hero title="私たちについて" subtitle="" />
            
            <figure>
                <Image
                src={whatis}
                alt=""
                layout="responsive"
                sizes="(min-width: 1152px) 1152px, 100vw"
                priority
                placeholder="blur"
                />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                <PostBody>
                    
                    <h2>ピックルボール発祥</h2>
                    <p>
                    ピックルボールは1965年、アメリカのワシントン州バインブリッジ島で誕生しました。ジョエル・プリチャード、ビル・ベル、バーニー・マコーラムの3人が、子供たちのために即席のゲームとして考案したのが始まりです。バドミントンのネット、卓球のパドル、穴あきプラスチックボールを使って遊び始めたこのゲームが、やがて「ピックルボール」として広まっていきました。
                    </p>
                    <h2>ピックルボールとは</h2>
                    <p>
                    ピックルボールは、テニス、バドミントン、卓球の要素を組み合わせた楽しくてエキサイティングなスポーツです。小さなコートで行われるため、初心者でも簡単に始められ、すぐに上達を感じられます。プレーにはパドルとプラスチック製のボールを使用し、ネットを挟んで相手とラリーを楽しみます。老若男女問わず楽しめるこのスポーツは、軽い運動と社交を兼ね備えており、健康維持や新しい友人作りにも最適です。急速に人気が高まりつつあるピックルボールを、ぜひ体験してみてください。
                    </p>
                    <h2>ピックルボールの現在</h2>
                    <p>
                    ピックルボールは近年、特にアメリカ合衆国で急速に人気を集めています。2023年の時点で、全米ピックルボール協会（USA Pickleball）の報告によると、アメリカ国内でのピックルボールのプレイヤー数は約450万人に達しています。この数字は過去数年で大幅に増加しており、ピックルボールは最も急成長しているスポーツの一つとされています。
                    </p>

                    <h2>ピックルボールの試合形式</h2>
                    <p>ピックルボールの試合形式は、以下の４つがあります。珍しいことにピックルボールではシングルスよりもダブルスの方が盛んです。</p>
                    <ul>
                        <li>男子シングルス</li>
                        <li>男子ダブルス</li>
                        <li>女子ダブルス</li>
                        <li>女子シングルス</li>
                        <li>ミックスダブルス</li>
                    </ul>

                    <h2>ピックルボールの簡単ルール</h2>
                    <h3>基本ルール</h3>
                    <ul>
                        <li><strong>クラス分け</strong>: 年齢別、男子ダブルス、女子ダブルス、ミックスダブルス</li>
                        <li><strong>得点</strong>: サーバーのみ得点、11点先取（2点差必要）</li>
                        <li><strong>ゲーム数</strong>: 通常3ゲームで2ゲーム先取</li>
                    </ul>
                    
                    <h3>サーブ</h3>
                    <ul>
                        <li>ベースラインの後ろからアンダーハンド</li>
                        <li>対角線のサービスコートに入れる</li>
                        <li>サーブとリターンは1回バウンドさせる</li>
                    </ul>
                    
                    <h3>特別ルール</h3>
                    <ul>
                        <li><strong>ノンボレーゾーン</strong>: ボレー禁止</li>
                        <li><strong>コートチェンジ</strong>: 得点ごとにサーバーが左右交代</li>
                    </ul>
                    
                    <h3>シングルス</h3>
                    <ul>
                        <li>ダブルスと同じルール</li>
                        <li>偶数得点は右側、奇数得点は左側からサーブ</li>
                    </ul>
                    
                    <li>
                    より詳細なルールについては<span className="url"><Link href="/rule" >こちら</Link></span>
                    </li>
                    
                </PostBody>
                </TwoColumnMain>
                
                <TwoColumnSidebar>
                <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
        )
}
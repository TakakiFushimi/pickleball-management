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

            <Hero title="私たちについて" subtitle="私たちは、ピックルボールを通じて、より多くの人々に楽しく健康的なライフスタイルを提供していきます。" />
            
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
                    
                    <h2>ピックルボールを通じて、より豊かなライフスタイルを</h2>
                    <p>
                    私たちは、誰もが気軽に楽しめるピックルボールを通じて、人々のライフスタイルをより豊かにすることを目指しています。企業向けの大会やイベントを開催し、スポーツを通じた交流の場を提供。ピックルボールをプレイすることで、同僚や仲間とのコミュニケーションを深め、より良い関係を築く機会を創出します。
                    </p>
                    <h2>ピックルボールの普及と新たなつながりの創出</h2>
                    <p>
                    ピックルボールの魅力をより多くの人に伝えることが私たちの使命です。初心者でも気軽に楽しめる手軽さ、適度な運動量、そしてチームワークの向上につながる要素を活かし、スポーツを通じた新たなつながりを生み出していきます。
                    </p>
                    <h2>幅広い世代が楽しめるスポーツ</h2>
                    <p>
                    ピックルボールは、シンプルなルールで初心者でもすぐにプレイできることが特徴です。ラケットスポーツの要素を持ちながらも、適度な運動量で幅広い世代が楽しめるスポーツとして注目されています。チームプレイを通じて自然とコミュニケーションが生まれ、仲間との絆を深めることができます。
                    </p>

                    
                </PostBody>
                </TwoColumnMain>
                
                <TwoColumnSidebar>
                <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
        )
}
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from "components/hero";
import PostBody from 'components/post-body';
import Contact from 'components/contact';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
import whatis from 'images/image_play3.png'


export default function Rule() {
    return (
        <Container>
            <Meta
             pageTitle="ピックルボールのルール"
             pageDesc="ピックルボールは、テニス、バドミントン、卓球の要素を組み合わせた楽しくてエキサイティングなスポーツです。小さなコートで行われるため、初心者でも簡単に始められ、すぐに上達を感じられます。プレーにはパドルとプラスチック製のボールを使用し、ネットを挟んで相手とラリーを楽しみます。老若男女問わず楽しめるこのスポーツは、軽い運動と社交を兼ね備えており、健康維持や新しい友人作りにも最適です。"
             pageImg={whatis.src}
             pageImgW={whatis.width}
             pageImgH={whatis.height}
            />

            <Hero title="ピックルボールのルール" subtitle="" />
            
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
                    
                    <h2>基本</h2>
                    <ul>
                        <li><strong>サーブ</strong>：アンダーサーブでベースラインの後ろから行います。サーブは対角線上の反対のサービスコートを狙います。</li>
                        <li><strong>交互にサーブ</strong>：右側から左側へと交互にサーブします。</li>
                        <li><strong>バウンドルール</strong>：サーブとサーブのリターンに対する返球は、打つ前に1回バウンドさせなければなりません。その後はボレーでもバウンドさせて返球しても構いません。</li>
                        <li><strong>ノンボレーゾーン</strong>：ノンボレーゾーンに入ってボレーを打ってはいけません。</li>
                        <li><strong>得点</strong>：サーバーにしか点数が入りません。相手がリターンをネットに引っ掛けたり、コートに入らなかったり、返球できなかった時に点数が入ります。</li>
                        <li><strong>ゲームの終了</strong>：1人のプレーヤーかチームが11点先取したら終了となります。10-10になった場合は、2点以上差をつけたプレーヤー、またはチームの勝利となります。</li>
                        <li><strong>セットマッチ</strong>：通常は3ゲームで行われ、2ゲームを先取した方が勝利となります。</li>
                    </ul>
                    
                    <h2>詳細</h2>
                    <h3>得点と勝敗</h3>
                    <ul>
                        <li>サーブ権がある時のみ得点することができます。</li>
                        <li>ライン上に落ちたボールはセーフです。</li>
                        <li>サーブをしているプレーヤーは自チームがミスするまでサーブを続けます。</li>
                        <li>1ゲームの勝敗は11点先取（15点の場合もある）で、10対10の時は2点差がつくまで行います。3セットマッチで2セット先取した方が勝ちです。</li>
                    </ul>
                    
                    <h3>サーブ</h3>
                    <ul>
                        <li>ベースラインの後ろからアンダーハンドで行います。</li>
                        <li>ラケットはウエストより下で振り、打点は手首より下で行います。</li>
                        <li>ボールをバウンドさせずにサーブします。</li>
                        <li>サーブはコートを対角線に横切ってノンボレーゾーンを越え、相手のサービスコートに入れます。</li>
                        <li>サーブは一度だけ行うことができます。但しボールがネットに触れて相手のサービスコートに落ちた場合は、もう一度サーブすることができます。</li>
                        <li>ゲーム開始時、または一方のチームがサーブ権を得た時の最初のサーブは常に右側のサービスコートから行います。</li>
                    </ul>
                    
                    <h3>コートチェンジ</h3>
                    <ul>
                        <li>自チームがショットを決めたり、レシーブチームがミスした場合にサービスチームが1点獲得します。その次のサーブは同じ人がコートを替えて（左右に移動）再びサーブします。</li>
                        <li>サービスチームがミスした場合はサーブを行った人のパートナーがサーブを行います。この時のコートはそのままです。得点を上げた時のみコートチェンジが生じます。</li>
                        <li>ゲーム開始時のみサーブ権を持つチームは、一人しかサーブすることができません。</li>
                    </ul>
                    
                    <h3>ボレー</h3>
                    <ul>
                        <li>ボレーは、ノンボレーゾーンの後ろで行います。ノンボレーゾーンに入ってボレーしてはいけません。</li>
                    </ul>
                    
                    <h3>2バウンズルール</h3>
                    <ul>
                        <li>サービス直後の1ラリーは、ボールをバウンドさせてから打たなければなりません。即ちレシーブチームはサーブされたボールを、サービスチームはリターンされたボールを、一度バウンドさせてから打たなければなりません。これを2バウンドルールと言います。</li>
                        <li>2バウンドが終われば、ボレーでもバウンドしたボールでも打つことができます。</li>
                    </ul>
                    
                    <h3>シングルス</h3>
                    <ul>
                        <li>シングルスもダブルスのルールが全て適用されますが、サーブは1球ずつで自分の得点が0か偶数の時は、右側のコートからサーブします。それ以外の場合は、左側のコートからサーブします。</li>
                    </ul>
                

                </PostBody>
                </TwoColumnMain>
                
                <TwoColumnSidebar>
                <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
        )
}
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from "components/hero";
import PostBody from 'components/post-body';
import Contact from 'components/contact';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
import contact from 'images/icon_logo3_green_small.png'


export default function Form() {
    return (
        <Container>
            <Meta
             pageTitle="お問い合わせ"
             pageDesc="お問い合わせ方法について"
             pageImg={contact.src}
             pageImgW={contact.width}
             pageImgH={contact.height}
            />

            <Hero title="お問い合わせ" subtitle="お気軽にご連絡ください" />
            
            <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-6">お問い合わせ方法</h2>
                <p className="text-gray-700 mb-4">お問い合わせは以下の方法で受け付けております。</p>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                        <img src="/instagram-logo.png" alt="Instagram" className="w-6 h-6" />
                        <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:underline">Instagramでお問い合わせ</a>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2">
                        <img src="/gmail-logo.png" alt="Gmail" className="w-6 h-6" />
                        <a href="mailto:your_email@gmail.com" className="text-blue-500 font-semibold hover:underline">Gmailでお問い合わせ</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

/*
<h2>よくある質問（FAQ）</h2>
                    <Accordion heading="ピックルボールの魅力について">
                    <p>
                    ピックルボールは、シンプルなルールで誰でも気軽に楽しめるスポーツです。初心者でもすぐにプレイでき、適度な運動量で健康維持にも最適です。
                    </p>
                    </Accordion>
                    <Accordion heading="初心者向けレッスンについて">
                    <p>
                    初心者向けレッスンでは、基本ルールやラケットの扱い方から丁寧に指導します。体験レッスンもご用意していますので、ぜひお気軽にご参加ください。
                    </p>
                    </Accordion>
                    <Accordion heading="企業向けピックルボールの活用">
                    <p>
                    企業研修やチームビルディングイベントとしてピックルボールを活用することで、従業員同士のコミュニケーション向上や健康促進に貢献します。
                    </p>
                    </Accordion>
*/
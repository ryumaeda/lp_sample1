import Image from "next/image";
import { ChevronRight, Mail, Phone } from "lucide-react";
import { Noto_Sans_JP } from "next/font/google";

import { Button } from "@/components/ui/button";
import NewsCard from "@/components/news-card";
import ServiceCard from "@/components/service-card";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-white ${notoSansJP.className}`}>
      {/* ヘッダー */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-emerald-800">
                Sample
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex gap-6">
                {["トップ", "クオリティ", "事業内容", "企業情報", "連絡先"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>

              <div className="flex items-center gap-4 text-sm">
                <a
                  href="tel:0120-123-456"
                  className="flex items-center gap-2 text-emerald-700 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  0120-123-456
                </a>
                <a
                  href="mailto:info@hoge.com"
                  className="flex items-center gap-2 text-emerald-700 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  info@hoge.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-emerald-800 p-12 text-white shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                未来の世代のために
                <br />
                <span className="text-emerald-300">自然を守る</span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 mb-8 font-light">
                私たちの使命はここにあります
              </p>
              <Button
                size="lg"
                className="bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
              >
                もっと知る
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <Image
                src="/images/hero-environment.jpg"
                alt="豊かな自然"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ニュース */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald-800">
            お知らせ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                date: "2019.11.12",
                title: "ISO9001品質マネジメントシステム認証取得",
                description:
                  "サービス品質向上のため、国際規格の認証を取得いたしました。",
              },
              {
                date: "2018.11.04",
                title: "ISO14001環境マネジメントシステム認証取得",
                description:
                  "環境保全への取り組みとして、国際規格の認証を取得いたしました。",
              },
              {
                date: "2017.3.04",
                title: "ISO27001情報セキュリティマネジメントシステム認証取得",
                description:
                  "情報管理体制の強化のため、情報セキュリティの国際規格認証を取得いたしました。",
              },
              {
                date: "2016.09.01",
                title: "増資のお知らせ",
                description:
                  "事業規模拡大に伴い、資本金を9,000万円に増資いたしました。",
              },
            ].map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald-800">
            事業内容
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ビルメンテナンス",
                description:
                  "プロフェッショナルによる清掃で、理想的な職場環境を創造します。",
                image: "/images/office-cleaning.jpg",
              },
              {
                title: "エコ洗剤の使用",
                description:
                  "環境に配慮した洗剤を採用し、地球環境への負担を最小限に抑えます。",
                image: "/images/eco-friendly-cleaning.jpg",
              },
              {
                title: "年中無休対応",
                description:
                  "24時間365日、お客様のニーズに迅速に対応いたします。",
                image: "/images/24-hour-support.jpg",
              },
            ].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 企業情報 */}
      <section className="py-20 px-4 bg-emerald-800 text-white relative">
        <Image
          src="/images/about-background.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">企業理念</h2>
            <p className="text-emerald-100 leading-relaxed mb-12 text-lg">
              商業施設から住宅まで、培ってきた専門技術とノウハウを活用し、
              常に『期待以上のサービス』を提供し続けます。
              また、『人と環境にやさしい』という理念のもと、使用する製品や資材にも
              徹底的にこだわっています。これが私たちの考えるサービス品質です。
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-black border-white hover:bg-emerald-700"
            >
              企業情報を見る
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-emerald-900 text-emerald-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Sample</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-8">
              {["トップ", "クオリティ", "事業内容", "企業情報", "連絡先"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-800 text-center text-emerald-400 text-sm">
            © 2024 Sample. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

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
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-emerald-800">
                moscom
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex gap-6">
                {["ホーム", "品質", "サービス", "会社概要", "お問い合わせ"].map(
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-emerald-800 p-12 text-white shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                次世代へ、この美しい
                <br />
                <span className="text-emerald-300">環境を残す</span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 mb-8 font-light">
                それがモスコムの最大の取り組みです
              </p>
              <Button
                size="lg"
                className="bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
              >
                詳しく見る
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <Image
                src="/images/hero-environment.jpg"
                alt="美しい自然環境"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald-800">
            最新のトピックス
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                date: "2021.10.04",
                title: "品質マネジメントシステム ISO9001の認証を取得",
                description:
                  "お客様により高品質なサービスを提供するため、国際規格の認証を取得しました。",
              },
              {
                date: "2021.10.04",
                title: "環境マネジメントシステム ISO14001の認証を取得",
                description:
                  "環境に配慮した事業活動を推進するため、国際規格の認証を取得しました。",
              },
              {
                date: "2021.10.04",
                title:
                  "情報セキュリティーマネジメントシステム ISO27001の認証を取得",
                description:
                  "お客様の大切な情報を守るため、情報セキュリティの国際規格認証を取得しました。",
              },
              {
                date: "2018.09.01",
                title: "資本金 5,000万円に増資",
                description:
                  "事業拡大に伴い、さらなるサービス向上と安定した経営基盤の構築を目指します。",
              },
            ].map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald-800">
            私たちのサービス
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "オフィスクリーニング",
                description:
                  "プロフェッショナルな清掃サービスで、快適なワークスペースを実現します。",
                image: "/images/office-cleaning.jpg",
              },
              {
                title: "環境に優しい洗剤",
                description:
                  "地球に優しい洗剤を使用し、環境負荷を最小限に抑えます。",
                image: "/images/eco-friendly-cleaning.jpg",
              },
              {
                title: "24時間サポート",
                description:
                  "緊急時にも対応可能な24時間体制のサポートを提供しています。",
                image: "/images/24-hour-support.jpg",
              },
            ].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-emerald-800 text-white relative">
        <Image
          src="/images/about-background.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">モスコムについて</h2>
            <p className="text-emerald-100 leading-relaxed mb-12 text-lg">
              オフィスビルから一般家庭まで、長年築いてきた管理・清掃ノウハウを活かし、
              これからも『お客様の期待120%の働く良き求人』を続けて参ります。
              さらに、『人や地球にとって、安心』をモットーに使用する資材、洗剤等においても
              こだわり抜いております。これこそが、モスコムの目指すホスピタリティーです。
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-black border-white hover:bg-emerald-700"
            >
              会社概要を見る
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">moscom</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-8">
              {["ホーム", "品質", "サービス", "会社概要", "お問い合わせ"].map(
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
            © 2024 Ryu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

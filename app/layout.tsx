import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moscom - 次世代へ、この美しい環境を残す',
  description: 'モスコムは、オフィスビルから一般家庭まで、長年築いてきた管理・清掃ノウハウを活かし、環境に配慮したサービスを提供しています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}


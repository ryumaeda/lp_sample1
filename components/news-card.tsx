import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'

interface NewsCardProps {
  date: string
  title: string
  description: string
}

export default function NewsCard({ date, title, description }: NewsCardProps) {
  return (
    <Card className="group hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <time className="text-sm text-emerald-600 font-medium mb-2 block">{date}</time>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-emerald-600 font-medium">
          詳細を見る
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </CardContent>
    </Card>
  )
}


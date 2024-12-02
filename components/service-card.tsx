import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}


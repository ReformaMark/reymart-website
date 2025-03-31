"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Info, ChevronRight } from "lucide-react"

interface CarCardProps {
  car: {
    id: number
    name: string
    price: string
    badge?: string
    features: string[]
  }
  index: number
}

export default function AnimatedCarCard({ car, index }: CarCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full border-0 shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.4 }}>
            <Image src={"/next.svg"} alt={car.name} fill className="object-cover" />
          </motion.div>
          {car.badge && <Badge className="absolute top-2 right-2 bg-red-600">{car.badge}</Badge>}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white text-sm">View Details</span>
            <ChevronRight className="h-4 w-4 text-white" />
          </motion.div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-1">{car.name}</h3>
          <p className="text-lg font-semibold text-red-600 mb-3">{car.price}</p>
          <ul className="mb-4 space-y-1">
            {car.features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Info className="h-3 w-3 mr-2 text-gray-400" />
                {feature}
              </motion.li>
            ))}
          </ul>
          <div className="flex gap-2 mt-auto">
            <Button className="flex-1 bg-red-600 hover:bg-red-700">Inquire Now</Button>
            <Button variant="outline" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


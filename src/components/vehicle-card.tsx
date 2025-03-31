"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Info, ChevronRight, Calendar, Fuel, Gauge } from "lucide-react"
import Link from "next/link"

interface VehicleCardProps {
  vehicle: {
    id: number
    name: string
    price: string
    image: string
    badge?: string
    features: string[]
    year: string
    transmission: string
    fuelType: string
    mileage: string
    bodyType: string
    color: string
    availability: string
  }
  index: number
}

export default function VehicleCard({ vehicle, index }: VehicleCardProps) {
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
            <Image src={vehicle.image || "/next.svg"} alt={vehicle.name} fill className="object-cover" />
          </motion.div>
          {vehicle.badge && <Badge className="absolute top-2 right-2 bg-red-600">{vehicle.badge}</Badge>}
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
            <Link href={`/inventory/${vehicle.id}`} className="text-white text-sm hover:underline">
              View Details
            </Link>
            <ChevronRight className="h-4 w-4 text-white" />
          </motion.div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold mb-1 line-clamp-1">{vehicle.name}</h3>
          <p className="text-lg font-semibold text-red-600 mb-3">{vehicle.price}</p>

          <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <Calendar className="h-3.5 w-3.5 text-gray-400" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Gauge className="h-3.5 w-3.5 text-gray-400" />
              <span>{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Fuel className="h-3.5 w-3.5 text-gray-400" />
              <span>{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Info className="h-3.5 w-3.5 text-gray-400" />
              <span>{vehicle.bodyType}</span>
            </div>
          </div>

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


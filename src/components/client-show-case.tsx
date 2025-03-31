"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Quote } from "lucide-react"

// Sample testimonial data
type Testimonial = {
    id: number
    name: string
    vehicle: string
    image: string
    quote: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Marco Santos",
        vehicle: "Mitsubishi Montero Sport",
        image: "/images/client-1.jpg",
        quote: "Reymart made the car buying process so smooth. He found exactly what I was looking for!",
        rating: 5,
    },
    {
        id: 2,
        name: "Anna Reyes",
        vehicle: "Mitsubishi Xpander",
        image: "/images/client-2.jpg",
        quote: "As a first-time car buyer, I appreciated Reymart's patience and expertise. Highly recommended!",
        rating: 5,
    },
    {
        id: 3,
        name: "Carlos Mendoza",
        vehicle: "Mitsubishi Strada",
        image: "/images/client-3.jpg",
        quote: "The best car buying experience I've ever had. Reymart is knowledgeable and professional.",
        rating: 5,
    },
    {
        id: 4,
        name: "Maria Lim",
        vehicle: "Mitsubishi Mirage G4",
        image: "/images/client-4.jpg",
        quote: "Reymart helped me find the perfect car for my daily commute. I couldn't be happier!",
        rating: 5,
    },
    {
        id: 5,
        name: "David Tan",
        vehicle: "Mitsubishi Montero Sport",
        image: "/images/client-5.jpg",
        quote: "Excellent service from start to finish. Reymart went above and beyond to meet my needs.",
        rating: 5,
    },
]

export default function ClientShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Happy Clients, New Rides</h2>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          See the smiles of satisfied customers with their brand new Mitsubishi vehicles. Join them today!
        </p>
      </motion.div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.slice(3, 5).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="" />
            <CarouselNext className="" />
          </div>
        </Carousel>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium text-lg"
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.5)" }}
            transition={{ duration: 0.2 }}
          >
            Join Our Happy Clients
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

function TestimonialCard({ testimonial }: {
    testimonial: Testimonial
}) {
  return (
    <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={ "/next.svg"}
          alt={`${testimonial.name} with their new ${testimonial.vehicle}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Badge className="bg-red-600 mb-2">{testimonial.vehicle}</Badge>
          <h3 className="text-white font-bold">{testimonial.name}</h3>
        </div>
      </div>
      <CardContent className="p-4 relative">
        <div className="absolute -top-5 right-4 bg-white rounded-full p-1 shadow-md">
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <div className="pt-2 flex gap-2">
          <Quote className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
          <p className="text-gray-700 italic text-sm">{testimonial.quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}


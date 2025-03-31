"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { YoutubeIcon, ChevronDown } from "lucide-react"

export default function HeroAnimation() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const scrollToVehicles = () => {
    document.getElementById("vehicles")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={ref} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image src="/hero-banner.jpg" alt="Mitsubishi Cars" fill className="object-cover brightness-[0.7]" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </motion.div>

      {/* Animated content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Image src="/mitsubishi-logo.png" alt="Mitsubishi Logo" width={60} height={60} className="h-12 w-auto" />
          <Badge variant="outline" className="text-white border-white py-1">
            Accredited Sales Executive
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Reymart Marfil
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your trusted Mitsubishi sales consultant. Helping you find the perfect vehicle for your lifestyle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group" onClick={scrollToVehicles}>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            >
              View Latest Offers
            </motion.span>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 group">
            <YoutubeIcon className="mr-2 h-5 w-5 group-hover:text-red-500 transition-colors" />
            Watch My Videos
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={scrollToVehicles}
          >
            <ChevronDown className="h-10 w-10 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function YouTubeBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[220px] bg-black/60 md:h-[280px] rounded-xl overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/agent-dealership.jpg"
          alt="Mitsubishi YouTube Channel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* YouTube branding and content */}
      <div className="absolute inset-0 size-full flex flex-col justify-center px-6 md:px-10">
        <div className="flex items-center gap-3 mb-3">
          <FaYoutube className="h-8 w-8 text-red-600" />
          <h3 className="text-lg md:text-2xl font-bold text-white">
            Mitsubishi Reymart Marfil
          </h3>
        </div>
        <p className="text-white/90 max-w-md mb-4 text-xs sm:text-sm md:text-base">
          Subscribe to my channel for the latest Mitsubishi vehicle reviews,
          walkthroughs, and special offers.
        </p>
        <div className="flex gap-3">
          <Button className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm md:text-base">
            <FaYoutube className="mr-2 h-4 w-4" />
            Subscribe Now
          </Button>

          <Link
            href="https://www.youtube.com/@donreymart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="text-white border-white bg-white/10  text-xs sm:text-sm md:text-base"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Channel
            </Button>
          </Link>
        </div>
      </div>

      {/* Agent image */}
      <div className="absolute right-6 bottom-0 top-0 w-1/3  md:w-2/5 overflow-hidden hidden md:block">
        <motion.div
          animate={{ x: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-full relative"
        >
          <Image
            src="/images/me-no-bg.png"
            alt="Reymart Marfil"
            fill
            className="object-cover object-center "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

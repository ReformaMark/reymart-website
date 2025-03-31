"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, YoutubeIcon, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import Logo from '@/../public/images/mitsubishi-logo.webp'
import LogoWhite from '@/../public/images/mitsubishi-logo-white.webp'

export default function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerVariants = {
    top: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(0px)",
      height: "80px",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      height: "70px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  }

  const logoVariants = {
    top: { scale: 1.2 },
    scrolled: { scale: 1 },
  }

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Vehicles", href: "#vehicles" },
    { name: "About Me", href: "#about" },
    { name: "Videos", href: "#videos" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
     {isDesktop ? (
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 transition-colors ${
          isScrolled ? "text-gray-900" : "text-white"
        }`}
        variants={headerVariants}
        animate={isScrolled ? "scrolled" : "top"}
        initial="top"
        transition={{ duration: 0.3 }}
      >
        <Link href="/" className="flex items-center gap-2 py-4 z-10">
          <motion.div variants={logoVariants} animate={isScrolled ? "scrolled" : "top"} transition={{ duration: 0.3 }}>
            <Image src={isScrolled ? Logo : LogoWhite} alt="Mitsubishi Logo" width={40} height={40} className="h-10 w-auto" />
          </motion.div>
          <motion.div
            animate={{
              color: isScrolled ? "#000000" : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
            className="font-semibold text-lg"
          >
            Reymart Marfil
          </motion.div>
        </Link>

       
          <>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative font-medium hover:text-red-600 transition-colors"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button
                size="sm"
                variant="outline"
                className={`gap-2 ${isScrolled ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white" : "border-white text-red-600 hover:bg-white hover:text-red-600"}`}
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                Inquire Now
              </Button>
            </div>
          </>
      </motion.header>
        ) : (
          <div className="fixed top-2 right-2 z-50 bg-white/40 rounded-lg">

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className={isScrolled ? "text-gray-900" : "text-white"}
            >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        )}
      

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/images/mitsubishi-logo.webp" alt="Mitsubishi Logo" width={40} height={40} />
                <span className="font-semibold text-lg">Reymart Marfil</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center py-2 text-lg font-medium border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto p-4 border-t">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Button>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <Facebook className="h-5 w-5 text-gray-700" />
                </Link>
                <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <Instagram className="h-5 w-5 text-gray-700" />
                </Link>
                <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <YoutubeIcon className="h-5 w-5 text-gray-700" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


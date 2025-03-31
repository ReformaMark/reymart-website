"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {MessageCircle, Phone, Mail } from "lucide-react"
import LeadForm from "@/components/lead-form"
import FeaturedCars from "@/components/featured-cars"
import YouTubeEmbed from "@/components/youtube-embed"
import AnimatedHeader from "@/components/animated-header"
import HeroSection from "@/components/hero-section"
import AnimatedSection from "@/components/animated-section"
import YouTubeBanner from "@/components/youtube-banner"
import CallModal from "@/components/call-modal"
import ClientSuccessGallery from "@/components/client-success-gallery"
import LogoWhite from '@/../public/images/mitsubishi-logo-white.webp'
import { useIsMobile } from "@/hooks/use-mobile"
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa"

export default function Home() {
  const isMobile  = useIsMobile()
  return (
    <div className="flex flex-col overflow-hidden min-h-screen">
      {/* Animated Header */}
      {isMobile ? (
        <AnimatedHeader />
      ):(
        <AnimatedHeader />
      )}

      {/* Hero Section with Agent Image */}
      <HeroSection />

      {/* About Section */}
      <section className="py-20 px-4 md:px-6 bg-white" id="about">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/agent-casual.jpg"
                alt="Reymart Marfil"
                width={500}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">About Reymart Marfil</h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 5 years of experience as a Mitsubishi sales consultant, I&apos;m dedicated to helping you find the
                perfect vehicle that matches your needs and budget.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                I pride myself on providing exceptional customer service and in-depth knowledge of the entire Mitsubishi
                lineup. Whether you&apos;re looking for a family SUV, a rugged pickup, or an efficient sedan, I&apos;m here to
                guide you through every step of the process.
              </p>
              <div className="flex flex-wrap gap-4">
                <CallModal phoneNumber="">
                  a
                </CallModal>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => (window.location.href = "mailto:reymart@mitsubishi.com")}
                >
                  <Mail className="h-4 w-4" />
                  reymart@mitsubishi.com
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50" id="vehicles">
        <div className="container mx-auto max-w-6xl">
          <FeaturedCars />
        </div>
      </section>

      {/* Client Success Gallery Section */}
      <section className="py-20 px-4 md:px-6 bg-white" id="success-stories">
        <div className="container mx-auto max-w-6xl">
          <ClientSuccessGallery />
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50" id="videos">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="">
            <h2 className="text-3xl font-bold mb-6 text-center">My YouTube Channel</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
              Subscribe to my channel for the latest vehicle reviews, walkthroughs, and special offers.
            </p>
            <YouTubeBanner />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <YouTubeEmbed  title="2023 Mitsubishi Xpander - Full Tour" />
               
          </AnimatedSection>
        </div>
      </section>

      {/* Contact/Lead Form Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-900 text-white" id="contact">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-300 mb-8">
                Interested in a specific model? Have questions about financing or trade-ins? Fill out the form and I&apos;ll
                get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Call or Text</p>
                    <p className="text-lg font-medium">+63 929 109 9329</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-lg font-medium">mitsubishi.reymart@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Messenger</p>
                    <p className="text-lg font-medium">@ReymartMarfil</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.facebook.com/reymart.marfil.14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@donreymart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <FaTiktok className="h-6 w-6" />
                </a>
                <a
                  href="youtube.com/@DonReymartTv?si=YcX4lrClfEoxSEwF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center -mt-12 mb-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                      <Image src="/images/agent-profile.jpg" alt="Reymart Marfil" fill className="object-cover" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Request Information</h3>
                  <LeadForm />
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 bg-black text-white/70">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src={LogoWhite} alt="Mitsubishi Logo" width={40} height={40} />
              <span className="text-white font-medium">Reymart Marfil | Authorized Sales Agent</span>
            </div>
            <div className="text-sm">© {new Date().getFullYear()} Reymart Marfil. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}


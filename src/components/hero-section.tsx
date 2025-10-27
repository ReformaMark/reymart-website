"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  YoutubeIcon,
  ChevronDown,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  ExternalLink,
  Car,
  Users,
  Award,
  Shield,
} from "lucide-react";
import Link from "next/link";
import LogoWhite from "@/../public/images/mitsubishi-logo-white.webp";
import Client from "@/../public/images/client.jpg";
import Client1 from "@/../public/images/client1.jpg";
import Client2 from "@/../public/images/client2.jpg";
import Client3 from "@/../public/images/client3.jpg";
import Client4 from "@/../public/images/client4.jpg";
import { useLenisScrollTo } from "@/hooks/use-lenis-scrollto";
// Sample featured client images for the rotating showcase
const featuredClients = [Client, Client1, Client2, Client3, Client4];

export default function HeroSection({
  homeRef,
  vehiclesRef,
}: {
  homeRef: React.RefObject<HTMLElement | null>;
  vehiclesRef: React.RefObject<HTMLElement | null>;
}) {
  const controls = useAnimation();
  const inView = useInView(homeRef);
  const scrollTo = useLenisScrollTo();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClickedAgent, setIsClickedAgent] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Auto-rotate client images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === featuredClients.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    {
      icon: <Car className="h-5 w-5" />,
      value: "200+",
      label: "Cars Delivered",
    },
    {
      icon: <Users className="h-5 w-5" />,
      value: "150+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="h-5 w-5" />,
      value: "5",
      label: "Years Experience",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      value: "100%",
      label: "Satisfaction",
    },
  ];

  const handleViewLatestOffers = () => {
    if (!vehiclesRef) return;
    const ref = vehiclesRef.current;
    if (!ref) return;
    scrollTo(ref, { duration: 2 });
  };

  return (
    <section
      ref={homeRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        {/* Animated accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(230, 0, 18, 0.4), transparent 70%)",
          }}
          animate={{
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <motion.div
              whileHover={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Image
                src={LogoWhite}
                alt="Mitsubishi Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
            </motion.div>
            <Badge
              variant="outline"
              className="text-white border-white/30 py-1 backdrop-blur-sm bg-white/5"
            >
              Authorized Sales Agent
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold text-white mb-4"
          >
            <span className="inline-block">
              <motion.span
                initial={{ backgroundSize: "0% 6px" }}
                animate={{ backgroundSize: "100% 6px" }}
                transition={{ duration: 1, delay: 1.2 }}
                className=" bg-gradient-to-r from-red-600 to-red-500 bg-no-repeat bg-bottom"
              >
                Reymart
              </motion.span>
            </span>{" "}
            <span className="inline-block ">Marfil</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto md:mx-0">
              Your trusted Mitsubishi sales executive. Helping you find the
              perfect vehicle for your lifestyle.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-md md:max-w-xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(230, 0, 18, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/5 transition-all duration-300"
              >
                <motion.div
                  className="flex justify-center mb-1 text-white/80"
                  whileHover={{ scale: 1.2, color: "#e60012" }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dealership Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-700">
              <div className="bg-red-900/50 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">
                  Mitsubishi Peak Motors Inc.
                </p>
                <p className="text-gray-300">
                  Jose Abad Santos Ave, San Fernando, Pampanga
                </p>
              </div>
            </div>

            <motion.div
              className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-700"
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-red-900/50 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">
                  Opening Hours
                </p>
                <p className="text-gray-300">Mon-Sat: 8:00 AM - 6:00 PM</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onHoverStart={() => setHoveredButton("offers")}
              onHoverEnd={() => setHoveredButton(null)}
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white group relative overflow-hidden"
                onClick={handleViewLatestOffers}
              >
                <motion.span
                  animate={{
                    x: hoveredButton === "offers" ? [-3, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex items-center"
                >
                  View Latest Offers
                  <motion.span
                    animate={{
                      x: hoveredButton === "offers" ? [0, 3] : 0,
                      opacity: hoveredButton === "offers" ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="ml-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.span>
              </Button>
            </motion.div>

            <Link href="#contact">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onHoverStart={() => setHoveredButton("contact")}
                onHoverEnd={() => setHoveredButton(null)}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white bg-gray-800 group relative overflow-hidden"
                >
                  <motion.span
                    animate={{
                      color:
                        hoveredButton === "contact" ? "#f87171" : "#ffffff",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex items-center"
                  >
                    <motion.span
                      animate={{
                        scale: hoveredButton === "contact" ? 1.1 : 1,
                        color:
                          hoveredButton === "contact" ? "#f87171" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                      className="mr-2"
                    >
                      <Phone className="h-5 w-5" />
                    </motion.span>
                    Contact Me
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Quick action link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-3 md:mt-6 flex flex-col items-center md:items-start"
          >
            <Link
              href="#videos"
              className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1 group"
            >
              <YoutubeIcon className="h-4 w-4" />
              <span>Watch my latest vehicle reviews</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  repeatDelay: 0.5,
                }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* Map link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-1 md:mt-3 flex flex-col items-center md:items-start"
          >
            <a
              href="https://maps.google.com/?q=Mitsubishi+Peak+Motors+Inc+Jose+Abad+Santos+Ave+San+Fernando+Pampanga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-sm flex items-center gap-1 group"
            >
              <ExternalLink className="h-3 w-3" />
              <span>View dealership on Google Maps</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/2 hidden md:flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Main agent profile image with interactive hover effect */}
          <motion.div
            className="relative w-[280px] h-[280px] md:w-[550px] md:h-[550px] rounded-full overflow-hidden"
            whileHover={{ scale: 1.03 }}
            onClick={() => setIsClickedAgent(!isClickedAgent)}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-full z-10"
              animate={{
                borderColor: isClickedAgent
                  ? [
                      "rgba(255, 255, 255, 0.2)",
                      "rgba(230, 0, 18, 0.8)",
                      "rgba(255, 255, 255, 0.2)",
                    ]
                  : "rgba(255, 255, 255, 0.2)",
              }}
              transition={{
                duration: 1.5,
                repeat: isClickedAgent ? Number.POSITIVE_INFINITY : 0,
              }}
            />

            <Image
              src="/images/me-no-bg.png"
              alt="Reymart Marfil - Mitsubishi Sales Agent"
              fill
              className="object-cover"
            />

            {/* Animated overlay on clicked */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: isClickedAgent ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-medium text-lg">
                Your Mitsubishi Expert
              </span>
            </motion.div>
          </motion.div>

          {/* Floating client images around the main profile */}

          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8, y: 50, x: -150 }}
                animate={{
                  opacity: isClickedAgent ? 1 : 0,
                  scale: isClickedAgent ? 1 : 0.8,
                  y: isClickedAgent ? -150 : 50,
                  x: isClickedAgent ? 10 : -150,
                }}
                exit={{ opacity: 0, scale: 0.8, y: 50, x: -150 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 md:w-24 md:h-24 lg:size-32 overflow-hidden border-2 border-gray-800 shadow-lg"
                style={{
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Image
                  src={featuredClients[currentImageIndex] || "/next.svg"}
                  alt="Happy Client"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="w-full text-center pb-1 text-white text-xs font-medium">
                    Happy Client
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* <div className="absolute left-1/2 -top-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50, x:50 }}
              animate={{
              opacity: isHoveringAgent ? 1 : 0,
              scale: isHoveringAgent ? 1 : 0.8,
              y: isHoveringAgent ? -50 : 50,
              x: isHoveringAgent ? -100 : 50,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-800 shadow-lg"
              style={{
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
              src={featuredClients[(currentImageIndex + 1) % featuredClients.length] || "/next.svg"}
              alt="Happy Client"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              />
            </motion.div>
            </div>

            <div className="absolute left-1/4 -top-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50, x:50 }}
              animate={{
              opacity: isHoveringAgent ? 1 : 0,
              scale: isHoveringAgent ? 1 : 0.8,
              y: isHoveringAgent ? -50 : 50,
              x: isHoveringAgent ? -100 : 50,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-800 shadow-lg"
              style={{
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
              src={featuredClients[(currentImageIndex + 2) % featuredClients.length] || "/next.svg"}
              alt="Happy Client"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              />
            </motion.div>
            </div> */}

          {/* Glowing effect behind the agent */}
          <motion.div
            className="absolute -z-10 w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(230,0,18,0.15) 0%, rgba(230,0,18,0) 70%)",
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.2, 0.15],
            }}
            transition={{
              duration: 4,
            }}
          />

          {/* Mitsubishi logo watermark */}
          <motion.div
            className="absolute -bottom-20 -right-20 opacity-5 w-64 h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Image
              src={LogoWhite}
              alt="Mitsubishi Logo Watermark"
              width={256}
              height={256}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          className="cursor-pointer"
          onClick={scrollToAbout}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="h-10 w-10 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

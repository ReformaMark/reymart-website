"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Calendar,
  MapPin,
  Car,
} from "lucide-react";
import { useLenisScrollTo } from "@/hooks/use-lenis-scrollto";

interface ClientSuccess {
  id: number;
  name: string;
  vehicle: string;

  date: string;
  location: string;
  quote: string;
  gallery: string[];
}

// Sample client success stories
const clientSuccesses = [
  {
    id: 1,
    name: "Marco Santos",
    vehicle: "Mitsubishi Montero Sport",

    date: "March 15, 2023",
    location: "Makati City",
    quote:
      "Proudest day of my life! Thanks to Reymart for making this dream come true.",
    gallery: [
      "/images/client-1-delivery.jpg",
      "/images/client-1-keys.jpg",
      "/images/client-1-family.jpg",
    ],
  },
  {
    id: 2,
    name: "Anna Reyes",
    vehicle: "Mitsubishi Xpander",

    date: "April 22, 2023",
    location: "Quezon City",
    quote:
      "Our family is so happy with our new Xpander! Perfect for our weekend trips.",
    gallery: [
      "/images/client-2-delivery.jpg",
      "/images/client-2-interior.jpg",
      "/images/client-2-family.jpg",
    ],
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    vehicle: "Mitsubishi Strada",

    date: "May 10, 2023",
    location: "Pasig City",
    quote:
      "From inquiry to delivery, Reymart made everything smooth and hassle-free!",
    gallery: [
      "/images/client-3-delivery.jpg",
      "/images/client-3-handshake.jpg",
      "/images/client-3-driving.jpg",
    ],
  },
  {
    id: 4,
    name: "Maria Lim",
    vehicle: "Mitsubishi Mirage G4",

    date: "June 5, 2023",
    location: "Taguig City",
    quote:
      "My first car ever! So grateful for Reymart's guidance throughout the process.",
    gallery: [
      "/images/client-4-delivery.jpg",
      "/images/client-4-keys.jpg",
      "/images/client-4-selfie.jpg",
    ],
  },
  {
    id: 5,
    name: "David Tan",
    vehicle: "Mitsubishi Montero Sport",

    date: "July 18, 2023",
    location: "Mandaluyong City",
    quote:
      "Second car from Reymart! That's how much I trust his service and expertise.",
    gallery: [
      "/images/client-5-delivery.jpg",
      "/images/client-5-showroom.jpg",
      "/images/client-5-family.jpg",
    ],
  },
];

export default function ClientSuccessGallery({
  contactRef,
}: {
  contactRef: React.RefObject<HTMLElement | null>;
}) {
  const [activeClient, setActiveClient] = useState(clientSuccesses[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isViewingGallery, setIsViewingGallery] = useState(false);
  const scrollTo = useLenisScrollTo();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleClientClick = (client: ClientSuccess): void => {
    setActiveClient(client);
    setActiveImageIndex(0);
    setIsViewingGallery(false);
  };

  const handleGalleryView = () => {
    setIsViewingGallery(true);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === activeClient.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? activeClient.gallery.length - 1 : prev - 1
    );
  };

  const handleScheduleTestDrive = () => {
    if (!contactRef) return;
    const ref = contactRef.current;
    if (!ref) return;
    scrollTo(ref, { duration: 2 });
  };

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-2 text-center">
          Delivery Moments
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Capturing the joy and excitement of clients as they receive their
          brand new Mitsubishi vehicles
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Client Thumbnails - Left Side */}
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {clientSuccesses.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleClientClick(client)}
                className={`cursor-pointer relative overflow-hidden rounded-lg ${activeClient.id === client.id ? "ring-4 ring-red-600" : ""}`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={"/next.svg"}
                    alt={client.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-white text-xs font-medium truncate">
                      {client.name}
                    </p>
                    <p className="text-white/80 text-xs truncate">
                      {client.vehicle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Client - Center */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <motion.div
            key={activeClient.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl overflow-hidden shadow-xl"
          >
            {isViewingGallery ? (
              <div className="relative">
                <div className="relative aspect-video">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={
                          activeClient.gallery[activeImageIndex] || "/next.svg"
                        }
                        alt={`${activeClient.name} with their new ${activeClient.vehicle}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/80 hover:bg-white"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/80 hover:bg-white"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {activeClient.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${index === activeImageIndex ? "bg-white" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">{activeClient.name}</h3>
                    <Badge className="bg-red-600">{activeClient.vehicle}</Badge>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    &quot;{activeClient.quote}&quot;
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{activeClient.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{activeClient.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4" />
                      <span>{activeClient.vehicle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="relative aspect-video">
                  <Image
                    src={"/next.svg"}
                    alt={activeClient.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge className="bg-red-600 mb-2">
                    {activeClient.vehicle}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-1">
                    {activeClient.name}
                  </h3>
                  <p className="text-white/90 mb-4">
                    &quot;{activeClient.quote}&quot;
                  </p>

                  <div className="flex flex-wrap gap-4 text-white/80 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{activeClient.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{activeClient.location}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleGalleryView}
                    className="bg-white text-gray-900 hover:bg-white/90"
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    View Delivery Gallery
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 mb-6">
          Join our growing family of satisfied Mitsubishi owners
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium text-sm md:text-lg"
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.5)",
            }}
            transition={{ duration: 0.2 }}
            onClick={handleScheduleTestDrive}
          >
            Schedule Your Test Drive Today
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimatedCarCard from "./animated-car-card";

// Sample car data
const cars = [
  {
    id: 1,
    name: "Mitsubishi Xpander",
    price: "₱1,128,000",

    badge: "Best Seller",
    features: [
      "7-Seater",
      "1.5L MIVEC Engine",
      "Smartphone Link Display Audio",
    ],
  },
  {
    id: 2,
    name: "Mitsubishi Montero Sport",
    price: "₱1,568,000",

    badge: "New Model",
    features: [
      "4x4 Available",
      "2.4L MIVEC Diesel",
      "Advanced Safety Features",
    ],
  },
  {
    id: 3,
    name: "Mitsubishi Strada",
    price: "₱1,250,000",

    badge: "Special Offer",
    features: [
      "Powerful Pickup",
      "Dynamic Shield Design",
      "Off-Road Capability",
    ],
  },
  {
    id: 4,
    name: "Mitsubishi Mirage G4",
    price: "₱769,000",

    badge: "Fuel Efficient",
    features: ["Compact Sedan", "1.2L MIVEC Engine", "Up to 23 km/L"],
  },
  {
    id: 5,
    name: "Mitsubishi L300",
    price: "₱813,000",

    badge: "Commercial",
    features: [
      "Reliable Workhorse",
      "2.2L Diesel Engine",
      "High Load Capacity",
    ],
  },
];

export default function FeaturedCars() {
  const [, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} id="vehicles">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
          Featured Vehicles
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Explore our latest models and special offers. Schedule a test drive
          today!
        </p>
      </motion.div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onSelect={(event: React.SyntheticEvent<HTMLDivElement>) => {
          const index = parseInt(
            (event.target as HTMLElement).getAttribute("data-index") || "0",
            10
          );
          setActiveIndex(index);
        }}
      >
        <CarouselContent>
          {cars.map((car, index) => (
            <CarouselItem
              key={car.id}
              className="md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <AnimatedCarCard car={car} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-2">
          <CarouselPrevious className="" />
          <CarouselNext className="" />
        </div>
      </Carousel>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium text-lg"
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.5)",
            }}
            transition={{ duration: 0.2 }}
          >
            View All Cars
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

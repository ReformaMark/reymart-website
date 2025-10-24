"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

interface BackToTopButtonProps {
  onClick: () => void;
  show?: boolean;
}

const BackToTopButton = ({ onClick, show = false }: BackToTopButtonProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 50, opacity: 0 }} // 👈 start below & transparent
          animate={{ y: 0, opacity: 1 }} // 👈 slide up & fade in
          exit={{ y: 50, opacity: 0 }} // 👈 slide down & fade out
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 right-4"
        >
          <Button size="icon" variant="default" onClick={onClick}>
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;

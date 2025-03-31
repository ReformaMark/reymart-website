"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone, Copy, Check, MessageCircle } from "lucide-react"

interface CallModalProps {
  children: React.ReactNode
  phoneNumber: string
}

export default function CallModal({ children, phoneNumber = "+63 929 109 9329" }: CallModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ""))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`, "_blank")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Reymart Marfil</DialogTitle>
          <DialogDescription>Reach out directly for immediate assistance with your vehicle needs.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center justify-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-red-600">
              <Image src="/images/agent-casual.jpg" alt="Reymart Marfil" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-1">Call or text me at</p>
            <p className="text-2xl font-bold">{phoneNumber}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button className="flex-1 bg-red-600 hover:bg-red-700" onClick={handleCall}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>

            <Button variant="outline" className="flex-1" onClick={handleCopyNumber}>
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Number
                </>
              )}
            </Button>
          </div>

          <div className="border-t pt-4">
            <Button variant="outline" className="w-full" onClick={handleWhatsApp}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Message on WhatsApp
            </Button>
          </div>

          <div className="text-xs text-center text-gray-500">Available Monday-Saturday, 9:00 AM - 6:00 PM</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


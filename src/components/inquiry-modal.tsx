"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface InquiryModalProps {
  children: React.ReactNode
  vehicleModel?: string
}

interface FormData {
    name: string
    email: string
    phone: string
    interestedModel: string
    message: string
    preferredContact: {
        email: boolean
        phone: boolean
        whatsapp: boolean
    }
}

interface ChangeEvent {
    target: {
        name: keyof FormData
        value: string
    }
}

interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

export default function InquiryModal({ children, vehicleModel }: InquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedModel: vehicleModel || "",
    message: "",
    preferredContact: {
      email: true,
      phone: false,
      whatsapp: false,
    },
  })



const handleChange = (key: string, value:string) => {
    setFormData((prev: FormData) => ({
        ...prev,
        [key]: value,
    }))
}

const handleCheckboxChange = (field: keyof FormData["preferredContact"]) => {
    setFormData((prev: FormData) => ({
        ...prev,
        preferredContact: {
            ...prev.preferredContact,
            [field]: !prev.preferredContact[field],
        },
    }))
}

const handleSelectChange = (value: string) => {
    setFormData((prev: FormData) => ({
        ...prev,
        interestedModel: value,
    }))
}



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
}

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      interestedModel: vehicleModel || "",
      message: "",
      preferredContact: {
        email: true,
        phone: false,
        whatsapp: false,
      },
    })
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setTimeout(resetForm, 300)
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src="/images/agent-profile.jpg" alt="Reymart Marfil" fill className="object-cover" />
          </div>
        </div>

        <DialogHeader className="pt-12">
          <DialogTitle>Vehicle Inquiry</DialogTitle>
          <DialogDescription>Fill out the form below and I'll get back to you within 24 hours.</DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your inquiry has been submitted successfully. I'll get back to you within 24 hours.
            </p>
            <Button onClick={resetForm} variant="outline">
              Submit Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Juan Dela Cruz"
                required
                value={formData.name}
                onChange={(e)=> handleChange('name', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="juan@example.com"
                required
                value={formData.email}
                onChange={(e)=> handleChange('email', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+63 912 345 6789"
                required
                value={formData.phone}
                onChange={(e)=> handleChange('phone', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interestedModel">Interested Model</Label>
              <Select onValueChange={handleSelectChange} value={formData.interestedModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xpander">Mitsubishi Xpander</SelectItem>
                  <SelectItem value="montero">Mitsubishi Montero Sport</SelectItem>
                  <SelectItem value="strada">Mitsubishi Strada</SelectItem>
                  <SelectItem value="mirage">Mitsubishi Mirage G4</SelectItem>
                  <SelectItem value="l300">Mitsubishi L300</SelectItem>
                  <SelectItem value="other">Other/Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me more about what you're looking for..."
                rows={3}
                value={formData.message}
                onChange={(e)=> handleChange('message', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Preferred Contact Method</Label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="contactEmail"
                    checked={formData.preferredContact.email}
                    onCheckedChange={() => handleCheckboxChange("email")}
                  />
                  <Label htmlFor="contactEmail" className="font-normal">
                    Email
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="contactPhone"
                    checked={formData.preferredContact.phone}
                    onCheckedChange={() => handleCheckboxChange("phone")}
                  />
                  <Label htmlFor="contactPhone" className="font-normal">
                    Phone Call
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="contactWhatsapp"
                    checked={formData.preferredContact.whatsapp}
                    onCheckedChange={() => handleCheckboxChange("whatsapp")}
                  />
                  <Label htmlFor="contactWhatsapp" className="font-normal">
                    WhatsApp/Messenger
                  </Label>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Submit Inquiry"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}


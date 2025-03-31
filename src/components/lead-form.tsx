"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

interface FormData {
    id: string
    name: string
    email: string
    phone: string
    interestedModel: string
    message: string
    // preferredContact: {
    //     email: boolean
    //     phone: boolean
    //     whatsapp: boolean
    // }
}

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    interestedModel: "",
    message: "",
  })



const handleChange = (key:string, value:string ) => {
    setFormData((prev: FormData) => ({
        ...prev,
        [key]: value,
    }))
}

// const handleCheckboxChange = (field: keyof FormData["preferredContact"]) => {
//     setFormData((prev: FormData) => ({
//         ...prev,
//         preferredContact: {
//             ...prev.preferredContact,
//             [field]: !prev.preferredContact[field],
//         },
//     }))
// }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interestedModel: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success("Inquiry Submitted!")

    setIsSubmitting(false)
    setIsSubmitted(true)
  }



  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          className="bg-green-100 rounded-full p-3 mb-4"
        >
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your inquiry has been submitted successfully. I&apos;ll get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Inquiry
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-2" variants={itemVariants}>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Juan Dela Cruz"
          required
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="juan@example.com"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="text"
          placeholder="+63 912 345 6789"
          required
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
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
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me more about what you're looking for..."
          rows={3}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <motion.div className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </motion.div>
          ) : (
            "Submit Inquiry"
          )}
        </Button>
      </motion.div>
    </motion.form>
  )
}


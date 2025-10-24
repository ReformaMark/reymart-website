/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VehicleType } from "@/lib/type";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface VehicleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (vehicle: VehicleType) => void;
  initialData?: VehicleType;
  isEditMode?: boolean;
}

export function VehicleFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditMode = false,
}: VehicleFormModalProps) {
  const [formData, setFormData] = useState<VehicleType>(
    initialData || {
      id: 0,
      model: "",
      brand: "",
      price: "",
      type: "",
      year: new Date().getFullYear(),
      status: "Available",
      posted: new Date().toISOString().split("T")[0],
      images: [],
      description: "",
    }
  );

  // const generateUploadUrl = useMutation(api.image.generateUploadUrl);
  // const { startUpload, isUploading } = useUploadFiles(generateUploadUrl);
  // const saveStorageIds = useMutation(api.image.saveStorageIds);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "year" ? Number.parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border border-border rounded-lg w-full sm:max-w-[1000px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <DialogHeader className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <DialogTitle className="text-xl font-bold text-foreground">
            {isEditMode ? "Edit Vehicle" : "Add New Vehicle"}
          </DialogTitle>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Model
              </label>
              <Input
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g., Outlander"
                className="bg-secondary/20 border-border text-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Brand
              </label>
              <Input
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="e.g., Mitsubishi"
                className="bg-secondary/20 border-border text-foreground"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Price
              </label>
              <Input
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., ₱1,299,000"
                className="bg-secondary/20 border-border text-foreground"
                required
              />
            </div>
            <div>
              <Label className="block text-sm font-medium text-foreground mb-2">
                Type
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, type: value }))
                }
                defaultValue={formData.type}
              >
                <SelectTrigger className="w-full px-3 py-2 bg-secondary/20 border border-border rounded-md text-foreground">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Type</SelectLabel>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Sedan">Sedan</SelectItem>
                    <SelectItem value="MPV">MPV</SelectItem>
                    <SelectItem value="Hatchback">Hatchback</SelectItem>
                    <SelectItem value="Truck">Truck</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium text-foreground mb-2">
                Year
              </Label>
              <Input
                name="year"
                type="number"
                value={formData.year}
                onChange={handleChange}
                className="bg-secondary/20 border-border text-foreground"
                required
              />
            </div>
            <div>
              <Label className="block text-sm font-medium text-foreground mb-2">
                Status
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, type: value }))
                }
                defaultValue={formData.type}
              >
                <SelectTrigger className="w-full px-3 py-2 bg-secondary/20 border border-border rounded-md text-foreground">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Reserved">Reserved</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">
              Description
            </Label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter vehicle description..."
              className="w-full px-3 py-2 bg-secondary/20 border border-border rounded-md text-foreground placeholder:text-muted-foreground"
              rows={4}
              required
            />
          </div>

          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">
              YouTube Link (Optional)
            </Label>
            <Input
              name="ytLink"
              value={formData.ytLink || ""}
              onChange={handleChange}
              placeholder="https://youtube.com/..."
              className="bg-secondary/20 border-border text-foreground"
            />
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-border text-foreground hover:bg-secondary/20 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-red-accent hover:bg-red-accent/90 text-white"
            >
              {isEditMode ? "Update Vehicle" : "Add Vehicle"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

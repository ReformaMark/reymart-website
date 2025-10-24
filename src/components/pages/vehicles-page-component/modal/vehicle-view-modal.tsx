/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface Vehicle {
  id?: number;
  model: string;
  brand: string;
  price: string;
  type: string;
  year: number;
  status: string;
  posted: string;
  images: string[];
  ytLink?: string;
  description: string;
  moreDetails?: Record<string, any>;
}

interface VehicleViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
}

export function VehicleViewModal({
  isOpen,
  onClose,
  vehicle,
}: VehicleViewModalProps) {
  if (!isOpen || !vehicle) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border border-border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">
            {vehicle.brand} {vehicle.model}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image Gallery */}
          {vehicle.images && vehicle.images.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Images
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {vehicle.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="bg-secondary/20 rounded-lg h-40 flex items-center justify-center border border-border"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Vehicle ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = "/diverse-city-street.png";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Model
              </p>
              <p className="text-foreground font-medium">{vehicle.model}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Brand
              </p>
              <p className="text-foreground font-medium">{vehicle.brand}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Price
              </p>
              <p className="text-foreground font-medium text-lg">
                {vehicle.price}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Type
              </p>
              <p className="text-foreground font-medium">{vehicle.type}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Year
              </p>
              <p className="text-foreground font-medium">{vehicle.year}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Status
              </p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  vehicle.status === "Available"
                    ? "bg-green-500/20 text-green-400"
                    : vehicle.status === "Sold"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {vehicle.status}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              Description
            </p>
            <p className="text-foreground leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* YouTube Link */}
          {vehicle.ytLink && (
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                Video Review
              </p>
              <a
                href={vehicle.ytLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-accent hover:underline"
              >
                Watch on YouTube →
              </a>
            </div>
          )}

          {/* Posted Date */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Posted on {vehicle.posted}
            </p>
          </div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="w-full bg-red-accent hover:bg-red-accent/90 text-white"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

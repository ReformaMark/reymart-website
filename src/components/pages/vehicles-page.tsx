"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";
import { VehicleViewModal } from "./vehicles-page-component/modal/vehicle-view-modal";
import { VehicleFormModal } from "./vehicles-page-component/modal/vehicle-form-modal";
import { VehicleType } from "@/lib/type";

const initialVehicles: VehicleType[] = [
  {
    id: 1,
    model: "Outlander",
    brand: "Mitsubishi",
    price: "₱1,299,000",
    type: "SUV",
    year: 2024,
    status: "Available",
    posted: "2024-10-15",
    images: [
      "https://example.com/images/outlander-front.jpg",
      "https://example.com/images/outlander-side.jpg",
    ],
    ytLink: "https://www.youtube.com/watch?v=example1",
    description:
      "The Mitsubishi Outlander 2024 offers a refined interior, advanced safety features, and impressive fuel efficiency for family adventures.",
    moreDetails: {
      Engine: "2.5L MIVEC DOHC",
      Transmission: "CVT with 8-speed sport mode",
      Seats: "7",
      Drivetrain: "AWD",
      Color: "White Pearl",
    },
  },
  {
    id: 2,
    model: "Xpander",
    brand: "Mitsubishi",
    price: "₱899,000",
    type: "MPV",
    year: 2024,
    status: "Available",
    posted: "2024-10-14",
    images: [
      "https://example.com/images/xpander-front.jpg",
      "https://example.com/images/xpander-interior.jpg",
    ],
    ytLink: "https://www.youtube.com/watch?v=example2",
    description:
      "The Mitsubishi Xpander combines versatility, comfort, and modern design — perfect for families and daily commutes.",
    moreDetails: {
      Engine: "1.5L DOHC MIVEC",
      Transmission: "4-speed automatic",
      Seats: "7",
      Fuel: "Gasoline",
      Color: "Jet Black Mica",
    },
  },
  {
    id: 3,
    model: "Mirage",
    brand: "Mitsubishi",
    price: "₱599,000",
    type: "Sedan",
    year: 2023,
    status: "Sold",
    posted: "2024-10-10",
    images: [
      "https://example.com/images/mirage-front.jpg",
      "https://example.com/images/mirage-back.jpg",
    ],
    ytLink: "https://www.youtube.com/watch?v=example3",
    description:
      "Compact yet stylish, the Mirage 2023 offers outstanding fuel efficiency and easy city maneuverability.",
    moreDetails: {
      Engine: "1.2L 3-cylinder DOHC",
      Transmission: "CVT",
      Fuel: "Gasoline",
      Mileage: "18 km/L",
      Color: "Wine Red Pearl",
    },
  },
  {
    id: 4,
    model: "Pajero",
    brand: "Mitsubishi",
    price: "₱1,899,000",
    type: "SUV",
    year: 2024,
    status: "Reserved",
    posted: "2024-10-12",
    images: [
      "https://example.com/images/pajero-front.jpg",
      "https://example.com/images/pajero-interior.jpg",
    ],
    ytLink: "https://www.youtube.com/watch?v=example4",
    description:
      "A legendary SUV built for power and performance — the Pajero 2024 is ready for both city and off-road adventures.",
    moreDetails: {
      Engine: "3.2L DI-D Diesel",
      Transmission: "5-speed automatic",
      Drivetrain: "4WD",
      TowingCapacity: "3,000 kg",
      Color: "Sterling Silver",
    },
  },
];

export function VehiclesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicles, setVehicles] = useState<VehicleType[]>(initialVehicles);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(
    null
  );
  const [editingVehicle, setEditingVehicle] = useState<VehicleType | null>(
    null
  );

  const filteredVehicles = vehicles.filter(
    (v) =>
      v.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddVehicle = () => {
    setEditingVehicle(null);
    setIsAddModalOpen(true);
  };

  const handleViewVehicle = (vehicle: VehicleType) => {
    setSelectedVehicle(vehicle);
    setIsViewModalOpen(true);
  };

  const handleEditVehicle = (vehicle: VehicleType) => {
    setEditingVehicle(vehicle);
    setIsAddModalOpen(true);
  };

  const handleFormSubmit = (formData: VehicleType) => {
    if (editingVehicle) {
      // Update existing vehicle
      setVehicles(
        vehicles.map((v) =>
          v.id === editingVehicle.id ? { ...v, ...formData } : v
        )
      );
    } else {
      // Add new vehicle
      const newVehicle: VehicleType = {
        ...formData,
      };
      setVehicles([...vehicles, newVehicle]);
    }
  };

  const handleDeleteVehicle = (id: number) => {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      setVehicles(vehicles.filter((v) => v.id !== id));
    }
  };

  useEffect(() => {
    // Fetch vehicles from backend or API
    setVehicles(initialVehicles);
  }, [vehicles]);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vehicles</h1>
          <p className="text-muted-foreground mt-1">
            Manage your vehicle inventory
          </p>
        </div>
        <Button
          onClick={handleAddVehicle}
          className="bg-red-accent hover:bg-red-accent/90 text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Vehicle
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search vehicles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-secondary/20 border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Model
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Brand
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Price
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Year
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredVehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="border-b border-border/50 hover:bg-secondary/10"
                  >
                    <td className="py-3 px-4 text-foreground font-medium">
                      {vehicle.model}
                    </td>
                    <td className="py-3 px-4 text-foreground">
                      {vehicle.brand}
                    </td>
                    <td className="py-3 px-4 text-foreground">
                      {vehicle.price}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {vehicle.type}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {vehicle.year}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          vehicle.status === "Available"
                            ? "bg-green-500/20 text-green-400"
                            : vehicle.status === "Sold"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          onClick={() => handleViewVehicle(vehicle)}
                          variant="ghost"
                          size="sm"
                          className="text-blue-400 hover:bg-blue-500/10"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleEditVehicle(vehicle)}
                          variant="ghost"
                          size="sm"
                          className="text-yellow-400 hover:bg-yellow-500/10"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteVehicle(vehicle.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-accent hover:bg-red-accent/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <VehicleViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        vehicle={selectedVehicle}
      />
      <VehicleFormModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingVehicle(null);
        }}
        onSubmit={handleFormSubmit}
        initialData={editingVehicle || undefined}
        isEditMode={!!editingVehicle}
      />
    </div>
  );
}

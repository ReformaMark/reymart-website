export interface VehicleType {
  id: number;
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

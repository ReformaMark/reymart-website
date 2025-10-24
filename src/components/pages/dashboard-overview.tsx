"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car, Users, MessageSquare, TrendingUp } from "lucide-react";

const monthlyData = [
  { month: "Jan", sales: 12, inquiries: 28 },
  { month: "Feb", sales: 19, inquiries: 35 },
  { month: "Mar", sales: 15, inquiries: 32 },
  { month: "Apr", sales: 22, inquiries: 41 },
  { month: "May", sales: 28, inquiries: 45 },
  { month: "Jun", sales: 35, inquiries: 52 },
];

const topVehicles = [
  { name: "Mitsubishi Outlander", inquiries: 45 },
  { name: "Mitsubishi Xpander", inquiries: 38 },
  { name: "Mitsubishi Mirage", inquiries: 32 },
  { name: "Mitsubishi Pajero", inquiries: 28 },
  { name: "Mitsubishi Attrage", inquiries: 22 },
];

const recentInquiries = [
  {
    id: 1,
    name: "John Doe",
    vehicle: "Outlander",
    date: "2024-10-20",
    status: "Pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    vehicle: "Xpander",
    date: "2024-10-19",
    status: "Contacted",
  },
  {
    id: 3,
    name: "Mike Johnson",
    vehicle: "Mirage",
    date: "2024-10-18",
    status: "Closed",
  },
  {
    id: 4,
    name: "Sarah Williams",
    vehicle: "Pajero",
    date: "2024-10-17",
    status: "Pending",
  },
];

const COLORS = ["#dc2626", "#2563eb", "#16a34a", "#ea580c", "#7c3aed"];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back, Raymart Marfil
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Vehicles</p>
                <p className="text-3xl font-bold text-foreground mt-2">248</p>
              </div>
              <div className="p-3 bg-red-accent/10 rounded-lg">
                <Car className="w-6 h-6 text-red-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Clients</p>
                <p className="text-3xl font-bold text-foreground mt-2">156</p>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Inquiries</p>
                <p className="text-3xl font-bold text-foreground mt-2">342</p>
              </div>
              <div className="p-3 bg-green-500/10 rounded-lg">
                <MessageSquare className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-3xl font-bold text-foreground mt-2">68%</p>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">
              Monthly Sales & Inquiries
            </CardTitle>
            <CardDescription>
              Sales and inquiry trends over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#dc2626"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="inquiries"
                  stroke="#2563eb"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Top Vehicles</CardTitle>
            <CardDescription>Most inquired vehicles</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topVehicles}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, inquiries }) =>
                    `${name?.split(" ")[1]}: ${inquiries}`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="inquiries"
                >
                  {topVehicles.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Inquiries */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">
            Recent Client Inquiries
          </CardTitle>
          <CardDescription>
            Latest inquiries from potential buyers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Vehicle
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentInquiries.map((inquiry) => (
                  <tr
                    key={inquiry.id}
                    className="border-b border-border/50 hover:bg-secondary/10"
                  >
                    <td className="py-3 px-4 text-foreground">
                      {inquiry.name}
                    </td>
                    <td className="py-3 px-4 text-foreground">
                      {inquiry.vehicle}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {inquiry.date}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          inquiry.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : inquiry.status === "Contacted"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {inquiry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

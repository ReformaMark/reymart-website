"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const salesData = [
  { month: "Jan", sales: 12 },
  { month: "Feb", sales: 19 },
  { month: "Mar", sales: 15 },
  { month: "Apr", sales: 22 },
  { month: "May", sales: 28 },
  { month: "Jun", sales: 35 },
];

const vehicleData = [
  { name: "Outlander", value: 45 },
  { name: "Xpander", value: 38 },
  { name: "Mirage", value: 32 },
  { name: "Pajero", value: 28 },
  { name: "Attrage", value: 22 },
];

const sourceData = [
  { name: "Website", value: 45 },
  { name: "Facebook", value: 30 },
  { name: "Walk-in", value: 15 },
  { name: "Referral", value: 10 },
];

const COLORS = ["#dc2626", "#2563eb", "#16a34a", "#ea580c", "#7c3aed"];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Sales and performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          {["Month", "Quarter", "Year"].map((period) => (
            <Button
              key={period}
              variant="outline"
              className="border-border text-foreground hover:bg-secondary/20 bg-transparent"
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Sales</p>
              <p className="text-3xl font-bold text-foreground mt-2">₱45.2M</p>
              <p className="text-xs text-green-400 mt-2">
                ↑ 12% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-3xl font-bold text-foreground mt-2">68%</p>
              <p className="text-xs text-green-400 mt-2">
                ↑ 5% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Avg. Deal Value</p>
              <p className="text-3xl font-bold text-foreground mt-2">₱1.2M</p>
              <p className="text-xs text-red-400 mt-2">↓ 3% from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Sales per Month</CardTitle>
            <CardDescription>Monthly sales performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                  }}
                />
                <Bar dataKey="sales" fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">
              Most Inquired Vehicles
            </CardTitle>
            <CardDescription>Vehicle inquiry distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={vehicleData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {vehicleData.map((entry, index) => (
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

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Client Source</CardTitle>
          <CardDescription>Where your clients are coming from</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sourceData.map((entry, index) => (
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
  );
}

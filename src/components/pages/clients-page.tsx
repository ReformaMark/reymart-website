"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MessageSquare } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "John Doe",
    contact: "09123456789",
    email: "john@email.com",
    vehicle: "Outlander",
    date: "2024-10-20",
    status: "Pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    contact: "09234567890",
    email: "jane@email.com",
    vehicle: "Xpander",
    date: "2024-10-19",
    status: "Contacted",
  },
  {
    id: 3,
    name: "Mike Johnson",
    contact: "09345678901",
    email: "mike@email.com",
    vehicle: "Mirage",
    date: "2024-10-18",
    status: "Closed",
  },
  {
    id: 4,
    name: "Sarah Williams",
    contact: "09456789012",
    email: "sarah@email.com",
    vehicle: "Pajero",
    date: "2024-10-17",
    status: "Pending",
  },
];

export function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredClients = clients.filter(
    (c) =>
      (c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterStatus === "All" || c.status === filterStatus)
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Clients & Inquiries
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage client inquiries and follow-ups
        </p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-secondary/20 border-border text-foreground placeholder:text-muted-foreground"
            />
            <div className="flex gap-2">
              {["All", "Pending", "Contacted", "Closed"].map((status) => (
                <Button
                  key={status}
                  variant={filterStatus === status ? "default" : "outline"}
                  className={
                    filterStatus === status
                      ? "bg-red-accent hover:bg-red-accent/90 text-white"
                      : ""
                  }
                  onClick={() => setFilterStatus(status)}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
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
                    Contact
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Email
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
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr
                    key={client.id}
                    className="border-b border-border/50 hover:bg-secondary/10"
                  >
                    <td className="py-3 px-4 text-foreground font-medium">
                      {client.name}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {client.contact}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {client.email}
                    </td>
                    <td className="py-3 px-4 text-foreground">
                      {client.vehicle}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {client.date}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          client.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : client.status === "Contacted"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-400 hover:bg-blue-500/10"
                        >
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-400 hover:bg-green-500/10"
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-400 hover:bg-purple-500/10"
                        >
                          <MessageSquare className="w-4 h-4" />
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
    </div>
  );
}

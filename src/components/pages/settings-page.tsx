"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Save } from "lucide-react";

export function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "Raymart Marfil",
    email: "raymart@mitsubishi.com",
    phone: "09123456789",
    address: "Jose Abad Santos Ave, San Fernando, Pampanga",
    dealership: "Mitsubishi Peak Motors Inc.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your profile and preferences
        </p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Profile Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            <Button className="bg-red-accent hover:bg-red-accent/90 text-white gap-2">
              <Upload className="w-4 h-4" />
              Change Photo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">
                Full Name
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 bg-secondary/20 border-border text-foreground"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 bg-secondary/20 border-border text-foreground"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Phone
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 bg-secondary/20 border-border text-foreground"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Dealership
              </label>
              <Input
                name="dealership"
                value={formData.dealership}
                onChange={handleChange}
                className="mt-2 bg-secondary/20 border-border text-foreground"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-foreground">
                Address
              </label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-2 bg-secondary/20 border-border text-foreground"
              />
            </div>
          </div>

          <Button className="bg-red-accent hover:bg-red-accent/90 text-white gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Security</CardTitle>
          <CardDescription>
            Manage your password and security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">
              Current Password
            </label>
            <Input
              type="password"
              placeholder="Enter current password"
              className="mt-2 bg-secondary/20 border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">
              New Password
            </label>
            <Input
              type="password"
              placeholder="Enter new password"
              className="mt-2 bg-secondary/20 border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">
              Confirm Password
            </label>
            <Input
              type="password"
              placeholder="Confirm new password"
              className="mt-2 bg-secondary/20 border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button className="bg-red-accent hover:bg-red-accent/90 text-white">
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Website Customization */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">
            Website Customization
          </CardTitle>
          <CardDescription>Customize your public website</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">
              Website Title
            </label>
            <Input
              placeholder="Your website title"
              className="mt-2 bg-secondary/20 border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">
              Logo URL
            </label>
            <Input
              placeholder="https://example.com/logo.png"
              className="mt-2 bg-secondary/20 border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button className="bg-red-accent hover:bg-red-accent/90 text-white">
            Save Customization
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

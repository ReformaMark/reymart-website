"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Top 5 Reasons to Choose Mitsubishi",
    date: "2024-10-20",
    status: "Published",
    category: "Tips",
  },
  {
    id: 2,
    title: "New Mitsubishi Models 2024",
    date: "2024-10-18",
    status: "Published",
    category: "News",
  },
  {
    id: 3,
    title: "Maintenance Tips for Your Vehicle",
    date: "2024-10-15",
    status: "Draft",
    category: "Guide",
  },
  {
    id: 4,
    title: "Customer Success Story: Maria's Journey",
    date: "2024-10-12",
    status: "Published",
    category: "Stories",
  },
];

export function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blogs</h1>
          <p className="text-muted-foreground mt-1">Manage your blog posts</p>
        </div>
        <Button className="bg-red-accent hover:bg-red-accent/90 text-white gap-2">
          <Plus className="w-4 h-4" />
          New Blog
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search blogs..."
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
                    Title
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Category
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
                {filteredBlogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-b border-border/50 hover:bg-secondary/10"
                  >
                    <td className="py-3 px-4 text-foreground font-medium">
                      {blog.title}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {blog.category}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {blog.date}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          blog.status === "Published"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-400 hover:bg-blue-500/10"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-yellow-400 hover:bg-yellow-500/10"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
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
    </div>
  );
}

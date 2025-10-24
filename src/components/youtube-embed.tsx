"use client";
import { Card } from "@/components/ui/card";

interface YouTubeEmbedProps {
  title: string;
}

export default function YouTubeEmbed({ title }: YouTubeEmbedProps) {
  // In a real implementation, you would use the actual YouTube embed
  // For this example, we're using a placeholder
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/s-9QKEC21p4?si=pmTxoawzj-saXgH0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-medium line-clamp-2">{title}</h3>
        </div>
      </div>
    </Card>
  );
}

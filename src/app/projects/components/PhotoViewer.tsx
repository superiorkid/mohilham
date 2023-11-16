"use client";

import React from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface PhotoViewerProps {
  screenshoots: string[] | null;
}

const PhotoViewer = ({ screenshoots }: PhotoViewerProps) => {
  return (
    <div className="flex space-x-2">
      <PhotoProvider>
        {screenshoots?.map((image, index) => (
          <PhotoView src={image} key={index}>
            <div className="relative w-[120px] h-[100px]">
              <Image
                fill
                loading="lazy"
                src={image}
                alt={`example result ${index}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-md hover:cursor-pointer"
                quality={50}
              />
            </div>
          </PhotoView>
        ))}
      </PhotoProvider>
    </div>
  );
};

export default PhotoViewer;

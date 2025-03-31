import { useEffect, useRef } from "react";
import WatermarkedImage from "./WatermarkedImage";
import { photos } from "@/data/photos";

export default function PhotoGallery() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);

    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
      observerRef.current?.observe(container);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <main className="container mx-auto px-4 pb-16" id="gallery">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <WatermarkedImage
            key={index}
            src={photo.src}
            alt={photo.alt}
            title={photo.title}
          />
        ))}
      </div>
    </main>
  );
}

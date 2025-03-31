interface WatermarkedImageProps {
  src: string;
  alt: string;
  title: string;
}

export default function WatermarkedImage({ src, alt, title }: WatermarkedImageProps) {
  return (
    <div className="image-container rounded-lg overflow-hidden shadow-md opacity-0">
      <div className="relative overflow-hidden">
        <img 
          src={src}
          alt={alt} 
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-103"
          loading="lazy"
        />
        <div className="watermark">SAMPLE</div>
      </div>
      <div className="p-3 bg-white">
        <p className="font-montserrat text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}

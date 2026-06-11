import { assets } from "@/lib/assets";

const photos = [
  { src: assets.photo1, alt: "Photo 1" },
  { src: assets.photo2, alt: "Photo 2" },
  { src: assets.photo3, alt: "Photo 3" },
  { src: assets.photo4, alt: "Photo 4" },
];

export default function PhotoGridSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] pb-8 relative">
      {/* Decorative circles */}
      <div className="hidden lg:block absolute right-[80px] top-0 pointer-events-none">
        <img src={assets.ellipse1} alt="" className="w-[107px] h-[107px]" />
      </div>
      <div className="hidden lg:block absolute right-[220px] bottom-10 pointer-events-none">
        <img src={assets.ellipse2} alt="" className="w-[59px] h-[59px]" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.alt}
            className="rounded-[22px] overflow-hidden shadow-card aspect-[3/4]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

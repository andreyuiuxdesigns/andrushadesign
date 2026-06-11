import { assets } from "@/lib/assets";

interface ProjectCardProps {
  title: string;
  date: string;
  bgColor?: string;
  href?: string;
}

export default function ProjectCard({
  title,
  date,
  bgColor = "#0070f3",
  href = "#",
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-[18px] flex-shrink-0 w-full sm:w-[282px]">
      {/* Card image area */}
      <div
        className="h-[440px] rounded-xl overflow-hidden relative flex-shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        {/* View button */}
        <a
          href={href}
          className="absolute top-4 right-4 flex items-center gap-2 bg-white px-4 rounded-[20px] h-10 shadow-[0px_2px_2px_rgba(0,0,0,0.2)] hover:bg-gray-50 transition-colors"
        >
          <span className="text-[14px] font-medium text-black leading-none">View</span>
          <img src={assets.arrowUpRight} alt="" className="w-[15px] h-[14px]" />
        </a>
      </div>

      {/* Caption */}
      <div className="flex items-center justify-between text-[12px] font-normal">
        <span className="text-black">{title}</span>
        <span className="text-[#808080]">{date}</span>
      </div>
    </div>
  );
}

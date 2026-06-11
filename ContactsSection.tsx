interface SectionDividerProps {
  label: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] py-8">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#e5e7eb]" />
        <div className="relative bg-[#e5e7eb] px-5 py-1 rounded-xl z-10">
          <span className="text-[14px] font-medium text-[#4b5563] font-['Inter']">{label}</span>
        </div>
      </div>
    </div>
  );
}

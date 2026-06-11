import { assets } from "@/lib/assets";

export default function HeroSection() {
  return (
    <section className="relative pt-12 overflow-hidden">
      {/* Background gray bar (desktop) */}
      <div className="hidden lg:block absolute top-12 left-[120px] right-[120px] h-[191px] bg-[#ededed] rounded-b-2xl" />

      {/* Decorative hashtags */}
      <p className="hidden lg:block absolute top-[76px] left-[calc(20%+72px)] text-[16px] font-semibold text-black/50 tracking-tight select-none">
        #nobanner
      </p>
      <p className="hidden lg:block absolute top-[110px] left-[calc(29%+40px)] text-[16px] font-semibold text-black/50 tracking-tight select-none">
        #hiremeplszz
      </p>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        {/* Profile block */}
        <div className="relative pt-16 lg:pt-[155px] flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-0">
          {/* Avatar */}
          <div className="relative lg:absolute lg:top-[152px] lg:left-0 flex-shrink-0">
            <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src={assets.avatar}
                alt="Andrey Yanovsky"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name + title */}
          <div className="lg:ml-[87px] flex flex-col">
            <h1 className="text-[28px] font-semibold text-black tracking-[-0.28px] leading-tight">
              Andrey Yanovsky
            </h1>
            <p className="text-[16px] font-medium text-[#808080]">Junior UI/UX Designer</p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 lg:absolute lg:left-[87px] lg:top-[calc(100%+12px)] mt-2 lg:mt-0">
            <div className="flex flex-col gap-0.5">
              <span className="text-[14px] font-medium text-[#808080]">Design practice</span>
              <span className="text-[16px] font-semibold text-[#808080]">2 years</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[14px] font-medium text-[#808080]">Location</span>
              <div className="flex items-center gap-1.5">
                <div className="w-[22px] h-[22px] rounded-full overflow-hidden border border-[#ebebeb] flex-shrink-0">
                  <img src={assets.flagIreland} alt="Ireland" className="w-full h-full object-cover" />
                </div>
                <span className="text-[16px] font-semibold text-[#808080]">Ireland</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6 lg:mt-8 lg:ml-[87px] mb-8 lg:mb-0 lg:pb-10">
          <a href="#contacts" className="btn-primary">
            Contact
          </a>
          <button className="btn-secondary">Info</button>
        </div>
      </div>

      {/* Spacer for desktop layout */}
      <div className="hidden lg:block h-16" />
    </section>
  );
}

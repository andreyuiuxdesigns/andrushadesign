import { assets } from "@/lib/assets";

// Apps used data
const appsRow1 = [
  { bg: "bg-white border border-[#e9e9e9]", icon: assets.googleSheets, label: "Google Sheets" },
  { bg: "bg-black", icon: assets.appDark1, label: "App" },
  { bg: "bg-black", icon: assets.appRect1, label: "App" },
  { bg: "bg-[#300]", icon: null, label: "" },
  { bg: "bg-[#001e36]", icon: null, label: "" },
];

const languages = [
  {
    name: "English - B2",
    flag: "🇬🇧",
    barWidth: "72%",
    barColor: "bg-[#0070f3]",
  },
  {
    name: "Ukrainian - C1",
    flag: "🇺🇦",
    barWidth: "84%",
    barColor: "bg-[#0070f3]",
  },
  {
    name: "Russian - Native",
    flag: "🇷🇺",
    barWidth: "96%",
    barColor: "bg-[#0070f3]",
  },
];

const education = [
  {
    period: "Present",
    year: "2026",
    school: "Dundalk Institute of Technology",
    degree: "Certificate in UX Design (NFQ Level 7)",
  },
  {
    period: "August",
    year: "2026",
    school: "Kyiv Academy of Media Arts",
    degree: "UI/UX Design Online Course",
  },
  {
    period: "June",
    year: "2026",
    school: "B2 Cambridge Certificate in English",
    degree: "The Exam Centre of Ireland, Dublin City",
  },
  {
    period: "2026",
    year: "2025",
    school: "College of FET, Ennis Campus",
    degree: "QQI Level 5 Major Award in Graphic Design",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Bio card */}
          <div className="bg-white border border-[#e7e8e7] rounded-[20px] shadow-[0px_5.577px_5.577px_#ebebeb] p-[15px] flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="bg-[#f3f3f3] w-[50px] h-[51px] rounded-[14px] flex items-center justify-center flex-shrink-0">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M12.5 11.5C14.985 11.5 17 9.485 17 7C17 4.515 14.985 2.5 12.5 2.5C10.015 2.5 8 4.515 8 7C8 9.485 10.015 11.5 12.5 11.5Z" stroke="#333" strokeWidth="1.5"/>
                  <path d="M4 22C4 17.582 7.806 14 12.5 14C17.194 14 21 17.582 21 22" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-medium text-[#808080]">{`Hi, I'm `}</p>
                <p className="text-[20px] font-semibold text-black tracking-[-0.2px]">Andrey Yanovsky</p>
              </div>
            </div>

            {/* Bio text */}
            <p className="text-[16px] font-normal text-[#808080] leading-snug">
              {"I'm "}
              <span className="text-black">Junior </span>
              <span className="text-black font-medium">UI/UX</span>
              {" and "}
              <span className="text-black font-medium">Product Designer</span>
              {". I design modern websites, user interfaces and digital products with a focus on simplicity, usability and visual quality."}
              <span className="block font-medium text-black mt-1">Open to remote work and freelance projects.</span>
            </p>

            {/* Download CV */}
            <button className="w-full bg-[#0070f3] text-white text-[14px] font-medium rounded-xl py-2 hover:bg-[#0060d9] transition-colors">
              Download CV
            </button>
          </div>

          {/* Apps I Use card */}
          <div className="bg-white border border-[#e7e8e7] rounded-[30px] shadow-card p-5 h-[268px]">
            <p className="text-[20px] font-normal text-[#7f7f7f] mb-3">Apps I Use</p>
            <div className="border-b border-[#e5e5e5] mb-4" />
            {/* Search bar */}
            <div className="bg-[#f3f3f3] rounded-[22px] px-4 h-[55px] flex items-center mb-4">
              <span className="text-[18px] text-[#787878]">Search</span>
            </div>
            {/* App icons row 1 */}
            <div className="flex gap-2 mb-2">
              {/* Google Sheets */}
              <div className="bg-white border border-[#e9e9e9] rounded-[20px] w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
                <img src={assets.googleSheets} alt="Google Sheets" className="w-[21px] h-[32px] object-contain" />
              </div>
              {/* Photoshop 1 */}
              <div className="bg-[#300] rounded-[20px] w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
                <img src={assets.photoshop2} alt="" className="w-[42px] h-[42px] object-contain" />
              </div>
              {/* App */}
              <div className="bg-black rounded-[20px] w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
                <img src={assets.appRect1} alt="" className="w-full h-full object-cover rounded-[20px]" />
              </div>
              {/* Photoshop 2 */}
              <div className="bg-[#49021f] rounded-[20px] w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
                <img src={assets.photoshop1} alt="" className="w-[42px] h-[42px] object-contain" />
              </div>
              {/* App dark */}
              <div className="bg-[#001e36] rounded-[20px] w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
                <img src={assets.photoshop3} alt="" className="w-[42px] h-[42px] object-contain" />
              </div>
            </div>
            {/* App icons row 2 */}
            <div className="flex gap-2">
              {/* Notion */}
              <div className="bg-white border border-[#e9e9e9] rounded-[20px] w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
                <img src={assets.notionLogo} alt="Notion" className="w-[32px] h-[32px] object-contain" />
              </div>
              {/* Vercel */}
              <div className="bg-black rounded-[20px] w-[54px] h-[54px] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={assets.vercelLogo} alt="Vercel" className="w-full h-full object-cover" />
              </div>
              {/* App rect 2 */}
              <div className="rounded-[20px] w-[54px] h-[54px] overflow-hidden flex-shrink-0">
                <img src={assets.appRect2} alt="" className="w-full h-full object-cover" />
              </div>
              {/* Photoshop 3 */}
              <div className="bg-[#49021f] rounded-[20px] w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
                <img src={assets.photoshop3} alt="" className="w-[42px] h-[42px] object-contain" />
              </div>
              {/* LinkedIn */}
              <div className="bg-[#0274b3] rounded-[20px] w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
                <img src={assets.linkedinLogo} alt="LinkedIn" className="w-[34px] h-[34px] object-contain rounded-[20px]" />
              </div>
            </div>
          </div>

          {/* Languages card */}
          <div className="bg-white border border-[#e7e8e7] rounded-[30px] shadow-card p-5 h-[268px]">
            <p className="text-[20px] font-normal text-[#7f7f7f] mb-3">Languages I Speak</p>
            <div className="border-b border-[#e5e5e5] mb-4" />
            <div className="flex flex-col gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="bg-[#f3f3f3] rounded-[22px] h-[56px] flex items-center px-4 gap-3 relative overflow-hidden"
                >
                  <span className="text-[18px] flex-shrink-0">{lang.flag}</span>
                  <span className="text-[18px] font-normal text-[#787878]">{lang.name}</span>
                  {/* Progress indicator at bottom */}
                  <div
                    className={`absolute bottom-0 left-1.5 h-1 rounded-t-sm ${lang.barColor}`}
                    style={{ width: lang.barWidth }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — Education */}
        <div className="bg-white border border-[#e7e8e7] rounded-[30px] shadow-card p-5 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[20px] font-normal text-[#7f7f7f]">My Education</p>
            <div className="bg-[#f5f6f5] border border-[#e7e8e7] rounded-[8px] w-[24px] h-[24px] flex items-center justify-center">
              <span className="text-xs">↗</span>
            </div>
          </div>
          <div className="border-b border-[#e5e5e5] mb-4" />

          {/* Job goal bar */}
          <div className="bg-[#f3f3f3] rounded-[22px] h-[51px] flex items-center px-4 gap-3 mb-6">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" className="flex-shrink-0">
              <rect x="2" y="6" width="15" height="11" rx="2" stroke="#555" strokeWidth="1.5"/>
              <path d="M6 6V5C6 3.343 7.343 2 9 2H10C11.657 2 13 3.343 13 5V6" stroke="#555" strokeWidth="1.5"/>
            </svg>
            <span className="text-[18px] font-normal text-[#787878]">Pursuing a career in UI/UX Design</span>
            <span className="ml-1">😄🥰</span>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-[calc(38%-10px)] sm:left-[80px] top-2 bottom-2 w-[2px] bg-[#7f7f7f]" />

            {education.map((item, i) => (
              <div key={i} className="flex gap-4 sm:gap-6 mb-[52px] last:mb-0 relative">
                {/* Date column */}
                <div className="w-[70px] sm:w-[80px] flex-shrink-0 text-right pr-3">
                  <p className="text-[18px] font-semibold text-[#171717] leading-tight">{item.period}</p>
                  <p className="text-[16px] font-normal text-[#787878]">{item.year}</p>
                </div>

                {/* Dot */}
                <div
                  className="absolute flex-shrink-0 w-[10px] h-[10px] rounded-full border-2 border-[#7f7f7f] bg-white z-10"
                  style={{ left: "calc(38% - 14px)", top: "6px" }}
                />

                {/* Content */}
                <div className="flex-1 pl-4 sm:pl-6">
                  <p className="text-[18px] font-semibold text-[#171717] leading-tight">{item.school}</p>
                  <p className="text-[16px] font-normal text-[#787878] leading-snug">{item.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { assets } from "@/lib/assets";

const contacts = [
  { icon: assets.gmailIcon, label: "Email", href: "mailto:andrey@example.com" },
  { icon: assets.behanceIcon, label: "Behance", href: "https://behance.net" },
  { icon: assets.linkedinIcon, label: "Linkedin", href: "https://linkedin.com" },
  { icon: assets.dribbbleIcon, label: "Dribbble", href: "https://dribbble.com" },
  { icon: assets.telegramIcon, label: "Telegram", href: "https://t.me" },
  { icon: assets.whatsappIcon, label: "Whatsapp", href: "https://wa.me" },
  {
    icon: null,
    label: "Discord",
    href: "https://discord.com",
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8.26 8.26 0 0 0-.412-.833.051.051 0 0 0-.052-.025 13.2 13.2 0 0 0-3.257 1.011.047.047 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.28 13.28 0 0 0 3.995 2.02.051.051 0 0 0 .056-.019 9.35 9.35 0 0 0 .804-1.31.05.05 0 0 0-.01-.059.052.052 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.31a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" fill="#5865F2"/>
      </svg>
    ),
  },
  { icon: assets.instagramIcon, label: "Instagram", href: "https://instagram.com" },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] pb-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Sticker */}
        <div className="hidden lg:block flex-shrink-0 w-[306px]">
          <img src={assets.sticker} alt="Character sticker" className="w-full object-contain" />
        </div>

        {/* Contact grid */}
        <div className="flex-1">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-3 sm:gap-[18px] mb-3 sm:mb-[18px]">
            {contacts.slice(0, 4).map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {c.icon ? (
                  <img src={c.icon} alt={c.label} className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                    {c.svg}
                  </span>
                )}
                <span className="text-[16px] font-semibold text-black tracking-[-0.16px]">
                  {c.label}
                </span>
                <img src={assets.arrowUpRight2} alt="" className="w-[15px] h-[14px] ml-1" />
              </a>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap gap-3 sm:gap-[18px]">
            {contacts.slice(4).map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {c.icon ? (
                  <img src={c.icon} alt={c.label} className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                    {c.svg}
                  </span>
                )}
                <span className="text-[16px] font-semibold text-black tracking-[-0.16px]">
                  {c.label}
                </span>
                <img src={assets.arrowUpRight2} alt="" className="w-[15px] h-[14px] ml-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

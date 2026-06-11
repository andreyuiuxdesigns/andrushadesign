@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'DM Sans', 'Inter', system-ui, sans-serif;
    background-color: #ffffff;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer components {
  .btn-primary {
    @apply bg-[#0070f3] text-white text-sm font-medium rounded-xl px-4 py-2 hover:bg-[#0060d9] transition-colors cursor-pointer;
  }
  .btn-secondary {
    @apply bg-[#f0f0f0] text-black text-sm font-medium rounded-xl px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer;
  }
  .card-base {
    @apply bg-white border border-[#e7e8e7] rounded-[30px] shadow-card;
  }
  .contact-link {
    @apply flex items-center gap-2.5 h-[59px] px-[22px] py-4 bg-white border border-[#e9e9e9] rounded-[22px] hover:shadow-md transition-all cursor-pointer whitespace-nowrap;
  }
}

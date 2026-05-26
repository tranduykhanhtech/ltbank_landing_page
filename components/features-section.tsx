"use client"

import { motion } from "framer-motion"

type FeatureType = {
  id: string
  title: string
  description: string
  size: "large" | "small" | "medium"
  gradient: string
}

const features: FeatureType[] = [
  {
    id: "wallet",
    title: "Quản lý ví thông minh",
    description: "Theo dõi số dư, dòng tiền và kiểm soát tài chính cá nhân trực quan bằng biểu đồ tương tác.",
    size: "large",
    gradient: "from-neon-cyan/20 to-transparent",
  },
  {
    id: "qr",
    title: "Quét mã QR siêu tốc",
    description: "Thanh toán không tiền mặt tức thì chỉ với một lần quét mã VietQR.",
    size: "small",
    gradient: "from-neon-purple/20 to-transparent",
  },
  {
    id: "biometric",
    title: "Sinh trắc học tối tân",
    description: "Face ID và Vân tay bảo vệ an toàn mọi tài khoản của bạn.",
    size: "small",
    gradient: "from-neon-cyan/20 to-transparent",
  },
  {
    id: "notifications",
    title: "Thông báo thời gian thực",
    description: "Nhận thông báo biến động số dư và cảnh báo bảo mật tức thì, giúp bạn kiểm soát tài khoản mọi lúc.",
    size: "medium",
    gradient: "from-neon-purple/20 via-neon-cyan/10 to-transparent",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-neon-purple/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-neon-cyan/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-sm font-medium text-neon-purple">
            Tính năng nổi bật
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Mọi thứ bạn cần,{" "}
            <span className="text-gradient">trong một ứng dụng</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            LTBank mang đến trải nghiệm ngân hàng số toàn diện với những tính năng được thiết kế cho người dùng Việt Nam.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -4 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:glow-mixed flex flex-col justify-between ${
                feature.size === "large"
                  ? "sm:col-span-2 sm:row-span-2 min-h-[440px]"
                  : feature.size === "medium"
                  ? "sm:col-span-2 lg:col-span-2 min-h-[220px]"
                  : "min-h-[220px]"
              }`}
            >
              {/* Gradient Background */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Content Container */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Custom Interactive Previews */}
                {feature.id === "wallet" && (
                  <div className="relative mt-6 h-60 w-full overflow-hidden rounded-2xl border border-white/5 bg-[#08080c] p-4 flex flex-col justify-between shadow-2xl">
                    {/* Fake Phone Status Bar */}
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <div className="h-4.5 w-4.5 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple p-[1px]">
                          <div className="h-full w-full rounded-full bg-black flex items-center justify-center text-[7px] font-bold text-white">
                            LT
                          </div>
                        </div>
                        <span className="text-[9px] text-white/40 font-semibold tracking-wider">LTBANK WALLET</span>
                      </div>
                      <span className="text-[8px] text-white/30 font-mono">9:41 AM</span>
                    </div>

                    {/* Balance Information */}
                    <div className="mt-2 text-left">
                      <span className="text-[9px] text-white/40 block">Tài khoản chính</span>
                      <span className="text-lg font-bold text-white tracking-tight">45,280,000 đ</span>
                    </div>

                    {/* SVG mini chart area */}
                    <div className="h-20 w-full mt-2 relative">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="oklch(0.8 0.2 195)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="oklch(0.8 0.2 195)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area Fill */}
                        <path d="M0 38 C 20 28, 40 10, 60 25 S 80 5, 100 12 L 100 40 L 0 40 Z" fill="url(#chart-glow)" />
                        {/* Line Path */}
                        <path d="M0 38 C 20 28, 40 10, 60 25 S 80 5, 100 12" fill="none" stroke="oklch(0.8 0.2 195)" strokeWidth="1.5" />
                        {/* Highlights */}
                        <circle cx="60" cy="25" r="2.5" fill="oklch(0.7 0.25 295)" className="animate-pulse" />
                        <circle cx="100" cy="12" r="2.5" fill="oklch(0.8 0.2 195)" className="animate-pulse" />
                      </svg>
                    </div>

                    {/* Mini Transaction List */}
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between items-center text-[9px] bg-white/[0.02] border border-white/5 p-1.5 rounded-lg text-left">
                        <span className="text-white/60">☕ The Coffee House</span>
                        <span className="text-white/80 font-bold">-65,000 đ</span>
                      </div>
                    </div>
                  </div>
                )}

                {feature.id === "qr" && (
                  <div className="relative mt-4 h-32 w-full flex items-center justify-center">
                    <div className="relative h-24 w-24 border border-white/10 rounded-2xl flex items-center justify-center bg-zinc-950/40 overflow-hidden">
                      {/* Corner Highlights */}
                      <span className="absolute top-1.5 left-1.5 h-3 w-3 border-t-2 border-l-2 border-neon-purple rounded-tl" />
                      <span className="absolute top-1.5 right-1.5 h-3 w-3 border-t-2 border-r-2 border-neon-purple rounded-tr" />
                      <span className="absolute bottom-1.5 left-1.5 h-3 w-3 border-b-2 border-l-2 border-neon-purple rounded-bl" />
                      <span className="absolute bottom-1.5 right-1.5 h-3 w-3 border-b-2 border-r-2 border-neon-purple rounded-br" />
                      
                      {/* Moving laser scan line */}
                      <span className="h-[2px] w-full bg-gradient-to-r from-transparent via-neon-purple to-transparent absolute top-0 left-0 shadow-[0_0_8px_var(--color-neon-purple)] animate-scan" />
                      
                      {/* QR icon inside */}
                      <QRIcon className="h-12 w-12 text-white/20" />
                    </div>
                  </div>
                )}

                {feature.id === "biometric" && (
                  <div className="relative mt-4 h-32 w-full flex items-center justify-center">
                    <div className="relative h-24 w-24 flex items-center justify-center">
                      {/* Rotating rings */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed border-neon-cyan/20"
                      />
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2.5 rounded-full border border-dotted border-neon-purple/30"
                      />
                      {/* Biometric Shield Icon */}
                      <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 h-11 w-11 rounded-xl bg-gradient-to-tr from-neon-cyan/15 to-neon-purple/15 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                      >
                        <FingerprintIcon className="h-5.5 w-5.5" />
                      </motion.div>
                    </div>
                  </div>
                )}

                {feature.id === "notifications" && (
                  <div className="relative mt-4 h-28 w-full flex flex-col justify-end gap-2 overflow-hidden pb-0.5">
                    {/* Staggered Glassmorphism Notification Banners */}
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-md text-left transition-transform hover:scale-[1.01] duration-300">
                      <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 text-[10px]">
                        💸
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-bold text-white/90">Biến động số dư</span>
                          <span className="text-[7.5px] text-white/30">Vừa xong</span>
                        </div>
                        <p className="text-[8.5px] text-white/60 truncate mt-0.5">Tài khoản nhận <strong className="text-emerald-400 font-semibold">+5,000,000 đ</strong> từ NGUYEN VAN A</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-md text-left transition-transform hover:scale-[1.01] duration-300 opacity-55">
                      <div className="h-6 w-6 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple shrink-0 text-[10px]">
                        🛡️
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-bold text-white/90">Bảo mật thiết bị</span>
                          <span className="text-[7.5px] text-white/30">5 phút trước</span>
                        </div>
                        <p className="text-[8.5px] text-white/60 truncate mt-0.5">Đăng nhập thành công trên thiết bị Chrome macOS</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Border Glow Effect */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-inset ring-primary/50 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function QRIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}

function FingerprintIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  )
}

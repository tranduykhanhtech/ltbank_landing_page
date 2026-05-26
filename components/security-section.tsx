"use client"

import { motion } from "framer-motion"

const securityFeatures = [
  {
    title: "Mã hóa đầu cuối",
    description: "Mọi dữ liệu giao dịch được mã hóa AES-256, tiêu chuẩn bảo mật ngân hàng quốc tế.",
    icon: LockIcon,
    status: "Kích hoạt",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    dotColor: "bg-emerald-400",
    color: "cyan" as const,
  },
  {
    title: "Xác thực 2 lớp (2FA)",
    description: "OTP kết hợp mã PIN và xác thực thiết bị để đảm bảo an toàn tuyệt đối.",
    icon: KeyIcon,
    status: "Bảo vệ",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    dotColor: "bg-emerald-400",
    color: "purple" as const,
  },
  {
    title: "Sinh trắc học",
    description: "Face ID & Touch ID giúp truy cập tài khoản nhanh chóng và an toàn.",
    icon: FingerprintIcon,
    status: "Sẵn sàng",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    dotColor: "bg-emerald-400",
    color: "cyan" as const,
  },
  {
    title: "Giám sát 24/7",
    description: "Hệ thống AI tự động phát hiện giao dịch bất thường và cảnh báo tức thì.",
    icon: EyeIcon,
    status: "Đang quét",
    statusColor: "text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20",
    dotColor: "bg-neon-cyan animate-pulse",
    color: "purple" as const,
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-neon-cyan/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-sm font-medium text-neon-purple">
              <ShieldIcon className="h-4 w-4" />
              Bảo mật & An toàn
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              An toàn là{" "}
              <span className="text-gradient">ưu tiên hàng đầu</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              LTBank áp dụng các tiêu chuẩn bảo mật cao nhất trong ngành ngân hàng, 
              bảo vệ tài khoản và giao dịch của bạn 24/7.
            </p>

            {/* Premium 2x2 Grid of Glassmorphic Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-3xl border border-white/5 bg-card/30 backdrop-blur-md flex flex-col gap-4 text-left transition-all duration-300 relative overflow-hidden group ${
                    feature.color === "cyan"
                      ? "hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
                      : "hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]"
                  }`}
                >
                  {/* Subtle background glow */}
                  <div
                    className={`pointer-events-none absolute -right-16 -bottom-16 h-32 w-32 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      feature.color === "cyan" ? "bg-neon-cyan/10" : "bg-neon-purple/10"
                    }`}
                  />

                  {/* Scanning light beam on hover */}
                  <motion.div
                    initial={{ top: "-10%", opacity: 0 }}
                    whileHover={{ 
                      top: ["-10%", "110%"],
                      opacity: [0, 1, 1, 0],
                      transition: { 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "linear"
                      } 
                    }}
                    className={`absolute inset-x-0 h-[1.5px] pointer-events-none ${
                      feature.color === "cyan" 
                        ? "bg-gradient-to-r from-transparent via-neon-cyan/35 to-transparent" 
                        : "bg-gradient-to-r from-transparent via-neon-purple/35 to-transparent"
                    }`}
                  />

                  {/* Card Header (Icon + Status Badge) */}
                  <div className="flex justify-between items-start relative z-10">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${
                        feature.color === "cyan" 
                          ? "bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black group-hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]" 
                          : "bg-neon-purple/10 border-neon-purple/20 text-neon-purple group-hover:bg-neon-purple group-hover:text-white group-hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                      }`}
                    >
                      <feature.icon className="h-5.5 w-5.5" />
                    </div>

                    {/* Status Light Badge */}
                    <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9px] font-semibold tracking-wider ${feature.statusColor}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${feature.dotColor}`} />
                      {feature.status}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-bold text-white tracking-wide transition-colors group-hover:text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Shield Graphic */}
              <div className="relative aspect-square">
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                  className="absolute inset-0 rounded-full border border-dashed border-neon-cyan/20"
                />
                
                {/* Middle Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                  className="absolute inset-8 rounded-full border border-dashed border-neon-purple/20"
                />

                {/* Inner Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                  className="absolute inset-16 rounded-full border border-dashed border-neon-cyan/20"
                />

                {/* Radar Sweep Effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                  className="absolute inset-16 rounded-full bg-gradient-to-r from-neon-cyan/5 to-transparent pointer-events-none"
                />

                {/* Ripple Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute h-36 w-36 rounded-full border border-neon-cyan/20"
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut" as const,
                      }}
                      style={{ willChange: "transform" }}
                    />
                  ))}
                </div>

                {/* Center Shield */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform" }}
                    className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-white/10 bg-[#08080c]/85 shadow-[0_0_60px_rgba(6,182,212,0.25),_0_0_20px_rgba(168,85,247,0.2)]"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan/15 to-neon-purple/15 pointer-events-none" />
                    <ShieldIcon className="relative z-10 h-16 w-16 text-neon-cyan" />
                    
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 -z-10 rounded-full bg-neon-cyan/10 blur-2xl pointer-events-none" />
                  </motion.div>
                </div>

                {/* Floating Security Icons - Upgraded Glassmorphism style with responsive positioning and GPU acceleration */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ willChange: "transform" }}
                  className="absolute left-[8%] top-[22%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-card/40 backdrop-blur-md shadow-lg"
                >
                  <LockIcon className="h-5.5 w-5.5 text-neon-purple" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ willChange: "transform" }}
                  className="absolute right-[8%] top-[30%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-card/40 backdrop-blur-md shadow-lg"
                >
                  <KeyIcon className="h-5.5 w-5.5 text-neon-cyan" />
                </motion.div>

                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  style={{ willChange: "transform" }}
                  className="absolute left-[12%] bottom-[18%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-card/40 backdrop-blur-md shadow-lg"
                >
                  <FingerprintIcon className="h-5.5 w-5.5 text-neon-purple" />
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  style={{ willChange: "transform" }}
                  className="absolute right-[12%] bottom-[18%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-card/40 backdrop-blur-md shadow-lg"
                >
                  <EyeIcon className="h-5.5 w-5.5 text-neon-cyan" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  )
}

function FingerprintIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
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

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

"use client"

import { motion } from "framer-motion"

export function DownloadSection() {
  return (
    <section id="download" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-purple/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
        >
          {/* Decorative elements */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-neon-cyan/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-neon-purple/20 blur-3xl" />
          
          <div className="relative grid gap-8 p-8 md:grid-cols-2 md:items-center md:p-12 lg:p-16">
            {/* Content */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-sm font-medium text-neon-cyan">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan" />
                Sẵn sàng trải nghiệm
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Tải LTBank ngay{" "}
                <span className="text-gradient">hôm nay</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Trải nghiệm ngân hàng số thế hệ mới với giao diện hiện đại, 
                bảo mật cao và đầy đủ tính năng. Có mặt trên cả iOS và Android.
              </p>
              
              {/* Download buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div
                  className="relative flex items-center gap-2.5 rounded-xl border border-border/50 bg-card/50 px-4 py-2.5 opacity-50 cursor-not-allowed select-none"
                >
                  {/* Coming Soon Badge */}
                  <span className="absolute -right-2 -top-2 z-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-lg">
                    Coming Soon
                  </span>
                  <AppleIcon className="h-6 w-6 text-muted-foreground" />
                  <div className="text-left">
                    <div className="text-[10px] leading-tight text-muted-foreground/70">Tải về trên</div>
                    <div className="text-sm font-semibold text-muted-foreground">App Store</div>
                  </div>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-2.5 transition-all hover:border-neon-purple/50 hover:bg-neon-purple/5"
                >
                  <PlayStoreIcon className="h-6 w-6 text-foreground" />
                  <div className="text-left">
                    <div className="text-[10px] leading-tight text-muted-foreground">Tải về trên</div>
                    <div className="text-sm font-semibold text-foreground">Google Play</div>
                  </div>
                </motion.a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="h-4 w-4 text-neon-cyan" />
                  <span>Bảo mật cao</span>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon className="h-4 w-4 text-neon-purple" />
                  <span>Miễn phí 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <DeviceIcon className="h-4 w-4 text-neon-cyan" />
                  <span>iOS & Android</span>
                </div>
              </div>
            </div>
            
            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-neon-cyan/15 to-neon-purple/15 blur-3xl" />
                
                {/* iPhone Frame */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ willChange: "transform" }}
                  className="relative h-[480px] w-[235px] rounded-[2.5rem] border-[6px] border-zinc-800 bg-black p-1.5 shadow-2xl ring-1 ring-zinc-700/50 select-none"
                >
                  {/* Dynamic Island */}
                  <div className="absolute left-1/2 top-3.5 z-30 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
                  
                  {/* Screen */}
                  <div className="h-full w-full overflow-hidden rounded-[2.1rem] bg-[#08080c] relative flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-5 pt-2.5 pb-1 text-[9px] font-semibold text-white/50">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
                        <div className="h-1.5 w-3 rounded-[1px] bg-white/50" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple p-[1px]">
                          <div className="h-full w-full rounded-full bg-black flex items-center justify-center text-[9px] font-bold text-white">
                            LT
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="text-[8px] text-white/40 leading-none">Xin chào,</div>
                          <div className="text-[10px] font-bold text-white leading-tight mt-0.5">Lâm Thế</div>
                        </div>
                      </div>
                      <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center text-white/80">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="mx-3 my-2.5 p-3 rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/5 relative overflow-hidden text-left">
                      <div className="absolute top-0 right-0 h-12 w-12 bg-neon-cyan/5 blur-lg rounded-full" />
                      <div className="text-[9px] text-white/40 flex items-center gap-1.5">
                        <span>Số dư khả dụng</span>
                        <svg className="h-2.5 w-2.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div className="mt-1 text-base font-bold text-white tracking-tight">45,280,000 đ</div>
                      <div className="mt-1 flex items-center gap-1 text-[8px] text-emerald-400 font-medium">
                        <span>+1,250,000 đ tuần này</span>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-1 px-3 py-1">
                      {[
                        { label: "Chuyển tiền", icon: <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-2-9-18-9 18 9-2zm0 0v-8" /></svg>, color: "from-cyan-500/20 to-blue-500/20 text-cyan-400" },
                        { label: "Quét QR", icon: <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-4v-4m-4 4H4m0 0v-4m0 4v4m0-12h2m-2 0V4m14 0v2m0-2h2m-2 10V8m0 4h2" /></svg>, color: "from-purple-500/20 to-pink-500/20 text-purple-400" },
                        { label: "Nạp thẻ", icon: <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, color: "from-amber-500/20 to-orange-500/20 text-amber-400" },
                        { label: "Tiết kiệm", icon: <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, color: "from-emerald-500/20 to-teal-500/20 text-emerald-400" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1.5">
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-inner`}>
                            {item.icon}
                          </div>
                          <span className="text-[7.5px] text-white/50 text-center font-medium leading-tight max-w-[48px]">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Transaction List */}
                    <div className="flex-1 px-3.5 pt-3 pb-3 bg-white/[0.02] border-t border-white/5 mt-3 text-left">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-bold text-white">Giao dịch gần đây</span>
                        <span className="text-[8px] text-neon-cyan font-semibold">Tất cả</span>
                      </div>
                      <div className="space-y-1.5 overflow-hidden max-h-[135px]">
                        {[
                          { title: "The Coffee House", amount: "-65.000 đ", time: "Hôm nay, 08:32", icon: "☕", isNegative: true },
                          { title: "Nhận tiền từ H.Trang", amount: "+2.500.000 đ", time: "Hôm qua, 18:15", icon: "💸", isNegative: false },
                          { title: "Gói Netflix Premium", amount: "-260.000 đ", time: "24 Th05, 20:00", icon: "🎬", isNegative: true },
                        ].map((tx, idx) => (
                          <div key={idx} className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.01] border border-white/[0.02] transition-colors">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded bg-white/5 flex items-center justify-center text-xs">
                                {tx.icon}
                              </div>
                              <div>
                                <div className="text-[8px] font-bold text-white leading-tight">{tx.title}</div>
                                <div className="text-[6.5px] text-white/30 leading-none mt-0.5">{tx.time}</div>
                              </div>
                            </div>
                            <div className={`text-[8.5px] font-semibold ${tx.isNegative ? "text-white/80" : "text-emerald-400"}`}>
                              {tx.amount}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function DeviceIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

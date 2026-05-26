"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Chuyển tiền 24/7",
    description: "Chuyển tiền nội bộ và liên ngân hàng mọi lúc, mọi nơi với phí 0đ.",
    icon: TransferIcon,
    color: "cyan",
    badge: "Phí 0đ",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Điện, nước, internet, điện thoại - tự động hóa tất cả trong một ứng dụng.",
    icon: BillIcon,
    color: "purple",
    badge: "Tự động",
  },
  {
    title: "Tiết kiệm online",
    description: "Gửi tiết kiệm trực tuyến với lãi suất cực kỳ hấp dẫn, linh hoạt kỳ hạn.",
    icon: SavingsIcon,
    color: "cyan",
    badge: "Lãi suất +0.5%",
  },
  {
    title: "Thẻ ảo & Thẻ vật lý",
    description: "Quản lý thẻ Debit/Credit thông minh, khóa/mở thẻ tức thì chỉ 1 chạm.",
    icon: CardIcon,
    color: "purple",
    badge: "Mở thẻ 10s",
  },
  {
    title: "Quét QR thanh toán",
    description: "Thanh toán nhanh chóng không tiếp xúc tại hàng triệu điểm VietQR toàn quốc.",
    icon: QRIcon,
    color: "cyan",
    badge: "Siêu tốc",
  },
  {
    title: "Lịch sử giao dịch",
    description: "Theo dõi chi tiết mọi giao dịch với bộ lọc thông minh phân loại bằng AI.",
    icon: HistoryIcon,
    color: "purple",
    badge: "Bộ lọc AI",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-neon-purple/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-neon-cyan/5 blur-3xl" />
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
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-sm font-medium text-neon-cyan">
            Dịch vụ ngân hàng
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Trải nghiệm{" "}
            <span className="text-gradient">dịch vụ tài chính toàn diện</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            LTBank cung cấp đầy đủ các dịch vụ ngân hàng số hiện đại, đáp ứng mọi nhu cầu tài chính của bạn.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                scale: 1.015,
                transition: { type: "spring", stiffness: 400, damping: 20 }
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-card/30 p-6 backdrop-blur-md transition-all duration-300 ${
                service.color === "cyan"
                  ? "hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
                  : "hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]"
              }`}
            >
              {/* Subtle background glow */}
              <div
                className={`pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  service.color === "cyan" ? "bg-neon-cyan/10" : "bg-neon-purple/10"
                }`}
              />

              {/* Card Header Row (Icon + Badge) */}
              <div className="flex justify-between items-start mb-6">
                {/* Icon Container with double layered outline */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                    service.color === "cyan" 
                      ? "bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
                      : "bg-neon-purple/10 border-neon-purple/20 text-neon-purple group-hover:bg-neon-purple group-hover:text-white group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  }`}
                >
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Micro badge */}
                <span
                  className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider border backdrop-blur-sm ${
                    service.color === "cyan"
                      ? "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan"
                      : "bg-neon-purple/10 border-neon-purple/30 text-neon-purple"
                  }`}
                >
                  {service.badge}
                </span>
              </div>

              {/* Text content */}
              <div className="text-left relative z-10">
                <h3 className="text-lg font-bold text-white tracking-wide transition-colors group-hover:text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TransferIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 3L21 7L17 11" />
      <path d="M21 7H9" />
      <path d="M7 21L3 17L7 13" />
      <path d="M3 17H15" />
    </svg>
  )
}

function BillIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 15h0M2 9.5h20" />
    </svg>
  )
}

function SavingsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h.01" />
    </svg>
  )
}

function CardIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function QRIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
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

function HistoryIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  )
}

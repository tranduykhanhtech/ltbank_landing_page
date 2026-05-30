"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type CardType = "classic" | "gold" | "platinum" | "limit"
type CardNetwork = "domestic" | "mastercard" | "visa"

interface CardData {
  type: CardType
  name: string
  description: string
  features: string[]
  cardStyle: {
    bg: string
    overlay: string
    textColor: string
    subtextColor: string
    chipBg: string
    chipGrid: string
    glowColor: string
    selectorGlow: string
  }
  isExclusive?: boolean
}

const cardsData: CardData[] = [
  {
    type: "classic",
    name: "Classic",
    description: "Thẻ cơ bản cho mọi nhu cầu hàng ngày",
    features: ["Miễn phí phát hành", "Rút tiền ATM 24/7", "Thanh toán online", "Thông báo giao dịch"],
    cardStyle: {
      bg: "linear-gradient(135deg, #1e293b 0%, #334155 30%, #475569 50%, #334155 70%, #1e293b 100%)",
      overlay: "linear-gradient(135deg, rgba(148,163,184,0.08) 0%, rgba(255,255,255,0.05) 50%, rgba(148,163,184,0.08) 100%)",
      textColor: "text-slate-100",
      subtextColor: "text-slate-400",
      chipBg: "bg-gradient-to-br from-amber-300 to-amber-400",
      chipGrid: "bg-amber-600/30",
      glowColor: "rgba(100,116,139,0.4)",
      selectorGlow: "shadow-slate-500/30",
    },
  },
  {
    type: "gold",
    name: "Gold",
    description: "Ưu đãi hoàn tiền và đặc quyền mua sắm",
    features: ["Hoàn tiền 1%", "Bảo hiểm du lịch", "Ưu đãi đối tác", "Hỗ trợ ưu tiên"],
    cardStyle: {
      bg: "linear-gradient(135deg, #92400e 0%, #d97706 25%, #fbbf24 45%, #f59e0b 55%, #d97706 75%, #92400e 100%)",
      overlay: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 70%, rgba(255,255,255,0.1) 100%)",
      textColor: "text-amber-950",
      subtextColor: "text-amber-900/70",
      chipBg: "bg-gradient-to-br from-amber-200 to-yellow-300",
      chipGrid: "bg-amber-700/20",
      glowColor: "rgba(245,158,11,0.5)",
      selectorGlow: "shadow-amber-400/40",
    },
  },
  {
    type: "platinum",
    name: "Platinum",
    description: "Đẳng cấp với quyền lợi cao cấp",
    features: ["Hoàn tiền 2%", "Phòng chờ sân bay", "Concierge 24/7", "Bảo hiểm toàn diện"],
    cardStyle: {
      bg: "linear-gradient(135deg, #94a3b8 0%, #cbd5e1 20%, #e2e8f0 40%, #f1f5f9 50%, #e2e8f0 60%, #cbd5e1 80%, #94a3b8 100%)",
      overlay: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0.2) 100%)",
      textColor: "text-slate-800",
      subtextColor: "text-slate-600",
      chipBg: "bg-gradient-to-br from-slate-300 to-slate-400",
      chipGrid: "bg-slate-600/20",
      glowColor: "rgba(203,213,225,0.5)",
      selectorGlow: "shadow-slate-300/50",
    },
  },
  {
    type: "limit",
    name: "Limit",
    description: "Thẻ đen đặc quyền - Giới hạn phát hành",
    features: ["Hoàn tiền 5%", "Không giới hạn", "Butler riêng", "Trải nghiệm VIP"],
    cardStyle: {
      bg: "linear-gradient(135deg, #09090b 0%, #18181b 25%, #27272a 45%, #18181b 65%, #09090b 100%)",
      overlay: "linear-gradient(135deg, rgba(161,161,170,0.08) 0%, rgba(255,255,255,0.03) 30%, rgba(161,161,170,0.1) 50%, rgba(255,255,255,0.02) 70%, rgba(161,161,170,0.05) 100%)",
      textColor: "text-zinc-100",
      subtextColor: "text-zinc-500",
      chipBg: "bg-gradient-to-br from-zinc-600 to-zinc-700",
      chipGrid: "bg-zinc-400/20",
      glowColor: "rgba(63,63,70,0.6)",
      selectorGlow: "shadow-zinc-600/30",
    },
    isExclusive: true,
  },
]

export function CardsSection() {
  const [selectedCard, setSelectedCard] = useState<CardType>("classic")
  const [cardNetwork, setCardNetwork] = useState<CardNetwork>("domestic")
  const [cardName, setCardName] = useState("NGUYEN VAN A")
  const [cardNumber, setCardNumber] = useState("4888 8888 8888 8888")
  const [cardCvv, setCardCvv] = useState("888")
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardTexture, setCardTexture] = useState<"waves" | "carbon" | "circuit" | "hexagons" | "none">("waves")


  // Gradient presets for live customization
  const gradientPresets = [
    { id: "nebula", name: "Nebula (Cyan-Tím)", bg: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)", glowColor: "rgba(6,182,212,0.45)" },
    { id: "obsidian", name: "Obsidian (Đen Carbon)", bg: "linear-gradient(135deg, #0f0f12 0%, #27272a 100%)", glowColor: "rgba(39,39,42,0.5)" },
    { id: "solar", name: "Solar (Cam-Đỏ)", bg: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)", glowColor: "rgba(245,158,11,0.4)" },
    { id: "gold", name: "Gold (Hoàng Kim)", bg: "linear-gradient(135deg, #b45309 0%, #fbbf24 50%, #b45309 100%)", glowColor: "rgba(251,191,36,0.4)" },
    { id: "emerald", name: "Emerald (Ngọc Lục)", bg: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)", glowColor: "rgba(16,185,129,0.4)" },
    { id: "silver", name: "Silver (Bạc Bạch Kim)", bg: "linear-gradient(135deg, #94a3b8 0%, #cbd5e1 50%, #e2e8f0 100%)", glowColor: "rgba(203,213,225,0.4)" },
    { id: "carbon", name: "Đen Titan (Carbon)", bg: "linear-gradient(135deg, #18181b 0%, #3f3f46 100%)", glowColor: "rgba(63,63,70,0.5)" }
  ]
  const [customGradient, setCustomGradient] = useState(gradientPresets[0])

  const activeCard = cardsData.find(c => c.type === selectedCard)!

  const handleCardTypeChange = (type: CardType) => {
    setSelectedCard(type)
    if (type === "classic") {
      setCustomGradient(gradientPresets[0]) // Nebula
    } else if (type === "gold") {
      setCustomGradient(gradientPresets[3]) // Gold
    } else if (type === "platinum") {
      setCustomGradient(gradientPresets[5]) // Silver
    } else if (type === "limit") {
      setCustomGradient(gradientPresets[1]) // Obsidian
    }
  }

  const randomizeCardDetails = () => {
    const num = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('')
    const formatted = num.match(/.{1,4}/g)?.join(' ') || "4888 8888 8888 8888"
    setCardNumber(formatted)
    
    const cvvNum = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('')
    setCardCvv(cvvNum)
  }



  return (
    <section id="cards" className="relative py-24 sm:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-neon-purple/5 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-neon-cyan/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-sm font-medium text-neon-purple">
            <CreditCardIcon className="h-4 w-4" />
            Thẻ ngân hàng
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Thiết kế & Tùy biến thẻ{" "}
            <span className="text-gradient">cá nhân</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Bản xem trước 3D tương tác. Tự do phối màu, chọn họa tiết chất liệu và lật mặt sau để xem mã bảo mật.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Card Preview and Flip Control */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  boxShadow: `0 0 60px ${selectedCard === "limit" ? "rgba(212, 175, 55, 0.18)" : customGradient.glowColor}, 0 0 120px ${selectedCard === "limit" ? "rgba(212, 175, 55, 0.12)" : customGradient.glowColor}`,
                }}
                transition={{ duration: 0.5 }}
                className="absolute -inset-4 rounded-3xl pointer-events-none"
              />
              
              {/* 3D Card (Front and Back) */}
              <div 
                className="relative cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{ 
                    rotateY: isFlipped ? 180 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  className="relative aspect-[1.586/1] w-[335px] sm:w-[395px] rounded-2xl shadow-2xl preserve-3d origin-center select-none group"
                  style={{ 
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* FRONT FACE */}
                  <div 
                    className="absolute inset-0 p-6 flex flex-col justify-between rounded-2xl overflow-hidden"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg) translateZ(1px)",
                      background: selectedCard === "limit" ? "linear-gradient(135deg, #050507 0%, #121217 50%, #050507 100%)" : customGradient.bg
                    }}
                  >
                    {/* Decorative overlay gradient for shine */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ background: activeCard.cardStyle.overlay }}
                    />

                    {/* Holographic light reflect overlay (Premium detail - Gold for Limit card) */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
                      style={{
                        background: selectedCard === "limit"
                          ? "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, transparent 50%, rgba(212, 175, 55, 0.15) 100%)"
                          : "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%, rgba(255, 255, 255, 0.2) 100%)"
                      }}
                    />

                    {/* Brushed Titanium Pattern (Limit-exclusive) */}
                    {selectedCard === "limit" && (
                      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="brushed-titanium" width="100" height="4" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                            <line x1="0" y1="2" x2="100" y2="2" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#brushed-titanium)" />
                      </svg>
                    )}

                    {/* Patterns */}
                    {selectedCard !== "limit" && cardTexture === "waves" && (
                      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.2]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id={`waves-${selectedCard}`} width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
                            <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#waves-${selectedCard})`} />
                      </svg>
                    )}

                    {selectedCard !== "limit" && cardTexture === "carbon" && (
                      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id={`carbon-${selectedCard}`} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <rect width="6" height="12" fill="currentColor"/>
                            <rect width="12" height="6" fill="currentColor"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#carbon-${selectedCard})`} />
                      </svg>
                    )}

                    {selectedCard !== "limit" && cardTexture === "circuit" && (
                      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id={`circuit-${selectedCard}`} width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M15 15 h30 v30 h-30 z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <circle cx="15" cy="15" r="3" fill="currentColor"/>
                            <circle cx="45" cy="45" r="3" fill="currentColor"/>
                            <path d="M0 30 h15 M45 30 h15 M30 0 v15 M30 45 v15" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M15 45 l-15 15 M45 15 l15 -15" stroke="currentColor" strokeWidth="1.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#circuit-${selectedCard})`} />
                      </svg>
                    )}

                    {selectedCard !== "limit" && cardTexture === "hexagons" && (
                      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id={`hexagons-${selectedCard}`} width="28" height="48.5" patternUnits="userSpaceOnUse">
                            <path d="M14 0 L28 8 L28 24 L14 32 L0 24 L0 8 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M14 48.5 L28 40.5 L28 24 L14 32 L0 24 L0 40.5 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#hexagons-${selectedCard})`} />
                      </svg>
                    )}

                    {/* Large decorative circle */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/[0.07]" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-white/[0.05]" />

                    {/* Card Content */}
                    <div className="relative flex h-full flex-col justify-between text-left">
                      {/* Top Row */}
                      <div className="flex items-start justify-between">
                        <div>
                          <p className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${activeCard.cardStyle.subtextColor}`}>
                            LTBank
                          </p>
                          <p className={`mt-0.5 text-lg font-bold tracking-wide ${activeCard.cardStyle.textColor}`}>
                            {activeCard.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {activeCard.isExclusive && (
                            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-sm ring-1 ring-white/20">
                              Exclusive
                            </span>
                          )}
                          <ContactlessIcon className={`h-6 w-6 ${activeCard.cardStyle.textColor} opacity-50`} />
                        </div>
                      </div>

                      {/* EMV Chip */}
                      <div className={`h-11 w-14 rounded-lg ${activeCard.cardStyle.chipBg} shadow-sm`}>
                        <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-[1px] p-[3px]">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className={`rounded-[2px] ${activeCard.cardStyle.chipGrid}`} />
                          ))}
                        </div>
                      </div>

                      {/* Card Number */}
                      <div className={`font-mono text-[17px] tracking-[0.25em] ${activeCard.cardStyle.textColor}`}>
                        {cardNumber}
                      </div>

                      {/* Bottom Row */}
                      <div className="flex items-end justify-between">
                        <div>
                          <p className={`text-[9px] uppercase tracking-[0.2em] ${activeCard.cardStyle.subtextColor}`}>
                            Card Holder
                          </p>
                          <p className={`mt-0.5 text-sm font-semibold uppercase tracking-wider ${activeCard.cardStyle.textColor}`}>
                            {cardName || "NGUYEN VAN A"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`text-[9px] uppercase tracking-[0.2em] ${activeCard.cardStyle.subtextColor}`}>
                            Valid Thru
                          </p>
                          <p className={`mt-0.5 text-sm font-semibold ${activeCard.cardStyle.textColor}`}>
                            12/28
                          </p>
                        </div>
                        <CardNetworkLogo network={cardNetwork} cardType={activeCard.type} />
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div 
                    className="absolute inset-0 flex flex-col justify-between py-6 text-left rounded-2xl overflow-hidden"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translateZ(1px)",
                      background: selectedCard === "limit" ? "linear-gradient(135deg, #050507 0%, #121217 50%, #050507 100%)" : customGradient.bg
                    }}
                  >
                    {/* Magnetic Stripe */}
                    <div className="w-full h-10 bg-zinc-950/90 mt-2" />

                    {/* Signature Panel */}
                    <div className="px-6 flex flex-col gap-1">
                      <p className="text-[7px] text-white/50 uppercase tracking-widest text-right pr-16">Authorized Signature</p>
                      <div className="w-full h-8 bg-zinc-100 flex items-center justify-between px-3 rounded">
                        {/* Fake signature text */}
                        <span className="font-serif italic text-zinc-400 text-xs select-none">{cardName.toLowerCase()}</span>
                        {/* CVV */}
                        <span className="font-mono font-bold text-zinc-900 text-sm tracking-wider bg-white px-2 py-0.5 rounded shadow-sm border border-zinc-200">{cardCvv}</span>
                      </div>
                    </div>

                    {/* Legal text */}
                    <div className="px-6 text-[7.5px] text-white/40 leading-normal">
                      <p>Thẻ này thuộc sở hữu của Ngân hàng số LTBank. Khi nhặt được vui lòng gửi trả lại chi nhánh LTBank gần nhất.</p>
                    </div>
                  </div>
                </motion.div>
              </div>


            </div>
          </motion.div>

          {/* Card Customization Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Custom Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground text-left">
                Tên in trên thẻ
              </label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value.toUpperCase())}
                maxLength={24}
                placeholder="NGUYEN VAN A"
                className="w-full rounded-xl border border-glass-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan text-sm"
              />
            </div>

            {/* Custom Card Number */}
            <div className="text-left">
              <label className="mb-2 block text-sm font-medium text-foreground">Số thẻ</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => {
                  const formatted = e.target.value
                    .replace(/\D/g, "")
                    .match(/.{1,4}/g)
                    ?.join(" ")
                    .substring(0, 19) || "";
                  setCardNumber(formatted);
                }}
                className="w-full rounded-xl border border-glass-border bg-secondary/50 px-4 py-3 text-foreground focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan text-sm tracking-widest font-mono"
              />
            </div>

            {/* Card Network Selector */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground text-left">
                Mạng liên kết thẻ
              </label>
              <div className="flex gap-2 rounded-xl border border-glass-border bg-secondary/30 p-1">
                {([
                  { value: "domestic" as CardNetwork, label: "Nội địa", icon: <DomesticBadge /> },
                  { value: "mastercard" as CardNetwork, label: "Mastercard", icon: <MastercardBadge /> },
                  { value: "visa" as CardNetwork, label: "Visa", icon: <VisaBadge /> },
                ]).map((network) => (
                  <button
                    key={network.value}
                    onClick={() => setCardNetwork(network.value)}
                    className={`relative flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                      cardNetwork === network.value
                        ? "bg-card text-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground/80"
                    }`}
                  >
                    {cardNetwork === network.value && (
                      <motion.div
                        layoutId="network-selector"
                        className="absolute inset-0 rounded-lg bg-card shadow-md"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      {network.icon}
                      {network.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color & Material Customizer */}
            {selectedCard === "limit" ? (
              <div className="rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent p-4 text-left shadow-inner">
                <div className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-[#d4af37]">✨</span>
                  <div>
                    <p className="text-xs font-bold text-white/90 uppercase tracking-wider">Đặc quyền Thẻ Đen (Obsidian Titanium)</p>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                      Dòng thẻ <span className="text-[#d4af37] font-semibold">Limit</span> sở hữu diện mạo Đen nhám Obsidian độc quyền kết hợp công nghệ phay xước Titanium cao cấp mặc định, tôn vinh vị thế đặc biệt của chủ sở hữu. Các tùy biến về màu sắc và vân họa tiết thông thường được tắt để bảo tồn tính độc bản.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Color swatches */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground text-left">Phối màu thẻ (Gradient)</label>
                  <div className="flex flex-wrap gap-2.5">
                    {gradientPresets
                      .filter((preset) => {
                        const isBlack = preset.id === "obsidian" || preset.id === "carbon";
                        return !isBlack;
                      })
                      .map((preset) => (
                        <button
                          key={preset.id}
                          onClick={() => setCustomGradient(preset)}
                          className={`group relative h-9 w-9 rounded-full border transition-all duration-300 ${
                            customGradient.id === preset.id
                              ? "border-white ring-2 ring-neon-cyan/50 scale-110 shadow-lg"
                              : "border-transparent opacity-80 hover:opacity-100 hover:scale-105"
                          }`}
                          style={{ background: preset.bg }}
                          title={preset.name}
                        >
                          {customGradient.id === preset.id && (
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white">✓</span>
                          )}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Texture Selector */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground text-left">Chất liệu & Vân họa tiết</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: "waves", label: "Vòng sóng" },
                      { id: "carbon", label: "Carbon" },
                      { id: "circuit", label: "Mạch" },
                      { id: "hexagons", label: "Lục giác" },
                      { id: "none", label: "Trơn" }
                    ].map((pattern) => (
                      <button
                        key={pattern.id}
                        onClick={() => setCardTexture(pattern.id as any)}
                        className={`flex-1 min-w-[70px] rounded-lg border py-2 text-xs font-semibold transition-all ${
                          cardTexture === pattern.id
                            ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan"
                            : "border-glass-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {pattern.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Card Tiers (Benefits Selector) */}
            <div>
              <label className="mb-2.5 block text-sm font-medium text-foreground text-left">
                Hạng thẻ & Quyền lợi
              </label>
              <div className="grid grid-cols-4 gap-2">
                {cardsData.map((card) => (
                  <button
                    key={card.type}
                    onClick={() => handleCardTypeChange(card.type)}
                    className={`relative rounded-lg border py-2 text-center text-xs font-bold uppercase transition-all duration-200 ${
                      selectedCard === card.type
                        ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan shadow-sm"
                        : "border-glass-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {card.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Features (Dynamic rendering based on selected tier) */}
            <div className="rounded-2xl border border-glass-border bg-secondary/30 p-4 text-left">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/90">Quyền lợi thẻ {activeCard.name}</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {activeCard.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-neon-cyan/10 text-neon-cyan">
                      <CheckIcon className="h-2.5 w-2.5" />
                    </span>
                    <span className="truncate">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CreditCardIcon({ className }: { className?: string }) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ContactlessIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <path d="M12 18c3.3 0 6-2.7 6-6s-2.7-6-6-6" />
      <path d="M12 14c1.1 0 2-.9 2-2s-.9-2-2-2" />
      <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2" />
    </svg>
  )
}

function CardNetworkLogo({ network, cardType }: { network: CardNetwork; cardType: CardType }) {
  const isDark = cardType === "classic" || cardType === "limit"

  if (network === "visa") {
    return (
      <svg viewBox="0 0 48 16" className="h-6 w-auto" fill="none">
        <text
          x="0"
          y="13"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontStyle="italic"
          fontSize="16"
          fill={cardType === "limit" ? "#d4af37" : (isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,80,0.7)")}
          letterSpacing="-0.5"
        >
          VISA
        </text>
      </svg>
    )
  }

  if (network === "mastercard") {
    if (cardType === "limit") {
      return (
        <div className="flex items-center -space-x-2">
          <div className="h-7 w-7 rounded-full bg-[#d4af37]/65 shadow-inner" />
          <div className="h-7 w-7 rounded-full bg-[#e5c158]/45 shadow-inner" />
        </div>
      )
    }
    return (
      <div className="flex items-center -space-x-2">
        <div className={`h-7 w-7 rounded-full ${isDark ? "bg-red-500/60" : "bg-red-500/50"}`} />
        <div className={`h-7 w-7 rounded-full ${isDark ? "bg-amber-400/50" : "bg-amber-400/50"}`} />
      </div>
    )
  }

  // Domestic / Nội địa - LTBank branding
  return (
    <span className={`text-base font-bold italic tracking-tight ${
      cardType === "limit" ? "text-[#d4af37]" : (isDark ? "text-white/70" : "text-black/60")
    }`}>
      LTBank
    </span>
  )
}

function DomesticBadge() {
  return (
    <span className="shrink-0 text-[11px] font-bold italic tracking-tight">LT</span>
  )
}

function MastercardBadge() {
  return (
    <div className="flex shrink-0 items-center -space-x-1">
      <div className="h-3.5 w-3.5 rounded-full bg-red-500/80" />
      <div className="h-3.5 w-3.5 rounded-full bg-amber-400/80" />
    </div>
  )
}

function VisaBadge() {
  return (
    <span className="shrink-0 text-[11px] font-bold italic tracking-tight text-blue-400">VISA</span>
  )
}

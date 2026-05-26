"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CreditCard, Info, ShieldCheck, AlertCircle } from "lucide-react"

export default function FeesPage() {
  const [activeTab, setActiveTab] = useState<"fees" | "limits">("fees")

  const cardTiers = [
    {
      name: "Classic",
      bg: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
      textColor: "text-slate-100",
      glowColor: "rgba(100,116,139,0.2)",
      target: "Mọi khách hàng",
      annualFee: "Miễn phí trọn đời",
      limit: "Hạn mức: 50 triệu/ngày",
    },
    {
      name: "Gold",
      bg: "linear-gradient(135deg, #b45309 0%, #fbbf24 100%)",
      textColor: "text-amber-950",
      glowColor: "rgba(245,158,11,0.25)",
      target: "Khách hàng mua sắm nhiều",
      annualFee: "199.000 đ / năm",
      limit: "Hạn mức: 200 triệu/ngày",
    },
    {
      name: "Platinum",
      bg: "linear-gradient(135deg, #94a3b8 0%, #f1f5f9 100%)",
      textColor: "text-slate-800",
      glowColor: "rgba(203,213,225,0.3)",
      target: "Khách hàng ưu tiên",
      annualFee: "499.000 đ / năm",
      limit: "Hạn mức: 1 tỷ/ngày",
    },
    {
      name: "Limit (Thẻ Đen)",
      bg: "linear-gradient(135deg, #09090b 0%, #27272a 100%)",
      textColor: "text-[#d4af37]",
      glowColor: "rgba(212,175,55,0.2)",
      target: "Khách hàng VIP độc quyền",
      annualFee: "1.999.000 đ / năm",
      limit: "Hạn mức: Không giới hạn",
      isPremium: true,
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-neon-cyan/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-neon-purple/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 space-y-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4 group text-muted-foreground hover:text-white transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Quay lại trang chủ
            </Button>
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-xs font-semibold text-neon-cyan">
                <CreditCard className="h-3.5 w-3.5" />
                Biểu phí & Hạn mức thẻ
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-balance">
                Quy định về <span className="text-gradient">phí & hạn mức giao dịch</span>
              </h1>
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              Ngày áp dụng: {new Date().toLocaleDateString("vi-VN")} | Số: 04/2026/QD-LTBANK
            </p>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 flex gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 backdrop-blur-md">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
          <div className="text-xs text-amber-500/80 leading-relaxed">
            <strong>Thông tin dự án:</strong> Đây là bảng thông số biểu phí demo được thiết kế cho sản phẩm giả định LTBank. Mọi biểu phí và giao dịch hiển thị trên trang web này đều chỉ mang tính chất minh họa học tập và triển lãm kỹ thuật.
          </div>
        </div>

        {/* Card Tiers Overview */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {cardTiers.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{ 
                y: -6,
                boxShadow: `0 15px 35px -5px ${tier.glowColor}, 0 0 20px -5px ${tier.glowColor}`,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                background: tier.bg,
                boxShadow: `0 10px 30px -10px ${tier.glowColor}`,
                willChange: "transform",
              }}
              className="p-5 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[170px] relative overflow-hidden cursor-pointer select-none"
            >
              {/* Card Overlay shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />

              <div className="relative z-10">
                <h3 className={`text-xl font-bold tracking-wide ${tier.textColor}`}>
                  {tier.name}
                </h3>
                <p className={`text-[10px] opacity-75 font-medium mt-1 leading-normal ${tier.textColor}`}>
                  {tier.target}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                <div className={`text-xs font-semibold ${tier.textColor}`}>
                  Phí thường niên: <span className="underline decoration-dotted">{tier.annualFee}</span>
                </div>
                <div className={`text-[10.5px] font-medium opacity-85 mt-1.5 ${tier.textColor}`}>
                  {tier.limit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-glass-border bg-secondary/30 p-1 backdrop-blur-md max-w-md w-full">
            <button
              onClick={() => setActiveTab("fees")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "fees"
                  ? "bg-card text-neon-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)] border border-neon-cyan/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Biểu phí dịch vụ
            </button>
            <button
              onClick={() => setActiveTab("limits")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "limits"
                  ? "bg-card text-neon-purple shadow-[0_0_15px_rgba(168,85,247,0.15)] border border-neon-purple/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Hạn mức giao dịch
            </button>
          </div>
        </div>

        {/* Tables Container */}
        <div className="rounded-3xl border border-white/5 bg-card/25 p-4 sm:p-6 backdrop-blur-md overflow-hidden relative shadow-2xl">
          {activeTab === "fees" ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-muted-foreground font-semibold">
                    <th className="py-4 px-3 w-[30%]">Loại phí dịch vụ</th>
                    <th className="py-4 px-3 text-center">Thẻ Classic</th>
                    <th className="py-4 px-3 text-center">Thẻ Gold</th>
                    <th className="py-4 px-3 text-center">Thẻ Platinum</th>
                    <th className="py-4 px-3 text-center text-[#d4af37]">Thẻ Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Phí phát hành thẻ phi vật lý (Thẻ ảo)</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Phí phát hành thẻ vật lý thông thường</td>
                    <td className="py-4 px-3 text-center">50.000 đ</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Phí phát hành nhanh thẻ vật lý</td>
                    <td className="py-4 px-3 text-center">150.000 đ</td>
                    <td className="py-4 px-3 text-center">100.000 đ</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Phí thường niên / Phí duy trì</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí trọn đời</td>
                    <td className="py-4 px-3 text-center">199.000 đ / năm</td>
                    <td className="py-4 px-3 text-center">499.000 đ / năm</td>
                    <td className="py-4 px-3 text-center text-amber-500">1.999.000 đ / năm<br /><span className="text-[10px] text-muted-foreground leading-normal">(Năm đầu: Miễn phí)</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Rút tiền mặt tại ATM LTBank</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Rút tiền mặt tại ATM khác (Nội địa)</td>
                    <td className="py-4 px-3 text-center">4.400 đ / giao dịch</td>
                    <td className="py-4 px-3 text-center">3.300 đ / giao dịch</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Rút tiền mặt tại ATM quốc tế (Ngoại quốc)</td>
                    <td className="py-4 px-3 text-center">4% số tiền giao dịch<br /><span className="text-[10px] text-muted-foreground">(tối thiểu 50.000 đ)</span></td>
                    <td className="py-4 px-3 text-center">3% số tiền giao dịch<br /><span className="text-[10px] text-muted-foreground">(tối thiểu 50.000 đ)</span></td>
                    <td className="py-4 px-3 text-center">2% số tiền giao dịch<br /><span className="text-[10px] text-muted-foreground">(tối thiểu 40.000 đ)</span></td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Phí chuyển đổi ngoại tệ (Quốc tế)</td>
                    <td className="py-4 px-3 text-center">2.8% số tiền giao dịch</td>
                    <td className="py-4 px-3 text-center">2.3% số tiền giao dịch</td>
                    <td className="py-4 px-3 text-center">1.8% số tiền giao dịch</td>
                    <td className="py-4 px-3 text-center text-[#d4af37] font-semibold">0.95% số tiền giao dịch<br /><span className="text-[10px] text-muted-foreground leading-normal">(Thấp nhất thị trường)</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Phí cấp lại thẻ do thất lạc/mất mát</td>
                    <td className="py-4 px-3 text-center">50.000 đ / thẻ</td>
                    <td className="py-4 px-3 text-center">50.000 đ / thẻ</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">Miễn phí</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-muted-foreground font-semibold">
                    <th className="py-4 px-3 w-[30%]">Hạn mức giao dịch</th>
                    <th className="py-4 px-3 text-center">Thẻ Classic</th>
                    <th className="py-4 px-3 text-center">Thẻ Gold</th>
                    <th className="py-4 px-3 text-center">Thẻ Platinum</th>
                    <th className="py-4 px-3 text-center text-[#d4af37]">Thẻ Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Hạn mức rút tiền mặt tại ATM (Tối đa / Lần)</td>
                    <td className="py-4 px-3 text-center">5.000.000 đ</td>
                    <td className="py-4 px-3 text-center">10.000.000 đ</td>
                    <td className="py-4 px-3 text-center">10.000.000 đ</td>
                    <td className="py-4 px-3 text-center">20.000.000 đ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Hạn mức rút tiền mặt tại ATM (Tối đa / Ngày)</td>
                    <td className="py-4 px-3 text-center">20.000.000 đ</td>
                    <td className="py-4 px-3 text-center">50.000.000 đ</td>
                    <td className="py-4 px-3 text-center">100.000.000 đ</td>
                    <td className="py-4 px-3 text-center">500.000.000 đ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Hạn mức chuyển khoản nội bộ / Ngày</td>
                    <td className="py-4 px-3 text-center">50.000.000 đ</td>
                    <td className="py-4 px-3 text-center">200.000.000 đ</td>
                    <td className="py-4 px-3 text-center">1.000.000.000 đ</td>
                    <td className="py-4 px-3 text-center text-[#d4af37] font-semibold">Không giới hạn</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Hạn mức chuyển khoản liên ngân hàng / Ngày</td>
                    <td className="py-4 px-3 text-center">50.000.000 đ</td>
                    <td className="py-4 px-3 text-center">100.000.000 đ</td>
                    <td className="py-4 px-3 text-center">500.000.000 đ</td>
                    <td className="py-4 px-3 text-center text-[#d4af37] font-semibold">Không giới hạn</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Hạn mức thanh toán trực tuyến (E-com) / Ngày</td>
                    <td className="py-4 px-3 text-center">50.000.000 đ</td>
                    <td className="py-4 px-3 text-center">150.000.000 đ</td>
                    <td className="py-4 px-3 text-center">500.000.000 đ</td>
                    <td className="py-4 px-3 text-center text-[#d4af37] font-semibold">Không giới hạn</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-white">Hạn mức thanh toán chạm POS cửa hàng / Ngày</td>
                    <td className="py-4 px-3 text-center">30.000.000 đ</td>
                    <td className="py-4 px-3 text-center">100.000.000 đ</td>
                    <td className="py-4 px-3 text-center">300.000.000 đ</td>
                    <td className="py-4 px-3 text-center text-[#d4af37] font-semibold">Không giới hạn</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Benefits Note */}
        <div className="mt-8 p-5 rounded-2xl bg-secondary/20 border border-white/5 flex items-start gap-3.5 text-left">
          <ShieldCheck className="h-5 w-5 text-neon-cyan shrink-0 mt-0.5" />
          <div className="text-xs text-muted-foreground leading-relaxed space-y-1">
            <p className="font-semibold text-white/90">Quy định miễn phí thường niên thẻ tín dụng quốc tế:</p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>Thẻ <strong>Gold</strong> được miễn phí thường niên năm tiếp theo nếu tổng doanh số chi tiêu năm trước đạt trên 30 triệu đồng.</li>
              <li>Thẻ <strong>Platinum</strong> được miễn phí thường niên năm tiếp theo nếu tổng doanh số chi tiêu năm trước đạt trên 60 triệu đồng.</li>
              <li>Đặc biệt đối với thẻ <strong>Limit</strong>, chủ sở hữu thẻ được ưu đãi giảm 50% phí thường niên trọn đời nếu nằm trong danh sách xếp hạng thành viên VIP Diamond của LTBank.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type CalculatorType = "savings" | "loan"
type LoanType = "priority" | "secured" | "unsecured"

export function CalculatorSection() {
  const [activeTab, setActiveTab] = useState<CalculatorType>("savings")
  
  // Savings calculator state
  const [savingsAmount, setSavingsAmount] = useState(50000000)
  const [savingsMonths, setSavingsMonths] = useState(12)
  const [savingsRate, setSavingsRate] = useState(5.5)
  
  // Loan calculator state
  const [loanAmount, setLoanAmount] = useState(200000000)
  const [loanMonths, setLoanMonths] = useState(24)
  const [loanRate, setLoanRate] = useState(8.5)
  const [loanType, setLoanType] = useState<LoanType>("secured")

  // Calculate savings interest
  const savingsInterest = (savingsAmount * savingsRate * savingsMonths) / (12 * 100)
  const savingsTotal = savingsAmount + savingsInterest
  const savingsPercent = savingsTotal > 0 ? (savingsAmount / savingsTotal) * 100 : 100
  const savingsInterestPercent = 100 - savingsPercent
  
  // Calculate loan payment (simple interest for display)
  const loanInterest = (loanAmount * loanRate * loanMonths) / (12 * 100)
  const loanTotal = loanAmount + loanInterest
  const monthlyPayment = loanTotal / loanMonths
  const loanPercent = loanTotal > 0 ? (loanAmount / loanTotal) * 100 : 100
  const loanInterestPercent = 100 - loanPercent

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatLargeNumber = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toLocaleString("vi-VN", { maximumFractionDigits: 1 })} tỷ`
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toLocaleString("vi-VN", { maximumFractionDigits: 0 })} triệu`
    }
    return `${value.toLocaleString("vi-VN")} đ`
  }

  const handleSavingsMonthsChange = (months: number) => {
    setSavingsMonths(months)
    if (months < 6) {
      if (savingsRate > 4.75) setSavingsRate(4.75)
    }
  }

  const handleLoanTypeChange = (type: LoanType) => {
    setLoanType(type)
    if (type === "priority") {
      if (loanMonths > 12) setLoanMonths(12)
      setLoanRate(4.0)
    } else if (type === "secured") {
      setLoanRate(7.5)
    } else if (type === "unsecured") {
      setLoanRate(15.0)
    }
  }

  const loanRateRange = (() => {
    if (loanType === "priority") return { min: 2.0, max: 4.0, step: 0.1 }
    if (loanType === "secured") return { min: 5.5, max: 12.0, step: 0.1 }
    return { min: 10.0, max: 24.0, step: 0.1 }
  })()

  const loanMonthsRange = (() => {
    if (loanType === "priority") return { min: 3, max: 12, step: 1 }
    return { min: 6, max: 120, step: 1 }
  })()

  return (
    <section id="calculator" className="relative py-24 sm:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon-cyan/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-neon-purple/5 blur-3xl" />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-sm font-medium text-neon-cyan">
            <CalculatorIcon className="h-4 w-4" />
            Kế hoạch tương lai
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Lên kế hoạch{" "}
            <span className="text-gradient">tài chính</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tính toán lãi suất tích lũy hoặc thiết lập bài toán vay tiêu dùng để sẵn sàng cho mọi mục tiêu lớn.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-glass-border bg-card/40 p-6 backdrop-blur-md sm:p-8 shadow-2xl">
            {/* Ambient glows inside card */}
            <div className="absolute -left-16 -top-16 h-32 w-32 bg-neon-cyan/10 blur-2xl rounded-full pointer-events-none" />
            <div className="absolute -right-16 -bottom-16 h-32 w-32 bg-neon-purple/10 blur-2xl rounded-full pointer-events-none" />
            
            {/* Tabs */}
            <div className="relative z-10 flex rounded-2xl bg-zinc-900/85 p-1 sm:p-1.5 border border-white/5">
              <button
                onClick={() => setActiveTab("savings")}
                className={`relative flex flex-1 items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-2.5 sm:py-3.5 px-2 sm:px-4 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "savings"
                    ? "bg-neon-cyan text-black shadow-lg shadow-neon-cyan/20 scale-[1.01]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
                }`}
              >
                <PiggyBankIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0" />
                <span className="hidden sm:inline">Tích lũy tiết kiệm</span>
                <span className="inline sm:hidden">Tiết kiệm</span>
              </button>
              <button
                onClick={() => setActiveTab("loan")}
                className={`relative flex flex-1 items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-2.5 sm:py-3.5 px-2 sm:px-4 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "loan"
                    ? "bg-neon-purple text-white shadow-lg shadow-neon-purple/20 scale-[1.01]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
                }`}
              >
                <BankIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0" />
                <span className="hidden sm:inline">Tính khoản vay tiêu dùng</span>
                <span className="inline sm:hidden">Khoản vay</span>
              </button>
            </div>

            {/* Savings Calculator */}
            {activeTab === "savings" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch"
              >
                {/* Inputs */}
                <div className="space-y-8 lg:col-span-7 flex flex-col justify-between">
                  {/* Amount Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white/90">Số tiền muốn tích lũy</span>
                      <span className="text-neon-cyan font-bold text-lg">{formatLargeNumber(savingsAmount)}</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={1000000}
                        max={1000000000}
                        step={1000000}
                        value={savingsAmount}
                        onChange={(e) => setSavingsAmount(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-neon-cyan bg-zinc-800"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>1 triệu đ</span>
                      <span>1 tỷ đ</span>
                    </div>
                    
                    {/* Quick Select Buttons */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[10000000, 50000000, 100000000, 500000000].map((val) => (
                        <button
                          key={val}
                          onClick={() => setSavingsAmount(val)}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                            savingsAmount === val
                              ? "border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan shadow-sm"
                              : "border-white/5 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {formatLargeNumber(val)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Months Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white/90">Kỳ hạn gửi tiết kiệm</span>
                      <div className="flex items-center gap-2">
                        {savingsMonths < 6 && (
                          <span className="rounded-full bg-neon-cyan/15 border border-neon-cyan/30 px-2.5 py-0.5 text-[10px] font-bold text-neon-cyan">
                            Trần NHNN
                          </span>
                        )}
                        <span className="text-neon-cyan font-bold text-lg">{savingsMonths} tháng</span>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={1}
                        max={36}
                        value={savingsMonths}
                        onChange={(e) => handleSavingsMonthsChange(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-neon-cyan bg-zinc-800"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>1 tháng</span>
                      <span>36 tháng</span>
                    </div>

                    {/* Quick Select Buttons */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[3, 6, 12, 24, 36].map((m) => (
                        <button
                          key={m}
                          onClick={() => handleSavingsMonthsChange(m)}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                            savingsMonths === m
                              ? "border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan shadow-sm"
                              : "border-white/5 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {m} tháng
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rate Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white/90">Lãi suất gửi tiết kiệm</span>
                      <span className="text-neon-cyan font-bold text-lg">{savingsRate}% / năm</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={0.5}
                        max={savingsMonths < 6 ? 4.75 : 9.0}
                        step={0.05}
                        value={savingsRate}
                        onChange={(e) => setSavingsRate(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-neon-cyan bg-zinc-800"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>0.5%</span>
                      <span>{savingsMonths < 6 ? "4.75% (Trần NHNN)" : "9.0%"}</span>
                    </div>
                  </div>
                </div>

                {/* Results Column */}
                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-glass-border p-6 shadow-xl flex flex-col justify-between">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-neon-cyan/5 blur-2xl rounded-full pointer-events-none" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Báo cáo tích lũy dự kiến</h3>
                    
                    {/* Main highlight */}
                    <div className="mt-5 text-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">Tổng tiền nhận cuối kỳ</span>
                      <div className="mt-1 text-2xl font-extrabold text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        {formatCurrency(savingsTotal)}
                      </div>
                    </div>

                    {/* Stacked Ratio Bar */}
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Tỷ lệ phân bổ</span>
                        <span>{savingsPercent.toFixed(0)}% Gốc / {savingsInterestPercent.toFixed(0)}% Lãi</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-zinc-900 overflow-hidden flex border border-white/5 p-[1px]">
                        <div 
                          className="h-full rounded-l-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500" 
                          style={{ width: `${savingsPercent}%` }}
                        />
                        <div 
                          className="h-full rounded-r-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500" 
                          style={{ width: `${savingsInterestPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Breakdown details */}
                    <div className="mt-6 space-y-3.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                          <span className="text-muted-foreground">Tiền gốc tích lũy</span>
                        </div>
                        <span className="font-semibold text-white">{formatCurrency(savingsAmount)}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
                          <span className="text-muted-foreground">Tổng tiền lãi nhận thêm</span>
                        </div>
                        <span className="font-semibold text-neon-cyan">+{formatCurrency(savingsInterest)}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-3.5 border-t border-white/5">
                        <span className="text-muted-foreground">Lãi suất áp dụng</span>
                        <span className="font-bold text-white bg-neon-cyan/10 border border-neon-cyan/20 px-2 py-0.5 rounded">{savingsRate}% / năm</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* Loan Calculator */}
            {activeTab === "loan" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch"
              >
                {/* Inputs */}
                <div className="space-y-8 lg:col-span-7 flex flex-col justify-between">
                  {/* Loan Type Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/70 block">Hình thức vay vốn</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: "priority" as LoanType, label: "Lĩnh vực ưu tiên" },
                        { id: "secured" as LoanType, label: "Thế chấp thông thường" },
                        { id: "unsecured" as LoanType, label: "Vay tiêu dùng tín chấp" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleLoanTypeChange(item.id)}
                          className={`rounded-lg border py-2 text-center text-xs sm:text-xs font-bold transition-all duration-200 ${
                            loanType === item.id
                              ? "border-neon-purple bg-neon-purple/10 text-white shadow-sm"
                              : "border-white/5 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white/90">Số tiền cần vay</span>
                      <span className="text-neon-purple font-bold text-lg">{formatLargeNumber(loanAmount)}</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={10000000}
                        max={5000000000}
                        step={10000000}
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-neon-purple bg-zinc-800"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>10 triệu đ</span>
                      <span>5 tỷ đ</span>
                    </div>

                    {/* Quick Select Buttons */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[50000000, 100000000, 500000000, 1000000000].map((val) => (
                        <button
                          key={val}
                          onClick={() => setLoanAmount(val)}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                            loanAmount === val
                              ? "border-neon-purple/50 bg-neon-purple/10 text-neon-purple shadow-sm"
                              : "border-white/5 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {formatLargeNumber(val)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Months Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white/90">Thời hạn hoàn trả</span>
                      <div className="flex items-center gap-2">
                        {loanType === "priority" && (
                          <span className="rounded-full bg-neon-purple/15 border border-neon-purple/30 px-2.5 py-0.5 text-[10px] font-bold text-neon-purple">
                            Ngắn hạn NHNN
                          </span>
                        )}
                        <span className="text-neon-purple font-bold text-lg">{loanMonths} tháng</span>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={loanMonthsRange.min}
                        max={loanMonthsRange.max}
                        step={loanMonthsRange.step}
                        value={loanMonths}
                        onChange={(e) => setLoanMonths(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-neon-purple bg-zinc-800"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>{loanMonthsRange.min} tháng</span>
                      <span>{loanMonthsRange.max} tháng</span>
                    </div>

                    {/* Quick Select Buttons */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[12, 24, 60, 120].filter(m => m <= loanMonthsRange.max).map((m) => (
                        <button
                          key={m}
                          onClick={() => setLoanMonths(m)}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                            loanMonths === m
                              ? "border-neon-purple/50 bg-neon-purple/10 text-neon-purple shadow-sm"
                              : "border-white/5 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {m} tháng
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rate Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white/90">Lãi suất dự kiến</span>
                      <span className="text-neon-purple font-bold text-lg">{loanRate}% / năm</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={loanRateRange.min}
                        max={loanRateRange.max}
                        step={loanRateRange.step}
                        value={loanRate}
                        onChange={(e) => setLoanRate(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-neon-purple bg-zinc-800"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>{loanRateRange.min}%</span>
                      <span>{loanRateRange.max}% {loanType === "priority" && "(Trần NHNN)"}</span>
                    </div>
                  </div>
                </div>

                {/* Results Column */}
                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-glass-border p-6 shadow-xl flex flex-col justify-between">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-neon-purple/5 blur-2xl rounded-full pointer-events-none" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Báo cáo khoản vay dự kiến</h3>
                    
                    {/* Main highlight */}
                    <div className="mt-5 text-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">Ước tính trả hàng tháng</span>
                      <div className="mt-1 text-2xl font-extrabold text-gradient drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                        {formatCurrency(monthlyPayment)}
                      </div>
                    </div>

                    {/* Stacked Ratio Bar */}
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Tỷ lệ phân bổ</span>
                        <span>{loanPercent.toFixed(0)}% Gốc / {loanInterestPercent.toFixed(0)}% Lãi</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-zinc-900 overflow-hidden flex border border-white/5 p-[1px]">
                        <div 
                          className="h-full rounded-l-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500" 
                          style={{ width: `${loanPercent}%` }}
                        />
                        <div 
                          className="h-full rounded-r-full bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-500" 
                          style={{ width: `${loanInterestPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Breakdown details */}
                    <div className="mt-6 space-y-3.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
                          <span className="text-muted-foreground">Tiền gốc cần vay</span>
                        </div>
                        <span className="font-semibold text-white">{formatCurrency(loanAmount)}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />
                          <span className="text-muted-foreground">Tổng tiền lãi dự tính</span>
                        </div>
                        <span className="font-semibold text-neon-purple">+{formatCurrency(loanInterest)}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-3.5 border-t border-white/5">
                        <span className="text-muted-foreground">Tổng gốc & lãi</span>
                        <span className="font-bold text-white">{formatCurrency(loanTotal)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Disclaimer Section */}
            <div className="mt-12 text-sm text-muted-foreground/60 max-w-3xl mx-auto">
              <p className="font-bold text-white/80 mb-2">Lưu ý quan trọng:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kết quả tính toán chỉ mang tính chất tham khảo dựa trên lãi suất cố định.</li>
                <li><strong className="text-white/80">Vay ưu tiên:</strong> Áp dụng theo các gói hỗ trợ của Chính phủ & NHNN, mức lãi suất ưu đãi dao động khoảng <strong className="text-neon-purple font-bold">4,0% - 6,0% / năm</strong> (tùy lĩnh vực kinh doanh & quy mô doanh nghiệp).</li>
                <li><strong className="text-white/80">Vay thông thường:</strong> Tự thỏa thuận dựa trên rủi ro khoản vay & chi phí vốn, phổ biến dao động khoảng <strong className="text-neon-purple font-bold">6,0% - 20,0% / năm</strong> tùy hình thức thế chấp hay tín chấp.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CalculatorIcon({ className }: { className?: string }) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  )
}

function PiggyBankIcon({ className }: { className?: string }) {
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
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h0" />
    </svg>
  )
}

function BankIcon({ className }: { className?: string }) {
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
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  )
}

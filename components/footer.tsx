"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-gradient">LT</span>
                <span className="text-foreground">Bank</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Hệ thống ngân hàng số thực tế với đầy đủ chức năng. Trải nghiệm tài chính 
              hiện đại với giao diện tối giản và công nghệ tiên tiến.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground">Dịch vụ</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Tài khoản", href: "#services" },
                { label: "Thẻ ngân hàng", href: "#cards" },
                { label: "Tiết kiệm", href: "#calculator" },
                { label: "Vay vốn", href: "#calculator" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground">Hỗ trợ</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Trung tâm trợ giúp", href: "#" },
                { label: "Biểu phí", href: "/fees" },
                { label: "Điều khoản", href: "/terms" },
                { label: "Bảo mật", href: "/privacy" },
                { label: "Cookie", href: "/cookies" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-neon-purple/30 bg-neon-purple/5 p-6"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon-purple/20">
              <InfoIcon className="h-4 w-4 text-neon-purple" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Lưu ý quan trọng:</span> LTBank là một dự án demo giáo dục được phát triển cho mục đích học tập và triển lãm kỹ thuật. Đây không phải là dịch vụ ngân hàng thực tế cũng không phục vụ bất kỳ mục đích thương mại nào.
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LTBank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function InfoIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

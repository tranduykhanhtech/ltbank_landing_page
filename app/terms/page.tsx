import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export const metadata = {
  title: "Điều khoản sử dụng | LTBank",
  description: "Điều khoản sử dụng và Điều kiện LTBank",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-20 pb-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              ← Quay lại
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Điều khoản sử dụng</h1>
          <p className="text-muted-foreground">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 flex gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Lưu ý quan trọng:</strong> LTBank là một dự án demo giáo dục được phát triển cho mục đích học tập và triển lãm kỹ thuật. 
            Đây không phải là dịch vụ ngân hàng thực tế cũng không phục vụ bất kỳ mục đích thương mại nào.
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Giới thiệu và Tính chất</h2>
            <p className="leading-relaxed text-muted-foreground">
              LTBank ("Dự án", "Trang web", "Dịch vụ") là một nền tảng demo giáo dục không phục vụ mục đích thương mại. 
              Bằng cách truy cập và sử dụng Trang web này, bạn ("Bạn", "Người dùng") đồng ý tuân thủ các Điều khoản sử dụng này 
              cũng như Chính sách Bảo mật. Nếu bạn không đồng ý với bất kỳ phần nào, vui lòng không sử dụng Trang web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Người dùng có đủ điều kiện</h2>
            <p className="leading-relaxed text-muted-foreground">
              Bạn cam kết rằng:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Bạn ít nhất 18 tuổi hoặc đủ độ tuổi theo pháp luật của quốc gia bạn</li>
              <li>Bạn có quyền hợp pháp để sử dụng Trang web này</li>
              <li>Bạn sẽ sử dụng Trang web chỉ cho mục đích hợp pháp và theo các Điều khoản này</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Quyền và Trách vụ của Người dùng</h2>
            <p className="leading-relaxed text-muted-foreground">
              Bạn chịu trách nhiệm duy trì tính bảo mật của tài khoản và mật khẩu của mình. 
              Bạn phải thông báo ngay cho chúng tôi về bất kỳ hoạt động trái phép hoặc vi phạm bảo mật.
            </p>
            <p className="leading-relaxed text-muted-foreground">Bạn cam kết:</p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Không sử dụng Trang web cho bất kỳ mục đích bất hợp pháp hoặc trái phép nào</li>
              <li>Không tấn công, cạo dữ liệu, hoặc can thiệp vào hệ thống Trang web</li>
              <li>Tuân thủ tất cả các luật pháp hiện hành (Việt Nam, EU, quốc tế)</li>
              <li>Không tạo các tài khoản giả mạo hoặc sử dụng tài khoản người khác</li>
              <li>Không tải lên hoặc truyền các phần mềm độc hại, virus hoặc mã độc</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Giới hạn Trách nhiệm</h2>
            <p className="leading-relaxed text-muted-foreground">
              LTBank cung cấp Trang web "như hiện tại" mà không có bất kỳ bảo đảm nào, 
              được biểu thị hay ngụ ý, bao gồm nhưng không giới hạn ở tính có thể bán được, 
              phù hợp cho một mục đích cụ thể hoặc không xâm phạm.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, đặc biệt, ngẫu nhiên, hậu quả 
              hoặc trừng phạt, bao gồm mất dữ liệu, mất doanh thu hoặc mất lợi nhuận, 
              ngay cả khi chúng tôi đã được cảnh báo về khả năng xảy ra các thiệt hại đó.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Sửa đổi hoặc Ngừng Dịch vụ</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi bảo lưu quyền sửa đổi, tạm dừng hoặc ngừng cung cấp Trang web hoặc bất kỳ phần nào 
              bất cứ lúc nào với hoặc không có thông báo trước. Chúng tôi sẽ cố gắng thông báo cho bạn 
              về bất kỳ thay đổi đáng kể nào.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Kết thúc Quyền truy cập</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi có quyền chấm dứt hoặc tạm dừng quyền truy cập của bạn vào Trang web, 
              với hoặc không có lý do, với hoặc không có thông báo trước, nếu chúng tôi xác định rằng 
              bạn đã vi phạm các Điều khoản này hoặc các luật hiện hành.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Luật Áp dụng</h2>
            <p className="leading-relaxed text-muted-foreground">
              Các Điều khoản này được điều chỉnh bởi và được hiểu theo các luật của Việt Nam, 
              bất kể không có xung đột với các nguyên tắc luật pháp của nó. Bất kỳ tranh chấp phát sinh 
              sẽ được giải quyết độc quyền trong các tòa án có thẩm quyền tại Việt Nam.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Trang web này cũng tuân thủ Quy định Bảo vệ Dữ liệu Chung (GDPR) của EU đối với những người dùng 
              từ các quốc gia EU và các yêu cầu bảo vệ dữ liệu quốc tế khác.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Sửa đổi Điều khoản</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi có thể cập nhật hoặc sửa đổi các Điều khoản này bất cứ lúc nào mà không cần thông báo trước. 
              Sử dụng tiếp tục của bạn sau khi có sửa đổi đồng nghĩa với việc chấp nhận các Điều khoản được sửa đổi.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Liên hệ</h2>
            <p className="leading-relaxed text-muted-foreground">
              Nếu bạn có bất kỳ câu hỏi hoặc mối quan tâm nào về các Điều khoản sử dụng này, 
              vui lòng liên hệ với chúng tôi qua email hoặc biểu mẫu liên hệ trên Trang web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Từng Phần</h2>
            <p className="leading-relaxed text-muted-foreground">
              Nếu bất kỳ phần nào của các Điều khoản này được coi là không hợp lệ hoặc không thể thực hiện được, 
              các phần còn lại sẽ tiếp tục có hiệu lực đầy đủ.
            </p>
          </section>
        </article>

        {/* Footer Links */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Chính sách bảo mật
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Chính sách Cookie
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

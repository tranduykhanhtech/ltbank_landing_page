import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export const metadata = {
  title: "Chính sách Cookie | LTBank",
  description: "Chính sách Cookie LTBank theo tiêu chuẩn GDPR",
}

export default function CookiesPage() {
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
          <h1 className="text-4xl font-bold text-foreground">Chính sách Cookie</h1>
          <p className="text-muted-foreground">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 flex gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Lưu ý quan trọng:</strong> LTBank là một dự án demo giáo dục. 
            Chính sách này mô tả cách cookie được sử dụng và tuân thủ Quy định Bảo vệ Dữ liệu Chung (GDPR).
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Cookie là gì?</h2>
            <p className="leading-relaxed text-muted-foreground">
              Cookie là các tệp nhỏ được lưu trữ trên thiết bị của bạn (máy tính, điện thoại, máy tính bảng) 
              khi bạn truy cập một trang web. Chúng chứa dữ liệu ở định dạng văn bản thuần túy và giúp trang web 
              nhớ thông tin về bạn (ví dụ: ngôn ngữ ưa thích, mục nhập tìm kiếm, chi tiết đăng nhập).
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Các cookie được phân loại thành "Persistent Cookies" (tồn tại cho đến khi hết hạn) 
              và "Session Cookies" (xóa khi bạn đóng trình duyệt).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Loại Cookie chúng tôi sử dụng</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Cookie cần thiết (Strictly Necessary)</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Các cookie này là cần thiết để hoạt động của Trang web và cung cấp các dịch vụ 
                  mà bạn yêu cầu. Chúng bao gồm:
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground text-sm">
                  <li>Xác thực người dùng (giữ bạn đăng nhập)</li>
                  <li>Bảo mật (phòng chống gian lận)</li>
                  <li>Tuân thủ (Luật Giao dịch điện tử Việt Nam)</li>
                </ul>
                <p className="leading-relaxed text-muted-foreground text-sm italic mt-2">
                  Bạn không thể tắt các cookie này mà không ảnh hưởng đến chức năng của Trang web. 
                  Theo GDPR, chúng không yêu cầu sự đồng ý trước.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Cookie hiệu suất (Performance)</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Chúng tôi sử dụng các cookie này để thu thập thông tin ẩn danh về cách bạn sử dụng Trang web 
                  (ví dụ: các trang bạn truy cập, thời gian tạm dừng, lỗi) để cải thiện hiệu suất.
                </p>
                <p className="leading-relaxed text-muted-foreground text-sm italic">
                  Các cookie này tuân thủ GDPR và yêu cầu sự đồng ý trước.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Cookie chức năng (Functional)</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Các cookie này cho phép Trang web nhớ lựa chọn của bạn (ví dụ: ngôn ngữ, tùy chọn giao diện) 
                  và cung cấp các tính năng nâng cao.
                </p>
                <p className="leading-relaxed text-muted-foreground text-sm italic">
                  Yêu cầu sự đồng ý trước theo GDPR.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Cookie quảng cáo/Tiếp thị (Advertising)</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Chúng tôi có thể sử dụng các cookie này để theo dõi hoạt động của bạn 
                  và hiển thị quảng cáo được cá nhân hóa trên các trang web khác.
                </p>
                <p className="leading-relaxed text-muted-foreground text-sm italic">
                  Bắt buộc phải có sự đồng ý rõ ràng theo GDPR.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Các công nghệ theo dõi khác</h2>
            <p className="leading-relaxed text-muted-foreground">
              Ngoài cookie, chúng tôi cũng sử dụng các công nghệ tương tự:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>Pixel theo dõi:</strong> Các hình ảnh 1x1 pixel giúp theo dõi bạn truy cập trang nào</li>
              <li><strong>Beacon web:</strong> Gửi dữ liệu đến máy chủ của chúng tôi về hoạt động của bạn</li>
              <li><strong>Bộ nhớ cục bộ (LocalStorage):</strong> Lưu trữ dữ liệu trên thiết bị của bạn giống cookie</li>
              <li><strong>Session storage:</strong> Lưu trữ dữ liệu tạm thời cho phiên làm việc hiện tại</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Bên thứ ba sử dụng Cookie</h2>
            <p className="leading-relaxed text-muted-foreground">
              Trang web của chúng tôi có thể nhúng các dịch vụ bên thứ ba (phân tích, quảng cáo, etc.) 
              có thể sử dụng cookie của riêng họ:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>Google Analytics:</strong> Để phân tích lưu lượng truy cập</li>
              <li><strong>Mạng quảng cáo:</strong> Để hiển thị quảng cáo được cá nhân hóa</li>
              <li><strong>Mạng xã hội:</strong> Nếu bạn chia sẻ nội dung</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground text-sm italic">
              Chúng tôi không kiểm soát các cookie bên thứ ba này. 
              Vui lòng xem xét chính sách cookie của các dịch vụ bên thứ ba này.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Kiểm soát và Tắt Cookie</h2>
            <p className="leading-relaxed text-muted-foreground">
              Bạn có quyền kiểm soát cookie thông qua:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>Cài đặt trình duyệt:</strong> Hầu hết các trình duyệt cho phép bạn từ chối hoặc xóa cookie</li>
              <li><strong>Cảnh báo cookie:</strong> Yêu cầu trình duyệt cảnh báo bạn khi cookie được gửi</li>
              <li><strong>Công cụ quản lý sự đồng ý:</strong> Chúng tôi sẽ cung cấp công cụ trên Trang web</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground text-sm italic mt-4">
              Lưu ý: Tắt các cookie cần thiết có thể ảnh hưởng đến chức năng của Trang web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Cookies của bên thứ ba (Third-party Cookies)</h2>
            <p className="leading-relaxed text-muted-foreground">
              Một số dịch vụ bên thứ ba (như Google, Facebook) đặt các cookie trên thiết bị của bạn. 
              Bạn có thể quản lý sở thích quảng cáo của bạn:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><a href="https://myaccount.google.com/data-and-privacy" className="text-neon-cyan hover:underline">Google Ad Settings</a></li>
              <li><a href="https://www.facebook.com/ads/preferences" className="text-neon-cyan hover:underline">Facebook Ad Preferences</a></li>
              <li><a href="https://optout.networkadvertising.org" className="text-neon-cyan hover:underline">Network Advertising Initiative</a></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Tuân thủ GDPR</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi cam kết tuân thủ Quy định Bảo vệ Dữ liệu Chung (GDPR) của EU:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Chúng tôi sẽ yêu cầu sự đồng ý trước khi sử dụng các cookie không cần thiết</li>
              <li>Bạn có quyền rút lại sự đồng ý bất cứ lúc nào</li>
              <li>Chúng tôi sẽ cung cấp thông tin rõ ràng về mục đích sử dụng cookie</li>
              <li>Chúng tôi sẽ xóa cookie của bạn theo yêu cầu</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Thay đổi chính sách này</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi có thể cập nhật Chính sách Cookie này bất cứ lúc nào. 
              Chúng tôi sẽ thông báo cho bạn về các thay đổi đáng kể bằng cách đăng Chính sách mới trên Trang web 
              và cập nhật "Ngày cập nhật lần cuối" ở đầu trang.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Liên hệ</h2>
            <p className="leading-relaxed text-muted-foreground">
              Nếu bạn có bất kỳ câu hỏi nào về chính sách cookie này hoặc cách chúng tôi sử dụng cookie, 
              vui lòng liên hệ với chúng tôi qua email hoặc biểu mẫu liên hệ trên Trang web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Lựa chọn của bạn</h2>
            <p className="leading-relaxed text-muted-foreground">
              Dưới đây là những cách bạn có thể quản lý cookie của mình trên các trình duyệt phổ biến:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground text-sm">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
            </ul>
          </section>
        </article>

        {/* Footer Links */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Điều khoản sử dụng
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

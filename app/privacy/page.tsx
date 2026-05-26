import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export const metadata = {
  title: "Chính sách bảo mật | LTBank",
  description: "Chính sách bảo mật và bảo vệ dữ liệu cá nhân LTBank",
}

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-foreground">Chính sách bảo mật</h1>
          <p className="text-muted-foreground">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 flex gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Lưu ý quan trọng:</strong> LTBank là một dự án demo giáo dục. 
            Chính sách này mô tả cách dữ liệu demo được xử lý và tuân thủ các yêu cầu GDPR và pháp luật Việt Nam.
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Giới thiệu</h2>
            <p className="leading-relaxed text-muted-foreground">
              LTBank ("chúng tôi", "chúng ta" hoặc "Công ty") cam kết bảo vệ quyền riêng tư của bạn. 
              Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, bộc lộ và bảo vệ thông tin của bạn 
              khi bạn sử dụng Trang web của chúng tôi. Chính sách này tuân thủ Quy định Bảo vệ Dữ liệu Chung (GDPR) 
              và Luật Bảo vệ Dữ liệu Cá nhân của Việt Nam.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Dữ liệu cá nhân chúng tôi thu thập</h2>
            <p className="leading-relaxed text-muted-foreground">Chúng tôi có thể thu thập các loại dữ liệu cá nhân sau:</p>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-foreground">Dữ liệu bạn cung cấp trực tiếp:</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li><strong>Thông tin tài khoản:</strong> Tên, email, số điện thoại, địa chỉ, ngày sinh</li>
                  <li><strong>Thông tin tài chính:</strong> Số tài khoản ngân hàng, lịch sử giao dịch, yêu cầu vay vốn</li>
                  <li><strong>Thông tin xác minh:</strong> Bằng lái xe, hộ chiếu, hoặc các tài liệu nhận dạng khác</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Dữ liệu được thu thập tự động:</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li><strong>Dữ liệu kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, hệ điều hành, giới thiệu</li>
                  <li><strong>Dữ liệu sử dụng:</strong> Các trang bạn truy cập, thời gian tạm dừng, thời lâu trên trang</li>
                  <li><strong>Cookie và công nghệ tương tự:</strong> Để tối ưu hóa trải nghiệm của bạn</li>
                  <li><strong>Dữ liệu vị trí:</strong> Nếu bạn cho phép, chúng tôi có thể thu thập thông tin vị trí gần đúng</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Cơ sở pháp lý để xử lý dữ liệu</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi chỉ xử lý dữ liệu cá nhân của bạn dựa trên một trong những cơ sở pháp lý sau:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>Sự đồng ý:</strong> Bạn đã rõ ràng đồng ý để xử lý dữ liệu của bạn</li>
              <li><strong>Hợp đồng:</strong> Xử lý là cần thiết để thực hiện một hợp đồng với bạn</li>
              <li><strong>Bổn phận pháp lý:</strong> Chúng tôi được yêu cầu xử lý dữ liệu theo pháp luật hiện hành</li>
              <li><strong>Lợi ích hợp pháp:</strong> Xử lý là cần thiết cho các mục đích bảo mật hoặc phòng chống gian lận</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Cách chúng tôi sử dụng dữ liệu</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi sử dụng dữ liệu cá nhân của bạn cho các mục đích sau:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Cung cấp, cải thiện và duy trì Trang web của chúng tôi</li>
              <li>Xử lý giao dịch và gửi thông tin liên quan</li>
              <li>Gửi thông báo, cập nhật dịch vụ và hỗ trợ khách hàng</li>
              <li>Phát hiện, ngăn chặn và giải quyết các hoạt động gian lận hoặc bất hợp pháp</li>
              <li>Tuân thủ các yêu cầu pháp lý và quy định (Luật Giao dịch điện tử Việt Nam, GDPR, v.v.)</li>
              <li>Phân tích xu hướng sử dụng để cải thiện trải nghiệm người dùng</li>
              <li>Gửi thông tin tiếp thị (chỉ khi bạn đã cho phép)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Bảo vệ và an toàn dữ liệu</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi thực hiện các biện pháp bảo mật kỹ thuật và tổ chức thích hợp để bảo vệ dữ liệu cá nhân của bạn:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Mã hóa dữ liệu trong quá trình truyền (SSL/TLS) và khi lưu trữ</li>
              <li>Kiểm soát truy cập hạn chế vào dữ liệu cá nhân</li>
              <li>Các máy chủ an toàn và tường lửa</li>
              <li>Kiểm toán bảo mật thường xuyên</li>
              <li>Các chính sách bảo mật nhân viên nghiêm ngặt</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground text-sm italic mt-4">
              Mặc dù chúng tôi cố gắng hết sức, không có phương pháp truyền hoặc lưu trữ nào hoàn toàn an toàn. 
              Bạn sử dụng Trang web của chúng tôi do rủi ro của riêng bạn.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Chia sẻ dữ liệu</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi không bán, cho thuê hoặc chia sẻ dữ liệu cá nhân của bạn với bên thứ ba 
              ngoại trừ trong những trường hợp sau:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>Nhà cung cấp dịch vụ:</strong> Các công ty được hỗ trợ để cung cấp Trang web của chúng tôi</li>
              <li><strong>Yêu cầu pháp lý:</strong> Khi được yêu cầu bởi luật pháp hoặc để bảo vệ quyền của chúng tôi</li>
              <li><strong>Sự chuyển giao doanh nghiệp:</strong> Trong trường hợp sáp nhập hoặc bán tài sản</li>
              <li><strong>Sự đồng ý của bạn:</strong> Khi bạn rõ ràng đồng ý</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Quyền của bạn (GDPR & Pháp luật Việt Nam)</h2>
            <p className="leading-relaxed text-muted-foreground">
              Bạn có các quyền sau liên quan đến dữ liệu cá nhân của bạn:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>Quyền truy cập:</strong> Yêu cầu bản sao dữ liệu cá nhân của bạn</li>
              <li><strong>Quyền sửa đổi:</strong> Yêu cầu sửa đổi hoặc cập nhật dữ liệu không chính xác</li>
              <li><strong>Quyền xóa:</strong> Yêu cầu xóa dữ liệu của bạn trong các trường hợp nhất định</li>
              <li><strong>Quyền giới hạn xử lý:</strong> Yêu cầu giới hạn cách dữ liệu của bạn được xử lý</li>
              <li><strong>Quyền phản đối:</strong> Phản đối xử lý dữ liệu cho các mục đích nhất định</li>
              <li><strong>Quyền di chuyển dữ liệu:</strong> Yêu cầu dữ liệu của bạn ở định dạng có thể chuyển đổi</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground mt-4">
              Để thực hiện bất kỳ quyền nào trong số này, vui lòng liên hệ với chúng tôi bằng cách sử dụng 
              thông tin liên hệ dưới đây.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Lưu giữ dữ liệu</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi giữ lại dữ liệu cá nhân của bạn chỉ trong thời gian cần thiết để thực hiện 
              các mục đích được xác định trong chính sách này hoặc như được yêu cầu bởi pháp luật. 
              Khi dữ liệu không còn cần thiết, nó sẽ được an toàn xóa hoặc ẩn danh.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Bên thứ ba</h2>
            <p className="leading-relaxed text-muted-foreground">
              Trang web của chúng tôi có thể chứa các liên kết đến các trang web bên thứ ba. 
              Chúng tôi không chịu trách nhiệm cho các chính sách bảo mật hoặc thực tiễn của các trang web này. 
              Vui lòng xem xét các chính sách bảo mật của họ trước khi chia sẻ dữ liệu cá nhân của bạn.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Trẻ em</h2>
            <p className="leading-relaxed text-muted-foreground">
              Trang web của chúng tôi không dành cho các cá nhân dưới 18 tuổi. 
              Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em. 
              Nếu chúng tôi phát hiện ra rằng chúng tôi đã thu thập dữ liệu từ trẻ em, 
              chúng tôi sẽ xóa thông tin đó ngay lập tức.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">11. Thay đổi chính sách này</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chúng tôi có thể cập nhật Chính sách Bảo mật này từ thời gian này sang thời điểm khác. 
              Chúng tôi sẽ thông báo cho bạn về các thay đổi đáng kể bằng cách đăng Chính sách mới trên Trang web. 
              Sử dụng tiếp tục của bạn sau khi các sửa đổi xác định sự chấp nhận của bạn đối với các thay đổi.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">12. Liên hệ</h2>
            <p className="leading-relaxed text-muted-foreground">
              Nếu bạn có bất kỳ câu hỏi hoặc mối quan tâm nào về Chính sách Bảo mật này hoặc 
              các thực tiễn bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi.
            </p>
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

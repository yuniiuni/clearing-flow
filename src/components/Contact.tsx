import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "服務地址",
      content: "台北市大安區復興南路一段XXX號",
      subtext: "捷運大安站 3 號出口步行 5 分鐘",
    },
    {
      icon: Clock,
      title: "營業時間",
      content: "週一至週六 10:00 - 21:00",
      subtext: "週日公休（可預約）",
    },
    {
      icon: Phone,
      title: "預約電話",
      content: "02-XXXX-XXXX",
      subtext: "歡迎來電預約諮詢",
    },
  ];

  const handleLineClick = () => {
    // Replace with actual LINE official account link
    window.open("https://line.me/ti/p/", "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm text-primary tracking-[0.2em] uppercase font-medium">
              Contact
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            聯絡我們
          </h2>
          <p className="text-foreground/70 text-lg">
            歡迎透過以下方式預約或諮詢，我們期待為您服務。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-foreground/80 font-medium">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              </div>
            ))}

            {/* LINE CTA */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#06C755]/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#06C755]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">
                    LINE 官方帳號
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    加入官方 LINE 帳號，即時查詢空檔、線上預約更方便！
                  </p>
                  <Button
                    onClick={handleLineClick}
                    className="bg-[#06C755] hover:bg-[#06C755]/90 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    加入 LINE 預約
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              線上預約表單
            </h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    電話 *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="09XX-XXX-XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  預約服務 *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="">請選擇服務項目</option>
                  <option value="horn">專業牛角鬆筋 (60min / $1,200)</option>
                  <option value="stone">砭石舒壓療程 (75min / $1,500)</option>
                  <option value="full">客製化全身調理 (90min / $2,000)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  希望預約時間
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  備註說明
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="請描述您的身體狀況或特殊需求..."
                />
              </div>

              <Button type="submit" variant="zen" size="lg" className="w-full">
                送出預約
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                我們將於 24 小時內與您確認預約時間
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

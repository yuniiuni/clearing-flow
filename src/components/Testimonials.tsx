import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "林小姐",
      role: "上班族",
      content:
        "長期坐辦公室，肩頸痠痛困擾我好幾年。來到清郁後，師傅用牛角深層撥筋，第一次就感受到明顯改善！現在已經是固定客戶了。",
      rating: 5,
    },
    {
      name: "陳先生",
      role: "工程師",
      content:
        "工作壓力大，睡眠品質很差。嘗試了砭石舒壓療程後，當晚就睡得特別好。環境很寧靜，整個人都放鬆下來了。",
      rating: 5,
    },
    {
      name: "王太太",
      role: "家庭主婦",
      content:
        "帶小孩腰痠背痛是家常便飯，朋友推薦來試試。師傅很專業，會先評估身體狀況再施作，服務很細心，大推！",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm text-primary tracking-[0.2em] uppercase font-medium">
              Testimonials
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            客戶見證
          </h2>
          <p className="text-foreground/70 text-lg">
            聽聽他們的真實體驗分享，了解清郁如何幫助他們找回身體的輕盈感。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                「{testimonial.content}」
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-serif font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary mb-1">500+</p>
            <p className="text-sm text-muted-foreground">滿意客戶</p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary mb-1">4.9</p>
            <p className="text-sm text-muted-foreground">平均評分</p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary mb-1">3+</p>
            <p className="text-sm text-muted-foreground">年經驗</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

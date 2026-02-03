import { Clock, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceImage from "@/assets/service.jpg";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      name: "專業牛角鬆筋",
      duration: "60 分鐘",
      price: "$1,200",
      description: "針對深層筋膜，有效緩解局部痠痛。運用天然牛角，以專業手法深入肌肉組織，釋放累積的壓力與緊繃。",
      popular: true,
    },
    {
      icon: Star,
      name: "砭石舒壓療程",
      duration: "75 分鐘",
      price: "$1,500",
      description: "結合礦石能量，促進血液循環，徹底放鬆肌肉。砭石的溫潤觸感，帶來深層的舒緩與療癒。",
      popular: false,
    },
    {
      icon: Clock,
      name: "客製化全身調理",
      duration: "90 分鐘",
      price: "$2,000",
      description: "依個人疲勞程度，配置最適合的鬆筋方案。從頭到腳的完整調理，讓身體重獲輕盈。",
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm text-primary tracking-[0.2em] uppercase font-medium">
              Services
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            服務項目
          </h2>
          <p className="text-foreground/70 text-lg">
            我們提供多元化的筋膜放鬆服務，每項療程皆以專業手法與天然工具，為您量身打造舒壓體驗。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group ${
                service.popular ? "ring-2 ring-primary/50" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-medium">
                    熱門推薦
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {service.name}
              </h3>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </span>
                <span className="text-lg font-semibold text-primary">
                  {service.price}
                </span>
              </div>

              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <Button
                variant="outline"
                className="w-full"
                onClick={scrollToContact}
              >
                預約此療程
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                服務流程
              </h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "諮詢評估", desc: "了解您的身體狀況與需求" },
                  { step: "02", title: "方案規劃", desc: "依據評估結果規劃最適療程" },
                  { step: "03", title: "專業施作", desc: "以精準手法進行深層放鬆" },
                  { step: "04", title: "術後建議", desc: "提供日常保養與伸展建議" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-2xl font-serif font-bold text-primary/30">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <img
                src={serviceImage}
                alt="清郁服務流程"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent md:via-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

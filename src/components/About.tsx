import toolsImage from "@/assets/tools.jpg";

const About = () => {
  const features = [
    {
      title: "天然材質",
      description: "嚴選天然牛角與砭石，溫潤觸感帶來最純粹的放鬆體驗",
    },
    {
      title: "精準手法",
      description: "深入筋膜層次，針對勞損點進行精確的撥筋調理",
    },
    {
      title: "身心平衡",
      description: "不只舒緩肌肉，更致力於恢復您的身心和諧",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={toolsImage}
                alt="天然牛角與砭石工具"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/50 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-sm text-primary tracking-[0.2em] uppercase font-medium">
                About Us
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              關於清郁
            </h2>

            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              「清郁」誕生於對身體律動的尊重。我們運用天然牛角與砭石，透過精準的撥筋技術，深入您的勞損點，化解日積月累的僵硬。
            </p>

            <p className="text-foreground/70 text-lg leading-relaxed mb-10">
              我們不只提供按摩，更致力於讓您在繁忙生活中，尋回身心平衡的清幽之地。每一次服務，都是一場與自己身體的對話。
            </p>

            {/* Feature Cards */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-card hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-serif text-lg font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

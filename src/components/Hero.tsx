import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="清郁筋膜放鬆空間"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left md:max-w-4xl">
        <div className="animate-fade-up">
          {/* Decorative Element */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm text-muted-foreground tracking-[0.3em] uppercase">
              深層筋膜放鬆
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            釋放深層緊繃
            <br />
            <span className="text-primary">讓身體重新呼吸</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0 mb-8 font-light leading-relaxed">
            清郁 —— 專注於每一吋筋膜的呼吸。
            <br className="hidden md:block" />
            運用天然牛角與砭石，化解日積月累的僵硬。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="zen" size="xl" onClick={scrollToContact}>
              立即預約諮詢
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToAbout}>
              了解更多
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
};

export default Hero;

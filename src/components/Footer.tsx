const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-semibold mb-2">清郁</h3>
            <p className="text-sm text-background/60">
              深層筋膜放鬆與牛角鬆筋專家
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#about"
              className="text-background/70 hover:text-background transition-colors"
            >
              關於我們
            </a>
            <a
              href="#services"
              className="text-background/70 hover:text-background transition-colors"
            >
              服務項目
            </a>
            <a
              href="#testimonials"
              className="text-background/70 hover:text-background transition-colors"
            >
              客戶見證
            </a>
            <a
              href="#contact"
              className="text-background/70 hover:text-background transition-colors"
            >
              聯絡我們
            </a>
          </nav>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {currentYear} 清郁. All rights reserved.</p>
          <p>
            專注於每一吋筋膜的呼吸
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

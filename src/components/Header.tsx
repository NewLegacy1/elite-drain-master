import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 md:h-24">
          {/* Logo Only */}
          <img
            src={logo}
            alt="Jay That Drain Guy"
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
            style={{
              mixBlendMode: "screen",
              filter: "brightness(1.1)",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

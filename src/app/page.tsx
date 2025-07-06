import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 backdrop-blur-md bg-card/95">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/floyd.png"
              alt="Floyd 1.0 Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex space-x-8">
            <Link
              href="/"
              className="text-foreground font-semibold border-b-2 border-primary pb-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/packages"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Packages
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
              Automate the Feed,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Elevate the Breed
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              FLOYD 1.0: An IoT-controlled floating fish feeder designed for
              small to medium fish pens.
            </p>
            <Link
              href="/packages"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5 px-10 rounded-xl text-xl transition-all duration-200 shadow-2xl hover:shadow-primary/25 hover:scale-105 inline-block"
              aria-label="Learn more about Floyd 1.0"
            >
              Learn More
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mt-20 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl scale-105"></div>
              <Image
                src="/transparent.png"
                alt="Floyd 1.0 floating fish feeder in action"
                width={800}
                height={600}
                className="relative z-10 rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              The Challenges of Manual Feeding
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Traditional aquaculture feeding methods are holding back your
              operation&apos;s potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-10 rounded-2xl shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⚠️
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Inefficient & Labor-Intensive
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Manual feeding requires constant supervision and precise timing,
                consuming valuable labor hours that could be better utilized
                elsewhere.
              </p>
            </div>

            <div className="bg-card p-10 rounded-2xl shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💰
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Waste More, Save Less
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Imprecise feeding leads to overfeeding, wasted feed costs, and
                poor water quality that can harm fish health and growth rates.
              </p>
            </div>

            <div className="bg-card p-10 rounded-2xl shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📉
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Low Survival Rates
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Inconsistent feeding schedules and suboptimal feed distribution
                contribute to reduced hatchery survival rates and slower growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Introducing Floyd 1.0: The{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Smart Solution
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Transform your aquaculture operation with precision feeding
                technology that maximizes efficiency while minimizing waste and
                labor costs.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-xl">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 text-xl">
                      Precise Feed Dispensing
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dispenses exact amounts of feed based on your
                      specifications, eliminating waste and overfeeding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-xl">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 text-xl">
                      Real-Time Monitoring
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Monitor feed levels, water temperature, and system status
                      from anywhere with our mobile app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-xl">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 text-xl">
                      Smart Alerts
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Receive instant notifications when feed is low or
                      environmental conditions need attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl scale-105"></div>
              <Image
                src="/standing.png"
                alt="Floyd 1.0 standing feeder system"
                width={600}
                height={800}
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built with cutting-edge technology for maximum reliability and
              performance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Remote Mobile Control
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Control and monitor your feeding system from anywhere using our
                intuitive mobile application.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🌡️
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Real-Time Sensors
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced temperature and ultrasonic sensors provide continuous
                environmental monitoring.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🔧
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Durable Construction
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with steel bars and durable materials designed for harsh
                aquaculture environments.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🚤
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Floating Mobility
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                5-gallon PET bottles provide buoyancy with paddle mechanism for
                controlled movement.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📡
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                IoT Connectivity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                ESP8266 microcontroller enables seamless IoT connectivity and
                remote management.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Low Maintenance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Designed for minimal maintenance requirements with reliable,
                long-lasting components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Let&apos;s Feed Smarter Now
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed font-light">
            Join the aquaculture revolution with Floyd 1.0. Choose the perfect
            package for your operation and start optimizing your feeding process
            today.
          </p>
          <Link
            href="/packages"
            className="bg-background text-foreground hover:bg-background/90 font-bold py-5 px-10 rounded-xl text-xl transition-all duration-200 shadow-2xl hover:shadow-background/25 hover:scale-105 inline-block"
            aria-label="View available packages"
          >
            View Packages
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

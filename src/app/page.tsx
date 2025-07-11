import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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
            <div className="flex flex-col items-center mb-12">
              <Image
                src="/floyd.png"
                alt="Floyd 1.0 Product Logo"
                width={200}
                height={80}
                className="h-16 w-auto mb-6 opacity-90"
              />
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light text-center">
                An IoT-controlled floating fish feeder designed for small to
                medium fish pens.
              </p>
            </div>
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

      {/* Mobile App Interface Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Intuitive Mobile App Control
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Monitor and control your Floyd 1.0 feeder system with our
              comprehensive mobile application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Dashboard Screen */}
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl scale-110"></div>
                <Image
                  src="/0c0ab3a8-03a2-4dbb-8111-adf3bd800944.jpeg"
                  alt="Floyd 1.0 Dashboard - Real-time monitoring of feeder capacity, water temperature, WiFi signal and system alerts"
                  width={300}
                  height={600}
                  className="relative z-10 rounded-xl mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Dashboard Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor feeder capacity, water temperature, WiFi signal
                strength, and system alerts in real-time from your dashboard.
              </p>
            </div>

            {/* Controls Screen */}
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl scale-110"></div>
                <Image
                  src="/068bdb83-8565-40b1-9ed2-fc881a699aab.jpeg"
                  alt="Floyd 1.0 Controls - Paddle controls for navigation, feed dispenser management and LED status control"
                  width={300}
                  height={600}
                  className="relative z-10 rounded-xl mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Remote Controls
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Control paddle movement and manage feed dispensing remotely.
              </p>
            </div>

            {/* Sensor Logs Screen */}
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl scale-110"></div>
                <Image
                  src="/22368f52-df7c-40b9-a9f0-95dc68fffd8f.jpeg"
                  alt="Floyd 1.0 Sensor Logs - Logging status, sensor data monitoring and alerts history tracking"
                  width={300}
                  height={600}
                  className="relative z-10 rounded-xl mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Sensor Monitoring
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Track logging status, review sensor data history, and maintain
                comprehensive records of all system activities.
              </p>
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
            Join the aquaculture revolution with FeedFrendz. Choose the perfect
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

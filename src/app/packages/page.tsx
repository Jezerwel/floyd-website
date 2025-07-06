import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Standing Feeder",
      description:
        "The stationary solution for targeted feeding in smaller ponds.",
      image: "/standing.png",
      imageAlt: "Floyd 1.0 Standing Feeder System",
      features: [
        "Fixed position for targeted feeding",
        "Perfect for smaller pond operations",
        "Precise feed dispensing control",
        "Real-time monitoring sensors",
        "Mobile app connectivity",
        "Durable steel construction",
        "Low maintenance design",
        "Weather-resistant materials",
      ],
      ideal:
        "Small to medium fish ponds, hatcheries, and controlled environments",
    },
    {
      id: 2,
      title: "Floating Feeder",
      description:
        "Our flagship mobile feeder for comprehensive coverage in larger fish pens.",
      image: "/floating.png",
      imageAlt: "Floyd 1.0 Floating Feeder System",
      features: [
        "Mobile floating platform",
        "5-gallon PET bottle buoyancy system",
        "Paddle mechanism for movement",
        "Comprehensive pen coverage",
        "Ultrasonic feed capacity sensor",
        "Water temperature monitoring",
        "ESP8266 IoT microcontroller",
        "Remote positioning control",
      ],
      ideal:
        "Large fish pens, commercial aquaculture operations, and open water systems",
    },
    {
      id: 3,
      title: "Complete System",
      description:
        "The ultimate package for maximum efficiency, combining both standing and floating feeders.",
      image: null, // Will show both images
      imageAlt: "Floyd 1.0 Complete System Package",
      features: [
        "Both standing and floating feeders",
        "Comprehensive operation coverage",
        "Centralized mobile app control",
        "Advanced monitoring dashboard",
        "Redundant feeding capabilities",
        "Scalable for growing operations",
        "Professional installation support",
        "Extended warranty coverage",
        "Priority technical support",
        "Custom configuration options",
      ],
      ideal:
        "Large-scale commercial operations, aquaculture farms, and enterprises requiring maximum reliability",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Feeder
            </span>
          </h1>
          <div className="flex flex-col items-center mb-12">
            <Image
              src="/floyd.png"
              alt="Floyd 1.0 Product Logo"
              width={180}
              height={70}
              className="h-14 w-auto mb-6 opacity-90"
            />
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light text-center">
              Select the perfect package for your aquaculture operation
            </p>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re running a small pond operation or a medium-sized
            one, we have the right feeding solution to optimize your
            productivity and efficiency.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group relative flex flex-col h-full"
              >
                {/* Package Image */}
                <div className="relative h-72 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"></div>
                  {pkg.image ? (
                    <Image
                      src={pkg.image}
                      alt={pkg.imageAlt}
                      width={300}
                      height={200}
                      className="object-contain h-full w-full p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    // Complete System shows both images
                    <div className="flex space-x-6 p-6">
                      <Image
                        src="/standing.png"
                        alt="Standing Feeder"
                        width={150}
                        height={120}
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <Image
                        src="/floating.png"
                        alt="Floating Feeder"
                        width={150}
                        height={120}
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

                {/* Package Content */}
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-3xl font-bold text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-1">
                    <h4 className="font-bold text-card-foreground mb-6 text-xl">
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-primary mt-1 font-bold text-lg">
                            ✓
                          </span>
                          <span className="text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-10">
                    <h4 className="font-bold text-card-foreground mb-4 text-xl">
                      Ideal For:
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {pkg.ideal}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-primary/25 hover:scale-105 group-hover:shadow-3xl mt-auto text-center inline-block"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Floyd Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FeedFrendz?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced technology meets practical aquaculture needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💰
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Cost Effective
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Reduce feed waste and labor costs while improving fish growth
                rates and overall profitability.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Easy to Use
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Intuitive mobile app interface makes setup and daily operation
                simple for any skill level.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🔧
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Reliable
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built for harsh aquaculture environments with minimal
                maintenance requirements.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📈
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Scalable
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Start with one feeder and expand your system as your operation
                grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed font-light">
            Contact our team to discuss your specific needs and get a
            personalized quote for your FeedFrendz system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-background text-foreground hover:bg-background/90 font-bold py-5 px-10 rounded-xl text-xl transition-all duration-200 shadow-2xl hover:shadow-background/25 hover:scale-105 inline-block text-center"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold py-5 px-10 rounded-xl text-xl transition-all duration-200 hover:scale-105 inline-block"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

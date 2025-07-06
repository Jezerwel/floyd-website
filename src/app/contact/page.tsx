import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 leading-relaxed font-light">
            Get in touch to revolutionize your aquaculture operation
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Aquaculture?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Connect with our team to discover how FeedFrendz solutions can
              optimize your feeding operations.
            </p>
          </div>

          {/* Services Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-12">
              How We Can Help You
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-6">🎯</div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Consultation
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Expert guidance on the best FeedFrendz package for your
                  specific operation size and requirements.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-6">💰</div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Custom Quotes
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Personalized pricing based on your operation scale, package
                  selection, and installation needs.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-6">🔧</div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Technical Support
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ongoing assistance with installation, setup, and maintenance
                  of your FeedFrendz system.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Banner */}
          <div className="bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground p-10 rounded-3xl text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Call now for a free consultation and personalized quote
            </p>
            <a
              href="tel:09287303053"
              className="inline-block bg-background text-foreground hover:bg-background/90 font-bold py-5 px-10 rounded-xl text-xl transition-all duration-200 shadow-2xl hover:shadow-background/25 hover:scale-105"
            >
              📞 09287303053
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

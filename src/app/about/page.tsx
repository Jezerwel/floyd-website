import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function About() {
  const teamMembers = [
    {
      firstName: "Clarence Von",
      lastName: "Alarde",
      role: "Chief Executive Officer",
      description:
        "Leading FeedFrendz with vision and strategic direction for revolutionizing aquaculture technology and driving sustainable industry growth.",
      image: "/Alarde.png",
    },
    {
      firstName: "Jened Lucio",
      lastName: "Caguimbaga",
      role: "Chief Product Officer",
      description:
        "Overseeing product strategy and development, ensuring our solutions meet market demands and drive innovation in aquaculture technology.",
      image: "/Caguimbaga.png",
    },
    {
      firstName: "Johnrey Dexter",
      lastName: "Palma",
      role: "Chief Engineering Officer",
      description:
        "Leading engineering excellence and technical operations, ensuring our systems deliver reliable performance and meet quality standards.",
      image: "/Palma.png",
    },
    {
      firstName: "Richylle",
      lastName: "Delante",
      role: "Chief Marketing Officer",
      description:
        "Driving brand strategy and market expansion, connecting FeedFrendz with aquaculture professionals and building lasting partnerships.",
      image: "/Delante.png",
    },
    {
      firstName: "Jezerwel",
      lastName: "Griño",
      role: "Chief Technology Officer",
      description:
        "Spearheading technological innovation and digital transformation, architecting smart aquaculture solutions through advanced IoT systems.",
      image: "/Griño.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mission
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 leading-relaxed font-light">
            Bridging Tradition and Innovation in Aquaculture
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing innovative solutions to the challenges
            faced by the aquaculture industry. Our mission is to empower fish
            farmers with cutting-edge technology that respects traditional
            practices while embracing the future of sustainable aquaculture.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Meet Team{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FeedFrendz
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our passionate team of experts brings together diverse skills and
              experience to revolutionize aquaculture feeding systems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 items-stretch">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col w-full sm:w-64 lg:w-72 min-h-[500px]"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src={member.image}
                    alt={`${member.firstName} ${member.lastName} - ${member.role}`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mb-3">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {member.firstName}
                  </h3>
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {member.lastName}
                  </h3>
                </div>
                <p className="text-primary font-bold mb-4 text-base">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-10 rounded-2xl bg-card shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300">
                🌊
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                Sustainability
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe in creating solutions that protect our aquatic
                ecosystems while maximizing productivity for future generations.
              </p>
            </div>

            <div className="text-center p-10 rounded-2xl bg-card shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300">
                🔬
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We continuously push the boundaries of technology to solve
                real-world challenges in aquaculture operations.
              </p>
            </div>

            <div className="text-center p-10 rounded-2xl bg-card shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                Partnership
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We work closely with our customers to understand their needs and
                deliver solutions that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to Transform Your Operation?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed font-light">
            Discover how FeedFrendz can revolutionize your aquaculture feeding
            process with our innovative solutions.
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

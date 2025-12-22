import GradientText from "@/components/GradientText";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/Section";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

const inputClass =
  "w-full px-4 py-2 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

const socialLinks = [
  { href: "https://github.com/Kaycfarias", icon: Github },
  { href: "https://linkedin.com/in/kaycfarias", icon: Linkedin },
];

const contactInfo = [
  { icon: Mail, text: "kaycg123@gmail.com" },
  { icon: MapPin, text: "Brazil" },
];

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const body = `
Nova mensagem do portfólio
--------------------------
    
Nome: ${name}
Email: ${email}

Mensagem:
${message}

--------------------------
Enviado via kaycfarias.dev
    `.trim();

    const mailtoLink = `mailto:${
      contactInfo[0].text
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <Section className="w-full" id="Contact">
      <div className="flex flex-col h-full w-full items-center justify-center gap-8">
        <TextType
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          text={["Contact"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          startOnVisible
          cursorCharacter="|"
          loop={false}
        />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="text-xl sm:text-2xl md:text-3xl text-center"
        >
          <p>Let&apos;s work together!</p>
        </GradientText>

        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p className="text-muted-foreground text-sm">
                Feel free to reach out for collaborations, opportunities, or
                just to say hello!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              {socialLinks.map(({ href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/50 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-md"
          >
            <label className="space-y-2">
              <span className="text-sm font-medium">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={inputClass}
                required
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium">Email</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className={inputClass}
                required
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className={inputClass}
                required
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                placeholder="Your message..."
                rows={4}
                className={`${inputClass} resize-none`}
                required
              />
            </label>

            <Button type="submit" className="mt-2">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

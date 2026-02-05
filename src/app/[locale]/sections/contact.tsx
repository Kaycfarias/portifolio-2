import GradientText from "@/components/gradient-text";
import TextType from "@/components/text-type";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const inputClass =
  "w-full px-4 py-2 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

const socialLinks = [
  { href: "https://github.com/Kaycfarias", icon: Github },
  { href: "https://linkedin.com/in/kayc-farias-b32840283/", icon: Linkedin },
];

const contactInfo = [
  { icon: Mail, text: "kaycg123@gmail.com" },
  { icon: MapPin, text: "Brazil" },
];

export default function ContactPage() {
  const t = useTranslations("ContactSection");

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
      <div className="flex h-full w-full flex-col items-center justify-center gap-8">
        <TextType
          className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
          text={[t("title")]}
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
          className="text-center text-xl sm:text-2xl md:text-3xl"
        >
          <p>{t("subtitle")}</p>
        </GradientText>

        <div className="grid w-full max-w-4xl gap-8 px-4 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("Card.title")}</h3>
              <p className="text-muted-foreground text-sm">
                {t("Card.description")}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="text-muted-foreground hover:text-foreground flex items-center gap-3 transition-colors"
                >
                  <Icon className="text-primary h-5 w-5" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              {socialLinks.map(({ href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/50 rounded-full border p-3 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-border/50 bg-card/30 flex flex-col gap-4 rounded-xl border p-6 backdrop-blur-md"
          >
            <label className="space-y-2">
              <span className="text-sm font-medium">
                {t("Form.name.label")}
              </span>
              <input
                type="text"
                name="name"
                placeholder={t("Form.name.placeholder")}
                className={inputClass}
                required
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium">
                {t("Form.email.label")}
              </span>
              <input
                type="email"
                name="email"
                placeholder={t("Form.email.placeholder")}
                className={inputClass}
                required
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium">
                {t("Form.subject.label")}
              </span>
              <input
                type="text"
                name="subject"
                placeholder={t("Form.subject.placeholder")}
                className={inputClass}
                required
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium">
                {t("Form.message.label")}
              </span>
              <textarea
                name="message"
                placeholder={t("Form.message.placeholder")}
                rows={4}
                className={`${inputClass} resize-none`}
                required
              />
            </label>

            <Button type="submit" className="mt-2">
              <Send className="mr-2 h-4 w-4" />
              {t("Form.button")}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

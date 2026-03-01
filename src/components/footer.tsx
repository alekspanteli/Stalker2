import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/ui/container";

const GAME_LINKS = ["Overview", "Features", "Factions", "Media", "Editions"] as const;
const SUPPORT_LINKS = ["Help Center", "FAQ", "Contact", "Forums", "Modding"] as const;

const SOCIAL_LINKS = [
  {
    name: "X (Twitter)",
    href: "https://x.com/stalaboratory",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@stalaboratory",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/officialStalker",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.538.108v3.225a10 10 0 0 0-.867-.015c-1.228 0-1.704.465-1.704 1.674v2.566h4.507l-.867 3.667h-3.64v7.98C18.97 22.753 24 17.945 24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.628 3.874 10.35 9.101 11.691" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/stalker_official",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8504.6151 19.0872.32 18.2143.1197 16.9366.0633 15.6588.0066 15.2479-.0067 11.9999.0001 8.7521.0069 8.3439.0158 7.0301.084m.2138 21.8318c-1.1742-.0539-1.8119-.2501-2.2364-.4147-.5621-.2187-.9635-.4789-1.3849-.9003-.4217-.4218-.6811-.8246-.9-.3863-.1652-.625-.3634-1.0634-.4177-2.2375-.058-1.2873-.0703-1.6737-.0757-4.9347-.0054-3.261.0044-3.6474.0615-4.9364.0527-1.1743.2492-1.8122.4138-2.2373.2196-.5631.4798-.9643.9013-1.3862.4218-.4217.823-.6811 1.3867-.8986.3842-.1651.625-.3633 1.0631-.4176 1.2869-.0582 1.6737-.0713 4.9351-.0767 3.2612-.0054 3.6479.0044 4.9365.0614 1.1739.0527 1.8116.2493 2.2359.4142.5622.2194.9642.4798 1.3859.9014.4218.4218.6812.8232.9.3872.1652.626.3637 1.0636.4182 2.2374.0579 1.2873.071 1.6739.0758 4.9346.0048 3.2609-.0047 3.6478-.062 4.937-.0528 1.1738-.2496 1.8114-.414 2.2362-.2192.5625-.4794.9636-.9008 1.385-.4218.4222-.8232.6813-1.3863.9-.3853.1651-.6255.3636-1.0636.4177-1.2869.0578-1.6733.0706-4.9343.0758-3.261.0051-3.6477-.005-4.9365-.0618M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.1735 6.1489 3.4029-.0065 6.1553-2.7701 6.1488-6.1733-.0067-3.4032-2.7707-6.1557-6.1735-6.1489-3.4029.0065-6.1554 2.771-6.1488 6.1733M8.3047 12c-.0043-2.0427 1.6544-3.7042 3.6971-3.7085 2.0428-.0043 3.7042 1.6544 3.7085 3.6971.0043 2.0427-1.6544 3.7042-3.6971 3.7085C9.6647 15.6997 8.009 14.0427 8.3047 12" />
      </svg>
    ),
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/stalker_official",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
      </svg>
    ),
  },
] as const;

function FooterLinksColumn({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <div className="md:col-span-2">
      <h4 className="mb-6 font-bold tracking-wider text-sm text-stalker-orange font-[family-name:var(--font-oswald)] uppercase">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-stalker-cream/70 hover:text-stalker-orange transition-colors font-light text-sm">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-20 bg-stalker-dark border-t border-stalker-cream/10">
      <Container>
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-stalker-orange" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3.14.69 4.22 1.78L13.41 9.6A2.98 2.98 0 0 0 12 9c-.5 0-.97.12-1.41.34L7.78 6.78A6.96 6.96 0 0 1 12 5zm-7 7c0-1.66.69-3.14 1.78-4.22l2.82 2.81A2.98 2.98 0 0 0 9 12c0 .5.12.97.34 1.41l-2.56 2.81A6.96 6.96 0 0 1 5 12zm7 7a6.96 6.96 0 0 1-4.22-1.78l2.82-2.82c.44.22.91.34 1.41.34s.97-.12 1.41-.34l2.82 2.82A6.96 6.96 0 0 1 12 19zm0-5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.66 2.72l-2.56-2.81c.22-.44.34-.91.34-1.41s-.12-.97-.34-1.41l2.82-2.82A6.96 6.96 0 0 1 19 12c0 1.66-.69 3.14-1.78 4.22z"/>
              </svg>
              <h3 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-oswald)] text-stalker-cream">
                S.T.A.L.K.E.R. 2
              </h3>
            </div>
            <p className="text-stalker-cream/70 font-light leading-relaxed mb-8 max-w-md">
              S.T.A.L.K.E.R. 2: Heart of Chornobyl is a next-gen sequel to the award-winning PC game franchise developed by GSC Game World.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 border border-stalker-cream/15 hover:border-stalker-orange hover:bg-stalker-orange/10 flex items-center justify-center transition-all duration-300 group"
                >
                  <span className="text-stalker-cream/70 group-hover:text-stalker-orange transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <FooterLinksColumn title="Game" links={GAME_LINKS} />

          <FooterLinksColumn title="Support" links={SUPPORT_LINKS} />

          <div className="md:col-span-3">
            <h4 className="mb-6 font-bold tracking-wider text-sm text-stalker-orange font-[family-name:var(--font-oswald)] uppercase">
              Newsletter
            </h4>
            <p className="text-stalker-cream/70 font-light mb-4 text-sm">
              Get the latest news and updates from the Zone
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email address" className="flex-1" />
              <Button size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-stalker-cream/5" />

        <div className="flex flex-col items-center gap-2 text-sm text-stalker-cream/70">
          <p>&copy; {new Date().getFullYear()} GSC Game World. All rights reserved.</p>
          <p className="text-center text-xs text-stalker-cream/60">
            Unofficial fan-made site. S.T.A.L.K.E.R. 2 and all related rights belong to GSC Game World.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stalker-cream/70 hover:text-stalker-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-stalker-cream/70 hover:text-stalker-orange transition-colors">Terms of Service</a>
            <a href="#" className="text-stalker-cream/70 hover:text-stalker-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

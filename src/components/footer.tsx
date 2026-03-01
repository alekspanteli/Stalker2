import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const GAME_LINKS = ["Overview", "Features", "Factions", "Media", "Editions"] as const;
const SUPPORT_LINKS = ["Help Center", "FAQ", "Contact", "Forums", "Modding"] as const;

export function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 bg-stalker-dark border-t border-stalker-cream/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-stalker-orange" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3.14.69 4.22 1.78L13.41 9.6A2.98 2.98 0 0 0 12 9c-.5 0-.97.12-1.41.34L7.78 6.78A6.96 6.96 0 0 1 12 5zm-7 7c0-1.66.69-3.14 1.78-4.22l2.82 2.81A2.98 2.98 0 0 0 9 12c0 .5.12.97.34 1.41l-2.56 2.81A6.96 6.96 0 0 1 5 12zm7 7a6.96 6.96 0 0 1-4.22-1.78l2.82-2.82c.44.22.91.34 1.41.34s.97-.12 1.41-.34l2.82 2.82A6.96 6.96 0 0 1 12 19zm0-5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.66 2.72l-2.56-2.81c.22-.44.34-.91.34-1.41s-.12-.97-.34-1.41l2.82-2.82A6.96 6.96 0 0 1 19 12c0 1.66-.69 3.14-1.78 4.22z"/>
              </svg>
              <h3 className="text-2xl font-bold tracking-tight font-['Oswald',sans-serif] text-stalker-cream">
                S.T.A.L.K.E.R. 2
              </h3>
            </div>
            <p className="text-stalker-cream/40 font-light leading-relaxed mb-8 max-w-md">
              S.T.A.L.K.E.R. 2: Heart of Chornobyl is a next-gen sequel to the award-winning PC game franchise developed by GSC Game World.
            </p>
            <div className="flex gap-3">
              {["X", "YT", "FB", "IG", "TW"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 border border-stalker-cream/15 hover:border-stalker-orange flex items-center justify-center transition-colors group"
                >
                  <span className="text-stalker-cream/40 group-hover:text-stalker-orange transition-colors text-xs font-['Oswald',sans-serif] font-bold">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-bold tracking-wider text-sm text-stalker-orange font-['Oswald',sans-serif] uppercase">
              Game
            </h4>
            <ul className="space-y-3">
              {GAME_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-stalker-cream/40 hover:text-stalker-orange transition-colors font-light text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-bold tracking-wider text-sm text-stalker-orange font-['Oswald',sans-serif] uppercase">
              Support
            </h4>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-stalker-cream/40 hover:text-stalker-orange transition-colors font-light text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-6 font-bold tracking-wider text-sm text-stalker-orange font-['Oswald',sans-serif] uppercase">
              Newsletter
            </h4>
            <p className="text-stalker-cream/40 font-light mb-4 text-sm">
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

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stalker-cream/30">
          <p>&copy; {new Date().getFullYear()} GSC Game World. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stalker-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stalker-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stalker-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

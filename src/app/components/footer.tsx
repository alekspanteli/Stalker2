import { Twitter, Youtube, Facebook, Instagram, Twitch } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 lg:px-20 bg-black border-t border-zinc-900">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <h3 className="text-3xl font-black mb-6 tracking-tight">STALKER 2</h3>
            <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-md">
              S.T.A.L.K.E.R. 2: Heart of Chornobyl is a next-gen sequel to the award-winning PC game franchise.
            </p>
            <div className="flex gap-4">
              {[Twitter, Youtube, Facebook, Instagram, Twitch].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border border-zinc-800 hover:border-white flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-bold tracking-wide">GAME</h4>
            <ul className="space-y-3">
              {["Overview", "Features", "World", "Media"].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-bold tracking-wide">SUPPORT</h4>
            <ul className="space-y-3">
              {["Help Center", "FAQ", "Contact", "Forums"].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-6 font-bold tracking-wide">NEWSLETTER</h4>
            <p className="text-gray-400 font-light mb-4">
              Get the latest news and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 GSC Game World. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

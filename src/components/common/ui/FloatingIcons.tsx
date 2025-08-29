import { SiInstagram, SiFacebook, SiYoutube, SiThreads } from "react-icons/si";

export const FloatingSocials = () => (
  <div className="fixed top-1/3 left-4 flex flex-col space-y-4 z-50">
    {/* Threads */}
    <a href="https://www.threads.net" target="_blank" rel="noreferrer"
       className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-gray-800 hover:scale-110 transition">
      <SiThreads className="text-white text-xl" />
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"
       className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-pink-500 to-purple-500 hover:scale-110 transition">
      <SiInstagram className="text-white text-xl" />
    </a>

    {/* Facebook */}
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"
       className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700 hover:scale-110 transition">
      <SiFacebook className="text-white text-xl" />
    </a>

    {/* YouTube */}
    <a href="https://www.youtube.com" target="_blank" rel="noreferrer"
       className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-red-500 to-red-700 hover:scale-110 transition">
      <SiYoutube className="text-white text-xl" />
    </a>
  </div>
);

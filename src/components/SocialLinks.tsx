
import { Music as MusicIcon, Play, Instagram, Camera } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/5XKBEUbzPsOlbVgOFXq7Hk?si=SzaXxJbCTMiP2M7_7nMy3A',
      icon: MusicIcon,
      bgColor: 'bg-[#1DB954]',
      hoverColor: 'hover:bg-[#1ed760]',
      shadowColor: 'hover:shadow-green-500/30'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/us/artist/mitchelcasimir/1736847723',
      icon: MusicIcon,
      bgColor: 'bg-gradient-to-b from-gray-800 to-black',
      hoverColor: 'hover:from-gray-700 hover:to-gray-900',
      shadowColor: 'hover:shadow-gray-500/30'
    },
    {
      name: 'YouTube Music',
      url: 'https://www.youtube.com/@MitchelCasimir',
      icon: Play,
      bgColor: 'bg-[#FF0000]',
      hoverColor: 'hover:bg-[#ff1a1a]',
      shadowColor: 'hover:shadow-red-500/30'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mitchelcasimir/',
      icon: Instagram,
      bgColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
      hoverColor: 'hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      shadowColor: 'hover:shadow-pink-500/30'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mitchelcasimir',
      icon: 'tiktok',
      bgColor: 'bg-black',
      hoverColor: 'hover:bg-gray-900',
      shadowColor: 'hover:shadow-white/30'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-white mb-16 animate-fade-in">
          Connect
        </h2>
        
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon === 'tiktok' ? null : link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 ${link.bgColor} ${link.hoverColor} ${link.shadowColor} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg animate-fade-in`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                aria-label={`Visit ${link.name}`}
              >
                {link.icon === 'tiktok' ? (
                  <TikTokIcon size={24} className="text-white" />
                ) : (
                  <IconComponent size={24} className="text-white" />
                )}
              </a>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm tracking-wide">
            © 2024 MitchelCasimir. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;

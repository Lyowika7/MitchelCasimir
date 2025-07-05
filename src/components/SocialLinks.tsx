
import { Music, Play, Instagram, Camera } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/5XKBEUbzPsOlbVgOFXq7Hk?si=SzaXxJbCTMiP2M7_7nMy3A',
      icon: Music,
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/us/artist/mitchelcasimir/1736847723',
      icon: Music,
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-700'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@MitchelCasimir',
      icon: Play,
      bgColor: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mitchelcasimir/',
      icon: Instagram,
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mitchelcasimir',
      icon: Camera,
      bgColor: 'bg-black',
      hoverColor: 'hover:bg-gray-900'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-white mb-16 animate-fade-in">
          Connect
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group text-center block transform transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`p-8 rounded-xl ${link.bgColor} ${link.hoverColor} transition-all duration-300 flex items-center justify-center`}>
                  <IconComponent size={48} className="text-white" />
                </div>
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

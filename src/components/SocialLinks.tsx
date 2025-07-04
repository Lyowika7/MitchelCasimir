
const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/mitchelcasimir',
      description: 'Stream on Spotify'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/artist/mitchelcasimir',
      description: 'Listen on Apple Music'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@mitchelcasimir',
      description: 'Watch on YouTube'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/mitchelcasimir',
      description: 'Follow on Instagram'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@mitchelcasimir',
      description: 'Follow on TikTok'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-white mb-16 animate-fade-in">
          Connect
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group text-center block"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm tracking-wide">
            © 2024 mitchelCasimir. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="images/H4U.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80')`
            }}
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Picture */}
  
        
        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 animate-fade-in">
          MitchelCasimir
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide mb-8 animate-fade-in-delayed">
          Experience the Sound
        </p>
        
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-scale-in" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


import Header from '../components/Header';

const Tour = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-8">
            Tour Dates
          </h1>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-16 backdrop-blur-sm">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎵</span>
              </div>
              <h2 className="text-3xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                We're working on something amazing for you. Tour dates and live performances 
                will be announced soon. Stay tuned for updates!
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/60">
                Want to be the first to know about upcoming shows?
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#contact" 
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Join Our Newsletter
                </a>
                <a 
                  href="/contact" 
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;

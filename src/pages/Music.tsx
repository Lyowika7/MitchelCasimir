import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, Play, ExternalLink } from 'lucide-react';
import Header from '../components/Header';

interface Release {
  id: string;
  title: string;
  type: string;
  release_date: string;
  cover_image_url: string;
  spotify_url: string;
  apple_music_url: string;
  youtube_url: string;
  description: string;
}

const Music = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    try {
      const { data, error } = await supabase
        .from('releases')
        .select('*')
        .order('release_date', { ascending: false });

      if (error) throw error;
      setReleases(data || []);
    } catch (error) {
      console.error('Error fetching releases:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : releases.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < releases.length - 1 ? prev + 1 : 0));
  };

  const openModal = (release: Release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRelease(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Header />
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Mock data if no releases exist
  const mockReleases = releases.length === 0 ? [
    {
      id: '1',
      title: 'Latest Single',
      type: 'single',
      release_date: '2024-01-01',
      cover_image_url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=600&fit=crop',
      spotify_url: 'https://open.spotify.com/artist/5XKBEUbzPsOlbVgOFXq7Hk',
      apple_music_url: 'https://music.apple.com/us/artist/mitchelcasimir/1736847723',
      youtube_url: 'https://www.youtube.com/@MitchelCasimir',
      description: 'New music from MitchelCasimir'
    },
    {
      id: '2',
      title: 'Previous Release',
      type: 'single',
      release_date: '2023-12-01',
      cover_image_url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=600&fit=crop',
      spotify_url: 'https://open.spotify.com/artist/5XKBEUbzPsOlbVgOFXq7Hk',
      apple_music_url: 'https://music.apple.com/us/artist/mitchelcasimir/1736847723',
      youtube_url: 'https://www.youtube.com/@MitchelCasimir',
      description: 'Another great track'
    }
  ] : releases;

  const currentRelease = mockReleases[currentIndex];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Navigation arrows */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={handlePrevious}
              className="p-3 text-white/60 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full"
              disabled={mockReleases.length <= 1}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-center">
              <span className="text-white/40 text-sm tracking-widest uppercase">
                {currentIndex + 1} of {mockReleases.length}
              </span>
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 text-white/60 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full"
              disabled={mockReleases.length <= 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Main content */}
          <div className="text-center animate-fade-in">
            {/* Album cover */}
            <div 
              className="relative max-w-lg mx-auto mb-8 cursor-pointer group"
              onClick={() => openModal(currentRelease)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-900">
                {currentRelease.cover_image_url ? (
                  <img
                    src={currentRelease.cover_image_url}
                    alt={currentRelease.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Play size={64} className="text-white/20" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <Play size={48} className="text-white" />
              </div>
            </div>

            {/* Song info */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {currentRelease.title}
            </h1>
            
            {currentRelease.release_date && (
              <p className="text-white/60 text-lg mb-8 tracking-wide">
                {new Date(currentRelease.release_date).getFullYear()}
              </p>
            )}

            {/* Listen Now button */}
            <Button
              onClick={() => openModal(currentRelease)}
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            >
              Listen Now
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 max-w-md mx-auto">
          <DialogHeader>
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <DialogTitle className="text-white text-xl font-bold text-center pt-4">
              {selectedRelease?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-3 pt-4">
            {selectedRelease?.spotify_url && (
              <Button
                asChild
                variant="outline"
                className="w-full bg-green-600 hover:bg-green-700 border-green-600 text-white"
              >
                <a href={selectedRelease.spotify_url} target="_blank" rel="noopener noreferrer">
                  <div className="w-5 h-5 mr-3 bg-green-400 rounded-full flex items-center justify-center">
                    <Play size={12} className="text-green-900" />
                  </div>
                  Spotify
                  <ExternalLink size={16} className="ml-auto" />
                </a>
              </Button>
            )}
            
            {selectedRelease?.apple_music_url && (
              <Button
                asChild
                variant="outline"
                className="w-full bg-gray-800 hover:bg-gray-700 border-gray-600 text-white"
              >
                <a href={selectedRelease.apple_music_url} target="_blank" rel="noopener noreferrer">
                  <div className="w-5 h-5 mr-3 bg-white rounded-sm"></div>
                  Apple Music
                  <ExternalLink size={16} className="ml-auto" />
                </a>
              </Button>
            )}
            
            <Button
              asChild
              variant="outline"
              className="w-full bg-gray-800 hover:bg-gray-700 border-gray-600 text-white"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="w-5 h-5 mr-3 bg-gradient-to-br from-pink-500 to-orange-400 rounded"></div>
                iTunes
                <ExternalLink size={16} className="ml-auto" />
              </a>
            </Button>
            
            {selectedRelease?.youtube_url && (
              <Button
                asChild
                variant="outline"
                className="w-full bg-red-600 hover:bg-red-700 border-red-600 text-white"
              >
                <a href={selectedRelease.youtube_url} target="_blank" rel="noopener noreferrer">
                  <Play size={16} className="mr-3" />
                  YouTube Music
                  <ExternalLink size={16} className="ml-auto" />
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Music;
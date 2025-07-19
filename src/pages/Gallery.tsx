import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image as ImageIcon, Instagram } from 'lucide-react';
import Header from '../components/Header';
import TikTokIcon from '../components/icons/TikTokIcon';

interface Photo {
  id: string;
  title: string;
  image_url: string;
  description: string;
  featured: boolean;
  created_at: string;
}

const Gallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Header />
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-xl text-white/70">
              Behind the scenes and live moments
            </p>
          </div>

          {photos.length === 0 ? (
            <div className="text-center py-16">
              <ImageIcon size={64} className="text-white/40 mx-auto mb-4" />
              <p className="text-white/60 text-lg">No photos available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo) => (
                <Card 
                  key={photo.id} 
                  className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer group"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="aspect-square bg-gray-800 overflow-hidden relative">
                    <img 
                      src={photo.image_url} 
                      alt={photo.title || 'Gallery photo'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {photo.featured && (
                      <Badge className="absolute top-3 left-3 bg-yellow-600 text-white">
                        Featured
                      </Badge>
                    )}
                    
                    {/* Social media links */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href="https://www.instagram.com/mitchelcasimir/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                        aria-label="View on Instagram"
                      >
                        <Instagram size={16} className="text-white" />
                      </a>
                      
                      <a
                        href="https://www.tiktok.com/@mitchelcasimir"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30"
                        aria-label="View on TikTok"
                      >
                        <TikTokIcon size={14} className="text-white" />
                      </a>
                    </div>
                  </div>
                  {photo.title && (
                    <div className="p-4">
                      <h3 className="text-white font-medium">{photo.title}</h3>
                      {photo.description && (
                        <p className="text-white/60 text-sm mt-1 line-clamp-2">{photo.description}</p>
                      )}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}

          {/* Modal for selected photo */}
          {selectedPhoto && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <div className="max-w-4xl max-h-full">
                <img 
                  src={selectedPhoto.image_url} 
                  alt={selectedPhoto.title || 'Gallery photo'}
                  className="max-w-full max-h-full object-contain"
                />
                {selectedPhoto.title && (
                  <div className="text-center mt-4">
                    <h3 className="text-white text-xl font-semibold">{selectedPhoto.title}</h3>
                    {selectedPhoto.description && (
                      <p className="text-white/70 mt-2">{selectedPhoto.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;


import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink, Music as MusicIcon } from 'lucide-react';

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

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Music
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore MitchelCasimir's latest releases and discography
          </p>
        </div>

        {releases.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-white mb-4">Latest Music</h2>
              <p className="text-white/60 text-lg mb-8">Listen to MitchelCasimir's music on your favorite platform</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href="https://open.spotify.com/artist/5XKBEUbzPsOlbVgOFXq7Hk?si=SzaXxJbCTMiP2M7_7nMy3A" target="_blank" rel="noopener noreferrer">
                    <div className="w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                    Spotify
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-gray-600 text-white bg-gray-800 hover:bg-gray-700">
                  <a href="https://music.apple.com/us/artist/mitchelcasimir/1736847723" target="_blank" rel="noopener noreferrer">
                    <div className="w-4 h-4 mr-2 bg-white rounded-sm"></div>
                    Apple Music
                  </a>
                </Button>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <a href="https://www.youtube.com/@MitchelCasimir" target="_blank" rel="noopener noreferrer">
                    <Play size={16} className="mr-2" />
                    YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release) => (
              <Card key={release.id} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-colors">
                <div className="aspect-square bg-gray-800 flex items-center justify-center">
                  {release.cover_image_url ? (
                    <img 
                      src={release.cover_image_url} 
                      alt={release.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Play size={48} className="text-white/40" />
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      {release.type.toUpperCase()}
                    </Badge>
                    {release.release_date && (
                      <span className="text-white/60 text-sm">
                        {new Date(release.release_date).getFullYear()}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{release.title}</h3>
                  {release.description && (
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{release.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {release.spotify_url && (
                      <Button size="sm" variant="outline" className="bg-green-600 hover:bg-green-700 border-green-600">
                        <ExternalLink size={14} className="mr-1" />
                        Spotify
                      </Button>
                    )}
                    {release.apple_music_url && (
                      <Button size="sm" variant="outline" className="bg-gray-800 hover:bg-gray-700 border-gray-600">
                        <ExternalLink size={14} className="mr-1" />
                        Apple Music
                      </Button>
                    )}
                    {release.youtube_url && (
                      <Button size="sm" variant="outline" className="bg-red-600 hover:bg-red-700 border-red-600">
                        <ExternalLink size={14} className="mr-1" />
                        YouTube
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Music;

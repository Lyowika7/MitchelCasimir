import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Instagram } from 'lucide-react';
import Header from '../components/Header';
import TikTokIcon from '../components/icons/TikTokIcon';
import XIcon from '../components/icons/XIcon';

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  featured_image_url: string;
  created_at: string;
}

const News = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
              News
            </h1>
            <p className="text-xl text-white/70 mb-6">
              Stay updated with the latest from mitchelcasimir
            </p>
            
            <div className="flex justify-center items-center gap-4">
              <a
                href="https://www.instagram.com/mitchelcasimir/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                aria-label="Follow on Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              
              <a
                href="https://x.com/mitchelcasimir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30"
                aria-label="Follow on X"
              >
                <XIcon size={18} className="text-white" />
              </a>
              
              <a
                href="https://www.tiktok.com/@mitchelcasimir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30"
                aria-label="Follow on TikTok"
              >
                <TikTokIcon size={18} className="text-white" />
              </a>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg">No news articles available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Card key={post.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  {post.featured_image_url && (
                    <div className="aspect-video bg-gray-800 overflow-hidden">
                      <img 
                        src={post.featured_image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                      <Calendar size={16} />
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      <Badge variant="secondary" className="bg-white/10 text-white ml-2">
                        News
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{post.title}</h2>
                  </CardHeader>
                  <CardContent>
                    {post.excerpt ? (
                      <p className="text-white/80 text-lg leading-relaxed">{post.excerpt}</p>
                    ) : (
                      <div 
                        className="text-white/80 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content.substring(0, 300) + '...' }}
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;

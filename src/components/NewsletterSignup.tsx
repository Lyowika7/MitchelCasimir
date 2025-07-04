
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, full_name: fullName || null }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter."
      });

      setEmail('');
      setFullName('');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message.includes('duplicate') 
          ? "You're already subscribed to our newsletter!" 
          : error.message,
        variant: error.message.includes('duplicate') ? "default" : "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white mb-6">
          Stay Updated
        </h2>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest music releases, tour announcements, and exclusive content.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            type="text"
            placeholder="Your Name (optional)"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-white text-black hover:bg-white/90"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;

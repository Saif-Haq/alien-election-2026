import React, { useState, useEffect } from 'react'
import EvilEye from '@/component/EvilEye';
import { 
  Eye, 
  Zap, 
  Rocket, 
  Quote, 
  User, 
  Facebook as FacebookIcon, 
  Globe, 
  Share2 
} from 'lucide-react';
import PrismaticBurst from '@/component/PrismaticBurst';
import SynapticShift from '@/components/ui/SynapticShift';
import CircleGallery from '@/component/CircleGallery';

const manifestoItems = [
  { title: 'Mandatory Levitation', description: 'Gravity is a choice. We choose to ignore it. Every Tuesday.' },
  { title: 'Free Slime for All', description: 'Nutritious, delicious, and slightly radioactive. The breakfast of champions.' },
  { title: 'Total Mind Melds', description: 'Why argue when we can just share the same consciousness? Efficiency at its peak.' },
  { title: 'Moon Relocation', description: 'Better views, less tides. We are moving the moon 50 miles closer.' }
];

const testimonials = [
  { name: 'Dave from Ohio', quote: 'I for one welcome our new insectoid overlords. The dental plan is incredible.' },
  { name: 'Sarah from London', quote: 'Zorgon promised to fix the traffic. He vaporized the cars. Problem solved!' },
  { name: 'The President (Hypnotized)', quote: 'Resistance is... actually quite tiring. Zorgon is the vibe.' }
];

// Basic usage with default settings
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60",
];


const App = () => {
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  }, []);




  return (

    <div className="min-h-screen bg-void-black text-white selection:bg-alien-green selection:text-black relative overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-alien-green/20 bg-void-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">


        <div className="flex items-center gap-2">
          <Eye className="text-alien-green w-6 h-6" />
          <span className="font-display font-bold text-xl tracking-tighter alien-glow uppercase">EVIL AGENDA 2026</span>
        </div>


        <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
          <a href="#manifesto" className="hover:text-alien-green transition-colors">Manifesto</a>
          <a href="#testimonials" className="hover:text-alien-green transition-colors">Testimonials</a>
          <a href="#join" className="hover:text-alien-green transition-colors">Join Invasion</a>
        </div>


        <button className="brutalist-border px-4 py-2 text-xs font-mono uppercase hover:bg-alien-green hover:text-black transition-all">
          VOTE NOW
        </button>
      </nav>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 grid lg:grid-cols-2 items-center">
        {/* <SynapticShift className='absolute inset-0 w-full h-full' color='#00ff41' /> */}
        <div className="relative z-10 gap-12 px-6 max-w-7xl mx-auto">
          <div className="inline-block border border-alien-green px-3 py-1 text-[10px] font-mono uppercase mb-6 tracking-[0.2em]">
            Status: Approaching Earth Orbit
          </div>
          <h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-8">
            VOTE FOR THE <span className="text-alien-green italic">INEVITABLE</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-lg mb-10 font-light leading-relaxed">
            Humanity has had its turn. It's time for a leader who can see everything (literally, I have a very large eye) and change everything (mostly into slime).
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-alien-green text-black px-8 py-4 font-bold uppercase tracking-tighter hover:scale-105 transition-transform flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              SURRENDER TODAY
            </button>
            <button className="border border-white/20 px-8 py-4 font-bold uppercase tracking-tighter hover:bg-white/5 transition-colors">
              VIEW MANIFESTO
            </button>
          </div>
        </div>

        <div className="relative isolate flex w-full justify-center items-center px-6">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,520px)] w-[min(100vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-alien-green/10 blur-[120px]"
            aria-hidden
          />
          <div className="relative z-10 w-full aspect-square max-w-[500px] brutalist-border p-2 bg-void-black animate-float">
            {isGenerating ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gray-900/50 font-mono text-xs">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-alien-green border-t-transparent" />
                <p className="animate-pulse">TRANSMITTING IMAGE FROM MOTHERSHIP...</p>
              </div>
            ) : (
              <>
                <PrismaticBurst
                  animationType="rotate3d"
                  intensity={2}
                  speed={0.5}
                  distort={0}
                  paused={false}
                  offset={{ x: 10, y: 190 }}
                  hoverDampness={0.25}
                  rayCount={0}
                  mixBlendMode="lighten"
                  colors={['#00ff41', '#4d3dff', '#ffffff']}
                />
                <img
                  src="/Alien.png"
                  alt="Zorgon the Unfathomable"
                  className="absolute inset-x-2 top-12 bottom-2 z-1 object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </>
            )}
            <div className="pointer-events-none absolute -left-1 -top-1 z-2 h-4 w-4 border-l-2 border-t-2 border-alien-green" />
            <div className="pointer-events-none absolute -right-1 -top-1 z-2 h-4 w-4 border-r-2 border-t-2 border-alien-green" />
            <div className="pointer-events-none absolute -bottom-1 -left-1 z-2 h-4 w-4 border-b-2 border-l-2 border-alien-green" />
            <div className="pointer-events-none absolute -bottom-1 -right-1 z-2 h-4 w-4 border-b-2 border-r-2 border-alien-green" />
          </div>
        </div>
      </header>

      <CircleGallery images={images} itemScale={0.8} itemHeight={370} className="w-screen h-[120vh]" showNumbers={false} />


      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-display text-5xl font-bold mb-4 uppercase">THE MANIFESTO</h2>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Protocol for Planetary Reorganization</p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-8xl font-display font-bold opacity-10">01-04</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {manifestoItems.map((item) => (
              <div key={item.title} className="bg-void-black p-8 hover:bg-alien-green/5 transition-colors group">
                <div className="w-10 h-10 rounded-full border border-alien-green/30 flex items-center justify-center mb-6 group-hover:bg-alien-green group-hover:text-black transition-all">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-16 text-center uppercase">VOICES OF THE <span className="text-alien-green">CONQUERED</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 border border-white/5 bg-white/[0.01] relative">
                <Quote className="absolute top-4 right-4 text-white/10 w-10 h-10" />
                <p className="text-lg italic mb-8 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-alien-green/20 flex items-center justify-center">
                    <User className="text-alien-green w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-alien-green">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-32 px-6 bg-alien-green text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-6xl md:text-8xl font-bold mb-8 tracking-tighter uppercase">JOIN THE INVASION.</h2>
          <p className="text-xl mb-12 font-medium">Be the first to know when we land. We promise not to vaporize your inbox (mostly).</p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="EARTHLING@EMAIL.COM" className="flex-1 bg-black/10 border-2 border-black/20 px-6 py-4 placeholder:text-black/40 font-bold focus:outline-none focus:border-black" />
            <button className="bg-black text-alien-green px-8 py-4 font-bold uppercase tracking-tighter hover:bg-black/90 transition-colors">
              SIGN UP
            </button>
          </form>
        </div>
      </section>

      <div className='w-screen h-64'>
        <EvilEye
          eyeColor="#00ff41"
          intensity={1.5}
          pupilSize={0.6}
          irisWidth={0.25}
          glowIntensity={0.35}
          scale={1.2}
          noiseScale={1}
          pupilFollow={1}
          flameSpeed={1}
          backgroundColor="#050505"
        />
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <FacebookIcon className="text-gray-600 hover:text-alien-green cursor-pointer w-6 h-6" />
          <Globe className="text-gray-600 hover:text-alien-green cursor-pointer w-6 h-6" />
          <Share2 className="text-gray-600 hover:text-alien-green cursor-pointer w-6 h-6" />
        </div>
        <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em]">
          &copy; 2026 Zorgon Galactic Campaign Committee. All rights reserved. Resistance is futile.
        </p>
      </footer>

    </div >
  )
}

export default App

import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Interpretis blew my mind with its analysis of 'Pandora's Box'. I had no idea how rich and layered this expression's history was!",
    author: "Sarah K.",
    role: "Literature Professor",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "As a writer, this tool has become invaluable for adding depth to my work. The etymological insights have transformed my approach to language.",
    author: "Michael R.",
    role: "Author & Journalist",
    image: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    quote: "I used Interpretis to explore nursery rhymes with my students. The historical context it provided created engaging discussions about how culture shapes storytelling.",
    author: "Lisa T.",
    role: "History Teacher",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section relative bg-interpretis-darker" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">What Our Users Say</span>
          </h2>
          <p className="text-lg text-interpretis-muted max-w-2xl mx-auto">
            Discover how Interpretis is expanding minds and revealing hidden meanings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glassmorphic-card p-6 transition-all duration-300 hover:shadow-neon-purple relative group"
            >
              <Quote className="absolute right-6 top-6 text-interpretis-accent3/20 transition-all duration-300 group-hover:text-interpretis-accent3/30" size={48} />
              
              <p className="text-interpretis-muted mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-interpretis-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-cyber-grid-bg z-0 opacity-20"></div>
    </section>
  );
};

export default Testimonials;

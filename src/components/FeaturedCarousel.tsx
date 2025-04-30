
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface FeaturedCarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden">
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }} 
        className="h-full w-full bg-cover bg-center duration-300 relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{slides[currentIndex].title}</h2>
          <p className="text-lg mb-6 max-w-lg">{slides[currentIndex].description}</p>
          <div>
            <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6">
              <a href={slides[currentIndex].link}>Learn More</a>
            </Button>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button 
            onClick={goToPrevious} 
            variant="outline" 
            size="icon"
            className="bg-white/20 backdrop-blur-sm border-white/10 hover:bg-white/30 rounded-full"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          <Button 
            onClick={goToNext} 
            variant="outline" 
            size="icon"
            className="bg-white/20 backdrop-blur-sm border-white/10 hover:bg-white/30 rounded-full"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;

"use client"
import React, { useState, useEffect, useCallback } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight
} from 'lucide-react';

// Mock data for hero slider
const heroSlides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        heading: 'Premium Residential Projects',
        subheading: 'Discover your dream home with our exceptional residential developments'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        heading: 'Modern Architecture',
        subheading: 'Contemporary designs that blend luxury with functionality'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        heading: 'Prime Locations',
        subheading: 'Strategic locations with excellent connectivity and amenities'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        heading: 'Luxury Living Spaces',
        subheading: 'Experience the epitome of comfort and elegance'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        heading: 'Smart Investments',
        subheading: 'Your gateway to profitable real estate investments'
    }
];

const HeroHomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }, []);

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="relative h-[80vh] lg:h-[100vh] overflow-hidden">
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Background Image */}
                    <img
                        src={slide.image}
                        alt={slide.heading}
                        className="w-full h-full object-cover"
                    />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full max-w-7xl mx-auto px-4">
                            <div className="text-white max-w-2xl relative z-10">
                                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                                    {slide.heading}
                                </h1>
                                <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
                                    {slide.subheading}
                                </p>
                                <button className="bg-[#1b2638] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center space-x-2">
                                    <span>Explore Projects</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 border border-white text-white rounded-full transition-all"
            >
                <ChevronLeft size={24} className='' />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 border border-white text-white rounded-full transition-all"
            >
                <ChevronRight size={24} className='' />
            </button>

            {/* Slide Indicators */}
                {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                                }`}
                        />
                    ))}
                </div> */}
        </div>
    );
};

export default HeroHomePage;
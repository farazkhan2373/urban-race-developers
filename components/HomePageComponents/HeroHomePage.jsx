"use client"
import React, { useState, useEffect, useCallback } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import Image from 'next/image';

// Mock data for hero slider with separate desktop and mobile images
const heroSlides = [
    {
        id: 1,
        desktopImage: '/img/home-page-images/home-desk-banner-1920x1080-1.webp',
        mobileImage: '/img/home-page-images/home-mobile-banner-600x800-1.webp',
        heading: 'Premium Residential Projects',
        subheading: 'Discover your dream home with our exceptional residential developments'
    },
    {
        id: 2,
        desktopImage: '/img/home-page-images/home-desk-banner-1920x1080-2.webp',
        mobileImage: '/img/home-page-images/home-mobile-banner-600x800-2.webp',
        heading: 'Modern Architecture',
        subheading: 'Contemporary designs that blend luxury with functionality'
    },
    {
        id: 3,
        desktopImage: '/img/home-page-images/home-desk-banner-1920x1080-3.webp',
        mobileImage: '/img/home-page-images/home-mobile-banner-600x800-3.webp',
        heading: 'Prime Locations',
        subheading: 'Strategic locations with excellent connectivity and amenities'
    },
    {
        id: 4,
        desktopImage: '/img/home-page-images/home-desk-banner-1920x1080-4.webp',
        mobileImage: '/img/home-page-images/home-mobile-banner-600x800-4.webp',
        heading: 'Luxury Living Spaces',
        subheading: 'Experience the epitome of comfort and elegance'
    },
    {
        id: 5,
        desktopImage: '/img/home-page-images/home-desk-banner-1920x1080-5.webp',
        mobileImage: '/img/home-page-images/home-mobile-banner-600x800-5.webp',
        heading: 'Smart Investments',
        subheading: 'Your gateway to profitable real estate investments'
    }
];

const HeroHomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check on mount
        checkIsMobile();

        // Listen for resize events
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

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
        <div className="relative h-[80vh] lg:h-[100vh] overflow-hidden mt-20">
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Desktop Background Image */}
                    <img
                        src={slide.desktopImage}
                        alt={slide.heading}           
                        className="hidden md:block w-full h-full object-cover"
                        
                    />

                    {/* Mobile Background Image */}
                    <img
                        src={slide.mobileImage}
                        alt={slide.heading}
                        className="block md:hidden w-full h-full object-cover"
                        
                    />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full max-w-7xl mx-auto px-4">
                            <div className="text-white max-w-2xl relative z-10">
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                                    {slide.heading}
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed">
                                    {slide.subheading}
                                </p>
                                <button className="bg-[#1b2638] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center space-x-2 text-sm md:text-base">
                                    <span>Explore Projects</span>
                                    <ArrowRight size={18} className="md:w-5 md:h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="invisible sm:visible cursor-pointer absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-1.5 md:p-2 border border-white text-white rounded-full transition-all hover:bg-[#1b2638] hover:bg-opacity-20"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} className=" md:w-6 md:h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="invisible sm:visible cursor-pointer absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-1.5 md:p-2 border border-white text-white rounded-full transition-all hover:bg-[#1b2638] hover:bg-opacity-20"
                aria-label="Next slide"
            >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>

            {/* Slide Indicators - Optional, uncomment if needed */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                            index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default HeroHomePage;
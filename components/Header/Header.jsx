'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Phone,
    Mail,
    Menu,
    X,
    ChevronDown
} from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAppartmentOpen, setIsAppartmentOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
            {/* Top bar with contact info */}
            <div className='bg-[#1b2638] text-white'>
                <div className="max-w-7xl mx-auto py-2">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-end items-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <Phone size={14} />
                                <span>+91 90307 49957</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail size={14} />
                                <span>info@urbanracedevelopers.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                {/* Main header */}
                <div className="bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-1">
                            {/* Logo */}
                           <a href='/'>
                            <div className="flex items-center">
                                <img
                                    src="/img/urban-race-logo.jpg"
                                    alt="Urban Race Developers Logo"
                                    height={80}
                                    width={130}
                                    className="object-cover"
                                />
                                {/* <span className="hidden sm:inline ml-3 text-2xl font-bold text-[#1b2638]">Developers</span> */}
                            </div>
                            </a>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center space-x-8 font-semibold">
                                <a href="/" className="text-gray-700 hover:text-[#1b2638] transition-colors ">Home</a>
                                <a href="/about" className="text-gray-700 hover:text-[#1b2638] transition-colors ">About Us</a>
                                <a href="/why-choose-us" className="text-gray-700 hover:text-[#1b2638] transition-colors">Why Choose Us</a>
                                


                                {/* Services Dropdown */}
                                {/* <div className="relative group">
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1b2638] transition-colors">
                                        <span>Services</span>
                                        <ChevronDown size={16} />
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                        <a href="/services/promoters-builders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Promoters & Builders</a>
                                        <a href="/services/developers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Developers</a>
                                        <a href="/services/contractors" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contractors</a>
                                        <a href="/services/consultants" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Consultants</a>
                                    </div>
                                </div> */}

                                {/* Appartment Dropdown */}
                                {/* <div className="relative group">
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1b2638] transition-colors">
                                        <span>Appartments</span>
                                        <ChevronDown size={16} />
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                        <a href="/appartments/current" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Current Projects</a>
                                        <a href="/appartments/completed" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Completed Projects</a>
                                    </div>
                                </div> */}
                                <a href="/apartments" className="text-gray-700 hover:text-[#1b2638] transition-colors">Apartments</a>


                                <a href="/contact" className="text-gray-700 hover:text-[#1b2638] transition-colors">Contact Us</a>
                            </nav>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden bg-white border-t">
                            <nav className="container mx-auto px-4 py-4 space-y-4">
                                <a href="/" className="block text-gray-700 hover:text-[#1b2638]">Home</a>
                                <a href="/about" className="block text-gray-700 hover:text-[#1b2638]">About Us</a>
                                <a href="/why-choose-us" className="block text-gray-700 hover:text-[#1b2638]">Why Choose Us</a>
                                
                                {/* <div>
                                    <button
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                        className="flex items-center justify-between w-full text-gray-700 hover:text-[#1b2638]"
                                    >
                                        <span>Services</span>
                                        <ChevronDown size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isServicesOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            <a href="/services/promoters-builders" className="block text-gray-600 hover:text-[#1b2638]">Promoters & Builders</a>
                                            <a href="/services/developers" className="block text-gray-600 hover:text-[#1b2638]">Developers</a>
                                            <a href="/services/contractors" className="block text-gray-600 hover:text-[#1b2638]">Contractors</a>
                                            <a href="/services/consultants" className="block text-gray-600 hover:text-[#1b2638]">Consultants</a>
                                        </div>
                                    )}
                                </div> */}

                                <div>
                                    <button
                                        onClick={() => setIsAppartmentOpen(!isAppartmentOpen)}
                                        className="flex items-center justify-between w-full text-gray-700 hover:text-[#1b2638]"
                                    >
                                        <span>Appartments</span>
                                        <ChevronDown size={16} className={`transform transition-transform ${isAppartmentOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isAppartmentOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            <a href="/appartments/current" className="block text-gray-600 hover:text-[#1b2638]">Current Projects</a>
                                            <a href="/appartments/completed" className="block text-gray-600 hover:text-[#1b2638]">Completed Projects</a>
                                        </div>
                                    )}
                                </div>

                                <a href="/contact" className="block text-gray-700 hover:text-[#1b2638]">Contact Us</a>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-outfit font-bold text-gradient"
                    >
                        RG.
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 ml-4">
                            <a href="https://linkedin.com/in/romit-projects-a45018277/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-light transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:romit.gupta2022@vitstudent.ac.in" className="text-slate-400 hover:text-primary-light transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-lighter border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

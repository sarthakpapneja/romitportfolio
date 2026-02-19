import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold mb-6">
                        Aspiring Software Engineer
                    </span>
                    <h1 className="text-6xl md:text-8xl font-outfit font-extrabold tracking-tight mb-6">
                        Designing Future <br />
                        <span className="text-gradient">Intelligent Systems</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
                        I'm <span className="text-white font-medium">Romit Gupta</span>, a Computer Science student at VIT Chennai specialized in AI-driven applications and secure systems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all"
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="text-slate-500 animate-bounce" size={20} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

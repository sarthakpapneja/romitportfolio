import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-extrabold text-white mb-6">Let's Connect</h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities
                            to be part of your visions. Feel free to reach out through any of these channels.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-xl text-primary-light group-hover:bg-primary/20 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email</p>
                                    <a href="mailto:romit.gupta2022@vitstudent.ac.in" className="text-white hover:text-primary-light transition-colors">
                                        romit.gupta2022@vitstudent.ac.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-xl text-primary-light group-hover:bg-primary/20 transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Phone</p>
                                    <p className="text-white">+91 9831188170</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-xl text-primary-light group-hover:bg-primary/20 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Location</p>
                                    <p className="text-white">Kolkata, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 border-white/5"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message here..."></textarea>
                            </div>
                            <button disabled className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 opacity-80 cursor-not-allowed">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-24 py-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Romit Gupta. Built with React & Tailwind.
                    </p>
                    <div className="flex gap-6">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;

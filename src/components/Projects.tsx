import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, MessageSquare, Car, Accessibility, Cpu as CpuIcon, Lock } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Q-Notary Framework',
            desc: 'Quantum-Resistant Notarization Framework using SPHINCS+ and W3C standards for Verifiable Credentials.',
            icon: <Lock className="text-indigo-400" />,
            tags: ['Cryptography', 'SPHINCS+', 'IPFS', 'W3C'],
        },
        {
            title: 'AI-Powered Medical Chatbot',
            desc: 'Integrated BERT, ChatGPT, and WordNet to provide context-aware, empathetic patient support.',
            icon: <MessageSquare className="text-blue-400" />,
            tags: ['NLP', 'BioBERT', 'LLMs', 'Healthcare'],
        },
        {
            title: 'Pothole Detection System',
            desc: 'Real-time pothole detection system using YOLO, achieving 93% accuracy in diverse conditions.',
            icon: <Car className="text-amber-400" />,
            tags: ['Computer Vision', 'YOLO', 'Python'],
        },
        {
            title: 'Braille Learning Assistant',
            desc: 'Embedded system using servos and Raspberry Pi to improve tactile learning accessibility by 40%.',
            icon: <Accessibility className="text-emerald-400" />,
            tags: ['Embedded Systems', 'IoT', 'Python'],
        },
        {
            title: 'Bank Security System',
            desc: 'Three-tiered RBAC system for secure banking operations with automated transaction handling.',
            icon: <ShieldCheck className="text-rose-400" />,
            tags: ['MySQL', 'Python', 'Security'],
        },
        {
            title: 'Obstacle-Detecting Sling Bag',
            desc: 'Wearable assistive device with ultrasonic sensors for visually impaired mobility safely.',
            icon: <CpuIcon className="text-sky-400" />,
            tags: ['Arduino', 'Sensors', 'Assistive Tech'],
        }
    ];

    return (
        <section id="projects" className="py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-extrabold text-white mb-4">Innovation Spotlight</h2>
                        <p className="text-slate-400 text-lg">
                            A selection of projects where I've tackled complex problems in security, AI, and hardware-software integration.
                        </p>
                    </div>
                    <div className="h-0.5 flex-grow bg-white/5 mx-8 mb-4 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    {project.icon}
                                </div>
                                <button className="text-slate-500 hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </button>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                            <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold tracking-wider uppercase text-primary-light">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

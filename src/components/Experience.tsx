import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Cryptography Research Intern',
            company: 'Indian Statistical Institute (ISI), Kolkata',
            location: 'R.C. Bose Centre for Cryptology & Security',
            period: 'May 2025 — July 2025',
            points: [
                'Successfully completed research internship focused on the practical implementation of SPHINCS+, a NIST-standardized algorithm for Post-Quantum Cryptography (PQC).',
                'Actively engaged in research activities within the R.C. Bose Centre, earning commendation for valuable contributions to the project.',
                'Gained hands-on experience with the principles of stateless, hash-based signature schemes and their application in future-proof security systems.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-16">
                    <Briefcase className="text-primary-light" size={32} />
                    <h2 className="text-4xl font-extrabold text-white">Experience</h2>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary before:to-transparent"
                        >
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(79,70,229,0.8)]"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-primary-light font-semibold text-lg">{exp.company}</p>
                                </div>
                                <div className="flex flex-col md:items-end gap-2 text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span className="text-sm">{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span className="text-sm">{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="text-slate-400 leading-relaxed max-w-4xl">
                                        • {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Additional Roles/Activities */}
                    <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-card p-6 border-white/5">
                            <h4 className="text-white font-bold mb-3">Competitive Programming</h4>
                            <p className="text-slate-400 text-sm">Team Member | Linux Club & Microsoft Innovators Club, VITC</p>
                        </div>
                        <div className="glass-card p-6 border-white/5">
                            <h4 className="text-white font-bold mb-3">Hackathons</h4>
                            <p className="text-slate-400 text-sm">Participated in Smart India Hackathon (2023, 2024)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

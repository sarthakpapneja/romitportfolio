import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target } from 'lucide-react';

const About = () => {
    const education = [
        {
            school: 'Vellore Institute of Technology, Chennai',
            degree: 'B.Tech in Computer Science Engineering',
            period: '2022 — 2026',
            details: 'CGPA: 9.07',
        },
        {
            school: 'La Martiniere for Boys, Kolkata',
            degree: 'ICSE Class X',
            period: '2007-2020',
            details: '98%',
        },
        {
            school: 'Birla High School, Kolkata',
            degree: 'CBSE Class XII',
            period: '2020-2022',
            details: '93.6%',
        }
    ];

    return (
        <section id="about" class="py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Professional Objective */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 text-primary-light">
                            <Target size={24} />
                            <h2 className="text-xl font-bold uppercase tracking-widest">Objective</h2>
                        </div>
                        <p className="text-2xl text-slate-300 leading-relaxed font-outfit">
                            Aspiring software engineer with hands-on experience in AI-driven applications,
                            secure database systems, and post-quantum Cryptographic algorithms.
                            Committed to building impactful solutions and continuously learning in fast-paced,
                            team-oriented environments.
                        </p>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 text-primary-light">
                            <GraduationCap size={24} />
                            <h2 className="text-xl font-bold uppercase tracking-widest">Education</h2>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <div key={idx} className="glass-card p-6 hover:bg-white/5 transition-all">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                                        <span className="text-sm text-primary-light font-medium">{edu.period}</span>
                                    </div>
                                    <p className="text-slate-400 font-medium">{edu.degree}</p>
                                    <p className="text-slate-500 text-sm mt-1">{edu.details}</p>
                                </div>
                            ))}
                            <div className="pl-6 border-l-2 border-primary/20">
                                <p className="text-slate-400 italic">JEE Mains 2022: 95 percentile</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cloud, Cpu, Database } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Programming Languages',
            icon: <Code2 className="text-blue-400" />,
            skills: ['Java', 'Python', 'C', 'C++', 'SQL']
        },
        {
            title: 'Web & Tools',
            icon: <Globe className="text-emerald-400" />,
            skills: ['ReactJS', 'Tailwind CSS', 'HTML', 'CSS', 'Vite']
        },
        {
            title: 'Cloud & Database',
            icon: <Cloud className="text-sky-400" />,
            skills: ['AWS', 'MySQL', 'BERT', 'ChatGPT APIs']
        },
        {
            title: 'Systems & HW',
            icon: <Cpu className="text-purple-400" />,
            skills: ['Raspberry Pi', 'Arduino', 'Post-Quantum Crypto']
        },
        {
            title: 'Core Subjects',
            icon: <Database className="text-rose-400" />,
            skills: ['AI', 'Computer Architecture', 'DBMS', 'OS', 'Compiler Design']
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white mb-4">Technical Expertise</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="glass-card p-8 border-white/5 hover:border-primary/20 group transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 text-slate-400 rounded-md text-sm border border-white/5 hover:border-primary/30 hover:text-primary-light transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

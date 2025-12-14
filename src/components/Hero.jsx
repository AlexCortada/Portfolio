import React from 'react';
import { Mail, Phone, MapPin, Download, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ data }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {data.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">{data.title}</h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {data.summary}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-primary transition">
              <Mail size={20} /> {data.email}
            </a>
            <a href={`tel:${data.phone.replace(/\./g, '')}`} className="flex items-center gap-2 hover:text-primary transition">
              <Phone size={20} /> {data.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={20} /> {data.location}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg">
              <Github size={20} /> GitHub
            </a>
            <a href="/resume.pdf" download 
               className="flex items-center gap-2 bg-primary hover:bg-blue-700 px-6 py-3 rounded-lg">
              <Download size={20} /> Download Resume
            </a>
          </div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16"
          >
            <div className="text-gray-500">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full mx-auto mt-2">
              <div className="w-1 h-3 bg-gray-500 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
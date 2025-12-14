import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact({ data }) {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Interested in discussing infrastructure, cloud solutions, or potential opportunities? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a href={`mailto:${data.email}`} className="group">
              <div className="bg-card p-6 rounded-xl border border-gray-700 hover:border-primary transition group-hover:scale-105">
                <Mail className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400 group-hover:text-white">{data.email}</p>
              </div>
            </a>
            
            <a href={`tel:${data.phone.replace(/\./g, '')}`} className="group">
              <div className="bg-card p-6 rounded-xl border border-gray-700 hover:border-primary transition group-hover:scale-105">
                <Phone className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-400 group-hover:text-white">{data.phone}</p>
              </div>
            </a>
            
            <div className="group">
              <div className="bg-card p-6 rounded-xl border border-gray-700 hover:border-primary transition group-hover:scale-105">
                <MapPin className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-400 group-hover:text-white">{data.location}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
            >
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
            
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg"
            >
              <Github size={20} /> View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
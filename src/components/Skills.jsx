import React from 'react';
import { Cloud, Shield, Server, Network, Monitor, Cpu, Key, Terminal, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const skillIcons = {
  cloud: <Cloud className="text-blue-400" />,
  iam: <Key className="text-green-400" />,
  os: <Server className="text-purple-400" />,
  networking: <Network className="text-red-400" />,
  monitoring: <Monitor className="text-yellow-400" />,
  virtualization: <Cpu className="text-pink-400" />,
  endpoint: <Zap className="text-orange-400" />,
  security: <Shield className="text-cyan-400" />,
  scripting: <Terminal className="text-indigo-400" />
};

const skillTitles = {
  cloud: "Cloud Platforms",
  iam: "Identity & Access Management",
  os: "Operating Systems",
  networking: "Networking",
  monitoring: "Monitoring & ITSM",
  virtualization: "Virtualization",
  endpoint: "Endpoint & Systems Management",
  security: "Security Tools",
  scripting: "Scripting & Automation"
};

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {skillIcons[category]}
                  </div>
                  <h3 className="text-xl font-semibold">{skillTitles[category]}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-primary hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
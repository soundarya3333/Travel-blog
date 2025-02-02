import React from 'react';
import { Experience as ExperienceType } from '../types';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8">
              <div className="absolute left-0 top-0 h-full w-px bg-blue-600"></div>
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                </div>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience
import React from 'react';
import { Education as EducationType } from '../types';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
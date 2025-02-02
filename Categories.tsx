import React from 'react';
import { Hash } from 'lucide-react';

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
          >
            <Hash className="w-4 h-4 mr-2 text-blue-600" />
            <span>{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
import React from 'react';
import { Instagram } from 'lucide-react';
import { Profile } from '../types';

interface HeaderProps {
  profile: Profile;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            alt={profile.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{profile.title}</h2>
          <p className="max-w-2xl text-gray-600 mb-6">{profile.bio}</p>
          <div className="flex space-x-4">
            {profile.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { Search, Users, TrendingUp, Filter } from 'lucide-react';
import { mockClubs } from '../data/mockData';
import { useState } from 'react';

export default function ClubsPage() {
const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Technology', 'Arts', 'Business', 'Academic', 'Social', 'Sports'];

  const filteredClubs = selectedCategory === 'all'
    ? mockClubs
    : mockClubs.filter(club => club.category === selectedCategory);

  return (
    <div className="bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-lg mb-6">
        <h1 className="text-3xl font-bold mb-2">Discover Clubs & Societies</h1>
        <p className="text-blue-50 text-lg">
          Find your community and connect with like-minded students across universities
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search clubs by name, category, or university..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Filters</span>
          </button>
        </div>

        <div className="flex items-center space-x-2 mt-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
}

function ClubCard({ club }) {
  const [isJoined, setIsJoined] = useState(club.isJoined);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={club.image}
          alt={club.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-semibold text-gray-700 rounded-full">
            {club.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{club.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">{club.memberCount} members</span>
          </div>
          <span className="text-xs text-gray-500">{club.university}</span>
        </div>
        <button
          onClick={() => setIsJoined(!isJoined)}
          className={`w-full py-2 rounded-lg font-semibold transition-colors ${
            isJoined
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isJoined ? 'Joined' : 'Join Club'}
        </button>
      </div>
    </div>
  );
}

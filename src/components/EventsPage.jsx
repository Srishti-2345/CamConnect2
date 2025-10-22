import { Calendar, MapPin, Users, Clock, Search, Filter } from 'lucide-react';
import { mockEvents } from '../data/mockData';
import { useState } from 'react';

export default function EventsPage() {
const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Technology', 'Cultural', 'Business', 'Arts', 'Wellness', 'Sports'];

  const filteredEvents = selectedCategory === 'all'
    ? mockEvents
    : mockEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg mb-6">
        <h1 className="text-3xl font-bold mb-2">Campus Events</h1>
        <p className="text-green-50 text-lg">
          Never miss out on exciting events happening across universities
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by title, organizer, or location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Events' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }) {
  const [isAttending, setIsAttending] = useState(event.isAttending);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row">
        <div className="relative sm:w-48 h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full">
              {event.category}
            </span>
          </div>
        </div>
        <div className="flex-1 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{event.date}</span>
              <Clock className="w-4 h-4 ml-2" />
              <span className="text-sm">{event.time}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{event.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">{event.attendees} attending</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{event.organizer}</span>
            <button
              onClick={() => setIsAttending(!isAttending)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                isAttending
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isAttending ? 'Attending' : 'Attend'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

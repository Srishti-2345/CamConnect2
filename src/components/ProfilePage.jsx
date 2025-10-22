import { MapPin, Calendar, Mail, Edit2, Users, CalendarCheck, Award } from 'lucide-react';
import { currentUser, mockClubs, mockEvents } from '../data/mockData';

export default function ProfilePage() {
  const joinedClubs = mockClubs.filter((club) => club.isJoined);
  const attendingEvents = mockEvents.filter((event) => event.isAttending);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative">
          <button className="absolute top-4 right-4 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
            <Edit2 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
              />
              <div className="mt-4 md:mt-0 md:mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{currentUser.name}</h1>
                <p className="text-lg text-gray-600 mt-1">
                  {currentUser.major} • {currentUser.year}
                </p>
              </div>
            </div>

            <div className="flex space-x-3 mt-4 md:mt-0 md:mb-2">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Share Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>{currentUser.university}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>{currentUser.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Joined September 2023</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">About</h3>
            <p className="text-gray-700 leading-relaxed">{currentUser.bio}</p>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {currentUser.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-gray-900">156</h3>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-gray-600">Connections</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{joinedClubs.length}</h3>
            <Award className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-gray-600">Clubs Joined</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{attendingEvents.length}</h3>
            <CalendarCheck className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-gray-600">Events Attending</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">My Clubs</h3>
          <div className="space-y-4">
            {joinedClubs.map((club) => (
              <div key={club.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate">{club.name}</h4>
                  <p className="text-sm text-gray-600">{club.memberCount} members</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {attendingEvents.map((event) => (
              <div key={event.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

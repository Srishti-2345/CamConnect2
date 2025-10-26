import { UserPlus, Search, Check, X, MessageCircle } from 'lucide-react';
import { mockUsers, mockConnections } from '../data/mockData';
import { useState } from 'react';

export default function ConnectionsPage() {
const [activeTab, setActiveTab] = useState('discover');

  return (
    <div className="bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-lg mb-6">
        <h1 className="text-3xl font-bold mb-2">Build Your Network</h1>
        <p className="text-blue-50 text-lg">
          Connect with students across universities and expand your professional circle
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('discover')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'discover'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Discover People
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors relative ${
              activeTab === 'requests'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Connection Requests
            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button
            onClick={() => setActiveTab('connections')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'connections'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            My Connections
          </button>
        </div>
      </div>

      {activeTab === 'discover' && (
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, university, or major..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockUsers.map((user) => (
              <UserCard key={user.id} user={user} showConnectButton />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'requests' && (
        <div className="space-y-4">
          {mockConnections
            .filter((conn) => conn.status === 'pending')
            .map((connection) => (
              <ConnectionRequestCard key={connection.id} connection={connection} />
            ))}
          {mockConnections.filter((conn) => conn.status === 'pending').length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <UserPlus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No pending requests</h3>
              <p className="text-gray-600">
                You're all caught up! Check back later for new connection requests.
              </p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'connections' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUsers.slice(0, 6).map((user) => (
            <UserCard key={user.id} user={user} showMessageButton />
          ))}
        </div>
      )}
    </div>
  );
}

function UserCard({
  user,
  showConnectButton,
  showMessageButton,
}) {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="h-24 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
      <div className="px-6 pb-6">
        <div className="flex justify-center -mt-12 mb-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.major}</p>
          <p className="text-xs text-gray-500">{user.university}</p>
        </div>
        <p className="text-sm text-gray-600 text-center mb-4 line-clamp-2">{user.bio}</p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {user.interests.slice(0, 3).map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
        {showConnectButton && (
          <button
            onClick={() => setIsConnected(!isConnected)}
            className={`w-full py-2 rounded-lg font-semibold transition-colors ${
              isConnected
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isConnected ? 'Request Sent' : 'Connect'}
          </button>
        )}
        {showMessageButton && (
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Message</span>
          </button>
        )}
      </div>
    </div>
  );
}

function ConnectionRequestCard({ connection }) {
const [status, setStatus] = useState(connection.status);

  if (status !== 'pending') return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-4">
        <img
          src={connection.user.avatar}
          alt={connection.user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-bold text-gray-900">{connection.user.name}</h3>
          <p className="text-sm text-gray-600">{connection.user.major}</p>
          <p className="text-xs text-gray-500">{connection.user.university}</p>
          <p className="text-xs text-gray-500 mt-1">{connection.timestamp}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setStatus('accepted')}
            className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => setStatus('rejected')}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

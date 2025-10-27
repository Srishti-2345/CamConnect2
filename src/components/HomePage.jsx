import { Heart, MessageCircle, Share2, TrendingUp, Sparkles } from 'lucide-react';
import { mockPosts, mockEvents } from '../data/mockData';


export default function HomePage({ onNavigate }) {
  return (
    <div className="bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Welcome to ConnectED</h2>
            </div>
            <p className="text-blue-50 text-lg mb-6">
              The digital bridge that redefines campus life. Discover clubs, attend events, and build lasting connections across universities.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('clubs')}
                className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Clubs
              </button>
              <button
                onClick={() => onNavigate('events')}
                className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Browse Events
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <textarea
              placeholder="Share your thoughts with the community..."
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <button className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Image
                </button>
                <button className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Poll
                </button>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Post
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Trending Events</h3>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-4">
              {mockEvents.slice(0, 3).map((event) => (
                <EventCard key={event.id} event={event} onNavigate={onNavigate} />
              ))}
            </div>
            <button
              onClick={() => onNavigate('events')}
              className="w-full mt-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors"
            >
              View All Events
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Connections</span>
                <span className="text-2xl font-bold text-blue-600">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Clubs Joined</span>
                <span className="text-2xl font-bold text-cyan-600">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Events Attended</span>
                <span className="text-2xl font-bold text-green-600">23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
              <p className="text-sm text-gray-500">
                {post.author.major} • {post.author.university}
              </p>
            </div>
            <span className="text-sm text-gray-500">{post.timestamp}</span>
          </div>
          <p className="text-gray-700 mb-4">{post.content}</p>
          {post.images.length > 0 && (
            <img
              src={post.images[0]}
              alt="Post"
              className="w-full rounded-lg mb-4 object-cover max-h-96"
            />
          )}
          <div className="flex items-center space-x-6 text-gray-600">
            <button className={`flex items-center space-x-2 hover:text-red-500 transition-colors ${post.isLiked ? 'text-red-500' : ''}`}>
              <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event, onNavigate }) {
  return (
    <div
      onClick={() => onNavigate('events')}
      className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-sm truncate">{event.title}</h4>
        <p className="text-xs text-gray-500 mt-1">{event.date}</p>
        <p className="text-xs text-blue-600 mt-1">{event.attendees} attending</p>
      </div>
    </div>
  );
}

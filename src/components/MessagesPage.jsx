import { Search, Send, MoreVertical, Phone, Video } from 'lucide-react';
import { mockUsers } from '../data/mockData';
import { useState } from 'react';

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);
  const [messageText, setMessageText] = useState('');

  const mockConversations = [
    {
      user: mockUsers[0],
      lastMessage: 'Hey! Are you joining the hackathon next week?',
      time: '2m ago',
      unread: 2,
    },
    {
      user: mockUsers[1],
      lastMessage: 'Thanks for the collaboration opportunity!',
      time: '1h ago',
      unread: 0,
    },
    {
      user: mockUsers[2],
      lastMessage: 'See you at the event tomorrow!',
      time: '3h ago',
      unread: 0,
    },
  ];

  const mockMessages = [
    {
      id: '1',
      senderId: mockUsers[0].id,
      content: 'Hey! Are you joining the hackathon next week?',
      timestamp: '10:30 AM',
      isOwn: false,
    },
    {
      id: '2',
      senderId: '1',
      content: 'Yes, definitely! I was thinking about building an AI project.',
      timestamp: '10:32 AM',
      isOwn: true,
    },
    {
      id: '3',
      senderId: mockUsers[0].id,
      content: 'That sounds amazing! Would you like to team up?',
      timestamp: '10:33 AM',
      isOwn: false,
    },
    {
      id: '4',
      senderId: '1',
      content: 'I would love to! Let me know what ideas you have in mind.',
      timestamp: '10:35 AM',
      isOwn: true,
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="flex h-full">
          <div className="w-full md:w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {mockConversations.map((conversation) => (
                <button
                  key={conversation.user.id}
                  onClick={() => setSelectedUser(conversation.user)}
                  className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                    selectedUser.id === conversation.user.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="relative">
                    <img
                      src={conversation.user.avatar}
                      alt={conversation.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm truncate">
                        {conversation.user.name}
                      </h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                      {conversation.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-1 flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedUser.name}</h3>
                  <p className="text-xs text-gray-500">{selectedUser.university}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {mockMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end space-x-2 max-w-md ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {!message.isOwn && (
                      <img
                        src={selectedUser.avatar}
                        alt={selectedUser.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div
                        className={`px-4 py-2 rounded-2xl ${
                          message.isOwn
                            ? 'bg-blue-600 text-white rounded-br-sm'
                            : 'bg-white text-gray-900 rounded-bl-sm'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <span className={`text-xs text-gray-500 mt-1 block ${message.isOwn ? 'text-right' : 'text-left'}`}>
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

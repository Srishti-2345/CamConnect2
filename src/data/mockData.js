
export const currentUser = {
  id: '1',
  name: 'Mitchell Starc',
  email: 'alex.johnson@university.edu',
  university: 'Tech University',
  major: 'Computer Science',
  year: 'Junior',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  bio: 'Passionate about AI and web development. Always looking to collaborate on innovative projects!',
  interests: ['AI', 'Web Development', 'Photography', 'Hiking']
};

export const mockUsers = [
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah.chen@university.edu',
    university: 'Tech University',
    major: 'Data Science',
    year: 'Senior',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    bio: 'Data enthusiast exploring machine learning',
    interests: ['Data Science', 'ML', 'Statistics']
  },
  {
    id: '3',
    name: 'Michael Jordan',
    email: 'michael.r@university.edu',
    university: 'State University',
    major: 'Business Administration',
    year: 'Sophomore',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    bio: 'Aspiring entrepreneur and startup enthusiast',
    interests: ['Entrepreneurship', 'Marketing', 'Finance']
  },
  {
    id: '4',
    name: 'John Williams',
    email: 'emily.w@university.edu',
    university: 'Tech University',
    major: 'Psychology',
    year: 'Junior',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    bio: 'Mental health advocate and research assistant',
    interests: ['Psychology', 'Research', 'Counseling']
  }
];

export const mockClubs = [
  {
    id: '1',
    name: 'AI & Machine Learning Club',
    description: 'Exploring the future of artificial intelligence through workshops, projects, and guest lectures.',
    category: 'Technology',
    university: 'Tech University',
    memberCount: 234,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    isJoined: true
  },
  {
    id: '2',
    name: 'Photography Society',
    description: 'Capturing moments and learning the art of visual storytelling together.',
    category: 'Arts',
    university: 'Tech University',
    memberCount: 189,
    image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=400',
    isJoined: false
  },
  {
    id: '3',
    name: 'Entrepreneurship Hub',
    description: 'Building the next generation of innovators and startup founders.',
    category: 'Business',
    university: 'State University',
    memberCount: 312,
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
    isJoined: true
  },
  {
    id: '4',
    name: 'Debate Club',
    description: 'Developing critical thinking and public speaking skills through competitive debates.',
    category: 'Academic',
    university: 'Tech University',
    memberCount: 156,
    image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=400',
    isJoined: false
  },
  {
    id: '5',
    name: 'Environmental Action',
    description: 'Working together for a sustainable future on campus and beyond.',
    category: 'Social',
    university: 'State University',
    memberCount: 278,
    image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400',
    isJoined: false
  },
  {
    id: '6',
    name: 'Music Production Club',
    description: 'Creating beats, mixing tracks, and exploring the world of digital music.',
    category: 'Arts',
    university: 'Tech University',
    memberCount: 145,
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    isJoined: false
  }
];

export const mockEvents = [
  {
    id: '1',
    title: 'Open Source Chandigarh',
    description: 'Join industry leaders and innovators for a day of inspiring talks and networking.',
    date: '2024-11-15',
    time: '09:00 AM',
    location: 'Grand Auditorium, Tech University',
    university: 'Tech University',
    organizer: 'AI & Machine Learning Club',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
    attendees: 342,
    isAttending: true
  },
  {
    id: '2',
    title: 'VibinZ',
    description: 'Experience cultures from around the world through food, music, and performances.',
    date: '2024-11-08',
    time: '06:00 PM',
    location: 'Student Center Plaza',
    university: 'State University',
    organizer: 'International Students Association',
    category: 'Cultural',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
    attendees: 567,
    isAttending: false
  },
  {
    id: '3',
    title: 'CEED',
    description: 'Watch student entrepreneurs pitch their innovative ideas to real investors.',
    date: '2024-11-20',
    time: '02:00 PM',
    location: 'Business School Auditorium',
    university: 'State University',
    organizer: 'Entrepreneurship Hub',
    category: 'Business',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
    attendees: 234,
    isAttending: true
  },
  {
    id: '4',
    title: 'C2S2 Reflection',
    description: 'View stunning photographs capturing the essence of student life.',
    date: '2024-11-12',
    time: '04:00 PM',
    location: 'Art Gallery, Main Building',
    university: 'Tech University',
    organizer: 'Photography Society',
    category: 'Arts',
    image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
    attendees: 189,
    isAttending: false
  },
  {
    id: '5',
    title: 'Chitkara Happiness Centre',
    description: 'Learn about stress management and mental wellness strategies for students.',
    date: '2024-11-18',
    time: '01:00 PM',
    location: 'Wellness Center',
    university: 'Tech University',
    organizer: 'Psychology Department',
    category: 'Wellness',
    image: 'https://images.pexels.com/photos/3759089/pexels-photo-3759089.jpeg?auto=compress&cs=tinysrgb&w=400',
    attendees: 156,
    isAttending: false
  },
  {
    id: '6',
    title: 'Design Thinking Society',
    description: '48-hour coding marathon to build solutions for social impact.',
    date: '2024-11-25',
    time: '10:00 AM',
    location: 'Computer Science Building',
    university: 'Tech University',
    organizer: 'CS Student Association',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    attendees: 412,
    isAttending: true
  }
];

export const mockPosts = [
  {
    id: '1',
    author: mockUsers[0],
    content: 'Just finished an amazing workshop on neural networks! The possibilities with deep learning are truly endless. Looking forward to applying these concepts in my next project. Who else is excited about AI? 🚀',
    images: ['https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'],
    timestamp: '2 hours ago',
    likes: 45,
    comments: 12,
    isLiked: true
  },
  {
    id: '2',
    author: mockUsers[1],
    content: 'Had a great time at the Startup Pitch Competition today! So many innovative ideas from talented students. The future of entrepreneurship is bright!',
    images: [],
    timestamp: '5 hours ago',
    likes: 67,
    comments: 8,
    isLiked: false
  },
  {
    id: '3',
    author: mockUsers[2],
    content: 'Looking for team members for a mental health app project! We need developers and designers who are passionate about making a difference. DM me if interested!',
    images: [],
    timestamp: '1 day ago',
    likes: 89,
    comments: 23,
    isLiked: true
  }
];

export const mockConnections = [
  {
    id: '1',
    user: mockUsers[0],
    status: 'pending',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    user: mockUsers[1],
    status: 'accepted',
    timestamp: '1 day ago'
  }
];
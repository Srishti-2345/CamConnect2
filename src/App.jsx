import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ClubsPage from './components/ClubsPage';
import EventsPage from './components/EventsPage';
import ConnectionsPage from './components/ConnectionsPage';
import MessagesPage from './components/MessagesPage';
import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'clubs':
        return <ClubsPage />;
      case 'events':
        return <EventsPage />;
      case 'connections':
        return <ConnectionsPage />;
      case 'messages':
        return <MessagesPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;

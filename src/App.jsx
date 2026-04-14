import { Suspense } from 'react';
import UserCardGallery from './components/UserCardGallery';
import './App.css';

function App() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>User Card Gallery</h1>
      <Suspense fallback={<p>Loading users...</p>}>
        <UserCardGallery />
      </Suspense>
    </main>
  );
}

export default App;

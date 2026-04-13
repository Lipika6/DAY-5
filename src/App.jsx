import { useState } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Feedback App</h1>

      <section style={{ marginTop: '2rem' }}>
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackList feedbacks={feedbacks} />
      </section>
    </main>
  );
}

export default App;

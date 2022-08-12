import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import data from './data/data'
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(data)

  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;

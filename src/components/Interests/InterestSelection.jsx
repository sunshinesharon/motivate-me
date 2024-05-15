import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './InterestSelection.scss';

const InterestSelection = () => {
  const interests = useMemo(() => ['Programming', 'Parenting', 'Teaching', 'Marketer', 'Advertiser', 'Artist', 'Fitness'], []);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    if (selectedInterests.length >= 1) {
      navigate('/quote', { state: { interests: selectedInterests } });
    } else {
      alert('Please select at least 1 interest.');
    }
  };

  return (
    <div className="interests">
      
      <h1>Fuel Your Drive: Choose Inspiration!</h1>
      <p>Select 1 or more interests:</p>
      <div className="interest-buttons">
        {interests.map(interest => (
          <button
            key={interest}
            className={`interest-button ${selectedInterests.includes(interest) ? 'selected' : ''}`}
            onClick={() => handleSelect(interest)}
          >
            {interest}
          </button>
        ))}
      </div>
      <button className="done-button" onClick={handleSubmit}>Let's Get Inspired!</button>
    </div>
  );
};

export default InterestSelection;

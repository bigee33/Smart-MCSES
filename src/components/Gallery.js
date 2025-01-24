import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  // Define event data with event details
  const events = [
    {
      name: 'Annual Sports Day',
      date: '10th March 2025',
      description: 'A day full of sports and enthusiasm, showcasing talent and teamwork.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'Cultural Fest',
      date: '25th April 2025',
      description: 'An evening of cultural performances, food, and celebration of diversity.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'Science Exhibition',
      date: '15th June 2025',
      description: 'Showcasing innovative projects and experiments from talented students.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'Art & Craft Exhibition',
      date: '5th July 2025',
      description: 'A creative exhibition featuring artwork, crafts, and student creations.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'Annual Day Celebration',
      date: '12th August 2025',
      description: 'A grand evening celebrating the achievements of students and faculty.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'Teacher’s Day',
      date: '5th September 2025',
      description: 'A special day to honor and appreciate our dedicated teachers.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'Literary Festival',
      date: '20th September 2025',
      description: 'A festival to showcase literary talents including writing, poetry, and speech.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'Earth Day Celebration',
      date: '22nd April 2025',
      description: 'A celebration to raise awareness about environmental issues.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'Math Olympiad',
      date: '18th May 2025',
      description: 'A competition to challenge and celebrate students’ mathematical skills.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
    {
      name: 'School Picnic',
      date: '30th November 2025',
      description: 'A fun-filled day out with students and teachers, enjoying nature and bonding.',
      images: [
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
        'https://i.pinimg.com/736x/20/55/c2/2055c23942fe9428bf19fa02bd8c9748.jpg',
      ],
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event

  return (
    <div className="gallery">
      <h2 className="gallery-title">Event Galleries</h2>

      {!selectedEvent ? (
        // Display event details when no event is selected
        <div className="event-container">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
              <button
                className="view-photos-button"
                onClick={() => setSelectedEvent(event)}
              >
                View Photos
              </button>
            </div>
          ))}
        </div>
      ) : (
        // Display photos for the selected event
        <div className="event-gallery">
          <h3>{selectedEvent.name}</h3>
          <p><strong>Date:</strong> {selectedEvent.date}</p>
          <p>{selectedEvent.description}</p>
          <div className="gallery-images">
            {selectedEvent.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedEvent.name} ${index + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
          <button
            className="back-button"
            onClick={() => setSelectedEvent(null)}
          >
            Back to Events
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const events = [
    {
      name: "Annual Sports Day",
      date: "10th March 2025",
      description:
        "A day full of sports and enthusiasm, showcasing talent and teamwork.",
      images: [
        "/images/Slide1.jpg",
        "/images/Slide2.jpg",
        "/images/Slide3.jpg",
      ],
    },
    {
      name: "Cultural Fest",
      date: "25th April 2025",
      description:
        "An evening of cultural performances, food, and celebration of diversity.",
      images: [
        "https://via.placeholder.com/400x300?text=Cultural+1",
        "https://via.placeholder.com/400x300?text=Cultural+2",
        "https://via.placeholder.com/400x300?text=Cultural+3",
      ],
    },
    {
      name: "Science Exhibition",
      date: "15th June 2025",
      description:
        "Showcasing innovative projects and experiments from talented students.",
      images: [
        "https://via.placeholder.com/400x300?text=Science+1",
        "https://via.placeholder.com/400x300?text=Science+2",
        "https://via.placeholder.com/400x300?text=Science+3",
      ],
    },
    {
      name: "Annual Day Celebration",
      date: "12th August 2025",
      description:
        "A grand evening celebrating the achievements of students and faculty.",
      images: [
        "https://via.placeholder.com/400x300?text=Annual+Day+1",
        "https://via.placeholder.com/400x300?text=Annual+Day+2",
        "https://via.placeholder.com/400x300?text=Annual+Day+3",
      ],
    },
    {
      name: "Art & Craft Exhibition",
      date: "5th July 2025",
      description:
        "A creative exhibition featuring artwork, crafts, and student creations.",
      images: [
        "https://via.placeholder.com/400x300?text=Art+1",
        "https://via.placeholder.com/400x300?text=Art+2",
        "https://via.placeholder.com/400x300?text=Art+3",
      ],
    },
    {
      name: "Literary Festival",
      date: "20th September 2025",
      description:
        "A festival to showcase literary talents including writing, poetry, and speech.",
      images: [
        "https://via.placeholder.com/400x300?text=Literary+1",
        "https://via.placeholder.com/400x300?text=Literary+2",
        "https://via.placeholder.com/400x300?text=Literary+3",
      ],
    },
    {
      name: "School Picnic",
      date: "30th November 2025",
      description:
        "A fun-filled day out with students and teachers, enjoying nature and bonding.",
      images: [
        "https://via.placeholder.com/400x300?text=Picnic+1",
        "https://via.placeholder.com/400x300?text=Picnic+2",
        "https://via.placeholder.com/400x300?text=Picnic+3",
      ],
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const showNext = () =>
    setModalIndex((modalIndex + 1) % selectedEvent.images.length);
  const showPrev = () =>
    setModalIndex(
      (modalIndex - 1 + selectedEvent.images.length) %
        selectedEvent.images.length
    );

  return (
    <div className="gallery">
      <h2 className="gallery-title">Event Galleries</h2>

      {!selectedEvent ? (
        <div className="event-container">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.name}</h3>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
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
        <div className="event-gallery">
          <h3>{selectedEvent.name}</h3>
          <p>
            <strong>Date:</strong> {selectedEvent.date}
          </p>
          <p>{selectedEvent.description}</p>

          <div className="gallery-images">
            {selectedEvent.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedEvent.name} ${index + 1}`}
                className="gallery-image"
                onClick={() => openModal(index)}
              />
            ))}
          </div>

          <button
            className="back-button"
            onClick={() => setSelectedEvent(null)}
          >
            Back to Events
          </button>

          {modalIndex !== null && (
            <div className="modal" onClick={closeModal}>
              <span className="close">&times;</span>
              <img
                src={selectedEvent.images[modalIndex]}
                alt="Full View"
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="prev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
              >
                &#10094;
              </button>
              <button
                className="next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
              >
                &#10095;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;

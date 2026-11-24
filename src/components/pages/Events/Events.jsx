import { useState } from "react";
import { CalendarDays, MapPin, Clock, Search, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";
import styles from "./Events.module.css";

// Sample events for frontend development
const eventsData = [
  {
    id: 1,
    title: "Technology Innovation Workshop",
    category: "Technology",
    date: "2026-12-10",
    time: "09:00 AM",
    location: "Computer Science Laboratory",
    description:
      "An interactive workshop where students explore programming, software development, and technology innovation.",
  },
  {
    id: 2,
    title: "Environmental Awareness Campaign",
    category: "Community",
    date: "2026-12-15",
    time: "08:30 AM",
    location: "University Campus",
    description:
      "A student-led campaign promoting environmental awareness and campus cleanliness.",
  },
  {
    id: 3,
    title: "University Football Competition",
    category: "Sports",
    date: "2026-12-20",
    time: "02:00 PM",
    location: "University Football Field",
    description:
      "An exciting football competition bringing together students from different departments.",
  },
  {
    id: 4,
    title: "Student Leadership Seminar",
    category: "Education",
    date: "2027-01-05",
    time: "10:00 AM",
    location: "University Conference Hall",
    description:
      "A seminar focused on leadership, teamwork, communication, and student development.",
  },
  {
    id: 5,
    title: "Community Volunteer Program",
    category: "Community",
    date: "2027-01-12",
    time: "08:00 AM",
    location: "Borana Community Area",
    description:
      "An opportunity for students to participate in community service and volunteer activities.",
  },
  {
    id: 6,
    title: "Programming Competition",
    category: "Technology",
    date: "2027-01-20",
    time: "09:00 AM",
    location: "Computer Laboratory",
    description:
      "Students demonstrate their programming skills by solving practical coding challenges.",
  },
];

function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter events by search and category
  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Format event date
  const formatDate = (date) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className={styles.eventsPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <span>Discover What's Happening</span>

        <h1>University Events</h1>

        <p>
          Explore upcoming events, workshops, competitions, and activities
          happening at Borana University.
        </p>
      </div>

      {/* Search and Filter */}
      <div className={styles.filterSection}>
        <div className={styles.searchBox}>
          <Search size={20} />

          <input
            type="text"
            placeholder="Search events by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Education">Education</option>
          <option value="Community">Community</option>
        </select>
      </div>

      {/* Events List */}
      <div className={styles.eventsContainer}>
        <div className={styles.sectionHeading}>
          <h2>Upcoming Events</h2>
          <span>{filteredEvents.length} Events Found</span>
        </div>

        <div className={styles.eventsGrid}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div className={styles.eventCard} key={event.id}>
                <div className={styles.eventTop}>
                  <span className={styles.eventCategory}>{event.category}</span>

                  <CalendarDays size={25} />
                </div>

                <h3>{event.title}</h3>

                <p className={styles.eventDescription}>{event.description}</p>

                <div className={styles.eventDetails}>
                  <div>
                    <CalendarDays size={17} />
                    <span>{formatDate(event.date)}</span>
                  </div>

                  <div>
                    <Clock size={17} />
                    <span>{event.time}</span>
                  </div>

                  <div>
                    <MapPin size={17} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link to="/login" className={styles.registerButton}>
                  Register for Event <ArrowRight size={17} />
                </Link>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <h3>No events found</h3>
              <p>Try another search or select a different category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Events;

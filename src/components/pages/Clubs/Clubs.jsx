import { Users, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Clubs.module.css";

// Sample club data.
// We will replace this with real university information later.
const clubsData = [
  {
    id: 1,
    name: "Computer Science Club",
    category: "Technology",
    description:
      "A community for students interested in programming, software development, AI, and technology.",
    members: 45,
  },
  {
    id: 2,
    name: "Environmental Protection Club",
    category: "Environment",
    description:
      "Promotes environmental awareness, cleanliness, and conservation activities.",
    members: 35,
  },
  {
    id: 3,
    name: "Debate and Literature Club",
    category: "Education",
    description:
      "Encourages public speaking, critical thinking, reading, and communication skills.",
    members: 30,
  },
  {
    id: 4,
    name: "Sports Club",
    category: "Sports",
    description:
      "Brings students together through sports, fitness, teamwork, and competitions.",
    members: 60,
  },
  {
    id: 5,
    name: "Community Service Club",
    category: "Community",
    description:
      "Organizes activities that support communities and encourage student volunteering.",
    members: 40,
  },
  {
    id: 6,
    name: "Women in Technology Club",
    category: "Technology",
    description:
      "Encourages students to develop technology skills and participate in innovation.",
    members: 25,
  },
];

function Clubs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClubs = clubsData.filter(
    (club) =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className={styles.clubsPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <span>Discover Your Community</span>

        <h1>Explore Student Clubs</h1>

        <p>
          Find communities that match your interests, develop new skills, and
          connect with other students at Borana University.
        </p>
      </div>

      {/* Search Section */}
      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <Search size={20} />

          <input
            type="text"
            placeholder="Search clubs by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Clubs List */}
      <div className={styles.clubsContainer}>
        <div className={styles.sectionHeading}>
          <h2>Available Clubs</h2>
          <span>{filteredClubs.length} Clubs</span>
        </div>

        <div className={styles.clubsGrid}>
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club) => (
              <div className={styles.clubCard} key={club.id}>
                <div className={styles.clubIcon}>
                  <Users size={32} />
                </div>

                <span className={styles.category}>{club.category}</span>

                <h3>{club.name}</h3>

                <p>{club.description}</p>

                <div className={styles.clubFooter}>
                  <span>
                    <Users size={16} />
                    {club.members} Members
                  </span>

                  <Link to="/login" className={styles.viewButton}>
                    Join Club <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <h3>No clubs found</h3>
              <p>Try searching with another club name or category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Clubs;

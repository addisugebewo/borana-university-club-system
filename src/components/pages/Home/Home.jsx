import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Users } from "lucide-react";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Welcome to Borana University</span>

          <h1>
            Connect, Participate &<span> Make an Impact</span>
          </h1>

          <p>
            Discover student clubs, participate in exciting university events,
            and connect with other students through one platform.
          </p>

          {/* Hero Buttons */}
          <div className={styles.heroButtons}>
            <Link to="/clubs" className={styles.primaryButton}>
              Explore Clubs <ArrowRight size={18} />
            </Link>

            <Link to="/events" className={styles.secondaryButton}>
              <CalendarDays size={18} />
              Explore Events
            </Link>
          </div>

          {/* Small Information */}
          <div className={styles.heroInfo}>
            <div>
              <Users size={20} />
              <span>Student Community</span>
            </div>

            <div>
              <CalendarDays size={20} />
              <span>University Events</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.visualCard}>
            <Users size={55} />
            <h2>Student Clubs</h2>
            <p>Discover and join communities that match your interests.</p>
          </div>

          <div className={styles.visualCard}>
            <CalendarDays size={55} />
            <h2>University Events</h2>
            <p>Stay informed and participate in university activities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

import React from "react";
import { FaUserCircle, FaEdit, FaSignOutAlt, FaClock, FaStar } from "react-icons/fa";

export default function Profile() {
  const user = {
    name: "Jane Doe",
    profilePhoto: "https://via.placeholder.com/100",
    skillsOffered: ["React", "Photoshop", "Public Speaking"],
    skillsWanted: ["Python", "UX Design"],
    availability: "Weekends, Evenings",
    rating: 4.8,
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(to right, #f0f4ff, #e7ecff)",
      padding: "2rem 1rem",
      fontFamily: "Segoe UI, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#1e3a8a",
    },
    logoutBtn: {
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
      color: "#dc2626",
      fontWeight: "500",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
    },
    card: {
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    },
    profileHeader: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      marginBottom: "1.5rem",
    },
    avatar: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "3px solid #3b82f6",
    },
    name: {
      fontSize: "1.75rem",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "0.4rem",
    },
    subText: {
      fontSize: "0.95rem",
      color: "#475569",
      margin: "0.25rem 0",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    section: {
      marginBottom: "1.5rem",
    },
    sectionTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "#1e293b",
      marginBottom: "0.75rem",
    },
    tagContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
    },
    tag: {
      backgroundColor: "#e0f2fe",
      color: "#0369a1",
      padding: "0.4rem 0.75rem",
      fontSize: "0.875rem",
      borderRadius: "9999px",
      fontWeight: "500",
    },
    editBtn: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.6rem 1.2rem",
      fontSize: "1rem",
      fontWeight: "600",
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>SkillNet</h1>
        <button style={styles.logoutBtn}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Profile Card */}
      <div style={styles.card}>
        <div style={styles.profileHeader}>
          <img src={user.profilePhoto} alt="Profile" style={styles.avatar} />
          <div>
            <h2 style={styles.name}>
              <FaUserCircle style={{ marginRight: "0.4rem", color: "#0f172a" }} />
              {user.name}
            </h2>
            <p style={styles.subText}>
              <FaClock /> Availability: {user.availability}
            </p>
            <p style={styles.subText}>
              <FaStar style={{ color: "#facc15" }} /> {user.rating} / 5
            </p>
          </div>
        </div>

        {/* Skills Offered */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Skills Offered</h3>
          <div style={styles.tagContainer}>
            {user.skillsOffered.map((skill, index) => (
              <span key={index} style={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Wanted */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Skills Wanted</h3>
          <div style={styles.tagContainer}>
            {user.skillsWanted.map((skill, index) => (
              <span key={index} style={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Edit Profile */}
        <button
          style={styles.editBtn}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
        >
          <FaEdit />
          Edit Profile
        </button>
      </div>
    </div>
  );
}

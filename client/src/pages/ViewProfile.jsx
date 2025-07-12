import { useParams, useNavigate } from "react-router-dom";

export default function ViewProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = {
    name: "John White",
    profilePhoto: "https://via.placeholder.com/100",
    skillsOffered: ["Video Editing", "Excel"],
    skillsWanted: ["Illustrator", "Public Speaking"],
    availability: "Weekends",
    rating: 4.3,
    isRequested: false,
  };

  const handleRequest = () => {
    navigate(`/request/${userId}`);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(to right, #f0f4ff, #e8f0fe)",
      padding: "2rem 1rem",
      fontFamily: "Segoe UI, sans-serif",
    },
    container: {
      maxWidth: "640px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
    },
    backBtn: {
      color: "#4f46e5",
      fontSize: "0.875rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      textDecoration: "underline",
    },
    profileSection: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      marginBottom: "2rem",
    },
    avatar: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "3px solid #6366f1",
      boxShadow: "0 0 10px rgba(99, 102, 241, 0.4)",
    },
    name: {
      fontSize: "1.75rem",
      fontWeight: "700",
      color: "#1e3a8a",
    },
    availability: {
      color: "#334155",
      marginTop: "0.25rem",
    },
    rating: {
      color: "#f59e0b",
      marginTop: "0.25rem",
    },
    sectionTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "0.75rem",
      color: "#0f172a",
    },
    list: {
      paddingLeft: "1.25rem",
      marginBottom: "2rem",
      color: "#475569",
    },
    listItem: {
      listStyleType: "disc",
      marginBottom: "0.5rem",
    },
    requestBtn: (isRequested) => ({
      width: "100%",
      padding: "0.75rem",
      backgroundColor: isRequested ? "#94a3b8" : "#4f46e5",
      color: "white",
      fontWeight: "600",
      fontSize: "1rem",
      border: "none",
      borderRadius: "0.5rem",
      cursor: isRequested ? "not-allowed" : "pointer",
      transition: "background-color 0.3s",
    }),
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1e293b" }}>User Profile</h1>
          <button onClick={() => navigate(-1)} style={styles.backBtn}>
            ← Back
          </button>
        </div>

        <div style={styles.profileSection}>
          <img src={user.profilePhoto} alt="Profile" style={styles.avatar} />
          <div>
            <h2 style={styles.name}>{user.name}</h2>
            <p style={styles.availability}>Availability: {user.availability}</p>
            <p style={styles.rating}>⭐ {user.rating} / 5</p>
          </div>
        </div>

        <div>
          <h3 style={styles.sectionTitle}>Skills Offered</h3>
          <ul style={styles.list}>
            {user.skillsOffered.map((skill, index) => (
              <li key={index} style={styles.listItem}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={styles.sectionTitle}>Skills Wanted</h3>
          <ul style={styles.list}>
            {user.skillsWanted.map((skill, index) => (
              <li key={index} style={styles.listItem}>{skill}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleRequest}
          disabled={user.isRequested}
          style={styles.requestBtn(user.isRequested)}
        >
          {user.isRequested ? "Request Sent" : "Request Swap"}
        </button>
      </div>
    </div>
  );
}

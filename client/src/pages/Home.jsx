import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const users = [
    {
      name: "Marc Demo",
      skillsOffered: ["Photoshop", "Excel"],
      skillsWanted: ["Python", "Design"],
      availability: "Weekends",
      rating: 4.5,
      profilePhoto: "/images/MarcDemo.jpeg",
    },
    {
      name: "Riya Sharma",
      skillsOffered: ["Python", "Communication"],
      skillsWanted: ["Video Editing"],
      availability: "Evenings",
      rating: 4.8,
      profilePhoto: "/images/RiyaSharma.jpeg",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #ffffff, #e0f2ff)",
      color: "#1e293b",
      fontFamily: "Segoe UI, sans-serif",
    },
    navbar: {
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      padding: "1rem 2rem",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    logo: {
      fontSize: "0.5rem",
      fontWeight: "bold",
      color: "#4338ca",
      
    },
    searchBar: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      marginTop: "1rem",
    },
    input: {
      padding: "0.5rem 0.75rem",
      borderRadius: "0.5rem",
      border: "1px solid #cbd5e1",
      fontSize: "1rem",
    },
    searchBtn: {
      backgroundColor: "#4338ca",
      color: "white",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      cursor: "pointer",
    },
    loginBtn: {
      color: "#4338ca",
      fontWeight: "600",
      background: "none",
      border: "none",
      cursor: "pointer",
      textDecoration: "underline",
    },
    main: {
      padding: "2rem 1rem",
      maxWidth: "900px",
      margin: "0 auto",
    },
    userCard: {
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
      borderRadius: "1rem",
      padding: "1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "1.5rem",
    },
    userInfo: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
    },
    avatar: {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      border: "2px solid #6366f1",
    },
    skillText: {
      marginTop: "0.3rem",
      fontSize: "0.9rem",
      color: "#475569",
    },
    tagBlue: { color: "#2563eb" },
    tagPink: { color: "#db2777" },
    ratingText: {
      fontSize: "0.9rem",
      textAlign: "center",
    },
    requestBtn: {
      marginTop: "0.5rem",
      backgroundColor: "#4338ca",
      color: "white",
      border: "none",
      padding: "0.4rem 1rem",
      borderRadius: "0.5rem",
      cursor: "not-allowed",
      opacity: 0.7,
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      padding: "2rem 0",
      gap: "0.5rem",
    },
    pageBtn: {
      padding: "0.4rem 0.8rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.4rem",
      backgroundColor: "white",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <h1 style={styles.logo}>SkillNet</h1>
        {/* <h1 style={styles.logo}><img src="/images/skillNetLogo.jpg" alt="" /></h1> */}
        <div style={styles.logo}>
          <img
            src="/images/logocrop.jpg"
            alt="SkillNet Logo"
            style={{ height: "80px", width: "200px", objectFit: "contain" }}
          />
        </div>


        <div style={styles.searchBar}>
          <select style={styles.input}>
            <option>Availability</option>
            <option>Weekends</option>
            <option>Evenings</option>
          </select>
          <input
            type="text"
            placeholder="Search skills..."
            style={styles.input}
          />
          <button style={styles.searchBtn}>Search</button>
        </div>

        <button
          onClick={() => navigate("/login")}
          style={styles.loginBtn}
        >
          Login
        </button>
      </header>

      {/* User List */}
      <main style={styles.main}>
        {users.map((user, idx) => (
          <div key={idx} style={styles.userCard}>
            <div style={styles.userInfo}>
              <img src={user.profilePhoto} alt="profile" style={styles.avatar} />
              <div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "600" }}>{user.name}</h2>
                <p style={styles.skillText}>
                  <strong>Offered:</strong>{" "}
                  <span style={styles.tagBlue}>{user.skillsOffered.join(", ")}</span> | {" "}
                  <strong>Wanted:</strong>{" "}
                  <span style={styles.tagPink}>{user.skillsWanted.join(", ")}</span>
                </p>
                <p style={styles.skillText}>
                  <strong>Availability:</strong> {user.availability}
                </p>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={styles.ratingText}>Rating: {user.rating} ⭐</p>
              <button style={styles.requestBtn} disabled>
                Request
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Pagination */}
      <div style={styles.pagination}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} style={styles.pageBtn}>{n}</button>
        ))}
      </div>
    </div>
  );
};

export default Home;

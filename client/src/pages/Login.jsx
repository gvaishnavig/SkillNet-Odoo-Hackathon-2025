import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(to right, #e0f2ff, #f0f9ff)", // light gradient background
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#1e293b", // slate-800
      fontFamily: "Segoe UI, sans-serif",
    },
    link: {
      color: "#2563eb",
      fontWeight: "500",
      fontSize: "1rem",
      textDecoration: "none",
      fontFamily: "Segoe UI, sans-serif",
    },
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "2.5rem",
      borderRadius: "1rem",
      boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
      width: "100%",
      maxWidth: "400px",
    },
    heading: {
      fontSize: "1.75rem",
      fontWeight: "700",
      marginBottom: "1.5rem",
      textAlign: "center",
      color: "#0f172a", // slate-900
      fontFamily: "Segoe UI, sans-serif",
    },
    label: {
      display: "block",
      fontSize: "0.9rem",
      fontWeight: "600",
      marginBottom: "0.25rem",
      color: "#334155", // slate-700
    },
    input: {
      width: "100%",
      padding: "0.6rem 0.75rem",
      fontSize: "1rem",
      border: "1px solid #cbd5e1",
      borderRadius: "0.5rem",
      outline: "none",
      marginBottom: "1.2rem",
      fontFamily: "Segoe UI, sans-serif",
    },
    button: {
      width: "100%",
      padding: "0.7rem",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#ffffff",
      backgroundColor: "#3b82f6",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      fontFamily: "Segoe UI, sans-serif",
      transition: "background 0.3s",
      textDecoration: 'none'
    },
    buttonHover: {
      backgroundColor: "#2563eb",
    },
    forgot: {
      textAlign: "right",
      marginTop: "0.75rem",
    },
    forgotLink: {
      color: "#2563eb",
      fontSize: "0.875rem",
      textDecoration: "none",
      fontFamily: "Segoe UI, sans-serif",
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>SkillNet</h1>
        <Link to="/" style={styles.link}>
          Home
        </Link>
      </div>

      {/* Login Form */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Welcome Back</h2>
          <form>
            {/* Email */}
            <div>
              <label style={styles.label}>Email</label>
              <input type="email" placeholder="you@example.com" style={styles.input} />
            </div>

            {/* Password */}
            <div>
              <label style={styles.label}>Password</label>
              <input type="password" placeholder="••••••••" style={styles.input} />
            </div>

            {/* Submit */}
      <Link to="/profile/1" style={{ textDecoration: 'none' }}>
          <button
           type="button"
           style={styles.button}
           onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
  >
           Login
          </button>
       </Link>

            {/* Forgot */}
            <div style={styles.forgot}>
              <Link to="#" style={styles.forgotLink}>
                Forgot username/password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



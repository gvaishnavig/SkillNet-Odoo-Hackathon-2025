import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SwapRequestForm() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const receiver = {
    name: "Robert Lane",
    profilePhoto: "/images/RobertLane.jpeg",
    skillsOffered: ["Excel", "Photography"],
    skillsWanted: ["Public Speaking"],
  };

  const currentUserSkills = ["React", "Photoshop", "Public Speaking"];
  const [selectedSkill, setSelectedSkill] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Swap Request Sent To:", receiver.name);
    console.log("Offering:", selectedSkill);
    console.log("Message:", message);
    alert("Swap request sent!");
    navigate("/swap-requests");
  };

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "2rem 1rem",
      background: "linear-gradient(to right, #e0f2ff, #f0f9ff)",
      fontFamily: "Segoe UI, sans-serif",
    },
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
    },
    title: {
      fontSize: "1.75rem",
      fontWeight: "700",
      marginBottom: "1.5rem",
      color: "#0f172a",
    },
    profile: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1.5rem",
      padding: "1rem",
      backgroundColor: "#f1f5f9",
      borderRadius: "0.75rem",
    },
    avatar: {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      border: "2px solid #3b82f6",
    },
    receiverName: {
      fontWeight: "600",
      fontSize: "1.1rem",
      color: "#1e293b",
    },
    receiverDetail: {
      fontSize: "0.9rem",
      color: "#475569",
      marginTop: "0.25rem",
    },
    label: {
      fontWeight: "600",
      fontSize: "0.95rem",
      marginBottom: "0.4rem",
      display: "block",
      color: "#1e293b",
    },
    select: {
      width: "100%",
      padding: "0.6rem 0.75rem",
      border: "1px solid #cbd5e1",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      backgroundColor: "#f9fafb",
      outline: "none",
    },
    textarea: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #cbd5e1",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      resize: "none",
      backgroundColor: "#f9fafb",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#2563eb",
      color: "white",
      fontWeight: "600",
      fontSize: "1rem",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      marginTop: "1rem",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Send Swap Request</h1>

        {/* Receiver Info */}
        <div style={styles.profile}>
          <img
            src={receiver.profilePhoto}
            alt={receiver.name}
            style={styles.avatar}
          />
          <div>
            <p style={styles.receiverName}>{receiver.name}</p>
            <p style={styles.receiverDetail}>
              Wants help with:{" "}
              <strong style={{ color: "#1d4ed8" }}>
                {receiver.skillsWanted.join(", ")}
              </strong>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={styles.label}>Select a skill to offer</label>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              required
              style={styles.select}
            >
              <option value="">-- Select Skill --</option>
              {currentUserSkills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={styles.label}>Message (optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Add a short note..."
              style={styles.textarea}
            ></textarea>
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}



import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SwapRequestForm() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Simulated user data (receiver)
  const receiver = {
    name: "Robert Lane",
    profilePhoto: "https://via.placeholder.com/100",
    skillsOffered: ["Excel", "Photography"],
    skillsWanted: ["Public Speaking"],
  };

  // Simulated current user skills
  const currentUserSkills = ["React", "Photoshop", "Public Speaking"];

  const [selectedSkill, setSelectedSkill] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with actual request logic (API call etc.)
    console.log("Swap Request Sent To:", receiver.name);
    console.log("Offering:", selectedSkill);
    console.log("Message:", message);

    alert("Swap request sent!");
    navigate("/swap-requests");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Send Swap Request</h1>

        {/* Receiver Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={receiver.profilePhoto}
            alt={receiver.name}
            className="w-16 h-16 rounded-full border-2 border-blue-500"
          />
          <div>
            <p className="font-semibold">{receiver.name}</p>
            <p className="text-sm text-gray-600">
              Wants help with:{" "}
              <span className="font-medium">{receiver.skillsWanted.join(", ")}</span>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-sm mb-1">Select a skill to offer</label>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Skill --</option>
              {currentUserSkills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Message (optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Add a note (optional)"
              className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}


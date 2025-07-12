import { useParams, useNavigate } from "react-router-dom";

export default function ViewProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Dummy user data (you'll fetch from backend later)
  const user = {
    name: "John White",
    profilePhoto: "https://via.placeholder.com/100",
    skillsOffered: ["Video Editing", "Excel"],
    skillsWanted: ["Illustrator", "Public Speaking"],
    availability: "Weekends",
    rating: 4.3,
    isRequested: false, // change to true to simulate already sent
  };

  const handleRequest = () => {
    navigate(`/request/${userId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">User Profile</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">Availability: {user.availability}</p>
            <p className="text-yellow-600">⭐ {user.rating} / 5</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Skills Offered</h3>
          <ul className="list-disc list-inside text-gray-700">
            {user.skillsOffered.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Skills Wanted</h3>
          <ul className="list-disc list-inside text-gray-700">
            {user.skillsWanted.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Request Button */}
        <button
          onClick={handleRequest}
          disabled={user.isRequested}
          className={`w-full py-2 text-white font-medium rounded ${
            user.isRequested
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {user.isRequested ? "Request Sent" : "Request Swap"}
        </button>
      </div>
    </div>
  );
}

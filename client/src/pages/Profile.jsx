import { useParams } from "react-router-dom";

export default function Profile() {
  const { userId } = useParams();

  // Dummy data - replace with real fetch/API call later
  const user = {
    name: "Jane Doe",
    profilePhoto: "https://via.placeholder.com/100",
    skillsOffered: ["React", "Photoshop", "Public Speaking"],
    skillsWanted: ["Python", "UX Design"],
    availability: "Weekends, Evenings",
    rating: 4.8,
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">SkillNet</h1>
        <button className="text-red-600 hover:underline font-medium">Logout</button>
      </div>

      {/* Profile Card */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
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

        {/* Only show edit if logged in user === userId (for now, always show) */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

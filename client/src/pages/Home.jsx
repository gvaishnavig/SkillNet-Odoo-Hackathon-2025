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
      profilePhoto: "https://via.placeholder.com/50",
    },
    {
      name: "Riya Sharma",
      skillsOffered: ["Python", "Communication"],
      skillsWanted: ["Video Editing"],
      availability: "Evenings",
      rating: 4.8,
      profilePhoto: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-indigo-700">SkillNet</h1>

        <div className="flex gap-2 items-center w-full md:w-auto">
          <select className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <option>Availability</option>
            <option>Weekends</option>
            <option>Evenings</option>
          </select>
          <input
            type="text"
            placeholder="Search skills..."
            className="border rounded px-3 py-2 w-full md:w-56 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Search
          </button>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="text-indigo-600 font-semibold hover:underline"
        >
          Login
        </button>
      </header>

      {/* User List */}
      <main className="p-6 space-y-6 max-w-4xl mx-auto">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg p-5 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-5">
              <img
                src={user.profilePhoto}
                alt="profile"
                className="w-16 h-16 rounded-full border-2 border-indigo-400"
              />
              <div>
                <h2 className="font-semibold text-lg text-gray-800">{user.name}</h2>
                <p className="text-sm text-gray-700 mt-1">
                  <strong>Offered:</strong>{" "}
                  <span className="text-blue-600">{user.skillsOffered.join(", ")}</span> |{" "}
                  <strong>Wanted:</strong>{" "}
                  <span className="text-pink-600">{user.skillsWanted.join(", ")}</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Availability:</strong> {user.availability}
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-700">Rating: {user.rating} ⭐</p>
              <button
                className="mt-2 bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-indigo-700 disabled:opacity-50"
                disabled
              >
                Request
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Pagination */}
      <div className="flex justify-center py-6">
        <nav className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className="px-3 py-1 rounded border text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
            >
              {n}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Home;


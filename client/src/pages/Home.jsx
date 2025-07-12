import React from "react";

const Home = () => {
  const users = [
    {
      name: "Marc Demo",
      skillsOffered: ["Photoshop", "Excel"],
      skillsWanted: ["Python", "Design"],
      availability: "Weekends",
      rating: 4.5,
      profilePhoto: "https://via.placeholder.com/50",
    },
    // Add more dummy users as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SkillNet</h1>
        <div className="flex gap-2 items-center">
          <select className="border px-2 py-1 rounded">
            <option>Availability</option>
            <option>Weekends</option>
            <option>Evenings</option>
          </select>
          <input
            type="text"
            placeholder="Search skills..."
            className="border px-2 py-1 rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-1 rounded">Search</button>
        </div>
        <button className="text-blue-600 font-semibold hover:underline">Login</button>
      </header>

      {/* User List */}
      <div className="p-4 space-y-4">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-4 rounded flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={user.profilePhoto}
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-lg">{user.name}</h2>
                <p className="text-sm">
                  <strong>Offered:</strong> {user.skillsOffered.join(", ")} | <strong>Wanted:</strong>{" "}
                  {user.skillsWanted.join(", ")}
                </p>
                <p className="text-sm">Availability: {user.availability}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm">Rating: {user.rating} ⭐</p>
              <button
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
                disabled
              >
                Request
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center p-4">
        <nav className="space-x-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className="px-3 py-1 border rounded hover:bg-blue-100"
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

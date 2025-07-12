import { useState } from "react";

export default function SwapRequests() {
  // Dummy swap request data
  const [requests, setRequests] = useState([
    {
      id: 1,
      sender: "Alice",
      senderSkill: "Photoshop",
      receiverSkill: "Excel",
      message: "I’d love to trade my Photoshop skills for help with Excel.",
      status: "pending",
    },
    {
      id: 2,
      sender: "Bob",
      senderSkill: "Public Speaking",
      receiverSkill: "Python",
      message: "Can we arrange a swap over the weekend?",
      status: "accepted",
    },
    {
      id: 3,
      sender: "Charlie",
      senderSkill: "Video Editing",
      receiverSkill: "React",
      message: "Need help with React ASAP 🙏",
      status: "rejected",
    },
  ]);

  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Swap Requests</h1>

        {requests.length === 0 ? (
          <p className="text-gray-600">You have no swap requests yet.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((req) => (
              <li
                key={req.id}
                className={`border rounded-lg p-4 transition ${
                  req.status === "pending"
                    ? "bg-white"
                    : req.status === "accepted"
                    ? "bg-green-50"
                    : "bg-red-50"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {req.sender} offers <span className="text-blue-600">{req.senderSkill}</span> for your{" "}
                      <span className="text-purple-600">{req.receiverSkill}</span>
                    </p>
                    <p className="text-sm text-gray-700 italic mt-1">"{req.message}"</p>
                  </div>
                  <span
                    className={`ml-4 px-2 py-1 text-xs font-semibold rounded-full ${
                      req.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : req.status === "accepted"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>

                {req.status === "pending" && (
                  <div className="flex gap-4 mt-2">
                    <button
                      onClick={() => handleAction(req.id, "accepted")}
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAction(req.id, "rejected")}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

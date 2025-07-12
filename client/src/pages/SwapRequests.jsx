// import { useState } from "react";

// export default function SwapRequests() {
//   // Dummy swap request data
//   const [requests, setRequests] = useState([
//     {
//       id: 1,
//       sender: "Alice",
//       senderSkill: "Photoshop",
//       receiverSkill: "Excel",
//       message: "I’d love to trade my Photoshop skills for help with Excel.",
//       status: "pending",
//     },
//     {
//       id: 2,
//       sender: "Bob",
//       senderSkill: "Public Speaking",
//       receiverSkill: "Python",
//       message: "Can we arrange a swap over the weekend?",
//       status: "accepted",
//     },
//     {
//       id: 3,
//       sender: "Charlie",
//       senderSkill: "Video Editing",
//       receiverSkill: "React",
//       message: "Need help with React ASAP 🙏",
//       status: "rejected",
//     },
//   ]);

//   const handleAction = (id, action) => {
//     setRequests((prev) =>
//       prev.map((req) =>
//         req.id === id ? { ...req, status: action } : req
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-6">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Swap Requests</h1>

//         {requests.length === 0 ? (
//           <p className="text-gray-600">You have no swap requests yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {requests.map((req) => (
//               <li
//                 key={req.id}
//                 className={`border rounded-lg p-4 transition ${
//                   req.status === "pending"
//                     ? "bg-white"
//                     : req.status === "accepted"
//                     ? "bg-green-50"
//                     : "bg-red-50"
//                 }`}
//               >
//                 <div className="flex justify-between items-start mb-2">
//                   <div>
//                     <p className="font-semibold text-gray-800">
//                       {req.sender} offers <span className="text-blue-600">{req.senderSkill}</span> for your{" "}
//                       <span className="text-purple-600">{req.receiverSkill}</span>
//                     </p>
//                     <p className="text-sm text-gray-700 italic mt-1">"{req.message}"</p>
//                   </div>
//                   <span
//                     className={`ml-4 px-2 py-1 text-xs font-semibold rounded-full ${
//                       req.status === "pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : req.status === "accepted"
//                         ? "bg-green-200 text-green-800"
//                         : "bg-red-200 text-red-800"
//                     }`}
//                   >
//                     {req.status}
//                   </span>
//                 </div>

//                 {req.status === "pending" && (
//                   <div className="flex gap-4 mt-2">
//                     <button
//                       onClick={() => handleAction(req.id, "accepted")}
//                       className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
//                     >
//                       Accept
//                     </button>
//                     <button
//                       onClick={() => handleAction(req.id, "rejected")}
//                       className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function SwapRequests() {
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

  const statusStyles = {
    pending: { backgroundColor: "#fff8db", color: "#856404" },
    accepted: { backgroundColor: "#d4edda", color: "#155724" },
    rejected: { backgroundColor: "#f8d7da", color: "#721c24" },
  };

  const cardBg = {
    pending: "#ffffff",
    accepted: "#f0fdf4",
    rejected: "#fef2f2",
  };

  const fontFamily = `"Segoe UI", "Roboto", "Helvetica Neue", sans-serif`;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f6fa",
        padding: "32px",
        fontFamily,
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "28px",
          borderRadius: "12px",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 600,
            marginBottom: "24px",
            color: "#333",
          }}
        >
          Swap Requests
        </h1>

        {requests.length === 0 ? (
          <p style={{ color: "#666", fontSize: "16px" }}>
            You have no swap requests yet.
          </p>
        ) : (
          <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {requests.map((req) => (
              <li
                key={req.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "20px",
                  backgroundColor: cardBg[req.status],
                  transition: "0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: 500, color: "#222", fontSize: "16px" }}>
                      {req.sender} offers{" "}
                      <span style={{ color: "#2563eb", fontWeight: 600 }}>
                        {req.senderSkill}
                      </span>{" "}
                      for your{" "}
                      <span style={{ color: "#7c3aed", fontWeight: 600 }}>
                        {req.receiverSkill}
                      </span>
                    </p>
                    <p
                      style={{
                        fontStyle: "italic",
                        color: "#555",
                        fontSize: "14px",
                        marginTop: "6px",
                      }}
                    >
                      “{req.message}”
                    </p>
                  </div>
                  <span
                    style={{
                      ...statusStyles[req.status],
                      padding: "5px 12px",
                      borderRadius: "16px",
                      fontSize: "13px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {req.status}
                  </span>
                </div>

                {req.status === "pending" && (
                  <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
                    <button
                      onClick={() => handleAction(req.id, "accepted")}
                      style={{
                        backgroundColor: "#198754",
                        color: "white",
                        padding: "8px 18px",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#157347")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#198754")
                      }
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAction(req.id, "rejected")}
                      style={{
                        backgroundColor: "#dc3545",
                        color: "white",
                        padding: "8px 18px",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#bb2d3b")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#dc3545")
                      }
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

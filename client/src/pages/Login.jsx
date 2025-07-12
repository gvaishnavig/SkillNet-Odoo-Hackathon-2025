import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-gray-800">SkillNet</h1>
        <Link to="/" className="text-blue-600 font-medium hover:underline">
          Home
        </Link>
      </div>

      {/* Login Form Container */}
      <div className="flex justify-center mt-16">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>

            {/* Forgot Link */}
            <div className="text-right text-sm">
              <Link to="#" className="text-blue-600 hover:underline">
                Forgot username/password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

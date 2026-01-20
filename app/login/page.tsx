
export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
    

      {/* Login Form */}
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Login
          </h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-900 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-900 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </main>

    
    </div>
  );
}


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
   

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 px-6 md:px-16 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            We would love to hear from you! Fill out the form below or reach us using the contact information provided.
          </p>
        </section>

        {/* Contact Info & Form */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Main Street, Addis Ababa, Ethiopia
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> info@mywebsite.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +251 912 345 678
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-indigo-900 hover:text-indigo-700 transition">Facebook</a>
              <a href="#" className="text-indigo-900 hover:text-indigo-700 transition">Twitter</a>
              <a href="#" className="text-indigo-900 hover:text-indigo-700 transition">LinkedIn</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
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
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

    
    </div>
  );
}

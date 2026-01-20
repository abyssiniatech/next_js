

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* <Header /> */}

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 px-6 md:px-16 py-12">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            About Us
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Learn more about our mission, vision, and the values that drive our team.
          </p>
        </section>

        {/* Content Sections */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              Our mission is to provide high-quality solutions that empower businesses and individuals to achieve more. We believe in innovation, collaboration, and continuous learning.
            </p>
            <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700">
              We aim to become a global leader in delivering modern web solutions that combine performance, design, and usability.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1581092334465-dcc38b4794de?auto=format&fit=crop&w=600&q=80"
              alt="Team working together"
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-indigo-900 text-center mb-10">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Alice Johnson", role: "CEO", img: "https://i.pravatar.cc/150?img=1" },
              { name: "Bob Smith", role: "CTO", img: "https://i.pravatar.cc/150?img=2" },
              { name: "Clara Lee", role: "Designer", img: "https://i.pravatar.cc/150?img=3" },
              { name: "David Kim", role: "Developer", img: "https://i.pravatar.cc/150?img=4" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-indigo-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  )
}

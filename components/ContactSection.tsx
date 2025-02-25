export default function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-gray-600">
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6">Send Us Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 mt-4 md:mt-0">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> 470-601-1911
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{" "}
                Pagedone1234@gmail.com
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Address:</span> 789 Oak Lane,
                Lakeside, TX 54321
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

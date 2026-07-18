const Contact = () => {
  return (
    <div name='contact' className="w-full bg-[#0a192f] text-gray-300 py-20">
      <div className="max-w-[1000px] mx-auto px-4">

        {/* Header */}
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Contact</p>
          <p className="py-4 text-gray-400">Get in touch — I'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left info */}
          <div className="bg-[#112240] rounded-xl border border-[#1e3a5f] p-6 hover:border-pink-500 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600" />
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you have a question, a project in mind, or just want to say hi — my inbox is open.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="mailto:vamsihanumantu1729@gmail.com" className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200">
                <span>✉️</span> vamsihanumantu1729@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/vamsihanumantu/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200">
                <span>🔗</span> linkedin.com/in/vamsihanumantu
              </a>
              <a href="https://github.com/VamsiHanumantu" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200">
                <span>🐙</span> github.com/VamsiHanumantu
              </a>
            </div>
          </div>

          {/* Right form */}
          <form
            action="https://getform.io/f/8e13b51a-7543-481c-b841-ec78fe32c9f7"
            method="post"
            className="bg-[#112240] rounded-xl border border-[#1e3a5f] p-6 flex flex-col gap-4 hover:border-pink-500 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-0.5 w-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-600" />
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Send a Message
              </span>
            </div>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full bg-[#0a192f] border border-[#1e3a5f] rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full bg-[#0a192f] border border-[#1e3a5f] rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors duration-200"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#0a192f] border border-[#1e3a5f] rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact

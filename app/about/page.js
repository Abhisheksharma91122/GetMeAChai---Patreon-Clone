import React from 'react'

const About = () => {
  return (
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white min-h-screen">
      <section className="w-full py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Empowering people to support what matters — one contribution at a time.
        </p>
      </section>

      <section className="py-16 px-5 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-white/80 text-center max-w-3xl mx-auto">
          We believe everyone should have the power to make a difference. Our crowdfunding platform makes it easy to support creators, causes, and communities through simple and secure payments. Whether you're buying someone a coffee or backing a big idea, your support has an impact.
        </p>
      </section>

      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-[#111827] rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Start a Campaign</h3>
            <p className="text-white/70">Create a profile and share your story. It only takes a few minutes to get started.</p>
          </div>
          <div className="p-6 bg-[#111827] rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Receive Support</h3>
            <p className="text-white/70">Friends, family, and strangers can donate to your cause instantly and securely.</p>
          </div>
          <div className="p-6 bg-[#111827] rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Build Community</h3>
            <p className="text-white/70">Turn backers into fans. Connect with your supporters and grow your network.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
          Whether you're a creator looking for support or a supporter wanting to contribute — you're in the right place.
        </p>
        <a
          href="/login"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition"
        >
          Get Started
        </a>
      </section>
    </div>
  )
}

export default About

export const metadata = {
  title: "About - Get Me A Chai",
}

import { cv } from '../data/cv'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20 pb-12">
      {/* Animated blobs background */}
      <div className="blob blob--blue -left-40 -top-40"></div>
      <div className="blob blob--cyan -right-32 top-20"></div>
      <div className="blob blob--green -bottom-32 left-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="fade-up">
            <div className="mb-4">
              <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Bienvenue 👋
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              {cv.name}
            </h1>
            <p className="text-2xl text-indigo-600 mb-6 font-semibold">
              {cv.title}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              {cv.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Me contacter
              </button>
              <a
                href="/cv.pdf"
                download
                className="btn-secondary flex items-center gap-2"
              >
                📥 Télécharger CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 text-slate-400">
              <a href={`mailto:${cv.contact.email}`} className="hover:text-blue-400 transition">
                📧 Email
              </a>
              <a href="https://www.linkedin.com/in/chocobain/" className="hover:text-blue-400 transition">
                💼 LinkedIn
              </a>
              <a href="https://github.com/choco-bain" className="hover:text-blue-400 transition">
                🐙 GitHub
              </a>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="fade-up relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                <img
                  src={cv.photo || 'https://via.placeholder.com/320'}
                  alt={cv.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

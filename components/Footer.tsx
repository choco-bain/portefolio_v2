import { cv } from '../data/cv'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 mt-32 py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Cheick Kouassi</h3>
            <p className="text-gray-600 text-sm">{cv.title}</p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-indigo-600 transition">À propos</a></li>
              <li><a href="#skills" className="hover:text-indigo-600 transition">Compétences</a></li>
              <li><a href="#experience" className="hover:text-indigo-600 transition">Expérience</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href={`mailto:${cv.contact.email}`} className="hover:text-indigo-600 transition">{cv.contact.email}</a></li>
              <li><a href={`tel:${cv.contact.phone}`} className="hover:text-indigo-600 transition">{cv.contact.phone}</a></li>
              <li className="text-xs">{cv.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>© {currentYear} {cv.name}. Tous droits réservés.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/chocobain/" className="hover:text-indigo-600 transition">LinkedIn</a>
            <a href="https://github.com/choco-bain" className="hover:text-indigo-600 transition">GitHub</a>
            <a href="https://x.com/chocobain225" className="hover:text-indigo-600 transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

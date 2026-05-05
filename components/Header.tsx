import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">CK</div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#home" className="text-gray-700 hover:text-black transition">Accueil</a>
          <a href="#about" className="text-gray-700 hover:text-black transition">À propos</a>
          <a href="#skills" className="text-gray-700 hover:text-black transition">Compétences</a>
          <a href="#experience" className="text-gray-700 hover:text-black transition">Expérience</a>
          <a href="#education" className="text-gray-700 hover:text-black transition">Formation</a>
          <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900">
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 space-y-2 px-6 py-4">
          <a href="#home" className="block text-gray-700 hover:text-black">Accueil</a>
          <a href="#about" className="block text-gray-700 hover:text-black">À propos</a>
          <a href="#skills" className="block text-gray-700 hover:text-black">Compétences</a>
          <a href="#experience" className="block text-gray-700 hover:text-black">Expérience</a>
          <a href="#education" className="block text-gray-700 hover:text-black">Formation</a>
          <a href="#contact" className="block text-gray-700 hover:text-black">Contact</a>
        </nav>
      )}
    </header>
  )
}

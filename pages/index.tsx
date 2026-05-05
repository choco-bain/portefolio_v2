import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ExperienceList from '../components/ExperienceList'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { cv } from '../data/cv'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32 bg-white">
        {/* About Section */}
        <section id="about" className="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">À propos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Qui suis-je ?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {cv.summary}
              </p>
              <p className="text-gray-600 text-sm">
                Actuellement basé à <strong>{cv.contact.address.split(',')[1] || 'France'}</strong>, je travaille sur des projets 
                d'architecture de données et développement fullstack. Passionné par les technologies cloud, 
                l'optimisation des données et la création de solutions robustes et scalables.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Langues</h3>
              <div className="space-y-3">
                {cv.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{lang.name}</span>
                      <span className="text-xs text-gray-500">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-gray-900 to-indigo-600"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Compétences</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex flex-wrap gap-2">
                {cv.skills.slice(0, cv.skills.length / 2).map((s) => (
                  <span key={s} className="skill-pill px-4 py-2 rounded-full text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {cv.skills.slice(cv.skills.length / 2).map((s) => (
                  <span key={s} className="skill-pill px-4 py-2 rounded-full text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cv.softSkills.map((skill) => (
                <div key={skill} className="card text-center">
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Expériences</h2>
          <div className="space-y-6">
            {cv.experience.map((exp, idx) => (
              <div key={exp.company} className="card border-l-4 border-indigo-600">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-indigo-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {exp.bullets?.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-indigo-600 flex-shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cv.education.map((edu) => (
              <div key={edu.school} className="card text-center">
                <p className="text-2xl font-bold text-indigo-600 mb-2">{edu.school.split('-')[0]}</p>
                <p className="text-gray-900 font-semibold">{edu.degree}</p>
                <p className="text-gray-500 text-sm mt-3">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Me contacter</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Parlons ensemble</h3>
              <p className="text-gray-700 mb-6">
                Vous avez un projet, une question ou simplement envie de discuter ? 
                N'hésitez pas à me contacter par le formulaire ou directement par email.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    📧
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${cv.contact.email}`} className="text-gray-900 hover:text-indigo-600">
                      {cv.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    📱
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="text-gray-900">{cv.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Localisation</p>
                    <p className="text-gray-900">{cv.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

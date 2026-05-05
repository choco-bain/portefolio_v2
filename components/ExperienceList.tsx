import { cv } from '../data/cv'

export default function ExperienceList(){
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Expériences</h3>
      <div className="space-y-4">
        {cv.experience.map((e) => (
          <article key={e.company} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition fade-up">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{e.role} <span className="text-gray-500">— {e.company}</span></h4>
                <div className="text-sm text-gray-400">{e.period}</div>
              </div>
            </div>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              {e.bullets?.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

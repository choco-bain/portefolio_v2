import { cv } from '../data/cv'

export default function Skills(){
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Compétences</h3>
      <div className="flex flex-wrap gap-3">
        {cv.skills.map((s) => (
          <span key={s} className="skill-pill px-3 py-1 rounded-full text-sm shadow-sm transform hover:scale-105 transition">{s}</span>
        ))}
      </div>
    </section>
  )
}

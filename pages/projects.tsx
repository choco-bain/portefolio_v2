import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { cv } from '../data/cv'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-6">Projets</h1>
        <div className="grid gap-4">
          {cv.projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </main>
    </div>
  )
}

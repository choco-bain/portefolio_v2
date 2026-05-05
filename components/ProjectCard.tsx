type Project = {
  title: string
  desc: string
  link?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-gray-600 mt-2">{project.desc}</p>
      {project.link && (
        <div className="mt-3">
          <a className="text-blue-600" href={project.link} target="_blank" rel="noreferrer">Visiter</a>
        </div>
      )}
    </article>
  )
}

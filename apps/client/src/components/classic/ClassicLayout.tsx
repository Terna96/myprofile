import Hero from './Hero'

export default function ClassicLayout() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Hero />
      <section className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-neutral-600 dark:text-neutral-300">Short bio and mission statement.</p>
        </div>
        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <p className="text-neutral-600 dark:text-neutral-300">What I offer — web apps, APIs, cloud.</p>
        </div>
      </section>
    </div>
  )
}

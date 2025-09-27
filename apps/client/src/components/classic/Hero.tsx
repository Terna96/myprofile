export default function Hero() {
  return (
    <header className="rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
      <h1 className="text-3xl font-bold">Hi, I'm You — Full‑Stack Developer</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        I build fast, clean web apps with React, Node, and MongoDB.
      </p>
      <div className="mt-4 flex gap-3">
        <a href="#projects" className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">See Projects</a>
        <a href="#contact" className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">Contact</a>
      </div>
    </header>
  )
}

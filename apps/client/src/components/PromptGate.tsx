export default function PromptGate({ onChoice }: { onChoice: (dev: boolean) => void }) {
  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
        <h1 className="text-2xl font-semibold mb-2">Are you a developer?</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Choose your preferred interface.
        </p>
        <div className="flex gap-3">
          <button onClick={() => onChoice(true)} className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            VS Code View
          </button>
          <button onClick={() => onChoice(false)} className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
            Classic View
          </button>
        </div>
      </div>
    </div>
  )
}

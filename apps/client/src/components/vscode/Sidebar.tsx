export default function Sidebar() {
  const items = ['📁', '🔎', '🔁', '🐞']
  return (
    <div className="h-full flex flex-col items-center py-3 gap-3">
      {items.map((i, idx) => (
        <button key={idx} className="w-10 h-10 grid place-items-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
          <span className="text-lg">{i}</span>
        </button>
      ))}
    </div>
  )
}

export default function Tabs() {
  const tabs = ['Home.tsx', 'Projects.tsx', 'Contact.tsx']
  return (
    <div className="h-full flex flex-col">
      <div className="h-10 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 px-2 overflow-auto">
        {tabs.map(t => (
          <div key={t} className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm whitespace-nowrap">{t}</div>
        ))}
      </div>
      <div className="p-4 text-sm text-neutral-600 dark:text-neutral-300">
        Explorer • Open Editors • Files
      </div>
    </div>
  )
}

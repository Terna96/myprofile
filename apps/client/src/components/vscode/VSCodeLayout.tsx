import Sidebar from './Sidebar'
import Tabs from './Tabs'
import EditorPanel from './EditorPanel'

export default function VSCodeLayout() {
  return (
    <div className="h-screen grid grid-cols-[56px_260px_1fr] grid-rows-[40px_1fr]">
      {/* Top bar */}
      <div className="col-span-3 row-start-1 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 gap-3 text-sm">
        <span className="font-semibold">My Portfolio — VS Code View</span>
      </div>

      {/* Left icon rail */}
      <div className="row-start-2 border-r border-neutral-200 dark:border-neutral-800">
        <Sidebar />
      </div>

      {/* Tabs */}
      <div className="row-start-2 border-r border-neutral-200 dark:border-neutral-800">
        <Tabs />
      </div>

      {/* Editor */}
      <div className="row-start-2">
        <EditorPanel />
      </div>
    </div>
  )
}

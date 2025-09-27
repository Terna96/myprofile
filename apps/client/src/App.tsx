import { useState } from 'react'
import PromptGate from './components/PromptGate'
import ThemeToggle from './components/ThemeToggle'
import VSCodeLayout from './components/vscode/VSCodeLayout'
import ClassicLayout from './components/classic/ClassicLayout'

export default function App() {
  const [isDevView, setIsDevView] = useState<boolean | null>(null)

  if (isDevView === null) {
    return <PromptGate onChoice={(dev) => setIsDevView(dev)} />
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-3 right-3 z-50">
        <ThemeToggle />
      </div>
      {isDevView ? <VSCodeLayout /> : <ClassicLayout />}
    </div>
  )
}

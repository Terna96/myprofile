import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 backdrop-blur"
      title="Toggle theme"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

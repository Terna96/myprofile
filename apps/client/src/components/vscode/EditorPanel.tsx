    export default function EditorPanel() {
      const code = `function greet(name: string) {
  return \\`Hello, \\${name}!\\`
}`
      return (
        <div className="h-full font-mono text-sm">
          <div className="h-10 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-3">
            <span className="text-neutral-500">src/pages/Home.tsx</span>
          </div>
          <pre className="p-4 overflow-auto">
            <code>{code}</code>
          </pre>
        </div>
      )
    }

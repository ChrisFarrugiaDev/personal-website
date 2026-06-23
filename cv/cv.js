// CV — Christopher Farrugia

document.addEventListener('DOMContentLoaded', () => {
  // Download button → print dialog (choose "Save as PDF")
  const downloadBtn = document.getElementById('downloadBtn')
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => window.print())
  }

  // Keyboard shortcut: Ctrl/Cmd + P
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault()
      window.print()
    }
  })
})

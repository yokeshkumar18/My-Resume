"use client"

import { useState } from "react"
import ResumePreview from "@/components/resume-preview"
import { Download } from "lucide-react"

export default function Home() {
  const [showPreview, setShowPreview] = useState(true)

  const handleDownloadPDF = () => {
    const element = document.getElementById("resume-content")
    if (!element) return

    // Create a new window for printing
    const printWindow = window.open("", "", "width=900,height=1200")
    if (!printWindow) return

    // Get the HTML from the element
    const html = element.innerHTML

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Yokesh_Kumar_TR_Frontend_Developer_Resume.pdf</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              line-height: 1.5;
              color: #1a1a1a;
              background: white;
            }
            @page {
              margin: 0;
              padding: 0;
            }
            @media print {
              body {
                margin: 0;
                padding: 0;
              }
              section {
                page-break-inside: avoid;
              }
            }
            ${element.parentElement?.querySelector("style")?.textContent || ""}
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `)

    printWindow.document.close()
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 250)
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Yokesh Kumar</h1>
            <p className="text-sm text-slate-600">Frontend Developer Resume</p>
          </div>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-medium text-sm"
          >
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div id="resume-content">
        <ResumePreview />
      </div>
    </main>
  )
}

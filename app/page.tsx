"use client"

import { useState, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import ResumePreview from "@/components/resume-preview"
import { Download } from "lucide-react"

export default function Home() {
  const [showPreview, setShowPreview] = useState(true)
  const componentRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Yokesh_Kumar_TR_Frontend_Developer_Resume",
  })

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm print:hidden">
        <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Yokesh Kumar</h1>
            <p className="text-sm text-slate-600">Frontend Developer Resume</p>
          </div>
          <button
            onClick={() => handleDownloadPDF()}
            className="flex items-center gap-2 px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-medium text-sm"
          >
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div ref={componentRef} id="resume-content">
        <ResumePreview />
      </div>
    </main>
  )
}

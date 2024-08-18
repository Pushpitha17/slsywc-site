"use client"
import React, { useRef } from "react"
import FilledForm from "@/components/Elements/FilledForm"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import html2PDF from "jspdf-html2canvas"

function PDFPage() {
  const handleThings = async () => {
    generatePdf()
  }

  const pdfRef = useRef<HTMLDivElement>(null)

  const generatePdf = async () => {
    const element = pdfRef.current

    if (!element) return

    const elementWidth = 900
    const elementHeight = 1500

    const a4Width = 595.28
    const a4Height = 841.89

    html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      scrollX: 0,
      scrollY: 0,

      width: elementWidth, // Set the canvas width
      height: elementHeight, // Set the canvas height
      onclone: (clonedDoc: Document) => {
        const clonedElement = clonedDoc.getElementById("pdf-content")
        console.log(clonedElement)
        if (clonedElement) {
          clonedElement.style.display = "block"
        }
      }
    }).then((canvas) => {
      console.log(canvas)
      const imgData = canvas.toDataURL("image/jpeg")

      // Calculate scaling factor
      const scaleX = a4Width / canvas.width
      const scaleY = a4Height / canvas.height
      const scale = Math.min(scaleX, scaleY)

      // Calculate new width and height based on the scaling factor
      const scaledWidth = canvas.width * scale
      const scaledHeight = canvas.height * scale

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
        compress: true
      })


      pdf.addImage(
        imgData, // image data
        "jpeg", // format
        0,
        0,
        a4Width,
        scaledHeight,
        undefined, // alias (optional)
        "FAST", // compression (optional)
        0 // rotation (optional)
      )
      pdf.save("download.pdf")
    })
  }

  return (
    <>
      <div
        className="max-w-[720px] mx-auto text-black"
        ref={pdfRef}
        id="pdf-content"
      >
        <FilledForm></FilledForm>
      </div>
      <button onClick={handleThings}>Click</button>
    </>
  )
}

export default PDFPage

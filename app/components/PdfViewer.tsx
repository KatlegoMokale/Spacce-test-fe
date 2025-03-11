"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

interface PdfViewerProps {
  url: string;
}

const PdfViewer = ({ url }: PdfViewerProps) => {
    const [isClient, setIsClient] = useState(false);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
    // Determine if URL is absolute or relative
    const pdfUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${url}`;
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return <div className="h-screen w-screen bg-gray-100 animate-pulse" />;
    }
  
    return (
      <div className="h-screen w-screen">
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js">
          <Viewer
            fileUrl={pdfUrl}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    );
  };

// Export with dynamic import and disabled SSR
export default dynamic(() => Promise.resolve(PdfViewer), {
  ssr: false
});

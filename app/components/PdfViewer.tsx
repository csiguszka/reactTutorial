import React, { useState, useEffect } from 'react';

interface PdfViewerProps {
  pdfPath: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ pdfPath }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('PDF path:', pdfPath);
    setLoading(true);
    setError(null);
    
    // Simulate loading completion
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [pdfPath]);

  return (
    <div className="h-full p-4 bg-white">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">PDF Nézet</h3>
          <div className="text-sm text-gray-600">
            PDF megjelenítése
          </div>
        </div>
        
        <div className="flex-1 overflow-auto border border-gray-200 rounded-lg">
          <div className="flex justify-center p-4">
            {loading && (
              <div className="text-gray-500">PDF betöltése...</div>
            )}
            {error && (
              <div className="text-red-500">{error}</div>
            )}
            {!loading && !error && (
              <object
                data={pdfPath}
                type="application/pdf"
                className="w-full h-full min-h-[600px]"
                title="PDF Viewer"
              >
                <div className="text-center p-8">
                  <p className="text-gray-600 mb-4">A PDF megjelenítése nem támogatott ebben a böngészőben.</p>
                  <a 
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    PDF megnyitása új ablakban
                  </a>
                </div>
              </object>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

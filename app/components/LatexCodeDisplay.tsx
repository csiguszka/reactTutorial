import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface LatexCodeDisplayProps {
  code: string;
}

export const LatexCodeDisplay: React.FC<LatexCodeDisplayProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="h-full p-4 bg-gray-50 border-r border-gray-200">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">LaTeX Kód</h3>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            title="Másolás a vágólapra"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Másolva</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Másolás</span>
              </>
            )}
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          <pre className="bg-white p-4 rounded-lg border border-gray-300 text-sm font-mono text-gray-700 whitespace-pre-wrap">
            {code}
          </pre>
        </div>
      </div>
    </div>
  );
};

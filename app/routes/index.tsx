import { useState } from 'react';
import { Link } from 'react-router';
import { chapters } from '../data/chapters';
import { Book, ChevronRight, ExternalLink } from 'lucide-react';

export default function Index() {
  const handleOverleafClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Simple approach - just open in new tab
    window.open("https://www.overleaf.com/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <a 
              href="https://www.overleaf.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleOverleafClick}
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="/overleaf.png" 
                alt="Overleaf" 
                className="h-16 w-auto"
              />
            </a>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LaTeX Workshop
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Üdvözöljük a LaTeX workshop weboldalán! Válasszon egy fejezetet a tanuláshoz.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.overleaf.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleOverleafClick}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Overleaf
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.id}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      LaTeX kód és PDF megjelenítés interaktív környezetben.
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors mt-1" />
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Interaktív
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-gray-500">
            <span>Összesen {chapters.length} fejezet</span>
            <span>•</span>
            <span>LaTeX kód + PDF megjelenítés</span>
            <span>•</span>
            <span>Fejezetek közötti navigáció</span>
          </div>
        </div>
      </div>
    </div>
  );
}

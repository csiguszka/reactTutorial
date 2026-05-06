import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { chapters } from '../data/chapters';
import { ChapterNavigation } from '../components/ChapterNavigation';
import { LatexCodeDisplay } from '../components/LatexCodeDisplay';
import { PdfViewer } from '../components/PdfViewer';
import { Home, ArrowLeft } from 'lucide-react';

export default function ChapterPage() {
  const { id } = useParams<{ id: string }>();
  const [currentChapterId, setCurrentChapterId] = useState<string>('');

  useEffect(() => {
    if (id) {
      setCurrentChapterId(id);
    }
  }, [id]);

  const currentChapter = chapters.find(ch => ch.id === currentChapterId);

  if (!currentChapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Fejezet nem található</h1>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Home className="w-4 h-4" />
            Vissza a kezdőlapra
          </Link>
        </div>
      </div>
    );
  }

  const handleNavigate = (chapterId: string) => {
    setCurrentChapterId(chapterId);
    window.history.pushState(null, '', `/chapter/${chapterId}`);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top navigation */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <Link 
            to="/"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Vissza a kezdőlapra
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {chapters.findIndex(ch => ch.id === currentChapterId) + 1} / {chapters.length}
            </span>
          </div>
        </div>
        
        <ChapterNavigation 
          currentChapterId={currentChapterId}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left side - LaTeX code */}
        <div className="w-1/2 flex-shrink-0">
          <LatexCodeDisplay code={currentChapter.latexCode} />
        </div>
        
        {/* Right side - PDF viewer */}
        <div className="w-1/2 flex-shrink-0">
          <PdfViewer pdfPath={currentChapter.pdfPath} />
        </div>
      </div>
    </div>
  );
}

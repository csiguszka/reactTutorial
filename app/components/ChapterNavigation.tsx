import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { chapters } from '../data/chapters';

interface ChapterNavigationProps {
  currentChapterId: string;
  onNavigate: (chapterId: string) => void;
}

export const ChapterNavigation: React.FC<ChapterNavigationProps> = ({
  currentChapterId,
  onNavigate,
}) => {
  const currentIndex = chapters.findIndex(ch => ch.id === currentChapterId);
  
  const goToPrevious = () => {
    if (currentIndex > 0) {
      onNavigate(chapters[currentIndex - 1].id);
    }
  };
  
  const goToNext = () => {
    if (currentIndex < chapters.length - 1) {
      onNavigate(chapters[currentIndex + 1].id);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <button
        onClick={goToPrevious}
        disabled={currentIndex <= 0}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4" />
        Előző fejezet
      </button>
      
      <span className="text-lg font-semibold text-gray-800">
        {chapters[currentIndex]?.title}
      </span>
      
      <button
        onClick={goToNext}
        disabled={currentIndex >= chapters.length - 1}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Következő fejezet
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

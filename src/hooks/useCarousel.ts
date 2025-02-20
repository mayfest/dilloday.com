import { useState, useRef, useEffect } from 'react';
import type { CarouselItem } from '@/types/carousel';

export const useCarousel = (items: CarouselItem[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(totalPages - 1);
    }
  }, [itemsPerPage, totalPages, currentPage]);

  const safelyChangeSlide = (newPageFn: () => number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentPage(newPageFn());

    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const nextPage = () => {
    safelyChangeSlide(() => (currentPage + 1) % totalPages);
  };

  const prevPage = () => {
    safelyChangeSlide(() => (currentPage - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex === currentPage || isAnimating) return;
    safelyChangeSlide(() => pageIndex);
  };

  const onAnimationComplete = () => {
    setIsAnimating(false);
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
  };

  const currentItems =
    totalPages > 0
      ? items.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        )
      : [];

  return {
    currentItems,
    nextPage,
    prevPage,
    goToPage,
    currentPage,
    totalPages,
    isAnimating,
    onAnimationComplete,
  };
};

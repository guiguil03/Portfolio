import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'relative mb-16 text-center transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      )}
    >
      <h2 className="text-4xl font-bold relative inline-block">
        {children}
        <div
          className={cn(
            'absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary transition-transform duration-700 ease-out delay-150',
            inView ? 'scale-x-100' : 'scale-x-0'
          )}
        />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
      </h2>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm" />
    </div>
  );
};

export default SectionTitle;

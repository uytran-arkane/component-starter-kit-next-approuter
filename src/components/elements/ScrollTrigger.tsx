import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// extract the Options type which is not exported
type UseInViewOptions = NonNullable<Parameters<typeof useInView>[1]>;

export interface ScrollTriggerProps extends React.PropsWithChildren, UseInViewOptions {
  as?: React.ElementType;
  className?: string;
  onEnter: () => void;
  onExit: () => void;
}

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  as = 'div',
  children,
  className,
  onEnter,
  onExit,
  ...options
}) => {
  const As = as;
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  useEffect(() => {
    if (isInView && onEnter) onEnter();
    else if (!isInView && onExit) onExit();
  }, [isInView, onEnter, onExit]);

  return (
    <As className={className} ref={ref}>
      {children}
    </As>
  );
};

export default ScrollTrigger;

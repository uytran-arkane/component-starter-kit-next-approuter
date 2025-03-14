'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

const Reveal: React.FC<React.PropsWithChildren> = ({ children }) => (
  <LazyMotion features={domAnimation}>
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'easeInOut',
        duration: 0.5,
        delay: 0.15,
      }}
    >
      {children}
    </m.div>
  </LazyMotion>
);

export default Reveal;

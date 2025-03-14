import * as React from 'react';
import classNames from 'classnames';

export interface ModuleLayoutProps extends React.PropsWithChildren {
  name: string;
  className?: string;
}

const ModuleLayout: React.FC<ModuleLayoutProps> = ({ name, children, className = '' }) => (
  <section
    className={classNames({
      [name]: true,
      [className]: !!className,
    })}
  >
    {children}
  </section>
);

export default ModuleLayout;

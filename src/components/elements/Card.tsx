import classNames from 'classnames';
import { ComponentProps, UniformText, UniformRichText } from '@uniformdev/canvas-next-rsc/component';

import ArrowLink from './ArrowLink';
import Reveal from './Reveal';

export type CardParameters = {
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
  variant?: string;
};

type CardProps = ComponentProps<CardParameters>;

const ContentCard: React.FC<CardProps> = ({ component, context, title, description, link, linkText, variant }) => {
  return (
    <div className="z-10">
      <Reveal>
        <hr
          className={classNames({
            '-mx-7 h-0.5 w-[120vw] border-0 lg:mx-0 lg:w-auto': true,
            'bg-white': variant === 'dark',
            'bg-black': variant === 'light',
          })}
        />
        <div
          className={classNames({
            'mx-5 mt-5 flex flex-col gap-5 overflow-hidden lg:mx-0': true,
            'text-white': variant === 'dark',
            'text-black': variant === 'light',
          })}
        >
          {!!title && (
            <UniformText
              parameterId="title"
              component={component}
              context={context}
              placeholder="Title Text"
              as="h2"
              className="font-display text-h3"
            />
          )}
          {!!description && (
            <div
              className={classNames({
                prose: true,
                'prose-content-light': variant === 'dark',
                'prose-content-dark': variant === 'light',
              })}
            >
              <UniformRichText
                parameterId="description"
                component={component}
                context={context}
                placeholder="Description"
              />
            </div>
          )}
          {!!linkText && !!link && <ArrowLink link={link} text={linkText} />}
        </div>
      </Reveal>
    </div>
  );
};

export default ContentCard;

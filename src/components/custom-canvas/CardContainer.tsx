import { FC } from 'react';
import { ComponentProps, UniformText, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import ModuleLayout from '../elements/ModuleLayout';
import Reveal from '../elements/Reveal';

// Here, you can add parameters to be used on the canvas side.
export type CardContainerParameters = {
  title?: string;
};
enum CardContainerSlots {
  Cards = 'cards',
}

type CardContainerProps = ComponentProps<CardContainerParameters, CardContainerSlots>;

const CardContainer: FC<CardContainerProps> = ({ component, context, slots }) => (
  <ModuleLayout name="team-roster">
    <div className={`flex w-full justify-center bg-gray-100`}>
      <div className="m-3 flex w-auto max-w-screen-xl flex-col gap-4 md:w-4/5 lg:my-6">
        <Reveal>
          <UniformText
            placeholder="Title goes here"
            parameterId="title"
            as="h2"
            component={component}
            context={context}
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <UniformSlot data={component} context={context} slot={slots.cards} />
        </div>
      </div>
    </div>
  </ModuleLayout>
);

export default CardContainer;

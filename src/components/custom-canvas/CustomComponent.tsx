import { FC } from 'react';
import { ComponentProps, UniformText, UniformRichText } from '@uniformdev/canvas-next-rsc/component';

// Here, you can add parameters to be used on the canvas side.
export type CustomComponentParameters = {
  displayName?: string;
};

type CustomComponentProps = ComponentProps<CustomComponentParameters>;

const CustomComponent: FC<CustomComponentProps> = ({ component, context }) => (
  // Your implementation of the component logic
  <div>
    <UniformText
      placeholder="Text goes here"
      parameterId="displayName"
      as="h1"
      component={component}
      context={context}
    />
    <UniformRichText
      placeholder="Text goes here"
      parameterId="displayName"
      as="h1"
      component={component}
      context={context}
    />
  </div>
);

export default CustomComponent;

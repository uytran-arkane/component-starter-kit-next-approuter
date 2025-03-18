import { FC } from 'react';
import Image from 'next/image';

import { AssetParamValue } from '@uniformdev/canvas';
import { ComponentProps, UniformRichText, UniformText } from '@uniformdev/canvas-next-rsc/component';

export type PersonParameters = {
  personName?: string;
  personPortrait?: AssetParamValue;
  personEmail?: string;
  personPhone?: string;
  personRole?: string;
  personBiography?: string;
};

type PersonProps = ComponentProps<PersonParameters>;

const Person: FC<PersonProps> = ({
  component,
  context,
  personName,
  personPortrait,
  personEmail,
  personPhone,
  personRole,
}) => (
  <div className={`w-full rounded-2xl bg-white p-5`}>
    {!!personPortrait && (
      <div className="relative mx-auto mb-4 h-40 w-40">
        <Image
          src={personPortrait[0].fields?.url?.value}
          alt="Picture"
          className="rounded-full object-cover object-center"
          fill
        />
      </div>
    )}
    {(!!personName || !!personRole || !!personEmail || !!personPhone) && (
      <div className="mb-4 flex flex-col gap-1">
        {!!personName && (
          <UniformText
            component={component}
            context={context}
            parameterId="personName"
            as="h3"
            className='mb-3 text-center font-display text-h3"'
          />
        )}
        {!!personRole && (
          <h4 className="text-center text-[18px] font-semibold uppercase text-brand-purple-600">{personRole}</h4>
        )}
        {!!personEmail && <h4 className="break-words text-center text-body text-brand-purple-600">{personEmail}</h4>}
        {!!personPhone && <h4 className="break-words text-center text-body text-brand-purple-600">{personPhone}</h4>}
      </div>
    )}
    <UniformRichText component={component} context={context} parameterId="personBiography" />
  </div>
);

export default Person;

/* eslint-disable */
// @ts-nocheck
import { FC } from 'react';
import classNames from 'classnames';
import { UniformText, UniformSlot, CompositionContext, ComponentProps } from '@uniformdev/canvas-next-rsc/component';

// Here, you can add parameters to be used on the canvas side.
type CustomComponentParameters = {
    id: string;
    source: string;
    title: string;
    description: string;
    context: CompositionContext;
  };
  // Here, you can add slots names to be used on the canvas side.
  enum VideoPlayerSlots {
    Related = 'related',
  }
  
type VideoPlayerProps = ComponentProps<CustomComponentParameters, VideoPlayerSlots>;

const VideoPlayer: FC<VideoPlayerProps> = ({ source, id, component, context, slots }) => (
    <div className={classNames('hero min-h-[500px] relative', 'text-secondary-content')}>
      <div className={classNames('hero-content text-center p-0')}>
        <div className={classNames('flex flex-col mx-1 md:mx-10')}>
          <h1 className={classNames('font-bold')}>
          <UniformText parameterId="title" component={component} context={context} />
          </h1>
          <div className={classNames('py-6')}>
          <UniformText parameterId="description" component={component} context={context} />
          </div>
          <div className='border-dashed border-4 border-gray-300 p-5 text-gray-300'>
          {source === 'YouTube' &&
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          }
          {source === 'Loom' &&
            <iframe width="640" height="360" src={`https://www.loom.com/embed/${id}`} allowFullScreen></iframe>
          }
          {!source && 
            <div className=' text-gray-300'>Select a video source</div>
          }
          </div>
          <UniformSlot data={component} context={context} slot={slots.related} />
        </div>
      </div>
    </div>
  );

  export default VideoPlayer;
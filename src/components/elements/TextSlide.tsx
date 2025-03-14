import Image from 'next/image';
import dot from 'public/timeline/dot.svg';
import down_extender from 'public/timeline/down_extender.svg';
import up_extender from 'public/timeline/up_extender.svg';

export interface TextSlideProps {
  type: number;
  text: string;
  icon: string;
  title: string;
}

const TextSlide: React.FC<TextSlideProps> = ({ type, text, icon, title }) => {
  let linePosition;
  let boxPosition;
  let extenderPosition;
  let extenderType;
  if (type === 1) {
    linePosition = 'bottom-[83px] md:bottom-[88px] w-full';
    boxPosition = 'bottom-[110px] md:bottom-[160px]';
    extenderPosition = 'bottom-[82px] right-4';
    extenderType = 'up';
  } else if (type === 2) {
    linePosition = 'top-[73px] md:top-[79px] md:w-full';
    boxPosition = 'top-28 ml-3 md:top-40';
    extenderPosition = 'right-2 top-[72px]';
    extenderType = 'down';
  } else if (type === 3) {
    linePosition = 'bottom-[194px] md:w-full';
    boxPosition = 'top-[50px]';
    extenderPosition = 'bottom-[189px] right-4 w-fit';
    extenderType = 'up';
  } else if (type === 4) {
    linePosition = 'top-[227px] md:w-full';
    boxPosition = 'bottom-3';
    extenderPosition = 'right-4 top-[223px]';
    extenderType = 'down';
  } else if (type === 0) {
    linePosition = 'bottom-[83px] md:bottom-[88px] md:w-full ';
    boxPosition = 'bottom-[110px] md:bottom-[160px]';
    extenderPosition = 'bottom-[82px] right-10';
    extenderType = 'up';
  } else if (type === 9) {
    linePosition = 'bottom-[83px] -ml-6 md:ml-0 md:bottom-[88px] md:w-full';
    boxPosition = 'bottom-[110px] md:bottom-[160px]';
    extenderPosition = 'bottom-[82px] right-10';
    extenderType = 'up';
  } else {
    return <div>Invalid type</div>;
  }

  return (
    <div className="relative flex h-[650px] w-full min-w-[300px] justify-center md:inline md:min-w-[500px]">
      {type === 0 && (
        <Image
          src={dot}
          width={30}
          height={30}
          alt="beginning dot"
          className="absolute -left-5 bottom-[75px] md:-left-4 md:bottom-[80px]"
          unoptimized
        />
      )}
      {type === 9 && (
        <Image
          src={dot}
          width={30}
          height={30}
          alt="beginning dot"
          className="absolute bottom-[75px] right-3 md:-right-4 md:bottom-[80px]"
          unoptimized
        />
      )}
      <div className={`absolute ${linePosition} -ml-1 h-[14px] w-[22em] bg-white`} />
      <div className={`absolute ${boxPosition}`}>
        <div className="flex-col justify-center md:flex md:h-[350px]">
          <div className="w-[350px] rounded-lg border-2 border-gray-100/50 p-4 md:w-[450px]">
            <h2 className="font-body text-h3 relative mb-3 pb-1 text-gray-100">{title}</h2>
            <p className="font-body text-body relative text-gray-100">{text}</p>
          </div>
          {icon !== '' && (
            <div className="-ml-1 -mt-4 w-fit rounded-full border-4 border-black bg-white p-3">
              <Image src={icon} height={45} width={45} alt="icon" unoptimized />
            </div>
          )}
        </div>
      </div>
      <div className={`collapse absolute ${extenderPosition} md:visible`}>
        <Image
          src={extenderType === 'up' ? up_extender : down_extender}
          height={25}
          width={28}
          alt="extender"
          unoptimized
        />
      </div>
    </div>
  );
};

export default TextSlide;

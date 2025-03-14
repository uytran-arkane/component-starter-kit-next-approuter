import Image from 'next/image';
import elbow_02 from '../../public/timeline/elbow02.svg';
import elbow_02m from '../../public/timeline/elbow02m.svg';
import elbow_03 from '../../public/timeline/elbow03.svg';
import elbow_04 from '../../public/timeline/elbow04.svg';
import elbow_09 from '../../public/timeline/elbow09.svg';
import elbow_12m from '../../public/timeline/elbow12m.svg';
import elbow_13 from '../../public/timeline/elbow13.svg';
import elbow_19 from '../../public/timeline/elbow19.svg';
import elbow_21 from '../../public/timeline/elbow21.svg';
import elbow_21m from '../../public/timeline/elbow21m.svg';
import elbow_22 from '../../public/timeline/elbow22.svg';
import elbow_23 from '../../public/timeline/elbow23.svg';
import elbow_24 from '../../public/timeline/elbow24.svg';
import elbow_29 from '../../public/timeline/elbow29.svg';
import elbow_31 from '../../public/timeline/elbow31.svg';
import elbow_32 from '../../public/timeline/elbow32.svg';
import elbow_33 from '../../public/timeline/elbow33.svg';
import elbow_34 from '../../public/timeline/elbow34.svg';
import elbow_39 from '../../public/timeline/elbow39.svg';
import elbow_41 from '../../public/timeline/elbow41.svg';
import elbow_42 from '../../public/timeline/elbow42.svg';
import elbow_43 from '../../public/timeline/elbow43.svg';
import elbow_44 from '../../public/timeline/elbow44.svg';

export interface TextSlideProps {
  left: number;
  right: number;
  mobile?: boolean;
}

const elbowImages: Record<string, string> = {
  '01': elbow_19,
  '02': elbow_02,
  '03': elbow_03,
  '04': elbow_04,
  '09': elbow_09,
  '22': elbow_22,
  '24': elbow_24,
  '29': elbow_29,
  '39': elbow_39,
  '12': elbow_02,
  '19': elbow_19,
  '21': elbow_21,
  '23': elbow_23,
  '32': elbow_32,
  '33': elbow_33,
  '31': elbow_31,
  '34': elbow_34,
  '42': elbow_42,
  '43': elbow_43,
  '44': elbow_44,
  '49': elbow_41,
  '02m': elbow_02m,
  '21m': elbow_21m,
  '12m': elbow_12m,
  '13': elbow_13,
  '11': elbow_19,
};

const TextSlide: React.FC<TextSlideProps> = ({ left, right, mobile = false }) => {
  const combinedKey = `${left}${right}${mobile ? 'm' : ''}`;
  const selectedElbowImage = elbowImages[combinedKey];
  if (selectedElbowImage) {
    return <Image src={selectedElbowImage} className="-ml-3 h-[650px] w-[694px] md:h-full" alt="elbow" unoptimized />;
  }
  return <div>Invalid combination of left and right</div>;
};

export default TextSlide;

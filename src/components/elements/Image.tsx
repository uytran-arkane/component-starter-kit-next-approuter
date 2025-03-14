import NextImage, { ImageProps as NextImageProps } from 'next/image';

function determineUnoptimized(src: NextImageProps['src'], unoptimized?: boolean) {
  // if unoptimized is manually set, honor it
  if (typeof unoptimized === 'boolean') return unoptimized;
  if (typeof src === 'string') {
    // set unoptimized if file type is svg
    if (src.includes('.svg')) return true;
    let url: URL | null = null;
    try {
      url = new URL(src);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      /* do nothing */
    }
    // return unoptimized for local images
    if (!url) return true;
  }
  // else return unoptimized
  return unoptimized;
}

const Image: React.FC<NextImageProps> = ({ src, unoptimized, ...props }) => (
  <NextImage src={src} unoptimized={determineUnoptimized(src, unoptimized)} {...props} />
);

export default Image;

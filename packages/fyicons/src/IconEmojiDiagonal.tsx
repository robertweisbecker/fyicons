import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiDiagonal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiDiagonal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM11.3604 9.26953C11.6253 9.19251 11.9032 9.3454 11.9805 9.61035C12.0575 9.87531 11.9046 10.1532 11.6396 10.2305L5.63965 11.9805C5.37469 12.0575 5.09681 11.9046 5.01953 11.6396C4.94251 11.3747 5.0954 11.0968 5.36035 11.0195L11.3604 9.26953ZM5.875 6C6.35818 6 6.74989 6.44783 6.75 7C6.75 7.55228 6.35825 8 5.875 8C5.39175 8 5 7.55228 5 7C5.00011 6.44783 5.39182 6 5.875 6ZM10.125 6C10.6082 6 10.9999 6.44783 11 7C11 7.55228 10.6082 8 10.125 8C9.64175 8 9.25 7.55228 9.25 7C9.25011 6.44783 9.64182 6 10.125 6Z" fill="currentColor" /></SvgRoot>;
});
export default IconEmojiDiagonal;

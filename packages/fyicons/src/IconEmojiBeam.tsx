import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiBeam = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiBeam(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-beam"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m4.25 6c.414 0 .756.338.694.747l-.054.298a5 5 0 0 1-2.977 3.574 5 5 0 0 1-3.597.089l-.23-.089a5 5 0 0 1-1.443-.914l-.178-.17a5 5 0 0 1-.985-1.396l-.1-.226a5 5 0 0 1-.324-1.166c-.058-.384.238-.704.617-.743L3.75 8zm-7.078 2.828a4 4 0 0 0 5.656 0q.038-.038.074-.078H5.098q.036.04.074.078M4.129 9a4 4 0 0 0 .275.75h7.192A4 4 0 0 0 11.87 9zM6 5c.69 0 1.25.672 1.25 1.5l-.002.071c-.005.121-.182.147-.267.06C6.753 6.4 6.398 6.25 6 6.25c-.399 0-.754.15-.982.382-.085.086-.262.06-.267-.06L4.75 6.5C4.75 5.672 5.31 5 6 5m4.25 0c.69 0 1.25.672 1.25 1.5l-.002.071c-.005.121-.182.147-.267.06-.228-.232-.582-.381-.981-.381s-.754.15-.982.382c-.085.086-.262.06-.267-.06L9 6.5c0-.828.56-1.5 1.25-1.5" /></SvgRoot>;
});
export default IconEmojiBeam;

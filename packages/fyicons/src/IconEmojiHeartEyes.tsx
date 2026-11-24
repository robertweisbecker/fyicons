import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiHeartEyes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiHeartEyes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-heart-eyes"><path stroke="currentColor" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /><path fill="currentColor" d="M12.244 5.575c-.627-.17-1.225.448-1.225.448s-.202-.834-.828-.998c-.623-.163-1.162.265-1.318.812-.308 1.082 1.37 3.084 1.37 3.084s2.444-.898 2.736-1.984c.148-.553-.11-1.193-.735-1.362m-8.468.065c.627-.17 1.225.448 1.225.448s.202-.834.828-.998c.623-.163 1.162.265 1.318.811.308 1.082-1.37 3.085-1.37 3.085S3.333 8.088 3.041 7c-.148-.552.11-1.192.735-1.361m7.8 4.431c.223-.09.456.137.335.344C11.352 11.364 10.088 13 8 13s-3.352-1.636-3.91-2.586c-.122-.207.111-.435.334-.345.712.288 1.956.666 3.576.666s2.864-.378 3.576-.666" />{props.children}</SvgRoot>;
});
export default IconEmojiHeartEyes;

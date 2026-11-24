import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAlienFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAlienFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-alien-fill"><path fill="currentColor" d="M8.004 1c1.618.013 3.343.492 4.677 1.404C14.022 3.322 15 4.706 15 6.5c0 4.65-3.894 7.241-5.743 8.215a2.69 2.69 0 0 1-2.514 0C4.894 13.741 1 11.15 1 6.5c0-1.686.909-3.08 2.218-4.031C4.523 1.52 6.255.986 8.004 1m2.705 10.476c.2-.235-.032-.554-.331-.48-.618.15-1.472.317-2.253.317-.78 0-1.635-.166-2.253-.318-.3-.073-.53.246-.331.48.56.658 1.502 1.525 2.584 1.525s2.024-.867 2.584-1.524m1.225-5.413c-.796-.23-1.547.212-2.07.718-1.247 1.206-1.029 2.605-.076 3.068.662.321 1.417.089 2.013-.312 1.617-1.088 1.536-3.068.133-3.474m-5.797.718c-.524-.506-1.275-.948-2.07-.718-1.404.406-1.485 2.386.132 3.474.596.4 1.351.633 2.013.312.953-.463 1.171-1.862-.075-3.068" />{props.children}</SvgRoot>;
});
export default IconEmojiAlienFill;

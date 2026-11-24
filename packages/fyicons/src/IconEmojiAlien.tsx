import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAlien = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAlien(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-alien"><path stroke="currentColor" d="M14.5 6.5c0 4.343 -3.645 6.808 -5.476 7.772c-0.645 0.34 -1.403 0.34 -2.048 0C5.146 13.308 1.5 10.843 1.5 6.5c0 -2.98 3.198 -5.026 6.5 -5C11.063 1.524 14.5 3.321 14.5 6.5z" /><path fill="currentColor" d="M8 13c-.875 0-1.636-.787-2.081-1.373-.174-.23.036-.526.32-.475.49.087 1.153.18 1.761.18s1.27-.093 1.761-.18c.284-.05.495.246.32.475C9.636 12.213 8.875 13 8 13M4.066 6.062c-1.403.406-1.484 2.387.134 3.475.595.401 1.35.633 2.012.312.953-.463 1.171-1.862-.075-3.068-.524-.506-1.275-.949-2.07-.719m7.867 0c1.403.406 1.484 2.387-.134 3.475-.595.401-1.35.633-2.012.312-.953-.463-1.171-1.862.075-3.068.524-.506 1.275-.949 2.07-.719" />{props.children}</SvgRoot>;
});
export default IconEmojiAlien;

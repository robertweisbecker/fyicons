import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutPinned = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutPinned(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-pinned"><path fill="currentColor" d="M5.5 2a.5.5 0 0 1 0 1c-.483 0-.667.001-.812.024a2 2 0 0 0-1.664 1.664C3.001 4.833 3 5.017 3 5.5v4c0 .708 0 1.21.032 1.602.032.385.091.621.186.806a2 2 0 0 0 .874.874c.185.095.42.154.806.186C5.29 13 5.792 13 6.5 13h4c.483 0 .667-.001.813-.024a2 2 0 0 0 1.663-1.664c.023-.145.024-.329.024-.812a.5.5 0 0 1 1 0c0 .445.001.726-.037.969a3 3 0 0 1-2.494 2.494c-.243.038-.524.037-.969.037h-4c-.692 0-1.24 0-1.683-.036-.447-.037-.83-.113-1.18-.291a3 3 0 0 1-1.31-1.31c-.178-.35-.254-.733-.29-1.18C2 10.74 2 10.192 2 9.5v-4c0-.445-.001-.727.037-.97A3 3 0 0 1 4.53 2.037C4.773 2 5.055 2 5.5 2" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.069 3.069 12.93.93a.5.5 0 0 0-.77.076l-1.513 2.27a.5.5 0 0 1-.416.223h-1.92a.75.75 0 0 0-.53 1.28l3.438 3.44a.75.75 0 0 0 1.28-.53l.001-1.922a.5.5 0 0 1 .223-.416l2.27-1.514a.5.5 0 0 0 .076-.77" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.5 6.5-3 3" />{props.children}</SvgRoot>;
});
export default IconLayoutPinned;

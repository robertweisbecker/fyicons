import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="play"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.89 7.123 4.98 2.807a1 1 0 0 0-1.479.878v8.63a1 1 0 0 0 1.479.879l7.911-4.316a1 1 0 0 0 0-1.755" />{props.children}</SvgRoot>;
});
export default IconPlay;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearchSparkle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearchSparkle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="search-sparkle"><path fill="currentColor" d="M6.5 1a5.5 5.5 0 0 1 4.53 8.616l.427.427 3.251 3.25a1 1 0 0 1-1.414 1.415L9.616 11.03A5.5 5.5 0 1 1 6.5 1m0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" /><path fill="currentColor" d="M6.31 4.143c.035-.215.344-.215.38 0A2.64 2.64 0 0 0 8.856 6.31c.215.036.215.345 0 .381A2.64 2.64 0 0 0 6.69 8.856c-.036.215-.345.215-.38 0A2.64 2.64 0 0 0 4.142 6.69c-.215-.036-.215-.345 0-.38A2.635 2.635 0 0 0 6.31 4.142" />{props.children}</SvgRoot>;
});
export default IconSearchSparkle;

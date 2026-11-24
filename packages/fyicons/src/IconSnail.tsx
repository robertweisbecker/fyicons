import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSnail = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSnail(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="snail"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.5c0-2.18 1.094-2.957 2-3 1.108-.053 2.39.99 2 3.25-.37 2.15-1.968 3.75-3.886 3.75H1.5c0-3 4.25-1.75 6-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 8c0-3.5-2.624-4.608-4.444-4.5C4.172 3.612 2.588 4.994 2.5 7c0 2.027 1.715 3.557 3.5 3.5 1.39-.045 2.427-1.04 2.5-2.25.058-.962-.65-1.709-1.5-1.75-.757-.037-1.3.48-1.5 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="m14 5.75.5-2.25" /><path fill="currentColor" d="M11.5 4.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M11.5 5.5v-2" /><path stroke="currentColor" strokeLinecap="round" d="M10.5 8.5h-.114a3.08 3.08 0 0 0-2.886 2" />{props.children}</SvgRoot>;
});
export default IconSnail;

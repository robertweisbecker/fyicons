import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHighlighter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHighlighter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="highlighter"><path fill="currentColor" d="M10.617 1.537a2 2 0 0 1 2.724.097l.952.951a2 2 0 0 1 0 2.83l-5.94 5.938a.5.5 0 0 1-.195.121l-2.888.963-1.289 1.29a.75.75 0 0 1-.866.14l-1.838-.92a.5.5 0 0 1-.131-.8l1.917-1.917.963-2.888a.5.5 0 0 1 .147-.22zM2.344 12.363l1.058.528.891-.892-.793-.793zm1.728-1.998 1.063 1.063 1.94-.646-2.357-2.357zm8.562-8.024a1 1 0 0 0-1.362-.049L5.234 7.527 8 10.293l5.585-5.586a1 1 0 0 0 0-1.415z" />{props.children}</SvgRoot>;
});
export default IconHighlighter;

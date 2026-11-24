import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterGFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterGFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-g-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM7.707 4.852C6.167 4.942 4.994 6.276 5 7.88c.006 1.677 1.245 3.341 3.146 3.21.855-.058 1.516-.474 1.931-.833a.5.5 0 0 0 .173-.378V8.5a.5.5 0 0 0-.5-.5h-1.7a.5.5 0 0 0 0 1h1.2v.638c-.304.224-.703.424-1.172.456-1.167.08-2.073-.947-2.078-2.217-.004-1.123.803-1.97 1.767-2.027.54-.032 1.045.187 1.43.525a.5.5 0 1 0 .66-.75c-.542-.477-1.297-.824-2.15-.773" />{props.children}</SvgRoot>;
});
export default IconSquareLetterGFill;

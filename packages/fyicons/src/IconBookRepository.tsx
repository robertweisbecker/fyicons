import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookRepository = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookRepository(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-repository"><path fill="currentColor" d="M9 14.698a.25.25 0 0 1-.415.189L7.5 13.935l-1.085.952A.25.25 0 0 1 6 14.698V12h3zM13 2a1 1 0 0 1 1 1v7.5l-.003.023a.5.5 0 0 1-.013.095q-.007.027-.016.05-.005.018-.012.034l-.031.058-.013.021a.5.5 0 0 1-.057.07l-.018.015-.049.041-.035.022-.03.018a1.177 1.177 0 0 0 0 2.106.5.5 0 0 1-.223.947H10v-1h2.313a2.21 2.21 0 0 1 0-2H4a1 1 0 1 0 0 2h1v1H4a2 2 0 0 1-1.982-2.25H2V5.5A3.5 3.5 0 0 1 5.5 2zM5.5 3A2.5 2.5 0 0 0 3 5.5v4.77A2 2 0 0 1 4 10h9V3z" /></SvgRoot>;
});
export default IconBookRepository;

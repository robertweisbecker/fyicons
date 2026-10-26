import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlugAtSign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlugAtSign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_297_4809)"}><path fill="currentColor" d="M4.913 1.718a7.002 7.002 0 0 0-1.294 11.74 7 7 0 0 0 7.073 1.004.5.5 0 0 0-.385-.923 6 6 0 0 1-6.062-.86 6 6 0 1 1 8.387-8.493C13.498 5.238 14 6.45 14 7.873c0 .701-.19 1.246-.472 1.604-.276.35-.651.542-1.096.542-.46 0-.951-.282-1.374-.641q-.116-.101-.215-.199a2.79 2.79 0 0 0-1.056-3.532l-1.07-.669a.945.945 0 0 0-1.285.275l-1.312-.82a.5.5 0 0 0-.53.849L6.9 6.1l-.97 1.55-1.31-.818a.5.5 0 0 0-.53.848l1.315.822a.945.945 0 0 0 .35 1.212l1.07.67a2.79 2.79 0 0 0 3.436-.378q.072.066.15.133c.471.4 1.195.878 2.02.878.766 0 1.425-.343 1.881-.921.45-.57.688-1.348.688-2.223 0-1.683-.6-3.114-1.595-4.323a7 7 0 0 0-8.492-1.833m4.343 4.777a1.793 1.793 0 0 1-1.9 3.041l-1.024-.64 1.9-3.04z" /></g><defs><clipPath id={idPrefix + "clip0_297_4809"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconPlugAtSign;

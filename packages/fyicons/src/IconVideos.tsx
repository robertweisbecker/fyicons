import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVideos = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVideos(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="videos"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 5.5c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06c.052.192.052.424.052.889v3.6c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.656c-.32.163-.74.163-1.581.163H5.5c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06c-.052-.191-.052-.424-.052-.889" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.9 11.5h6.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581V5.9c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656c-.32-.163-.74-.163-1.581-.163H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v3.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163" /><path fill="currentColor" d="M5 9.404V5.596a.5.5 0 0 1 .741-.438l3.462 1.904a.5.5 0 0 1 0 .876L5.741 9.842A.5.5 0 0 1 5 9.404" />{props.children}</SvgRoot>;
});
export default IconVideos;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparklesThree = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparklesThree(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sparkles-three"><path fill="currentColor" d="M3.261 10.254a.25.25 0 0 1 .477 0l.403 1.277a.5.5 0 0 0 .326.327l1.278.403a.25.25 0 0 1 0 .477l-1.278.404a.5.5 0 0 0-.326.326l-.403 1.276a.25.25 0 0 1-.477 0l-.403-1.276a.5.5 0 0 0-.326-.327l-1.278-.403a.25.25 0 0 1 0-.477l1.278-.403a.5.5 0 0 0 .326-.327zM9.5 3a.5.5 0 0 1 .485.38 5 5 0 0 0 3.636 3.635.501.501 0 0 1 0 .97 5 5 0 0 0-3.636 3.636.501.501 0 0 1-.96.037l-.05-.153a5.5 5.5 0 0 0-3.48-3.48l-.154-.05a.501.501 0 0 1 .037-.96 5 5 0 0 0 3.636-3.636A.5.5 0 0 1 9.5 3m0 1.903a6 6 0 0 1-2.65 2.625c1.11.6 2.02 1.511 2.621 2.62a6 6 0 0 1 2.624-2.649A6 6 0 0 1 9.5 4.902m3.761-3.647a.25.25 0 0 1 .477 0l.163.517a.5.5 0 0 0 .326.326l.518.164a.25.25 0 0 1 0 .476l-.518.164a.5.5 0 0 0-.326.326l-.163.517a.25.25 0 0 1-.477 0l-.163-.517a.5.5 0 0 0-.326-.326l-.518-.164a.25.25 0 0 1 0-.476l.518-.164a.5.5 0 0 0 .326-.326z" />{props.children}</SvgRoot>;
});
export default IconSparklesThree;

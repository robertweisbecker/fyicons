import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBirdRaven = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBirdRaven(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bird-raven"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.25 12.5H5.5a3 3 0 0 1-3-3v-3h-1l1.309-3.271A2.75 2.75 0 0 1 5.362 1.5H7.5v1h1.146a3 3 0 0 1 2.683 1.658l.171.342-4 1v1.038c0 .531.43.962.962.962 1.176 0 2.18.85 2.373 2.01l.665 3.99h-1.292a4 4 0 0 1-3.714-2.514L5.5 8.5" /><circle cx={5.5} cy={3.5} r={0.75} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 11.5h3l-1-2h-1v-3l-2 2m-6 6 2.5-2 .5 2" /></SvgRoot>;
});
export default IconBirdRaven;

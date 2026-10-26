import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLanguage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLanguage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.603 5.32a.752.752 0 0 1 1.295 0l.052.113 3.017 7.888a.5.5 0 0 1-.934.358L12.01 11H8.49l-1.024 2.679a.5.5 0 0 1-.934-.358L9.55 5.433zM8.873 10h2.754L10.25 6.4zM5.5 1.5A.5.5 0 0 1 6 2v1h2.5a.5.5 0 0 1 0 1H7.484c-.077 1.277-.458 2.36-1.159 3.198.282.19.64.375 1.131.596a.5.5 0 0 1-.412.912c-.593-.268-1.063-.512-1.457-.807-.802.606-1.827.97-3.034 1.098a.5.5 0 0 1-.106-.994c1-.106 1.8-.387 2.413-.812-.311-.396-.569-.873-.853-1.48a.5.5 0 0 1 .905-.423c.257.548.467.927.687 1.22.501-.623.81-1.454.883-2.508H2.5a.5.5 0 0 1 0-1H5V2a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconLanguage;

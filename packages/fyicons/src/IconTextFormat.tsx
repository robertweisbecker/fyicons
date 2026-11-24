import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextFormat = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextFormat(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-format"><path fill="currentColor" d="M5.354 2.28a.752.752 0 0 1 1.286.015l.052.111L8.967 8.32a.5.5 0 0 1-.934.36l-.271-.707h-3.68l-1.12 2.718a.5.5 0 0 1-.924-.381l3.26-7.92zm-.86 4.693h2.883L5.984 3.352z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 8-4.083 4.083a2.5 2.5 0 0 1-.977.604l-1.966.655a.25.25 0 0 1-.316-.316l.655-1.966a2.5 2.5 0 0 1 .604-.977L11 6a1.414 1.414 0 1 1 2 2" />{props.children}</SvgRoot>;
});
export default IconTextFormat;

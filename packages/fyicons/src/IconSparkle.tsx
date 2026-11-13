import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sparkle"><path fill="currentColor" d="M6.674 1.903C7.1.627 8.905.627 9.331 1.903l.796 2.39a2.5 2.5 0 0 0 1.582 1.582l2.39.797c1.276.425 1.276 2.23 0 2.656l-2.39.797a2.5 2.5 0 0 0-1.582 1.58l-.796 2.391c-.426 1.277-2.231 1.277-2.657 0l-.797-2.39a2.5 2.5 0 0 0-1.58-1.581l-2.391-.797c-1.277-.426-1.277-2.23 0-2.656l2.39-.797a2.5 2.5 0 0 0 1.581-1.581zm1.708.316a.4.4 0 0 0-.76 0L6.827 4.61a3.5 3.5 0 0 1-2.213 2.213l-2.39.797a.4.4 0 0 0 0 .76l2.39.797a3.5 3.5 0 0 1 2.213 2.212l.797 2.391a.4.4 0 0 0 .76 0l.796-2.39a3.5 3.5 0 0 1 2.213-2.213l2.39-.797a.4.4 0 0 0 0-.76l-2.39-.797A3.5 3.5 0 0 1 9.18 4.61z" /></SvgRoot>;
});
export default IconSparkle;

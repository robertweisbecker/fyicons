import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHome = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHome(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.707 1.438a2 2 0 0 1 2.585 0l5.288 4.476A1.185 1.185 0 0 1 13.816 8H13v4.25A1.75 1.75 0 0 1 11.25 14h-6.5A1.75 1.75 0 0 1 3 12.25L3.001 8h-.818a1.183 1.183 0 0 1-.764-2.086zm1.939.764a1 1 0 0 0-1.292 0l-5.29 4.476A.183.183 0 0 0 2.182 7h1.819v.5L4 12.25c0 .414.336.75.75.75H6v-2.951c0-.132 0-.261.009-.37.01-.113.031-.249.1-.384a1 1 0 0 1 .437-.437c.135-.069.27-.09.385-.1.108-.009.237-.009.369-.009h1.4c.132 0 .26 0 .37.009.114.01.249.031.384.1a1 1 0 0 1 .437.437c.069.135.09.27.1.385.01.108.009.237.009.369V13h1.25a.75.75 0 0 0 .75-.75V7.5l-.001-.5h1.817a.183.183 0 0 0 .119-.322zM7.013 9.754h-.008v.008C7 9.82 7 9.902 7 10.049v2.95h2v-2.95c0-.148 0-.23-.005-.287v-.008h-.008a4 4 0 0 0-.287-.005H7.3c-.148 0-.23 0-.287.005" /></SvgRoot>;
});
export default IconHome;

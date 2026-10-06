import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPencil = React.forwardRef<SVGSVGElement, IconProps>(function IconPencil(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.0859 2.20728C10.867 1.42638 12.133 1.42638 12.9141 2.20728L13.793 3.08618C14.5738 3.86721 14.5738 5.13332 13.793 5.91431L7.2959 12.4114C6.60754 13.0995 5.71451 13.5461 4.75098 13.6838L2.57031 13.9954C2.41473 14.0174 2.25764 13.9649 2.14648 13.8538C2.03536 13.7426 1.98288 13.5855 2.00488 13.4299L2.31641 11.2493C2.45409 10.2857 2.90077 9.39271 3.58887 8.70435L10.0859 2.20728ZM4.2959 9.41138C3.76076 9.94677 3.41371 10.6415 3.30664 11.3909L3.08887 12.9104L4.60938 12.6936C5.35876 12.5865 6.05347 12.2395 6.58887 11.7043L11.793 6.50024L9.5 4.20728L4.2959 9.41138ZM12.207 2.91431C11.8165 2.52393 11.1835 2.52393 10.793 2.91431L10.207 3.50024L12.5 5.79321L13.0859 5.20728C13.4763 4.81681 13.4762 4.18372 13.0859 3.79321L12.207 2.91431Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconPencil;

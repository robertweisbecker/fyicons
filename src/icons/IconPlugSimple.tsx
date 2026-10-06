import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPlugSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconPlugSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={`url(#${idPrefix}clip0_297_4804)`}><path d="M14.3536 4.14677C14.5485 4.34195 14.5484 4.65867 14.3536 4.85388L11.9567 7.25072L12.1452 7.43924C12.7311 8.025 12.731 8.97474 12.1452 9.56056L10.3519 11.3539C8.8956 12.8097 6.60548 12.9187 5.02237 11.6839L2.85271 13.8536C2.65757 14.0486 2.34155 14.0491 2.1463 13.8543C1.95104 13.6591 1.95046 13.3418 2.14561 13.1465L4.31527 10.9768C3.08069 9.39349 3.18932 7.10205 4.64534 5.64592L6.43797 3.85329C7.02363 3.26798 7.97357 3.26806 8.55929 3.85329L8.74918 4.04319L11.146 1.64635C11.3412 1.45115 11.6579 1.45127 11.8531 1.64635C12.0484 1.84161 12.0484 2.15819 11.8531 2.35345L9.45629 4.7503L11.2496 6.54361L13.6465 4.14677C13.8417 3.95182 14.1584 3.95161 14.3536 4.14677ZM7.85218 4.5604C7.65699 4.36569 7.34021 4.36561 7.14507 4.5604L5.35245 6.35303C4.16719 7.53843 4.16731 9.46128 5.35245 10.6468C6.53779 11.8318 8.45933 11.8317 9.64481 10.6468L11.4381 8.85345C11.6333 8.65818 11.6334 8.34159 11.4381 8.14634L7.85218 4.5604Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_297_4804"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></SvgRoot>;
});
export default IconPlugSimple;

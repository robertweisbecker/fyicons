import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleDollarFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleDollarFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-dollar-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m.046 3a.5.5 0 0 0-.5.5v.428c-.67.106-1.264.534-1.46 1.3-.15.595.039 1.142.408 1.547.36.395.888.66 1.464.775.5.1.75.226.877.323.11.085.151.164.185.26a.7.7 0 0 1-.07.539c-.099.17-.324.384-.875.426-.3.022-.8-.106-1.289-.558a.5.5 0 1 0-.678.734c.456.42.963.671 1.438.772v.454a.5.5 0 0 0 1 0v-.464c.61-.132 1.029-.45 1.268-.864.27-.468.278-1 .15-1.368a1.5 1.5 0 0 0-.522-.725c-.292-.224-.705-.393-1.288-.51-.414-.083-.734-.263-.92-.467q-.264-.291-.177-.626c.082-.325.314-.51.655-.562.362-.054.832.055 1.248.362a.5.5 0 0 0 .594-.803 3 3 0 0 0-1.008-.487V4.5a.5.5 0 0 0-.5-.5" />{props.children}</SvgRoot>;
});
export default IconCircleDollarFill;

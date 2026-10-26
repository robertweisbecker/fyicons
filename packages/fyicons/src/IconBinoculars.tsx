import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBinoculars = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBinoculars(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.243 3c.966 0 1.824.618 2.13 1.534l1.443 4.333q.147.446.174.913.009.11.01.22a3 3 0 1 1-6 0V5.243q0-.033.003-.065A3 3 0 0 0 8 5a3 3 0 0 0-1.005.178L7 5.265V10l-.004.154A3 3 0 0 1 1 10v-.5c0-.389.068-.775.201-1.14l1.406-3.87a2.265 2.265 0 0 1 4.13-.281A4 4 0 0 1 8 4c.466 0 .888.085 1.254.206A2.24 2.24 0 0 1 11.244 3M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7.243-4c-.462 0-.866.252-1.08.627a4.5 4.5 0 0 1 .626.459l.044.04.014.014.007.006.064.079a.5.5 0 0 1-.77.63l-.004-.004a2 2 0 0 0-.136-.117L10 5.73v2.039a2.99 2.99 0 0 1 3.227-.504l-.804-2.413A1.24 1.24 0 0 0 11.243 4M4.735 4c-.531 0-1.005.333-1.187.832L2.64 7.328a2.99 2.99 0 0 1 3.36.44v-2.04l-.008.006a3 3 0 0 0-.136.117l-.002.003a.5.5 0 1 1-.708-.708l.007-.006.014-.013.044-.041q.056-.052.156-.133c.113-.09.269-.204.462-.322A1.26 1.26 0 0 0 4.735 4" /></SvgRoot>;
});
export default IconBinoculars;

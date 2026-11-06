import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber3Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber3Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="number3-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8 4.915c-.705 0-1.376.325-1.743.865a.5.5 0 0 0 .826.563c.158-.232.499-.428.917-.428.634 0 1.003.422 1.003.793 0 .348-.325.74-.888.787L8 7.5l-.1.01a.5.5 0 0 0 .1.99c.634 0 1.003.422 1.003.793 0 .37-.37.792-1.003.792-.418 0-.76-.195-.917-.427a.5.5 0 1 0-.826.562c.367.54 1.038.865 1.743.865 1.043 0 2.003-.736 2.003-1.792 0-.528-.24-.977-.61-1.293.37-.316.61-.764.61-1.292 0-1.056-.96-1.793-2.003-1.793" /></SvgRoot>;
});
export default IconNumber3Fill;

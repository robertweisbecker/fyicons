import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGlobeStand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGlobeStand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="globe-stand"><path d="M12.7412 10.7426C11.616 11.8679 10.0898 12.5 8.49853 12.5C6.90724 12.5 5.38111 11.8679 4.25589 10.7426C3.13068 9.61742 2.49854 8.0913 2.49854 6.5C2.49854 4.9087 3.13068 3.38258 4.25589 2.25736" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" /><path d="M7.5 12.75V14.5M7.5 14.5H9.5M7.5 14.5H5.5" stroke="currentColor" strokeLinecap="round" /><circle cx={8.49951} cy={6.49951} r={4} stroke="currentColor" /><path d="M3.64645 2.35355L4 2.70711L4.70711 2L4.35355 1.64645L4 2L3.64645 2.35355ZM3.85355 1.14645C3.65829 0.951184 3.34171 0.951184 3.14645 1.14645C2.95118 1.34171 2.95118 1.65829 3.14645 1.85355L3.5 1.5L3.85355 1.14645ZM4 2L4.35355 1.64645L3.85355 1.14645L3.5 1.5L3.14645 1.85355L3.64645 2.35355L4 2Z" fill="currentColor" /><path d="M13.3536 10.6464L13 10.2929L12.2929 11L12.6464 11.3536L13 11L13.3536 10.6464ZM13.1464 11.8536C13.3417 12.0488 13.6583 12.0488 13.8536 11.8536C14.0488 11.6583 14.0488 11.3417 13.8536 11.1464L13.5 11.5L13.1464 11.8536ZM13 11L12.6464 11.3536L13.1464 11.8536L13.5 11.5L13.8536 11.1464L13.3536 10.6464L13 11Z" fill="currentColor" /></SvgRoot>;
});
export default IconGlobeStand;

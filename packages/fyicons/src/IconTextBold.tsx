import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextBold = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextBold(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-bold"><path fill="currentColor" d="M8.688 2c1.065 0 1.926.387 2.516 1.02.58.621.858 1.435.858 2.23s-.278 1.609-.858 2.23q-.09.097-.19.185.275.186.504.417A3.43 3.43 0 0 1 12.5 10.5a3.43 3.43 0 0 1-.982 2.418C10.85 13.592 9.885 14 8.688 14H4.75a.75.75 0 0 1-.75-.75V2.75A.75.75 0 0 1 4.75 2zM5.5 12.5h3.188c.843 0 1.41-.28 1.763-.637.362-.365.549-.859.549-1.363s-.187-.998-.549-1.363c-.354-.358-.92-.637-1.764-.637H5.5zm0-5.5h3.188l.246-.01c.548-.05.925-.266 1.174-.533.295-.316.454-.752.454-1.207s-.159-.891-.454-1.207c-.284-.305-.737-.543-1.42-.543H5.5z" />{props.children}</SvgRoot>;
});
export default IconTextBold;

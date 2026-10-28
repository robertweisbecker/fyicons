import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeBirdhouse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeBirdhouse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="home-birdhouse"><path fill="currentColor" d="M7.555 2.208a.75.75 0 0 1 .787-.065l.104.065 6.085 4.507c.463.344.632.952.425 1.48l-.046.104c-.215.43-.654.7-1.133.7h-.866l-.76 3.794A1.5 1.5 0 0 1 10.682 14H5.32a1.5 1.5 0 0 1-1.47-1.207L3.09 9h-.866c-.42 0-.808-.207-1.042-.546l-.09-.154a1.27 1.27 0 0 1 .378-1.585zm-5.49 5.31a.27.27 0 0 0-.08.335l.043.062c.05.054.12.085.196.085H3.5l.087.007a.5.5 0 0 1 .404.395l.839 4.196a.5.5 0 0 0 .49.401h5.361l.088-.007a.5.5 0 0 0 .402-.394l.84-4.196.024-.085A.5.5 0 0 1 12.5 8h1.276l.073-.011a.27.27 0 0 0 .165-.137l.018-.044a.27.27 0 0 0-.098-.29L8 3.122zM8.002 7a2.001 2.001 0 0 1 0 4 2 2 0 1 1 0-4m0 1a1 1 0 0 0 0 2l.103-.005a1 1 0 0 0 0-1.99z" /></SvgRoot>;
});
export default IconHomeBirdhouse;

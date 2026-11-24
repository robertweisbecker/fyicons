import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterG = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterG(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-g"><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.526 6c-.463-.407-1.093-.69-1.79-.65-1.251.075-2.241 1.165-2.236 2.53.005 1.473 1.078 2.818 2.612 2.713.71-.048 1.271-.396 1.638-.713V8.5h-1.7" />{props.children}</SvgRoot>;
});
export default IconSquareLetterG;

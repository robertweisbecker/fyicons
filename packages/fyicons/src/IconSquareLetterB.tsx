import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterB = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterB(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-b"><path fill="currentColor" d="M6 5.573C6 5.257 6.257 5 6.573 5h1.802c.87 0 1.575.705 1.575 1.575l-.9.05C9.05 6.28 8.748 6 8.375 6H7zm3.95 1.052c0 .842-.683 1.525-1.525 1.525H6l1-.8h1.375c.373 0 .675-.325.675-.725zM6 8.15V5.573C6 5.257 6.257 5 6.573 5L7 6v1.35zM8.375 5c.87 0 1.575.705 1.575 1.575v.05c0 .842-.683 1.525-1.525 1.525l-.05-.8c.373 0 .675-.325.675-.725C9.05 6.28 8.748 6 8.375 6z" /><path fill="currentColor" d="M6 7.384h2.546c.913 0 1.654.74 1.654 1.654h-1c0-.5-.349-.904-.78-.904H7zm4.2 1.654A1.96 1.96 0 0 1 8.238 11H6.6a.6.6 0 0 1-.6-.6l1-.4h1.238c.531 0 .962-.43.962-.962zM6.6 11a.6.6 0 0 1-.6-.6V7.384l1 .75V10zm1.946-3.616c.913 0 1.654.74 1.654 1.654A1.96 1.96 0 0 1 8.238 11v-1c.531 0 .962-.43.962-.962 0-.5-.349-.904-.78-.904z" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterB;

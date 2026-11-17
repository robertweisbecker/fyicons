import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconImageFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconImageFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="image-fill"><path fill="currentColor" d="M11.1 2c.411 0 .75 0 1.026.022.281.023.54.072.782.196a2 2 0 0 1 .874.874c.124.242.173.501.195.782C14 4.149 14 4.489 14 4.9v6.2c0 .411 0 .75-.023 1.026-.022.281-.071.54-.195.782a2 2 0 0 1-.874.874c-.242.124-.501.173-.782.195-.275.023-.615.023-1.026.023H4.9c-.411 0-.75 0-1.026-.023-.281-.022-.54-.071-.782-.195a2 2 0 0 1-.874-.874c-.124-.242-.173-.501-.196-.782C2 11.851 2 11.511 2 11.1V4.9c0-.411 0-.75.022-1.026.023-.281.072-.54.196-.782a2 2 0 0 1 .874-.874c.242-.124.501-.173.782-.196C4.149 2 4.489 2 4.9 2zM13 7.969a2.56 2.56 0 0 1-2.546 2.307H10.2c-.79 0-1.504-.48-2.104-.993-.512-.437-1.284-.853-2.368-.853-1.88 0-2.514 1.25-2.68 1.693a.9.9 0 0 0-.048.315v1.608a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1.001zM10.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />{props.children}</SvgRoot>;
});
export default IconImageFill;

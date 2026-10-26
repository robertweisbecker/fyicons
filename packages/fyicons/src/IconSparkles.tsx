import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkles = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkles(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_11_883)"}><path fill="currentColor" d="M5.84 3.813c.419-1.05 1.904-1.05 2.323 0L8.756 5.3a3.5 3.5 0 0 0 1.96 1.958l1.462.58c1.052.417 1.052 1.906 0 2.323l-1.462.58a3.5 3.5 0 0 0-1.96 1.957l-.593 1.489c-.419 1.049-1.904 1.049-2.323 0l-.593-1.489a3.5 3.5 0 0 0-1.96-1.957l-1.462-.58c-1.052-.417-1.052-1.906 0-2.324l1.462-.579A3.5 3.5 0 0 0 5.247 5.3zm1.394.37a.25.25 0 0 0-.465 0l-.594 1.49a4.5 4.5 0 0 1-2.52 2.515l-1.461.58a.25.25 0 0 0 0 .465l1.46.58a4.5 4.5 0 0 1 2.521 2.515l.594 1.49a.25.25 0 0 0 .465 0l.594-1.49a4.5 4.5 0 0 1 2.52-2.515l1.462-.58a.25.25 0 0 0 0-.465l-1.462-.58a4.5 4.5 0 0 1-2.52-2.516zM13.5 0a.5.5 0 0 1 .473.342l.42 1.262 1.265.422a.5.5 0 0 1 0 .949l-1.265.42-.42 1.263a.5.5 0 0 1-.948 0l-.421-1.262-1.263-.421a.5.5 0 0 1 0-.95l1.263-.42.42-1.263.032-.073A.5.5 0 0 1 13.501 0" /></g><defs><clipPath id={idPrefix + "clip0_11_883"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconSparkles;

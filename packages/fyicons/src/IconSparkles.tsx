import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkles = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkles(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sparkles"><path fill="currentColor" d="M5.84 3.812c.419-1.05 1.904-1.05 2.323 0L8.756 5.3a3.5 3.5 0 0 0 1.96 1.958l1.462.58c1.052.416 1.052 1.906 0 2.323l-1.462.58a3.5 3.5 0 0 0-1.96 1.957l-.593 1.489c-.419 1.05-1.904 1.05-2.323 0l-.593-1.489a3.5 3.5 0 0 0-1.96-1.957l-1.462-.58c-1.052-.417-1.052-1.907 0-2.324l1.462-.579A3.5 3.5 0 0 0 5.247 5.3zm1.394.37a.25.25 0 0 0-.465 0l-.594 1.49a4.5 4.5 0 0 1-2.52 2.515l-1.461.58a.25.25 0 0 0 0 .465l1.46.58a4.5 4.5 0 0 1 2.521 2.515l.594 1.49a.25.25 0 0 0 .465 0l.594-1.49a4.5 4.5 0 0 1 2.52-2.515l1.462-.58a.25.25 0 0 0 0-.465l-1.462-.58a4.5 4.5 0 0 1-2.52-2.516zm5.027-2.927a.25.25 0 0 1 .477 0l.403 1.276c.05.156.17.279.326.328l1.278.403a.25.25 0 0 1 0 .477l-1.278.403a.5.5 0 0 0-.326.326l-.403 1.277a.25.25 0 0 1-.477 0l-.403-1.277a.5.5 0 0 0-.326-.326l-1.277-.403a.25.25 0 0 1 0-.477l1.277-.403a.5.5 0 0 0 .326-.327z" /></SvgRoot>;
});
export default IconSparkles;

import { cn } from '../lib/utils';
import { memo, useId } from 'react';
import { byId, byName } from '../lib/catalog';

const templates = new Map<string, string>();
const darkPaint = new Set([
  'black',
  '#000',
  '#000000',
  '#18181b',
  '#090909',
  '#191919',
  '#171717',
  '#040404',
]);

/** Display paint follows the UI. The original SVG remains untouched for downloads. */
export const Icon = memo(function Icon({
  name,
  className = '',
}: {
  name: string;
  className?: string;
}) {
  const prefix = useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const item = byId.get(name) ?? byName.get(name);
  if (!item) throw new Error('Unknown FYIcon: ' + name);
  if (!templates.has(item.id)) {
    const svg = new DOMParser().parseFromString(
      item.svg,
      'image/svg+xml',
    ).documentElement;
    for (const element of [svg, ...svg.querySelectorAll('*')]) {
      if (element.closest('defs, mask, clipPath')) continue;
      for (const paint of ['fill', 'stroke']) {
        if (darkPaint.has(element.getAttribute(paint)?.toLowerCase() ?? '')) {
          element.setAttribute(paint, 'currentColor');
          if (element.hasAttribute('style'))
            (element as SVGElement).style.setProperty(paint, 'currentColor');
        }
      }
    }
    templates.set(item.id, svg.innerHTML);
  }
  let markup = templates.get(item.id)!;
  const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  for (const id of ids) {
    markup = markup
      .replaceAll('id="' + id + '"', 'id="' + prefix + id + '"')
      .replaceAll('url(#' + id + ')', 'url(#' + prefix + id + ')')
      .replaceAll('href="#' + id + '"', 'href="#' + prefix + id + '"');
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-source-id={item.id}
      className={cn('icon block size-4 shrink-0', className)}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
});

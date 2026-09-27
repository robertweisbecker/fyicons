import { forwardRef, memo } from 'react';
import { cn } from '../lib/utils';
import { byId, byName } from '../lib/catalog';
import { iconBySourceId } from '../icons/registry';
import type { IconProps as GeneratedIconProps } from '../icons/types';

export type IconProps = GeneratedIconProps & {
  name: string;
};

/** Catalog lookup wrapper. Use named exports from src/icons for static imports. */
export const Icon = memo(
  forwardRef<SVGSVGElement, IconProps>(function Icon(
    { name, className = '', title, size, style, ...props },
    ref,
  ) {
    const item = byId.get(name) ?? byName.get(name);
    if (!item) throw new Error('Unknown FYIcon: ' + name);
    const Component = iconBySourceId[item.id];
    if (!Component) throw new Error('Missing generated FYIcon: ' + item.id);

    return (
      <Component
        {...props}
        ref={ref}
        size={size}
        width={props.width ?? size ?? 16}
        height={props.height ?? size ?? 16}
        viewBox={props.viewBox ?? '0 0 16 16'}
        fill={props.fill ?? 'none'}
        aria-hidden={
          props['aria-hidden'] ??
          (title || props['aria-label'] || props['aria-labelledby']
            ? undefined
            : true)
        }
        aria-label={props['aria-label'] ?? title}
        role={title || props['aria-label'] ? (props.role ?? 'img') : props.role}
        focusable={props.focusable ?? false}
        data-source-id={item.id}
        className={cn(
          'icon block shrink-0',
          size == null ? 'size-4' : '',
          className,
        )}
        style={
          size == null
            ? style
            : {
                width: props.width ?? size,
                height: props.height ?? size,
                ...style,
              }
        }
        title={title}
      />
    );
  }),
);

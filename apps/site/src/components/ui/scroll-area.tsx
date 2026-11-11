'use client';

import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import { cn } from '@/lib/utils';

function Root({
  className,
  ...props
}: Omit<ScrollAreaPrimitive.Root.Props, 'className'> & { className?: string }) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      {...props}
      className={cn('group/scroll-area box-border min-h-0 min-w-0', className)}
    />
  );
}

function Viewport({
  className,
  scrollFade = true,
  ...props
}: Omit<ScrollAreaPrimitive.Viewport.Props, 'className'> & {
  className?: string;
  scrollFade?: boolean;
}) {
  return (
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      {...props}
      className={cn(
        'min-h-0 min-w-0 rounded-[inherit] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-muted data-has-overflow-x:overscroll-x-contain data-has-overflow-y:overscroll-y-contain',
        scrollFade &&
          'mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start,0px)))] mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end,0px)))] mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end,0px)))] mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start,0px)))] mask-no-repeat [--fade-size:1.5rem]',
        className,
      )}
    />
  );
}

function Scrollbar({
  className,
  orientation = 'vertical',
  ...props
}: Omit<ScrollAreaPrimitive.Scrollbar.Props, 'className' | 'children'> & {
  className?: string;
}) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      {...props}
      orientation={orientation}
      className={cn(
        'm-1 flex opacity-0 transition-[opacity,width,height] delay-300 duration-150 select-none group-has-focus-visible/scroll-area:opacity-100 data-hovering:opacity-100 data-hovering:delay-0 data-scrolling:opacity-100 data-scrolling:delay-0 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:flex-col hover:data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-1 hover:data-[orientation=vertical]:w-2 motion-reduce:transition-none',
        className,
      )}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full bg-ink/20 hover:bg-ink/40"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export const ScrollArea = {
  Root,
  Viewport,
  Content: ScrollAreaPrimitive.Content,
  Scrollbar,
};

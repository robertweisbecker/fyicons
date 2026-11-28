import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { IconWaveform } from 'fyicons';

export const tracks = [
  { title: 'Soft Signal', artist: 'The Quiet Hours', length: 222 },
  { title: 'Window Seat', artist: 'The Quiet Hours', length: 196 },
  { title: 'After Hours', artist: 'The Quiet Hours', length: 248 },
];

export const trackTime = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

/** The record sleeve from the Playback example, shared at every thumbnail size. */
export function AlbumArtwork({
  className,
  decorative = false,
  ...props
}: ComponentPropsWithoutRef<'div'> & {
  className: string;
  decorative?: boolean;
}) {
  return (
    <div
      {...props}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : 'Abstract blue record sleeve'}
      aria-hidden={decorative || undefined}
      className={cn(
        'relative grid shrink-0 place-items-center overflow-hidden rounded-md bg-sky-200 text-sky-950 shadow-sm',
        className,
      )}
    >
      <span className="absolute -right-1/4 -bottom-1/4 size-full rounded-full bg-sky-50" />
      <span className="absolute right-0 bottom-0 size-1/2 rounded-full bg-sky-300" />
      <span className="absolute right-1/4 bottom-1/4 size-1/4 rounded-full bg-sky-200" />
      <IconWaveform className="relative" />
    </div>
  );
}

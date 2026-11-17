'use client';

import { useState } from 'react';
import { IconDownloadSquare } from 'fyicons';

import { Button, type ButtonProps } from '@/components/ui/button';
import { notify } from '@/components/ui/toast';

const buttonSize = {
  sm: 'sm',
  md: 'default',
  lg: 'lg',
} as const satisfies Record<string, NonNullable<ButtonProps['size']>>;

export function DownloadIconsButton({
  className,
  size = 'md',
}: {
  className?: string;
  size?: keyof typeof buttonSize;
}) {
  const [packing, setPacking] = useState(false);

  async function download() {
    setPacking(true);
    try {
      const { downloadIcons } = await import('@/lib/downloads');
      await downloadIcons();
    } catch {
      notify('Download failed. Please try again.');
    } finally {
      setPacking(false);
    }
  }

  return (
    <Button
      data-download-icons="all"
      disabled={packing}
      onClick={download}
      aria-busy={packing}
      className={className}
      size={buttonSize[size]}
      focusableWhenDisabled
    >
      {packing ? (
        <>
          <IconDownloadSquare data-icon="inline-start" /> Preparing…
        </>
      ) : (
        <>
          <IconDownloadSquare data-icon="inline-start" />
          Download all
        </>
      )}
    </Button>
  );
}

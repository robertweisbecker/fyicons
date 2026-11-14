'use client';

import { useState } from 'react';
import IconDownloadSquare from 'fyicons/icons/IconDownloadSquare';
import { Button } from '@/components/ui/button';
import { notify } from '@/components/ui/toast';

export function DownloadIconsButton({ className }: { className?: string }) {
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

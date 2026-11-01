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
      disabled={packing}
      onClick={download}
      aria-busy={packing}
      className={className}
    >
      <IconDownloadSquare data-icon="inline-start" />
      {packing ? 'Preparing download…' : 'Download'}
    </Button>
  );
}

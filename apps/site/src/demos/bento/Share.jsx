import { useState } from 'react';
import {
  IconFileZip,
  IconLink,
  IconDownload,
  IconLockOpen,
  IconLock,
  IconCheck,
} from 'fyicons';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { assetPath } from '@/lib/navigation';
import { copy, downloadIcons } from '@/lib/downloads';
export function Share() {
  const [restricted, setRestricted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-orange-100 text-orange-800">
          <IconFileZip size={24} />
        </span>
        <div>
          <p className="text-sm font-semibold">fyicons.zip</p>
          <p className="text-xs text-muted">SVG library</p>
        </div>
      </div>
      <label className="flex items-center gap-2 border-y border-line py-3 text-xs">
        {restricted ? <IconLock /> : <IconLockOpen />}
        <span className="flex-1">
          {restricted ? 'Invite only' : 'Anyone with the link'}
        </span>
        <Switch
          size="sm"
          checked={restricted}
          onCheckedChange={(v) => {
            setRestricted(v);
            setCopied(false);
            setError(false);
          }}
          aria-label="Restrict demo sharing"
        />
      </label>
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          disabled={restricted}
          onClick={async () => {
            const ok = await copy(
              new URL(
                assetPath('/downloads/fyicons.zip'),
                window.location.origin,
              ).href,
            );
            setCopied(ok);
            setError(!ok);
          }}
        >
          {copied ? <IconCheck /> : <IconLink />}
          {copied ? 'Copied' : 'Copy link'}
        </Button>
        <Button size="sm" variant="outline" onClick={() => downloadIcons()}>
          <IconDownload />
          Save
        </Button>
      </div>
      {error && (
        <p role="status" className="text-xs">
          Clipboard unavailable.
        </p>
      )}
    </div>
  );
}

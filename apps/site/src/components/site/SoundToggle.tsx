'use client';

import { useEffect, useRef } from 'react';
import { IconVolumeHighFill, IconVolumeNone } from 'fyicons';
import { Button } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';
import { notify } from '@/components/ui/toast';
import { isBoolean, usePreference } from '@/lib/preferences';
import { play, setEnabled, unlock } from '@/lib/sounds';

export function SoundToggle() {
  const [enabled, setPreference] = usePreference(
    'fyicons-sound-v1',
    false,
    isBoolean,
  );
  const attempt = useRef(0);

  useEffect(() => {
    setEnabled(enabled);
  }, [enabled]);

  useEffect(
    () => () => {
      attempt.current++;
      setEnabled(false);
    },
    [],
  );

  async function toggleSound() {
    const currentAttempt = ++attempt.current;
    const next = !enabled;
    setEnabled(next);
    setPreference(next);
    if (!next) return;
    const ready = await unlock();
    if (attempt.current !== currentAttempt) return;
    if (ready) {
      play('toggle', { emphasis: 'subtle' });
    } else {
      setEnabled(false);
      setPreference(false);
      notify('Sound is unavailable in this browser. Try turning it on again.');
    }
  }

  return (
    <Tooltip label={`Sound ${enabled ? 'on' : 'off'}`}>
      <Button
        aria-label="Interaction sounds"
        aria-pressed={enabled}
        variant="ghost"
        size="icon"
        className="max-sm:size-9"
        onClick={toggleSound}
      >
        {enabled ? <IconVolumeHighFill /> : <IconVolumeNone />}
      </Button>
    </Tooltip>
  );
}

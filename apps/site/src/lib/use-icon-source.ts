import { useCallback, useEffect, useState } from 'react';
import { loadIconSvg } from '@/lib/icon-source';
import type { CatalogIcon } from '@/lib/catalog-codec';

type Icon = Pick<CatalogIcon, 'sha256' | 'filename'>;
export function useIconSource(icon: Icon, enabled = true) {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<{
    hash: string;
    text?: string;
    error?: string;
  }>({ hash: '' });
  useEffect(() => {
    if (!enabled) return;
    let active = true;
    setState({ hash: icon.sha256 });
    loadIconSvg(icon).then(
      (text) => {
        if (active) setState({ hash: icon.sha256, text });
      },
      (error) => {
        if (active)
          setState({
            hash: icon.sha256,
            error: String(error.message || error),
          });
      },
    );
    return () => {
      active = false;
    };
  }, [icon.sha256, icon.filename, enabled, attempt]);
  return {
    text: state.hash === icon.sha256 ? state.text : undefined,
    error: state.hash === icon.sha256 ? state.error : undefined,
    retry: useCallback(() => setAttempt((value) => value + 1), []),
  };
}

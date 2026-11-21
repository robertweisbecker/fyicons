import {
  setEnabled as setCuelumeEnabled,
  unlock as unlockCuelume,
} from 'cuelume';

// Stay silent until the saved preference or Sound toggle enables playback.
let enabled = false;
setCuelumeEnabled(false);

export function setEnabled(value: boolean) {
  enabled = value;
  setCuelumeEnabled(value);
}

export function unlock() {
  return enabled ? unlockCuelume() : Promise.resolve(false);
}

export { play, press, release } from 'cuelume';

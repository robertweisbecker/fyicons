import IconBatteryEmpty from 'fyicons/icons/IconBatteryEmpty';
import IconBatteryMin from 'fyicons/icons/IconBatteryMin';
import IconBatteryHigh from 'fyicons/icons/IconBatteryHigh';
import IconBatteryLow from 'fyicons/icons/IconBatteryLow';
import IconBatteryMedium from 'fyicons/icons/IconBatteryMedium';
import IconBattery from 'fyicons/icons/IconBattery';
import IconSignalFour0 from 'fyicons/icons/IconSignalFour0';
import IconSignalFour1 from 'fyicons/icons/IconSignalFour1';
import IconSignalFour2 from 'fyicons/icons/IconSignalFour2';
import IconSignalFour3 from 'fyicons/icons/IconSignalFour3';
import IconSignalFour from 'fyicons/icons/IconSignalFour';
import IconProgressTaskTodo from 'fyicons/icons/IconProgressTaskTodo';
import IconProgressTask25 from 'fyicons/icons/IconProgressTask25';
import IconProgressTask50 from 'fyicons/icons/IconProgressTask50';
import IconProgressTask75 from 'fyicons/icons/IconProgressTask75';
import IconProgressTaskDone from 'fyicons/icons/IconProgressTaskDone';
import IconGaugeMax from 'fyicons/icons/IconGaugeMax';
import IconGaugeSimple from 'fyicons/icons/IconGaugeSimple';
import IconGaugeMin from 'fyicons/icons/IconGaugeMin';
import IconGaugeLow from 'fyicons/icons/IconGaugeLow';
import IconGaugeHigh from 'fyicons/icons/IconGaugeHigh';
import IconSignalThree0 from 'fyicons/icons/IconSignalThree0';
import IconSignalThree1 from 'fyicons/icons/IconSignalThree1';
import IconSignalThree2 from 'fyicons/icons/IconSignalThree2';
import IconSignalThree from 'fyicons/icons/IconSignalThree';
import IconMeterLow from 'fyicons/icons/IconMeterLow';
import IconMeter from 'fyicons/icons/IconMeter';
import IconMeterHigh from 'fyicons/icons/IconMeterHigh';
import IconChecklist from 'fyicons/icons/IconChecklist';
import IconChecklist1 from 'fyicons/icons/IconChecklist1';
import IconChecklistChecked from 'fyicons/icons/IconChecklistChecked';
import IconVolumeX from 'fyicons/icons/IconVolumeX';
import IconVolumeNone from 'fyicons/icons/IconVolumeNone';
import IconVolumeLow from 'fyicons/icons/IconVolumeLow';
import IconVolumeMedium from 'fyicons/icons/IconVolumeMedium';
import IconVolumeHigh from 'fyicons/icons/IconVolumeHigh';
import IconEmojiAngry from 'fyicons/icons/IconEmojiAngry';
import IconEmojiAngryFill from 'fyicons/icons/IconEmojiAngryFill';
import IconEmojiFrown from 'fyicons/icons/IconEmojiFrown';
import IconEmojiFrownFill from 'fyicons/icons/IconEmojiFrownFill';
import IconEmojiNeutral from 'fyicons/icons/IconEmojiNeutral';
import IconEmojiNeutralFill from 'fyicons/icons/IconEmojiNeutralFill';
import IconEmojiSmile from 'fyicons/icons/IconEmojiSmile';
import IconEmojiSmileFill from 'fyicons/icons/IconEmojiSmileFill';
import IconEmojiGrin from 'fyicons/icons/IconEmojiGrin';
import IconEmojiGrinFill from 'fyicons/icons/IconEmojiGrinFill';
import IconEmojiBeam from 'fyicons/icons/IconEmojiBeam';
import IconEmojiBeamFill from 'fyicons/icons/IconEmojiBeamFill';

// Object shorthand keeps the component names available in production builds.
export const levelSteps: {
  value: number;
  icons: Record<string, typeof IconBattery>;
  landingIcons: Record<string, typeof IconBattery>;
}[] = [
  {
    value: 0,
    icons: {
      IconBatteryEmpty,
      IconSignalFour0,
      IconProgressTaskTodo,
      IconGaugeMin,
    },
    landingIcons: {
      IconSignalThree0,
      IconMeterLow,
      IconChecklist,
      IconVolumeX,
      IconEmojiAngry,
      IconEmojiAngryFill,
    },
  },
  {
    value: 12.5,
    icons: {
      IconBatteryMin,
      IconSignalFour0,
      IconProgressTaskTodo,
      IconGaugeMin,
    },
    landingIcons: {
      IconSignalThree0,
      IconMeterLow,
      IconChecklist,
      IconVolumeX,
      IconEmojiAngry,
      IconEmojiAngryFill,
    },
  },
  {
    value: 25,
    icons: {
      IconBatteryLow,
      IconSignalFour1,
      IconProgressTask25,
      IconGaugeLow,
    },
    landingIcons: {
      IconSignalThree1,
      IconMeterLow,
      IconChecklist,
      IconVolumeNone,
      IconEmojiFrown,
      IconEmojiFrownFill,
    },
  },
  {
    value: 50,
    icons: {
      IconBatteryMedium,
      IconSignalFour2,
      IconProgressTask50,
      IconGaugeSimple,
    },
    landingIcons: {
      IconSignalThree2,
      IconMeter,
      IconChecklist1,
      IconVolumeLow,
      IconEmojiNeutral,
      IconEmojiNeutralFill,
    },
  },
  {
    value: 75,
    icons: {
      IconBatteryHigh,
      IconSignalFour3,
      IconProgressTask75,
      IconGaugeHigh,
    },
    landingIcons: {
      IconSignalThree2,
      IconMeter,
      IconChecklist1,
      IconVolumeMedium,
      IconEmojiSmile,
      IconEmojiSmileFill,
    },
  },
  {
    value: 87.5,
    icons: {
      IconBatteryHigh,
      IconSignalFour3,
      IconProgressTask75,
      IconGaugeHigh,
    },
    landingIcons: {
      IconSignalThree2,
      IconMeter,
      IconChecklist1,
      IconVolumeMedium,
      IconEmojiGrin,
      IconEmojiGrinFill,
    },
  },
  {
    value: 100,
    icons: {
      IconBattery,
      IconSignalFour,
      IconProgressTaskDone,
      IconGaugeMax,
    },
    landingIcons: {
      IconSignalThree,
      IconMeterHigh,
      IconChecklistChecked,
      IconVolumeHigh,
      IconEmojiBeam,
      IconEmojiBeamFill,
    },
  },
];

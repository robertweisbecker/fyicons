import IconBatteryEmpty from 'fyicons/icons/IconBatteryEmpty';
import IconBatteryLow from 'fyicons/icons/IconBatteryLow';
import IconBatteryMedium from 'fyicons/icons/IconBatteryMedium';
import IconBattery from 'fyicons/icons/IconBattery';
import IconSignalFour0 from 'fyicons/icons/IconSignalFour0';
import IconSignalFour1 from 'fyicons/icons/IconSignalFour1';
import IconSignalFour2 from 'fyicons/icons/IconSignalFour2';
import IconSignalFour3 from 'fyicons/icons/IconSignalFour3';
import IconSignalFour from 'fyicons/icons/IconSignalFour';
import IconCircleProgressTodo from 'fyicons/icons/IconCircleProgressTodo';
import IconCircleProgressQuarter from 'fyicons/icons/IconCircleProgressQuarter';
import IconCircleProgressHalf from 'fyicons/icons/IconCircleProgressHalf';
import IconCircleProgressThreeQuarters from 'fyicons/icons/IconCircleProgressThreeQuarters';
import IconCircleProgressFull from 'fyicons/icons/IconCircleProgressFull';
import IconGaugeSimpleMax from 'fyicons/icons/IconGaugeSimpleMax';
import IconGaugeSimple from 'fyicons/icons/IconGaugeSimple';
import IconGaugeSimpleMin from 'fyicons/icons/IconGaugeSimpleMin';
import IconGaugeSimpleLow from 'fyicons/icons/IconGaugeSimpleLow';
import IconGaugeSimpleHigh from 'fyicons/icons/IconGaugeSimpleHigh';
import IconSignalThree0 from 'fyicons/icons/IconSignalThree0';
import IconSignalThree1 from 'fyicons/icons/IconSignalThree1';
import IconSignalThree2 from 'fyicons/icons/IconSignalThree2';
import IconSignalThree from 'fyicons/icons/IconSignalThree';
import IconGaugeLow from 'fyicons/icons/IconGaugeLow';
import IconGauge from 'fyicons/icons/IconGauge';
import IconGaugeHigh from 'fyicons/icons/IconGaugeHigh';
import IconChecklist from 'fyicons/icons/IconChecklist';
import IconChecklist1 from 'fyicons/icons/IconChecklist1';
import IconChecklistChecked from 'fyicons/icons/IconChecklistChecked';
import IconVolumeX from 'fyicons/icons/IconVolumeX';
import IconVolumeNone from 'fyicons/icons/IconVolumeNone';
import IconVolumeLow from 'fyicons/icons/IconVolumeLow';
import IconVolumeMedium from 'fyicons/icons/IconVolumeMedium';
import IconVolumeHigh from 'fyicons/icons/IconVolumeHigh';
import IconEmojiAngry from 'fyicons/icons/IconEmojiAngry';
import IconEmojiFrown from 'fyicons/icons/IconEmojiFrown';
import IconEmojiNeutral from 'fyicons/icons/IconEmojiNeutral';
import IconEmojiSmile from 'fyicons/icons/IconEmojiSmile';
import IconEmojiGrin from 'fyicons/icons/IconEmojiGrin';
import IconEmojiBeam from 'fyicons/icons/IconEmojiBeam';

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
      IconCircleProgressTodo,
      IconGaugeSimpleMin,
    },
    landingIcons: {
      IconSignalThree0,
      IconGaugeLow,
      IconChecklist,
      IconVolumeX,
      IconEmojiAngry,
    },
  },
  {
    value: 25,
    icons: {
      IconBatteryLow,
      IconSignalFour1,
      IconCircleProgressQuarter,
      IconGaugeSimpleLow,
    },
    landingIcons: {
      IconSignalThree1,
      IconGaugeLow,
      IconChecklist,
      IconVolumeNone,
      IconEmojiFrown,
    },
  },
  {
    value: 50,
    icons: {
      IconBatteryMedium,
      IconSignalFour2,
      IconCircleProgressHalf,
      IconGaugeSimple,
    },
    landingIcons: {
      IconSignalThree2,
      IconGauge,
      IconChecklist1,
      IconVolumeLow,
      IconEmojiNeutral,
    },
  },
  {
    value: 75,
    icons: {
      IconBatteryMedium,
      IconSignalFour3,
      IconCircleProgressThreeQuarters,
      IconGaugeSimpleHigh,
    },
    landingIcons: {
      IconSignalThree2,
      IconGauge,
      IconChecklist1,
      IconVolumeMedium,
      IconEmojiSmile,
    },
  },
  {
    value: 87.5,
    icons: {
      IconBatteryMedium,
      IconSignalFour3,
      IconCircleProgressThreeQuarters,
      IconGaugeSimpleHigh,
    },
    landingIcons: {
      IconSignalThree2,
      IconGauge,
      IconChecklist1,
      IconVolumeMedium,
      IconEmojiGrin,
    },
  },
  {
    value: 100,
    icons: {
      IconBattery,
      IconSignalFour,
      IconCircleProgressFull,
      IconGaugeSimpleMax,
    },
    landingIcons: {
      IconSignalThree,
      IconGaugeHigh,
      IconChecklistChecked,
      IconVolumeHigh,
      IconEmojiBeam,
    },
  },
];

'use client';

import { Fragment, useState } from 'react';
import { Separator } from '@base-ui/react/separator';
import IconHeart from 'fyicons/icons/IconHeart';
import IconHeartFill from 'fyicons/icons/IconHeartFill';
import IconStar from 'fyicons/icons/IconStar';
import IconStarFill from 'fyicons/icons/IconStarFill';
import IconPlayFill from 'fyicons/icons/IconPlayFill';
import IconPauseFill from 'fyicons/icons/IconPauseFill';
import IconVolumeX from 'fyicons/icons/IconVolumeX';
import IconClosedCaptions from 'fyicons/icons/IconClosedCaptions';
import IconClosedCaptionsFill from 'fyicons/icons/IconClosedCaptionsFill';
import IconPictureInPictureEnter from 'fyicons/icons/IconPictureInPictureEnter';
import IconPictureInPictureExit from 'fyicons/icons/IconPictureInPictureExit';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Slider, SliderControl } from '@/components/ui/slider';
import { levelSteps } from '@/lib/icon-progress';
import {
  IconSwitchOn,
  IconSwitchOff,
  IconPanelLeftClosed,
  IconPanelLeft,
  IconVolumeHighFill,
  IconAudioDescriptionFill,
  IconAudioDescription,
  IconFullscreenExit,
  IconFullscreen,
} from 'fyicons';

export function ToggleStateExample() {
  const [liked, setLiked] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [switched, setSwitched] = useState(false);
  const [open, setOpen] = useState(false);
  const Heart = liked ? IconHeartFill : IconHeart;
  const Star = favorite ? IconStarFill : IconStar;
  const Sidebar = open ? IconPanelLeft : IconPanelLeftClosed;

  return (
    <div
      role="group"
      aria-label="Like and favorite examples"
      className="my-6 flex flex-wrap justify-center gap-3 rounded-xl border border-line bg-surface p-5 sm:p-8"
    >
      <Toggle
        variant="outline"
        pressed={liked}
        onPressedChange={setLiked}
        className="touch-manipulation"
      >
        <Heart
          data-icon="inline-start"
          className="in-data-pressed:text-red-500"
        />
        Like
      </Toggle>
      <Toggle
        variant="outline"
        pressed={favorite}
        onPressedChange={setFavorite}
        className="touch-manipulation"
      >
        <Star
          data-icon="inline-start"
          className="in-data-pressed:text-amber-500 dark:in-data-pressed:text-amber-400"
        />
        Favorite
      </Toggle>

      <Toggle
        variant="outline"
        pressed={switched}
        onPressedChange={setSwitched}
        className="inline-flex justify-between"
      >
        Enable
        {switched ? (
          <IconSwitchOn
            className="text-green-600 dark:text-green-400"
            size={16}
          />
        ) : (
          <IconSwitchOff size={16} />
        )}
      </Toggle>
      <Toggle
        variant="outline"
        pressed={open}
        onPressedChange={setOpen}
        className="touch-manipulation"
      >
        <Sidebar />
        Sidebar
      </Toggle>
    </div>
  );
}

export function MediaStateExample() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(true);
  const [captions, setCaptions] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [pictureInPicture, setPictureInPicture] = useState(false);
  const [audioDescriptions, setAudioDescriptions] = useState(false);
  const Playback = playing ? IconPauseFill : IconPlayFill;
  const Volume = volume ? IconVolumeHighFill : IconVolumeX;
  const Captions = captions ? IconClosedCaptionsFill : IconClosedCaptions;
  const AudioDescription = audioDescriptions
    ? IconAudioDescriptionFill
    : IconAudioDescription;
  const Fullscreen = fullscreen ? IconFullscreenExit : IconFullscreen;
  const PictureInPicture = pictureInPicture
    ? IconPictureInPictureExit
    : IconPictureInPictureEnter;

  return (
    <div
      role="group"
      aria-label="Video control bar example"
      className="my-6 rounded-xl border border-line bg-surface p-2 sm:p-4"
    >
      <div className="mx-auto flex w-fit items-center gap-1 rounded-lg bg-dialog p-1 shadow-sm ring ring-line">
        <Button
          variant="ghost"
          size="icon"
          aria-label={playing ? 'Pause' : 'Play'}
          onClick={() => setPlaying((current) => !current)}
          className="touch-manipulation"
        >
          <Playback />
        </Button>
        <Toggle
          size="icon"
          pressed={volume}
          variant="text"
          onPressedChange={setVolume}
          aria-label="Toggle volume"
          className="touch-manipulation"
        >
          <Volume />
        </Toggle>
        <span className="px-1 text-xs whitespace-nowrap tabular-nums">
          0:42<span> / 3:18</span>
        </span>
        <Toggle
          size="icon"
          pressed={captions}
          onPressedChange={setCaptions}
          aria-label="Closed captions"
          className="touch-manipulation"
        >
          <Captions />
        </Toggle>
        <Toggle
          size="icon"
          pressed={audioDescriptions}
          onPressedChange={setAudioDescriptions}
          aria-label="Audio descriptions"
          className="touch-manipulation"
        >
          <AudioDescription />
        </Toggle>
        <Toggle
          size="icon"
          pressed={pictureInPicture}
          onPressedChange={setPictureInPicture}
          aria-label="Picture in picture"
          className="touch-manipulation"
        >
          <PictureInPicture />
        </Toggle>
        <Toggle
          size="icon"
          pressed={fullscreen}
          onPressedChange={setFullscreen}
          aria-label="Fullscreen"
          className="touch-manipulation"
        >
          <Fullscreen />
        </Toggle>
      </div>
    </div>
  );
}

export function LevelStateExample() {
  const [level, setLevel] = useState(50);
  const currentStep = levelSteps.find(({ value }) => value === level)!;
  const previews = Object.entries(currentStep.icons).map(([name, Icon]) => {
    const description = name
      .replace(/^Icon/, '')
      .replace(/([a-z])([A-Z0-9])/g, '$1 $2');
    return { name, Icon, description };
  });

  return (
    <div
      role="group"
      aria-label="Meters and progress example"
      className="my-6 overflow-hidden rounded-xl border border-line bg-surface"
    >
      <div className="p-5 sm:p-8">
        <div className="mx-auto grid max-w-2xl grid-cols-[repeat(auto-fit,minmax(min(100%,7rem),1fr))] gap-x-3 gap-y-6">
          {previews.map(({ name, Icon, description }) => (
            <figure
              key={name}
              className="m-0 flex min-w-0 flex-col items-center gap-3"
            >
              <Icon size={32} aria-label={description} />
              <figcaption className="min-h-8 max-w-full text-center text-xs wrap-anywhere text-muted">
                {name.split(/(?=[A-Z])/).map((word, index) => (
                  <Fragment key={index}>
                    {index > 0 && <wbr />}
                    {word}
                  </Fragment>
                ))}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Separator className="h-px w-full bg-line" />
      <div className="bg-inset p-5 sm:px-8 sm:py-6">
        <Slider.Root
          className="mx-auto w-full max-w-sm"
          value={level}
          onValueChange={setLevel}
          min={0}
          max={100}
          step={25}
          largeStep={50}
          thumbAlignment="edge"
        >
          <div className="mb-2 flex items-center justify-between gap-4 text-xs">
            <Slider.Label>Level</Slider.Label>
            <Slider.Value className="text-muted tabular-nums">
              {(value) => `${value}%`}
            </Slider.Value>
          </div>
          <SliderControl
            getAriaValueText={(formatted) =>
              `${formatted} percent; ${previews.map(({ description }) => description).join('; ')}`
            }
          />
        </Slider.Root>
      </div>
    </div>
  );
}

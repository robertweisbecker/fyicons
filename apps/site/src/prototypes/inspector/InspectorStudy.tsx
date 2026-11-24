'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Button } from '@ui-sdk/react/button';
import {
  createDrawerController,
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerOutlet,
  DrawerTitle,
  type SnapPoint,
} from '@ui-sdk/react/drawer';
import { IconCheck, IconGrid, IconX } from 'fyicons';
import { buttonVariants } from '@/components/ui/button';
import { samples, type Sample } from './samples';
import styles from './inspector.module.css';

const peekHeight = '6rem';
const stops: SnapPoint[] = [peekHeight, 0.36, 1];
const iconButton = buttonVariants({ size: 'icon', variant: 'neutral' });

function Specimen({ item }: { item: Sample }) {
  const [grid, setGrid] = useState(true);
  const Glyph = item.glyph;
  const exportName =
    'Icon' +
    item.name
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
      .replaceAll(' ', '');

  return (
    <>
      <div className={styles.preview} data-color={item.color} data-grid={grid}>
        <Glyph size={128} aria-hidden />
        <Button
          aria-label="Pixel grid"
          aria-pressed={grid}
          className={iconButton}
          onClick={() => setGrid(!grid)}
        >
          <IconGrid />
        </Button>
      </div>
      <h3 className={styles.sectionTitle}>Preview sizes</h3>
      <div className={styles.sizes}>
        {[16, 24, 32, 48].map((size) => (
          <figure key={size}>
            <Glyph size={size} aria-hidden />
            <figcaption>{size} px</figcaption>
          </figure>
        ))}
      </div>
      <h3 className={styles.sectionTitle}>Drawing details</h3>
      <dl className={styles.details}>
        <div>
          <dt>Native size</dt>
          <dd>
            <Glyph size={16} />
            16 × 16 px
          </dd>
        </div>
        <div>
          <dt>Category</dt>
          <dd>{item.category}</dd>
        </div>
        <div>
          <dt>Color</dt>
          <dd>currentColor</dd>
        </div>
      </dl>
      <h3 className={styles.sectionTitle}>React</h3>
      <pre className={styles.code}>
        <code>{`import { ${exportName} } from 'fyicons';\n\n<${exportName} size={16} />`}</code>
      </pre>
    </>
  );
}

export function InspectorStudy() {
  const [item, setItem] = useState<Sample>(samples[0]);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [sheet, setSheet] = useState<HTMLDivElement | null>(null);
  const [controller] = useState(() => createDrawerController());
  const selectedButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sheet || !open) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setModal(entry.intersectionRatio > 0.5);
      },
      { threshold: [0.5, 0.5001] },
    );
    observer.observe(sheet);
    return () => observer.disconnect();
  }, [sheet, open]);

  function finishDrag() {
    if (!sheet?.hasAttribute('data-dragging')) return;
    // The driver picks its spring target on pointer-up. Retarget after that handler finishes.
    if (sheet.getBoundingClientRect().top < sheet.clientHeight / 2) {
      requestAnimationFrame(() => controller.setSnapPoint(1));
    }
  }

  return (
    <section className={styles.study}>
      <header className={styles.intro}>
        <p>Icon collection</p>
        <h1>Field guide</h1>
        <span>Choose a drawing to inspect it.</span>
      </header>
      <div className={styles.gallery}>
        {samples.map((sample) => (
          <Button
            key={sample.name}
            className={styles.card}
            data-color={sample.color}
            ref={item === sample ? selectedButton : undefined}
            aria-label={`Inspect ${sample.name}`}
            aria-pressed={open && item === sample}
            onClick={() => {
              setItem(sample);
              setOpen(true);
            }}
          >
            <span className={styles.tile}>
              <sample.glyph size={40} aria-hidden />
              {open && item === sample && (
                <span className={styles.check}>
                  <IconCheck size={12} />
                </span>
              )}
            </span>
            <span>{sample.name}</span>
          </Button>
        ))}
      </div>
      <Drawer
        controller={controller}
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setModal(false);
        }}
        driver="pointer"
        snapPoints={stops}
        defaultSnapPoint={peekHeight}
        modal={modal}
        closeOnOutsidePress={modal}
        expandOnScroll
      >
        <DrawerOutlet
          aria-hidden="true"
          className={styles.shade}
          style={{ '--peek-height': peekHeight } as CSSProperties}
        />
        <DrawerBackdrop className={styles.backdrop} data-modal={modal} />
        <DrawerContent
          ref={setSheet}
          className={styles.sheet}
          initialFocus="content"
          finalFocus={() => selectedButton.current}
          onPointerUpCapture={finishDrag}
          onTouchEndCapture={finishDrag}
          onKeyDown={(event) => {
            if (
              modal &&
              (event.key === '/' ||
                ((event.metaKey || event.ctrlKey) &&
                  event.key.toLowerCase() === 'k'))
            ) {
              event.stopPropagation();
            }
          }}
        >
          <DrawerHandle className={styles.handle} aria-label="Resize inspector">
            <span />
          </DrawerHandle>
          <div className={styles.summary}>
            <div className={styles.stamp} data-color={item.color}>
              <item.glyph size={24} aria-hidden />
            </div>
            <div>
              <DrawerTitle>{item.name}</DrawerTitle>
              <DrawerDescription>
                {item.category} · 16 × 16 px
              </DrawerDescription>
            </div>
            <DrawerClose className={iconButton} aria-label="Close inspector">
              <IconX />
            </DrawerClose>
          </div>
          <div className={styles.scroll} key={item.name}>
            <div className={styles.body}>
              <Specimen item={item} />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}

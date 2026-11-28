'use client';

import {
  IconBrowser,
  IconBrowserSolid,
  IconCalendar,
  IconCalendarFill,
  IconCalendarSolid,
  IconCaretRight,
  IconClock,
  IconCircleHalftone,
  IconClockSolid,
  IconCursorDefaultSolid,
  IconGradient,
  IconLoader,
  IconPenTipDuo,
  IconStarHalfFill,
  IconEmojiSmile,
  IconHome,
  IconHomeFill,
  IconPin,
  IconShoppingCart,
} from 'fyicons';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import {
  TableOfContents,
  type DocHeading,
} from '@/components/docs/TableOfContents';
import { Construction } from '@/home/Construction';
import { StudyTile } from '@/home/optical/OpticalStudy';
import {
  DrawingStage,
  PlayDrawing,
  WarningDrawing,
  centerStudy,
  soloWarningStudy,
} from '@/home/optical/OpticalDrawings';
import { useReducedMotion } from '@/vendor/stageshow/reduced-motion';
import { useState } from 'react';
import {
  DotCoverage,
  EyeComparison,
  Marker,
  Ring,
  Specimen,
  SpecimenRow,
  keylineSpecs,
} from '@/prototypes/design-guidelines/figures';

const headings: DocHeading[] = [
  { id: 'principles', title: 'Principles', level: 2 },
  { id: 'grid', title: 'Grid and keylines', level: 2 },
  { id: 'strokes', title: 'Strokes and caps', level: 2 },
  { id: 'dots', title: 'Dots', level: 2 },
  { id: 'fills', title: 'Outline, fill, and solid', level: 2 },
  { id: 'halftones', title: 'Halftones and mixed fills', level: 2 },
  { id: 'optical-balance', title: 'Optical balance', level: 2 },
  { id: 'details', title: 'Typographic details', level: 2 },
  { id: 'comparison', title: 'Compared with other sets', level: 2 },
  { id: 'references', title: 'References', level: 2 },
];

const pink = 'var(--color-pink-500)';
const green = 'var(--color-emerald-500)';
const amber = 'var(--color-amber-500)';

function OpticalTiles() {
  const animate = !useReducedMotion();
  const [centerRun, setCenterRun] = useState(0);
  const [dotRun, setDotRun] = useState(0);
  return (
    <div
      data-not-typeset
      className="@container/study my-8 grid grid-cols-1 gap-3.5 @min-[600px]/study:grid-cols-2"
    >
      <StudyTile
        className="grid content-between gap-4 px-(--optical-pad) pt-2 pb-6"
        title="Optical centering"
        description="Play is offset 1.5px right of center so that it looks centered."
        onReplay={animate ? () => setCenterRun((run) => run + 1) : undefined}
      >
        <DrawingStage
          key={centerRun}
          className="text-control-accent"
          script={animate && centerRun > 0 ? centerStudy : undefined}
        >
          {(scene) => <PlayDrawing scene={scene} />}
        </DrawingStage>
      </StudyTile>
      <StudyTile
        className="grid content-between gap-4 px-(--optical-pad) pt-2 pb-6"
        title="Heavier dots"
        description="Warning's dot is enlarged from 1px to 2px, and its stem from 1px to 1.25px, so both stay legible at 16px."
        onReplay={animate ? () => setDotRun((run) => run + 1) : undefined}
      >
        <DrawingStage
          key={dotRun}
          className="text-amber-800 dark:text-amber-300"
          script={animate && dotRun > 0 ? soloWarningStudy : undefined}
        >
          {(scene) => <WarningDrawing scene={scene} />}
        </DrawingStage>
      </StudyTile>
    </div>
  );
}

export function DesignGuidelines() {
  return (
    <div className="mx-auto min-h-[calc(100dvh-var(--site-header-height))] max-w-400 gap-6 px-4 pb-20 sm:px-6 lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)_var(--sidebar-width)] lg:pt-4">
      <DocsSidebar />
      <div className="min-w-0 lg:col-span-2 lg:grid lg:grid-cols-subgrid lg:items-start">
        <TableOfContents headings={headings} />
        <article
          data-docs-content=""
          className="typeset typeset-docs mx-auto w-full max-w-3xl min-w-0 pt-8 lg:col-start-1 lg:row-start-1 lg:pt-7"
        >
          <h1>Design</h1>

          <p>
            FYIcons are drawn at 16 × 16 pixels for use at that size on screen.
            The guidelines below are defaults. Exceptions are made where they
            make an icon easier to read.
          </p>

          <h2 id="principles">Principles</h2>

          <p>
            Many icon libraries enforce strict, uniform rules: a fixed 2px gap
            between shapes, one stroke weight for every detail, or no fills at
            all. Others apply a house style everywhere, even where it
            doesn&rsquo;t suit the object. (Rounded chevrons, for
            example…yikes.)
          </p>

          <p>
            Strict rules make sense for a set with hundreds of contributors,
            where consistency matters most. Consistent icons aren&rsquo;t always
            legible, though, and some concepts are clearer with a fill. FYIcons
            has a single designer, so its guidelines can stay flexible.
          </p>

          <p>In practice:</p>

          <ul>
            <li>Use a fill when a concept needs one.</li>
            <li>Draw dots large enough to match the weight of nearby lines.</li>
            <li>
              Snap shapes to the pixel grid when that improves rendering. Move
              them off the grid by a half pixel when optical size matters more.
            </li>
            <li>
              Draw the object first and the system second. Chevrons stay
              pointed.
            </li>
          </ul>

          <h2 id="grid">Grid and keylines</h2>

          <p>
            Each icon is drawn on a 16 × 16 canvas with a 1px stroke. Icons are
            drawn using four base keyline shapes with similar optical volume.
            Keyline sizes are measured to the center of the stroke. Add 1px to
            measure to the outer edge.
          </p>

          <div data-not-typeset className="my-8">
            <Construction />
          </div>

          <table>
            <thead>
              <tr>
                <th>Keyline</th>
                <th>Center</th>
                <th>Outer</th>
                <th>Corner radius</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              {keylineSpecs.map((spec) => (
                <tr key={spec.shape}>
                  <td>{spec.shape}</td>
                  <td className="font-mono text-xs whitespace-nowrap">
                    {spec.size}
                  </td>
                  <td className="font-mono text-xs whitespace-nowrap">
                    {spec.outer}
                  </td>
                  <td className="font-mono text-xs whitespace-nowrap">
                    {spec.radius}
                  </td>
                  <td>{spec.use}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            The circle keyline is the largest because a circle covers less area
            than a square of the same width. The square keyline is the smallest
            for the opposite reason. Keylines are a starting point. Icons can
            extend to the 1px padding where the shape requires it.
          </p>

          <h2 id="strokes">Strokes and caps</h2>

          <p>
            Strokes are 1px with round caps and joins. Round ends look softer on
            the pixel grid without adding blur, and they match the rounded
            corners of the keylines.
          </p>

          <p>Square or sharp ends are used in two cases:</p>

          <ul>
            <li>
              Where another shape cuts across a stroke, so there is no bump at
              the joint.
            </li>
            <li>
              Where a point is the subject of the icon, such as the needle of a
              pin or the tip of a pen.
            </li>
          </ul>

          <SpecimenRow columns={2}>
            <Specimen
              icon={IconPin}
              name="Pin"
              caption="Round body, sharp needle."
            >
              <Ring cx={2.35} cy={13.65} r={1.1} color={pink} />
            </Specimen>
            <Specimen
              icon={IconShoppingCart}
              name="ShoppingCart"
              caption="Wheels attached to the frame."
            >
              <Ring cx={4.5} cy={13.5} r={1.9} color={green} />
              <Ring cx={11.5} cy={13.5} r={1.9} color={green} />
            </Specimen>
          </SpecimenRow>

          <p>
            Stroke weight can vary slightly. Small interior details can be
            thinner than 1px, and terminals can be a little heavier where a thin
            end would fade. Parts are connected where possible instead of
            floating. For example, the shopping cart&rsquo;s wheels are attached
            to the frame. (Why are cart wheels always floating, anyway?)
          </p>

          <h2 id="dots">Dots</h2>

          <p>
            A 1px circle covers only about 79% of the pixel it sits on. Next to
            a 1px line, it looks lighter and smaller than the stroke. For that
            reason, dots in FYIcons are 1.5px or larger.
          </p>

          <DotCoverage />

          <p>
            A 1.5px dot isn&rsquo;t pixel-perfect, since its edge falls between
            pixels and is antialiased. The center pixel is completely filled,
            though, so the dot renders more solidly and is closer in weight to
            the strokes around it.
          </p>

          <p>
            Emoji eyes are a common example. In many smiley icons, each eye is a
            single round cap at stroke width. At 16px, that is a 1px dot inside
            a 1px outline, and the eyes are hard to see. The eyes in EmojiSmile
            are 1.75 × 2px.
          </p>

          <EyeComparison icon={IconEmojiSmile} />

          <SpecimenRow columns={2}>
            <Specimen
              icon={IconBrowserSolid}
              name="BrowserSolid"
              caption="1.5px window controls."
            >
              <Ring cx={4} cy={4} r={0.95} color={pink} />
              <Ring cx={6} cy={4} r={0.95} color={pink} />
              <Ring cx={8} cy={4} r={0.95} color={pink} />
            </Specimen>
          </SpecimenRow>

          <h2 id="fills">Outline, fill, and solid</h2>

          <p>
            Most icons have two styles: <strong>outline</strong>, the default,
            and <strong>fill</strong>, which fills the body of the same object.
            Fills are useful for selected or active states.
          </p>

          <p>
            Cutouts are sized differently in fills. In an outline, a cutout
            looks larger because of the stroke around it, and the same cutout
            looks too small without that stroke. Cutouts in fills are usually
            sized between the outline&rsquo;s inner and outer edges, even at the
            cost of a half pixel of alignment. In Home, the door is 2 × 3px; in
            HomeFill, it is 3 × 4px.
          </p>

          <SpecimenRow columns={2}>
            <Specimen
              icon={IconHome}
              name="Home"
              caption="Door: 2 × 3px inside a 4px-wide frame."
            >
              <Marker d="M7 10V13H9V10Z" color={pink} />
            </Specimen>
            <Specimen
              icon={IconHomeFill}
              name="HomeFill"
              caption="Door: 3 × 4px, between the two."
            >
              <Marker d="M6.5 10V14H9.5V10Z" color={pink} />
            </Specimen>
          </SpecimenRow>

          <p>
            Filling some icons removes the details that identify them, such as
            the dates on a calendar or the hands of a clock. These icons were
            originally &ldquo;fill&rdquo; icons that weren&rsquo;t completely
            filled, which was confusing. They now use a third style,{' '}
            <strong>solid</strong>: the frame is filled, and interior details
            are cut out.
          </p>

          <SpecimenRow>
            <Specimen icon={IconCalendar} name="Calendar" />
            <Specimen icon={IconCalendarFill} name="CalendarFill" />
            <Specimen icon={IconCalendarSolid} name="CalendarSolid" />
            <Specimen icon={IconClock} name="Clock" />
            <Specimen icon={IconClockSolid} name="ClockSolid" />
            <Specimen icon={IconBrowser} name="Browser" />
          </SpecimenRow>

          <h2 id="halftones">Halftones and mixed fills</h2>

          <p>
            A few icons don&rsquo;t fit the outline and fill styles. Gradients
            and shading don&rsquo;t work at 16px, so a <strong>halftone</strong>{' '}
            is used instead: a pattern of dots that looks like a tone. The 1.5px
            minimum doesn&rsquo;t apply to halftones, since the dots are seen
            together as a texture. For a crisp halftone, use square dots that
            fill whole pixels.
          </p>

          <SpecimenRow>
            <Specimen
              icon={IconCircleHalftone}
              name="CircleHalftone"
              caption="1px round dots form a tone."
            />
            <Specimen
              icon={IconGradient}
              name="Gradient"
              caption="Square dots from 1px to 0.75px."
            />
            <Specimen
              icon={IconStarHalfFill}
              name="StarHalfFill"
              caption="Half outline, half fill."
            />
          </SpecimenRow>

          <p>
            Other icons <strong>mix fills and transparency</strong>. A
            translucent shape behind an outline is used for a secondary part, an
            inactive track, or a surface, without a second color. The opacity is
            part of the artwork and uses <code>currentColor</code>, so it works
            with any color you set.
          </p>

          <SpecimenRow>
            <Specimen
              icon={IconPenTipDuo}
              name="PenTipDuo"
              caption="30% secondary layer."
            />
            <Specimen
              icon={IconCursorDefaultSolid}
              name="CursorDefaultSolid"
              caption="20% fill inside a solid outline."
            />
            <Specimen
              icon={IconLoader}
              name="Loader"
              caption="25% track behind the arc."
            />
          </SpecimenRow>

          <p>
            Use these sparingly. If the extra tone doesn&rsquo;t carry meaning,
            a plain outline or fill is usually the better choice.
          </p>

          <h2 id="optical-balance">Optical balance</h2>

          <p>
            Icons are centered optically rather than by their bounding box. A
            right-pointing triangle has most of its visual weight on its flat
            side, so it is shifted right to appear centered. Carets, play
            buttons, and arrows include this adjustment, so they don&rsquo;t
            need extra offsets in your layout.
          </p>

          <OpticalTiles />

          <SpecimenRow columns={2}>
            <Specimen
              icon={IconCaretRight}
              name="CaretRight"
              caption="Pink: canvas center. Amber: the caret&rsquo;s box center."
            >
              <Marker d="M8 1V15" color={pink} dashed />
              <Marker d="M9.125 3V13" color={amber} />
            </Specimen>
          </SpecimenRow>

          <h2 id="details">Typographic details</h2>

          <p>
            At this size, icon design has more in common with type design than
            with illustration, and a few techniques carry over:
          </p>

          <ul>
            <li>
              <strong>Ink traps</strong>: small notches where two strokes meet
              at a sharp angle, to keep the joint from filling in.
            </li>
            <li>
              <strong>Overshoot</strong>: round and pointed shapes extend
              slightly past the keyline so they appear the same height as flat
              shapes.
            </li>
            <li>
              <strong>Counters</strong>: enclosed spaces are kept open. When a
              counter is too small, the detail inside it is simplified or
              removed.
            </li>
          </ul>

          <h2 id="comparison">Compared with other sets</h2>

          <p>
            Many of these ideas come from other icon sets&rsquo; published
            guidelines. The table below compares their main rules.
          </p>

          <div
            className="typeset-scroll"
            role="region"
            aria-label="Scrollable table"
            tabIndex={0}
          >
            <table>
              <thead>
                <tr>
                  <th />
                  <th>FYIcons</th>
                  <th>Lucide</th>
                  <th>Octicons</th>
                  <th>Polaris</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Canvas</th>
                  <td>16px</td>
                  <td>24px</td>
                  <td>16px and 24px</td>
                  <td>20px, 16px safe area</td>
                </tr>
                <tr>
                  <th scope="row">Stroke</th>
                  <td>1px, varies by detail</td>
                  <td>2px, never mixed</td>
                  <td>1.5px</td>
                  <td>1.5px; 1.25px cutouts in fills</td>
                </tr>
                <tr>
                  <th scope="row">Caps</th>
                  <td>Round; sharp for points and bisected ends</td>
                  <td>Round</td>
                  <td>Round</td>
                  <td>Round, even at cutouts</td>
                </tr>
                <tr>
                  <th scope="row">Keylines</th>
                  <td>13 circle, 11 square, 13 × 9 rectangle</td>
                  <td>Match the circle and square icons</td>
                  <td>Circle, square, rectangle</td>
                  <td>14 circle, 13 square, 14 × 12 rectangle</td>
                </tr>
                <tr>
                  <th scope="row">Corner radius</th>
                  <td>1.5px rectangles, 2–2.5px squares</td>
                  <td>2px; 1px under 8px</td>
                  <td>1px</td>
                  <td>1–3px</td>
                </tr>
                <tr>
                  <th scope="row">Minimum gap</th>
                  <td>Set by legibility</td>
                  <td>2px</td>
                  <td>1px; 1.5px around modifiers</td>
                  <td>1px</td>
                </tr>
                <tr>
                  <th scope="row">Fills</th>
                  <td>Outline, Fill, Solid; mixed where it helps</td>
                  <td>Outline only</td>
                  <td>Small filled parts only</td>
                  <td>Fill for navigation and selected states</td>
                </tr>
                <tr>
                  <th scope="row">Dots</th>
                  <td>1.5px or larger</td>
                  <td>Stroke-width</td>
                  <td>—</td>
                  <td>Small fills allowed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="references">References</h2>

          <ul>
            <li>
              <a href="https://lucide.dev/guide/design/icon-design-guide">
                Lucide icon design guide
              </a>
            </li>
            <li>
              <a href="https://primer.style/foundations/icons/design-guidelines">
                Primer Octicons design guidelines
              </a>
            </li>
            <li>
              <a href="https://web.archive.org/web/20201124142728/https://blog.nucleoapp.com/nucleo-icon-guidelines-introduction-70092f8b4697">
                Nucleo icon guidelines: introduction
              </a>{' '}
              (archived; linked from Primer for grids and optical volume)
            </li>
            <li>
              <a href="https://github.com/Shopify/polaris/blob/main/polaris.shopify.com/content/design/icons/creating-icons.mdx">
                Shopify Polaris: creating icons
              </a>{' '}
              (archived source on GitHub)
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}

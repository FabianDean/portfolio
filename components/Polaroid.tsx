"use client";

import { useState, type AnimationEvent } from "react";
import Image from "next/image";
import { hero, site } from "@/data/content";

type Variant = "black" | "tortie";

/** The face, shared by the full-body doodle and the head-only peeker. */
function CatHead({ variant, id }: { variant: Variant; id: string }) {
  const clip = `${id}-head`;
  return (
    <g className="cat-head">
      <path className="cat-fur cat-ear-l" d="M20 36 C 16 28, 15 18, 20 15 C 24 13, 30 19, 34 25 Z" />
      <path className="cat-fur cat-ear-r" d="M60 36 C 64 28, 65 18, 60 15 C 56 13, 50 19, 46 25 Z" />
      <circle className="cat-fur" cx="40" cy="48" r="24" />
      {variant === "tortie" && (
        <>
          <clipPath id={clip}>
            <circle cx="40" cy="48" r="24" />
          </clipPath>
          <g className="cat-patch" clipPath={`url(#${clip})`}>
            <path d="M44 20 C 52 30, 34 40, 46 52 C 52 60, 44 66, 50 72 L 72 72 L 72 20 Z" />
            <circle cx="22" cy="42" r="5" />
          </g>
        </>
      )}
      <path className="cat-inner" d="M23 33 C 20 27, 19 21, 22 19 C 25 18, 29 22, 32 27 Z" />
      <path className="cat-inner" d="M57 33 C 60 27, 61 21, 58 19 C 55 18, 51 22, 48 27 Z" />
      <circle className="cat-blush" cx="25" cy="57" r="3.6" />
      <circle className="cat-blush" cx="55" cy="57" r="3.6" />
      <path className="cat-nose" d="M37.5 56.5 h5 l-2.5 3 z" />
      <path className="cat-face-lines" d="M40 59.5 q-2.5 4 -5.5 1.5 M40 59.5 q2.5 4 5.5 1.5" />
      <path
        className="cat-whiskers"
        d="M20 53 q-6 -2 -11 -4 M20 56.5 h-11 M20 60 q-6 2 -11 4 M60 53 q6 -2 11 -4 M60 56.5 h11 M60 60 q6 2 11 4"
      />
      {/* wide eyes while peeking (they blink), happy eyes while walking */}
      <g className="cat-eyes-open">
        <circle className="cat-iris" cx="32" cy="50" r="3.6" />
        <circle className="cat-iris" cx="48" cy="50" r="3.6" />
        <circle className="cat-pupil" cx="32" cy="50" r="1.9" />
        <circle className="cat-pupil" cx="48" cy="50" r="1.9" />
        <circle className="cat-eye-shine" cx="33.3" cy="48.7" r="1.1" />
        <circle className="cat-eye-shine" cx="49.3" cy="48.7" r="1.1" />
      </g>
      <path className="cat-eyes-happy" d="M27 51 q5 -6 10 0 M43 51 q5 -6 10 0" />
    </g>
  );
}

function Leg({ x, phase, sock }: { x: number; phase: "a" | "b"; sock?: boolean }) {
  return (
    <g className={`cat-leg cat-leg-${phase}`}>
      <rect className={`cat-fur${sock ? " cat-sock" : ""}`} x={x} y="72" width="11" height="20" rx="5.5" />
      <path className="cat-toes" d={`M${x + 3.5} 87 v4 M${x + 7.5} 87 v4`} />
    </g>
  );
}

const TAIL = "M116 62 C 136 60, 140 38, 126 30";

/** Full-body walking doodle. */
function CatDoodle({ variant, className, id }: { variant: Variant; className: string; id: string }) {
  const clip = `${id}-body`;
  return (
    <svg
      className={`cat cat--${variant} ${className}`}
      viewBox="0 0 140 100"
      width="120"
      height="86"
      aria-hidden="true"
      focusable="false"
    >
      <g className="cat-body">
        <path className="cat-tail cat-tail-outline" d={TAIL} />
        <path className="cat-tail cat-tail-fill" d={TAIL} />
        {variant === "tortie" && (
          <path
            className="cat-tail cat-tail-tip"
            d={TAIL}
            pathLength="1"
            strokeDasharray="0.3 1"
            strokeDashoffset="-0.7"
          />
        )}
        <Leg x={50} phase="b" />
        <Leg x={96} phase="a" />
        <ellipse className="cat-fur" cx="84" cy="66" rx="36" ry="22" />
        {variant === "tortie" && (
          <>
            <clipPath id={clip}>
              <ellipse cx="84" cy="66" rx="36" ry="22" />
            </clipPath>
            <g className="cat-patch" clipPath={`url(#${clip})`}>
              <circle cx="102" cy="56" r="13" />
              <ellipse cx="70" cy="74" rx="11" ry="8" />
              <circle cx="118" cy="72" r="8" />
            </g>
          </>
        )}
        <Leg x={60} phase="a" sock={variant === "tortie"} />
        <Leg x={106} phase="b" />
        <CatHead variant={variant} id={id} />
      </g>
    </svg>
  );
}

/** Head-only doodle that peeks over the top edge of the card. */
function CatPeeker({ variant, className }: { variant: Variant; className: string }) {
  return (
    <svg
      className={`cat cat--${variant} ${className}`}
      viewBox="8 4 66 72"
      width="60"
      height="65"
      aria-hidden="true"
      focusable="false"
    >
      <CatHead variant={variant} id={`${variant}-peeker`} />
    </svg>
  );
}

/**
 * The tilted, grayscale portrait with two cat doodles hiding behind it.
 * On a loop the tortie leans out past the card's edge and the black cat
 * pops up over the top; pressing the card straightens it (in color) and
 * lets both cats walk out across the page, tortie first.
 */
export default function Polaroid() {
  const [walking, setWalking] = useState(false);

  const letTheCatsOut = () => {
    if (!walking) setWalking(true);
  };

  // the black cat leaves last, so its walk ending resets the scene
  const onAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === "cat-walk-follow") setWalking(false);
  };

  return (
    <div
      className={`polaroid-wrap${walking ? " is-walking" : ""}`}
      onAnimationEnd={onAnimationEnd}
    >
      <CatDoodle variant="black" className="cat-follow" id="cat-black" />
      <CatPeeker variant="black" className="cat-top" />
      <CatDoodle variant="tortie" className="cat-side" id="cat-tortie" />

      <button
        type="button"
        className="polaroid"
        onClick={letTheCatsOut}
        aria-label={hero.portraitAction}
      >
        <Image
          src="/portrait.jpg"
          alt={`Portrait of ${site.name}`}
          width={260}
          height={312}
          priority
        />
        <span className="polaroid-caption">{hero.portraitCaption}</span>
      </button>
    </div>
  );
}

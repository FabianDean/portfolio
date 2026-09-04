"use client";

import { useState, type AnimationEvent } from "react";
import Image from "next/image";
import { hero, site } from "@/data/content";

type Variant = "black" | "tortie";

/** The face, shared by the full-body doodle and the head-only peeker. */
const HEAD =
  "M40 27 C 48 27, 56 28, 60 31 C 65 35, 67 43, 66 50 C 65 60, 60 68, 52 70 C 46 72, 34 72, 28 70 C 20 68, 15 60, 14 50 C 13 43, 15 35, 20 31 C 24 28, 32 27, 40 27 Z";

/** The face, shared by the full-body doodle and the head-only peeker. */
function CatHead({ variant, id }: { variant: Variant; id: string }) {
  const clip = `${id}-head`;
  return (
    <g className="cat-head">
      {/* ears (inner ears sit under the head so its outline covers their base) */}
      <path className="cat-fur cat-ear-l" d="M21 34 C 16 27, 15 18, 19 14 C 24 12, 30 19, 33 28 Z" />
      <path className="cat-fur cat-ear-r" d="M59 34 C 64 27, 65 18, 61 14 C 56 12, 50 19, 47 28 Z" />
      <path className="cat-inner" d="M23 30 C 20 25, 19.5 20, 21.5 18.5 C 24 17.5, 27.5 22, 30 27 Z" />
      <path className="cat-inner" d="M57 30 C 60 25, 60.5 20, 58.5 18.5 C 56 17.5, 52.5 22, 50 27 Z" />
      <path className="cat-fur" d={HEAD} />
      {variant === "tortie" && (
        <>
          <clipPath id={clip}>
            <path d={HEAD} />
          </clipPath>
          <g className="cat-patch" clipPath={`url(#${clip})`}>
            <path d="M44 20 C 52 30, 34 40, 46 52 C 52 60, 44 66, 50 72 L 72 72 L 72 20 Z" />
            <circle cx="22" cy="44" r="5" />
          </g>
        </>
      )}
      <path className="cat-nose" d="M37.5 55.5 h5 l-2.5 3 z" />
      <path className="cat-face-lines" d="M40 58.5 q-2.5 4 -5.5 1.5 M40 58.5 q2.5 4 5.5 1.5" />
      <path
        className="cat-whiskers"
        d="M17 51 q-6 -2 -11 -4 M17 54.5 h-11 M17 58 q-6 2 -11 4 M63 51 q6 -2 11 -4 M63 54.5 h11 M63 58 q6 2 11 4"
      />
      {/* soft bead eyes while peeking (they blink), happy eyes while walking */}
      <g className="cat-eyes-open">
        <ellipse className="cat-eye" cx="30" cy="49" rx="3.4" ry="4.1" />
        <ellipse className="cat-eye" cx="50" cy="49" rx="3.4" ry="4.1" />
        <circle className="cat-eye-shine" cx="31.3" cy="47.4" r="1.5" />
        <circle className="cat-eye-shine" cx="51.3" cy="47.4" r="1.5" />
      </g>
      <path className="cat-eyes-happy" d="M25 50 q5 -6 10 0 M45 50 q5 -6 10 0" />
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
        <path className="cat-fur" d="M56 44 C 70 38, 92 38, 108 44 C 120 49, 124 62, 120 74 C 116 84, 106 88, 92 88 L 66 88 C 54 88, 48 78, 49 66 C 50 56, 52 48, 56 44 Z" />
        {variant === "tortie" && (
          <>
            <clipPath id={clip}>
              <path d="M56 44 C 70 38, 92 38, 108 44 C 120 49, 124 62, 120 74 C 116 84, 106 88, 92 88 L 66 88 C 54 88, 48 78, 49 66 C 50 56, 52 48, 56 44 Z" />
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
      viewBox="4 8 72 66"
      width="60"
      height="55"
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

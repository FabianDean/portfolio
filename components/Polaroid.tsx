"use client";

import { useState, type AnimationEvent } from "react";
import Image from "next/image";
import { hero, site } from "@/data/content";

/**
 * The tilted, grayscale portrait with a cat doodle hiding behind it.
 * On a loop the cat peeks out and nudges the card; pressing the card
 * straightens it (in color) and lets the cat walk out across the page.
 */
export default function Polaroid() {
  const [walking, setWalking] = useState(false);

  const letTheCatOut = () => {
    if (!walking) setWalking(true);
  };

  const onCatAnimationEnd = (event: AnimationEvent<SVGSVGElement>) => {
    if (event.animationName === "cat-walk") setWalking(false);
  };

  return (
    <div className={`polaroid-wrap${walking ? " is-walking" : ""}`}>
      <svg
        className="cat"
        viewBox="0 0 124 82"
        width="112"
        height="74"
        aria-hidden="true"
        focusable="false"
        onAnimationEnd={onCatAnimationEnd}
      >
        <g className="cat-body">
          {/* tail: ink outline under a fill stroke */}
          <path
            className="cat-tail"
            d="M102 48 C 118 44, 122 26, 110 14"
            fill="none"
            stroke="var(--cat-ink)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            className="cat-tail"
            d="M102 48 C 118 44, 122 26, 110 14"
            fill="none"
            stroke="var(--cat-fill)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* far legs (behind the body) */}
          <rect className="cat-leg cat-leg-b" x="40" y="58" width="9" height="22" rx="4.5" />
          <rect className="cat-leg cat-leg-a" x="88" y="58" width="9" height="22" rx="4.5" />
          {/* body */}
          <ellipse cx="70" cy="52" rx="34" ry="19" className="cat-fur" />
          <g className="cat-lines" fill="none">
            <path d="M74 36 q3 6 0 12" />
            <path d="M84 37 q3 6 0 12" />
            <path d="M94 40 q3 6 0 12" />
          </g>
          {/* near legs (in front of the body) */}
          <rect className="cat-leg cat-leg-a" x="52" y="58" width="9" height="22" rx="4.5" />
          <rect className="cat-leg cat-leg-b" x="76" y="58" width="9" height="22" rx="4.5" />
          {/* head */}
          <g className="cat-head">
            <path className="cat-fur" d="M16 28 L11 6 L31 18 Z" />
            <path className="cat-fur" d="M31 18 L50 5 L46 28 Z" />
            <circle className="cat-fur" cx="31" cy="38" r="18" />
            <g className="cat-lines" fill="none">
              <path d="M20 37 q4 -5 8 0" />
              <path d="M34 37 q4 -5 8 0" />
              <path d="M31 46 q-3 4 -6 1" />
              <path d="M31 46 q3 4 6 1" />
              <path d="M14 41 h-11" />
              <path d="M14 45 l-10 3" />
              <path d="M48 41 h11" />
              <path d="M48 45 l10 3" />
            </g>
            <path d="M28 43 h6 l-3 3 z" fill="var(--cat-ink)" />
          </g>
        </g>
      </svg>

      <button
        type="button"
        className="polaroid"
        onClick={letTheCatOut}
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

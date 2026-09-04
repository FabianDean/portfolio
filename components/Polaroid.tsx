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
        viewBox="0 0 140 100"
        width="120"
        height="86"
        aria-hidden="true"
        focusable="false"
        onAnimationEnd={onCatAnimationEnd}
      >
        <g className="cat-body">
          {/* tail: ink outline under a fill stroke */}
          <path className="cat-tail cat-tail-outline" d="M116 62 C 136 60, 140 38, 126 30" />
          <path className="cat-tail cat-tail-fill" d="M116 62 C 136 60, 140 38, 126 30" />

          {/* far legs (behind the body) */}
          <g className="cat-leg cat-leg-b">
            <rect className="cat-fur" x="50" y="72" width="11" height="20" rx="5.5" />
            <path className="cat-toes" d="M53.5 87 v4 M57.5 87 v4" />
          </g>
          <g className="cat-leg cat-leg-a">
            <rect className="cat-fur" x="96" y="72" width="11" height="20" rx="5.5" />
            <path className="cat-toes" d="M99.5 87 v4 M103.5 87 v4" />
          </g>

          {/* body, cream belly, tabby stripes */}
          <ellipse className="cat-fur" cx="84" cy="66" rx="36" ry="22" />
          <ellipse className="cat-cream" cx="78" cy="76" rx="18" ry="9" />
          <path className="cat-stripes" d="M86 46 q3 6 0 12 M98 47 q3 6 0 12 M109 51 q3 6 0 11" />

          {/* near legs (in front of the body) */}
          <g className="cat-leg cat-leg-a">
            <rect className="cat-fur" x="60" y="72" width="11" height="20" rx="5.5" />
            <path className="cat-toes" d="M63.5 87 v4 M67.5 87 v4" />
          </g>
          <g className="cat-leg cat-leg-b">
            <rect className="cat-fur" x="106" y="72" width="11" height="20" rx="5.5" />
            <path className="cat-toes" d="M109.5 87 v4 M113.5 87 v4" />
          </g>

          {/* head */}
          <g className="cat-head">
            <path className="cat-fur" d="M18 38 L15 11 L37 24 Z" />
            <path className="cat-fur" d="M43 24 L65 11 L62 38 Z" />
            <circle className="cat-fur" cx="40" cy="48" r="24" />
            <path className="cat-cream" d="M22 33 L21 19 L32 27 Z" />
            <path className="cat-cream" d="M48 27 L59 19 L58 33 Z" />
            <path className="cat-face-lines" d="M31 38 l3 -7 l3 7 l3 -7 l3 7" />
            <circle className="cat-blush" cx="25" cy="57" r="3.6" />
            <circle className="cat-blush" cx="55" cy="57" r="3.6" />
            <ellipse className="cat-cream" cx="40" cy="59" rx="7.5" ry="5" />
            <path className="cat-nose" d="M37.5 56.5 h5 l-2.5 3 z" />
            <path className="cat-face-lines" d="M40 59.5 q-2.5 4 -5.5 1.5 M40 59.5 q2.5 4 5.5 1.5" />
            <path
              className="cat-whiskers"
              d="M20 53 q-6 -2 -11 -4 M20 56.5 h-11 M20 60 q-6 2 -11 4 M60 53 q6 -2 11 -4 M60 56.5 h11 M60 60 q6 2 11 4"
            />
            {/* wide eyes while peeking (they blink), happy eyes while walking */}
            <g className="cat-eyes-open">
              <circle className="cat-eye" cx="32" cy="50" r="3.3" />
              <circle className="cat-eye" cx="48" cy="50" r="3.3" />
              <circle className="cat-eye-shine" cx="33.2" cy="48.8" r="1.2" />
              <circle className="cat-eye-shine" cx="49.2" cy="48.8" r="1.2" />
            </g>
            <path className="cat-eyes-happy" d="M27 51 q5 -6 10 0 M43 51 q5 -6 10 0" />
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

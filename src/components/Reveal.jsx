import React, { createContext, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Entrance microinteractions (the gentle fade / zoom / slide on scroll) should
// play once per browser session — on the first page the visitor lands on — and
// then stay static as they navigate around. Seeing them replay on every
// Home → About → Home hop is distracting.
//
// We remember "already seen" in sessionStorage so it survives both client-side
// navigation and full reloads within the same tab session. A new tab / new
// session gets the intro again.

const SESSION_KEY = 'alttene:intro-seen';

// Evaluated once per full page load. `sessionSeen` is true when the intro has
// already played earlier this browser session (e.g. before a refresh), in which
// case nothing animates. We stamp the key immediately so later loads are static.
let sessionSeen;
try {
  sessionSeen = !!window.sessionStorage.getItem(SESSION_KEY);
  if (!sessionSeen) window.sessionStorage.setItem(SESSION_KEY, '1');
} catch {
  // sessionStorage unavailable (private mode, SSR, etc.) — just play the intro.
  sessionSeen = false;
}

const IntroContext = createContext(false);

// Provides whether entrance animations should play for the current view: true
// only while the visitor is still on the first route of a fresh session; it
// flips to false the moment they navigate anywhere else and stays there.
export function IntroProvider({ children }) {
  const location = useLocation();
  const firstPath = useRef(location.pathname);
  const hasNavigated = useRef(false);

  if (location.pathname !== firstPath.current) {
    hasNavigated.current = true;
  }

  const play = !sessionSeen && !hasNavigated.current;

  return <IntroContext.Provider value={play}>{children}</IntroContext.Provider>;
}

// Drop-in replacement for `motion.div`. On the session's first view it behaves
// exactly like motion.div; afterwards it renders statically — no enter
// animation — while still forwarding every other prop (className, style,
// handlers, children, …). The animation props are accepted so existing call
// sites keep working unchanged.
const Reveal = ({ initial, animate, whileInView, viewport, transition, ...rest }) => {
  const play = useContext(IntroContext);

  if (!play) {
    // `initial={false}` tells Framer Motion to skip the mount animation and
    // render at the resting state, so content is immediately visible.
    return <motion.div initial={false} {...rest} />;
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...rest}
    />
  );
};

export default Reveal;

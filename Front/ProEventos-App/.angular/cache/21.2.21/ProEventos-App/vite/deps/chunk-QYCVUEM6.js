import {
  isDevMode
} from "./chunk-T5WXOWHE.js";

// node_modules/ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs
var Trigger = class {
  constructor(open, close) {
    this.open = open;
    this.close = close || open;
  }
  isManual() {
    return this.open === "manual" || this.close === "manual";
  }
};
var DEFAULT_ALIASES = {
  hover: ["mouseover", "mouseout"],
  focus: ["focusin", "focusout"]
};
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
  const trimmedTriggers = (triggers || "").trim();
  if (trimmedTriggers.length === 0) {
    return [];
  }
  const parsedTriggers = trimmedTriggers.split(/\s+/).map((trigger) => trigger.split(":")).map((triggerPair) => {
    const alias = aliases[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.isManual());
  if (manualTriggers.length > 1) {
    throw new Error("Triggers parse error: only one manual trigger is allowed");
  }
  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers");
  }
  return parsedTriggers;
}
function listenToTriggersV2(renderer, options) {
  const parsedTriggers = parseTriggers(options.triggers);
  const target = options.target;
  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return Function.prototype;
  }
  const listeners = [];
  const _registerHide = [];
  const registerHide = () => {
    _registerHide.forEach((fn) => listeners.push(fn()));
    _registerHide.length = 0;
  };
  parsedTriggers.forEach((trigger) => {
    const useToggle = trigger.open === trigger.close;
    const showFn = useToggle ? options.toggle : options.show;
    if (!useToggle && trigger.close && options.hide) {
      const triggerClose = trigger.close;
      const optionsHide = options.hide;
      const _hide = () => renderer.listen(target, triggerClose, optionsHide);
      _registerHide.push(_hide);
    }
    if (showFn) {
      listeners.push(renderer.listen(target, trigger.open, () => showFn(registerHide)));
    }
  });
  return () => {
    listeners.forEach((unsubscribeFn) => unsubscribeFn());
  };
}
function registerOutsideClick(renderer, options) {
  if (!options.outsideClick) {
    return Function.prototype;
  }
  return renderer.listen("document", "click", (event) => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some((target) => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
function registerEscClick(renderer, options) {
  if (!options.outsideEsc) {
    return Function.prototype;
  }
  return renderer.listen("document", "keyup.esc", (event) => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some((target) => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
var win = typeof window !== "undefined" && window || {};
var document = win.document;
var location = win.location;
var gc = win.gc ? () => win.gc() : () => null;
var performance = win.performance ? win.performance : null;
var Event = win.Event;
var MouseEvent = win.MouseEvent;
var KeyboardEvent = win.KeyboardEvent;
var EventTarget = win.EventTarget;
var History = win.History;
var Location = win.Location;
var EventListener = win.EventListener;
var BsVerions;
(function(BsVerions2) {
  BsVerions2["isBs4"] = "bs4";
  BsVerions2["isBs5"] = "bs5";
})(BsVerions || (BsVerions = {}));
var guessedVersion;
function _guessBsVersion() {
  const spanEl = win.document.createElement("span");
  spanEl.innerText = "testing bs version";
  spanEl.classList.add("d-none");
  spanEl.classList.add("pl-1");
  win.document.head.appendChild(spanEl);
  const checkPadding = win.getComputedStyle(spanEl).paddingLeft;
  if (checkPadding && parseFloat(checkPadding)) {
    win.document.head.removeChild(spanEl);
    return "bs4";
  }
  win.document.head.removeChild(spanEl);
  return "bs5";
}
function isBs4() {
  if (guessedVersion)
    return guessedVersion === "bs4";
  guessedVersion = _guessBsVersion();
  return guessedVersion === "bs4";
}
function isBs5() {
  if (guessedVersion)
    return guessedVersion === "bs5";
  guessedVersion = _guessBsVersion();
  return guessedVersion === "bs5";
}
function getBsVer() {
  return {
    isBs4: isBs4(),
    isBs5: isBs5()
  };
}
function currentBsVersion() {
  const bsVer = getBsVer();
  const resVersion = Object.keys(bsVer).find((key) => bsVer[key]);
  return BsVerions[resVersion];
}
var Utils = class {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static reflow(element) {
    /* @__PURE__ */ ((bs) => bs)(element.offsetHeight);
  }
  // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getStyles(elem) {
    let view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = win;
    }
    return view.getComputedStyle(elem);
  }
  static stackOverflowConfig() {
    const bsVer = currentBsVersion();
    return {
      crossorigin: "anonymous",
      integrity: bsVer === "bs5" ? "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" : "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2",
      cdnLink: bsVer === "bs5" ? "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" : "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    };
  }
};
var _messagesHash = {};
var _hideMsg = typeof console === "undefined" || !("warn" in console);
function warnOnce(msg) {
  if (!isDevMode() || _hideMsg || msg in _messagesHash) {
    return;
  }
  _messagesHash[msg] = true;
  console.warn(msg);
}
function runInZoneRootIfPresent(fn) {
  const zone = globalThis.Zone;
  if (zone && zone.current !== zone.root) {
    return zone.root.run(fn);
  }
  return fn();
}
var TRANSITION_FALLBACK_BUFFER_MS = 50;
function onTransitionFinished(el, property, durationMs, onFinish) {
  let finished = false;
  const handler = (e) => {
    if (e.target !== el || e.propertyName !== property) {
      return;
    }
    finish();
  };
  const fallbackTimeoutId = setTimeout(() => finish(), durationMs + TRANSITION_FALLBACK_BUFFER_MS);
  const cancel = () => {
    finished = true;
    el.removeEventListener("transitionend", handler);
    clearTimeout(fallbackTimeoutId);
  };
  const finish = () => {
    if (finished) {
      return;
    }
    cancel();
    onFinish();
  };
  el.addEventListener("transitionend", handler);
  return { cancel };
}
function animateExpand(renderer, el, options) {
  const property = options.property ?? "height";
  if (options.manageDisplay) {
    renderer.setStyle(el, "display", "block");
  }
  renderer.setStyle(el, "overflow", "hidden");
  renderer.setStyle(el, "transition", `${property} ${options.timing}`);
  renderer.setStyle(el, property, "0");
  el.offsetHeight;
  let rafId;
  let transitionRef;
  const finish = () => {
    renderer.removeStyle(el, property);
    renderer.removeStyle(el, "overflow");
    renderer.removeStyle(el, "transition");
    if (options.manageDisplay) {
      renderer.removeStyle(el, "display");
    }
    options.onDone?.();
  };
  transitionRef = onTransitionFinished(el, property, options.durationMs, finish);
  const setTarget = () => {
    rafId = void 0;
    renderer.setStyle(el, property, `${el.scrollHeight}px`);
  };
  if (options.useRaf) {
    rafId = requestAnimationFrame(setTarget);
  } else {
    setTarget();
  }
  return () => {
    if (rafId !== void 0) {
      cancelAnimationFrame(rafId);
      rafId = void 0;
    }
    transitionRef?.cancel();
    transitionRef = void 0;
  };
}

export {
  parseTriggers,
  listenToTriggersV2,
  registerOutsideClick,
  registerEscClick,
  win,
  document,
  getBsVer,
  Utils,
  warnOnce,
  runInZoneRootIfPresent,
  onTransitionFinished,
  animateExpand
};
//# sourceMappingURL=chunk-QYCVUEM6.js.map

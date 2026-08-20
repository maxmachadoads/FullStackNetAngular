import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  NgModule,
  Output,
  Renderer2,
  effect,
  input,
  output,
  setClassMetadata,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-ATWHXDIS.js";

// node_modules/ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs
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
var _hideMsg = typeof console === "undefined" || !("warn" in console);
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

// node_modules/ngx-bootstrap/collapse/fesm2022/ngx-bootstrap-collapse.mjs
var COLLAPSE_ANIMATION_DURATION_MS = 400;
var COLLAPSE_ANIMATION_TIMING = `${COLLAPSE_ANIMATION_DURATION_MS}ms cubic-bezier(0.4,0.0,0.2,1)`;
var CollapseDirective = class _CollapseDirective {
  constructor(_el, _renderer) {
    this._el = _el;
    this._renderer = _renderer;
    this.collapsed = output();
    this.collapses = output();
    this.expanded = output();
    this.expands = output();
    this.isExpanded = true;
    this.collapseNewValue = true;
    this.isCollapsed = false;
    this.isCollapse = true;
    this.isCollapsing = false;
    this.display = input("block", ...ngDevMode ? [{
      debugName: "display"
    }] : []);
    this.isAnimated = input(false, ...ngDevMode ? [{
      debugName: "isAnimated"
    }] : []);
    this.collapse = input(false, ...ngDevMode ? [{
      debugName: "collapse"
    }] : []);
    this._display = "block";
    this._stylesLoaded = false;
    this._isTransitionRunning = false;
    this._COLLAPSE_ACTION_NAME = "collapse";
    this._EXPAND_ACTION_NAME = "expand";
    effect(() => {
      const displayValue = this.display();
      this._display = displayValue;
      if (displayValue === "none") {
        this.hide();
        return;
      }
      this.isAnimated() ? this.toggle() : this.show();
    });
    effect(() => {
      const collapseValue = this.collapse();
      this.collapseNewValue = collapseValue;
      if (!this._isTransitionRunning || this._isAnimationDone) {
        this.isExpanded = collapseValue;
        this.toggle();
      }
    });
  }
  ngAfterViewChecked() {
    this._stylesLoaded = true;
  }
  /** allows to manually toggle content visibility */
  toggle() {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }
  /** allows to manually hide content */
  hide() {
    this.isCollapsing = true;
    this.isExpanded = false;
    this.isCollapsed = true;
    this.isCollapsing = false;
    this.collapses.emit(this);
    this._isAnimationDone = false;
    this.animationRun(this.isAnimated(), this._COLLAPSE_ACTION_NAME)(() => {
      this._isAnimationDone = true;
      if (this.collapseNewValue !== this.isCollapsed && this.isAnimated()) {
        this.show();
        return;
      }
      this.collapsed.emit(this);
      this._renderer.setStyle(this._el.nativeElement, "display", "none");
    });
  }
  /** allows to manually show collapsed content */
  show() {
    this._renderer.setStyle(this._el.nativeElement, "display", this._display);
    this.isCollapsing = true;
    this.isExpanded = true;
    this.isCollapsed = false;
    this.isCollapsing = false;
    this.expands.emit(this);
    this._isAnimationDone = false;
    this.animationRun(this.isAnimated(), this._EXPAND_ACTION_NAME)(() => {
      this._isAnimationDone = true;
      if (this.collapseNewValue !== this.isCollapsed && this.isAnimated()) {
        this.hide();
        return;
      }
      this.expanded.emit(this);
    });
  }
  animationRun(isAnimated, action) {
    if (!isAnimated || !this._stylesLoaded) {
      return (callback) => callback();
    }
    const el = this._el.nativeElement;
    const isExpand = action === this._EXPAND_ACTION_NAME;
    const wasRunning = !!this._pendingFinish;
    this._cancelPending();
    this._renderer.setStyle(el, "display", this._display);
    this._renderer.setStyle(el, "overflow", "hidden");
    this._renderer.setStyle(el, "transition", `height ${COLLAPSE_ANIMATION_TIMING}`);
    this._isTransitionRunning = true;
    return (callback) => {
      const finish = () => {
        this._cancelPending();
        this._isTransitionRunning = false;
        if (isExpand) {
          this._renderer.removeStyle(el, "display");
        } else {
          this._renderer.setStyle(el, "display", "none");
        }
        this._renderer.removeStyle(el, "height");
        this._renderer.removeStyle(el, "transition");
        this._renderer.removeStyle(el, "overflow");
        callback();
      };
      this._pendingFinish = onTransitionFinished(el, "height", COLLAPSE_ANIMATION_DURATION_MS, finish);
      if (wasRunning) {
        const currentHeight = el.getBoundingClientRect().height;
        this._renderer.setStyle(el, "height", `${currentHeight}px`);
        el.offsetHeight;
        this._renderer.setStyle(el, "height", isExpand ? `${el.scrollHeight}px` : "0");
      } else if (isExpand) {
        this._renderer.setStyle(el, "height", "0");
        el.offsetHeight;
        this._rafId = requestAnimationFrame(() => {
          this._rafId = void 0;
          this._renderer.setStyle(el, "height", `${el.scrollHeight}px`);
        });
      } else {
        this._rafId = requestAnimationFrame(() => {
          this._renderer.setStyle(el, "height", `${el.scrollHeight}px`);
          this._rafId = requestAnimationFrame(() => {
            this._rafId = void 0;
            this._renderer.setStyle(el, "height", "0");
          });
        });
      }
    };
  }
  ngOnDestroy() {
    this._cancelPending();
  }
  _cancelPending() {
    this._pendingFinish?.cancel();
    this._pendingFinish = void 0;
    if (this._rafId !== void 0) {
      cancelAnimationFrame(this._rafId);
      this._rafId = void 0;
    }
  }
  static {
    this.ɵfac = function CollapseDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollapseDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CollapseDirective,
      selectors: [["", "collapse", ""]],
      hostVars: 9,
      hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-hidden", ctx.isCollapsed);
          ɵɵclassProp("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
        }
      },
      inputs: {
        display: [1, "display"],
        isAnimated: [1, "isAnimated"],
        collapse: [1, "collapse"]
      },
      outputs: {
        collapsed: "collapsed",
        collapses: "collapses",
        expanded: "expanded",
        expands: "expands"
      },
      exportAs: ["bs-collapse"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseDirective, [{
    type: Directive,
    args: [{
      selector: "[collapse]",
      exportAs: "bs-collapse",
      host: {
        "[class.collapse]": "true"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    collapsed: [{
      type: Output,
      args: ["collapsed"]
    }],
    collapses: [{
      type: Output,
      args: ["collapses"]
    }],
    expanded: [{
      type: Output,
      args: ["expanded"]
    }],
    expands: [{
      type: Output,
      args: ["expands"]
    }],
    isExpanded: [{
      type: HostBinding,
      args: ["class.in"]
    }, {
      type: HostBinding,
      args: ["class.show"]
    }],
    isCollapsed: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    isCollapse: [{
      type: HostBinding,
      args: ["class.collapse"]
    }],
    isCollapsing: [{
      type: HostBinding,
      args: ["class.collapsing"]
    }],
    display: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "display",
        required: false
      }]
    }],
    isAnimated: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "isAnimated",
        required: false
      }]
    }],
    collapse: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "collapse",
        required: false
      }]
    }]
  });
})();
var CollapseModule = class _CollapseModule {
  static {
    this.ɵfac = function CollapseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollapseModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CollapseModule,
      imports: [CollapseDirective],
      exports: [CollapseDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseModule, [{
    type: NgModule,
    args: [{
      imports: [CollapseDirective],
      exports: [CollapseDirective]
    }]
  }], null, null);
})();
export {
  CollapseDirective,
  CollapseModule
};
//# sourceMappingURL=ngx-bootstrap_collapse.js.map

import {
  ComponentLoaderFactory,
  PlacementForBs5,
  PositioningService
} from "./chunk-Z2RFGECF.js";
import {
  getBsVer,
  parseTriggers,
  warnOnce
} from "./chunk-3LRDF3OQ.js";
import {
  CommonModule
} from "./chunk-WAMI7YEO.js";
import "./chunk-EJ6XCIO3.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewContainerRef,
  input,
  model,
  output,
  setClassMetadata,
  timer,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-474WE6VK.js";

// node_modules/ngx-bootstrap/tooltip/fesm2022/ngx-bootstrap-tooltip.mjs
var _c0 = ["*"];
var TooltipConfig = class _TooltipConfig {
  constructor() {
    this.adaptivePosition = true;
    this.placement = "top";
    this.triggers = "hover focus";
    this.delay = 0;
  }
  static {
    this.ɵfac = function TooltipConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TooltipConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TooltipConfig,
      factory: _TooltipConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TooltipContainerComponent = class _TooltipContainerComponent {
  get _bsVersions() {
    return getBsVer();
  }
  constructor(config) {
  }
  ngAfterViewInit() {
    this.classMap = {
      in: false,
      fade: false
    };
    if (this.placement) {
      if (this._bsVersions.isBs5) {
        this.placement = PlacementForBs5[this.placement];
      }
      this.classMap[this.placement] = true;
    }
    this.classMap[`tooltip-${this.placement}`] = true;
    this.classMap["in"] = true;
    if (this.animation) {
      this.classMap["fade"] = true;
    }
    if (this.containerClass) {
      this.classMap[this.containerClass] = true;
    }
  }
  static {
    this.ɵfac = function TooltipContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TooltipContainerComponent)(ɵɵdirectiveInject(TooltipConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TooltipContainerComponent,
      selectors: [["bs-tooltip-container"]],
      hostAttrs: ["role", "tooltip"],
      hostVars: 3,
      hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("id", ctx.id);
          ɵɵclassMap("show tooltip in tooltip-" + ctx.placement + " bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
        }
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]],
      template: function TooltipContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElement(0, "div", 0);
          ɵɵdomElementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵdomElementEnd();
        }
      },
      styles: [".tooltip[_nghost-%COMP%]{display:block;pointer-events:none;position:absolute}.tooltip[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{position:absolute}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-tooltip-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": '"show tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
        "[attr.id]": "this.id",
        role: "tooltip"
      },
      template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
      standalone: true,
      styles: [":host.tooltip{display:block;pointer-events:none;position:absolute}:host.tooltip .tooltip-arrow{position:absolute}\n"]
    }]
  }], () => [{
    type: TooltipConfig
  }], null);
})();
var id = 0;
var TooltipDirective = class _TooltipDirective {
  /**
   * Returns whether or not the tooltip is currently being shown
   */
  get isOpen() {
    return this._tooltip.isShown;
  }
  set isOpen(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  constructor(_viewContainerRef, cis, _config, _elementRef, _renderer, _positionService) {
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    this.tooltipId = id++;
    this.adaptivePosition = input(this._config.adaptivePosition, ...ngDevMode ? [{
      debugName: "adaptivePosition"
    }] : []);
    this.tooltip = model(...ngDevMode ? [void 0, {
      debugName: "tooltip"
    }] : []);
    this.placement = input(this._config.placement, ...ngDevMode ? [{
      debugName: "placement"
    }] : []);
    this.triggers = input(this._config.triggers, ...ngDevMode ? [{
      debugName: "triggers"
    }] : []);
    this.container = input(this._config.container, ...ngDevMode ? [{
      debugName: "container"
    }] : []);
    this.containerClass = input("", ...ngDevMode ? [{
      debugName: "containerClass"
    }] : []);
    this.boundariesElement = input(...ngDevMode ? [void 0, {
      debugName: "boundariesElement"
    }] : []);
    this.isDisabled = input(false, ...ngDevMode ? [{
      debugName: "isDisabled"
    }] : []);
    this.delay = input(this._config.delay, ...ngDevMode ? [{
      debugName: "delay"
    }] : []);
    this.tooltipHtml = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipHtml"
    }] : []);
    this.tooltipPlacement = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipPlacement"
    }] : []);
    this.tooltipIsOpen = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipIsOpen"
    }] : []);
    this.tooltipEnable = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipEnable"
    }] : []);
    this.tooltipAppendToBody = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipAppendToBody"
    }] : []);
    this.tooltipAnimation = input(true, ...ngDevMode ? [{
      debugName: "tooltipAnimation"
    }] : []);
    this.tooltipClass = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipClass"
    }] : []);
    this.tooltipContext = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipContext"
    }] : []);
    this.tooltipPopupDelay = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipPopupDelay"
    }] : []);
    this.tooltipFadeDuration = input(150, ...ngDevMode ? [{
      debugName: "tooltipFadeDuration"
    }] : []);
    this.tooltipTrigger = input(void 0, ...ngDevMode ? [{
      debugName: "tooltipTrigger"
    }] : []);
    this.tooltipStateChanged = output();
    this._tooltip = cis.createLoader(this._elementRef, _viewContainerRef, this._renderer).provide({
      provide: TooltipConfig,
      useValue: _config
    });
    this.onShown = this._tooltip.onShown;
    this.onHidden = this._tooltip.onHidden;
  }
  ngOnInit() {
    const htmlContent = this.tooltipHtml();
    if (htmlContent !== void 0) {
      warnOnce("tooltipHtml was deprecated, please use `tooltip` instead");
      this.tooltip.set(htmlContent);
    }
    const placementValue = this.tooltipPlacement();
    if (placementValue !== void 0) {
      warnOnce("tooltipPlacement was deprecated, please use `placement` instead");
    }
    const isOpenValue = this.tooltipIsOpen();
    if (isOpenValue !== void 0) {
      warnOnce("tooltipIsOpen was deprecated, please use `isOpen` instead");
      this.isOpen = isOpenValue;
    }
    const enableValue = this.tooltipEnable();
    if (enableValue !== void 0) {
      warnOnce("tooltipEnable was deprecated, please use `isDisabled` instead");
    }
    const appendToBodyValue = this.tooltipAppendToBody();
    if (appendToBodyValue !== void 0) {
      warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
    }
    const classValue = this.tooltipClass();
    if (classValue !== void 0) {
      warnOnce("tooltipClass deprecated");
    }
    const contextValue = this.tooltipContext();
    if (contextValue !== void 0) {
      warnOnce("tooltipContext deprecated");
    }
    const delayValue = this.tooltipPopupDelay();
    if (delayValue !== void 0) {
      warnOnce("tooltipPopupDelay is deprecated, use `delay` instead");
    }
    const triggerValue = this.tooltipTrigger();
    if (triggerValue !== void 0) {
      warnOnce("tooltipTrigger was deprecated, please use `triggers` instead");
    }
    this._tooltip.listen({
      triggers: this.triggers(),
      show: () => this.show()
    });
    this.onShown.subscribe(() => {
      this.setAriaDescribedBy();
    });
    this.onHidden.subscribe(() => {
      this.setAriaDescribedBy();
    });
  }
  setAriaDescribedBy() {
    this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : void 0;
    if (this._ariaDescribedby) {
      this._renderer.setAttribute(this._elementRef.nativeElement, "aria-describedby", this._ariaDescribedby);
    } else {
      this._renderer.removeAttribute(this._elementRef.nativeElement, "aria-describedby");
    }
  }
  /**
   * Toggles an element's tooltip. This is considered a "manual" triggering of
   * the tooltip.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  /**
   * Opens an element's tooltip. This is considered a "manual" triggering of
   * the tooltip.
   */
  show() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this.adaptivePosition()
        },
        preventOverflow: {
          enabled: this.adaptivePosition(),
          boundariesElement: this.boundariesElement() || "scrollParent"
        }
      }
    });
    const tooltipValue = this.tooltip();
    const isDisabledValue = this.isDisabled() || this.tooltipEnable() !== void 0 && !this.tooltipEnable();
    const delayValue = this.tooltipPopupDelay() ?? this.delay();
    const containerValue = this.tooltipAppendToBody() ? "body" : this.container();
    const placementValue = this.tooltipPlacement() ?? this.placement();
    const triggersValue = this.tooltipTrigger()?.toString() ?? this.triggers();
    if (this.isOpen || isDisabledValue || this._delayTimeoutId || !tooltipValue) {
      return;
    }
    const showTooltip = () => {
      if (this._delayTimeoutId) {
        this._delayTimeoutId = void 0;
      }
      this._tooltip.attach(TooltipContainerComponent).to(containerValue).position({
        attachment: placementValue
      }).show({
        content: tooltipValue,
        placement: placementValue,
        containerClass: this.containerClass(),
        id: `tooltip-${this.tooltipId}`
      });
    };
    const cancelDelayedTooltipShowing = () => {
      if (this._tooltipCancelShowFn) {
        this._tooltipCancelShowFn();
      }
    };
    if (delayValue) {
      if (this._delaySubscription) {
        this._delaySubscription.unsubscribe();
      }
      this._delaySubscription = timer(delayValue).subscribe(() => {
        showTooltip();
        cancelDelayedTooltipShowing();
      });
      if (triggersValue) {
        parseTriggers(triggersValue).forEach((trigger) => {
          if (!trigger.close) {
            return;
          }
          this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, () => {
            this._delaySubscription?.unsubscribe();
            cancelDelayedTooltipShowing();
          });
        });
      }
    } else {
      showTooltip();
    }
  }
  /**
   * Closes an element's tooltip. This is considered a "manual" triggering of
   * the tooltip.
   */
  hide() {
    if (this._delayTimeoutId) {
      clearTimeout(this._delayTimeoutId);
      this._delayTimeoutId = void 0;
    }
    if (!this._tooltip.isShown) {
      return;
    }
    if (this._tooltip.instance?.classMap) {
      this._tooltip.instance.classMap["in"] = false;
    }
    setTimeout(() => {
      this._tooltip.hide();
    }, this.tooltipFadeDuration());
  }
  ngOnDestroy() {
    this._tooltip.dispose();
    if (this._delaySubscription) {
      this._delaySubscription.unsubscribe();
    }
    this.onShown.unsubscribe();
    this.onHidden.unsubscribe();
  }
  static {
    this.ɵfac = function TooltipDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TooltipDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory), ɵɵdirectiveInject(TooltipConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PositioningService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TooltipDirective,
      selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]],
      inputs: {
        adaptivePosition: [1, "adaptivePosition"],
        tooltip: [1, "tooltip"],
        placement: [1, "placement"],
        triggers: [1, "triggers"],
        container: [1, "container"],
        containerClass: [1, "containerClass"],
        boundariesElement: [1, "boundariesElement"],
        isDisabled: [1, "isDisabled"],
        delay: [1, "delay"],
        tooltipHtml: [1, "tooltipHtml"],
        tooltipPlacement: [1, "tooltipPlacement"],
        tooltipIsOpen: [1, "tooltipIsOpen"],
        tooltipEnable: [1, "tooltipEnable"],
        tooltipAppendToBody: [1, "tooltipAppendToBody"],
        tooltipAnimation: [1, "tooltipAnimation"],
        tooltipClass: [1, "tooltipClass"],
        tooltipContext: [1, "tooltipContext"],
        tooltipPopupDelay: [1, "tooltipPopupDelay"],
        tooltipFadeDuration: [1, "tooltipFadeDuration"],
        tooltipTrigger: [1, "tooltipTrigger"]
      },
      outputs: {
        tooltip: "tooltipChange",
        tooltipStateChanged: "tooltipStateChanged"
      },
      exportAs: ["bs-tooltip"],
      features: [ɵɵProvidersFeature([ComponentLoaderFactory, PositioningService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[tooltip], [tooltipHtml]",
      exportAs: "bs-tooltip",
      standalone: true,
      providers: [ComponentLoaderFactory, PositioningService]
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }, {
    type: TooltipConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: PositioningService
  }], {
    adaptivePosition: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "adaptivePosition",
        required: false
      }]
    }],
    tooltip: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltip",
        required: false
      }]
    }, {
      type: Output,
      args: ["tooltipChange"]
    }],
    placement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placement",
        required: false
      }]
    }],
    triggers: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "triggers",
        required: false
      }]
    }],
    container: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "container",
        required: false
      }]
    }],
    containerClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "containerClass",
        required: false
      }]
    }],
    boundariesElement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "boundariesElement",
        required: false
      }]
    }],
    isDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "isDisabled",
        required: false
      }]
    }],
    delay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "delay",
        required: false
      }]
    }],
    tooltipHtml: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipHtml",
        required: false
      }]
    }],
    tooltipPlacement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipPlacement",
        required: false
      }]
    }],
    tooltipIsOpen: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipIsOpen",
        required: false
      }]
    }],
    tooltipEnable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipEnable",
        required: false
      }]
    }],
    tooltipAppendToBody: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipAppendToBody",
        required: false
      }]
    }],
    tooltipAnimation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipAnimation",
        required: false
      }]
    }],
    tooltipClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipClass",
        required: false
      }]
    }],
    tooltipContext: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipContext",
        required: false
      }]
    }],
    tooltipPopupDelay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipPopupDelay",
        required: false
      }]
    }],
    tooltipFadeDuration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipFadeDuration",
        required: false
      }]
    }],
    tooltipTrigger: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltipTrigger",
        required: false
      }]
    }],
    tooltipStateChanged: [{
      type: Output,
      args: ["tooltipStateChanged"]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static {
    this.ɵfac = function TooltipModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TooltipModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TooltipModule,
      imports: [CommonModule, TooltipDirective, TooltipContainerComponent],
      exports: [TooltipDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TooltipDirective, TooltipContainerComponent],
      exports: [TooltipDirective]
    }]
  }], null, null);
})();
export {
  TooltipConfig,
  TooltipContainerComponent,
  TooltipDirective,
  TooltipModule
};
//# sourceMappingURL=ngx-bootstrap_tooltip.js.map

import {
  TooltipDirective,
  TooltipModule
} from "./chunk-DGUWYIHF.js";
import {
  endOf,
  formatDate,
  getDay,
  getFirstDayOfMonth,
  getFullYear,
  getLocale,
  getMonth,
  isAfter,
  isArray,
  isBefore,
  isDate,
  isDateValid,
  isDisabledDay,
  isFirstDayOfWeek,
  isSame,
  isSameDay$1,
  isSameMonth,
  isSameYear,
  parseDate,
  setFullDate,
  shiftDate,
  startOf,
  utcAsLocal
} from "./chunk-NMP4NT7D.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-662KAYZD.js";
import {
  ComponentLoaderFactory,
  PositioningService
} from "./chunk-QFHIPME4.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass
} from "./chunk-D4SRAP6Z.js";
import "./chunk-CRND75LV.js";
import {
  animateExpand
} from "./chunk-QYCVUEM6.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  effect,
  forwardRef,
  input,
  output,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-T5WXOWHE.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  observeOn,
  queueScheduler,
  scan,
  take,
  takeUntil
} from "./chunk-RSS3ODKE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/ngx-bootstrap/mini-ngrx/fesm2022/ngx-bootstrap-mini-ngrx.mjs
var MiniState = class extends BehaviorSubject {
  constructor(_initialState, actionsDispatcher$, reducer) {
    super(_initialState);
    const actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
    const state$ = actionInQueue$.pipe(scan((state, action) => {
      if (!action) {
        return state;
      }
      return reducer(state, action);
    }, _initialState));
    state$.subscribe((value) => this.next(value));
  }
};
var MiniStore = class _MiniStore extends Observable {
  constructor(_dispatcher, _reducer, state$) {
    super();
    this._dispatcher = _dispatcher;
    this._reducer = _reducer;
    this.source = state$;
  }
  select(pathOrMapFn) {
    const mapped$ = this.source?.pipe(map(pathOrMapFn)) || new Observable().pipe(map(pathOrMapFn));
    return mapped$.pipe(distinctUntilChanged());
  }
  lift(operator) {
    const store = new _MiniStore(this._dispatcher, this._reducer, this);
    store.operator = operator;
    return store;
  }
  dispatch(action) {
    this._dispatcher.next(action);
  }
  next(action) {
    this._dispatcher.next(action);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(err) {
    this._dispatcher.error(err);
  }
  complete() {
  }
};

// node_modules/ngx-bootstrap/timepicker/fesm2022/ngx-bootstrap-timepicker.mjs
function TimepickerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "td")(1, "a", 1);
    ɵɵdomListener("click", function TimepickerComponent_Conditional_7_Template_a_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinutes(ctx_r1.minuteStep()));
    });
    ɵɵdomElement(2, "span", 2);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, " ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "td")(1, "a", 1);
    ɵɵdomListener("click", function TimepickerComponent_Conditional_9_Template_a_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeSeconds(ctx_r1.secondsStep()));
    });
    ɵɵdomElement(2, "span", 2);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canIncrementSeconds || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "td");
  }
}
function TimepickerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, " : ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "td", 3)(1, "input", 4);
    ɵɵdomListener("wheel", function TimepickerComponent_Conditional_16_Template_input_wheel_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.prevDef($event);
      return ɵɵresetView(ctx_r1.changeMinutes(ctx_r1.minuteStep() * ctx_r1.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_Conditional_16_Template_input_keydown_ArrowUp_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinutes(ctx_r1.minuteStep(), "key"));
    })("keydown.ArrowDown", function TimepickerComponent_Conditional_16_Template_input_keydown_ArrowDown_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinutes(-ctx_r1.minuteStep(), "key"));
    })("change", function TimepickerComponent_Conditional_16_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateMinutes($event.target));
    });
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("has-error", ctx_r1.invalidMinutes);
    ɵɵadvance();
    ɵɵclassProp("is-invalid", ctx_r1.invalidMinutes);
    ɵɵdomProperty("placeholder", ctx_r1.minutesPlaceholder())("readOnly", ctx_r1.readonlyInput())("disabled", ctx_r1.disabled)("value", ctx_r1.minutes);
    ɵɵattribute("aria-label", ctx_r1.labelMinutes);
  }
}
function TimepickerComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, " : ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "td", 3)(1, "input", 4);
    ɵɵdomListener("wheel", function TimepickerComponent_Conditional_18_Template_input_wheel_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.prevDef($event);
      return ɵɵresetView(ctx_r1.changeSeconds(ctx_r1.secondsStep() * ctx_r1.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_Conditional_18_Template_input_keydown_ArrowUp_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeSeconds(ctx_r1.secondsStep(), "key"));
    })("keydown.ArrowDown", function TimepickerComponent_Conditional_18_Template_input_keydown_ArrowDown_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeSeconds(-ctx_r1.secondsStep(), "key"));
    })("change", function TimepickerComponent_Conditional_18_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSeconds($event.target));
    });
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("has-error", ctx_r1.invalidSeconds);
    ɵɵadvance();
    ɵɵclassProp("is-invalid", ctx_r1.invalidSeconds);
    ɵɵdomProperty("placeholder", ctx_r1.secondsPlaceholder())("readOnly", ctx_r1.readonlyInput())("disabled", ctx_r1.disabled)("value", ctx_r1.seconds);
    ɵɵattribute("aria-label", ctx_r1.labelSeconds);
  }
}
function TimepickerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "td")(1, "button", 7);
    ɵɵdomListener("click", function TimepickerComponent_Conditional_20_Template_button_click_1_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMeridian());
    });
    ɵɵtext(2);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.isEditable || !ctx_r1.canToggleMeridian);
    ɵɵdomProperty("disabled", !ctx_r1.isEditable || !ctx_r1.canToggleMeridian);
    ɵɵadvance();
    ɵɵtextInterpolate1("", ctx_r1.meridian, " ");
  }
}
function TimepickerComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "td")(1, "a", 1);
    ɵɵdomListener("click", function TimepickerComponent_Conditional_26_Template_a_click_1_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinutes(-ctx_r1.minuteStep()));
    });
    ɵɵdomElement(2, "span", 6);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canDecrementMinutes || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, " ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "td")(1, "a", 1);
    ɵɵdomListener("click", function TimepickerComponent_Conditional_28_Template_a_click_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeSeconds(-ctx_r1.secondsStep()));
    });
    ɵɵdomElement(2, "span", 6);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canDecrementSeconds || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵdomElementEnd();
  }
}
function TimepickerComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "td");
  }
}
var TimepickerActions = class _TimepickerActions {
  static {
    this.WRITE_VALUE = "[timepicker] write value from ng model";
  }
  static {
    this.CHANGE_HOURS = "[timepicker] change hours";
  }
  static {
    this.CHANGE_MINUTES = "[timepicker] change minutes";
  }
  static {
    this.CHANGE_SECONDS = "[timepicker] change seconds";
  }
  static {
    this.SET_TIME_UNIT = "[timepicker] set time unit";
  }
  static {
    this.UPDATE_CONTROLS = "[timepicker] update controls";
  }
  writeValue(value) {
    return {
      type: _TimepickerActions.WRITE_VALUE,
      payload: value
    };
  }
  changeHours(event) {
    return {
      type: _TimepickerActions.CHANGE_HOURS,
      payload: event
    };
  }
  changeMinutes(event) {
    return {
      type: _TimepickerActions.CHANGE_MINUTES,
      payload: event
    };
  }
  changeSeconds(event) {
    return {
      type: _TimepickerActions.CHANGE_SECONDS,
      payload: event
    };
  }
  setTime(value) {
    return {
      type: _TimepickerActions.SET_TIME_UNIT,
      payload: value
    };
  }
  updateControls(value) {
    return {
      type: _TimepickerActions.UPDATE_CONTROLS,
      payload: value
    };
  }
  static {
    this.ɵfac = function TimepickerActions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerActions)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimepickerActions,
      factory: _TimepickerActions.ɵfac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerActions, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var dex = 10;
var hoursPerDay = 24;
var hoursPerDayHalf = 12;
var minutesPerHour = 60;
var secondsPerMinute = 60;
function isValidDate(value) {
  if (!value) {
    return false;
  }
  if (value instanceof Date && isNaN(value.getHours())) {
    return false;
  }
  if (typeof value === "string") {
    return isValidDate(new Date(value));
  }
  return true;
}
function isValidLimit(controls, newDate) {
  if (controls.min && newDate < controls.min) {
    return false;
  }
  if (controls.max && newDate > controls.max) {
    return false;
  }
  return true;
}
function toNumber(value) {
  if (typeof value === "undefined") {
    return NaN;
  }
  if (typeof value === "number") {
    return value;
  }
  return parseInt(value, dex);
}
function parseHours(value, isPM = false) {
  const hour = toNumber(value);
  if (isNaN(hour) || hour < 0 || hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
    return NaN;
  }
  return hour;
}
function parseMinutes(value) {
  const minute = toNumber(value);
  if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
    return NaN;
  }
  return minute;
}
function parseSeconds(value) {
  const seconds = toNumber(value);
  if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
    return NaN;
  }
  return seconds;
}
function parseTime(value) {
  if (typeof value === "string") {
    return new Date(value);
  }
  return value;
}
function changeTime(value, diff) {
  if (!value) {
    return changeTime(createDate(/* @__PURE__ */ new Date(), 0, 0, 0), diff);
  }
  if (!diff) {
    return value;
  }
  let hour = value.getHours();
  let minutes = value.getMinutes();
  let seconds = value.getSeconds();
  if (diff.hour) {
    hour = hour + toNumber(diff.hour);
  }
  if (diff.minute) {
    minutes = minutes + toNumber(diff.minute);
  }
  if (diff.seconds) {
    seconds = seconds + toNumber(diff.seconds);
  }
  return createDate(value, hour, minutes, seconds);
}
function setTime(value, opts) {
  let hour = parseHours(opts.hour);
  const minute = parseMinutes(opts.minute);
  const seconds = parseSeconds(opts.seconds) || 0;
  if (opts.isPM && hour !== 12) {
    hour += hoursPerDayHalf;
  }
  if (!value) {
    if (!isNaN(hour) && !isNaN(minute)) {
      return createDate(/* @__PURE__ */ new Date(), hour, minute, seconds);
    }
    return value;
  }
  if (isNaN(hour) || isNaN(minute)) {
    return value;
  }
  return createDate(value, hour, minute, seconds);
}
function createDate(value, hours, minutes, seconds) {
  const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
  newValue.setFullYear(value.getFullYear());
  newValue.setMonth(value.getMonth());
  newValue.setDate(value.getDate());
  return newValue;
}
function padNumber(value) {
  const _value = value.toString();
  if (_value.length > 1) {
    return _value;
  }
  return `0${_value}`;
}
function isHourInputValid(hours, isPM) {
  return !isNaN(parseHours(hours, isPM));
}
function isMinuteInputValid(minutes) {
  return !isNaN(parseMinutes(minutes));
}
function isSecondInputValid(seconds) {
  return !isNaN(parseSeconds(seconds));
}
function isInputLimitValid(diff, max, min) {
  const newDate = setTime(/* @__PURE__ */ new Date(), diff);
  if (!newDate) {
    return false;
  }
  if (max && newDate > max) {
    return false;
  }
  if (min && newDate < min) {
    return false;
  }
  return true;
}
function isOneOfDatesEmpty(hours, minutes, seconds) {
  return hours.length === 0 || minutes.length === 0 || seconds.length === 0;
}
function isInputValid(hours, minutes = "0", seconds = "0", isPM) {
  return isHourInputValid(hours, isPM) && isMinuteInputValid(minutes) && isSecondInputValid(seconds);
}
function canChangeValue(state, event) {
  if (state.readonlyInput || state.disabled) {
    return false;
  }
  if (event) {
    if (event.source === "wheel" && !state.mousewheel) {
      return false;
    }
    if (event.source === "key" && !state.arrowkeys) {
      return false;
    }
  }
  return true;
}
function canChangeHours(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementHours) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementHours) {
    return false;
  }
  return true;
}
function canChangeMinutes(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementMinutes) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementMinutes) {
    return false;
  }
  return true;
}
function canChangeSeconds(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementSeconds) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementSeconds) {
    return false;
  }
  return true;
}
function getControlsValue(state) {
  const {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  } = state;
  return {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  };
}
function timepickerControls(value, state) {
  const hoursPerDay2 = 24;
  const hoursPerDayHalf2 = 12;
  const {
    min,
    max,
    hourStep,
    minuteStep,
    secondsStep,
    showSeconds
  } = state;
  const res = {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  };
  if (!value) {
    return res;
  }
  if (max) {
    const _newHour = changeTime(value, {
      hour: hourStep
    });
    res.canIncrementHours = max > _newHour && value.getHours() + hourStep < hoursPerDay2;
    if (!res.canIncrementHours) {
      const _newMinutes = changeTime(value, {
        minute: minuteStep
      });
      res.canIncrementMinutes = showSeconds ? max > _newMinutes : max >= _newMinutes;
    }
    if (!res.canIncrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: secondsStep
      });
      res.canIncrementSeconds = max >= _newSeconds;
    }
    if (value.getHours() < hoursPerDayHalf2) {
      res.canToggleMeridian = changeTime(value, {
        hour: hoursPerDayHalf2
      }) < max;
    }
  }
  if (min) {
    const _newHour = changeTime(value, {
      hour: -hourStep
    });
    res.canDecrementHours = min < _newHour;
    if (!res.canDecrementHours) {
      const _newMinutes = changeTime(value, {
        minute: -minuteStep
      });
      res.canDecrementMinutes = showSeconds ? min < _newMinutes : min <= _newMinutes;
    }
    if (!res.canDecrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: -secondsStep
      });
      res.canDecrementSeconds = min <= _newSeconds;
    }
    if (value.getHours() >= hoursPerDayHalf2) {
      res.canToggleMeridian = changeTime(value, {
        hour: -hoursPerDayHalf2
      }) > min;
    }
  }
  return res;
}
var TimepickerConfig = class _TimepickerConfig {
  constructor() {
    this.hourStep = 1;
    this.minuteStep = 5;
    this.secondsStep = 10;
    this.showMeridian = true;
    this.meridians = ["AM", "PM"];
    this.readonlyInput = false;
    this.disabled = false;
    this.allowEmptyTime = false;
    this.mousewheel = true;
    this.arrowkeys = true;
    this.showSpinners = true;
    this.showSeconds = false;
    this.showMinutes = true;
    this.hoursPlaceholder = "HH";
    this.minutesPlaceholder = "MM";
    this.secondsPlaceholder = "SS";
    this.ariaLabelHours = "hours";
    this.ariaLabelMinutes = "minutes";
    this.ariaLabelSeconds = "seconds";
  }
  static {
    this.ɵfac = function TimepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimepickerConfig,
      factory: _TimepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var initialState = {
  value: void 0,
  config: new TimepickerConfig(),
  controls: {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  }
};
function timepickerReducer(state = initialState, action) {
  switch (action.type) {
    case TimepickerActions.WRITE_VALUE: {
      return Object.assign({}, state, {
        value: action.payload
      });
    }
    case TimepickerActions.CHANGE_HOURS: {
      if (!canChangeValue(state.config, action.payload) || !canChangeHours(action.payload, state.controls)) {
        return state;
      }
      const _newTime = changeTime(state.value, {
        hour: action.payload.step
      });
      if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
        return state;
      }
      return Object.assign({}, state, {
        value: _newTime
      });
    }
    case TimepickerActions.CHANGE_MINUTES: {
      if (!canChangeValue(state.config, action.payload) || !canChangeMinutes(action.payload, state.controls)) {
        return state;
      }
      const _newTime = changeTime(state.value, {
        minute: action.payload.step
      });
      if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
        return state;
      }
      return Object.assign({}, state, {
        value: _newTime
      });
    }
    case TimepickerActions.CHANGE_SECONDS: {
      if (!canChangeValue(state.config, action.payload) || !canChangeSeconds(action.payload, state.controls)) {
        return state;
      }
      const _newTime = changeTime(state.value, {
        seconds: action.payload.step
      });
      if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
        return state;
      }
      return Object.assign({}, state, {
        value: _newTime
      });
    }
    case TimepickerActions.SET_TIME_UNIT: {
      if (!canChangeValue(state.config)) {
        return state;
      }
      const _newTime = setTime(state.value, action.payload);
      return Object.assign({}, state, {
        value: _newTime
      });
    }
    case TimepickerActions.UPDATE_CONTROLS: {
      const _newControlsState = timepickerControls(state.value, action.payload);
      const _newState = {
        value: state.value,
        config: action.payload,
        controls: _newControlsState
      };
      if (state.config.showMeridian !== _newState.config.showMeridian) {
        if (state.value) {
          _newState.value = new Date(state.value);
        }
      }
      return Object.assign({}, state, _newState);
    }
    default:
      return state;
  }
}
var TimepickerStore = class _TimepickerStore extends MiniStore {
  constructor() {
    const _dispatcher = new BehaviorSubject({
      type: "[mini-ngrx] dispatcher init"
    });
    const state = new MiniState(initialState, _dispatcher, timepickerReducer);
    super(_dispatcher, timepickerReducer, state);
  }
  static {
    this.ɵfac = function TimepickerStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerStore)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimepickerStore,
      factory: _TimepickerStore.ɵfac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerStore, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimepickerComponent),
  multi: true
};
var TimepickerComponent = class _TimepickerComponent {
  get disabled() {
    return this.disabledInput() || this._cvaDisabled();
  }
  set disabled(value) {
    this._cvaDisabled.set(value);
  }
  // Helper method to convert input signals to TimepickerComponentState
  getComponentState() {
    return {
      hourStep: this.hourStep(),
      minuteStep: this.minuteStep(),
      secondsStep: this.secondsStep(),
      readonlyInput: this.readonlyInput(),
      disabled: this.disabled,
      mousewheel: this.mousewheel(),
      arrowkeys: this.arrowkeys(),
      showSpinners: this.showSpinners(),
      showMeridian: this.showMeridian(),
      showSeconds: this.showSeconds(),
      meridians: this.meridians(),
      min: this.min(),
      max: this.max()
    };
  }
  constructor(_config, _cd, _store, _timepickerActions) {
    this._config = _config;
    this._cd = _cd;
    this._store = _store;
    this._timepickerActions = _timepickerActions;
    this.hourStep = input(this._config.hourStep, ...ngDevMode ? [{
      debugName: "hourStep"
    }] : []);
    this.minuteStep = input(this._config.minuteStep, ...ngDevMode ? [{
      debugName: "minuteStep"
    }] : []);
    this.secondsStep = input(this._config.secondsStep, ...ngDevMode ? [{
      debugName: "secondsStep"
    }] : []);
    this.readonlyInput = input(this._config.readonlyInput, ...ngDevMode ? [{
      debugName: "readonlyInput"
    }] : []);
    this.disabledInput = input(this._config.disabled, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "disabledInput"
    } : {}), {
      alias: "disabled"
    }));
    this.mousewheel = input(this._config.mousewheel, ...ngDevMode ? [{
      debugName: "mousewheel"
    }] : []);
    this.arrowkeys = input(this._config.arrowkeys, ...ngDevMode ? [{
      debugName: "arrowkeys"
    }] : []);
    this.showSpinners = input(this._config.showSpinners, ...ngDevMode ? [{
      debugName: "showSpinners"
    }] : []);
    this.showMeridian = input(this._config.showMeridian, ...ngDevMode ? [{
      debugName: "showMeridian"
    }] : []);
    this.showMinutes = input(this._config.showMinutes, ...ngDevMode ? [{
      debugName: "showMinutes"
    }] : []);
    this.showSeconds = input(this._config.showSeconds, ...ngDevMode ? [{
      debugName: "showSeconds"
    }] : []);
    this.meridians = input(this._config.meridians, ...ngDevMode ? [{
      debugName: "meridians"
    }] : []);
    this.min = input(this._config.min, ...ngDevMode ? [{
      debugName: "min"
    }] : []);
    this.max = input(this._config.max, ...ngDevMode ? [{
      debugName: "max"
    }] : []);
    this.hoursPlaceholder = input(this._config.hoursPlaceholder, ...ngDevMode ? [{
      debugName: "hoursPlaceholder"
    }] : []);
    this.minutesPlaceholder = input(this._config.minutesPlaceholder, ...ngDevMode ? [{
      debugName: "minutesPlaceholder"
    }] : []);
    this.secondsPlaceholder = input(this._config.secondsPlaceholder, ...ngDevMode ? [{
      debugName: "secondsPlaceholder"
    }] : []);
    this.isValid = output();
    this.meridianChange = output();
    this.hours = "";
    this.minutes = "";
    this.seconds = "";
    this.meridian = "";
    this._cvaDisabled = signal(false, ...ngDevMode ? [{
      debugName: "_cvaDisabled"
    }] : []);
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
    this.labelHours = "hours";
    this.labelMinutes = "minutes";
    this.labelSeconds = "seconds";
    this.canIncrementHours = true;
    this.canIncrementMinutes = true;
    this.canIncrementSeconds = true;
    this.canDecrementHours = true;
    this.canDecrementMinutes = true;
    this.canDecrementSeconds = true;
    this.canToggleMeridian = true;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.config = _config;
    effect(() => {
      this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this.getComponentState())));
    });
    this.timepickerSub = _store.select((state) => state.value).subscribe((value) => {
      this._renderTime(value);
      this.onChange(value);
      this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this.getComponentState())));
    });
    _store.select((state) => state.controls).subscribe((controlsState) => {
      const isTimepickerInputValid = isInputValid(this.hours, this.minutes, this.seconds, this.isPM());
      const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
      this.isValid.emit(isValidResult);
      Object.assign(this, controlsState);
      _cd.markForCheck();
    });
  }
  /** @deprecated - please use `isEditable` instead */
  get isSpinnersVisible() {
    return this.showSpinners() && !this.readonlyInput();
  }
  get isEditable() {
    return !(this.readonlyInput() || this.disabled);
  }
  resetValidation() {
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
  }
  isPM() {
    return this.showMeridian() && this.meridian === this.meridians()[1];
  }
  prevDef($event) {
    $event.preventDefault();
  }
  wheelSign($event) {
    return Math.sign($event.deltaY || 0) * -1;
  }
  changeHours(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeHours({
      step,
      source
    }));
  }
  changeMinutes(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeMinutes({
      step,
      source
    }));
  }
  changeSeconds(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeSeconds({
      step,
      source
    }));
  }
  updateHours(target) {
    this.resetValidation();
    this.hours = target.value;
    const isTimepickerInputValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
    const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValidResult) {
      this.invalidHours = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateMinutes(target) {
    this.resetValidation();
    this.minutes = target.value;
    const isTimepickerInputValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
    const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValidResult) {
      this.invalidMinutes = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateSeconds(target) {
    this.resetValidation();
    this.seconds = target.value;
    const isTimepickerInputValid = isSecondInputValid(this.seconds) && this.isValidLimit();
    const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValidResult) {
      this.invalidSeconds = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  isValidLimit() {
    return isInputLimitValid({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }, this.max(), this.min());
  }
  isOneOfDatesIsEmpty() {
    return isOneOfDatesEmpty(this.hours, this.minutes, this.seconds);
  }
  _updateTime() {
    const _seconds = this.showSeconds() ? this.seconds : void 0;
    const _minutes = this.showMinutes() ? this.minutes : void 0;
    const isTimepickerInputValid = isInputValid(this.hours, _minutes, _seconds, this.isPM());
    const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValidResult) {
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._store.dispatch(this._timepickerActions.setTime({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }));
  }
  toggleMeridian() {
    if (!this.showMeridian() || !this.isEditable) {
      return;
    }
    const _hoursPerDayHalf = 12;
    this._store.dispatch(this._timepickerActions.changeHours({
      step: _hoursPerDayHalf,
      source: ""
    }));
  }
  /**
   * Write a new value to the element.
   */
  writeValue(obj) {
    if (isValidDate(obj)) {
      this.resetValidation();
      this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
    } else if (obj == null) {
      this._store.dispatch(this._timepickerActions.writeValue());
    }
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * This function is called when the control status changes to or from "disabled".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this._cvaDisabled.set(isDisabled);
    this._cd.markForCheck();
  }
  ngOnDestroy() {
    this.timepickerSub?.unsubscribe();
  }
  _renderTime(value) {
    if (!value || !isValidDate(value)) {
      this.hours = "";
      this.minutes = "";
      this.seconds = "";
      this.meridian = this.meridians()[0];
      this.meridianChange.emit(this.meridian);
      return;
    }
    const _value = parseTime(value);
    if (!_value) {
      return;
    }
    const _hoursPerDayHalf = 12;
    let _hours = _value.getHours();
    if (this.showMeridian()) {
      this.meridian = this.meridians()[_hours >= _hoursPerDayHalf ? 1 : 0];
      this.meridianChange.emit(this.meridian);
      _hours = _hours % _hoursPerDayHalf;
      if (_hours === 0) {
        _hours = _hoursPerDayHalf;
      }
    }
    this.hours = padNumber(_hours);
    this.minutes = padNumber(_value.getMinutes());
    this.seconds = padNumber(_value.getUTCSeconds());
  }
  static {
    this.ɵfac = function TimepickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerComponent)(ɵɵdirectiveInject(TimepickerConfig), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TimepickerStore), ɵɵdirectiveInject(TimepickerActions));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TimepickerComponent,
      selectors: [["timepicker"]],
      inputs: {
        hourStep: [1, "hourStep"],
        minuteStep: [1, "minuteStep"],
        secondsStep: [1, "secondsStep"],
        readonlyInput: [1, "readonlyInput"],
        disabledInput: [1, "disabled", "disabledInput"],
        mousewheel: [1, "mousewheel"],
        arrowkeys: [1, "arrowkeys"],
        showSpinners: [1, "showSpinners"],
        showMeridian: [1, "showMeridian"],
        showMinutes: [1, "showMinutes"],
        showSeconds: [1, "showSeconds"],
        meridians: [1, "meridians"],
        min: [1, "min"],
        max: [1, "max"],
        hoursPlaceholder: [1, "hoursPlaceholder"],
        minutesPlaceholder: [1, "minutesPlaceholder"],
        secondsPlaceholder: [1, "secondsPlaceholder"]
      },
      outputs: {
        isValid: "isValid",
        meridianChange: "meridianChange"
      },
      features: [ɵɵProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore, TimepickerActions])],
      decls: 31,
      vars: 33,
      consts: [[1, "text-center", 3, "hidden"], ["href", "javascript:void(0);", 1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [1, "form-group", "mb-3"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change", "placeholder", "readonly", "disabled", "value"], [1, "form-group", "mb-3", 3, "has-error"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "click", "disabled"]],
      template: function TimepickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "table")(1, "tbody")(2, "tr", 0)(3, "td")(4, "a", 1);
          ɵɵdomListener("click", function TimepickerComponent_Template_a_click_4_listener() {
            return ctx.changeHours(ctx.hourStep());
          });
          ɵɵdomElement(5, "span", 2);
          ɵɵdomElementEnd()();
          ɵɵconditionalCreate(6, TimepickerComponent_Conditional_6_Template, 2, 0, "td");
          ɵɵconditionalCreate(7, TimepickerComponent_Conditional_7_Template, 3, 2, "td");
          ɵɵconditionalCreate(8, TimepickerComponent_Conditional_8_Template, 2, 0, "td");
          ɵɵconditionalCreate(9, TimepickerComponent_Conditional_9_Template, 3, 2, "td");
          ɵɵconditionalCreate(10, TimepickerComponent_Conditional_10_Template, 2, 0, "td");
          ɵɵconditionalCreate(11, TimepickerComponent_Conditional_11_Template, 1, 0, "td");
          ɵɵdomElementEnd();
          ɵɵdomElementStart(12, "tr")(13, "td", 3)(14, "input", 4);
          ɵɵdomListener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) {
            ctx.prevDef($event);
            return ctx.changeHours(ctx.hourStep() * ctx.wheelSign($event), "wheel");
          })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() {
            return ctx.changeHours(ctx.hourStep(), "key");
          })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() {
            return ctx.changeHours(-ctx.hourStep(), "key");
          })("change", function TimepickerComponent_Template_input_change_14_listener($event) {
            return ctx.updateHours($event.target);
          });
          ɵɵdomElementEnd()();
          ɵɵconditionalCreate(15, TimepickerComponent_Conditional_15_Template, 2, 0, "td");
          ɵɵconditionalCreate(16, TimepickerComponent_Conditional_16_Template, 2, 9, "td", 5);
          ɵɵconditionalCreate(17, TimepickerComponent_Conditional_17_Template, 2, 0, "td");
          ɵɵconditionalCreate(18, TimepickerComponent_Conditional_18_Template, 2, 9, "td", 5);
          ɵɵconditionalCreate(19, TimepickerComponent_Conditional_19_Template, 2, 0, "td");
          ɵɵconditionalCreate(20, TimepickerComponent_Conditional_20_Template, 3, 4, "td");
          ɵɵdomElementEnd();
          ɵɵdomElementStart(21, "tr", 0)(22, "td")(23, "a", 1);
          ɵɵdomListener("click", function TimepickerComponent_Template_a_click_23_listener() {
            return ctx.changeHours(-ctx.hourStep());
          });
          ɵɵdomElement(24, "span", 6);
          ɵɵdomElementEnd()();
          ɵɵconditionalCreate(25, TimepickerComponent_Conditional_25_Template, 2, 0, "td");
          ɵɵconditionalCreate(26, TimepickerComponent_Conditional_26_Template, 3, 2, "td");
          ɵɵconditionalCreate(27, TimepickerComponent_Conditional_27_Template, 2, 0, "td");
          ɵɵconditionalCreate(28, TimepickerComponent_Conditional_28_Template, 3, 2, "td");
          ɵɵconditionalCreate(29, TimepickerComponent_Conditional_29_Template, 2, 0, "td");
          ɵɵconditionalCreate(30, TimepickerComponent_Conditional_30_Template, 1, 0, "td");
          ɵɵdomElementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵdomProperty("hidden", !ctx.showSpinners());
          ɵɵadvance(2);
          ɵɵclassProp("disabled", !ctx.canIncrementHours || !ctx.isEditable);
          ɵɵadvance(2);
          ɵɵconditional(ctx.showMinutes() ? 6 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMinutes() ? 7 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showSeconds() ? 8 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showSeconds() ? 9 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMeridian() ? 10 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMeridian() ? 11 : -1);
          ɵɵadvance(2);
          ɵɵclassProp("has-error", ctx.invalidHours);
          ɵɵadvance();
          ɵɵclassProp("is-invalid", ctx.invalidHours);
          ɵɵdomProperty("placeholder", ctx.hoursPlaceholder())("readOnly", ctx.readonlyInput())("disabled", ctx.disabled)("value", ctx.hours);
          ɵɵattribute("aria-label", ctx.labelHours);
          ɵɵadvance();
          ɵɵconditional(ctx.showMinutes() ? 15 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMinutes() ? 16 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showSeconds() ? 17 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showSeconds() ? 18 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMeridian() ? 19 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMeridian() ? 20 : -1);
          ɵɵadvance();
          ɵɵdomProperty("hidden", !ctx.showSpinners());
          ɵɵadvance(2);
          ɵɵclassProp("disabled", !ctx.canDecrementHours || !ctx.isEditable);
          ɵɵadvance(2);
          ɵɵconditional(ctx.showMinutes() ? 25 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMinutes() ? 26 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showSeconds() ? 27 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showSeconds() ? 28 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMeridian() ? 29 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showMeridian() ? 30 : -1);
        }
      },
      styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:2px}.bs-chevron-down{-webkit-transform:rotate(-135deg);transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerComponent, [{
    type: Component,
    args: [{
      selector: "timepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore, TimepickerActions],
      encapsulation: ViewEncapsulation.None,
      standalone: true,
      imports: [],
      template: `<table>
  <tbody>
  <tr class="text-center" [hidden]="!showSpinners()">
    <!-- increment hours button-->
    <td>
      <a class="btn btn-link" [class.disabled]="!canIncrementHours || !isEditable"
         (click)="changeHours(hourStep())"
         href="javascript:void(0);"
      ><span class="bs-chevron bs-chevron-up"></span></a>
    </td>
    <!-- divider -->
    @if (showMinutes()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- increment minutes button -->
    @if (showMinutes()) {
      <td>
        <a class="btn btn-link" [class.disabled]="!canIncrementMinutes || !isEditable"
           (click)="changeMinutes(minuteStep())"
           href="javascript:void(0);"
        ><span class="bs-chevron bs-chevron-up"></span></a>
      </td>
    }
    <!-- divider -->
    @if (showSeconds()) {
      <td>&nbsp;</td>
    }
    <!-- increment seconds button -->
    @if (showSeconds()) {
      <td>
        <a class="btn btn-link" [class.disabled]="!canIncrementSeconds || !isEditable"
           (click)="changeSeconds(secondsStep())"
           href="javascript:void(0);"
        >
          <span class="bs-chevron bs-chevron-up"></span>
        </a>
      </td>
    }
    <!-- space between -->
    @if (showMeridian()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- meridian placeholder-->
    @if (showMeridian()) {
      <td></td>
    }
  </tr>
  <tr>
    <!-- hours -->
    <td class="form-group mb-3" [class.has-error]="invalidHours">
      <input type="text" [class.is-invalid]="invalidHours"
             class="form-control text-center bs-timepicker-field"
             [placeholder]="hoursPlaceholder()"
             maxlength="2"
             [readonly]="readonlyInput()"
             [disabled]="disabled"
             [value]="hours"
             (wheel)="prevDef($event);changeHours(hourStep() * wheelSign($event), 'wheel')"
             (keydown.ArrowUp)="changeHours(hourStep(), 'key')"
             (keydown.ArrowDown)="changeHours(-hourStep(), 'key')"
             (change)="updateHours($event.target)" [attr.aria-label]="labelHours"></td>
    <!-- divider -->
    @if (showMinutes()) {
      <td>&nbsp;:&nbsp;</td>
    }
    <!-- minutes -->
    @if (showMinutes()) {
      <td class="form-group mb-3" [class.has-error]="invalidMinutes">
        <input type="text" [class.is-invalid]="invalidMinutes"
               class="form-control text-center bs-timepicker-field"
               [placeholder]="minutesPlaceholder()"
               maxlength="2"
               [readonly]="readonlyInput()"
               [disabled]="disabled"
               [value]="minutes"
               (wheel)="prevDef($event);changeMinutes(minuteStep() * wheelSign($event), 'wheel')"
               (keydown.ArrowUp)="changeMinutes(minuteStep(), 'key')"
               (keydown.ArrowDown)="changeMinutes(-minuteStep(), 'key')"
               (change)="updateMinutes($event.target)" [attr.aria-label]="labelMinutes">
      </td>
    }
    <!-- divider -->
    @if (showSeconds()) {
      <td>&nbsp;:&nbsp;</td>
    }
    <!-- seconds -->
    @if (showSeconds()) {
      <td class="form-group mb-3" [class.has-error]="invalidSeconds">
        <input type="text" [class.is-invalid]="invalidSeconds"
               class="form-control text-center bs-timepicker-field"
               [placeholder]="secondsPlaceholder()"
               maxlength="2"
               [readonly]="readonlyInput()"
               [disabled]="disabled"
               [value]="seconds"
               (wheel)="prevDef($event);changeSeconds(secondsStep() * wheelSign($event), 'wheel')"
               (keydown.ArrowUp)="changeSeconds(secondsStep(), 'key')"
               (keydown.ArrowDown)="changeSeconds(-secondsStep(), 'key')"
               (change)="updateSeconds($event.target)" [attr.aria-label]="labelSeconds">
      </td>
    }
    <!-- space between -->
    @if (showMeridian()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- meridian -->
    @if (showMeridian()) {
      <td>
        <button type="button" class="btn btn-default text-center"
                [disabled]="!isEditable || !canToggleMeridian"
                [class.disabled]="!isEditable || !canToggleMeridian"
                (click)="toggleMeridian()"
        >{{ meridian }}
        </button>
      </td>
    }
  </tr>
  <tr class="text-center" [hidden]="!showSpinners()">
    <!-- decrement hours button-->
    <td>
      <a class="btn btn-link" [class.disabled]="!canDecrementHours || !isEditable"
         (click)="changeHours(-hourStep())"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-down"></span>
      </a>
    </td>
    <!-- divider -->
    @if (showMinutes()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- decrement minutes button-->
    @if (showMinutes()) {
      <td>
        <a class="btn btn-link" [class.disabled]="!canDecrementMinutes || !isEditable"
           (click)="changeMinutes(-minuteStep())"
           href="javascript:void(0);"
        >
          <span class="bs-chevron bs-chevron-down"></span>
        </a>
      </td>
    }
    <!-- divider -->
    @if (showSeconds()) {
      <td>&nbsp;</td>
    }
    <!-- decrement seconds button-->
    @if (showSeconds()) {
      <td>
        <a class="btn btn-link" [class.disabled]="!canDecrementSeconds || !isEditable"
           (click)="changeSeconds(-secondsStep())"
           href="javascript:void(0);"
        >
          <span class="bs-chevron bs-chevron-down"></span>
        </a>
      </td>
    }
    <!-- space between -->
    @if (showMeridian()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- meridian placeholder-->
    @if (showMeridian()) {
      <td></td>
    }
  </tr>
  </tbody>
</table>
`,
      styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:2px}.bs-chevron-down{-webkit-transform:rotate(-135deg);transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"]
    }]
  }], () => [{
    type: TimepickerConfig
  }, {
    type: ChangeDetectorRef
  }, {
    type: TimepickerStore
  }, {
    type: TimepickerActions
  }], {
    hourStep: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hourStep",
        required: false
      }]
    }],
    minuteStep: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minuteStep",
        required: false
      }]
    }],
    secondsStep: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "secondsStep",
        required: false
      }]
    }],
    readonlyInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "readonlyInput",
        required: false
      }]
    }],
    disabledInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    mousewheel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mousewheel",
        required: false
      }]
    }],
    arrowkeys: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "arrowkeys",
        required: false
      }]
    }],
    showSpinners: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showSpinners",
        required: false
      }]
    }],
    showMeridian: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showMeridian",
        required: false
      }]
    }],
    showMinutes: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showMinutes",
        required: false
      }]
    }],
    showSeconds: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showSeconds",
        required: false
      }]
    }],
    meridians: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "meridians",
        required: false
      }]
    }],
    min: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "min",
        required: false
      }]
    }],
    max: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "max",
        required: false
      }]
    }],
    hoursPlaceholder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hoursPlaceholder",
        required: false
      }]
    }],
    minutesPlaceholder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minutesPlaceholder",
        required: false
      }]
    }],
    secondsPlaceholder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "secondsPlaceholder",
        required: false
      }]
    }],
    isValid: [{
      type: Output,
      args: ["isValid"]
    }],
    meridianChange: [{
      type: Output,
      args: ["meridianChange"]
    }]
  });
})();
var TimepickerModule = class _TimepickerModule {
  static {
    this.ɵfac = function TimepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TimepickerModule,
      imports: [TimepickerComponent],
      exports: [TimepickerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [TimepickerComponent],
      exports: [TimepickerComponent]
    }]
  }], null, null);
})();

// node_modules/ngx-bootstrap/datepicker/fesm2022/ngx-bootstrap-datepicker.mjs
function BsCustomDatesViewComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 2);
    ɵɵdomListener("click", function BsCustomDatesViewComponent_For_2_Template_button_click_0_listener() {
      const range_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectFromRanges(range_r2));
    });
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const range_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("selected", ctx_r2.compareRanges(range_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", range_r2.label, " ");
  }
}
function BsDatepickerNavigationViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵtext(0, " ​ ");
    ɵɵdomElementStart(1, "button", 1);
    ɵɵdomListener("click", function BsDatepickerNavigationViewComponent_Conditional_3_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.view("month"));
    });
    ɵɵdomElementStart(2, "span");
    ɵɵtext(3);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵdomProperty("disabled", ctx_r1.isDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.calendar.monthTitle);
  }
}
var _c0 = [[["bs-datepicker-navigation-view"]], "*"];
var _c1 = ["bs-datepicker-navigation-view", "*"];
function BsCalendarLayoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "bs-current-date", 0);
  }
}
function BsCalendarLayoutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "bs-timepicker");
  }
}
function BsYearsCalendarViewComponent_For_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 3);
    ɵɵlistener("click", function BsYearsCalendarViewComponent_For_5_For_2_Template_td_click_0_listener() {
      const year_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.viewYear(year_r2));
    })("mouseenter", function BsYearsCalendarViewComponent_For_5_For_2_Template_td_mouseenter_0_listener() {
      const year_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.hoverYear(year_r2, true));
    })("mouseleave", function BsYearsCalendarViewComponent_For_5_For_2_Template_td_mouseleave_0_listener() {
      const year_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.hoverYear(year_r2, false));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const year_r2 = ctx.$implicit;
    ɵɵclassProp("disabled", year_r2.isDisabled)("is-highlighted", year_r2.isHovered);
    ɵɵadvance();
    ɵɵclassProp("selected", year_r2.isSelected);
    ɵɵadvance();
    ɵɵtextInterpolate(year_r2.label);
  }
}
function BsYearsCalendarViewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵrepeaterCreate(1, BsYearsCalendarViewComponent_For_5_For_2_Template, 3, 7, "td", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵrepeater(row_r4);
  }
}
function BsMonthCalendarViewComponent_For_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 3);
    ɵɵlistener("click", function BsMonthCalendarViewComponent_For_5_For_2_Template_td_click_0_listener() {
      const month_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.viewMonth(month_r2));
    })("mouseenter", function BsMonthCalendarViewComponent_For_5_For_2_Template_td_mouseenter_0_listener() {
      const month_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.hoverMonth(month_r2, true));
    })("mouseleave", function BsMonthCalendarViewComponent_For_5_For_2_Template_td_mouseleave_0_listener() {
      const month_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.hoverMonth(month_r2, false));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const month_r2 = ctx.$implicit;
    ɵɵclassProp("disabled", month_r2.isDisabled)("is-highlighted", month_r2.isHovered);
    ɵɵadvance();
    ɵɵclassProp("selected", month_r2.isSelected);
    ɵɵadvance();
    ɵɵtextInterpolate(month_r2.label);
  }
}
function BsMonthCalendarViewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵrepeaterCreate(1, BsMonthCalendarViewComponent_For_5_For_2_Template, 3, 7, "td", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵrepeater(row_r4);
  }
}
var _c2 = ["bsDatepickerDayDecorator", ""];
function BsDaysCalendarViewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th");
  }
}
function BsDaysCalendarViewComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_14_r1 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("", ctx_r1.calendar.weekdays[ɵ$index_14_r1], " ");
  }
}
function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 6);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r3);
      const week_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selectWeek(week_r4));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_20_r5 = ɵɵnextContext(2).$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.calendar.weekNumbers[ɵ$index_20_r5]);
  }
}
function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 7);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r6);
      const week_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selectWeek(week_r4));
    })("mouseenter", function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template_span_mouseenter_0_listener() {
      ɵɵrestoreView(_r6);
      const week_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.weekHoverHandler(week_r4, true));
    })("mouseleave", function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template_span_mouseleave_0_listener() {
      ɵɵrestoreView(_r6);
      const week_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.weekHoverHandler(week_r4, false));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_20_r5 = ɵɵnextContext(2).$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.calendar.weekNumbers[ɵ$index_20_r5]);
  }
}
function BsDaysCalendarViewComponent_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵconditionalCreate(1, BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_1_Template, 2, 1, "span");
    ɵɵconditionalCreate(2, BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template, 2, 1, "span");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("active-week", ctx_r1.isWeekHovered);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isiOS ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.isiOS ? 2 : -1);
  }
}
function BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 10);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r7);
      const day_r8 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.selectDay(day_r8));
    })("mouseenter", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template_span_mouseenter_0_listener() {
      ɵɵrestoreView(_r7);
      const day_r8 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.hoverDay(day_r8, true));
    })("mouseleave", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template_span_mouseleave_0_listener() {
      ɵɵrestoreView(_r7);
      const day_r8 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.hoverDay(day_r8, false));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r8 = ɵɵnextContext().$implicit;
    ɵɵproperty("tooltip", ɵɵinterpolate(day_r8.tooltipText))("day", day_r8);
    ɵɵadvance();
    ɵɵtextInterpolate1("", day_r8.label, " 3");
  }
}
function BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 11);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r9);
      const day_r8 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.selectDay(day_r8));
    })("mouseenter", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template_span_mouseenter_0_listener() {
      ɵɵrestoreView(_r9);
      const day_r8 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.hoverDay(day_r8, true));
    })("mouseleave", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template_span_mouseleave_0_listener() {
      ɵɵrestoreView(_r9);
      const day_r8 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.hoverDay(day_r8, false));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r8 = ɵɵnextContext().$implicit;
    ɵɵproperty("day", day_r8);
    ɵɵadvance();
    ɵɵtextInterpolate1("", day_r8.label, " 2");
  }
}
function BsDaysCalendarViewComponent_For_10_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 12);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_3_Template_span_click_0_listener() {
      ɵɵrestoreView(_r10);
      const day_r8 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.selectDay(day_r8));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r8 = ɵɵnextContext().$implicit;
    ɵɵproperty("day", day_r8);
    ɵɵadvance();
    ɵɵtextInterpolate1("", day_r8.label, " 1");
  }
}
function BsDaysCalendarViewComponent_For_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 4);
    ɵɵconditionalCreate(1, BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template, 2, 4, "span", 8);
    ɵɵconditionalCreate(2, BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template, 2, 2, "span", 9);
    ɵɵconditionalCreate(3, BsDaysCalendarViewComponent_For_10_For_3_Conditional_3_Template, 2, 2, "span", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.isiOS && ctx_r1.isShowTooltip ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.isiOS && !ctx_r1.isShowTooltip ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isiOS ? 3 : -1);
  }
}
function BsDaysCalendarViewComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵconditionalCreate(1, BsDaysCalendarViewComponent_For_10_Conditional_1_Template, 3, 4, "td", 3);
    ɵɵrepeaterCreate(2, BsDaysCalendarViewComponent_For_10_For_3_Template, 4, 3, "td", 4, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r1.options && ctx_r1.options.showWeekNumbers ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(week_r4.days);
  }
}
var _c3 = ["startTP"];
function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-days-calendar-view", 10);
    ɵɵpipe(1, "async");
    ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.dayHoverHandler($event));
    })("onHoverWeek", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.weekHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.daySelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r3)("isDisabled", ctx_r1.isDatePickerDisabled)("options", ɵɵpipeBind1(1, 5, ctx_r1.options$));
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "timepicker", 11, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r1.isDatePickerDisabled);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "timepicker", 11, 0);
    ɵɵconditionalCreate(3, BsDatepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template, 2, 1, "timepicker", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isDatePickerDisabled);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.isRangePicker ? 3 : -1);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template, 2, 7, "bs-days-calendar-view", 8, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵconditionalCreate(4, BsDatepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Template, 4, 2, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 1, ctx_r1.daysCalendar$));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.withTimepicker ? 4 : -1);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-month-calendar-view", 13);
    ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.monthHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.monthSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r5);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template, 1, 3, "bs-month-calendar-view", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r1.monthsCalendar));
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-years-calendar-view", 13);
    ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.yearHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.yearSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r7);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template, 1, 3, "bs-years-calendar-view", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r1.yearsCalendar));
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "button", 14);
    ɵɵtext(2, "Apply");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 15);
    ɵɵtext(4, "Cancel");
    ɵɵelementEnd()();
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "button", 19);
    ɵɵlistener("click", function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("today-left", ctx_r1.todayPos === "left")("today-right", ctx_r1.todayPos === "right")("today-center", ctx_r1.todayPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.todayBtnLbl);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20)(1, "button", 19);
    ɵɵlistener("click", function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clearDate());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("clear-left", ctx_r1.clearPos === "left")("clear-right", ctx_r1.clearPos === "right")("clear-center", ctx_r1.clearPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.clearBtnLbl);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵconditionalCreate(1, BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 7, "div", 16);
    ɵɵconditionalCreate(2, BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template, 3, 7, "div", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTodayBtn ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showClearBtn ? 2 : -1);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "bs-custom-date-view", 21);
    ɵɵlistener("onSelect", function BsDatepickerContainerComponent_Conditional_0_Conditional_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setRangeOnCalendar($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("selectedRange", ctx_r1.chosenRange)("ranges", ctx_r1.customRanges)("customRangeLabel", ctx_r1.customRangeBtnLbl);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵconditionalCreate(3, BsDatepickerContainerComponent_Conditional_0_Case_3_Template, 5, 3);
    ɵɵpipe(4, "async");
    ɵɵconditionalBranchCreate(5, BsDatepickerContainerComponent_Conditional_0_Case_5_Template, 4, 2, "div", 5)(6, BsDatepickerContainerComponent_Conditional_0_Case_6_Template, 4, 2, "div", 5);
    ɵɵelementEnd();
    ɵɵconditionalCreate(7, BsDatepickerContainerComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 6);
    ɵɵconditionalCreate(8, BsDatepickerContainerComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 6);
    ɵɵelementEnd();
    ɵɵconditionalCreate(9, BsDatepickerContainerComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.containerClass);
    ɵɵadvance(3);
    ɵɵconditional((tmp_2_0 = ɵɵpipeBind1(4, 5, ctx_r1.viewMode)) === "day" ? 3 : tmp_2_0 === "month" ? 5 : tmp_2_0 === "year" ? 6 : -1);
    ɵɵadvance(4);
    ɵɵconditional(false ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTodayBtn || ctx_r1.showClearBtn ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.customRanges && ctx_r1.customRanges.length > 0 ? 9 : -1);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-days-calendar-view", 10);
    ɵɵpipe(1, "async");
    ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.dayHoverHandler($event));
    })("onHoverWeek", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.weekHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.daySelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r3)("isDisabled", ctx_r1.isDatePickerDisabled)("options", ɵɵpipeBind1(1, 5, ctx_r1.options$));
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "timepicker", 11, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r1.isDatePickerDisabled);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "timepicker", 11, 0);
    ɵɵconditionalCreate(3, BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template, 2, 1, "timepicker", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isDatePickerDisabled);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.isRangePicker ? 3 : -1);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template, 2, 7, "bs-days-calendar-view", 8, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵconditionalCreate(4, BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Template, 4, 2, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 1, ctx_r1.daysCalendar$));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.withTimepicker ? 4 : -1);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-month-calendar-view", 13);
    ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.monthHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.monthSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r5);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template, 1, 3, "bs-month-calendar-view", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r1.monthsCalendar));
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-years-calendar-view", 13);
    ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.yearHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.yearSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r7);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template, 1, 3, "bs-years-calendar-view", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r1.yearsCalendar));
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "button", 14);
    ɵɵtext(2, "Apply");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 15);
    ɵɵtext(4, "Cancel");
    ɵɵelementEnd()();
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "button", 19);
    ɵɵlistener("click", function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("today-left", ctx_r1.todayPos === "left")("today-right", ctx_r1.todayPos === "right")("today-center", ctx_r1.todayPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.todayBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20)(1, "button", 19);
    ɵɵlistener("click", function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clearDate());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("clear-left", ctx_r1.clearPos === "left")("clear-right", ctx_r1.clearPos === "right")("clear-center", ctx_r1.clearPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.clearBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵconditionalCreate(1, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 7, "div", 16);
    ɵɵconditionalCreate(2, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template, 3, 7, "div", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTodayBtn ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showClearBtn ? 2 : -1);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "bs-custom-date-view", 21);
    ɵɵlistener("onSelect", function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setRangeOnCalendar($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("selectedRange", ctx_r1.chosenRange)("ranges", ctx_r1.customRanges)("customRangeLabel", ctx_r1.customRangeBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵconditionalCreate(3, BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Template, 5, 3);
    ɵɵpipe(4, "async");
    ɵɵconditionalBranchCreate(5, BsDatepickerInlineContainerComponent_Conditional_0_Case_5_Template, 4, 2, "div", 5)(6, BsDatepickerInlineContainerComponent_Conditional_0_Case_6_Template, 4, 2, "div", 5);
    ɵɵelementEnd();
    ɵɵconditionalCreate(7, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 6);
    ɵɵconditionalCreate(8, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 6);
    ɵɵelementEnd();
    ɵɵconditionalCreate(9, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.containerClass);
    ɵɵadvance(3);
    ɵɵconditional((tmp_2_0 = ɵɵpipeBind1(4, 5, ctx_r1.viewMode)) === "day" ? 3 : tmp_2_0 === "month" ? 5 : tmp_2_0 === "year" ? 6 : -1);
    ɵɵadvance(4);
    ɵɵconditional(false ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTodayBtn || ctx_r1.showClearBtn ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.customRanges && ctx_r1.customRanges.length > 0 ? 9 : -1);
  }
}
var _c4 = ["endTP"];
function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-days-calendar-view", 10);
    ɵɵpipe(1, "async");
    ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.dayHoverHandler($event));
    })("onHoverWeek", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.weekHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.daySelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r3)("isDisabled", ctx_r1.isDatePickerDisabled)("options", ɵɵpipeBind1(1, 5, ctx_r1.options$));
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "timepicker", 11, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r1.isDatePickerDisabled);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "timepicker", 11, 0);
    ɵɵconditionalCreate(3, BsDaterangepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template, 2, 1, "timepicker", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isDatePickerDisabled);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.isRangePicker ? 3 : -1);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template, 2, 7, "bs-days-calendar-view", 8, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵconditionalCreate(4, BsDaterangepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Template, 4, 2, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 1, ctx_r1.daysCalendar$));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.withTimepicker ? 4 : -1);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-month-calendar-view", 13);
    ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.monthHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.monthSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r5);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template, 1, 3, "bs-month-calendar-view", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r1.monthsCalendar));
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-years-calendar-view", 13);
    ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.yearHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.yearSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r7);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template, 1, 3, "bs-years-calendar-view", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r1.yearsCalendar));
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "button", 14);
    ɵɵtext(2, "Apply");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 15);
    ɵɵtext(4, "Cancel");
    ɵɵelementEnd()();
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "button", 19);
    ɵɵlistener("click", function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("today-left", ctx_r1.todayPos === "left")("today-right", ctx_r1.todayPos === "right")("today-center", ctx_r1.todayPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.todayBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20)(1, "button", 19);
    ɵɵlistener("click", function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clearDate());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("clear-left", ctx_r1.clearPos === "left")("clear-right", ctx_r1.clearPos === "right")("clear-center", ctx_r1.clearPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.clearBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵconditionalCreate(1, BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 7, "div", 16);
    ɵɵconditionalCreate(2, BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template, 3, 7, "div", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTodayBtn ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showClearBtn ? 2 : -1);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "bs-custom-date-view", 21);
    ɵɵlistener("onSelect", function BsDaterangepickerContainerComponent_Conditional_0_Conditional_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setRangeOnCalendar($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("selectedRange", ctx_r1.chosenRange)("ranges", ctx_r1.customRanges)("customRangeLabel", ctx_r1.customRangeBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵconditionalCreate(3, BsDaterangepickerContainerComponent_Conditional_0_Case_3_Template, 5, 3);
    ɵɵpipe(4, "async");
    ɵɵconditionalBranchCreate(5, BsDaterangepickerContainerComponent_Conditional_0_Case_5_Template, 4, 2, "div", 5)(6, BsDaterangepickerContainerComponent_Conditional_0_Case_6_Template, 4, 2, "div", 5);
    ɵɵelementEnd();
    ɵɵconditionalCreate(7, BsDaterangepickerContainerComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 6);
    ɵɵconditionalCreate(8, BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 6);
    ɵɵelementEnd();
    ɵɵconditionalCreate(9, BsDaterangepickerContainerComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.containerClass);
    ɵɵadvance(3);
    ɵɵconditional((tmp_2_0 = ɵɵpipeBind1(4, 5, ctx_r1.viewMode)) === "day" ? 3 : tmp_2_0 === "month" ? 5 : tmp_2_0 === "year" ? 6 : -1);
    ɵɵadvance(4);
    ɵɵconditional(false ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTodayBtn || ctx_r1.showClearBtn ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.customRanges && ctx_r1.customRanges.length > 0 ? 9 : -1);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-days-calendar-view", 10);
    ɵɵpipe(1, "async");
    ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.dayHoverHandler($event));
    })("onHoverWeek", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.weekHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.daySelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r3)("isDisabled", ctx_r1.isDatePickerDisabled)("options", ɵɵpipeBind1(1, 5, ctx_r1.options$));
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "timepicker", 11, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r1.isDatePickerDisabled);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "timepicker", 11, 0);
    ɵɵconditionalCreate(3, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template, 2, 1, "timepicker", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isDatePickerDisabled);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.isRangePicker ? 3 : -1);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template, 2, 7, "bs-days-calendar-view", 8, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵconditionalCreate(4, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Template, 4, 2, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 1, ctx_r1.daysCalendar$));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.withTimepicker ? 4 : -1);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-month-calendar-view", 13);
    ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.monthHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.monthSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r5);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template, 1, 3, "bs-month-calendar-view", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r1.monthsCalendar));
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-years-calendar-view", 13);
    ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.yearHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.yearSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    ɵɵproperty("calendar", calendar_r7);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template, 1, 3, "bs-years-calendar-view", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r1.yearsCalendar));
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "button", 14);
    ɵɵtext(2, "Apply");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 15);
    ɵɵtext(4, "Cancel");
    ɵɵelementEnd()();
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "button", 19);
    ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("today-left", ctx_r1.todayPos === "left")("today-right", ctx_r1.todayPos === "right")("today-center", ctx_r1.todayPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.todayBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20)(1, "button", 19);
    ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clearDate());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("clear-left", ctx_r1.clearPos === "left")("clear-right", ctx_r1.clearPos === "right")("clear-center", ctx_r1.clearPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.clearBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵconditionalCreate(1, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 7, "div", 16);
    ɵɵconditionalCreate(2, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template, 3, 7, "div", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTodayBtn ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showClearBtn ? 2 : -1);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "bs-custom-date-view", 21);
    ɵɵlistener("onSelect", function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setRangeOnCalendar($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("selectedRange", ctx_r1.chosenRange)("ranges", ctx_r1.customRanges)("customRangeLabel", ctx_r1.customRangeBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵconditionalCreate(3, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Template, 5, 3);
    ɵɵpipe(4, "async");
    ɵɵconditionalBranchCreate(5, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_Template, 4, 2, "div", 5)(6, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_Template, 4, 2, "div", 5);
    ɵɵelementEnd();
    ɵɵconditionalCreate(7, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 6);
    ɵɵconditionalCreate(8, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 6);
    ɵɵelementEnd();
    ɵɵconditionalCreate(9, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.containerClass);
    ɵɵadvance(3);
    ɵɵconditional((tmp_2_0 = ɵɵpipeBind1(4, 5, ctx_r1.viewMode)) === "day" ? 3 : tmp_2_0 === "month" ? 5 : tmp_2_0 === "year" ? 6 : -1);
    ɵɵadvance(4);
    ɵɵconditional(false ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTodayBtn || ctx_r1.showClearBtn ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.customRanges && ctx_r1.customRanges.length > 0 ? 9 : -1);
  }
}
var BsDatepickerConfig = class _BsDatepickerConfig {
  constructor() {
    this.adaptivePosition = false;
    this.useUtc = false;
    this.isAnimated = false;
    this.startView = "day";
    this.returnFocusToInput = false;
    this.containerClass = "theme-green";
    this.displayMonths = 1;
    this.showWeekNumbers = true;
    this.dateInputFormat = "L";
    this.rangeSeparator = " - ";
    this.rangeInputFormat = "L";
    this.monthTitle = "MMMM";
    this.yearTitle = "YYYY";
    this.dayLabel = "D";
    this.monthLabel = "MMMM";
    this.yearLabel = "YYYY";
    this.weekNumbers = "w";
    this.showTodayButton = false;
    this.showClearButton = false;
    this.todayPosition = "center";
    this.clearPosition = "right";
    this.todayButtonLabel = "Today";
    this.clearButtonLabel = "Clear";
    this.customRangeButtonLabel = "Custom Range";
    this.withTimepicker = false;
    this.allowedPositions = ["top", "bottom"];
    this.keepDatepickerOpened = false;
    this.keepDatesOutOfRules = false;
  }
  static {
    this.ɵfac = function BsDatepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BsDatepickerConfig,
      factory: _BsDatepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DATEPICKER_ANIMATION_DURATION_MS = 220;
var DATEPICKER_ANIMATION_TIMING = `${DATEPICKER_ANIMATION_DURATION_MS}ms cubic-bezier(0, 0, 0.2, 1)`;
var BsDatepickerAbstractComponent = class {
  constructor() {
    this.containerClass = "";
    this.customRanges = [];
    this.chosenRange = [];
    this._daysCalendarSub = new Subscription();
    this.selectedTimeSub = new Subscription();
  }
  set minDate(value) {
    this._effects?.setMinDate(value);
  }
  set maxDate(value) {
    this._effects?.setMaxDate(value);
  }
  set daysDisabled(value) {
    this._effects?.setDaysDisabled(value);
  }
  set datesDisabled(value) {
    this._effects?.setDatesDisabled(value);
  }
  set datesEnabled(value) {
    this._effects?.setDatesEnabled(value);
  }
  set isDisabled(value) {
    this._effects?.setDisabled(value);
  }
  set dateCustomClasses(value) {
    this._effects?.setDateCustomClasses(value);
  }
  set dateTooltipTexts(value) {
    this._effects?.setDateTooltipTexts(value);
  }
  set daysCalendar$(value) {
    this._daysCalendar$ = value;
    this._daysCalendarSub.unsubscribe();
    this._daysCalendarSub.add(this._daysCalendar$.subscribe((value2) => {
      this.multipleCalendars = !!value2 && value2.length > 1;
    }));
  }
  get daysCalendar$() {
    return this._daysCalendar$;
  }
  // todo: valorkin fix
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  setViewMode(event) {
  }
  // eslint-disable-next-line
  navigateTo(event) {
  }
  // eslint-disable-next-line
  dayHoverHandler(event) {
  }
  // eslint-disable-next-line
  weekHoverHandler(event) {
  }
  // eslint-disable-next-line
  monthHoverHandler(event) {
  }
  // eslint-disable-next-line
  yearHoverHandler(event) {
  }
  // eslint-disable-next-line
  timeSelectHandler(date, index) {
  }
  // eslint-disable-next-line
  daySelectHandler(day) {
  }
  // eslint-disable-next-line
  monthSelectHandler(event) {
  }
  // eslint-disable-next-line
  yearSelectHandler(event) {
  }
  // eslint-disable-next-line
  setRangeOnCalendar(dates) {
  }
  // eslint-disable-next-line
  setToday() {
  }
  // eslint-disable-next-line
  clearDate() {
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _stopPropagation(event) {
    event.stopPropagation();
  }
};
var BsDatepickerActions = class _BsDatepickerActions {
  static {
    this.CALCULATE = "[datepicker] calculate dates matrix";
  }
  static {
    this.FORMAT = "[datepicker] format datepicker values";
  }
  static {
    this.FLAG = "[datepicker] set flags";
  }
  static {
    this.SELECT = "[datepicker] select date";
  }
  static {
    this.NAVIGATE_OFFSET = "[datepicker] shift view date";
  }
  static {
    this.NAVIGATE_TO = "[datepicker] change view date";
  }
  static {
    this.SET_OPTIONS = "[datepicker] update render options";
  }
  static {
    this.HOVER = "[datepicker] hover date";
  }
  static {
    this.CHANGE_VIEWMODE = "[datepicker] switch view mode";
  }
  static {
    this.SET_MIN_DATE = "[datepicker] set min date";
  }
  static {
    this.SET_MAX_DATE = "[datepicker] set max date";
  }
  static {
    this.SET_DAYSDISABLED = "[datepicker] set days disabled";
  }
  static {
    this.SET_DATESDISABLED = "[datepicker] set dates disabled";
  }
  static {
    this.SET_DATESENABLED = "[datepicker] set dates enabled";
  }
  static {
    this.SET_IS_DISABLED = "[datepicker] set is disabled";
  }
  static {
    this.SET_DATE_CUSTOM_CLASSES = "[datepicker] set date custom classes";
  }
  static {
    this.SET_DATE_TOOLTIP_TEXTS = "[datepicker] set date tooltip texts";
  }
  static {
    this.SET_LOCALE = "[datepicker] set datepicker locale";
  }
  static {
    this.SELECT_TIME = "[datepicker] select time";
  }
  static {
    this.SELECT_RANGE = "[daterangepicker] select dates range";
  }
  calculate() {
    return {
      type: _BsDatepickerActions.CALCULATE
    };
  }
  format() {
    return {
      type: _BsDatepickerActions.FORMAT
    };
  }
  flag() {
    return {
      type: _BsDatepickerActions.FLAG
    };
  }
  select(date) {
    return {
      type: _BsDatepickerActions.SELECT,
      payload: date
    };
  }
  selectTime(date, index) {
    return {
      type: _BsDatepickerActions.SELECT_TIME,
      payload: {
        date,
        index
      }
    };
  }
  changeViewMode(event) {
    return {
      type: _BsDatepickerActions.CHANGE_VIEWMODE,
      payload: event
    };
  }
  navigateTo(event) {
    return {
      type: _BsDatepickerActions.NAVIGATE_TO,
      payload: event
    };
  }
  navigateStep(step) {
    return {
      type: _BsDatepickerActions.NAVIGATE_OFFSET,
      payload: step
    };
  }
  setOptions(options) {
    return {
      type: _BsDatepickerActions.SET_OPTIONS,
      payload: options
    };
  }
  // date range picker
  selectRange(value) {
    return {
      type: _BsDatepickerActions.SELECT_RANGE,
      payload: value
    };
  }
  hoverDay(event) {
    return {
      type: _BsDatepickerActions.HOVER,
      payload: event.isHovered ? event.cell.date : null
    };
  }
  minDate(date) {
    return {
      type: _BsDatepickerActions.SET_MIN_DATE,
      payload: date
    };
  }
  maxDate(date) {
    return {
      type: _BsDatepickerActions.SET_MAX_DATE,
      payload: date
    };
  }
  daysDisabled(days) {
    return {
      type: _BsDatepickerActions.SET_DAYSDISABLED,
      payload: days
    };
  }
  datesDisabled(dates) {
    return {
      type: _BsDatepickerActions.SET_DATESDISABLED,
      payload: dates
    };
  }
  datesEnabled(dates) {
    return {
      type: _BsDatepickerActions.SET_DATESENABLED,
      payload: dates
    };
  }
  isDisabled(value) {
    return {
      type: _BsDatepickerActions.SET_IS_DISABLED,
      payload: value
    };
  }
  setDateCustomClasses(value) {
    return {
      type: _BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
      payload: value
    };
  }
  setDateTooltipTexts(value) {
    return {
      type: _BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS,
      payload: value
    };
  }
  setLocale(locale) {
    return {
      type: _BsDatepickerActions.SET_LOCALE,
      payload: locale
    };
  }
  static {
    this.ɵfac = function BsDatepickerActions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerActions)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BsDatepickerActions,
      factory: _BsDatepickerActions.ɵfac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerActions, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var BsLocaleService = class _BsLocaleService {
  constructor() {
    this._defaultLocale = "en";
    this._locale = new BehaviorSubject(this._defaultLocale);
    this._localeChange = this._locale.asObservable();
  }
  get locale() {
    return this._locale;
  }
  get localeChange() {
    return this._localeChange;
  }
  get currentLocale() {
    return this._locale.getValue();
  }
  use(locale) {
    if (locale === this.currentLocale) {
      return;
    }
    this._locale.next(locale);
  }
  static {
    this.ɵfac = function BsLocaleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsLocaleService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BsLocaleService,
      factory: _BsLocaleService.ɵfac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsLocaleService, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var BsDatepickerEffects = class _BsDatepickerEffects {
  constructor(_actions, _localeService) {
    this._actions = _actions;
    this._localeService = _localeService;
    this._subs = [];
  }
  init(_bsDatepickerStore) {
    this._store = _bsDatepickerStore;
    return this;
  }
  /** setters */
  setValue(value) {
    this._store?.dispatch(this._actions.select(value));
  }
  setRangeValue(value) {
    this._store?.dispatch(this._actions.selectRange(value));
  }
  setMinDate(value) {
    this._store?.dispatch(this._actions.minDate(value));
    return this;
  }
  setMaxDate(value) {
    this._store?.dispatch(this._actions.maxDate(value));
    return this;
  }
  setDaysDisabled(value) {
    this._store?.dispatch(this._actions.daysDisabled(value));
    return this;
  }
  setDatesDisabled(value) {
    this._store?.dispatch(this._actions.datesDisabled(value));
    return this;
  }
  setDatesEnabled(value) {
    this._store?.dispatch(this._actions.datesEnabled(value));
    return this;
  }
  setDisabled(value) {
    this._store?.dispatch(this._actions.isDisabled(value));
    return this;
  }
  setDateCustomClasses(value) {
    this._store?.dispatch(this._actions.setDateCustomClasses(value));
    return this;
  }
  setDateTooltipTexts(value) {
    this._store?.dispatch(this._actions.setDateTooltipTexts(value));
    return this;
  }
  /* Set rendering options */
  setOptions(_config) {
    const _options = Object.assign({
      locale: this._localeService.currentLocale
    }, _config);
    this._store?.dispatch(this._actions.setOptions(_options));
    return this;
  }
  /** view to mode bindings */
  setBindings(container) {
    if (!this._store) {
      return this;
    }
    container.selectedTime = this._store.select((state) => state.selectedTime).pipe(filter((times) => !!times));
    container.daysCalendar$ = this._store.select((state) => state.flaggedMonths).pipe(filter((months) => !!months));
    container.monthsCalendar = this._store.select((state) => state.flaggedMonthsCalendar).pipe(filter((months) => !!months));
    container.yearsCalendar = this._store.select((state) => state.yearsCalendarFlagged).pipe(filter((years) => !!years));
    container.viewMode = this._store.select((state) => state.view?.mode);
    container.options$ = combineLatest([this._store.select((state) => state.showWeekNumbers), this._store.select((state) => state.displayMonths)]).pipe(map((latest) => ({
      showWeekNumbers: latest[0],
      displayMonths: latest[1]
    })));
    return this;
  }
  /** event handlers */
  setEventHandlers(container) {
    container.setViewMode = (event) => {
      this._store?.dispatch(this._actions.changeViewMode(event));
    };
    container.navigateTo = (event) => {
      this._store?.dispatch(this._actions.navigateStep(event.step));
    };
    container.dayHoverHandler = (event) => {
      const _cell = event.cell;
      if (_cell.isOtherMonth || _cell.isDisabled) {
        return;
      }
      this._store?.dispatch(this._actions.hoverDay(event));
      _cell.isHovered = event.isHovered;
    };
    container.monthHoverHandler = (event) => {
      event.cell.isHovered = event.isHovered;
    };
    container.yearHoverHandler = (event) => {
      event.cell.isHovered = event.isHovered;
    };
    return this;
  }
  registerDatepickerSideEffects() {
    if (!this._store) {
      return this;
    }
    this._subs.push(this._store.select((state) => state.view).subscribe(() => {
      this._store?.dispatch(this._actions.calculate());
    }));
    this._subs.push(this._store.select((state) => state.monthsModel).pipe(filter((monthModel) => !!monthModel)).subscribe(() => this._store?.dispatch(this._actions.format())));
    this._subs.push(this._store.select((state) => state.formattedMonths).pipe(filter((month) => !!month)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state) => state.selectedDate).pipe(filter((selectedDate) => !!selectedDate)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state) => state.selectedRange).pipe(filter((selectedRange) => !!selectedRange)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state) => state.monthsCalendar).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state) => state.yearsCalendarModel).pipe(filter((state) => !!state)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state) => state.hoveredDate).pipe(filter((hoveredDate) => !!hoveredDate)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state) => state.dateCustomClasses).pipe(filter((dateCustomClasses) => !!dateCustomClasses)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state) => state.dateTooltipTexts).pipe(filter((dateTooltipTexts) => !!dateTooltipTexts)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._localeService.localeChange.subscribe((locale) => this._store?.dispatch(this._actions.setLocale(locale))));
    return this;
  }
  destroy() {
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
  }
  static {
    this.ɵfac = function BsDatepickerEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerEffects)(ɵɵinject(BsDatepickerActions), ɵɵinject(BsLocaleService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BsDatepickerEffects,
      factory: _BsDatepickerEffects.ɵfac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerEffects, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [{
    type: BsDatepickerActions
  }, {
    type: BsLocaleService
  }], null);
})();
var defaultMonthOptions = {
  width: 7,
  height: 6
};
var dayInMilliseconds = 24 * 60 * 60 * 1e3;
var _initialView = {
  date: /* @__PURE__ */ new Date(),
  mode: "day"
};
var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
  locale: "en",
  view: _initialView,
  selectedRange: [],
  selectedTime: [],
  monthViewOptions: defaultMonthOptions
});
function getStartingDayOfCalendar(date, options) {
  if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
    return date;
  }
  const weekDay = getDay(date);
  const offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
  return shiftDate(date, {
    day: -offset
  });
}
function calculateDateOffset(weekday, startingDayOffset) {
  const _startingDayOffset = Number(startingDayOffset);
  if (isNaN(_startingDayOffset)) {
    return 0;
  }
  if (_startingDayOffset === 0) {
    return weekday;
  }
  const offset = weekday - _startingDayOffset % 7;
  return offset < 0 ? offset + 7 : offset;
}
function isMonthDisabled(date, min, max) {
  const minBound = min && isBefore(endOf(date, "month"), min, "day");
  const maxBound = max && isAfter(startOf(date, "month"), max, "day");
  return minBound || maxBound || false;
}
function isYearDisabled(date, min, max) {
  const minBound = min && isBefore(endOf(date, "year"), min, "day");
  const maxBound = max && isAfter(startOf(date, "year"), max, "day");
  return minBound || maxBound || false;
}
function isDisabledDate(date, datesDisabled, unit) {
  if (!datesDisabled || !isArray(datesDisabled) || !datesDisabled.length) {
    return false;
  }
  if (unit && unit === "year" && !datesDisabled[0].getDate()) {
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, "year"));
  }
  return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, "date"));
}
function isEnabledDate(date, datesEnabled, unit) {
  if (!datesEnabled || !isArray(datesEnabled) || !datesEnabled.length) {
    return false;
  }
  return !datesEnabled.some((enabledDate) => isSame(date, enabledDate, unit || "date"));
}
function getYearsCalendarInitialDate(state, calendarIndex = 0) {
  const model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
  return model?.years[0] && model.years[0][0] && model.years[0][0].date;
}
function checkRangesWithMaxDate(ranges, maxDate) {
  if (!ranges) return ranges;
  if (!maxDate) return ranges;
  if (!ranges.length && !ranges[0].value) return ranges;
  ranges.forEach((item) => {
    if (!item || !item.value) return ranges;
    if (item.value instanceof Date) return ranges;
    if (!(item.value instanceof Array && item.value.length)) return ranges;
    item.value = compareDateWithMaxDateHelper(item.value, maxDate);
    return ranges;
  });
  return ranges;
}
function checkBsValue(date, maxDate) {
  if (!date) return date;
  if (!maxDate) return date;
  if (date instanceof Array && !date.length) return date;
  if (date instanceof Date) return date;
  return compareDateWithMaxDateHelper(date, maxDate);
}
function compareDateWithMaxDateHelper(date, maxDate) {
  if (date instanceof Array) {
    const editedValues = date.map((item) => {
      if (!item) return item;
      if (isAfter(item, maxDate, "date")) item = maxDate;
      return item;
    });
    return editedValues;
  }
  return date;
}
function setCurrentTimeOnDateSelect(value) {
  if (!value) return value;
  return setCurrentTimeHelper(value);
}
function setDateRangesCurrentTimeOnDateSelect(value) {
  if (!value?.length) return value;
  value.map((date) => {
    if (!date) {
      return date;
    }
    return setCurrentTimeHelper(date);
  });
  return value;
}
function setCurrentTimeHelper(date) {
  const now = /* @__PURE__ */ new Date();
  date.setMilliseconds(now.getMilliseconds());
  date.setSeconds(now.getSeconds());
  date.setMinutes(now.getMinutes());
  date.setHours(now.getHours());
  return date;
}
function createMatrix(options, fn) {
  let prevValue = options.initialDate;
  const matrix = new Array(options.height);
  for (let i = 0; i < options.height; i++) {
    matrix[i] = new Array(options.width);
    for (let j = 0; j < options.width; j++) {
      matrix[i][j] = fn(prevValue);
      prevValue = shiftDate(prevValue, options.shift);
    }
  }
  return matrix;
}
function calcDaysCalendar(startingDate, options) {
  const firstDay = getFirstDayOfMonth(startingDate);
  const initialDate = getStartingDayOfCalendar(firstDay, options);
  const matrixOptions = {
    width: options.width || 0,
    height: options.height || 0,
    initialDate,
    shift: {
      day: 1
    }
  };
  const daysMatrix = createMatrix(matrixOptions, (date) => date);
  return {
    daysMatrix,
    month: firstDay
  };
}
function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
  return {
    month: daysCalendar.month,
    monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
    yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
    weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
    weekdays: getShiftedWeekdays(formatOptions.locale),
    weeks: daysCalendar.daysMatrix.map((week, weekIndex) => ({
      days: week.map((date, dayIndex) => ({
        date,
        label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
        monthIndex,
        weekIndex,
        dayIndex
      }))
    })),
    hideLeftArrow: false,
    hideRightArrow: false,
    disableLeftArrow: false,
    disableRightArrow: false
  };
}
function getWeekNumbers(daysMatrix, format, locale) {
  return daysMatrix.map((days) => days[0] ? formatDate(days[0], format, locale) : "");
}
function getShiftedWeekdays(locale) {
  const _locale = getLocale(locale);
  const weekdays = _locale.weekdaysShort();
  const firstDayOfWeek = _locale.firstDayOfWeek();
  return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
}
function flagDaysCalendar(formattedMonth, options) {
  formattedMonth.weeks.forEach((week) => {
    week.days.forEach((day, dayIndex) => {
      const isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
      const isHovered = !isOtherMonth && isSameDay$1(day.date, options.hoveredDate);
      const isSelectionStart = !isOtherMonth && options.selectedRange && isSameDay$1(day.date, options.selectedRange[0]);
      const isSelectionEnd = !isOtherMonth && options.selectedRange && isSameDay$1(day.date, options.selectedRange[1]);
      const isSelected = !isOtherMonth && isSameDay$1(day.date, options.selectedDate) || isSelectionStart || isSelectionEnd;
      const isInRange = !isOtherMonth && options.selectedRange && isDateInRange(day.date, options.selectedRange, options.hoveredDate);
      const isDisabled = options.isDisabled || isBefore(day.date, options.minDate, "day") || isAfter(day.date, options.maxDate, "day") || isDisabledDay(day.date, options.daysDisabled) || isDisabledDate(day.date, options.datesDisabled) || isEnabledDate(day.date, options.datesEnabled);
      const currentDate = /* @__PURE__ */ new Date();
      const isToday = !isOtherMonth && isSameDay$1(day.date, currentDate);
      const customClasses = options.dateCustomClasses && options.dateCustomClasses.map((dcc) => isSameDay$1(day.date, dcc.date) ? dcc.classes : []).reduce((previousValue, currentValue) => previousValue.concat(currentValue), []).join(" ") || "";
      const tooltipText = options.dateTooltipTexts && options.dateTooltipTexts.map((tt) => isSameDay$1(day.date, tt.date) ? tt.tooltipText : "").filter((text) => !!text).join(" ") || "";
      const newDay = Object.assign({}, day, {
        isOtherMonth,
        isHovered,
        isSelected,
        isSelectionStart,
        isSelectionEnd,
        isInRange,
        isDisabled,
        isToday,
        customClasses,
        tooltipText
      });
      if (day.isOtherMonth !== newDay.isOtherMonth || day.isHovered !== newDay.isHovered || day.isSelected !== newDay.isSelected || day.isSelectionStart !== newDay.isSelectionStart || day.isSelectionEnd !== newDay.isSelectionEnd || day.isDisabled !== newDay.isDisabled || day.isInRange !== newDay.isInRange || day.customClasses !== newDay.customClasses || day.tooltipText !== newDay.tooltipText) {
        week.days[dayIndex] = newDay;
      }
    });
  });
  formattedMonth.hideLeftArrow = options.isDisabled || !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
  formattedMonth.hideRightArrow = options.isDisabled || (!!options.monthIndex || options.monthIndex === 0) && !!options.displayMonths && options.monthIndex < options.displayMonths && options.monthIndex + 1 !== options.displayMonths;
  formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, {
    month: -1
  }), options.minDate, options.maxDate);
  formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, {
    month: 1
  }), options.minDate, options.maxDate);
  return formattedMonth;
}
function isDateInRange(date, selectedRange, hoveredDate) {
  if (!date || !selectedRange || !selectedRange[0]) {
    return false;
  }
  if (selectedRange[1]) {
    return date > selectedRange[0] && date <= selectedRange[1];
  }
  if (hoveredDate) {
    return date > selectedRange[0] && date <= hoveredDate;
  }
  return false;
}
function canSwitchMode(mode, minMode) {
  return minMode ? mode >= minMode : true;
}
var height$1 = 4;
var width$1 = 3;
var shift$1 = {
  month: 1
};
function formatMonthsCalendar(viewDate, formatOptions) {
  const initialDate = startOf(viewDate, "year");
  const matrixOptions = {
    width: width$1,
    height: height$1,
    initialDate,
    shift: shift$1
  };
  const monthMatrix = createMatrix(matrixOptions, (date) => ({
    date,
    label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
  }));
  return {
    months: monthMatrix,
    monthTitle: "",
    yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale),
    hideRightArrow: false,
    hideLeftArrow: false,
    disableRightArrow: false,
    disableLeftArrow: false
  };
}
function flagMonthsCalendar(monthCalendar, options) {
  monthCalendar.months.forEach((months, rowIndex) => {
    months.forEach((month, monthIndex) => {
      let isSelected;
      const isHovered = isSameMonth(month.date, options.hoveredMonth);
      const isDisabled = options.isDisabled || isDisabledDate(month.date, options.datesDisabled) || isEnabledDate(month.date, options.datesEnabled, "month") || isMonthDisabled(month.date, options.minDate, options.maxDate);
      if (!options.selectedDate && options.selectedRange) {
        isSelected = isSameMonth(month.date, options.selectedRange[0]);
        if (!isSelected) {
          isSelected = isSameMonth(month.date, options.selectedRange[1]);
        }
      } else {
        isSelected = isSameMonth(month.date, options.selectedDate);
      }
      const newMonth = Object.assign(
        /*{},*/
        month,
        {
          isHovered,
          isDisabled,
          isSelected
        }
      );
      if (month.isHovered !== newMonth.isHovered || month.isDisabled !== newMonth.isDisabled || month.isSelected !== newMonth.isSelected) {
        monthCalendar.months[rowIndex][monthIndex] = newMonth;
      }
    });
  });
  monthCalendar.hideLeftArrow = !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
  monthCalendar.hideRightArrow = (!!options.monthIndex || options.monthIndex === 0) && (!!options.displayMonths || options.displayMonths === 0) && options.monthIndex < options.displayMonths && options.monthIndex + 1 !== options.displayMonths;
  monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, {
    year: -1
  }), options.minDate, options.maxDate);
  monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, {
    year: 1
  }), options.minDate, options.maxDate);
  return monthCalendar;
}
var height = 4;
var width = 4;
var yearsPerCalendar = height * width;
var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var shift = {
  year: 1
};
function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
  const initialDate = calculateInitialDate(viewDate, previousInitialDate);
  const matrixOptions = {
    width,
    height,
    initialDate,
    shift
  };
  const yearsMatrix = createMatrix(matrixOptions, (date) => ({
    date,
    label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
  }));
  const yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
  return {
    years: yearsMatrix,
    monthTitle: "",
    yearTitle,
    hideLeftArrow: false,
    hideRightArrow: false,
    disableLeftArrow: false,
    disableRightArrow: false
  };
}
function calculateInitialDate(viewDate, previousInitialDate) {
  if (previousInitialDate && viewDate.getFullYear() >= previousInitialDate.getFullYear() && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
    return previousInitialDate;
  }
  return shiftDate(viewDate, {
    year: initialYearShift
  });
}
function formatYearRangeTitle(yearsMatrix, formatOptions) {
  const from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
  const to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
  return `${from} - ${to}`;
}
function flagYearsCalendar(yearsCalendar, options) {
  yearsCalendar.years.forEach((years, rowIndex) => {
    years.forEach((year, yearIndex) => {
      let isSelected;
      const isHovered = isSameYear(year.date, options.hoveredYear);
      const isDisabled = options.isDisabled || isDisabledDate(year.date, options.datesDisabled, "year") || isEnabledDate(year.date, options.datesEnabled, "year") || isYearDisabled(year.date, options.minDate, options.maxDate);
      if (!options.selectedDate && options.selectedRange) {
        isSelected = isSameYear(year.date, options.selectedRange[0]);
        if (!isSelected) {
          isSelected = isSameYear(year.date, options.selectedRange[1]);
        }
      } else {
        isSelected = isSameYear(year.date, options.selectedDate);
      }
      const newMonth = Object.assign(
        /*{},*/
        year,
        {
          isHovered,
          isDisabled,
          isSelected
        }
      );
      if (year.isHovered !== newMonth.isHovered || year.isDisabled !== newMonth.isDisabled || year.isSelected !== newMonth.isSelected) {
        yearsCalendar.years[rowIndex][yearIndex] = newMonth;
      }
    });
  });
  yearsCalendar.hideLeftArrow = !!options.yearIndex && options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
  yearsCalendar.hideRightArrow = !!options.yearIndex && !!options.displayMonths && options.yearIndex < options.displayMonths && options.yearIndex + 1 !== options.displayMonths;
  yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, {
    year: -1
  }), options.minDate, options.maxDate);
  const i = yearsCalendar.years.length - 1;
  const j = yearsCalendar.years[i].length - 1;
  yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, {
    year: 1
  }), options.minDate, options.maxDate);
  return yearsCalendar;
}
function copyTime(sourceDate, time) {
  if (!sourceDate || !isNaN(sourceDate.getTime())) {
    return;
  }
  sourceDate.setHours(time.getHours());
  sourceDate.setMinutes(time.getMinutes());
  sourceDate.setSeconds(time.getSeconds());
  sourceDate.setMilliseconds(time.getMilliseconds());
}
function bsDatepickerReducer(state = initialDatepickerState, action) {
  switch (action.type) {
    case BsDatepickerActions.CALCULATE: {
      return calculateReducer(state);
    }
    case BsDatepickerActions.FORMAT: {
      return formatReducer(state);
    }
    case BsDatepickerActions.FLAG: {
      return flagReducer(state);
    }
    case BsDatepickerActions.NAVIGATE_OFFSET: {
      return navigateOffsetReducer(state, action);
    }
    case BsDatepickerActions.NAVIGATE_TO: {
      const payload = action.payload;
      if (!state.view || !payload.unit) {
        return state;
      }
      const date = setFullDate(state.view.date, payload.unit);
      let newState;
      let mode;
      if (canSwitchMode(payload.viewMode, state.minMode)) {
        mode = payload.viewMode;
        newState = {
          view: {
            date,
            mode
          }
        };
      } else {
        mode = state.view.mode;
        newState = {
          selectedDate: date,
          view: {
            date,
            mode
          }
        };
      }
      return Object.assign({}, state, newState);
    }
    case BsDatepickerActions.CHANGE_VIEWMODE: {
      if (!canSwitchMode(action.payload, state.minMode) || !state.view) {
        return state;
      }
      const date = state.view.date;
      const mode = action.payload;
      const newState = {
        view: {
          date,
          mode
        }
      };
      return Object.assign({}, state, newState);
    }
    case BsDatepickerActions.HOVER: {
      return Object.assign({}, state, {
        hoveredDate: action.payload
      });
    }
    case BsDatepickerActions.SELECT: {
      if (!state.view) {
        return state;
      }
      const newState = {
        selectedDate: action.payload,
        view: state.view
      };
      if (Array.isArray(state.selectedTime)) {
        const _time = state.selectedTime[0];
        if (newState.selectedDate && _time) {
          copyTime(newState.selectedDate, _time);
        }
      }
      const mode = state.view.mode;
      const _date = action.payload || state.view.date;
      const date = getViewDate(_date, state.minDate, state.maxDate);
      newState.view = {
        mode,
        date
      };
      return Object.assign({}, state, newState);
    }
    case BsDatepickerActions.SELECT_TIME: {
      const {
        date,
        index
      } = action.payload;
      const selectedTime = state.selectedTime ? [...state.selectedTime] : [];
      selectedTime[index] = date;
      return Object.assign({}, state, {
        selectedTime
      });
    }
    case BsDatepickerActions.SET_OPTIONS: {
      if (!state.view) {
        return state;
      }
      const newState = action.payload;
      const mode = newState.minMode ? newState.minMode : state.view.mode;
      const _viewDate = isDateValid(newState.value) && newState.value || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0] || state.view.date;
      const date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
      newState.view = {
        mode,
        date
      };
      if (newState.value) {
        if (isArray(newState.value)) {
          newState.selectedRange = newState.value;
          newState.selectedTime = newState.value.map((i) => i);
        }
        if (newState.value instanceof Date) {
          newState.selectedDate = newState.value;
          newState.selectedTime = [newState.value];
        }
      }
      return Object.assign({}, state, newState);
    }
    // date range picker
    case BsDatepickerActions.SELECT_RANGE: {
      if (!state.view) {
        return state;
      }
      const newState = {
        selectedRange: action.payload,
        view: state.view
      };
      newState.selectedRange?.forEach((dte, index) => {
        if (Array.isArray(state.selectedTime)) {
          const _time = state.selectedTime[index];
          if (_time) {
            copyTime(dte, _time);
          }
        }
      });
      const mode = state.view.mode;
      const _date = action.payload && action.payload[0] || state.view.date;
      const date = getViewDate(_date, state.minDate, state.maxDate);
      newState.view = {
        mode,
        date
      };
      return Object.assign({}, state, newState);
    }
    case BsDatepickerActions.SET_MIN_DATE: {
      return Object.assign({}, state, {
        minDate: action.payload
      });
    }
    case BsDatepickerActions.SET_MAX_DATE: {
      return Object.assign({}, state, {
        maxDate: action.payload
      });
    }
    case BsDatepickerActions.SET_IS_DISABLED: {
      return Object.assign({}, state, {
        isDisabled: action.payload
      });
    }
    case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
      return Object.assign({}, state, {
        dateCustomClasses: action.payload
      });
    }
    case BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS: {
      return Object.assign({}, state, {
        dateTooltipTexts: action.payload
      });
    }
    default:
      return state;
  }
}
function calculateReducer(state) {
  if (!state.view) {
    return state;
  }
  let displayMonths;
  if (state.displayOneMonthRange && isDisplayOneMonth(state.view.date, state.minDate, state.maxDate)) {
    displayMonths = 1;
  } else {
    displayMonths = state.displayMonths || 1;
  }
  let viewDate = state.view.date;
  if (state.view.mode === "day" && state.monthViewOptions) {
    if (state.showPreviousMonth && state.selectedRange && state.selectedRange.length === 0) {
      viewDate = shiftDate(viewDate, {
        month: -1
      });
    }
    state.monthViewOptions.firstDayOfWeek = getLocale(state.locale).firstDayOfWeek();
    let monthsModel = new Array(displayMonths);
    for (let monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
      monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
      viewDate = shiftDate(viewDate, {
        month: 1
      });
    }
    if (state.preventChangeToNextMonth && state.flaggedMonths && state.hoveredDate) {
      const viewMonth = calcDaysCalendar(state.view.date, state.monthViewOptions);
      if (state.flaggedMonths.length && state.flaggedMonths[1].month.getMonth() === viewMonth.month.getMonth()) {
        monthsModel = state.flaggedMonths.map((item) => {
          if (state.monthViewOptions) {
            return calcDaysCalendar(item.month, state.monthViewOptions);
          }
          return null;
        }).filter((item) => item !== null);
      }
    }
    return Object.assign({}, state, {
      monthsModel
    });
  }
  if (state.view.mode === "month") {
    const monthsCalendar = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
      viewDate = shiftDate(viewDate, {
        year: 1
      });
    }
    return Object.assign({}, state, {
      monthsCalendar
    });
  }
  if (state.view.mode === "year") {
    const yearsCalendarModel = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state), state.minMode === "year" ? getYearsCalendarInitialDate(state, calendarIndex) : void 0);
      viewDate = shiftDate(viewDate, {
        year: yearsPerCalendar
      });
    }
    return Object.assign({}, state, {
      yearsCalendarModel
    });
  }
  return state;
}
function formatReducer(state) {
  if (!state.view) {
    return state;
  }
  if (state.view.mode === "day" && state.monthsModel) {
    const formattedMonths = state.monthsModel.map((month, monthIndex) => formatDaysCalendar(month, getFormatOptions(state), monthIndex));
    return Object.assign({}, state, {
      formattedMonths
    });
  }
  const displayMonths = state.displayMonths || 1;
  let viewDate = state.view.date;
  if (state.view.mode === "month") {
    const monthsCalendar = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
      viewDate = shiftDate(viewDate, {
        year: 1
      });
    }
    return Object.assign({}, state, {
      monthsCalendar
    });
  }
  if (state.view.mode === "year") {
    const yearsCalendarModel = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
      viewDate = shiftDate(viewDate, {
        year: 16
      });
    }
    return Object.assign({}, state, {
      yearsCalendarModel
    });
  }
  return state;
}
function flagReducer(state) {
  if (!state.view) {
    return state;
  }
  const displayMonths = isDisplayOneMonth(state.view.date, state.minDate, state.maxDate) ? 1 : state.displayMonths;
  if (state.formattedMonths && state.view.mode === "day") {
    const flaggedMonths = state.formattedMonths.map((formattedMonth, monthIndex) => flagDaysCalendar(formattedMonth, {
      isDisabled: state.isDisabled,
      minDate: state.minDate,
      maxDate: state.maxDate,
      daysDisabled: state.daysDisabled,
      datesDisabled: state.datesDisabled,
      datesEnabled: state.datesEnabled,
      hoveredDate: state.hoveredDate,
      selectedDate: state.selectedDate,
      selectedRange: state.selectedRange,
      displayMonths,
      dateCustomClasses: state.dateCustomClasses,
      dateTooltipTexts: state.dateTooltipTexts,
      monthIndex
    }));
    return Object.assign({}, state, {
      flaggedMonths
    });
  }
  if (state.view.mode === "month" && state.monthsCalendar) {
    const flaggedMonthsCalendar = state.monthsCalendar.map((formattedMonth, monthIndex) => flagMonthsCalendar(formattedMonth, {
      isDisabled: state.isDisabled,
      minDate: state.minDate,
      maxDate: state.maxDate,
      hoveredMonth: state.hoveredMonth,
      selectedDate: state.selectedDate,
      datesDisabled: state.datesDisabled,
      datesEnabled: state.datesEnabled,
      selectedRange: state.selectedRange,
      displayMonths,
      monthIndex
    }));
    return Object.assign({}, state, {
      flaggedMonthsCalendar
    });
  }
  if (state.view.mode === "year" && state.yearsCalendarModel) {
    const yearsCalendarFlagged = state.yearsCalendarModel.map((formattedMonth, yearIndex) => flagYearsCalendar(formattedMonth, {
      isDisabled: state.isDisabled,
      minDate: state.minDate,
      maxDate: state.maxDate,
      hoveredYear: state.hoveredYear,
      selectedDate: state.selectedDate,
      datesDisabled: state.datesDisabled,
      datesEnabled: state.datesEnabled,
      selectedRange: state.selectedRange,
      displayMonths,
      yearIndex
    }));
    return Object.assign({}, state, {
      yearsCalendarFlagged
    });
  }
  return state;
}
function navigateOffsetReducer(state, action) {
  if (!state.view) {
    return state;
  }
  const date = shiftViewDate(state, action);
  if (!date) {
    return state;
  }
  const newState = {
    view: {
      mode: state.view.mode,
      date
    }
  };
  return Object.assign({}, state, newState);
}
function shiftViewDate(state, action) {
  if (!state.view) {
    return void 0;
  }
  if (state.view.mode === "year" && state.minMode === "year") {
    const initialDate = getYearsCalendarInitialDate(state, 0);
    if (initialDate) {
      const middleDate = shiftDate(initialDate, {
        year: -initialYearShift
      });
      return shiftDate(middleDate, action.payload);
    }
  }
  return shiftDate(startOf(state.view.date, "month"), action.payload);
}
function getFormatOptions(state) {
  return {
    locale: state.locale,
    monthTitle: state.monthTitle,
    yearTitle: state.yearTitle,
    dayLabel: state.dayLabel,
    monthLabel: state.monthLabel,
    yearLabel: state.yearLabel,
    weekNumbers: state.weekNumbers
  };
}
function getViewDate(viewDate, minDate, maxDate) {
  const _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
  if (minDate && isAfter(minDate, _date, "day")) {
    return minDate;
  }
  if (maxDate && isBefore(maxDate, _date, "day")) {
    return maxDate;
  }
  return _date;
}
function isDisplayOneMonth(viewDate, minDate, maxDate) {
  if (maxDate && isSame(maxDate, viewDate, "day")) {
    return true;
  }
  return minDate && maxDate && minDate.getMonth() === maxDate.getMonth();
}
var BsDatepickerStore = class _BsDatepickerStore extends MiniStore {
  constructor() {
    const _dispatcher = new BehaviorSubject({
      type: "[datepicker] dispatcher init"
    });
    const state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
    super(_dispatcher, bsDatepickerReducer, state);
  }
  static {
    this.ɵfac = function BsDatepickerStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerStore)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BsDatepickerStore,
      factory: _BsDatepickerStore.ɵfac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerStore, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var BsCustomDatesViewComponent = class _BsCustomDatesViewComponent {
  constructor() {
    this.onSelect = new EventEmitter();
  }
  selectFromRanges(range) {
    this.onSelect.emit(range);
  }
  compareRanges(range) {
    const currentRange = range?.value;
    const selectedRange = this.selectedRange;
    if (Array.isArray(currentRange) && Array.isArray(selectedRange)) {
      return new Date(currentRange[0]).setHours(0, 0, 0, 0) === new Date(selectedRange[0]).setHours(0, 0, 0, 0) && new Date(currentRange[1]).setHours(0, 0, 0, 0) === new Date(selectedRange[1]).setHours(0, 0, 0, 0);
    }
    return JSON.stringify(currentRange) === JSON.stringify(selectedRange);
  }
  static {
    this.ɵfac = function BsCustomDatesViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsCustomDatesViewComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsCustomDatesViewComponent,
      selectors: [["bs-custom-date-view"]],
      inputs: {
        ranges: "ranges",
        selectedRange: "selectedRange",
        customRangeLabel: "customRangeLabel"
      },
      outputs: {
        onSelect: "onSelect"
      },
      decls: 3,
      vars: 0,
      consts: [[1, "bs-datepicker-predefined-btns"], ["type", "button", 1, "btn", 3, "selected"], ["type", "button", 1, "btn", 3, "click"]],
      template: function BsCustomDatesViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 0);
          ɵɵrepeaterCreate(1, BsCustomDatesViewComponent_For_2_Template, 2, 3, "button", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵrepeater(ctx.ranges);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCustomDatesViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-custom-date-view",
      template: `
    <div class="bs-datepicker-predefined-btns">
      @for (range of ranges; track range) {
        <button
          type="button"
          class="btn"
          (click)="selectFromRanges(range)"
          [class.selected]="compareRanges(range)">
          {{ range.label }}
        </button>
      }
    </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: []
    }]
  }], null, {
    ranges: [{
      type: Input
    }],
    selectedRange: [{
      type: Input
    }],
    customRangeLabel: [{
      type: Input
    }],
    onSelect: [{
      type: Output
    }]
  });
})();
var BsNavigationDirection;
(function(BsNavigationDirection2) {
  BsNavigationDirection2[BsNavigationDirection2["UP"] = 0] = "UP";
  BsNavigationDirection2[BsNavigationDirection2["DOWN"] = 1] = "DOWN";
})(BsNavigationDirection || (BsNavigationDirection = {}));
var BsDatepickerNavigationViewComponent = class _BsDatepickerNavigationViewComponent {
  constructor() {
    this.isDisabled = false;
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
  }
  navTo(down) {
    this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
  }
  view(viewMode) {
    if (this.isDisabled) {
      return;
    }
    this.onViewMode.emit(viewMode);
  }
  static {
    this.ɵfac = function BsDatepickerNavigationViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerNavigationViewComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsDatepickerNavigationViewComponent,
      selectors: [["bs-datepicker-navigation-view"]],
      inputs: {
        calendar: "calendar",
        isDisabled: "isDisabled"
      },
      outputs: {
        onNavigate: "onNavigate",
        onViewMode: "onViewMode"
      },
      decls: 12,
      vars: 9,
      consts: [["type", "button", 1, "previous", 3, "click", "disabled"], ["type", "button", 1, "current", 3, "click", "disabled"], ["type", "button", 1, "next", 3, "click", "disabled"]],
      template: function BsDatepickerNavigationViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "button", 0);
          ɵɵdomListener("click", function BsDatepickerNavigationViewComponent_Template_button_click_0_listener() {
            return ctx.navTo(true);
          });
          ɵɵdomElementStart(1, "span");
          ɵɵtext(2, "‹");
          ɵɵdomElementEnd()();
          ɵɵconditionalCreate(3, BsDatepickerNavigationViewComponent_Conditional_3_Template, 4, 2);
          ɵɵtext(4, " ​ ");
          ɵɵdomElementStart(5, "button", 1);
          ɵɵdomListener("click", function BsDatepickerNavigationViewComponent_Template_button_click_5_listener() {
            return ctx.view("year");
          });
          ɵɵdomElementStart(6, "span");
          ɵɵtext(7);
          ɵɵdomElementEnd()();
          ɵɵtext(8, " ​ ");
          ɵɵdomElementStart(9, "button", 2);
          ɵɵdomListener("click", function BsDatepickerNavigationViewComponent_Template_button_click_9_listener() {
            return ctx.navTo(false);
          });
          ɵɵdomElementStart(10, "span");
          ɵɵtext(11, "›");
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵstyleProp("visibility", ctx.calendar.hideLeftArrow ? "hidden" : "visible");
          ɵɵdomProperty("disabled", ctx.calendar.disableLeftArrow);
          ɵɵadvance(3);
          ɵɵconditional(ctx.calendar && ctx.calendar.monthTitle ? 3 : -1);
          ɵɵadvance(2);
          ɵɵdomProperty("disabled", ctx.isDisabled);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.calendar.yearTitle);
          ɵɵadvance(2);
          ɵɵstyleProp("visibility", ctx.calendar.hideRightArrow ? "hidden" : "visible");
          ɵɵdomProperty("disabled", ctx.calendar.disableRightArrow);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerNavigationViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-navigation-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <button class="previous"
      [disabled]="calendar.disableLeftArrow"
      [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
      type="button"
      (click)="navTo(true)">
      <span>&lsaquo;</span>
    </button>
    
    @if (calendar && calendar.monthTitle) {
      &#8203;  <!-- zero-width space needed for correct alignment
      with preserveWhitespaces: false in Angular -->
      <button class="current"
        type="button"
        (click)="view('month')"
        [disabled]="isDisabled"
        ><span>{{ calendar.monthTitle }}</span>
      </button>
    }
    
    &#8203;  <!-- zero-width space needed for correct alignment
    with preserveWhitespaces: false in Angular -->
    
    <button
      class="current"
      (click)="view('year')"
      type="button"
      [disabled]="isDisabled"
      >
      <span>{{ calendar.yearTitle }}</span>
    </button>
    
    &#8203;  <!-- zero-width space needed for correct alignment
    with preserveWhitespaces: false in Angular -->
    
    <button class="next"
      [disabled]="calendar.disableRightArrow"
      [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
      type="button"
      (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
    `,
      standalone: true,
      imports: []
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }]
  });
})();
var BsTimepickerViewComponent = class _BsTimepickerViewComponent {
  constructor() {
    this.ampm = "ok";
    this.hours = 0;
    this.minutes = 0;
  }
  static {
    this.ɵfac = function BsTimepickerViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsTimepickerViewComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsTimepickerViewComponent,
      selectors: [["bs-timepicker"]],
      decls: 16,
      vars: 3,
      consts: [[1, "bs-timepicker-container"], [1, "bs-timepicker-controls"], ["type", "button", 1, "bs-decrease"], ["type", "text", "placeholder", "00", 3, "value"], ["type", "button", 1, "bs-increase"], ["type", "button", 1, "switch-time-format"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==", "alt", ""]],
      template: function BsTimepickerViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
          ɵɵtext(3, "-");
          ɵɵdomElementEnd();
          ɵɵdomElement(4, "input", 3);
          ɵɵdomElementStart(5, "button", 4);
          ɵɵtext(6, "+");
          ɵɵdomElementEnd()();
          ɵɵdomElementStart(7, "div", 1)(8, "button", 2);
          ɵɵtext(9, "-");
          ɵɵdomElementEnd();
          ɵɵdomElement(10, "input", 3);
          ɵɵdomElementStart(11, "button", 4);
          ɵɵtext(12, "+");
          ɵɵdomElementEnd()();
          ɵɵdomElementStart(13, "button", 5);
          ɵɵtext(14);
          ɵɵdomElement(15, "img", 6);
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(4);
          ɵɵdomProperty("value", ctx.hours);
          ɵɵadvance(6);
          ɵɵdomProperty("value", ctx.minutes);
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ctx.ampm, " ");
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsTimepickerViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-timepicker",
      template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <button class="switch-time-format" type="button">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `,
      standalone: true
    }]
  }], null, null);
})();
var BsCurrentDateViewComponent = class _BsCurrentDateViewComponent {
  static {
    this.ɵfac = function BsCurrentDateViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsCurrentDateViewComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsCurrentDateViewComponent,
      selectors: [["bs-current-date"]],
      inputs: {
        title: "title"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "current-timedate"]],
      template: function BsCurrentDateViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 0)(1, "span");
          ɵɵtext(2);
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.title);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCurrentDateViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-current-date",
      template: `<div class="current-timedate"><span>{{ title }}</span></div>`,
      standalone: true
    }]
  }], null, {
    title: [{
      type: Input
    }]
  });
})();
var BsCalendarLayoutComponent = class _BsCalendarLayoutComponent {
  static {
    this.ɵfac = function BsCalendarLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsCalendarLayoutComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsCalendarLayoutComponent,
      selectors: [["bs-calendar-layout"]],
      ngContentSelectors: _c1,
      decls: 6,
      vars: 2,
      consts: [["title", "hey there"], [1, "bs-datepicker-head"], [1, "bs-datepicker-body"]],
      template: function BsCalendarLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c0);
          ɵɵconditionalCreate(0, BsCalendarLayoutComponent_Conditional_0_Template, 1, 0, "bs-current-date", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 2);
          ɵɵprojection(4, 1);
          ɵɵelementEnd();
          ɵɵconditionalCreate(5, BsCalendarLayoutComponent_Conditional_5_Template, 1, 0, "bs-timepicker");
        }
        if (rf & 2) {
          ɵɵconditional(false ? 0 : -1);
          ɵɵadvance(5);
          ɵɵconditional(false ? 5 : -1);
        }
      },
      dependencies: [BsCurrentDateViewComponent, BsTimepickerViewComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCalendarLayoutComponent, [{
    type: Component,
    args: [{
      selector: "bs-calendar-layout",
      template: `
    <!-- current date, will be added in nearest releases -->
    @if (false) {
      <bs-current-date title="hey there"></bs-current-date>
    }
    
    <!--navigation-->
    <div class="bs-datepicker-head">
      <ng-content select="bs-datepicker-navigation-view"></ng-content>
    </div>
    
    <div class="bs-datepicker-body">
      <ng-content></ng-content>
    </div>
    
    <!--timepicker-->
    @if (false) {
      <bs-timepicker></bs-timepicker>
    }
    `,
      standalone: true,
      imports: [BsCurrentDateViewComponent, BsTimepickerViewComponent]
    }]
  }], null, null);
})();
var BsYearsCalendarViewComponent = class _BsYearsCalendarViewComponent {
  constructor() {
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        year: step * yearsPerCalendar
      }
    });
  }
  viewYear(year) {
    this.onSelect.emit(year);
  }
  hoverYear(cell, isHovered) {
    this.onHover.emit({
      cell,
      isHovered
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
  static {
    this.ɵfac = function BsYearsCalendarViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsYearsCalendarViewComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsYearsCalendarViewComponent,
      selectors: [["bs-years-calendar-view"]],
      inputs: {
        calendar: "calendar"
      },
      outputs: {
        onNavigate: "onNavigate",
        onViewMode: "onViewMode",
        onSelect: "onSelect",
        onHover: "onHover"
      },
      decls: 6,
      vars: 1,
      consts: [[3, "onNavigate", "onViewMode", "calendar"], ["role", "grid", 1, "years"], ["role", "gridcell", 3, "disabled", "is-highlighted"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]],
      template: function BsYearsCalendarViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
          ɵɵlistener("onNavigate", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
            return ctx.navigateTo($event);
          })("onViewMode", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
            return ctx.changeViewMode($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "table", 1)(3, "tbody");
          ɵɵrepeaterCreate(4, BsYearsCalendarViewComponent_For_5_Template, 3, 0, "tr", null, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("calendar", ctx.calendar);
          ɵɵadvance(3);
          ɵɵrepeater(ctx.calendar == null ? null : ctx.calendar.years);
        }
      },
      dependencies: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsYearsCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-years-calendar-view",
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>
    
      <table role="grid" class="years">
        <tbody>
          @for (row of calendar?.years; track row) {
            <tr>
              @for (year of row; track year) {
                <td role="gridcell"
                  (click)="viewYear(year)"
                  (mouseenter)="hoverYear(year, true)"
                  (mouseleave)="hoverYear(year, false)"
                  [class.disabled]="year.isDisabled"
                  [class.is-highlighted]="year.isHovered">
                  <span [class.selected]="year.isSelected">{{ year.label }}</span>
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </bs-calendar-layout>
    `,
      standalone: true,
      imports: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent]
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }]
  });
})();
var BsMonthCalendarViewComponent = class _BsMonthCalendarViewComponent {
  constructor() {
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        year: step
      }
    });
  }
  viewMonth(month) {
    this.onSelect.emit(month);
  }
  hoverMonth(cell, isHovered) {
    this.onHover.emit({
      cell,
      isHovered
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
  static {
    this.ɵfac = function BsMonthCalendarViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsMonthCalendarViewComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsMonthCalendarViewComponent,
      selectors: [["bs-month-calendar-view"]],
      inputs: {
        calendar: "calendar"
      },
      outputs: {
        onNavigate: "onNavigate",
        onViewMode: "onViewMode",
        onSelect: "onSelect",
        onHover: "onHover"
      },
      decls: 6,
      vars: 1,
      consts: [[3, "onNavigate", "onViewMode", "calendar"], ["role", "grid", 1, "months"], ["role", "gridcell", 3, "disabled", "is-highlighted"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]],
      template: function BsMonthCalendarViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
          ɵɵlistener("onNavigate", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
            return ctx.navigateTo($event);
          })("onViewMode", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
            return ctx.changeViewMode($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "table", 1)(3, "tbody");
          ɵɵrepeaterCreate(4, BsMonthCalendarViewComponent_For_5_Template, 3, 0, "tr", null, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("calendar", ctx.calendar);
          ɵɵadvance(3);
          ɵɵrepeater(ctx.calendar == null ? null : ctx.calendar.months);
        }
      },
      dependencies: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsMonthCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-month-calendar-view",
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>
    
      <table role="grid" class="months">
        <tbody>
          @for (row of calendar?.months; track row) {
            <tr>
              @for (month of row; track month) {
                <td role="gridcell"
                  (click)="viewMonth(month)"
                  (mouseenter)="hoverMonth(month, true)"
                  (mouseleave)="hoverMonth(month, false)"
                  [class.disabled]="month.isDisabled"
                  [class.is-highlighted]="month.isHovered">
                  <span [class.selected]="month.isSelected">{{ month.label }}</span>
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </bs-calendar-layout>
    `,
      standalone: true,
      imports: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent]
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }]
  });
})();
var BsDatepickerDayDecoratorComponent = class _BsDatepickerDayDecoratorComponent {
  constructor(_config, _elRef, _renderer) {
    this._config = _config;
    this._elRef = _elRef;
    this._renderer = _renderer;
    this.day = {
      date: /* @__PURE__ */ new Date(),
      label: ""
    };
  }
  ngOnInit() {
    if (this.day?.isToday && this._config && this._config.customTodayClass) {
      this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
    }
    if (typeof this.day?.customClasses === "string") {
      this.day?.customClasses.split(" ").filter((className) => className).forEach((className) => {
        this._renderer.addClass(this._elRef.nativeElement, className);
      });
    }
  }
  static {
    this.ɵfac = function BsDatepickerDayDecoratorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerDayDecoratorComponent)(ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsDatepickerDayDecoratorComponent,
      selectors: [["", "bsDatepickerDayDecorator", ""]],
      hostVars: 16,
      hostBindings: function BsDatepickerDayDecoratorComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("disabled", ctx.day.isDisabled)("is-highlighted", ctx.day.isHovered)("is-other-month", ctx.day.isOtherMonth)("is-active-other-month", ctx.day.isOtherMonthHovered)("in-range", ctx.day.isInRange)("select-start", ctx.day.isSelectionStart)("select-end", ctx.day.isSelectionEnd)("selected", ctx.day.isSelected);
        }
      },
      inputs: {
        day: "day"
      },
      attrs: _c2,
      decls: 1,
      vars: 1,
      template: function BsDatepickerDayDecoratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtext(0);
        }
        if (rf & 2) {
          ɵɵtextInterpolate(ctx.day && ctx.day.label || "");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerDayDecoratorComponent, [{
    type: Component,
    args: [{
      selector: "[bsDatepickerDayDecorator]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.disabled]": "day.isDisabled",
        "[class.is-highlighted]": "day.isHovered",
        "[class.is-other-month]": "day.isOtherMonth",
        "[class.is-active-other-month]": "day.isOtherMonthHovered",
        "[class.in-range]": "day.isInRange",
        "[class.select-start]": "day.isSelectionStart",
        "[class.select-end]": "day.isSelectionEnd",
        "[class.selected]": "day.isSelected"
      },
      template: `{{ day && day.label || '' }}`,
      standalone: true
    }]
  }], () => [{
    type: BsDatepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    day: [{
      type: Input
    }]
  });
})();
var BsDaysCalendarViewComponent = class _BsDaysCalendarViewComponent {
  constructor(_config) {
    this._config = _config;
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
    this.onHoverWeek = new EventEmitter();
    this.isiOS = /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    if (this._config.dateTooltipTexts && this._config.dateTooltipTexts.length > 0) {
      this.isShowTooltip = true;
    }
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        month: step
      }
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
  selectDay(event) {
    this.onSelect.emit(event);
  }
  selectWeek(week) {
    if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
      return;
    }
    if (week.days.length === 0) {
      return;
    }
    if (this._config.selectWeek && week.days[0] && !week.days[0].isDisabled && this._config.selectFromOtherMonth) {
      this.onSelect.emit(week.days[0]);
      return;
    }
    const selectedDay = week.days.find((day) => {
      return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
    });
    this.onSelect.emit(selectedDay);
    if (this._config.selectWeekDateRange) {
      const days = week.days.slice(0);
      const lastDayOfRange = days.reverse().find((day) => {
        return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
      });
      this.onSelect.emit(lastDayOfRange);
    }
  }
  weekHoverHandler(cell, isHovered) {
    if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
      return;
    }
    const hasActiveDays = cell.days.find((day) => {
      return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
    });
    if (hasActiveDays) {
      cell.isHovered = isHovered;
      this.isWeekHovered = isHovered;
      this.onHoverWeek.emit(cell);
    }
  }
  hoverDay(cell, isHovered) {
    if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
      cell.isOtherMonthHovered = isHovered;
    }
    if (this._config.dateTooltipTexts) {
      cell.tooltipText = "";
      this._config.dateTooltipTexts.forEach((dateData) => {
        if (isSameDay$1(dateData.date, cell.date)) {
          cell.tooltipText = dateData.tooltipText;
          return;
        }
      });
    }
    this.onHover.emit({
      cell,
      isHovered
    });
  }
  static {
    this.ɵfac = function BsDaysCalendarViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaysCalendarViewComponent)(ɵɵdirectiveInject(BsDatepickerConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsDaysCalendarViewComponent,
      selectors: [["bs-days-calendar-view"]],
      inputs: {
        calendar: "calendar",
        options: "options",
        isDisabled: "isDisabled"
      },
      outputs: {
        onNavigate: "onNavigate",
        onViewMode: "onViewMode",
        onSelect: "onSelect",
        onHover: "onHover",
        onHoverWeek: "onHoverWeek"
      },
      decls: 11,
      vars: 3,
      consts: [[3, "onNavigate", "onViewMode", "calendar", "isDisabled"], ["role", "grid", 1, "days", "weeks"], ["aria-label", "weekday"], [1, "week", 3, "active-week"], ["role", "gridcell"], [1, "week"], [3, "click"], [3, "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip"], ["bsDatepickerDayDecorator", "", 3, "day"], ["bsDatepickerDayDecorator", "", 3, "click", "mouseenter", "mouseleave", "day", "tooltip"], ["bsDatepickerDayDecorator", "", 3, "click", "mouseenter", "mouseleave", "day"], ["bsDatepickerDayDecorator", "", 3, "click", "day"]],
      template: function BsDaysCalendarViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
          ɵɵlistener("onNavigate", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
            return ctx.navigateTo($event);
          })("onViewMode", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
            return ctx.changeViewMode($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "table", 1)(3, "thead")(4, "tr");
          ɵɵconditionalCreate(5, BsDaysCalendarViewComponent_Conditional_5_Template, 1, 0, "th");
          ɵɵrepeaterCreate(6, BsDaysCalendarViewComponent_For_7_Template, 2, 1, "th", 2, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()();
          ɵɵelementStart(8, "tbody");
          ɵɵrepeaterCreate(9, BsDaysCalendarViewComponent_For_10_Template, 4, 1, "tr", null, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("calendar", ctx.calendar)("isDisabled", !!ctx.isDisabled);
          ɵɵadvance(4);
          ɵɵconditional(ctx.options && ctx.options.showWeekNumbers ? 5 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.calendar.weekdays);
          ɵɵadvance(3);
          ɵɵrepeater(ctx.calendar.weeks);
        }
      },
      dependencies: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, BsDatepickerDayDecoratorComponent, TooltipModule, TooltipDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaysCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-days-calendar-view",
      // changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        [isDisabled]="!!isDisabled"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>
      <!--days matrix-->
      <table role="grid" class="days weeks">
        <thead>
          <tr>
            <!--if show weeks-->
            @if (options && options.showWeekNumbers) {
              <th></th>
            }
            @for (weekday of calendar.weekdays; track weekday; let i = $index) {
              <th
                aria-label="weekday">{{ calendar.weekdays[i] }}
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (week of calendar.weeks; track week; let i = $index) {
            <tr>
              @if (options && options.showWeekNumbers) {
                <td class="week" [class.active-week]="isWeekHovered" >
                  @if (isiOS) {
                    <span (click)="selectWeek(week)">{{ calendar.weekNumbers[i] }}</span>
                  }
                  @if (!isiOS) {
                    <span
                      (click)="selectWeek(week)"
                      (mouseenter)="weekHoverHandler(week, true)"
                    (mouseleave)="weekHoverHandler(week, false)">{{ calendar.weekNumbers[i] }}</span>
                  }
                </td>
              }
              @for (day of week.days; track day) {
                <td role="gridcell">
                  <!-- When we want to show tooltips for dates -->
                  @if (!isiOS && isShowTooltip) {
                    <span bsDatepickerDayDecorator
                      [day]="day"
                      (click)="selectDay(day)"
                      tooltip="{{day.tooltipText}}"
                      (mouseenter)="hoverDay(day, true)"
                    (mouseleave)="hoverDay(day, false)">{{ day.label }} 3</span>
                  }
                  <!-- When tooltips for dates are disabled -->
                  @if (!isiOS && !isShowTooltip) {
                    <span bsDatepickerDayDecorator
                      [day]="day"
                      (click)="selectDay(day)"
                      (mouseenter)="hoverDay(day, true)"
                    (mouseleave)="hoverDay(day, false)">{{ day.label }} 2</span>
                  }
                  <!-- For mobile iOS view, tooltips are not needed -->
                  @if (isiOS) {
                    <span bsDatepickerDayDecorator
                      [day]="day"
                    (click)="selectDay(day)">{{ day.label }} 1</span>
                  }
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    
    </bs-calendar-layout>
    `,
      standalone: true,
      imports: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, BsDatepickerDayDecoratorComponent, TooltipModule]
    }]
  }], () => [{
    type: BsDatepickerConfig
  }], {
    calendar: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }],
    onHoverWeek: [{
      type: Output
    }]
  });
})();
var BsDatepickerContainerComponent = class _BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
  set value(value) {
    this._effects?.setValue(value);
  }
  get isDatePickerDisabled() {
    return !!this._config.isDisabled;
  }
  get isDatepickerDisabled() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get isDatepickerReadonly() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
    super();
    this._renderer = _renderer;
    this._config = _config;
    this._store = _store;
    this._element = _element;
    this._actions = _actions;
    this._positionService = _positionService;
    this.valueChange = new EventEmitter();
    this.isRangePicker = false;
    this._subs = [];
    this._effects = _effects;
    _renderer.setStyle(_element.nativeElement, "display", "block");
    _renderer.setStyle(_element.nativeElement, "position", "absolute");
  }
  ngOnInit() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this._config.adaptivePosition
        },
        preventOverflow: {
          enabled: this._config.adaptivePosition
        }
      },
      allowedPositions: this._config.allowedPositions
    });
    this._positionService.event$?.pipe(take(1)).subscribe(() => {
      this._positionService.disable();
      if (this._config.isAnimated) {
        const containerEl = this._element.nativeElement.querySelector(".bs-datepicker-container");
        if (containerEl) {
          this._animateExpand(containerEl, () => this.positionServiceEnable());
        } else {
          this.positionServiceEnable();
        }
        return;
      }
      this.positionServiceEnable();
    });
    this.isOtherMonthsActive = this._config.selectFromOtherMonth;
    this.containerClass = this._config.containerClass;
    this.showTodayBtn = this._config.showTodayButton;
    this.todayBtnLbl = this._config.todayButtonLabel;
    this.todayPos = this._config.todayPosition;
    this.showClearBtn = this._config.showClearButton;
    this.clearBtnLbl = this._config.clearButtonLabel;
    this.clearPos = this._config.clearPosition;
    this.customRangeBtnLbl = this._config.customRangeButtonLabel;
    this.withTimepicker = this._config.withTimepicker;
    this._effects?.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
    let currentDate;
    this._subs.push(this._store.select((state) => state.selectedDate).subscribe((date) => {
      currentDate = date;
      this.valueChange.emit(date);
    }));
    this._subs.push(this._store.select((state) => state.selectedTime).subscribe((time) => {
      if (!time || !time[0] || !(time[0] instanceof Date) || time[0] === currentDate) {
        return;
      }
      this.valueChange.emit(time[0]);
    }));
    this._store.dispatch(this._actions.changeViewMode(this._config.startView));
  }
  ngAfterViewInit() {
    this.selectedTimeSub.add(this.selectedTime?.subscribe((val) => {
      if (Array.isArray(val) && val.length >= 1) {
        this.startTimepicker?.writeValue(val[0]);
      }
    }));
    this.startTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 0);
    });
  }
  get isTopPosition() {
    return this._element.nativeElement.classList.contains("top");
  }
  positionServiceEnable() {
    this._positionService.enable();
  }
  timeSelectHandler(date, index) {
    this._store.dispatch(this._actions.selectTime(date, index));
  }
  daySelectHandler(day) {
    if (!day) {
      return;
    }
    const isDisabled = this.isOtherMonthsActive ? day.isDisabled : day.isOtherMonth || day.isDisabled;
    if (isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.select(day.date));
  }
  monthSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.navigateTo({
      unit: {
        month: getMonth(day.date),
        year: getFullYear(day.date)
      },
      viewMode: "day"
    }));
  }
  yearSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.navigateTo({
      unit: {
        year: getFullYear(day.date)
      },
      viewMode: "month"
    }));
  }
  setToday() {
    this._store.dispatch(this._actions.select(/* @__PURE__ */ new Date()));
  }
  clearDate() {
    this._store.dispatch(this._actions.select(void 0));
  }
  _animateExpand(el, onDone) {
    this._cancelExpandAnimation?.();
    this._cancelExpandAnimation = animateExpand(this._renderer, el, {
      timing: DATEPICKER_ANIMATION_TIMING,
      durationMs: DATEPICKER_ANIMATION_DURATION_MS,
      useRaf: true,
      manageDisplay: true,
      onDone
    });
  }
  ngOnDestroy() {
    this._cancelExpandAnimation?.();
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    this.selectedTimeSub.unsubscribe();
    this._effects?.destroy();
  }
  static {
    this.ɵfac = function BsDatepickerContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerContainerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(BsDatepickerStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BsDatepickerActions), ɵɵdirectiveInject(BsDatepickerEffects), ɵɵdirectiveInject(PositioningService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsDatepickerContainerComponent,
      selectors: [["bs-datepicker-container"]],
      viewQuery: function BsDatepickerContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTimepicker = _t.first);
        }
      },
      hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
      hostVars: 2,
      hostBindings: function BsDatepickerContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function BsDatepickerContainerComponent_click_HostBindingHandler($event) {
            return ctx._stopPropagation($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.isDatepickerDisabled)("readonly", ctx.isDatepickerReadonly);
        }
      },
      features: [ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions]), ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["startTP", ""], ["endTP", ""], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container"], [1, "bs-media-container"], [1, "bs-datepicker-buttons"], [1, "bs-datepicker-custom-range"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options"], [1, "bs-timepicker-in-datepicker-container"], [3, "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", "calendar", "isDisabled", "options"], [3, "disabled"], [3, "bs-datepicker-multiple", "calendar"], [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], [1, "btn-today-wrapper", 3, "today-left", "today-right", "today-center"], [1, "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"]],
      template: function BsDatepickerContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, BsDatepickerContainerComponent_Conditional_0_Template, 10, 7, "div", 2);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵconditional(ɵɵpipeBind1(1, 1, ctx.viewMode) ? 0 : -1);
        }
      },
      dependencies: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-container",
      providers: [BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions],
      host: {
        class: "bottom",
        "(click)": "_stopPropagation($event)",
        role: "dialog",
        "aria-label": "calendar"
      },
      standalone: true,
      imports: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      template: `<!-- days calendar view mode -->
@if (viewMode | async) {
  <div class="bs-datepicker" [ngClass]="containerClass">
    <div class="bs-datepicker-container">
      <!--calendars-->
      <div class="bs-calendar-container" role="application">
        @switch (viewMode | async) {
          <!--days calendar-->
          @case ('day') {
            <div class="bs-media-container">
              @for (calendar of daysCalendar$ | async; track calendar) {
                <bs-days-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  [isDisabled]="isDatePickerDisabled"
                  [options]="options$ | async"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="dayHoverHandler($event)"
                  (onHoverWeek)="weekHoverHandler($event)"
                  (onSelect)="daySelectHandler($event)">
                </bs-days-calendar-view>
              }
            </div>
            @if (withTimepicker) {
              <div class="bs-timepicker-in-datepicker-container">
                <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
                @if (isRangePicker) {
                  <timepicker #endTP [disabled]="isDatePickerDisabled"></timepicker>
                }
              </div>
            }
          }
          <!--months calendar-->
          @case ('month') {
            <div class="bs-media-container">
              @for (calendar of monthsCalendar | async; track calendar) {
                <bs-month-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="monthHoverHandler($event)"
                  (onSelect)="monthSelectHandler($event)">
                </bs-month-calendar-view>
              }
            </div>
          }
          <!--years calendar-->
          @case ('year') {
            <div class="bs-media-container">
              @for (calendar of yearsCalendar | async; track calendar) {
                <bs-years-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="yearHoverHandler($event)"
                  (onSelect)="yearSelectHandler($event)">
                </bs-years-calendar-view>
              }
            </div>
          }
        }
      </div>
      <!--applycancel buttons-->
      @if (false) {
        <div class="bs-datepicker-buttons">
          <button class="btn btn-success" type="button">Apply</button>
          <button class="btn btn-default" type="button">Cancel</button>
        </div>
      }
      @if (showTodayBtn || showClearBtn) {
        <div class="bs-datepicker-buttons">
          @if (showTodayBtn) {
            <div class="btn-today-wrapper"
              [class.today-left]="todayPos === 'left'"
              [class.today-right]="todayPos === 'right'"
              [class.today-center]="todayPos === 'center'"
              >
              <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
            </div>
          }
          @if (showClearBtn) {
            <div class="btn-clear-wrapper"
              [class.clear-left]="clearPos === 'left'"
              [class.clear-right]="clearPos === 'right'"
              [class.clear-center]="clearPos === 'center'"
              >
              <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
            </div>
          }
        </div>
      }
    </div>
    <!--custom dates or date ranges picker-->
    @if (customRanges && customRanges.length > 0) {
      <div class="bs-datepicker-custom-range">
        <bs-custom-date-view
          [selectedRange]="chosenRange"
          [ranges]="customRanges"
          [customRangeLabel]="customRangeBtnLbl"
          (onSelect)="setRangeOnCalendar($event)">
        </bs-custom-date-view>
      </div>
    }
  </div>
}
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    startTimepicker: [{
      type: ViewChild,
      args: ["startTP"]
    }],
    isDatepickerDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var previousDate$1;
var BsDatepickerDirective = class _BsDatepickerDirective {
  get readonlyValue() {
    return this.isDisabled ? "" : null;
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.placement = "bottom";
    this.triggers = "click";
    this.outsideClick = true;
    this.container = "body";
    this.outsideEsc = true;
    this.isDestroy$ = new Subject();
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    this._dateInputFormat$ = new Subject();
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    this.onShown = this._datepicker.onShown;
    this.onHidden = this._datepicker.onHidden;
    this.isOpen$ = new BehaviorSubject(this.isOpen);
  }
  /**
   * Returns whether or not the datepicker is currently being shown
   */
  get isOpen() {
    return this._datepicker.isShown;
  }
  set isOpen(value) {
    this.isOpen$.next(value);
  }
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
      return;
    }
    if (!this._bsValue && value && !this._config.withTimepicker) {
      const now = /* @__PURE__ */ new Date();
      copyTime(value, now);
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setCurrentTimeOnDateSelect(value);
    }
    this.initPreviousValue();
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  get dateInputFormat$() {
    return this._dateInputFormat$;
  }
  ngOnInit() {
    this._datepicker.listen({
      outsideClick: this.outsideClick,
      outsideEsc: this.outsideEsc,
      triggers: this.triggers,
      show: () => this.show()
    });
    this.setConfig();
    this.initPreviousValue();
  }
  initPreviousValue() {
    previousDate$1 = this._bsValue;
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this.initPreviousValue();
        this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
      this.setConfig();
      this._dateInputFormat$.next(this.bsConfig && this.bsConfig.dateInputFormat);
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    if (changes["dateTooltipTexts"]) {
      this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
    }
  }
  initSubscribes() {
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
        this.initPreviousValue();
        this.bsValue = value;
        if (this.keepDatepickerModalOpened()) {
          return;
        }
        this.hide();
      }));
    }
  }
  keepDatepickerModalOpened() {
    if (!previousDate$1 || !this.bsConfig?.keepDatepickerOpened || !this._config.withTimepicker) {
      return false;
    }
    return this.isDateSame();
  }
  isDateSame() {
    return previousDate$1 instanceof Date && this._bsValue?.getDate() === previousDate$1?.getDate() && this._bsValue?.getMonth() === previousDate$1?.getMonth() && this._bsValue?.getFullYear() === previousDate$1?.getFullYear();
  }
  ngAfterViewInit() {
    this.isOpen$.pipe(filter((isOpen) => isOpen !== this.isOpen), takeUntil(this.isDestroy$)).subscribe(() => this.toggle());
  }
  /**
   * Opens an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  show() {
    if (this._datepicker.isShown) {
      return;
    }
    this.setConfig();
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDatepickerContainerComponent).to(this.container).position({
      attachment: this.placement
    }).show({
      placement: this.placement
    });
    this.initSubscribes();
  }
  /**
   * Closes an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  hide() {
    if (this.isOpen) {
      this._datepicker.hide();
    }
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    if (this._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
    }
  }
  /**
   * Toggles an element’s datepicker. This is considered a “manual” triggering
   * of the datepicker.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: this._config.keepDatesOutOfRules ? this._bsValue : checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      minMode: this.minMode || this.bsConfig && this.bsConfig.minMode,
      initCurrentTime: this.bsConfig?.initCurrentTime,
      keepDatepickerOpened: this.bsConfig?.keepDatepickerOpened,
      keepDatesOutOfRules: this.bsConfig?.keepDatesOutOfRules
    });
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.isOpen$.next(false);
    if (this.isDestroy$) {
      this.isDestroy$.next(null);
      this.isDestroy$.complete();
    }
    this.unsubscribeSubscriptions();
  }
  static {
    this.ɵfac = function BsDatepickerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerDirective)(ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BsDatepickerDirective,
      selectors: [["", "bsDatepicker", ""]],
      hostVars: 1,
      hostBindings: function BsDatepickerDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("readonly", ctx.readonlyValue);
        }
      },
      inputs: {
        placement: "placement",
        triggers: "triggers",
        outsideClick: "outsideClick",
        container: "container",
        outsideEsc: "outsideEsc",
        isDisabled: "isDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        ignoreMinMaxErrors: "ignoreMinMaxErrors",
        minMode: "minMode",
        daysDisabled: "daysDisabled",
        datesDisabled: "datesDisabled",
        datesEnabled: "datesEnabled",
        dateCustomClasses: "dateCustomClasses",
        dateTooltipTexts: "dateTooltipTexts",
        isOpen: "isOpen",
        bsValue: "bsValue",
        bsConfig: "bsConfig"
      },
      outputs: {
        onShown: "onShown",
        onHidden: "onHidden",
        bsValueChange: "bsValueChange"
      },
      exportAs: ["bsDatepicker"],
      features: [ɵɵProvidersFeature([ComponentLoaderFactory, PositioningService]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDatepicker]",
      exportAs: "bsDatepicker",
      providers: [ComponentLoaderFactory, PositioningService],
      standalone: true
    }]
  }], () => [{
    type: BsDatepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    outsideClick: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    outsideEsc: [{
      type: Input
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    ignoreMinMaxErrors: [{
      type: Input
    }],
    minMode: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    dateTooltipTexts: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }],
    isOpen: [{
      type: Input
    }],
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }]
  });
})();
var BsDatepickerInlineConfig = class _BsDatepickerInlineConfig extends BsDatepickerConfig {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBsDatepickerInlineConfig_BaseFactory;
      return function BsDatepickerInlineConfig_Factory(__ngFactoryType__) {
        return (ɵBsDatepickerInlineConfig_BaseFactory || (ɵBsDatepickerInlineConfig_BaseFactory = ɵɵgetInheritedFactory(_BsDatepickerInlineConfig)))(__ngFactoryType__ || _BsDatepickerInlineConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BsDatepickerInlineConfig,
      factory: _BsDatepickerInlineConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BsDatepickerInlineContainerComponent = class _BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent {
  get disabledValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get readonlyValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
    super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
    _renderer.setStyle(_element.nativeElement, "display", "inline-block");
    _renderer.setStyle(_element.nativeElement, "position", "static");
  }
  static {
    this.ɵfac = function BsDatepickerInlineContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerInlineContainerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(BsDatepickerStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BsDatepickerActions), ɵɵdirectiveInject(BsDatepickerEffects), ɵɵdirectiveInject(PositioningService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsDatepickerInlineContainerComponent,
      selectors: [["bs-datepicker-inline-container"]],
      hostVars: 2,
      hostBindings: function BsDatepickerInlineContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function BsDatepickerInlineContainerComponent_click_HostBindingHandler($event) {
            return ctx._stopPropagation($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabledValue)("readonly", ctx.readonlyValue);
        }
      },
      features: [ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["startTP", ""], ["endTP", ""], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container"], [1, "bs-media-container"], [1, "bs-datepicker-buttons"], [1, "bs-datepicker-custom-range"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options"], [1, "bs-timepicker-in-datepicker-container"], [3, "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", "calendar", "isDisabled", "options"], [3, "disabled"], [3, "bs-datepicker-multiple", "calendar"], [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], [1, "btn-today-wrapper", 3, "today-left", "today-right", "today-center"], [1, "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"]],
      template: function BsDatepickerInlineContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, BsDatepickerInlineContainerComponent_Conditional_0_Template, 10, 7, "div", 2);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵconditional(ɵɵpipeBind1(1, 1, ctx.viewMode) ? 0 : -1);
        }
      },
      dependencies: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-inline-container",
      providers: [BsDatepickerStore, BsDatepickerEffects],
      host: {
        "(click)": "_stopPropagation($event)"
      },
      standalone: true,
      imports: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      template: `<!-- days calendar view mode -->
@if (viewMode | async) {
  <div class="bs-datepicker" [ngClass]="containerClass">
    <div class="bs-datepicker-container">
      <!--calendars-->
      <div class="bs-calendar-container" role="application">
        @switch (viewMode | async) {
          <!--days calendar-->
          @case ('day') {
            <div class="bs-media-container">
              @for (calendar of daysCalendar$ | async; track calendar) {
                <bs-days-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  [isDisabled]="isDatePickerDisabled"
                  [options]="options$ | async"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="dayHoverHandler($event)"
                  (onHoverWeek)="weekHoverHandler($event)"
                  (onSelect)="daySelectHandler($event)">
                </bs-days-calendar-view>
              }
            </div>
            @if (withTimepicker) {
              <div class="bs-timepicker-in-datepicker-container">
                <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
                @if (isRangePicker) {
                  <timepicker #endTP [disabled]="isDatePickerDisabled"></timepicker>
                }
              </div>
            }
          }
          <!--months calendar-->
          @case ('month') {
            <div class="bs-media-container">
              @for (calendar of monthsCalendar | async; track calendar) {
                <bs-month-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="monthHoverHandler($event)"
                  (onSelect)="monthSelectHandler($event)">
                </bs-month-calendar-view>
              }
            </div>
          }
          <!--years calendar-->
          @case ('year') {
            <div class="bs-media-container">
              @for (calendar of yearsCalendar | async; track calendar) {
                <bs-years-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="yearHoverHandler($event)"
                  (onSelect)="yearSelectHandler($event)">
                </bs-years-calendar-view>
              }
            </div>
          }
        }
      </div>
      <!--applycancel buttons-->
      @if (false) {
        <div class="bs-datepicker-buttons">
          <button class="btn btn-success" type="button">Apply</button>
          <button class="btn btn-default" type="button">Cancel</button>
        </div>
      }
      @if (showTodayBtn || showClearBtn) {
        <div class="bs-datepicker-buttons">
          @if (showTodayBtn) {
            <div class="btn-today-wrapper"
              [class.today-left]="todayPos === 'left'"
              [class.today-right]="todayPos === 'right'"
              [class.today-center]="todayPos === 'center'"
              >
              <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
            </div>
          }
          @if (showClearBtn) {
            <div class="btn-clear-wrapper"
              [class.clear-left]="clearPos === 'left'"
              [class.clear-right]="clearPos === 'right'"
              [class.clear-center]="clearPos === 'center'"
              >
              <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
            </div>
          }
        </div>
      }
    </div>
    <!--custom dates or date ranges picker-->
    @if (customRanges && customRanges.length > 0) {
      <div class="bs-datepicker-custom-range">
        <bs-custom-date-view
          [selectedRange]="chosenRange"
          [ranges]="customRanges"
          [customRangeLabel]="customRangeBtnLbl"
          (onSelect)="setRangeOnCalendar($event)">
        </bs-custom-date-view>
      </div>
    }
  </div>
}
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    disabledValue: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BsDatepickerInlineDirective = class _BsDatepickerInlineDirective {
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
  }
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (!this._bsValue && value && !this._config.withTimepicker) {
      const now = /* @__PURE__ */ new Date();
      copyTime(value, now);
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setCurrentTimeOnDateSelect(value);
    }
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  ngOnInit() {
    this.setConfig();
    this.initSubscribes();
  }
  initSubscribes() {
    this.unsubscribeSubscriptions();
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
        this.bsValue = value;
      }));
    }
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
      this._datepickerRef.instance.value = this._bsValue;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    if (changes["dateTooltipTexts"]) {
      this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
    }
    this.setConfig();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    if (this._datepicker) {
      this._datepicker.hide();
    }
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      initCurrentTime: this.bsConfig?.initCurrentTime
    });
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDatepickerInlineContainerComponent).to(this._elementRef).show();
    this.initSubscribes();
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.unsubscribeSubscriptions();
  }
  static {
    this.ɵfac = function BsDatepickerInlineDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerInlineDirective)(ɵɵdirectiveInject(BsDatepickerInlineConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BsDatepickerInlineDirective,
      selectors: [["bs-datepicker-inline"]],
      inputs: {
        bsConfig: "bsConfig",
        isDisabled: "isDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        dateCustomClasses: "dateCustomClasses",
        dateTooltipTexts: "dateTooltipTexts",
        datesEnabled: "datesEnabled",
        datesDisabled: "datesDisabled",
        bsValue: "bsValue"
      },
      outputs: {
        bsValueChange: "bsValueChange"
      },
      exportAs: ["bsDatepickerInline"],
      features: [ɵɵProvidersFeature([ComponentLoaderFactory, PositioningService]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineDirective, [{
    type: Directive,
    args: [{
      selector: "bs-datepicker-inline",
      exportAs: "bsDatepickerInline",
      standalone: true,
      providers: [ComponentLoaderFactory, PositioningService]
    }]
  }], () => [{
    type: BsDatepickerInlineConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    dateTooltipTexts: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    bsValue: [{
      type: Input
    }]
  });
})();
var BsDaterangepickerInlineConfig = class _BsDaterangepickerInlineConfig extends BsDatepickerConfig {
  constructor() {
    super(...arguments);
    this.displayMonths = 2;
    this.isAnimated = false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBsDaterangepickerInlineConfig_BaseFactory;
      return function BsDaterangepickerInlineConfig_Factory(__ngFactoryType__) {
        return (ɵBsDaterangepickerInlineConfig_BaseFactory || (ɵBsDaterangepickerInlineConfig_BaseFactory = ɵɵgetInheritedFactory(_BsDaterangepickerInlineConfig)))(__ngFactoryType__ || _BsDaterangepickerInlineConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BsDaterangepickerInlineConfig,
      factory: _BsDaterangepickerInlineConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BsDaterangepickerContainerComponent = class _BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
  set value(value) {
    this._effects?.setRangeValue(value);
  }
  get isDatePickerDisabled() {
    return !!this._config.isDisabled;
  }
  get isDatepickerDisabled() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get isDatepickerReadonly() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
    super();
    this._renderer = _renderer;
    this._config = _config;
    this._store = _store;
    this._element = _element;
    this._actions = _actions;
    this._positionService = _positionService;
    this.valueChange = new EventEmitter();
    this._rangeStack = [];
    this.chosenRange = [];
    this._subs = [];
    this.isRangePicker = true;
    this._effects = _effects;
    this.customRanges = this._config.ranges || [];
    this.customRangeBtnLbl = this._config.customRangeButtonLabel;
    _renderer.setStyle(_element.nativeElement, "display", "block");
    _renderer.setStyle(_element.nativeElement, "position", "absolute");
  }
  ngOnInit() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this._config.adaptivePosition
        },
        preventOverflow: {
          enabled: this._config.adaptivePosition
        }
      },
      allowedPositions: this._config.allowedPositions
    });
    this._positionService.event$?.pipe(take(1)).subscribe(() => {
      this._positionService.disable();
      if (this._config.isAnimated) {
        const containerEl = this._element.nativeElement.querySelector(".bs-datepicker-container");
        if (containerEl) {
          this._animateExpand(containerEl, () => this.positionServiceEnable());
        } else {
          this.positionServiceEnable();
        }
        return;
      }
      this.positionServiceEnable();
    });
    this.containerClass = this._config.containerClass;
    this.isOtherMonthsActive = this._config.selectFromOtherMonth;
    this.withTimepicker = this._config.withTimepicker;
    this._effects?.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
    let currentDate;
    this._subs.push(this._store.select((state) => state.selectedRange).subscribe((dateRange) => {
      currentDate = dateRange;
      this.valueChange.emit(dateRange);
      this.chosenRange = dateRange || [];
    }));
    this._subs.push(this._store.select((state) => state.selectedTime).subscribe((time) => {
      if (!time || !time[0] || !time[1] || !(time[0] instanceof Date) || !(time[1] instanceof Date) || currentDate && time[0] === currentDate[0] && time[1] === currentDate[1]) {
        return;
      }
      this.valueChange.emit(time);
      this.chosenRange = time || [];
    }));
  }
  ngAfterViewInit() {
    this.selectedTimeSub.add(this.selectedTime?.subscribe((val) => {
      if (Array.isArray(val) && val.length >= 2) {
        this.startTimepicker?.writeValue(val[0]);
        this.endTimepicker?.writeValue(val[1]);
      }
    }));
    this.startTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 0);
    });
    this.endTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 1);
    });
  }
  get isTopPosition() {
    return this._element.nativeElement.classList.contains("top");
  }
  positionServiceEnable() {
    this._positionService.enable();
  }
  timeSelectHandler(date, index) {
    this._store.dispatch(this._actions.selectTime(date, index));
  }
  daySelectHandler(day) {
    if (!day) {
      return;
    }
    const isDisabled = this.isOtherMonthsActive ? day.isDisabled : day.isOtherMonth || day.isDisabled;
    if (isDisabled) {
      return;
    }
    this.rangesProcessing(day);
  }
  monthSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    day.isSelected = true;
    if (this._config.minMode !== "month") {
      if (day.isDisabled) {
        return;
      }
      this._store.dispatch(this._actions.navigateTo({
        unit: {
          month: getMonth(day.date),
          year: getFullYear(day.date)
        },
        viewMode: "day"
      }));
      return;
    }
    this.rangesProcessing(day);
  }
  yearSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    day.isSelected = true;
    if (this._config.minMode !== "year") {
      if (day.isDisabled) {
        return;
      }
      this._store.dispatch(this._actions.navigateTo({
        unit: {
          year: getFullYear(day.date)
        },
        viewMode: "month"
      }));
      return;
    }
    this.rangesProcessing(day);
  }
  rangesProcessing(day) {
    if (this._rangeStack.length === 1) {
      this._rangeStack = day.date >= this._rangeStack[0] ? [this._rangeStack[0], day.date] : [day.date];
    }
    if (this._config.maxDateRange) {
      this.setMaxDateRangeOnCalendar(day.date);
    }
    if (this._rangeStack.length === 0) {
      this._rangeStack = [day.date];
      if (this._config.maxDateRange) {
        this.setMaxDateRangeOnCalendar(day.date);
      }
    }
    this._store.dispatch(this._actions.selectRange(this._rangeStack));
    if (this._rangeStack.length === 2) {
      this._rangeStack = [];
    }
  }
  _animateExpand(el, onDone) {
    this._cancelExpandAnimation?.();
    this._cancelExpandAnimation = animateExpand(this._renderer, el, {
      timing: DATEPICKER_ANIMATION_TIMING,
      durationMs: DATEPICKER_ANIMATION_DURATION_MS,
      useRaf: true,
      manageDisplay: true,
      onDone
    });
  }
  ngOnDestroy() {
    this._cancelExpandAnimation?.();
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    this.selectedTimeSub.unsubscribe();
    this._effects?.destroy();
  }
  setRangeOnCalendar(dates) {
    if (dates) {
      this._rangeStack = dates.value instanceof Date ? [dates.value] : dates.value;
    }
    this._store.dispatch(this._actions.selectRange(this._rangeStack));
  }
  setMaxDateRangeOnCalendar(currentSelection) {
    let maxDateRange = new Date(currentSelection);
    if (this._config.maxDate) {
      const maxDateValueInMilliseconds = this._config.maxDate.getTime();
      const maxDateRangeInMilliseconds = currentSelection.getTime() + (this._config.maxDateRange || 0) * dayInMilliseconds;
      maxDateRange = maxDateRangeInMilliseconds > maxDateValueInMilliseconds ? new Date(this._config.maxDate) : new Date(maxDateRangeInMilliseconds);
    } else {
      maxDateRange.setDate(currentSelection.getDate() + (this._config.maxDateRange || 0));
    }
    this._effects?.setMaxDate(maxDateRange);
  }
  static {
    this.ɵfac = function BsDaterangepickerContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerContainerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(BsDatepickerStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BsDatepickerActions), ɵɵdirectiveInject(BsDatepickerEffects), ɵɵdirectiveInject(PositioningService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsDaterangepickerContainerComponent,
      selectors: [["bs-daterangepicker-container"]],
      viewQuery: function BsDaterangepickerContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5)(_c4, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTimepicker = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.endTimepicker = _t.first);
        }
      },
      hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
      hostVars: 2,
      hostBindings: function BsDaterangepickerContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function BsDaterangepickerContainerComponent_click_HostBindingHandler($event) {
            return ctx._stopPropagation($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.isDatepickerDisabled)("readonly", ctx.isDatepickerReadonly);
        }
      },
      features: [ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions]), ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["startTP", ""], ["endTP", ""], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container"], [1, "bs-media-container"], [1, "bs-datepicker-buttons"], [1, "bs-datepicker-custom-range"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options"], [1, "bs-timepicker-in-datepicker-container"], [3, "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", "calendar", "isDisabled", "options"], [3, "disabled"], [3, "bs-datepicker-multiple", "calendar"], [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], [1, "btn-today-wrapper", 3, "today-left", "today-right", "today-center"], [1, "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"]],
      template: function BsDaterangepickerContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, BsDaterangepickerContainerComponent_Conditional_0_Template, 10, 7, "div", 2);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵconditional(ɵɵpipeBind1(1, 1, ctx.viewMode) ? 0 : -1);
        }
      },
      dependencies: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-daterangepicker-container",
      providers: [BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions],
      host: {
        class: "bottom",
        "(click)": "_stopPropagation($event)",
        role: "dialog",
        "aria-label": "calendar"
      },
      standalone: true,
      imports: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      template: `<!-- days calendar view mode -->
@if (viewMode | async) {
  <div class="bs-datepicker" [ngClass]="containerClass">
    <div class="bs-datepicker-container">
      <!--calendars-->
      <div class="bs-calendar-container" role="application">
        @switch (viewMode | async) {
          <!--days calendar-->
          @case ('day') {
            <div class="bs-media-container">
              @for (calendar of daysCalendar$ | async; track calendar) {
                <bs-days-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  [isDisabled]="isDatePickerDisabled"
                  [options]="options$ | async"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="dayHoverHandler($event)"
                  (onHoverWeek)="weekHoverHandler($event)"
                  (onSelect)="daySelectHandler($event)">
                </bs-days-calendar-view>
              }
            </div>
            @if (withTimepicker) {
              <div class="bs-timepicker-in-datepicker-container">
                <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
                @if (isRangePicker) {
                  <timepicker #endTP [disabled]="isDatePickerDisabled"></timepicker>
                }
              </div>
            }
          }
          <!--months calendar-->
          @case ('month') {
            <div class="bs-media-container">
              @for (calendar of monthsCalendar | async; track calendar) {
                <bs-month-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="monthHoverHandler($event)"
                  (onSelect)="monthSelectHandler($event)">
                </bs-month-calendar-view>
              }
            </div>
          }
          <!--years calendar-->
          @case ('year') {
            <div class="bs-media-container">
              @for (calendar of yearsCalendar | async; track calendar) {
                <bs-years-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="yearHoverHandler($event)"
                  (onSelect)="yearSelectHandler($event)">
                </bs-years-calendar-view>
              }
            </div>
          }
        }
      </div>
      <!--applycancel buttons-->
      @if (false) {
        <div class="bs-datepicker-buttons">
          <button class="btn btn-success" type="button">Apply</button>
          <button class="btn btn-default" type="button">Cancel</button>
        </div>
      }
      @if (showTodayBtn || showClearBtn) {
        <div class="bs-datepicker-buttons">
          @if (showTodayBtn) {
            <div class="btn-today-wrapper"
              [class.today-left]="todayPos === 'left'"
              [class.today-right]="todayPos === 'right'"
              [class.today-center]="todayPos === 'center'"
              >
              <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
            </div>
          }
          @if (showClearBtn) {
            <div class="btn-clear-wrapper"
              [class.clear-left]="clearPos === 'left'"
              [class.clear-right]="clearPos === 'right'"
              [class.clear-center]="clearPos === 'center'"
              >
              <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
            </div>
          }
        </div>
      }
    </div>
    <!--custom dates or date ranges picker-->
    @if (customRanges && customRanges.length > 0) {
      <div class="bs-datepicker-custom-range">
        <bs-custom-date-view
          [selectedRange]="chosenRange"
          [ranges]="customRanges"
          [customRangeLabel]="customRangeBtnLbl"
          (onSelect)="setRangeOnCalendar($event)">
        </bs-custom-date-view>
      </div>
    }
  </div>
}
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    startTimepicker: [{
      type: ViewChild,
      args: ["startTP"]
    }],
    endTimepicker: [{
      type: ViewChild,
      args: ["endTP"]
    }],
    isDatepickerDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BsDaterangepickerInlineContainerComponent = class _BsDaterangepickerInlineContainerComponent extends BsDaterangepickerContainerComponent {
  get disabledValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get readonlyValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
    super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
    _renderer.setStyle(_element.nativeElement, "display", "inline-block");
    _renderer.setStyle(_element.nativeElement, "position", "static");
  }
  static {
    this.ɵfac = function BsDaterangepickerInlineContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerInlineContainerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(BsDatepickerStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BsDatepickerActions), ɵɵdirectiveInject(BsDatepickerEffects), ɵɵdirectiveInject(PositioningService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BsDaterangepickerInlineContainerComponent,
      selectors: [["bs-daterangepicker-inline-container"]],
      hostVars: 2,
      hostBindings: function BsDaterangepickerInlineContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_click_HostBindingHandler($event) {
            return ctx._stopPropagation($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabledValue)("readonly", ctx.readonlyValue);
        }
      },
      features: [ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions]), ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["startTP", ""], ["endTP", ""], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container"], [1, "bs-media-container"], [1, "bs-datepicker-buttons"], [1, "bs-datepicker-custom-range"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options"], [1, "bs-timepicker-in-datepicker-container"], [3, "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", "calendar", "isDisabled", "options"], [3, "disabled"], [3, "bs-datepicker-multiple", "calendar"], [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], [1, "btn-today-wrapper", 3, "today-left", "today-right", "today-center"], [1, "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"]],
      template: function BsDaterangepickerInlineContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, BsDaterangepickerInlineContainerComponent_Conditional_0_Template, 10, 7, "div", 2);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵconditional(ɵɵpipeBind1(1, 1, ctx.viewMode) ? 0 : -1);
        }
      },
      dependencies: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-daterangepicker-inline-container",
      providers: [BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions],
      host: {
        "(click)": "_stopPropagation($event)"
      },
      standalone: true,
      imports: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      template: `<!-- days calendar view mode -->
@if (viewMode | async) {
  <div class="bs-datepicker" [ngClass]="containerClass">
    <div class="bs-datepicker-container">
      <!--calendars-->
      <div class="bs-calendar-container" role="application">
        @switch (viewMode | async) {
          <!--days calendar-->
          @case ('day') {
            <div class="bs-media-container">
              @for (calendar of daysCalendar$ | async; track calendar) {
                <bs-days-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  [isDisabled]="isDatePickerDisabled"
                  [options]="options$ | async"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="dayHoverHandler($event)"
                  (onHoverWeek)="weekHoverHandler($event)"
                  (onSelect)="daySelectHandler($event)">
                </bs-days-calendar-view>
              }
            </div>
            @if (withTimepicker) {
              <div class="bs-timepicker-in-datepicker-container">
                <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
                @if (isRangePicker) {
                  <timepicker #endTP [disabled]="isDatePickerDisabled"></timepicker>
                }
              </div>
            }
          }
          <!--months calendar-->
          @case ('month') {
            <div class="bs-media-container">
              @for (calendar of monthsCalendar | async; track calendar) {
                <bs-month-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="monthHoverHandler($event)"
                  (onSelect)="monthSelectHandler($event)">
                </bs-month-calendar-view>
              }
            </div>
          }
          <!--years calendar-->
          @case ('year') {
            <div class="bs-media-container">
              @for (calendar of yearsCalendar | async; track calendar) {
                <bs-years-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="yearHoverHandler($event)"
                  (onSelect)="yearSelectHandler($event)">
                </bs-years-calendar-view>
              }
            </div>
          }
        }
      </div>
      <!--applycancel buttons-->
      @if (false) {
        <div class="bs-datepicker-buttons">
          <button class="btn btn-success" type="button">Apply</button>
          <button class="btn btn-default" type="button">Cancel</button>
        </div>
      }
      @if (showTodayBtn || showClearBtn) {
        <div class="bs-datepicker-buttons">
          @if (showTodayBtn) {
            <div class="btn-today-wrapper"
              [class.today-left]="todayPos === 'left'"
              [class.today-right]="todayPos === 'right'"
              [class.today-center]="todayPos === 'center'"
              >
              <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
            </div>
          }
          @if (showClearBtn) {
            <div class="btn-clear-wrapper"
              [class.clear-left]="clearPos === 'left'"
              [class.clear-right]="clearPos === 'right'"
              [class.clear-center]="clearPos === 'center'"
              >
              <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
            </div>
          }
        </div>
      }
    </div>
    <!--custom dates or date ranges picker-->
    @if (customRanges && customRanges.length > 0) {
      <div class="bs-datepicker-custom-range">
        <bs-custom-date-view
          [selectedRange]="chosenRange"
          [ranges]="customRanges"
          [customRangeLabel]="customRangeBtnLbl"
          (onSelect)="setRangeOnCalendar($event)">
        </bs-custom-date-view>
      </div>
    }
  </div>
}
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    disabledValue: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BsDaterangepickerInlineDirective = class _BsDaterangepickerInlineDirective {
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setDateRangesCurrentTimeOnDateSelect(value);
    }
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
  }
  ngOnInit() {
    this.setConfig();
    this.initSubscribes();
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue.initCurrentTime && changes["bsConfig"].currentValue.initCurrentTime !== changes["bsConfig"].previousValue.initCurrentTime && this._bsValue) {
        this._bsValue = setDateRangesCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
      this._datepickerRef.instance.value = this._bsValue;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    this.setConfig();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    if (this._datepicker) {
      this._datepicker.hide();
    }
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
      initCurrentTime: this.bsConfig?.initCurrentTime
    });
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDaterangepickerInlineContainerComponent).to(this._elementRef).show();
    this.initSubscribes();
  }
  initSubscribes() {
    this.unsubscribeSubscriptions();
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.pipe(filter((range) => range && range[0] && !!range[1])).subscribe((value) => {
        this.bsValue = value;
      }));
    }
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.unsubscribeSubscriptions();
  }
  static {
    this.ɵfac = function BsDaterangepickerInlineDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerInlineDirective)(ɵɵdirectiveInject(BsDaterangepickerInlineConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BsDaterangepickerInlineDirective,
      selectors: [["bs-daterangepicker-inline"]],
      inputs: {
        bsValue: "bsValue",
        bsConfig: "bsConfig",
        isDisabled: "isDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        dateCustomClasses: "dateCustomClasses",
        daysDisabled: "daysDisabled",
        datesDisabled: "datesDisabled",
        datesEnabled: "datesEnabled"
      },
      outputs: {
        bsValueChange: "bsValueChange"
      },
      exportAs: ["bsDaterangepickerInline"],
      features: [ɵɵProvidersFeature([ComponentLoaderFactory, PositioningService]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineDirective, [{
    type: Directive,
    args: [{
      selector: "bs-daterangepicker-inline",
      exportAs: "bsDaterangepickerInline",
      standalone: true,
      providers: [ComponentLoaderFactory, PositioningService]
    }]
  }], () => [{
    type: BsDaterangepickerInlineConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }]
  });
})();
var BS_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsDatepickerInputDirective),
  multi: true
};
var BS_DATEPICKER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsDatepickerInputDirective),
  multi: true
};
var BsDatepickerInputDirective = class _BsDatepickerInputDirective {
  constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
    this._picker = _picker;
    this._localeService = _localeService;
    this._renderer = _renderer;
    this._elRef = _elRef;
    this.changeDetection = changeDetection;
    this._onChange = Function.prototype;
    this._onTouched = Function.prototype;
    this._validatorChange = Function.prototype;
    this._subs = new Subscription();
  }
  onChange(event) {
    this.writeValue(event.target.value);
    this._onChange(this._value);
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
    this._onTouched();
  }
  onBlur() {
    this._onTouched();
  }
  hide() {
    this._picker.hide();
    this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
  }
  ngOnInit() {
    const setBsValue = (value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    };
    if (this._picker._bsValue) {
      setBsValue(this._picker._bsValue);
    }
    this._subs.add(this._picker.bsValueChange.subscribe(setBsValue));
    this._subs.add(this._localeService.localeChange.subscribe(() => {
      this._setInputValue(this._value);
    }));
    this._subs.add(this._picker.dateInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
      this._setInputValue(this._value);
    }));
  }
  ngOnDestroy() {
    this._subs.unsubscribe();
  }
  _setInputValue(value) {
    const initialDate = !value ? "" : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
    this._renderer.setProperty(this._elRef.nativeElement, "value", initialDate);
  }
  validate(c) {
    const _value = c.value;
    if (_value === null || _value === void 0 || _value === "") {
      return null;
    }
    if (isDate(_value)) {
      const _isDateValid = isDateValid(_value);
      if (!_isDateValid) {
        return {
          bsDate: {
            invalid: _value
          }
        };
      }
      if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, "date")) {
        this.writeValue(this._picker.minDate);
        return this._picker.ignoreMinMaxErrors ? null : {
          bsDate: {
            minDate: this._picker.minDate
          }
        };
      }
      if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, "date")) {
        this.writeValue(this._picker.maxDate);
        return this._picker.ignoreMinMaxErrors ? null : {
          bsDate: {
            maxDate: this._picker.maxDate
          }
        };
      }
    }
    return null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }
  writeValue(value) {
    if (!value) {
      this._value = void 0;
    } else {
      const _localeKey = this._localeService.currentLocale;
      const _locale = getLocale(_localeKey);
      if (!_locale) {
        throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
      }
      this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
      if (this._picker._config.useUtc) {
        const utcValue = utcAsLocal(this._value);
        this._value = utcValue === null ? void 0 : utcValue;
      }
    }
    this._picker.bsValue = this._value;
  }
  setDisabledState(isDisabled) {
    this._picker.isDisabled = isDisabled;
    if (isDisabled) {
      this._renderer.setAttribute(this._elRef.nativeElement, "disabled", "disabled");
      return;
    }
    this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  static {
    this.ɵfac = function BsDatepickerInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerInputDirective)(ɵɵdirectiveInject(BsDatepickerDirective, 1), ɵɵdirectiveInject(BsLocaleService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BsDatepickerInputDirective,
      selectors: [["input", "bsDatepicker", ""]],
      hostBindings: function BsDatepickerInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function BsDatepickerInputDirective_change_HostBindingHandler($event) {
            return ctx.onChange($event);
          })("blur", function BsDatepickerInputDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          })("keyup.esc", function BsDatepickerInputDirective_keyup_esc_HostBindingHandler() {
            return ctx.hide();
          })("keydown.enter", function BsDatepickerInputDirective_keydown_enter_HostBindingHandler() {
            return ctx.hide();
          });
        }
      },
      features: [ɵɵProvidersFeature([BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInputDirective, [{
    type: Directive,
    args: [{
      selector: `input[bsDatepicker]`,
      providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR],
      standalone: true
    }]
  }], () => [{
    type: BsDatepickerDirective,
    decorators: [{
      type: Host
    }]
  }, {
    type: BsLocaleService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    onChange: [{
      type: HostListener,
      args: ["change", ["$event"]]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    hide: [{
      type: HostListener,
      args: ["keyup.esc"]
    }, {
      type: HostListener,
      args: ["keydown.enter"]
    }]
  });
})();
var BsDaterangepickerConfig = class _BsDaterangepickerConfig extends BsDatepickerConfig {
  constructor() {
    super(...arguments);
    this.displayMonths = 2;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBsDaterangepickerConfig_BaseFactory;
      return function BsDaterangepickerConfig_Factory(__ngFactoryType__) {
        return (ɵBsDaterangepickerConfig_BaseFactory || (ɵBsDaterangepickerConfig_BaseFactory = ɵɵgetInheritedFactory(_BsDaterangepickerConfig)))(__ngFactoryType__ || _BsDaterangepickerConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BsDaterangepickerConfig,
      factory: _BsDaterangepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var previousDate;
var BsDaterangepickerDirective = class _BsDaterangepickerDirective {
  /**
   * Returns whether or not the daterangepicker is currently being shown
   */
  get isOpen() {
    return this._datepicker.isShown;
  }
  set isOpen(value) {
    this.isOpen$.next(value);
  }
  /**
   * Initial value of daterangepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setDateRangesCurrentTimeOnDateSelect(value);
    }
    this.initPreviousValue();
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  get isDatepickerReadonly() {
    return this.isDisabled ? "" : null;
  }
  get rangeInputFormat$() {
    return this._rangeInputFormat$;
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.placement = "bottom";
    this.triggers = "click";
    this.outsideClick = true;
    this.container = "body";
    this.outsideEsc = true;
    this.isDestroy$ = new Subject();
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    this._rangeInputFormat$ = new Subject();
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    Object.assign(this, _config);
    this.onShown = this._datepicker.onShown;
    this.onHidden = this._datepicker.onHidden;
    this.isOpen$ = new BehaviorSubject(this.isOpen);
  }
  ngOnInit() {
    this.isDestroy$ = new Subject();
    this._datepicker.listen({
      outsideClick: this.outsideClick,
      outsideEsc: this.outsideEsc,
      triggers: this.triggers,
      show: () => this.show()
    });
    this.initPreviousValue();
    this.setConfig();
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this.initPreviousValue();
        this._bsValue = setDateRangesCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
      this.setConfig();
      this._rangeInputFormat$.next(changes["bsConfig"].currentValue && changes["bsConfig"].currentValue.rangeInputFormat);
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
  }
  ngAfterViewInit() {
    this.isOpen$.pipe(filter((isOpen) => isOpen !== this.isOpen), takeUntil(this.isDestroy$)).subscribe(() => this.toggle());
  }
  /**
   * Opens an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  show() {
    if (this._datepicker.isShown) {
      return;
    }
    this.setConfig();
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDaterangepickerContainerComponent).to(this.container).position({
      attachment: this.placement
    }).show({
      placement: this.placement
    });
    this.initSubscribes();
  }
  initSubscribes() {
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.pipe(filter((range) => range && range[0] && !!range[1])).subscribe((value) => {
        this.initPreviousValue();
        this.bsValue = value;
        if (this.keepDatepickerModalOpened()) {
          return;
        }
        this.hide();
      }));
    }
  }
  initPreviousValue() {
    previousDate = this._bsValue;
  }
  keepDatepickerModalOpened() {
    if (!previousDate || !this.bsConfig?.keepDatepickerOpened || !this._config.withTimepicker) {
      return false;
    }
    return this.isDateSame();
  }
  isDateSame() {
    return this._bsValue?.[0]?.getDate() === previousDate?.[0]?.getDate() && this._bsValue?.[0]?.getMonth() === previousDate?.[0]?.getMonth() && this._bsValue?.[0]?.getFullYear() === previousDate?.[0]?.getFullYear() && this._bsValue?.[1]?.getDate() === previousDate?.[1]?.getDate() && this._bsValue?.[1]?.getMonth() === previousDate?.[1]?.getMonth() && this._bsValue?.[1]?.getFullYear() === previousDate?.[1]?.getFullYear();
  }
  /**
   * Set config for daterangepicker
   */
  setConfig() {
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: this.bsConfig?.keepDatesOutOfRules ? this._bsValue : checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
      initCurrentTime: this.bsConfig?.initCurrentTime,
      keepDatepickerOpened: this.bsConfig?.keepDatepickerOpened,
      keepDatesOutOfRules: this.bsConfig?.keepDatesOutOfRules
    });
  }
  /**
   * Closes an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  hide() {
    if (this.isOpen) {
      this._datepicker.hide();
    }
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    if (this._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
    }
  }
  /**
   * Toggles an element’s datepicker. This is considered a “manual” triggering
   * of the datepicker.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.isOpen$.next(false);
    if (this.isDestroy$) {
      this.isDestroy$.next(null);
      this.isDestroy$.complete();
    }
    this.unsubscribeSubscriptions();
  }
  static {
    this.ɵfac = function BsDaterangepickerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerDirective)(ɵɵdirectiveInject(BsDaterangepickerConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BsDaterangepickerDirective,
      selectors: [["", "bsDaterangepicker", ""]],
      hostVars: 1,
      hostBindings: function BsDaterangepickerDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("readonly", ctx.isDatepickerReadonly);
        }
      },
      inputs: {
        placement: "placement",
        triggers: "triggers",
        outsideClick: "outsideClick",
        container: "container",
        outsideEsc: "outsideEsc",
        isOpen: "isOpen",
        bsValue: "bsValue",
        bsConfig: "bsConfig",
        isDisabled: "isDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        dateCustomClasses: "dateCustomClasses",
        daysDisabled: "daysDisabled",
        datesDisabled: "datesDisabled",
        datesEnabled: "datesEnabled"
      },
      outputs: {
        onShown: "onShown",
        onHidden: "onHidden",
        bsValueChange: "bsValueChange"
      },
      exportAs: ["bsDaterangepicker"],
      features: [ɵɵProvidersFeature([ComponentLoaderFactory, PositioningService]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDaterangepicker]",
      exportAs: "bsDaterangepicker",
      standalone: true,
      providers: [ComponentLoaderFactory, PositioningService]
    }]
  }], () => [{
    type: BsDaterangepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    outsideClick: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    outsideEsc: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsDaterangepickerInputDirective),
  multi: true
};
var BS_DATERANGEPICKER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsDaterangepickerInputDirective),
  multi: true
};
var BsDaterangepickerInputDirective = class _BsDaterangepickerInputDirective {
  constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
    this._picker = _picker;
    this._localeService = _localeService;
    this._renderer = _renderer;
    this._elRef = _elRef;
    this.changeDetection = changeDetection;
    this._onChange = Function.prototype;
    this._onTouched = Function.prototype;
    this._validatorChange = Function.prototype;
    this._subs = new Subscription();
  }
  ngOnInit() {
    const setBsValue = (value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    };
    if (this._picker._bsValue) {
      setBsValue(this._picker._bsValue);
    }
    this._subs.add(this._picker.bsValueChange.subscribe((value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    }));
    this._subs.add(this._localeService.localeChange.subscribe(() => {
      this._setInputValue(this._value);
    }));
    this._subs.add(
      // update input value on format change
      this._picker.rangeInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
        this._setInputValue(this._value);
      })
    );
  }
  ngOnDestroy() {
    this._subs.unsubscribe();
  }
  onKeydownEvent(event) {
    if (event.keyCode === 13 || event.code === "Enter") {
      this.hide();
    }
  }
  _setInputValue(date) {
    let range = "";
    if (date) {
      const start = !date[0] ? "" : formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      const end = !date[1] ? "" : formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      range = start && end ? start + this._picker._config.rangeSeparator + end : "";
    }
    this._renderer.setProperty(this._elRef.nativeElement, "value", range);
  }
  onChange(event) {
    this.writeValue(event.target.value);
    this._onChange(this._value);
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
    this._onTouched();
  }
  validate(c) {
    let _value = c.value;
    const errors = [];
    if (_value === null || _value === void 0 || !isArray(_value)) {
      return null;
    }
    _value = _value.slice().sort((a, b) => a.getTime() - b.getTime());
    const _isFirstDateValid = isDateValid(_value[0]);
    const _isSecondDateValid = isDateValid(_value[1]);
    if (!_isFirstDateValid) {
      return {
        bsDate: {
          invalid: _value[0]
        }
      };
    }
    if (!_isSecondDateValid) {
      return {
        bsDate: {
          invalid: _value[1]
        }
      };
    }
    if (this._picker && this._picker.minDate && isBefore(_value[0], this._picker.minDate, "date")) {
      _value[0] = this._picker.minDate;
      errors.push({
        bsDate: {
          minDate: this._picker.minDate
        }
      });
    }
    if (this._picker && this._picker.maxDate && isAfter(_value[1], this._picker.maxDate, "date")) {
      _value[1] = this._picker.maxDate;
      errors.push({
        bsDate: {
          maxDate: this._picker.maxDate
        }
      });
    }
    if (errors.length > 0) {
      this.writeValue(_value);
      return errors;
    }
    return null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }
  writeValue(value) {
    if (!value) {
      this._value = void 0;
    } else {
      const _localeKey = this._localeService.currentLocale;
      const _locale = getLocale(_localeKey);
      if (!_locale) {
        throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
      }
      let _input = [];
      if (typeof value === "string") {
        const trimmedSeparator = this._picker._config.rangeSeparator.trim();
        if (value.replace(/[^-]/g, "").length > 1) {
          _input = value.split(this._picker._config.rangeSeparator);
        } else {
          _input = value.split(trimmedSeparator.length > 0 ? trimmedSeparator : this._picker._config.rangeSeparator).map((_val) => _val.trim());
        }
      }
      if (Array.isArray(value)) {
        _input = value;
      }
      this._value = _input.map((_val) => {
        if (this._picker._config.useUtc) {
          return utcAsLocal(parseDate(_val, this._picker._config.rangeInputFormat, this._localeService.currentLocale));
        }
        return parseDate(_val, this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      }).map((date) => isNaN(date.valueOf()) ? void 0 : date);
    }
    this._picker.bsValue = this._value;
  }
  setDisabledState(isDisabled) {
    this._picker.isDisabled = isDisabled;
    if (isDisabled) {
      this._renderer.setAttribute(this._elRef.nativeElement, "disabled", "disabled");
      return;
    }
    this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  onBlur() {
    this._onTouched();
  }
  hide() {
    this._picker.hide();
    this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
  }
  static {
    this.ɵfac = function BsDaterangepickerInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerInputDirective)(ɵɵdirectiveInject(BsDaterangepickerDirective, 1), ɵɵdirectiveInject(BsLocaleService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BsDaterangepickerInputDirective,
      selectors: [["input", "bsDaterangepicker", ""]],
      hostBindings: function BsDaterangepickerInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function BsDaterangepickerInputDirective_change_HostBindingHandler($event) {
            return ctx.onChange($event);
          })("keyup.esc", function BsDaterangepickerInputDirective_keyup_esc_HostBindingHandler() {
            return ctx.hide();
          })("keydown", function BsDaterangepickerInputDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeydownEvent($event);
          })("blur", function BsDaterangepickerInputDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
      },
      features: [ɵɵProvidersFeature([BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInputDirective, [{
    type: Directive,
    args: [{
      selector: `input[bsDaterangepicker]`,
      host: {
        "(change)": "onChange($event)",
        "(keyup.esc)": "hide()",
        "(keydown)": "onKeydownEvent($event)",
        "(blur)": "onBlur()"
      },
      providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR],
      standalone: true
    }]
  }], () => [{
    type: BsDaterangepickerDirective,
    decorators: [{
      type: Host
    }]
  }, {
    type: BsLocaleService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var BsDatepickerModule = class _BsDatepickerModule {
  static {
    this.ɵfac = function BsDatepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BsDatepickerModule,
      imports: [CommonModule, TooltipModule, TimepickerModule, BsCalendarLayoutComponent, BsCurrentDateViewComponent, BsCustomDatesViewComponent, BsDatepickerDayDecoratorComponent, BsDatepickerNavigationViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsTimepickerViewComponent, BsYearsCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective],
      exports: [BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TooltipModule, TimepickerModule, BsDaysCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerInlineContainerComponent, BsDaterangepickerContainerComponent, BsDaterangepickerInlineContainerComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TooltipModule, TimepickerModule, BsCalendarLayoutComponent, BsCurrentDateViewComponent, BsCustomDatesViewComponent, BsDatepickerDayDecoratorComponent, BsDatepickerNavigationViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsTimepickerViewComponent, BsYearsCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective],
      exports: [BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective]
    }]
  }], null, null);
})();
export {
  BsDatepickerConfig,
  BsDatepickerContainerComponent,
  BsDatepickerDirective,
  BsDatepickerInlineConfig,
  BsDatepickerInlineContainerComponent,
  BsDatepickerInlineDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule,
  BsDaterangepickerConfig,
  BsDaterangepickerContainerComponent,
  BsDaterangepickerDirective,
  BsDaterangepickerInlineConfig,
  BsDaterangepickerInlineContainerComponent,
  BsDaterangepickerInlineDirective,
  BsDaterangepickerInputDirective,
  BsLocaleService
};
//# sourceMappingURL=ngx-bootstrap_datepicker.js.map

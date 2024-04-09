import{s as G,x as h,i as V,r as U,e as Y}from"./query-assigned-elements-9f88bee1.js";import{a as W}from"./utils-529e1a6d.js";import{M as H,a as J,b as $,c as K,d as Q,e as d,f as X}from"./announce-59c3507b.js";import{n as r}from"./property-f36ea729.js";import{i as q}from"./query-3e91a3b8.js";import{o as Z}from"./class-map-018c3a6a.js";import"./tslib.es6-6921e62d.js";import"./keyboard-6abd561a.js";import"./foundation-402d6c96.js";import"./component-6f8ff72c.js";import"./_commonjsHelpers-de833af9.js";var ii=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,l=(a,i,t,o)=>{for(var e=o>1?void 0:o?ti(i,t):i,c=a.length-1,n;c>=0;c--)(n=a[c])&&(e=(o?n(i,t,e):n(e))||e);return o&&e&&ii(i,t,e),e};let oi=0;class p extends G{constructor(){super(),this.mdcFoundationClass=H,this.label="",this.icon="",this.trailingIcon=!1,this.avatar=!1,this.disabled=!1,this.filter=!1,this.chipId=oi++}render(){const i={"mdc-evolution-chip":!0,"mdc-evolution-chip--disabled":this.disabled,"mdc-evolution-chip--with-trailing-action":this.trailingIcon,"mdc-evolution-chip--with-primary-graphic":!this.trailingIcon&&this.icon,"mdc-evolution-chip--with-primary-icon":this.icon&&!this.filter,"mdc-evolution-chip--filter":this.filter,"mdc-evolution-chip--selectable":this.filter,"mdc-evolution-chip--with-avatar":this.avatar,secondary:this.state==="secondary",positive:this.state==="positive",negative:this.state==="negative",caution:this.state==="caution"};return h`
      <span
        class="${Z(i)}"
        role="${this.filter?"presentation":"row"}"
        id="cv-chip-${this.chipId}"
      >
        <span
          class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
          role="${this.filter?"presentation":"gridcell"}"
        >
          <button
            class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
            role="${this.filter?"option":""}"
            type="button"
            tabindex="-1"
          >
            <span
              class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
            ></span>
            ${!this.trailingIcon&&this.icon||this.filter?this.renderGraphic():""}
            <span class="mdc-evolution-chip__text-label">${this.label}</span>
          </button>
        </span>
        ${this.trailingIcon?this.renderTrailing():""}
      </span>
    `}async firstUpdated(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.actions=new Map;const i=this.mdcRoot.querySelectorAll(".mdc-evolution-chip__action");for(let t=0;t<i.length;t++){const o=new J(i[t]);this.actions.set(o.actionType(),o),i[t].addEventListener($.INTERACTION,e=>{var c;(c=this.mdcFoundation)==null||c.handleActionInteraction(e)}),i[t].addEventListener($.NAVIGATION,e=>{var c;(c=this.mdcFoundation)==null||c.handleActionNavigation(e)})}}renderGraphic(){const i=this.filter?this.renderCheckMark():this.renderIcon();return h`<span class="mdc-evolution-chip__graphic">
      ${i}
    </span>`}renderCheckMark(){return h` <span class="mdc-evolution-chip__checkmark">
      <svg class="mdc-evolution-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path
          class="mdc-evolution-chip__checkmark-path"
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
    </span>`}renderIcon(i=!1){return h` <span
      class="mdc-evolution-chip__icon mdc-evolution-chip__icon--${i?"trailing":"primary"}"
    >
      ${this.icon}
    </span>`}renderTrailing(){return h` <span
      class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"
      role="gridcell"
    >
      <button
        class="mdc-evolution-chip__action mdc-evolution-chip__action--trailing"
        type="button"
        tabindex="-1"
        data-mdc-deletable="true"
        aria-label="Remove ${this.label}"
      >
        <span
          class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"
        ></span>
        ${this.renderIcon(!0)}
      </button>
    </span>`}createAdapter(){return{...W(this.mdcRoot),emitEvent:(i,t)=>this.dispatchEvent(new CustomEvent(i,{bubbles:!0,detail:t})),getActions:()=>{const i=[];for(const[t]of this.actions)i.push(t);return i},getAttribute:i=>this.mdcRoot.getAttribute(i),getElementID:()=>this.mdcRoot.getAttribute("id")??"",getOffsetWidth:()=>this.mdcRoot.offsetWidth,hasClass:i=>this.mdcRoot.classList.contains(i),isActionSelectable:i=>{var t;return((t=this.actions.get(i))==null?void 0:t.isSelectable())??!0},isActionSelected:i=>{var t;return((t=this.actions.get(i))==null?void 0:t.isSelected())??!1},isActionFocusable:i=>{var t;return((t=this.actions.get(i))==null?void 0:t.isFocusable())??!0},isActionDisabled:i=>{var t;return((t=this.actions.get(i))==null?void 0:t.isDisabled())??!1},isRTL:()=>window.getComputedStyle(this.mdcRoot).getPropertyValue("direction")==="rtl",setActionDisabled:(i,t)=>{var o;return(o=this.actions.get(i))==null?void 0:o.setDisabled(t)},setActionFocus:(i,t)=>{var o;return(o=this.actions.get(i))==null?void 0:o.setFocus(t)},setActionSelected:(i,t)=>{var o;return(o=this.actions.get(i))==null?void 0:o.setSelected(t)},setStyleProperty:(i,t)=>this.mdcRoot.style.setProperty(i,t)}}getActions(){var i;return((i=this.mdcFoundation)==null?void 0:i.getActions())??[]}getElementID(){var i;return((i=this.mdcFoundation)==null?void 0:i.getElementID())??""}isActionFocusable(i){var t;return((t=this.mdcFoundation)==null?void 0:t.isActionFocusable(i))??!1}isActionSelectable(i){var t;return((t=this.mdcFoundation)==null?void 0:t.isActionSelectable(i))??!1}isActionSelected(i){var t;return((t=this.mdcFoundation)==null?void 0:t.isActionSelected(i))??!1}setActionFocus(i,t){var o;return(o=this.mdcFoundation)==null?void 0:o.setActionFocus(i,t)}setActionSelected(i,t){var o;return(o=this.mdcFoundation)==null?void 0:o.setActionSelected(i,t)}startAnimation(i){var t;return(t=this.mdcFoundation)==null?void 0:t.startAnimation(i)}}l([q(".mdc-evolution-chip")],p.prototype,"mdcRoot",2);l([r()],p.prototype,"label",2);l([r({type:String})],p.prototype,"icon",2);l([r({type:Boolean,reflect:!0})],p.prototype,"trailingIcon",2);l([r({type:Boolean,reflect:!0})],p.prototype,"avatar",2);l([r({type:Boolean,reflect:!0})],p.prototype,"disabled",2);l([r({type:Boolean,reflect:!0})],p.prototype,"filter",2);l([r()],p.prototype,"state",2);const ei=`.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{overflow-x:hidden}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mdc-evolution-chip__action--primary:before{box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1}.mdc-evolution-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-evolution-chip__action-touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-evolution-chip__text-label{white-space:nowrap;-webkit-user-select:none;user-select:none;text-overflow:ellipsis;overflow:hidden}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mdc-evolution-chip__checkmark-background{opacity:0}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width .15s 0ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform .15s 0ms cubic-bezier(.4,0,.2,1);transform:translate(-75%,-50%)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset .15s 45ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__graphic{transition:width .1s 0ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__checkmark{transition:opacity 50ms 0ms linear,transform .1s 0ms cubic-bezier(.4,0,.2,1);transform:translate(-75%,-50%)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.mdc-evolution-chip--selecting-with-primary-icon .mdc-evolution-chip__icon--primary{transition:opacity 75ms 0ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--selecting-with-primary-icon .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset .15s 75ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__icon--primary{transition:opacity .15s 75ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__checkmark{transition:opacity 75ms 0ms cubic-bezier(.4,0,.2,1);transform:translate(-50%,-50%)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%,-50%);opacity:1}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@keyframes mdc-evolution-chip-enter{0%{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-evolution-chip--enter{animation:mdc-evolution-chip-enter .1s 0ms cubic-bezier(0,0,.2,1)}@keyframes mdc-evolution-chip-exit{0%{opacity:1}to{opacity:0}}.mdc-evolution-chip--exit{animation:mdc-evolution-chip-exit 75ms 0ms cubic-bezier(.4,0,1,1)}.mdc-evolution-chip--hidden{opacity:0;pointer-events:none;transition:width .15s 0ms cubic-bezier(.4,0,1,1)}.mdc-evolution-chip{height:32px;border-radius:16px;background-color:#e0e0e0}.mdc-evolution-chip .mdc-evolution-chip__ripple{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__action--primary:before{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__icon--primary{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__action--primary,[dir=rtl] .mdc-evolution-chip .mdc-evolution-chip__action--primary,.mdc-evolution-chip .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic[dir=rtl]{padding-left:6px;padding-right:6px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:0}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:12px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic[dir=rtl]{padding-left:6px;padding-right:6px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:0}.mdc-evolution-chip .mdc-evolution-chip__text-label,.mdc-evolution-chip .mdc-evolution-chip__icon--primary,.mdc-evolution-chip .mdc-evolution-chip__checkmark,.mdc-evolution-chip .mdc-evolution-chip__icon--trailing{color:#000000de}.mdc-evolution-chip .mdc-evolution-chip__text-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-evolution-chip.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--with-primary-icon){--mdc-chip-graphic-selected-width: 20px}.mdc-evolution-chip .mdc-evolution-chip__graphic,.mdc-evolution-chip .mdc-evolution-chip__icon--primary{height:20px;width:20px;font-size:20px}.mdc-evolution-chip .mdc-evolution-chip__checkmark{height:20px;width:20px}.mdc-evolution-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-evolution-chip.mdc-evolution-chip .mdc-evolution-chip__action--primary:before{border-color:CanvasText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary:before{border-color:GrayText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary:before{border-color:CanvasText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary:before{border-color:GrayText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:GrayText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:Canvas}}.mdc-evolution-chip .mdc-evolution-chip__focus-ring{display:none}.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{z-index:1;display:block;pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{border-color:CanvasText}}.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring:after,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring:after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring:after,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring:after{border-color:CanvasText}}.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{z-index:1;display:block;pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% - 4px)}@media screen and (forced-colors: active){.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{border-color:CanvasText}}.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring:after,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring:after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring:after,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring:after{border-color:CanvasText}}.mdc-evolution-chip--filter.mdc-evolution-chip--selected{background-color:#cecece}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic[dir=rtl]{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic[dir=rtl]{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--with-primary-icon){--mdc-chip-graphic-selected-width: 24px}.mdc-evolution-chip--with-avatar .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar .mdc-evolution-chip__icon--primary{height:24px;width:24px;font-size:24px}.mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-evolution-chip__action--primary:hover .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--primary.mdc-ripple-surface--hover .mdc-evolution-chip__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-evolution-chip__action--primary.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple:after{transition:opacity .15s linear}.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-evolution-chip__action--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, .12)}.mdc-evolution-chip__action--trailing .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--trailing .mdc-evolution-chip__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-evolution-chip__action--trailing:hover .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--trailing.mdc-ripple-surface--hover .mdc-evolution-chip__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-evolution-chip__action--trailing.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple:after{transition:opacity .15s linear}.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-evolution-chip__action--trailing.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, .12)}.mdc-evolution-chip__ripple--trailing{height:18px;width:18px}.mdc-evolution-chip__action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-evolution-chip__action .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action .mdc-evolution-chip__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-evolution-chip__action .mdc-evolution-chip__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-evolution-chip__action .mdc-evolution-chip__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-evolution-chip__action.mdc-ripple-upgraded--unbounded .mdc-evolution-chip__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-evolution-chip__action.mdc-ripple-upgraded--foreground-activation .mdc-evolution-chip__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-evolution-chip__action.mdc-ripple-upgraded--foreground-deactivation .mdc-evolution-chip__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-evolution-chip__action .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action .mdc-evolution-chip__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-evolution-chip__ripple{position:absolute;box-sizing:content-box;overflow:hidden;pointer-events:none}.mdc-evolution-chip__ripple--primary{height:100%;width:100%;top:0;left:0}.mdc-evolution-chip__ripple--trailing{top:50%;transform:translateY(-50%)}.mdc-evolution-chip{background-color:var(--cv-theme-surface-container)}.mdc-evolution-chip .mdc-evolution-chip__text-label{color:var(--cv-theme-on-surface-container)}.mdc-evolution-chip .mdc-evolution-chip__icon{font-family:var(--mdc-icon-font, "Material Symbols Rounded");color:var(--mdc-theme-text-icon-on-background)}.mdc-evolution-chip .mdc-evolution-chip__checkmark-path{stroke:var(--mdc-theme-text-icon-on-background)}.mdc-evolution-chip.mdc-evolution-chip--selected{background-color:var(--mdc-theme-surface-primary)}.mdc-evolution-chip.positive{background-color:var(--cv-theme-surface-positive)}.mdc-evolution-chip.negative{background-color:var(--mdc-theme-surface-negative)}.mdc-evolution-chip.caution{background-color:var(--mdc-theme-surface-caution)}.mdc-evolution-chip.secondary{background-color:var(--mdc-theme-surface-secondary)}
`;var ci=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,ai=(a,i,t,o)=>{for(var e=o>1?void 0:o?ni(i,t):i,c=a.length-1,n;c>=0;c--)(n=a[c])&&(e=(o?n(i,t,e):n(e))||e);return o&&e&&ci(i,t,e),e};let w=class extends p{};w.styles=[V`
      ${U(ei)}
    `];w=ai([Y("cv-chip")],w);var ri=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,f=(a,i,t,o)=>{for(var e=o>1?void 0:o?pi(i,t):i,c=a.length-1,n;c>=0;c--)(n=a[c])&&(e=(o?n(i,t,e):n(e))||e);return o&&e&&ri(i,t,e),e};class s extends G{constructor(){super(...arguments),this.selectable=!1,this.multi=!1,this.label="",this.activeIndex=0,this._previousActiveIndex=-1,this.chips=[]}render(){return h`<span
      class="mdc-evolution-chip-set"
      role="${this.selectable||this.multi?"listbox":"grid"}"
      aria-label="${this.label}"
      aria-multiselectable="${this.multi}"
    >
      <span class="mdc-evolution-chip-set__chips" role="presentation">
        <slot></slot>
      </span>
    </span>`}async updated(i){super.updated(i),await this.updateComplete,this.activeIndex!=this._previousActiveIndex&&this.mdcFoundation.setChipSelected(this.activeIndex,K.PRIMARY,!0)}firstUpdated(i){var e;super.firstUpdated(i);const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot"),o=(t==null?void 0:t.assignedElements().filter(c=>c instanceof w))??[];for(let c=0;c<o.length;c++){const n=o[c];this.chips.push(n)}this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundation=new Q(this.createAdapter()),this.mdcFoundation.init()}connectedCallback(){super.connectedCallback(),this.addEventListener(d.ANIMATION,this._handleChipAnimation),this.addEventListener(d.INTERACTION,this._handleChipInteraction),this.addEventListener(d.NAVIGATION,this._handleChipNavigation)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(d.ANIMATION,this._handleChipAnimation),this.removeEventListener(d.INTERACTION,this._handleChipInteraction),this.removeEventListener(d.NAVIGATION,this._handleChipNavigation)}createAdapter(){return{announceMessage:X,emitEvent:(i,t)=>this.dispatchEvent(new CustomEvent(i,{bubbles:!0,detail:t})),getAttribute:i=>this.mdcRoot.getAttribute(i),getChipActionsAtIndex:i=>this.chips[i].getActions(),getChipCount:()=>this.chips.length,getChipIdAtIndex:i=>this.chips[i].getElementID(),getChipIndexById:i=>this.chips.findIndex(t=>t.getElementID()===i),isChipFocusableAtIndex:(i,t)=>this.chips[i].isActionFocusable(t),isChipSelectableAtIndex:(i,t)=>this.chips[i].isActionSelectable(t),isChipSelectedAtIndex:(i,t)=>this.chips[i].isActionSelected(t),removeChipAtIndex:i=>this.chips[i].remove(),setChipFocusAtIndex:(i,t,o)=>this.chips[i].setActionFocus(t,o),setChipSelectedAtIndex:(i,t,o)=>this.chips[i].setActionSelected(t,o),startChipAnimationAtIndex:(i,t)=>this.chips[i].startAnimation(t)}}_handleChipAnimation(i){this.mdcFoundation.handleChipAnimation(i)}_handleChipInteraction(i){this.mdcFoundation.handleChipInteraction(i)}_handleChipNavigation(i){this.mdcFoundation.handleChipNavigation(i)}}f([q(".mdc-evolution-chip-set")],s.prototype,"mdcRoot",2);f([r({type:Boolean,reflect:!0})],s.prototype,"selectable",2);f([r({type:Boolean,reflect:!0})],s.prototype,"multi",2);f([r()],s.prototype,"label",2);f([r({type:Number})],s.prototype,"activeIndex",2);const li=`.mdc-evolution-chip-set{display:flex}.mdc-evolution-chip-set:focus{outline:none}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mdc-evolution-chip-set--overflow .mdc-evolution-chip-set__chips{flex-flow:nowrap}.mdc-evolution-chip-set .mdc-evolution-chip-set__chips{margin-left:-8px;margin-right:0}[dir=rtl] .mdc-evolution-chip-set .mdc-evolution-chip-set__chips,.mdc-evolution-chip-set .mdc-evolution-chip-set__chips[dir=rtl]{margin-left:0;margin-right:-8px}.mdc-evolution-chip-set .mdc-evolution-chip{margin-left:8px;margin-right:0}[dir=rtl] .mdc-evolution-chip-set .mdc-evolution-chip,.mdc-evolution-chip-set .mdc-evolution-chip[dir=rtl]{margin-left:0;margin-right:8px}.mdc-evolution-chip-set .mdc-evolution-chip{margin-top:4px;margin-bottom:4px}::slotted(cv-chip){margin:4px 0 4px 8px}[dir=rtl] ::slotted(cv-chip),::slotted(cv-chip[dir=rtl]){margin-left:0;margin-right:8px}
`;var di=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,si=(a,i,t,o)=>{for(var e=o>1?void 0:o?hi(i,t):i,c=a.length-1,n;c>=0;c--)(n=a[c])&&(e=(o?n(i,t,e):n(e))||e);return o&&e&&di(i,t,e),e};let x=class extends s{};x.styles=[V`
      ${U(li)}
    `];x=si([Y("cv-chip-set")],x);const Ci={title:"Components/Chips",args:{label:"Chip",icon:"houseboat",showIcon:!1,trailingIcon:!1,disabled:!1,avatar:!1}},b=({avatar:a,label:i,disabled:t,icon:o,showIcon:e,state:c,trailingIcon:n})=>`<cv-chip-set label="test chips">
           <cv-chip
                label="${i}"
                ${e?`icon="${o}"`:""}
                ${e&&n?"trailingIcon":""}
                ${a?"avatar":""}
                ${c?`state="${c}"`:""}
                ${t?"disabled":""} ></cv-chip>
          </cv-chip-set>`,mi=({multiSelectable:a,label:i,disabled:t,state:o})=>`<cv-chip-set 
           label="test chips" 
           selectable
           activeIndex="0"
           ${a?"multi":""}>
            <cv-chip
                  label="${i}"
                  filter
                  ${o?`state="${o}"`:""}
                  ${t?"disabled":""} ></cv-chip>
            <cv-chip
                  label="${i} 2"
                  filter
                  ${o?`state="${o}"`:""}
                  ${t?"disabled":""} ></cv-chip>
          </cv-chip-set>`,y=b.bind({}),m=b.bind({});m.args={state:"secondary"};const u=b.bind({});u.args={state:"caution"};const v=b.bind({});v.args={state:"positive"};const _=b.bind({});_.args={state:"negative"};const g=mi.bind({});g.args={showIcon:!0,multiSelectable:!1};var I,C,k;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(k=(C=y.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var A,S,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(F=(S=m.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var z,E,T;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var O,N,D;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(D=(N=v.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var R,P,M;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(M=(P=_.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var B,j,L;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`({
  multiSelectable,
  label,
  disabled,
  state
}) => {
  return \`<cv-chip-set 
           label="test chips" 
           selectable
           activeIndex="0"
           \${multiSelectable ? 'multi' : ''}>
            <cv-chip
                  label="\${label}"
                  filter
                  \${state ? \`state="\${state}"\` : ''}
                  \${disabled ? 'disabled' : ''} ></cv-chip>
            <cv-chip
                  label="\${label} 2"
                  filter
                  \${state ? \`state="\${state}"\` : ''}
                  \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(L=(j=g.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const ki=["Basic","Secondary","Caution","Positive","Negative","Selectable"];export{y as Basic,u as Caution,_ as Negative,v as Positive,m as Secondary,g as Selectable,ki as __namedExportsOrder,Ci as default};

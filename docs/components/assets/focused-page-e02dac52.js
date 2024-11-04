import{i as u,r as f,s as g,x as d,A as m,e as v}from"./query-assigned-elements-9f88bee1.js";import{n as a}from"./property-f36ea729.js";import{i as p}from"./query-3e91a3b8.js";import{o as c}from"./class-map-4e4d6bc9.js";const x=`:host{height:100%;left:0;position:fixed;top:0;width:100%}.action-items{padding:.5rem .75rem;text-align:right}.content{box-sizing:border-box;display:flex;flex:1;max-height:100vh;overflow:auto;transition:visibility .3s ease}.fullscreen-container{border-top:4px solid var(--cv-theme-tertiary);box-sizing:border-box;display:flex;height:100%;width:100%}.fullscreen-container:not(.help-open) .help-panel{width:0}.fullscreen-container:not(.help-open) .help-panel .resize-handle{display:none}.fullscreen-container.hide-border{border:none}.help{--mdc-theme-surface: var(--cv-theme-surface-container-low);box-sizing:border-box;flex:1;max-height:100vh;overflow-y:auto}.help-panel{background:var(--cv-theme-surface-container-low);box-sizing:border-box;display:flex;flex:0 0 auto;max-width:100%;position:relative;resize:none;transition:width .2s;width:var(--cv-focused-page-help-width, 320px);z-index:5}.help-panel .resize-handle{cursor:ew-resize;height:100%;opacity:0;position:absolute;transition:opacity .3s ease;-webkit-user-select:none;user-select:none;width:8px;z-index:9}.help-panel .resize-handle:before{background-color:var(--mdc-theme-primary);content:"";height:100%;left:0;position:absolute;top:0;transform:translate(-50%);width:2px}.help-panel .resize-handle:hover,.help-panel.resizing .resize-handle{opacity:1}.main{box-sizing:border-box;flex:1;height:100%}@media only screen and (max-width: 479.98px){.help-open .help-panel{width:100%;z-index:100}}@media only screen and (max-width: 959.98px){.help-open .help-panel{box-shadow:0 8px 12px 6px #00000026,0 4px 4px #0000004d;height:100%;position:absolute;right:0}}
`;var z=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(e,i,n,t)=>{for(var l=t>1?void 0:t?b(i,n):i,r=e.length-1,h;r>=0;r--)(h=e[r])&&(l=(t?h(i,n,l):h(l))||l);return t&&l&&z(i,n,l),l};let s=class extends g{constructor(){super(),this.helpOpen=!1,this.helpResizable=!1,this.hideTopBorder=!1,this._isResizing=!1,this._resizerMouseMove=this._resizerMouseMove.bind(this),this._resizerMouseUp=this._resizerMouseUp.bind(this),this._startResizing=this._startResizing.bind(this),this.resetHelpPanelWidth=this.resetHelpPanelWidth.bind(this)}firstUpdated(){this.openHelpPanel()}openHelpPanel(){const e=parseInt(localStorage.getItem("focusedPageHelpWidth")||"")||320;this.setHelpPanelWidth(this.helpOpen?`${e}px`:"0")}closeHelpPanel(){this.setHelpPanelWidth("0"),this.helpOpen=!1}resetHelpPanelWidth(){this.setHelpPanelWidth("320px"),localStorage.setItem("focusedPageHelpWidth","320")}setHelpPanelWidth(e){var i;(i=this.container)==null||i.style.setProperty("--cv-focused-page-help-width",e)}updated(e){super.updated(e),e.has("helpOpen")&&(this.helpOpen?this.openHelpPanel():this.closeHelpPanel())}_resizerMouseMove(e){if(!this.container||!this.helpPanel||!this._isResizing)return;const i=window.innerWidth,n=this.container.getBoundingClientRect();let t;i<960?t=this.helpPanel.getBoundingClientRect().right-e.clientX:t=n.right-e.clientX,i<960&&t>320&&t<i-40?(this.setHelpPanelWidth(`${t}px`),localStorage.setItem("focusedPageHelpWidth",`${t}`)):t>320&&t<n.width-600&&(this.setHelpPanelWidth(`${t}px`),localStorage.setItem("focusedPageHelpWidth",`${t}`))}_resizerMouseUp(){this._isResizing=!1,this.helpPanel.classList.remove("resizing"),this.helpPanel.style.transition="width 200ms",document.removeEventListener("mouseup",this._resizerMouseUp),document.removeEventListener("mousemove",this._resizerMouseMove)}_startResizing(e){e.target===this.resizeHandle&&(this._isResizing=!0,this.helpPanel.classList.add("resizing"),this.helpPanel.style.transition="none",document.addEventListener("mouseup",this._resizerMouseUp),document.addEventListener("mousemove",this._resizerMouseMove))}render(){const e={"fullscreen-container":!0,"help-open":this.helpOpen,"hide-border":this.hideTopBorder},i={"help-panel":!0,"help-resizable":this.helpResizable};return d`<div class="${c(e)}">
      <div class="content">
        <section class="main">
          <slot></slot>
        </section>
      </div>
      <aside
        class="${c(i)}"
        id="help-panel"
        @mousedown="${n=>this._startResizing(n)}"
      >
        ${this.helpResizable?d`<div
              class="resize-handle"
              @dblclick="${()=>this.helpOpen&&this.resetHelpPanelWidth()}"
            ></div>`:m}
        <div class="help"><slot name="help"></slot></div>
      </aside>
    </div>`}};s.styles=[u`
      ${f(x)}
    `];o([a({type:Boolean,reflect:!0})],s.prototype,"helpOpen",2);o([a({type:Boolean,reflect:!0})],s.prototype,"helpResizable",2);o([a({type:Boolean,reflect:!0})],s.prototype,"hideTopBorder",2);o([p(".fullscreen-container")],s.prototype,"container",2);o([p("#help-panel")],s.prototype,"helpPanel",2);o([p(".resize-handle")],s.prototype,"resizeHandle",2);s=o([v("cv-focused-page")],s);
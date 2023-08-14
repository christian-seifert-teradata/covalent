"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[4713],{84713:(v,m,n)=>{n.r(m),n.d(m,{HighlightDemoModule:()=>H});var g=n(69808),c=n(90127),s=n(99826),o=n(5e3),d=n(4531),p=n(48763),h=n(52335);let r=(()=>{class e{constructor(){this.html="\n  <div>\n    <h1>hello world!</h1>\n    <span>Some additional text here</span>\n  </div>\n  "}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["highlight-demo-html"]],decls:2,vars:1,consts:[["codeLang","html"]],template:function(t,l){1&t&&(o.TgZ(0,"td-highlight",0),o._uU(1),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",l.html,"\n"))},dependencies:[h.S]}),e})(),a=(()=>{class e{constructor(){this.code="\n  import { Injectable } from '@angular/core';\n  import { Observable, Subject } from 'rxjs';\n\n  @Injectable()\n  export class Service {\n\n    private _sources: {[key : string]: Subject<any>} = {};\n    private _observables: {[key: string]: Observable<any>} = {};\n\n    constructor() { }\n\n    public register(name) : Observable<any> {\n      this._sources[name] = new Subject<any>();\n      this._observables[name] = this._sources[name].asObservable();\n      return this._observables[name];\n    }\n\n    public emit(name: string): void {\n      if (this._sources[name]) {\n        this._sources[name].next(null);\n      }\n    }\n  }\n  "}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["highlight-demo-ts"]],decls:2,vars:3,consts:[["codeLang","typescript",3,"copyCodeToClipboard","toggleRawButton"]],template:function(t,l){1&t&&(o.TgZ(0,"td-highlight",0),o._uU(1),o.qZA()),2&t&&(o.Q6J("copyCodeToClipboard",!0)("toggleRawButton",!0),o.xp6(1),o.hij(" ",l.code,"\n"))},dependencies:[h.S]}),e})(),u=(()=>{class e{constructor(){this.css="\n  .flex-container {\n    display: flex;\n  }\n  ",this.tooltipsConfig={copy:"Copy text",copied:"Text copied"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["highlight-demo-copy-code"]],decls:5,vars:8,consts:[["codeLang","css",1,"push-bottom-md",3,"copyCodeToClipboard","copyCodeTooltips","toggleRawButton"],[1,"dark-theme"],["codeLang","css",3,"copyCodeToClipboard","copyCodeTooltips","toggleRawButton"]],template:function(t,l){1&t&&(o.TgZ(0,"td-highlight",0),o._uU(1),o.qZA(),o.TgZ(2,"div",1)(3,"td-highlight",2),o._uU(4),o.qZA()()),2&t&&(o.Q6J("copyCodeToClipboard",!0)("copyCodeTooltips",l.tooltipsConfig)("toggleRawButton",!0),o.xp6(1),o.hij(" ",l.css,"\n"),o.xp6(2),o.Q6J("copyCodeToClipboard",!0)("copyCodeTooltips",l.tooltipsConfig)("toggleRawButton",!0),o.xp6(1),o.hij(" ",l.css," "))},dependencies:[h.S]}),e})();const C=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["highlight-demo"]],decls:8,vars:8,consts:[[3,"demoId","demoTitle"]],template:function(t,l){1&t&&(o.TgZ(0,"demo-component",0),o._UZ(1,"highlight-demo-css"),o.qZA(),o.TgZ(2,"demo-component",0),o._UZ(3,"highlight-demo-html"),o.qZA(),o.TgZ(4,"demo-component",0),o._UZ(5,"highlight-demo-ts"),o.qZA(),o.TgZ(6,"demo-component",0),o._UZ(7,"highlight-demo-copy-code"),o.qZA()),2&t&&(o.Q6J("demoId","highlight-demo-css")("demoTitle","CSS"),o.xp6(2),o.Q6J("demoId","highlight-demo-html")("demoTitle","HTML"),o.xp6(2),o.Q6J("demoId","highlight-demo-ts")("demoTitle","TypeScript"),o.xp6(2),o.Q6J("demoId","highlight-demo-copy-code")("demoTitle","CopyCode and ToggleRaw"))},dependencies:[d.R,p.z,r,a,u]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[s.Bz.forChild(C),s.Bz]}),e})();var T=n(92234),f=n(65344);let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[f.n,T.l,y,c.B,g.ez]}),e})()}}]);
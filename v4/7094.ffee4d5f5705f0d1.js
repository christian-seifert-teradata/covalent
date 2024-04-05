"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[7094],{77094:(q,g,a)=>{a.r(g),a.d(g,{LoadingDemoModule:()=>J});var c=a(69808),l=a(94859),u=a(4521),e=a(5e3),L=a(48763),s=a(52672),m=a(47423);function f(o,n){1&o&&(e.TgZ(0,"div"),e.TgZ(1,"div",3),e._uU(2,"loading content..."),e.qZA(),e.qZA())}let y=(()=>{class o{constructor(t){this._loadingService=t,this.loadingMode=l.s3,this.loadingStrategy=l.I0,this.loadingType=l.Fq,this.overlayStarSyntax=!1}toggleOverlayStarSyntax(){this.overlayStarSyntax=!this.overlayStarSyntax,this.overlayStarSyntax?this._loadingService.register("overlayStarSyntax"):this._loadingService.resolve("overlayStarSyntax")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.bI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["loading-demo-basic"]],decls:4,vars:5,consts:[[4,"tdLoading","tdLoadingMode","tdLoadingType","tdLoadingStrategy","tdLoadingColor"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(t,i){1&t&&(e.YNc(0,f,3,0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return i.toggleOverlayStarSyntax()}),e._uU(3," Toggle Loader "),e.qZA(),e.qZA()),2&t&&e.Q6J("tdLoading","overlayStarSyntax")("tdLoadingMode",i.loadingMode.Indeterminate)("tdLoadingType",i.loadingType.Circular)("tdLoadingStrategy",i.loadingStrategy.Overlay)("tdLoadingColor","accent")},directives:[s.O,m.lW],styles:[""]}),o})();function T(o,n){1&o&&(e.TgZ(0,"div",3),e._uU(1,"loading content..."),e.qZA())}let Z=(()=>{class o{constructor(){this.loading=!1}toggle(){this.loading=!this.loading}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["loading-demo-replace"]],decls:4,vars:1,consts:[["tdLoading","",3,"tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(t,i){1&t&&(e.YNc(0,T,2,0,"ng-template",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return i.toggle()}),e._uU(3," Toggle Loader "),e.qZA(),e.qZA()),2&t&&e.Q6J("tdLoadingUntil",!i.loading)},directives:[s.O,m.lW],styles:[""]}),o})();var p=a(61135);function D(o,n){if(1&o&&(e.TgZ(0,"div"),e.TgZ(1,"div",3),e._uU(2),e.qZA(),e.qZA()),2&o){const t=n.$implicit;e.xp6(2),e.hij(" ",t.name," ")}}let b=(()=>{class o{constructor(){this._subject=new p.X({name:"I am here!"}),this.observable$=this._subject.asObservable()}toggle(){this._subject=new p.X(void 0),this.observable$=this._subject.asObservable(),setTimeout(()=>{this._subject.next({name:"I am here!"})},1e3)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["loading-demo-observable"]],decls:5,vars:3,consts:[[4,"tdLoading","tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(t,i){1&t&&(e.YNc(0,D,3,1,"div",0),e.ALo(1,"async"),e.TgZ(2,"div",1),e.TgZ(3,"button",2),e.NdJ("click",function(){return i.toggle()}),e._uU(4," Toggle Loader "),e.qZA(),e.qZA()),2&t&&e.Q6J("tdLoadingUntil",e.lcZ(1,1,i.observable$))},directives:[s.O,m.lW],pipes:[c.Ov],styles:[""]}),o})(),C=(()=>{class o{constructor(t){this._loadingService=t,this._loadingService.create({name:"customFullscreenDemo",mode:l.s3.Indeterminate,type:l.Fq.Linear,color:"accent"})}toggleDefaultFullscreenDemo(){this._loadingService.register(),setTimeout(()=>this._loadingService.resolve(),1500)}toggleCustomFullscreenDemo(){this._loadingService.register("customFullscreenDemo"),setTimeout(()=>this._loadingService.resolve("customFullscreenDemo"),1500)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.bI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["loading-demo-fullscreen"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",1,"text-upper",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.toggleDefaultFullscreenDemo()}),e._uU(1," Toggle default fullscreen Loader\n"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return i.toggleCustomFullscreenDemo()}),e._uU(3," Toggle custom Fullscreen Loader\n"),e.qZA())},directives:[m.lW],styles:["button[_ngcontent-%COMP%]{margin-right:1em}"]}),o})();var r=a(14623),v=a(63874),h=a(90508),_=a(4834);function S(o,n){1&o&&(e.TgZ(0,"mat-icon",1),e._uU(1,"settings_backup_restore"),e.qZA())}function F(o,n){1&o&&e._UZ(0,"mat-divider")}function A(o,n){if(1&o&&(e.TgZ(0,"mat-list-item"),e.TgZ(1,"div",1),e.YNc(2,S,2,0,"ng-template",2),e.qZA(),e.TgZ(3,"h3",3),e._uU(4),e.qZA(),e.qZA(),e.YNc(5,F,1,0,"mat-divider",4)),2&o){const t=n.$implicit,i=n.last,d=e.oxw();e.xp6(2),e.Q6J("tdLoadingUntil",!t.value)("tdLoadingStrategy",d.loadingStrategy.Overlay),e.xp6(2),e.Oqu(t.label),e.xp6(1),e.Q6J("ngIf",!i)}}let x=(()=>{class o{constructor(){this.loadingMode=l.s3,this.loadingStrategy=l.I0,this.loadingType=l.Fq,this.itemList=[{label:"Light",value:!0},{label:"Console",value:!1},{label:"T.V.",value:!0}]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["loading-demo-icon"]],decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],["matListAvatar",""],["tdLoading","",3,"tdLoadingUntil","tdLoadingStrategy"],["matLine",""],[4,"ngIf"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-list"),e.YNc(1,A,6,4,"ng-template",0),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.itemList))},directives:[r.i$,c.sg,r.Tg,r.eA,s.O,v.Hw,h.X2,c.O5,_.d],styles:[""]}),o})();const U=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["loading-demo"]],decls:10,vars:10,consts:[[3,"demoId","demoTitle"]],template:function(t,i){1&t&&(e.TgZ(0,"demo-component",0),e._UZ(1,"loading-demo-basic"),e.qZA(),e.TgZ(2,"demo-component",0),e._UZ(3,"loading-demo-replace"),e.qZA(),e.TgZ(4,"demo-component",0),e._UZ(5,"loading-demo-observable"),e.qZA(),e.TgZ(6,"demo-component",0),e._UZ(7,"loading-demo-fullscreen"),e.qZA(),e.TgZ(8,"demo-component",0),e._UZ(9,"loading-demo-icon"),e.qZA()),2&t&&(e.Q6J("demoId","loading-demo-basic")("demoTitle","Basic"),e.xp6(2),e.Q6J("demoId","loading-demo-replace")("demoTitle","Template Until Syntax"),e.xp6(2),e.Q6J("demoId","loading-demo-observable")("demoTitle","Until Syntax Using Observables"),e.xp6(2),e.Q6J("demoId","loading-demo-fullscreen")("demoTitle","Fullscreen"),e.xp6(2),e.Q6J("demoId","loading-demo-icon")("demoTitle","Icon"))},directives:[L.z,y,Z,b,C,x],styles:[""]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(U)],u.Bz]}),o})();var O=a(92234);let J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[O.l,I,l._,c.ez,m.ot,v.Ps,r.ie]]}),o})()}}]);
"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[6123],{26123:(U,l,m)=>{m.r(l),m.d(l,{SideSheetDemoModule:()=>b});var a=m(69808),r=m(63874),u=m(2638),c=m(47423),S=m(34594),s=m(71567),h=m(92234),p=m(4521),e=m(5e3),f=m(48763);const g=["example"];function D(t,n){1&t&&e._uU(0,"It works from a TemplateRef!")}let C=(()=>{class t{constructor(o){this.sideSheet=o}toggleSideSheet(){this.sideSheet.open(this.template)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.PM))},t.\u0275cmp=e.Xpm({type:t,selectors:[["side-sheet-demo-basic"]],viewQuery:function(o,i){if(1&o&&e.Gf(g,5),2&o){let d;e.iGM(d=e.CRH())&&(i.template=d.first)}},decls:6,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"],["example",""]],template:function(o,i){1&o&&(e.TgZ(0,"p"),e._uU(1,"Open some dialog content from a TemplateRef"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return i.toggleSideSheet()}),e._uU(3," Open\n"),e.qZA(),e.YNc(4,D,1,0,"ng-template",null,1,e.W1O))},directives:[c.lW],styles:[""]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example"]],decls:1,vars:0,template:function(o,i){1&o&&e._uU(0," it works from a component ")},encapsulation:2}),t})(),y=(()=>{class t{constructor(o){this.sideSheet=o}toggleSideSheet(){this.sideSheet.open(v)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.PM))},t.\u0275cmp=e.Xpm({type:t,selectors:[["side-sheet-demo-advanced"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"p"),e._uU(1,"Open some dialog content from a Component"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return i.toggleSideSheet()}),e._uU(3," Open\n"),e.qZA())},directives:[c.lW],styles:[""]}),t})();var T=m(31002);let Z=(()=>{class t{constructor(o){this.sideSheet=o,this.SubPageOpenMode=s.dQ}openSideSheet(o=s.dQ.pushed){this.sideSheet.open(x,{minWidth:"400px",subPageMode:o})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.PM))},t.\u0275cmp=e.Xpm({type:t,selectors:[["example"]],decls:13,vars:0,consts:[[2,"display","flex","justify-content","right","padding-top","50px"],["mat-raised-button","","td-side-sheet-close",""],[2,"display","flex","justify-content","space-between","padding-top","50px"],["mat-raised-button","","color","primary",3,"click"]],template:function(o,i){1&o&&(e._uU(0," it works from a component "),e.TgZ(1,"div",0),e.TgZ(2,"button",1),e._uU(3,"Close"),e.qZA(),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"button",3),e.NdJ("click",function(){return i.openSideSheet()}),e._uU(6," Open pushed "),e.qZA(),e.qZA(),e.TgZ(7,"div",2),e.TgZ(8,"button",3),e.NdJ("click",function(){return i.openSideSheet(i.SubPageOpenMode.shifted)}),e._uU(9," Open shifted "),e.qZA(),e.qZA(),e.TgZ(10,"div",2),e.TgZ(11,"button",3),e.NdJ("click",function(){return i.openSideSheet(i.SubPageOpenMode.none)}),e._uU(12," Open none "),e.qZA(),e.qZA())},directives:[c.lW,T.eA],encapsulation:2}),t})(),x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-layered"]],decls:1,vars:0,template:function(o,i){1&o&&e._uU(0,"Im Multi layered!")},encapsulation:2}),t})(),A=(()=>{class t{constructor(o){this.sideSheet=o}toggleSideSheet(){this.sideSheet.open(Z)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.PM))},t.\u0275cmp=e.Xpm({type:t,selectors:[["side-sheet-demo-multi"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"p"),e._uU(1,"Open a side sheet with multiple layers"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return i.toggleSideSheet()}),e._uU(3," Open\n"),e.qZA())},directives:[c.lW],styles:[""]}),t})();const M=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sidesheet-demo"]],decls:6,vars:6,consts:[[3,"demoId","demoTitle"]],template:function(o,i){1&o&&(e.TgZ(0,"demo-component",0),e._UZ(1,"side-sheet-demo-basic"),e.qZA(),e.TgZ(2,"demo-component",0),e._UZ(3,"side-sheet-demo-advanced"),e.qZA(),e.TgZ(4,"demo-component",0),e._UZ(5,"side-sheet-demo-multi"),e.qZA()),2&o&&(e.Q6J("demoId","side-sheet-demo-basic")("demoTitle","Basic"),e.xp6(2),e.Q6J("demoId","side-sheet-demo-advanced")("demoTitle","Advanced"),e.xp6(2),e.Q6J("demoId","side-sheet-demo-multi")("demoTitle","Multi"))},directives:[f.z,C,y,A],styles:[""]}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(M)],p.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.l,_,s.rs,a.ez,r.Ps,u.SJ,c.ot,S.g0]]}),t})()}}]);
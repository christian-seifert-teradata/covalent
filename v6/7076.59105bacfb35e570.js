"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[7076],{77076:(v,d,o)=>{o.r(d),o.d(d,{PieDemoModule:()=>N});var n=o(96814),h=o(98525),f=o(30617),D=o(23421),T=o(57337),l=o(52514),g=o(96535),c=o(99902),m=o(52787),t=o(65879),s=o(31791),p=o(76856),u=o(1691),C=o(64335),_=o(33822),x=o(13063),O=o(62730);function b(e,a){if(1&e&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&e){const i=a.ngIf,r=t.oxw().index;t.xp6(1),t.hij(" ",i[r]," ")}}function S(e,a){if(1&e&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&e){const i=a.ngIf,r=t.oxw().index;t.xp6(1),t.hij(" ",i[r]," ")}}const y=function(){return[823,235,1042,988]},P=function(){return[95.8,81.4,91.2,76.9]};function B(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"tr",10)(2,"td",11),t._uU(3),t.qZA(),t.YNc(4,b,2,1,"td",12),t.YNc(5,S,2,1,"td",12),t.qZA(),t.BQk()),2&e){const i=a.$implicit;t.xp6(3),t.Oqu(i),t.xp6(1),t.Q6J("ngIf",t.DdM(3,y)),t.xp6(1),t.Q6J("ngIf",t.DdM(4,P))}}const M=function(){return["Latte","Tea","Cocoa","Milk"]};function Z(e,a){1&e&&(t.TgZ(0,"table",6)(1,"thead")(2,"tr",7)(3,"th",8),t._uU(4,"Product"),t.qZA(),t.TgZ(5,"th",8),t._uU(6,"Count"),t.qZA(),t.TgZ(7,"th",8),t._uU(8,"Score"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,B,6,5,"ng-container",9),t.qZA()()),2&e&&(t.xp6(10),t.Q6J("ngForOf",t.DdM(1,M)))}function w(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",14)(2,"span",15),t._uU(3),t.qZA()(),t.BQk()),2&e){const i=t.oxw().$implicit;t.xp6(3),t.AsE(" ",i.seriesName?i.seriesName:i.name," : ",i.value," ")}}function F(e,a){1&e&&t.YNc(0,w,4,2,"ng-container",13),2&e&&t.Q6J("ngIf",a.$implicit)}const A=function(e,a,i){return{product:e,count:a,score:i}},E=function(){return["Data View","Turn Off","Refresh"]},z=function(e){return{readOnly:!0,title:"View Data",lang:e}},Q=function(e){return{dataView:e}},R=function(){return{color:"#818181"}},U=function(){return[0,"75%"]};let V=(()=>{var e;class a{constructor(r){this.themeSelector=r,this.config={toolbox:{showTitle:!0,top:0,right:"30px",show:!0,feature:{dataView:{title:"View Data",lang:["Data View","Turn Off","Refresh"]}}},grid:{top:"0",bottom:"10",left:"0"},series:[{type:"pie",itemStyle:{opacity:.95},name:"Product",radius:[0,"75%"],data:[{name:"Latte",value:80,itemStyle:{color:"#26B99A"}},{name:"Tea",value:50,itemStyle:{color:"#34495E"}},{name:"Cocoa",value:60,itemStyle:{color:"#BDC3C7"}},{name:"Frappe",value:122,itemStyle:{color:"#3498DB"}},{name:"Milk",value:110,itemStyle:{color:"#9B59B6"}},{name:"Mocha",value:20,itemStyle:{color:"#8abb6f"}}]}],tooltip:{show:!0,trigger:"item",showContent:!0,formatter:"{a} <br/>{b} : {c} ({d}%)"}}}}return(e=a).\u0275fac=function(r){return new(r||e)(t.Y36(p.n))},e.\u0275cmp=t.Xpm({type:e,selectors:[["pie-demo-basic"]],decls:7,vars:25,consts:[[3,"source"],[3,"show","right","top","feature"],["tdViewDataFormatter",""],[3,"trigger","textStyle","backgroundColor"],["tdTooltipFormatter",""],["td-pie","",3,"radius"],["td-data-table",""],["td-data-table-column-row",""],["td-data-table-column",""],[4,"ngFor","ngForOf"],["td-data-table-row",""],["td-data-table-cell",""],["td-data-table-cell","",4,"ngIf"],[4,"ngIf"],["layout","row","layout-align","start center"],[1,"mat-caption","pad-left-sm"]],template:function(r,G){1&r&&(t.TgZ(0,"td-chart"),t._UZ(1,"td-chart-dataset",0),t.TgZ(2,"td-chart-toolbox",1),t.YNc(3,Z,11,2,"ng-template",2),t.qZA(),t.TgZ(4,"td-chart-tooltip",3),t.YNc(5,F,1,1,"ng-template",4),t.qZA(),t._UZ(6,"td-chart-series",5),t.qZA()),2&r&&(t.Udp("height",400,"px"),t.xp6(1),t.Q6J("source",t.kEZ(14,A,t.DdM(11,M),t.DdM(12,y),t.DdM(13,P))),t.xp6(1),t.Q6J("show",!0)("right",30)("top",10)("feature",t.VKq(21,Q,t.VKq(19,z,t.DdM(18,E)))),t.xp6(2),t.Q6J("trigger","item")("textStyle",t.DdM(23,R))("backgroundColor","#ffffff"),t.xp6(2),t.Q6J("radius",t.DdM(24,U)))},dependencies:[u.L,C.H,_.HN,_.dA,x.O,x.G,O.I,n.sg,n.O5],changeDetection:0}),a})();const I=[{path:"",component:(()=>{var e;class a{}return(e=a).\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["pie-demo"]],decls:2,vars:2,consts:[[3,"demoId","demoTitle"]],template:function(r,G){1&r&&(t.TgZ(0,"demo-component",0),t._UZ(1,"pie-demo-basic"),t.qZA()),2&r&&t.Q6J("demoId","pie-demo-basic")("demoTitle","Basic")},dependencies:[s.z,V]}),a})()}];let J=(()=>{var e;class a{}return(e=a).\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(I),m.Bz]}),a})(),N=(()=>{var e;class a{}return(e=a).\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.l,J,D.MX,T.NF,l.Po,c.XW,n.ez,h.LD,f.Ps]}),a})()},52514:(v,d,o)=>{o.d(d,{Po:()=>T});var n=o(96814),f=(o(13063),o(65879));let T=(()=>{var l;class g{}return(l=g).\u0275fac=function(m){return new(m||l)},l.\u0275mod=f.oAB({type:l}),l.\u0275inj=f.cJS({imports:[n.ez]}),g})()},13063:(v,d,o)=>{o.d(d,{G:()=>l,O:()=>g});var n=o(65879),h=o(23421),f=o(96814);const D=["toolboxContent"];function T(c,m){}let l=(()=>{var c;class m{}return(c=m).\u0275fac=function(s){return new(s||c)},c.\u0275dir=n.lG2({type:c,selectors:[["ng-template","tdViewDataFormatter",""]]}),m})(),g=(()=>{var c;class m{constructor(s,p,u){this._changeDetectorRef=s,this._elementRef=p,this._optionsService=u,this._state={},this.config={},this.show=!0,this.showTitle=!0,this.transitionDuration=.5,this.left="auto",this.top="auto",this.right="auto",this.bottom="auto",this.width="auto",this.height="auto"}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const s=(0,h.t8)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",s)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){this.formatterTemplate&&(this.feature={...this.feature,dataView:{...this.feature?.dataView,optionToContent:this._optionToContentFormatter()}})}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}}return(c=m).\u0275fac=function(s){return new(s||c)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(h.ij))},c.\u0275cmp=n.Xpm({type:c,selectors:[["td-chart-toolbox"]],contentQueries:function(s,p,u){if(1&s&&n.Suo(u,l,5,n.Rgc),2&s){let C;n.iGM(C=n.CRH())&&(p.formatterTemplate=C.first)}},viewQuery:function(s,p){if(1&s&&n.Gf(D,7),2&s){let u;n.iGM(u=n.CRH())&&(p.fullTemplate=u.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[n.TTD],decls:2,vars:1,consts:[[3,"ngTemplateOutlet"],["toolboxContent",""]],template:function(s,p){1&s&&n.YNc(0,T,0,0,"ng-template",0,1,n.W1O),2&s&&n.Q6J("ngTemplateOutlet",p.formatterTemplate)},dependencies:[f.tP],encapsulation:2,changeDetection:0}),m})()}}]);
"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[4595],{54114:(f,d,e)=>{e.d(d,{y:()=>ot});var a=e(15861),c=e(8370),_=e(17606),t=e(5e3),r=e(80338),i=e(10815),m=e(19586),l=e(2310),y=e(47065),s=e(80878),p=e(93683),g=e(69808),T=e(67322),D=e(74107),C=e(90508),E=e(25245);function O(o,h){if(1&o&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&o){const n=h.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function M(o,h){if(1&o&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&o){const n=h.ngIf,u=t.oxw().index;t.xp6(1),t.hij(" ",n[u]," ")}}function b(o,h){if(1&o&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&o){const n=h.ngIf,u=t.oxw().index;t.xp6(1),t.hij(" ",n[u]," ")}}const A=function(){return[150,130,150,120,150,120]},B=function(){return[80,122,80,120,80,120]};function P(o,h){if(1&o&&(t.ynx(0),t.TgZ(1,"tr",20)(2,"td",21),t._uU(3),t.qZA(),t.YNc(4,M,2,1,"td",22),t.YNc(5,b,2,1,"td",22),t.qZA(),t.BQk()),2&o){const n=h.$implicit;t.xp6(3),t.Oqu(n),t.xp6(1),t.Q6J("ngIf",t.DdM(3,A)),t.xp6(1),t.Q6J("ngIf",t.DdM(4,B))}}const L=function(){return["Electronics","Toys","Grocery","Appliances","Automotive","Sports"]};function S(o,h){if(1&o&&(t.TgZ(0,"table",16)(1,"thead")(2,"tr",17)(3,"th",18),t._uU(4,"Category"),t.qZA(),t.TgZ(5,"th",18),t._uU(6),t.qZA(),t.TgZ(7,"th",18),t._uU(8),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,P,6,5,"ng-container",19),t.qZA()()),2&o){const n=t.oxw();t.xp6(6),t.Oqu(n.config.series[0].name),t.xp6(2),t.Oqu(n.config.series[1].name),t.xp6(2),t.Q6J("ngForOf",t.DdM(3,L))}}function I(o,h){if(1&o&&(t.ynx(0),t.TgZ(1,"div",24)(2,"mat-icon")(3,"span"),t._uU(4,"people"),t.qZA()(),t.TgZ(5,"span",25),t._uU(6),t.qZA()(),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(3),t.Udp("color",n.color),t.xp6(3),t.AsE(" ",n.seriesName?n.seriesName:n.name,": ",n.value," ")}}function U(o,h){1&o&&t.YNc(0,I,7,4,"ng-container",23),2&o&&t.Q6J("ngIf",h.$implicit)}const R=function(){return["Electronics",150,80]},w=function(){return["Toys",130,122]},K=function(){return["Grocery",150,80]},W=function(){return["Appliances",120,120]},k=function(){return["Automotive",150,80]},Z=function(){return["Sports",120,120]},z=function(o,h,n,u,x,v){return[o,h,n,u,x,v]},F=function(){return["Data View","Turn Off","Refresh"]},G=function(o){return{readOnly:!0,title:"View Data",lang:o}},N=function(){return{zoom:"Zoom",back:"Back"}},Q=function(o){return{title:o}},J=function(){return["line","bar","stack","tiled"]},H=function(){return{line:"Line",bar:"Bar",stack:"Stack",tiled:"Tiled"}},V=function(o,h){return{type:o,title:h}},j=function(){return{title:"Restore"}},Y=function(o,h,n,u){return{dataView:o,dataZoom:h,magicType:n,restore:u}},X=function(){return{type:"dotted"}},$=function(o){return{lineStyle:o}},q=function(){return{name:"Average",value:30,xAxis:1,yAxis:30}},tt=function(o){return[o]},et=function(o){return{data:o}};let ot=(()=>{class o{constructor(n,u){this._cdr=n,this.themeSelector=u,this.themes=(0,c.RC)(),this.config={toolbox:{showTitle:!0,top:0,right:"30px",show:!0,feature:{dataView:{title:"View Data",lang:["Data View","Turn Off","Refresh"]},dataZoom:{title:{zoom:"Zoom",back:"Back"}},magicType:{type:["line","bar","stack","tiled"],title:{line:"Line",bar:"Bar",stack:"Stack",tiled:"Tiled"}},restore:{title:"Restore"}}},xAxis:[{data:["Electronics","Toys","Grocery","Appliances","Automotive","Sports"]},{show:!0,type:"time",boundaryGap:!1}],yAxis:[{show:!0,type:"value",axisLabel:{inside:!1},max:300}],series:[{type:"bar",itemStyle:{opacity:.95,color:"#007373"},markPoint:{data:[{name:"test",value:130,xAxis:1,yAxis:130}]},name:"Yesterday",data:[150,130,150,120,150,120]},{type:"bar",itemStyle:{opacity:.95,color:"#1B98C6"},markPoint:{data:[{name:"Target",value:80,xAxis:1,yAxis:121}]},markLine:{data:[{name:"Average",value:30,xAxis:1,yAxis:30}],symbol:"circle"},name:"Today",data:[80,122,80,120,80,120]}],tooltip:{show:!0,trigger:"item",showContent:!0}}}ngOnInit(){var n=this;return(0,a.Z)(function*(){n.selectedTheme=n.themeSelector.selected,n._cdr.markForCheck()})()}selectChartTheme(n){this.themeSelector.select(n)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(t.sBO),t.Y36(_.n))},o.\u0275cmp=t.Xpm({type:o,selectors:[["bar-demo-basic"]],decls:17,vars:63,consts:[["flex","","layout","row","layout-align","start center"],["hide-xs","",1,"mat-subheading-2","pad-left","pad-right","push-bottom-none"],["floatLabel","never"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"themeName"],[3,"source"],[3,"show","right","top","feature"],["tdViewDataFormatter",""],[3,"trigger"],["tdTooltipFormatter",""],[3,"show","position","type","boundaryGap"],[3,"show","type","position","max","splitLine"],["td-bar","",3,"name"],["td-bar","",3,"name","markLine"],[3,"value"],["td-data-table",""],["td-data-table-column-row",""],["td-data-table-column",""],[4,"ngFor","ngForOf"],["td-data-table-row",""],["td-data-table-cell",""],["td-data-table-cell","",4,"ngIf"],[4,"ngIf"],["layout","row","layout-align","start center"],[1,"mat-caption","pad-left-sm"]],template:function(n,u){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Chart Theme: "),t.qZA(),t.TgZ(3,"mat-form-field",2)(4,"mat-select",3),t.NdJ("valueChange",function(v){return u.selectedTheme=v})("valueChange",function(v){return u.selectChartTheme(v)}),t.YNc(5,O,2,2,"mat-option",4),t.qZA()()(),t.TgZ(6,"td-chart",5),t.ALo(7,"async"),t._UZ(8,"td-chart-dataset",6),t.TgZ(9,"td-chart-toolbox",7),t.YNc(10,S,11,4,"ng-template",8),t.qZA(),t.TgZ(11,"td-chart-tooltip",9),t.YNc(12,U,1,1,"ng-template",10),t.qZA(),t._UZ(13,"td-chart-x-axis",11)(14,"td-chart-y-axis",12)(15,"td-chart-series",13)(16,"td-chart-series",14),t.qZA()),2&n&&(t.xp6(4),t.Q6J("value",u.selectedTheme),t.xp6(1),t.Q6J("ngForOf",u.themes),t.xp6(1),t.Udp("height",300,"px"),t.Q6J("themeName",t.lcZ(7,23,u.themeSelector.selected$)),t.xp6(2),t.Q6J("source",t.HTZ(31,z,t.DdM(25,R),t.DdM(26,w),t.DdM(27,K),t.DdM(28,W),t.DdM(29,k),t.DdM(30,Z))),t.xp6(1),t.Q6J("show",!0)("right",30)("top",10)("feature",t.l5B(50,Y,t.VKq(39,G,t.DdM(38,F)),t.VKq(42,Q,t.DdM(41,N)),t.WLB(46,V,t.DdM(44,J),t.DdM(45,H)),t.DdM(49,j))),t.xp6(2),t.Q6J("trigger","item"),t.xp6(2),t.Q6J("show",!0)("position","bottom")("type","category")("boundaryGap",!0),t.xp6(1),t.Q6J("show",!0)("type","value")("position","right")("max",300)("splitLine",t.VKq(56,$,t.DdM(55,X))),t.xp6(1),t.Q6J("name","Today"),t.xp6(1),t.Q6J("name","Yesterday")("markLine",t.VKq(61,et,t.VKq(59,tt,t.DdM(58,q)))))},dependencies:[r.L,i.O,m.$,l.H,y.h,s.HN,s.dA,p.O,p.G,g.sg,g.O5,T.KE,D.gD,C.ey,E.Hw,g.Ov],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0}),o})()},97930:(f,d,e)=>{e.d(d,{h:()=>y});var a=e(69808),c=e(74107),_=e(25245),t=e(8370),r=e(32472),i=e(34803),m=e(8406),l=e(5e3);let y=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[t.MX,r.FA,i.NF,m.Po,a.ez,c.LD,_.Ps]}),s})()},47065:(f,d,e)=>{e.d(d,{h:()=>t});var a=e(5e3),c=e(8370);const _=["td-bar",""];let t=(()=>{class r extends c.R0{constructor(m){super("bar",m)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,label:this.label,itemStyle:this.itemStyle,emphasis:this.emphasis,barWidth:this.barWidth,barMaxWidth:this.barMaxWidth,barMinHeight:this.barMinHeight,barGap:this.barGap,barCategoryGap:this.barCategoryGap,large:this.large,largeThreshold:this.largeThreshold,progressive:this.progressive,progressiveThreshold:this.progressiveThreshold,progressiveChunkMode:this.progressiveChunkMode,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z}}}return r.\u0275fac=function(m){return new(m||r)(a.Y36(c.ij))},r.\u0275cmp=a.Xpm({type:r,selectors:[["td-chart-series","td-bar",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",label:"label",itemStyle:"itemStyle",emphasis:"emphasis",barWidth:"barWidth",barMaxWidth:"barMaxWidth",barMinHeight:"barMinHeight",barGap:"barGap",barCategoryGap:"barCategoryGap",large:"large",largeThreshold:"largeThreshold",progressive:"progressive",progressiveThreshold:"progressiveThreshold",progressiveChunkMode:"progressiveChunkMode",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z"},features:[a._Bn([{provide:c.R0,useExisting:(0,a.Gpc)(()=>r)}]),a.qOj],attrs:_,decls:0,vars:0,template:function(m,l){},encapsulation:2,changeDetection:0}),r})()},32472:(f,d,e)=>{e.d(d,{FA:()=>r});var a=e(69808),_=(e(47065),e(5e3));let r=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=_.oAB({type:i}),i.\u0275inj=_.cJS({imports:[a.ez]}),i})()},73808:(f,d,e)=>{e.d(d,{P:()=>t});var a=e(5e3),c=e(8370);const _=["td-line",""];let t=(()=>{class r extends c.R0{constructor(m){super("line",m)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,polarIndex:this.polarIndex,symbol:this.symbol,symbolSize:this.symbolSize,symbolRotate:this.symbolRotate,symbolKeepAspect:this.symbolKeepAspect,symbolOffset:this.symbolOffset,showSymbol:this.showSymbol,showAllSymbol:this.showAllSymbol,hoverAnimation:this.hoverAnimation,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,connectNulls:this.connectNulls,clipOverflow:this.clipOverflow,step:this.step,label:this.label,itemStyle:this.itemStyle,lineStyle:this.lineStyle,areaStyle:this.areaStyle,emphasis:this.emphasis,smooth:this.smooth,smoothMonotone:this.smoothMonotone,sampling:this.sampling,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z,silent:this.silent}}}return r.\u0275fac=function(m){return new(m||r)(a.Y36(c.ij))},r.\u0275cmp=a.Xpm({type:r,selectors:[["td-chart-series","td-line",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",polarIndex:"polarIndex",symbol:"symbol",symbolSize:"symbolSize",symbolRotate:"symbolRotate",symbolKeepAspect:"symbolKeepAspect",symbolOffset:"symbolOffset",showSymbol:"showSymbol",showAllSymbol:"showAllSymbol",hoverAnimation:"hoverAnimation",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",connectNulls:"connectNulls",clipOverflow:"clipOverflow",step:"step",label:"label",itemStyle:"itemStyle",lineStyle:"lineStyle",areaStyle:"areaStyle",emphasis:"emphasis",smooth:"smooth",smoothMonotone:"smoothMonotone",sampling:"sampling",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z",silent:"silent"},features:[a._Bn([{provide:c.R0,useExisting:(0,a.Gpc)(()=>r)}]),a.qOj],attrs:_,decls:0,vars:0,template:function(m,l){},encapsulation:2,changeDetection:0}),r})()},81453:(f,d,e)=>{e.d(d,{Uy:()=>r});var a=e(69808),_=(e(73808),e(5e3));let r=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=_.oAB({type:i}),i.\u0275inj=_.cJS({imports:[a.ez]}),i})()},8406:(f,d,e)=>{e.d(d,{Po:()=>r});var a=e(69808),_=(e(93683),e(5e3));let r=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=_.oAB({type:i}),i.\u0275inj=_.cJS({imports:[a.ez]}),i})()},93683:(f,d,e)=>{e.d(d,{G:()=>i,O:()=>m});var a=e(5e3),c=e(8370),_=e(69808);const t=["toolboxContent"];function r(l,y){}let i=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275dir=a.lG2({type:l,selectors:[["ng-template","tdViewDataFormatter",""]]}),l})(),m=(()=>{class l{constructor(s,p,g){this._changeDetectorRef=s,this._elementRef=p,this._optionsService=g,this._state={},this.config={},this.show=!0,this.showTitle=!0,this.transitionDuration=.5,this.left="auto",this.top="auto",this.right="auto",this.bottom="auto",this.width="auto",this.height="auto"}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const s=(0,c.t8)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",s)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){var s;this.formatterTemplate&&(this.feature=Object.assign(Object.assign({},this.feature),{dataView:Object.assign(Object.assign({},null===(s=this.feature)||void 0===s?void 0:s.dataView),{optionToContent:this._optionToContentFormatter()})}))}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}}return l.\u0275fac=function(s){return new(s||l)(a.Y36(a.sBO),a.Y36(a.SBq),a.Y36(c.ij))},l.\u0275cmp=a.Xpm({type:l,selectors:[["td-chart-toolbox"]],contentQueries:function(s,p,g){if(1&s&&a.Suo(g,i,5,a.Rgc),2&s){let T;a.iGM(T=a.CRH())&&(p.formatterTemplate=T.first)}},viewQuery:function(s,p){if(1&s&&a.Gf(t,7),2&s){let g;a.iGM(g=a.CRH())&&(p.fullTemplate=g.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[a.TTD],decls:2,vars:1,consts:[[3,"ngTemplateOutlet"],["toolboxContent",""]],template:function(s,p){1&s&&a.YNc(0,r,0,0,"ng-template",0,1,a.W1O),2&s&&a.Q6J("ngTemplateOutlet",p.formatterTemplate)},dependencies:[_.tP],encapsulation:2,changeDetection:0}),l})()}}]);
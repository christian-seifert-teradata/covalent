"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[3077],{73077:(x,u,e)=>{e.r(u),e.d(u,{ScatterDemoModule:()=>xt});var o=e(96814),c=e(98525),d=e(30617),g=e(23421),m=e(57337),l=e(52514),y=e(84770),i=e(52787),t=e(65879),h=e(31791),r=e(15861),f=e(76856),v=e(1691),S=e(15079),A=e(39967),M=e(33822),I=e(7287),O=e(64170),z=e(23680);function _(a,D){if(1&a&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&a){const n=D.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function F(a,D){if(1&a&&(t.ynx(0),t.TgZ(1,"div",0)(2,"mat-icon"),t._uU(3,"person"),t.qZA(),t.TgZ(4,"span",12),t._uU(5),t.qZA()(),t.BQk()),2&a){const n=t.oxw().$implicit;t.xp6(2),t.Udp("color",n.color),t.xp6(3),t.hij(" ",n.seriesName+": "+n.value[1]," ")}}function B(a,D){1&a&&t.YNc(0,F,6,3,"ng-container",11),2&a&&t.Q6J("ngIf",D.$implicit)}const E=function(){return[28604,77,17096869,"Australia",1990]},U=function(){return[31163,77.4,27662440,"Canada",1990]},R=function(){return[1516,68,1154605773,"China",1990]},L=function(){return[13670,74.7,10582082,"Cuba",1990]},N=function(){return[28599,75,4986705,"Finland",1990]},P=function(){return[29476,77.1,56943299,"France",1990]},Z=function(){return[31476,75.4,78958237,"Germany",1990]},w=function(){return[28666,78.1,254830,"Iceland",1990]},K=function(){return[1777,57.7,870601776,"India",1990]},J=function(){return[29550,79.1,122249285,"Japan",1990]},G=function(){return[2076,67.9,20194354,"North Korea",1990]},Q=function(){return[12087,72,42972254,"South Korea",1990]},Y=function(){return[24021,75.4,3397534,"New Zealand",1990]},H=function(){return[43296,76.8,4240375,"Norway",1990]},j=function(){return[10088,70.8,38195258,"Poland",1990]},k=function(){return[19349,69.6,147568552,"Russia",1990]},W=function(){return[10670,67.3,53994605,"Turkey",1990]},X=function(){return[26424,75.7,57110117,"United Kingdom",1990]},$=function(){return[37062,75.4,252847810,"United States",1990]},b=function(a,D,n,s,p,C,T,St,Ct,Mt,bt,At,It,Ot,zt,_t,Ft,Bt,Et){return[a,D,n,s,p,C,T,St,Ct,Mt,bt,At,It,Ot,zt,_t,Ft,Bt,Et]},V=function(){return[44056,81.8,23968973,"Australia",2015]},q=function(){return[43294,81.7,35939927,"Canada",2015]},tt=function(){return[13334,76.9,1376048943,"China",2015]},et=function(){return[21291,78.5,11389562,"Cuba",2015]},nt=function(){return[38923,80.8,5503457,"Finland",2015]},ot=function(){return[37599,81.9,64395345,"France",2015]},at=function(){return[44053,81.1,80688545,"Germany",2015]},it=function(){return[42182,82.8,329425,"Iceland",2015]},st=function(){return[5903,66.8,1311050527,"India",2015]},rt=function(){return[36162,83.5,126573481,"Japan",2015]},ct=function(){return[1390,71.4,25155317,"North Korea",2015]},lt=function(){return[34644,80.7,50293439,"South Korea",2015]},mt=function(){return[34186,80.6,4528526,"New Zealand",2015]},dt=function(){return[64304,81.6,5210967,"Norway",2015]},ut=function(){return[24787,77.3,38611794,"Poland",2015]},ht=function(){return[23038,73.13,143456918,"Russia",2015]},pt=function(){return[19360,76.5,78665830,"Turkey",2015]},ft=function(){return[38225,81.4,64715810,"United Kingdom",2015]},gt=function(){return[53354,79.1,321773631,"United States",2015]};let yt=(()=>{class a{_cdr;themeSelector;themes=(0,g.RC)();selectedTheme;config={tooltip:{show:!0},legend:{right:10,data:["1990","2015"]},xAxis:[{show:!0}],yAxis:[{show:!0}],series:[{name:"1990",data:[[28604,77,17096869,"Australia",1990],[31163,77.4,27662440,"Canada",1990],[1516,68,1154605773,"China",1990],[13670,74.7,10582082,"Cuba",1990],[28599,75,4986705,"Finland",1990],[29476,77.1,56943299,"France",1990],[31476,75.4,78958237,"Germany",1990],[28666,78.1,254830,"Iceland",1990],[1777,57.7,870601776,"India",1990],[29550,79.1,122249285,"Japan",1990],[2076,67.9,20194354,"North Korea",1990],[12087,72,42972254,"South Korea",1990],[24021,75.4,3397534,"New Zealand",1990],[43296,76.8,4240375,"Norway",1990],[10088,70.8,38195258,"Poland",1990],[19349,69.6,147568552,"Russia",1990],[10670,67.3,53994605,"Turkey",1990],[26424,75.7,57110117,"United Kingdom",1990],[37062,75.4,252847810,"United States",1990]],type:"scatter",itemStyle:{opacity:.75,color:"#007373"},symbolSize:n=>Math.sqrt(n[2])/500,label:{show:!0,formatter:n=>n.data[3],position:"top"}},{name:"2015",data:[[44056,81.8,23968973,"Australia",2015],[43294,81.7,35939927,"Canada",2015],[13334,76.9,1376048943,"China",2015],[21291,78.5,11389562,"Cuba",2015],[38923,80.8,5503457,"Finland",2015],[37599,81.9,64395345,"France",2015],[44053,81.1,80688545,"Germany",2015],[42182,82.8,329425,"Iceland",2015],[5903,66.8,1311050527,"India",2015],[36162,83.5,126573481,"Japan",2015],[1390,71.4,25155317,"North Korea",2015],[34644,80.7,50293439,"South Korea",2015],[34186,80.6,4528526,"New Zealand",2015],[64304,81.6,5210967,"Norway",2015],[24787,77.3,38611794,"Poland",2015],[23038,73.13,143456918,"Russia",2015],[19360,76.5,78665830,"Turkey",2015],[38225,81.4,64715810,"United Kingdom",2015],[53354,79.1,321773631,"United States",2015]],type:"scatter",itemStyle:{opacity:.75,color:"#1B98C6"},symbolSize:n=>Math.sqrt(n[2])/500,label:{show:!0,formatter:n=>n.data[3],position:"top"}}]};constructor(n,s){this._cdr=n,this.themeSelector=s}ngOnInit(){var n=this;return(0,r.Z)(function*(){n.selectedTheme=n.themeSelector.selected,n._cdr.markForCheck()})()}selectChartTheme(n){this.themeSelector.select(n)}symbolSize(n){return Math.sqrt(n[2])/500}static \u0275fac=function(s){return new(s||a)(t.Y36(t.sBO),t.Y36(f.n))};static \u0275cmp=t.Xpm({type:a,selectors:[["scatter-demo-basic"]],decls:14,vars:98,consts:[["layout","row","layout-align","start center"],["hide-xs","",1,"mat-subtitle-1","pad-left","pad-right","push-bottom-none"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"themeName"],[3,"trigger"],["tdTooltipFormatter",""],[3,"show","position","type","boundaryGap"],[3,"show","type"],["td-scatter","",3,"data","name","symbolSize"],[3,"value"],[4,"ngIf"],[1,"mat-caption","pad-left-sm"]],template:function(s,p){1&s&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Chart Theme: "),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-select",2),t.NdJ("valueChange",function(T){return p.selectedTheme=T})("valueChange",function(T){return p.selectChartTheme(T)}),t.YNc(5,_,2,2,"mat-option",3),t.qZA()()(),t.TgZ(6,"td-chart",4),t.ALo(7,"async"),t.TgZ(8,"td-chart-tooltip",5),t.YNc(9,B,1,1,"ng-template",6),t.qZA(),t._UZ(10,"td-chart-x-axis",7)(11,"td-chart-y-axis",8)(12,"td-chart-series",9)(13,"td-chart-series",9),t.qZA()),2&s&&(t.xp6(4),t.Q6J("value",p.selectedTheme),t.xp6(1),t.Q6J("ngForOf",p.themes),t.xp6(1),t.Udp("height",300,"px"),t.Q6J("themeName",t.lcZ(7,18,p.themeSelector.selected$)),t.xp6(2),t.Q6J("trigger","item"),t.xp6(2),t.Q6J("show",!0)("position","bottom")("type","value")("boundaryGap",!0),t.xp6(1),t.Q6J("show",!0)("type","value"),t.xp6(1),t.Q6J("data",t.rFY(39,b,[t.DdM(20,E),t.DdM(21,U),t.DdM(22,R),t.DdM(23,L),t.DdM(24,N),t.DdM(25,P),t.DdM(26,Z),t.DdM(27,w),t.DdM(28,K),t.DdM(29,J),t.DdM(30,G),t.DdM(31,Q),t.DdM(32,Y),t.DdM(33,H),t.DdM(34,j),t.DdM(35,k),t.DdM(36,W),t.DdM(37,X),t.DdM(38,$)]))("name","1990")("symbolSize",p.symbolSize),t.xp6(1),t.Q6J("data",t.rFY(78,b,[t.DdM(59,V),t.DdM(60,q),t.DdM(61,tt),t.DdM(62,et),t.DdM(63,nt),t.DdM(64,ot),t.DdM(65,at),t.DdM(66,it),t.DdM(67,st),t.DdM(68,rt),t.DdM(69,ct),t.DdM(70,lt),t.DdM(71,mt),t.DdM(72,dt),t.DdM(73,ut),t.DdM(74,ht),t.DdM(75,pt),t.DdM(76,ft),t.DdM(77,gt)]))("name","2015")("symbolSize",p.symbolSize))},dependencies:[v.L,S.O,A.$,M.HN,M.dA,I._,o.sg,o.O5,O.KE,c.gD,z.ey,d.Hw,o.Ov],changeDetection:0})}return a})();const vt=[{path:"",component:(()=>{class a{static \u0275fac=function(s){return new(s||a)};static \u0275cmp=t.Xpm({type:a,selectors:[["scatter-demo"]],decls:2,vars:2,consts:[[3,"demoId","demoTitle"]],template:function(s,p){1&s&&(t.TgZ(0,"demo-component",0),t._UZ(1,"scatter-demo-basic"),t.qZA()),2&s&&t.Q6J("demoId","scatter-demo-basic")("demoTitle","Basic")},dependencies:[h.z,yt]})}return a})()}];let Dt=(()=>{class a{static \u0275fac=function(s){return new(s||a)};static \u0275mod=t.oAB({type:a});static \u0275inj=t.cJS({imports:[i.Bz.forChild(vt),i.Bz]})}return a})();var Tt=e(96535);let xt=(()=>{class a{static \u0275fac=function(s){return new(s||a)};static \u0275mod=t.oAB({type:a});static \u0275inj=t.cJS({imports:[Tt.l,Dt,g.MX,m.NF,l.Po,y.gQ,o.ez,c.LD,d.Ps]})}return a})()},84770:(x,u,e)=>{e.d(u,{gQ:()=>m,_W:()=>c._});var o=e(96814),c=e(7287),d=e(65879);let m=(()=>{class l{static \u0275fac=function(t){return new(t||l)};static \u0275mod=d.oAB({type:l});static \u0275inj=d.cJS({imports:[o.ez]})}return l})()},7287:(x,u,e)=>{e.d(u,{_:()=>g});var o=e(65879),c=e(23421);const d=["td-scatter",""];let g=(()=>{class m extends c.R0{coordinateSystem;xAxisIndex;yAxisIndex;polarIndex;geoIndex;calendarIndex;hoverAnimation;legendHoverLink;symbol;symbolSize;symbolRotate;symbolKeepAspect;symbolOffset;large;largeThreshold;cursor;label;itemStyle;emphasis;progressive;progressiveThreshold;dimensions;encode;seriesLayoutBy;datasetIndex;markPoint;markLine;markArea;zlevel;z;silent;constructor(y){super("scatter",y)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,polarIndex:this.polarIndex,geoIndex:this.geoIndex,calendarIndex:this.calendarIndex,hoverAnimation:this.hoverAnimation,legendHoverLink:this.legendHoverLink,symbol:this.symbol,symbolSize:this.symbolSize,symbolRotate:this.symbolRotate,symbolKeepAspect:this.symbolKeepAspect,symbolOffset:this.symbolOffset,large:this.large,largeThreshold:this.largeThreshold,cursor:this.cursor,label:this.label,itemStyle:this.itemStyle,emphasis:this.emphasis,progressive:this.progressive,progressiveThreshold:this.progressiveThreshold,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z,silent:this.silent}}static \u0275fac=function(i){return new(i||m)(o.Y36(c.ij))};static \u0275cmp=o.Xpm({type:m,selectors:[["td-chart-series","td-scatter",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",polarIndex:"polarIndex",geoIndex:"geoIndex",calendarIndex:"calendarIndex",hoverAnimation:"hoverAnimation",legendHoverLink:"legendHoverLink",symbol:"symbol",symbolSize:"symbolSize",symbolRotate:"symbolRotate",symbolKeepAspect:"symbolKeepAspect",symbolOffset:"symbolOffset",large:"large",largeThreshold:"largeThreshold",cursor:"cursor",label:"label",itemStyle:"itemStyle",emphasis:"emphasis",progressive:"progressive",progressiveThreshold:"progressiveThreshold",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z",silent:"silent"},features:[o._Bn([{provide:c.R0,useExisting:(0,o.Gpc)(()=>m)}]),o.qOj],attrs:d,decls:0,vars:0,template:function(i,t){},encapsulation:2,changeDetection:0})}return m})()},52514:(x,u,e)=>{e.d(u,{Po:()=>m});var o=e(96814),d=(e(13063),e(65879));let m=(()=>{class l{static \u0275fac=function(t){return new(t||l)};static \u0275mod=d.oAB({type:l});static \u0275inj=d.cJS({imports:[o.ez]})}return l})()},13063:(x,u,e)=>{e.d(u,{G:()=>l,O:()=>y});var o=e(65879),c=e(23421),d=e(96814);const g=["toolboxContent"];function m(i,t){}let l=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275dir=o.lG2({type:i,selectors:[["ng-template","tdViewDataFormatter",""]]})}return i})(),y=(()=>{class i{_changeDetectorRef;_elementRef;_optionsService;_state={};config={};show=!0;trigger;orient;itemSize;itemGap;showTitle=!0;label;feature;iconStyle;zlevel;z;transitionDuration=.5;left="auto";top="auto";right="auto";bottom="auto";width="auto";height="auto";formatterTemplate;fullTemplate;constructor(h,r,f){this._changeDetectorRef=h,this._elementRef=r,this._optionsService=f}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const h=(0,c.t8)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",h)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){this.formatterTemplate&&(this.feature={...this.feature,dataView:{...this.feature?.dataView,optionToContent:this._optionToContentFormatter()}})}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}static \u0275fac=function(r){return new(r||i)(o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(c.ij))};static \u0275cmp=o.Xpm({type:i,selectors:[["td-chart-toolbox"]],contentQueries:function(r,f,v){if(1&r&&o.Suo(v,l,5,o.Rgc),2&r){let S;o.iGM(S=o.CRH())&&(f.formatterTemplate=S.first)}},viewQuery:function(r,f){if(1&r&&o.Gf(g,7),2&r){let v;o.iGM(v=o.CRH())&&(f.fullTemplate=v.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[o.TTD],decls:2,vars:1,consts:[[3,"ngTemplateOutlet"],["toolboxContent",""]],template:function(r,f){1&r&&o.YNc(0,m,0,0,"ng-template",0,1,o.W1O),2&r&&o.Q6J("ngTemplateOutlet",f.formatterTemplate)},dependencies:[d.tP],encapsulation:2,changeDetection:0})}return i})()}}]);
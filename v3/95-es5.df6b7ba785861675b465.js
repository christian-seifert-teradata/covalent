!function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{OMbk:function(n,t,d){"use strict";d.r(t),d.d(t,"FlavoredMarkdownDemoModule",function(){return O});var a,r,c,i,l,s,m,b,p=d("SVse"),u=d("PdbM"),f=d("iInd"),v=d("8Y7J"),w=d("MJ5V"),k=d("v+MA"),y=((c=function e(){o(this,e),this.basicFlavoredMarkdown="\n    ## Checkboxes\n\n    - [x] My checkbox\n    - [x] My second checkbox\n    - [ ] My empty checkbox\n\n    ## List\n\n    + One\n      + subline\n    + Two\n    + Three\n      + subline\n      + second subline\n  "}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=v.Ib({type:c,selectors:[["flavored-markdown-demo-basic"]],decls:2,vars:1,template:function(e,o){1&e&&(v.Ub(0,"td-flavored-markdown"),v.Oc(1),v.Tb()),2&e&&(v.Cb(1),v.Pc(o.basicFlavoredMarkdown))},directives:[k.a],styles:[""]}),c),h=((r=function e(){o(this,e),this.inlineFlavoredMarkdown="\n    ## Inline\n\n    Inline piece of code `var obj: Type = bla;`\n\n    ## Snippet\n\n    ```typescript\n      @Component({\n        selector: 'demo',\n        styleUrls: ['./demo.component.scss'],\n        templateUrl: './demo.component.html',\n      })\n      export class DemoComponent {\n        property: Type;\n      }\n    ```\n  ",this.tooltipsConfig={copy:"Copiar",copied:"Copiado"}}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=v.Ib({type:r,selectors:[["flavored-markdown-demo-inline"]],decls:2,vars:3,consts:[[3,"copyCodeToClipboard","copyCodeTooltips"]],template:function(e,o){1&e&&(v.Ub(0,"td-flavored-markdown",0),v.Oc(1),v.Tb()),2&e&&(v.mc("copyCodeToClipboard",!0)("copyCodeTooltips",o.tooltipsConfig),v.Cb(1),v.Qc(" ",o.inlineFlavoredMarkdown,"\n"))},directives:[k.a],styles:[""]}),r),C=((a=function e(){o(this,e),this.tablesFlavoredMarkdown="\n    | Tables   |      Are      |  Cool |\n    |----------|--------------:|------:|\n    | col 1 is | left-aligned  | $1600 |\n    | col 2 is | right-aligned |   $12 |\n    | col 3 is | right-aligned |    $1 |\n  "}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=v.Ib({type:a,selectors:[["flavored-markdown-demo-tables"]],decls:2,vars:1,template:function(e,o){1&e&&(v.Ub(0,"td-flavored-markdown"),v.Oc(1),v.Tb()),2&e&&(v.Cb(1),v.Pc(o.tablesFlavoredMarkdown))},directives:[k.a],styles:[""]}),a),T=d("zHaW"),M=((i=function(){function n(e){o(this,n),this._snackBar=e,this.buttonsFlavoredMarkdown='\n    ## Buttons\n\n    [Go to Mars](#data={"planet": "mars"})\n    ---\n    [Go to Jupiter](#data={"planet": "Jupiter"})\n  '}var t,d,a;return t=n,(d=[{key:"handleButtonClicked",value:function(e){this._snackBar.open("Button clicked: "+JSON.stringify(e),void 0,{duration:2e3})}}])&&e(t.prototype,d),a&&e(t,a),n}()).\u0275fac=function(e){return new(e||i)(v.Ob(T.a))},i.\u0275cmp=v.Ib({type:i,selectors:[["flavored-markdown-demo-buttons"]],decls:2,vars:1,consts:[[3,"buttonClicked"]],template:function(e,o){1&e&&(v.Ub(0,"td-flavored-markdown",0),v.cc("buttonClicked",function(e){return o.handleButtonClicked(e)}),v.Oc(1),v.Tb()),2&e&&(v.Cb(1),v.Pc(o.buttonsFlavoredMarkdown))},directives:[k.a],styles:[""]}),i),I=d("Xva0"),g=((l=function e(){o(this,e)}).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=v.Ib({type:l,selectors:[["flavored-markdown-demo-loader"]],decls:1,vars:1,consts:[[3,"url"]],template:function(e,o){1&e&&v.Pb(0,"td-flavored-markdown-loader",0),2&e&&v.mc("url","https://github.com/angular/angular/blob/master/README.md")},directives:[I.a],styles:[""]}),l),P=[{path:"",component:(s=function e(){o(this,e)},s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=v.Ib({type:s,selectors:[["flavored-markdown-demo"]],decls:10,vars:10,consts:[[3,"demoId","demoTitle"]],template:function(e,o){1&e&&(v.Ub(0,"demo-component",0),v.Pb(1,"flavored-markdown-demo-basic"),v.Tb(),v.Ub(2,"demo-component",0),v.Pb(3,"flavored-markdown-demo-inline"),v.Tb(),v.Ub(4,"demo-component",0),v.Pb(5,"flavored-markdown-demo-tables"),v.Tb(),v.Ub(6,"demo-component",0),v.Pb(7,"flavored-markdown-demo-buttons"),v.Tb(),v.Ub(8,"demo-component",0),v.Pb(9,"flavored-markdown-demo-loader"),v.Tb()),2&e&&(v.mc("demoId","flavored-markdown-demo-basic")("demoTitle","Checkboxes & Lists"),v.Cb(2),v.mc("demoId","flavored-markdown-demo-inline")("demoTitle","Inline Code & Snippets"),v.Cb(2),v.mc("demoId","flavored-markdown-demo-tables")("demoTitle","Tables"),v.Cb(2),v.mc("demoId","flavored-markdown-demo-buttons")("demoTitle","Buttons"),v.Cb(2),v.mc("demoId","flavored-markdown-demo-loader")("demoTitle","Flavored Markdown Loader"))},directives:[w.a,y,h,C,M,g],styles:[""]}),s)}],U=((m=function e(){o(this,e)}).\u0275mod=v.Mb({type:m}),m.\u0275inj=v.Lb({factory:function(e){return new(e||m)},imports:[[f.g.forChild(P)],f.g]}),m),F=d("Krbs"),O=((b=function e(){o(this,e)}).\u0275mod=v.Mb({type:b}),b.\u0275inj=v.Lb({factory:function(e){return new(e||b)},imports:[[F.a,U,u.a,T.b,p.c]]}),b)}}])}();
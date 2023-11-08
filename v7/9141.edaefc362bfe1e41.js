"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[9141],{49141:(ge,u,i)=>{i.r(u),i.d(u,{DynamicFormsDemoModule:()=>fe});var l=i(96814),c=i(56223),_=i(32296),f=i(95195),g=i(26385),s=i(22255),y=i(52787),e=i(65879),T=i(31791),r=i(10578);let D=(()=>{class t{arrayElements=[{name:"array",type:s.J0.Array,selections:["Test1","Test2","Test3","Test4"],default:"Test1"},{name:"requiredSelect",type:s.Xl.Select,selections:["Test1","Test2","Test3","Test4"],required:!0},{name:"requiredMultipleSelect",type:s.Xl.Select,multiple:!0,selections:["Test1","Test2","Test3","Test4"],required:!0},{name:"valueLabelSelect",hint:"this is a select hint",type:s.Xl.Select,selections:[{label:"Test1",value:1},{label:"Test2",value:2},{label:"Test3",value:3},{label:"Test4",value:4}],required:!0}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-array"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(o,a){1&o&&e._UZ(0,"td-dynamic-forms",0),2&o&&e.Q6J("elements",a.arrayElements)},dependencies:[r.k]})}return t})();var d=i(35412);function x(t,m){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Min length value: ",n.minLength,"")}}function C(t,m){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Max length value: ",n.minLength,"")}}function Z(t,m){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,x,2,1,"span",3),e.YNc(2,C,2,1,"span",3),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",n.hasError("maxlength"))}}function h(t,m){if(1&t&&e.YNc(0,Z,3,2,"span",3),2&t){const n=m.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function F(t,m){1&t&&e.YNc(0,h,1,1,"ng-template",2),2&t&&e.Q6J("tdDynamicFormsError",m.$implicit.name)}let v=(()=>{class t{textElements=[{name:"input",hint:"this is an input hint",type:s.Xl.Input,required:!1,flex:50},{name:"requiredInput",label:"Input Label",placeholder:"Input Placeholder",type:s.Xl.Input,required:!0,flex:50},{name:"textLength",label:"Text Length",type:s.Xl.Input,minLength:4,maxLength:12,flex:50},{name:"text",type:s.J0.Text,required:!1,default:"Default",flex:50,disabled:!0},{name:"textarea",hint:"this is a textarea hint",type:s.Xl.Textarea,required:!1},{name:"requiredPassword",label:"Password Label",type:s.Xl.Password,required:!0}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-text"]],decls:2,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(o,a){1&o&&(e.TgZ(0,"td-dynamic-forms",0),e.YNc(1,F,1,1,"ng-template",1),e.qZA()),2&o&&(e.Q6J("elements",a.textElements),e.xp6(1),e.Q6J("ngForOf",a.textElements))},dependencies:[r.k,d.jN,l.sg,l.O5]})}return t})(),E=(()=>{class t{booleanElements=[{name:"boolean",label:"Boolean Label",type:s.J0.Boolean,hint:"this is a boolean",default:!1},{name:"slideToggle",type:s.Xl.SlideToggle,hint:"this is a slide toggle",default:!0},{name:"checkbox",type:s.Xl.Checkbox,hint:"this is a checkbox"}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-boolean"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(o,a){1&o&&e._UZ(0,"td-dynamic-forms",0),2&o&&e.Q6J("elements",a.booleanElements)},dependencies:[r.k]})}return t})();var J=i(84535);function b(t,m){}const Q=function(t,m){return{control:t,errors:m}};function V(t,m){if(1&t&&(e.TgZ(0,"div",2),e.YNc(1,b,0,0,"ng-template",3),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",n.errorMessageTemplate)("ngTemplateOutletContext",e.WLB(2,Q,n.control,n.control.errors))}}function N(t,m){1&t&&(e.TgZ(0,"span"),e._uU(1,"This field cannot be empty"),e.qZA())}function A(t,m){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,N,2,0,"span",3),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("required"))}}function I(t,m){if(1&t&&(e._UZ(0,"br"),e._uU(1,"Validation: "),e.YNc(2,A,2,1,"span",3)),2&t){const n=m.control;e.xp6(2),e.Q6J("ngIf",n.touched||!n.pristine)}}function q(t,m){1&t&&e.YNc(0,I,3,1,"ng-template",2),2&t&&e.Q6J("tdDynamicFormsError",m.$implicit.name)}let U=(()=>{class t{control;selections=[];errorMessageTemplate;placeholder;static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["td-dynamic-input-test"]],decls:2,vars:4,consts:[["ngDefaultControl","",3,"formControl"],["class","tc-red-600",4,"ngIf"],[1,"tc-red-600"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,a){1&o&&(e._UZ(0,"td-code-editor",0),e.YNc(1,V,2,5,"div",1)),2&o&&(e.Udp("height",300,"px"),e.Q6J("formControl",a.control),e.xp6(1),e.Q6J("ngIf",a.errorMessageTemplate&&a.control.errors))},dependencies:[J.dD,l.O5,l.tP,c.Fj,c.JJ,c.oH],encapsulation:2})}return t})(),Y=(()=>{class t{customElements=[{name:"custom",type:U,default:"SELECT * from dynamic.element",flex:100,validators:[{validator:n=>n.value?.length?null:{required:!0}}],customConfig:{placeholder:"Lists"}}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-custom-elements"]],decls:8,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(o,a){1&o&&(e._uU(0,"Using td-code-editor component as a custom dynamic element "),e._UZ(1,"br")(2,"br"),e.TgZ(3,"td-dynamic-forms",0),e.YNc(4,q,1,1,"ng-template",1),e.qZA(),e.TgZ(5,"em"),e._uU(6,"Try typing then leaving field blank to see error validation"),e.qZA(),e._UZ(7,"br")),2&o&&(e.xp6(3),e.Q6J("elements",a.customElements),e.xp6(1),e.Q6J("ngForOf",a.customElements))},dependencies:[r.k,d.jN,l.sg,l.O5]})}return t})();const w=["manualValidateForm"];function X(t,m){1&t&&(e.TgZ(0,"span"),e._uU(1,"Must be even."),e.qZA())}function M(t,m){1&t&&(e.TgZ(0,"span"),e._uU(1,"Must be odd."),e.qZA())}function O(t,m){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Must be greater than ",n.min,".")}}function S(t,m){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Must be less than ",n.max,".")}}function j(t,m){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,X,2,0,"span",7),e.YNc(2,M,2,0,"span",7),e.YNc(3,O,2,1,"span",7),e.YNc(4,S,2,1,"span",7),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("even")),e.xp6(1),e.Q6J("ngIf",n.hasError("odd")),e.xp6(1),e.Q6J("ngIf",n.hasError("min")),e.xp6(1),e.Q6J("ngIf",n.hasError("max"))}}function L(t,m){if(1&t&&e.YNc(0,j,5,4,"span",7),2&t){const n=m.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function $(t,m){1&t&&e.YNc(0,L,1,1,"ng-template",2),2&t&&e.Q6J("tdDynamicFormsError",m.$implicit.name)}function B(t,m){1&t&&(e.TgZ(0,"span"),e._uU(1,"Must contain at least 1 number."),e.qZA())}function k(t,m){1&t&&(e.TgZ(0,"span"),e._uU(1,"Password needs from 8 - 20 characters."),e.qZA())}function P(t,m){1&t&&(e.TgZ(0,"span"),e._uU(1,"Need at least one special character (!, @, #, $, %)."),e.qZA())}function z(t,m){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,B,2,0,"span",7),e.YNc(2,k,2,0,"span",7),e.YNc(3,P,2,0,"span",7),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("oneNumber")),e.xp6(1),e.Q6J("ngIf",n.hasError("length")),e.xp6(1),e.Q6J("ngIf",n.hasError("oneSpecialChar"))}}function H(t,m){if(1&t&&e.YNc(0,z,4,3,"span",7),2&t){const n=m.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function R(t,m){1&t&&(e.TgZ(0,"span"),e._uU(1,"Only hex color characters."),e.qZA())}function W(t,m){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,R,2,0,"span",7),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("pattern"))}}function G(t,m){if(1&t&&e.YNc(0,W,2,1,"span",7),2&t){const n=m.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function K(t,m){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).control;e.xp6(1),e.Oqu(n.errors.consonants)}}function ee(t,m){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,K,2,1,"span",7),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("consonants"))}}function te(t,m){if(1&t&&e.YNc(0,ee,2,1,"span",7),2&t){const n=m.control;e.Q6J("ngIf",n.touched||!n.pristine)}}let ne=(()=>{class t{manualValidateForm;customValidationElements=[{name:"evenElement",label:"Even Number",type:s.J0.Number,validators:[{validator:n=>!n.value&&0!==n.value||n.value%2==0?null:{even:!0}}]}];multipleValidatorTypes=[{name:"passwordElement",label:"Password",type:s.Xl.Password,required:!0,validators:[{validator:n=>/\d/i.test(n.value)?null:{oneNumber:!0}},{validator:n=>n.value&&n.value.length>=8&&n.value.length<=20?null:{length:!0}},{validator:n=>new RegExp("["+["!","@","#","$","%"].join("").toString()+"]","g").test(n.value)?null:{oneSpecialChar:!0}}]}];angularValidators=[{name:"hexColorElement",label:"Hexidecimal Color",type:s.J0.Text,validators:[{validator:c.kI.pattern(/^#[A-Fa-f0-9]{6}$/)}]}];manualValidatorElement=[{name:"vowelsElement",label:"Vowels only",type:s.J0.Text,required:!0}];submitManualValidator(){const n="vowelsElement";this.manualValidateForm.controls[n].value.match(/[^aeiou]/)&&this.manualValidateForm.controls[n].setErrors({consonants:"Only vowel characters. Do not use any consonants."})}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-custom-validation"]],viewQuery:function(o,a){if(1&o&&e.Gf(w,7),2&o){let p;e.iGM(p=e.CRH())&&(a.manualValidateForm=p.first)}},decls:23,vars:7,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],["tdDynamicFormsError","hexColorElement"],["manualValidateForm",""],["tdDynamicFormsError","vowelsElement"],["mat-raised-button","","color","primary",1,"text-upper",3,"disabled","click"],[4,"ngIf"]],template:function(o,a){if(1&o&&(e.TgZ(0,"h4"),e._uU(1,"Custom Validation"),e.qZA(),e.TgZ(2,"td-dynamic-forms",0),e.YNc(3,$,1,1,"ng-template",1),e.qZA(),e._UZ(4,"mat-divider"),e.TgZ(5,"h4"),e._uU(6,"Multiple Validators"),e.qZA(),e.TgZ(7,"td-dynamic-forms",0),e.YNc(8,H,1,1,"ng-template",2),e.qZA(),e._UZ(9,"mat-divider"),e.TgZ(10,"h4"),e._uU(11,"Angular Validators"),e.qZA(),e.TgZ(12,"td-dynamic-forms",0),e.YNc(13,G,1,1,"ng-template",3),e.qZA(),e._UZ(14,"mat-divider"),e.TgZ(15,"h4"),e._uU(16,"Manual Validators"),e.qZA(),e.TgZ(17,"td-dynamic-forms",0,4),e.YNc(19,te,1,1,"ng-template",5),e.TgZ(20,"mat-card-actions")(21,"button",6),e.NdJ("click",function(){return a.submitManualValidator()}),e._uU(22," Submit "),e.qZA()()()),2&o){const p=e.MAs(18);e.xp6(2),e.Q6J("elements",a.customValidationElements),e.xp6(1),e.Q6J("ngForOf",a.customValidationElements),e.xp6(4),e.Q6J("elements",a.multipleValidatorTypes),e.xp6(1),e.Q6J("tdDynamicFormsError","passwordElement"),e.xp6(4),e.Q6J("elements",a.angularValidators),e.xp6(5),e.Q6J("elements",a.manualValidatorElement),e.xp6(4),e.Q6J("disabled",!p.valid)}},dependencies:[r.k,d.jN,l.sg,l.O5,_.lW,f.hq,g.d]})}return t})(),oe=(()=>{class t{dateElements=[{name:"dateInput",label:"Select a date",hint:"this is a datepicker hint",type:s.Xl.Datepicker,min:new Date(2018,1,1).setHours(0,0,0,0)}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-date"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(o,a){1&o&&e._UZ(0,"td-dynamic-forms",0),2&o&&e.Q6J("elements",a.dateElements)},dependencies:[r.k]})}return t})(),me=(()=>{class t{fileElements=[{name:"fileInput",label:"Browse a file",hint:"this is a file input hint",type:s.Xl.FileInput}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-file-input"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(o,a){1&o&&e._UZ(0,"td-dynamic-forms",0),2&o&&e.Q6J("elements",a.fileElements)},dependencies:[r.k]})}return t})();function ae(t,m){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Min value: ",n.min,"")}}function se(t,m){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Max value: ",n.max,"")}}function ie(t,m){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,ae,2,1,"span",3),e.YNc(2,se,2,1,"span",3),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("min")),e.xp6(1),e.Q6J("ngIf",n.hasError("max"))}}function le(t,m){if(1&t&&e.YNc(0,ie,3,2,"span",3),2&t){const n=m.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function re(t,m){1&t&&e.YNc(0,le,1,1,"ng-template",2),2&t&&e.Q6J("tdDynamicFormsError",m.$implicit.name)}let ce=(()=>{class t{numberElements=[{name:"number",label:"Number",type:s.J0.Number,required:!0,min:18,max:70},{name:"slider",type:s.Xl.Slider,hint:"this is a slider hint",min:18,max:70}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-number"]],decls:2,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(o,a){1&o&&(e.TgZ(0,"td-dynamic-forms",0),e.YNc(1,re,1,1,"ng-template",1),e.qZA()),2&o&&(e.Q6J("elements",a.numberElements),e.xp6(1),e.Q6J("ngForOf",a.numberElements))},dependencies:[r.k,d.jN,l.sg,l.O5]})}return t})();const pe=[{path:"",component:(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo"]],decls:16,vars:16,consts:[[3,"demoId","demoTitle"]],template:function(o,a){1&o&&(e.TgZ(0,"demo-component",0),e._UZ(1,"dynamic-forms-demo-text"),e.qZA(),e.TgZ(2,"demo-component",0),e._UZ(3,"dynamic-forms-demo-number"),e.qZA(),e.TgZ(4,"demo-component",0),e._UZ(5,"dynamic-forms-demo-boolean"),e.qZA(),e.TgZ(6,"demo-component",0),e._UZ(7,"dynamic-forms-demo-date"),e.qZA(),e.TgZ(8,"demo-component",0),e._UZ(9,"dynamic-forms-demo-array"),e.qZA(),e.TgZ(10,"demo-component",0),e._UZ(11,"dynamic-forms-demo-file-input"),e.qZA(),e.TgZ(12,"demo-component",0),e._UZ(13,"dynamic-forms-demo-custom-validation"),e.qZA(),e.TgZ(14,"demo-component",0),e._UZ(15,"dynamic-forms-demo-custom-elements"),e.qZA()),2&o&&(e.Q6J("demoId","dynamic-forms-demo-text")("demoTitle","Text / Textarea / Text Input Elements"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-number")("demoTitle","Number Input / Slider Elements"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-boolean")("demoTitle","Boolean / Slide Toggle / Checkbox Elements"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-date")("demoTitle","Date Element"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-array")("demoTitle","Array / Select Element"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-file-input")("demoTitle","File Input Element"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-custom-validation")("demoTitle","Custom Validations"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-custom-elements")("demoTitle","Custom Elements"))},dependencies:[T.z,D,v,E,Y,ne,oe,me,ce]})}return t})()}];let de=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[y.Bz.forChild(pe),y.Bz]})}return t})();var ue=i(96535),_e=i(91694);let fe=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[ue.l,de,s.gd,_e.T,l.ez,c.u5,c.UX,_.ot,f.QW,g.t]})}return t})()}}]);
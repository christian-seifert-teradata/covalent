import{c as t}from"./esm-c1b900f0.js";import{A as c,C as e,M as s}from"./chunk-HLWAVYOI-5d97ca33.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-27356749.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-7a3ba272.js";import"./index-11d98b33.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function r(){return r=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(a[u]=l[u])}return a},r.apply(this,arguments)}const b={},d="wrapper";function i({components:a,...n}){return t(d,r({},b,n,{components:a,mdxType:"MDXLayout"}),t(s,{title:"Components/Button",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("style",null,`
  cv-button {
    margin-right: 8px;
  }
  .docs-story div:first-of-type {
    text-align: center;
  }
  #story--example-button--outlined,
  #story--example-button--text {
    margin-right: 8px;
  }
  cv-button[outlined].destructive {
    margin-right: 4rem;
  }
  `),t("h1",null,"Buttons"),t("h2",null,"Basics"),t("ul",null,t("li",{parentName:"ul"},"Each page can have only one primary action button"),t("li",{parentName:"ul"},"It is common and okay for some pages to have no primary action"),t("li",{parentName:"ul"},"Include an icon in your button only in specific circumstances")),t(e,{mdxSource:"%0A%3Ccv-button%20id=%22text-button%22%20text%20label=%22Text%20button%22%3E%3C/cv-button%3E%0A%0A%3Ccv-button%20id=%22outlined-button%22%20outlined%20label=%22Outlined%20button%22%3E%3C/cv-button%3E%0A%0A%3Ccv-button%20id=%22contained-button%22%20raised%20label=%22Contained%20button%22%3E%3C/cv-button%3E%0A",mdxType:"Canvas"},t("cv-button",{id:"text-button",text:!0,label:"Text button"}),t("cv-button",{id:"outlined-button",outlined:!0,label:"Outlined button"}),t("cv-button",{id:"contained-button",raised:!0,label:"Contained button"})),t("hr",null),t("h2",null,"Anatomy"),t("p",null,"Buttons contain a text label and optional icon."),t(e,{mdxSource:"%0A%3Cform%3E%0A%20%20%20%20%3Ccv-button%20id=%22no-icon%22%20raised%20label=%22No%20icon%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20id=%22left-icon%22%20raised%20label=%22Left%20icon%22%20icon=%22sailing%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20id=%22right-icon%22%20raised%20label=%22Right%20icon%22%20icon=%22sailing%22%20trailingIcon=%22true%22%3E%3C/cv-button%3E%0A%20%20%3C/form%3E%0A",mdxType:"Canvas"},t("form",null,t("cv-button",{id:"no-icon",raised:!0,label:"No icon"}),t("cv-button",{id:"left-icon",raised:!0,label:"Left icon",icon:"sailing"}),t("cv-button",{id:"right-icon",raised:!0,label:"Right icon",icon:"sailing",trailingIcon:"true"}))),t("h3",null,"Spacing"),t("p",null,"Separate all buttons with an 8px gap."),t(e,{mdxSource:"%0A%3Cform%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%3C/form%3E%0A",mdxType:"Canvas"},t("form",null,t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{outlined:!0,label:"Button"}))),t("hr",null),t("h2",null,"Placement"),t("p",null,"Place the primary action to the right, followed by secondary actions."),t("h4",null,"Sequence"),t("ol",null,t("li",{parentName:"ol"},t("p",{parentName:"li"},"Primary action button (if any)"),t("p",{parentName:"li"},"Many pages will not have primary actions. This is OK.")),t("li",{parentName:"ol"},t("p",{parentName:"li"},"Secondary action buttons")),t("li",{parentName:"ol"},t("p",{parentName:"li"},"Lesser functions as icon buttons"))),t(e,{mdxSource:"%0A%3Cform%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20raised%20label=%22Primary%22%20class=%22primary%20accent%22%3E%3C/cv-button%3E%0A%20%20%3C/form%3E%0A",mdxType:"Canvas"},t("form",null,t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{raised:!0,label:"Primary",class:"primary accent"}))),t("h3",null,"In footers"),t("p",null,"In footers (such as card, dialog, page, or sheet footers) align all buttons to the right, but place destructive actions to the left to minimize accidental clicks."),t(e,{mdxSource:"%0A%3Cform%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Delete%22%20class=%22destructive%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20raised%20label=%22Primary%22%20class=%22primary%20accent%22%3E%3C/cv-button%3E%0A%20%20%3C/form%3E%0A",mdxType:"Canvas"},t("form",null,t("cv-button",{outlined:!0,label:"Delete",class:"destructive"}),t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{raised:!0,label:"Primary",class:"primary accent"}))),t("hr",null),t("h2",null,"Styling"),t("p",null,"Use “default” outline buttons for everything except the primary action (if any)."),t(e,{mdxSource:"%0A%3Cform%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%3C/form%3E%0A",mdxType:"Canvas"},t("form",null,t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{outlined:!0,label:"Button"}))),t("h3",null,"Primary action"),t("p",null,"If the page has a primary action, use an “accent” contained button."),t(e,{mdxSource:"%0A%3Cform%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20raised%20label=%22Primary%22%20class=%22primary%20accent%22%3E%3C/cv-button%3E%0A%20%20%3C/form%3E%0A",mdxType:"Canvas"},t("form",null,t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{raised:!0,label:"Primary",class:"primary accent"}))),t("h3",null,"Destructive action"),t("h4",null,"When the primary action is destructive"),t("p",null,"If the primary action is a destructive one (for example, it deletes some data), then it uses the negative color."),t(e,{mdxSource:"%0A%3Cform%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20raised%20label=%22Delete%22%20class=%22destructive%20primary%22%3E%3C/cv-button%3E%0A%20%20%3C/form%3E%0A",mdxType:"Canvas"},t("form",null,t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{raised:!0,label:"Delete",class:"destructive primary"}))),t("h4",null,"When the destructive action is not the primary action"),t("p",null,"If the destructive action is not the primary action, do not use the negative color. This calls extra attention to it, and we want the focus to remain on the primary action."),t(e,{mdxSource:"%0A%3Cform%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Delete%22%20class=%22destructive%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20outlined%20label=%22Button%22%3E%3C/cv-button%3E%0A%20%20%20%20%3Ccv-button%20raised%20label=%22Primary%22%20class=%22primary%20accent%22%3E%3C/cv-button%3E%0A%20%20%3C/form%3E%0A",mdxType:"Canvas"},t("form",null,t("cv-button",{outlined:!0,label:"Delete",class:"destructive"}),t("cv-button",{outlined:!0,label:"Button"}),t("cv-button",{raised:!0,label:"Primary",class:"primary accent"}))))}i.isMDXComponent=!0;const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const o={title:"Components/Button",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]},v={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>t(c,{mdxStoryNameToKey:v,mdxComponentAnnotations:o},t(i,null))};const T=["__page"];export{T as __namedExportsOrder,m as __page,o as default};
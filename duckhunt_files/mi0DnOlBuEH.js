if (self.CavalryLogger) { CavalryLogger.start_js(["YdlVE"]); }

__d("FocusGroup.react",["FocusManager.react","React","ReactEventsKeyboard","react","setElementCanTab"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("FocusManager.react").focusElement,i=b("React").useContext,j=b("React").useRef,k=b("ReactEventsKeyboard").useKeyboard;function l(a,c,d,e){c=c.DO_NOT_USE_queryFirstNode(a);c!==null&&(b("setElementCanTab")(c,!0),h(c,e),d.preventDefault())}var m=5;function n(a,b){for(var c=0;c<a.length;c++){var d=a[c];if(d&&d.scopeRef.current===b)return c}return-1}function o(a,b,c){__p&&__p();var d=a.scopeRef.current;if(d===null)return null;if(c!==null){d=n(c,b);b=a.wrap;a=r(c,d-1);return!a&&b===!0?r(c,c.length-1):a}return null}function p(a,b,c){__p&&__p();var d=a.scopeRef.current;if(d===null)return null;if(c.length>0){d=n(c,b);b=a.wrap;a=q(c,d+1);return!a&&b===!0?q(c,0):a}return null}function q(a,b){__p&&__p();var c=a.length;if(b>c)return null;b=b;while(b<c){var d=a[b];if(d!==null&&d.disabled!==!0)return d.scopeRef.current;b++}return null}function r(a,b){b=b;while(b>=0){var c=a[b];if(c!==null&&c.disabled!==!0)return c.scopeRef.current;b--}return null}function s(a){var b=a.altKey,c=a.ctrlKey,d=a.metaKey;a=a.shiftKey;return b===!0||c===!0||d===!0||a===!0}function a(a){__p&&__p();var c=(g||(g=b("react"))).unstable_createScope(),d=g.createContext(null),e=g.createContext(null);function f(a){var f=a.children,h=a.portrait,i=a.wrap,k=a.tabScopeQuery,l=a.allowModifiers;a=a.pageJumpSize;a=a===void 0?m:a;var n=j(null);return(g||(g=b("react"))).jsx(d.Provider,{value:{scopeRef:n,portrait:h,wrap:i,tabScopeQuery:k,allowModifiers:l,pageJumpSize:a,ItemContext:e},children:g.jsx(c,{ref:n,children:f})})}function h(f){__p&&__p();var h=f.children,m=f.disabled,t=f.onKeyDown,u=j(null),v=i(d);f=k({onKeyDown:function(c){__p&&__p();var d=u.current;if(d!==null&&v!==null){var f=v.portrait,g=v.scopeRef.current,h=c.key;if(h==="Tab"&&g!==null){var i=v.tabScopeQuery;if(i){var j=document.activeElement;i=g.DO_NOT_USE_queryAllNodes(i);if(i!==null)for(var k=0;k<i.length;k++){var m=i[k];m!==j?b("setElementCanTab")(m,!1):b("setElementCanTab")(m,!0)}}c.continuePropagation();return}if(s(c)){m=v.allowModifiers;if(m!==!0){c.continuePropagation();return}}if(g===null){c.continuePropagation();return}switch(h){case"Home":j=g.getChildContextValues(e);k=q(j,0);if(k){l(a,k,c,!1);return}break;case"End":i=g.getChildContextValues(e);m=r(i,i.length-1);if(m){l(a,m,c,!1);return}break;case"PageUp":h=g.getChildContextValues(e);j=v.pageJumpSize;k=n(h,d);i=q(h,Math.max(0,k-j));if(i){l(a,i,c,!1);return}break;case"PageDown":m=g.getChildContextValues(e);h=v.pageJumpSize;k=n(m,d);j=r(m,Math.min(m.length-1,k+h));if(j){l(a,j,c,!1);return}break;case"ArrowUp":if(f){i=g.getChildContextValues(e);m=c.metaKey||c.ctrlKey?q(i,0):o(v,d,i);if(m){l(a,m,c,!0);return}}break;case"ArrowDown":if(f){k=g.getChildContextValues(e);h=c.metaKey||c.ctrlKey?r(k,k.length-1):p(v,d,k);if(h){l(a,h,c,!0);return}}break;case"ArrowLeft":if(!f){j=g.getChildContextValues(e);i=c.metaKey||c.ctrlKey?q(j,0):o(v,d,j);if(i){l(a,i,c,!0);return}}break;case"ArrowRight":if(!f){m=g.getChildContextValues(e);k=c.metaKey||c.ctrlKey?r(m,m.length-1):p(v,d,m);if(k){l(a,k,c,!0);return}}break}}t&&t(c);c.continuePropagation()}});return(g||(g=b("react"))).jsx(e.Provider,{value:{scopeRef:u,disabled:m},children:g.jsx(c,{DEPRECATED_flareListeners:f,ref:u,children:h})})}return[f,h]}e.exports={createFocusGroup:a}}),null);
__d("CometMenuFocusGroup",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","React","TabbableScopeQuery.react"],(function(a,b,c,d,e,f,g){"use strict";c=b("FocusGroup.react").createFocusGroup;d=c(b("TabbableScopeQuery.react"));var h=d[0];f=d[1];function a(a){var c=[{command:{key:b("CometKeys").UP},description:g._("Previous item"),handler:function(){}},{command:{key:b("CometKeys").DOWN},description:g._("Next item"),handler:function(){}}];return b("React").jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:c,children:b("React").jsx(h,babelHelpers["extends"]({},a))})}e.exports={FocusGroup:a,FocusItem:f}}),null);
__d("CometMenuItemBaseRoleContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("CometSeparatorMenuItem.react",["CometMenuItemBaseRoleContext","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(a,c){a=g(b("CometMenuItemBaseRoleContext"));return b("React").jsx("div",{className:"dhix69tm tvmbv18p wkznzc2l aahdfvyu l6v480f0",ref:c,role:a==="menuitem"?"separator":"presentation"})}e.exports=b("React").forwardRef(a)}),null);
__d("CometMenuBase.react",["BaseScrollableArea.react","CometErrorBoundary.react","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometPopover.react","CometSeparatorMenuItem.react","React","TabbableScopeQuery.react","TetraTextPairing.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={listItem:{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",display:"j83agx80",flexDirection:"btwxx1t3",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr"},root:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"cbu4d94t",paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"sj5x9vvc",paddingStart:"a8nywdso",scrollPaddingTop:"orrla7ft",scrollSnapType:"h7lslg6b"},sizeFull:{width:"k4urcfbm"},sizeNormal:{width:"geg40m2u"},truncate:{maxHeight:"ktk59qbb"}},i="menu",j={listbox:"option",menu:"menuitem"};function a(a,c){__p&&__p();var d=a.children,e=a.footer,f=a.header,k=a.id,l=a.role;l=l===void 0?i:l;var m=a.size;m=m===void 0?"normal":m;var n=a.truncate;n=n===void 0?!1:n;var o=a.withArrow;a=a.testid;a=a===void 0?"comet-menu":a;var p=0,q=b("React").Children.toArray(d).map(function(a){if(a==null)return null;var c=p++;return a.type===b("CometSeparatorMenuItem.react")?a:b("React").jsx(b("CometErrorBoundary.react"),{fallback:null,children:a},c)}),r=j[l];return b("React").Children.count(d)>0?b("React").jsx(b("CometMenuFocusGroup").FocusGroup,{portrait:!0,tabScopeQuery:b("TabbableScopeQuery.react"),wrap:!0,children:b("React").jsx(b("CometPopover.react"),{id:k,ref:c,role:l,testid:a,withArrow:o,children:b("React").jsx(b("BaseScrollableArea.react"),{horizontal:!1,vertical:!0,xstyle:[h.root,m==="full"&&h.sizeFull,m==="normal"&&h.sizeNormal,n&&h.truncate],children:b("React").jsx(b("CometMenuItemBaseRoleContext").Provider,{value:r,children:[f!=null?[b("React").jsx("div",{className:(g||(g=b("stylex")))(h.listItem),role:r,children:b("React").jsx(b("TetraTextPairing.react"),{headline:f.title,level:3,meta:f.meta,reduceEmphasis:!0})},"header"),b("React").jsx(b("CometSeparatorMenuItem.react"),{},"header-separator")]:null,b("React").jsx(b("React").Fragment,{children:q},"contents"),e!=null?[b("React").jsx(b("CometSeparatorMenuItem.react"),{},"footer-separator"),b("React").jsx("div",{className:(g||(g=b("stylex")))(h.listItem),role:r,children:b("React").jsx(b("TetraTextPairing.react"),{level:3,meta:e.text})},"footer")]:null]})})})}):null}e.exports=b("React").memo(b("React").forwardRef(a))}),null);
__d("CometMenu.react",["CometMenuBase.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("React").jsx(b("CometMenuBase.react"),babelHelpers["extends"]({},a,{ref:c}))}e.exports=b("React").forwardRef(a)}),null);
__d("CometMenuItemHighlightContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(!1)}),null);
__d("CometMenuItemBase.react",["BaseFocusRing.react","CometMenuContext","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometMenuItemHighlightContext","CometPressable.react","CometPressableOverlay.react","React","TetraTextPairing.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useCallback,i=b("React").useContext,j={aux:{marginStart:"ozuftl9m"},content:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",justifyContent:"i1fnvgqd",minWidth:"hpfvmrgz"},disabled:{cursor:"rj84mg9z"},listItem:{alignItems:"bp9cbjyn",appearance:"dwo3fsh8",boxSizing:"rq0escxv",cursor:"nhd2j8a9",display:"j83agx80",flexDirection:"btwxx1t3",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr",position:"l9j0dhe7",scrollSnapAlign:"qdtcsgvi",textAlign:"i1ao9s8h",zIndex:"du4w35lb"},listItemAlignedCenter:{alignItems:"bp9cbjyn"},listItemWithIcon:{paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}};function a(a,c){__p&&__p();var d=a.alignCenter;d=d===void 0?!1:d;var e=a.aux,f=a.bodyColor,k=a.bodyText,l=a.disabled,m=l===void 0?!1:l;l=a.download;var n=a.href,o=a.iconNode,p=a.id,q=a.onClick,r=a.onHoverIn,s=a.onHoverOut,t=a.onPressIn,u=a.preventClosingMenuOnSelect;u=u===void 0?!1:u;var v=a.preventLocalNavigation,w=a.primaryText,x=a.role,y=a.routeTarget,z=a.secondaryColor,A=a.secondaryText,B=a.target,C=a.testid,D=a.to,E=a.visuallyFocused,F=E===void 0?!1:E;E=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","aux","bodyColor","bodyText","disabled","download","href","iconNode","id","onClick","onHoverIn","onHoverOut","onPressIn","preventClosingMenuOnSelect","preventLocalNavigation","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","to","visuallyFocused"]);a=i(b("CometMenuContext"));var G=u!==!0&&a?a.onClose:null;u=n!=null||y!=null||B!=null||D!=null?{download:l,passthroughProps:D!=null?{to:D}:null,preventLocalNavigation:v,routeTarget:y,target:B,url:n}:void 0;a=h(function(a){G!=null&&G(),q&&q(a)},[q,G]);l=i(b("CometMenuItemBaseRoleContext"));y=(v=(D=x)!=null?D:l)!=null?v:void 0;return b("React").jsx(b("CometMenuFocusGroup").FocusItem,{children:b("React").jsx(b("CometPressable.react"),babelHelpers["extends"]({},E,{disabled:m,display:"inline",id:p,linkProps:u,onHoverIn:r,onHoverOut:s,onPress:a,onPressIn:t,overlayDisabled:!0,ref:c,role:y,testid:C,xstyle:[j.listItem,d&&j.listItemAlignedCenter,o!=null&&j.listItemWithIcon,m&&j.disabled,F&&b("BaseFocusRing.react").focusRingXStyle],children:function(a){var c=a.focused,d=a.focusVisible,h=a.hovered;a=a.pressed;return b("React").jsxs(b("CometMenuItemHighlightContext").Provider,{value:c&&d||h,children:[o,b("React").jsxs("div",{className:(g||(g=b("stylex")))(j.content),children:[b("React").jsx(b("TetraTextPairing.react"),{body:k,bodyColor:f,headline:w,headlineColor:m?"disabled":"primary",level:4,meta:A,metaColor:z,reduceEmphasis:!0}),e!=null&&b("React").jsx("div",{className:(g||(g=b("stylex")))(j.aux),children:e})]}),b("React").jsx(b("CometPressableOverlay.react"),{focusVisible:d||F,hovered:h,pressed:a,radius:4})]})}}))})}e.exports=b("React").forwardRef(a)}),null);
__d("CometMenuItemIcon.react",["CometImageIcon.react","IconSource","ImageIconSource","React","TetraIcon.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){var c=a.icon,d=a.iconColor;a=a.use;a=a===void 0?"normal":a;return b("React").jsx("div",{className:(g||(g=b("stylex"))).dedupe(a==="contained"||a==="contained_small_icon"?{"align-items-1":"bp9cbjyn","background-color-1":"tdjehn4e","border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","display-1":"j83agx80","height-1":"tv7at329","justify-content-1":"taijpn5t","min-width-1":"odlk74j0"}:{},a==="normal"?{"align-self-1":"tiyi1ipj","height-1":"jnigpg78","width-1":"odw8uiq3"}:null,{"margin-end-1":"tvfksri0"}),children:c instanceof b("IconSource")?b("React").jsx(b("TetraIcon.react"),{color:(d=d)!=null?d:"secondary",icon:c}):c instanceof b("ImageIconSource")?b("React").jsx(b("TetraIcon.react"),{icon:c}):b("React").jsx(b("CometImageIcon.react"),babelHelpers["extends"]({},c,{size:a==="contained"?36:20}))})}e.exports=b("React").memo(a)}),null);
__d("CometMenuItem.react",["CometBadge.react","CometMenuItemBase.react","CometMenuItemIcon.react","React","TetraTextPairing.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=a.auxItem,e=a.icon,f=a.iconStyle;f=f===void 0?"normal":f;a=babelHelpers.objectWithoutPropertiesLoose(a,["auxItem","icon","iconStyle"]);var g=null;d!=null&&(g=d.type==="text"?b("React").jsx(b("TetraTextPairing.react"),{level:3,meta:d.auxText}):b("React").jsx(b("CometBadge.react"),{color:d.color}));return b("React").jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},a,{alignCenter:!0,aux:g,iconNode:e!=null?b("React").jsx(b("CometMenuItemIcon.react"),{icon:e,use:f}):null,ref:c}))}e.exports=b("React").forwardRef(a)}),null);
__d("CometLegalFooterMoreMenu.react",["fbt","CometMenu.react","CometMenuItem.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c;return(a=b("React")).jsxs(b("CometMenu.react"),{withArrow:!0,children:[a.jsx(c=b("CometMenuItem.react"),{href:"https://www.facebook.com/about/",primaryText:g._("About")}),a.jsx(c,{href:"https://www.facebook.com/careers/?ref=pf",primaryText:g._("Careers")}),a.jsx(c,{href:"https://developers.facebook.com/?ref=pf",primaryText:g._("Developers")}),a.jsx(c,{href:"https://www.facebook.com/help/?ref=pf",primaryText:g._("Help")})]})}e.exports=a}),null);
__d("TetraRowContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext({spacingHorizontal:12,spacingVertical:12})}),null);
__d("TetraRow.react",["BaseRow.react","React","TetraRowContext","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useMemo,h={8:{paddingEnd:"dflh9lhu",paddingStart:"scb9dxdr"},12:{paddingEnd:"d1544ag0",paddingStart:"tw6a2znq"},16:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}},i={0:{paddingTop:"jb3vyjys"},8:{paddingTop:"cxgpxx05"},12:{paddingTop:"pybr56ya"},16:{paddingTop:"discj3wi"}},j={8:{paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05"},12:{paddingBottom:"f10w8fjw",paddingTop:"pybr56ya"},16:{paddingBottom:"ihqw7lf3",paddingTop:"discj3wi"}},k={8:{marginEnd:"dlv3wnog",marginStart:"rl04r1d5"},12:{marginEnd:"b5q2rw42",marginStart:"lq239pai"},16:{marginEnd:"o22cckgh",marginStart:"fop5sh7t"}},l={8:{marginBottom:"enqfppq2",marginTop:"muag1w35"},12:{marginBottom:"mysgfdmx",marginTop:"hddg9phg"},16:{marginBottom:"obtkqiv7",marginTop:"sv5sfqaa"}};function a(a,c){__p&&__p();var d=a.children,e=a.paddingHorizontal;e=e===void 0?12:e;var f=a.paddingVertical;f=f===void 0?0:f;var m=a.paddingTop;m=m===void 0?a.paddingVertical==null?16:null:m;var n=a.spacing;n=n===void 0?12:n;var o=a.spacingHorizontal,p=o===void 0?n:o;o=a.spacingVertical;var q=o===void 0?n:o;n=babelHelpers.objectWithoutPropertiesLoose(a,["children","paddingHorizontal","paddingVertical","paddingTop","spacing","spacingHorizontal","spacingVertical"]);o=g(function(){return{spacingHorizontal:p,spacingVertical:q}},[p,q]);return b("React").jsx(b("BaseRow.react"),babelHelpers["extends"]({},n,{ref:c,xstyle:[h[e],j[f],m!=null&&i[m],k[p],l[q]],children:b("React").jsx(b("TetraRowContext").Provider,{value:o,children:d})}))}e.exports=b("React").forwardRef(a)}),null);
__d("TetraRowItem.react",["BaseRowItem.react","React","TetraRowContext","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext,h={8:{paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus"},12:{paddingEnd:"p8fzw8mz",paddingStart:"pcp91wgn"},16:{paddingEnd:"dflh9lhu",paddingStart:"scb9dxdr"}},i={8:{paddingBottom:"e5nlhep0",paddingTop:"ecm0bbzt"},12:{paddingBottom:"iuny7tx3",paddingTop:"ipjc6fyt"},16:{paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05"}};function a(a,c){var d=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["xstyle"]);var e=g(b("TetraRowContext")),f=e.spacingHorizontal;e=e.spacingVertical;return b("React").jsx(b("BaseRowItem.react"),babelHelpers["extends"]({},a,{ref:c,xstyle:[h[f],i[e],d]}))}e.exports=b("React").forwardRef(a)}),null);
__d("CometToast.react",["ix","fbt","CometPressable.react","CometTheme.react","React","TetraCircleButton.react","TetraIcon.react","TetraRow.react","TetraRowItem.react","TetraText.react","cometTestID","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("React").useMemo,k={icon:{minWidth:"s3zjy1r9"},pressable:{display:"a8c37x1j"},root:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxShadow:"m1ttxjm6",maxWidth:"d2edcug0",minWidth:"p01isnhg"}};function a(a){__p&&__p();var c=a.action,d=a.href,e=a.icon,f=a.message,l=a.onDismiss,m=a.target,n=a.testid;a.title;var o=a.truncateText;o=o===void 0?!0:o;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","href","icon","message","onDismiss","target","testid","title","truncateText"]);var p=j(function(){return d!=null?{target:m,url:d}:void 0},[d,m]);n=b("React").jsxs(b("TetraRow.react"),{paddingHorizontal:16,paddingVertical:16,spacing:12,testid:n,verticalAlign:"center",children:[e!=null?b("React").jsx(b("TetraRowItem.react"),{xstyle:k.icon,children:e}):null,b("React").jsx(b("TetraRowItem.react"),{"aria-atomic":!0,expanding:!0,role:"alert",children:b("React").jsx(b("TetraText.react"),{color:"primary",numberOfLines:o?1:void 0,type:"body3",children:f})}),c!=null?b("React").jsx(b("TetraRowItem.react"),{children:b("React").jsx(b("CometPressable.react"),{onPress:function(a){l(),c.onPress(a)},testid:c.testid,children:b("React").jsx(b("TetraText.react"),{color:"blueLink",numberOfLines:1,type:"body3",children:c.label})})}):null,b("React").jsx(b("TetraRowItem.react"),{children:b("React").jsx(b("TetraCircleButton.react"),{icon:b("fbicon")._(g("478231"),12),label:h._("Close"),onPress:l,size:24})})]});(a.onPress!=null||p!=null)&&(n=b("React").jsx(b("CometPressable.react"),babelHelpers["extends"]({},a,{expanding:!0,linkProps:p,xstyle:k.pressable,children:n})));return b("React").jsx(b("CometTheme.react"),babelHelpers["extends"]({className:(i||(i=b("stylex")))(k.root),element:"div",theme:"invert"},b("cometTestID")("Toast"),{children:n}))}e.exports=a}),null);
__d("CometToasterView_DO_NOT_USE.react",["BasePortal.react","BaseToasterView.react","CometContextualLayerAnchorRoot.react","CometToastAnimationInternal.react","React","gkx","stylex","useToasterStateManager"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useEffect,i=b("React").useState,j={root:{bottom:"lfi1tu6t",listStyle:"p7hjln8o",position:"poy2od1o",start:"re5koujm",zIndex:"kavbgo14"},rootBlue:{zIndex:"c28tyrcu"},toastContainer:{display:"q9uorilb",position:"pmk7jnqg",start:"j9ispegn"}};function a(a){__p&&__p();var c=a.filterToasts;a=a.maxVisible;a=a===void 0?1:a;var d=b("useToasterStateManager")(),e=i(function(){return d.getEmptyState()}),f=e[0],k=e[1];h(function(){var a=d.registerView(k,0);return function(){a.remove()}},[d]);return b("React").jsx(b("BasePortal.react"),{target:document.body,children:b("React").jsx(b("BaseToasterView.react"),{className:(g||(g=b("stylex")))([j.root,!b("gkx")("708253")&&j.rootBlue]),filterToasts:c,maxVisible:a,toasterState:f,children:function(a,c,d,e){return b("React").jsx(b("CometContextualLayerAnchorRoot.react"),{children:b("React").jsx(b("CometToastAnimationInternal.react"),{expired:d,id:c,position:e,xstyle:j.toastContainer,children:a})},c)}})})}e.exports=a}),null);
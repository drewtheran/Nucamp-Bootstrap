if (self.CavalryLogger) { CavalryLogger.start_js(["u+s3\/"]); }

__d("FeedComposerCometRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{operationKind:"query",name:"FeedComposerCometRootQuery",id:"2566440343465221",text:null,metadata:{relayPreloadable:!0}}};e.exports=a}),null);
__d("useContextRef",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext,h=b("React").useEffect;function a(a,b){__p&&__p();b=g(b);var c=b.current;h(function(){if(c.has(a)){var b=c.get(a);c.set(a,b+1)}else c.set(a,1);return function(){var b=c.get(a);b!==void 0&&(b===1?c["delete"](a):c.set(a,b-1))}},[c,a])}e.exports=a}),null);
__d("ComposerSproutDisplayTypeContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({type:"inline"});e.exports=a}),null);
__d("FeedComposerCometSproutCollapsedButton.react",["BaseButtonOrLink_DEPRECATED.react","CometPressable.react","CometPressableChildrenWithOverlay.react","CometTooltip.react","ImageIconSource","React","TetraIcon.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={circle:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},icon:{alignItems:"bp9cbjyn",display:"j83agx80",height:"tv7at329",justifyContent:"taijpn5t",position:"l9j0dhe7",width:"thwo4zme"},inner:{height:"datstx6m",width:"k4urcfbm"},outer:{height:"tv7at329",position:"l9j0dhe7",width:"thwo4zme"},pressable:{appearance:"dwo3fsh8",backgroundColor:"g5ia77u1",borderStyle:"ow4ym5g4",borderWidth:"auili1gw",boxSizing:"rq0escxv",cursor:"nhd2j8a9",marginBottom:"oygrvhab",marginEnd:"cxmmr5t8",marginStart:"hcukyx3x",marginTop:"kvgmc6g5",paddingBottom:"qt6c0cv9",paddingEnd:"rz4wbd8a",paddingStart:"a8nywdso",paddingTop:"jb3vyjys",position:"l9j0dhe7",textAlign:"i1ao9s8h",zIndex:"du4w35lb"},pressed:{transform:"mtfd0dr2"}};function a(a,c){__p&&__p();var d=a.activeColor,e=a.isActive,f=a.onFocusIn,i=a.onFocusOut,j=a.onHoverIn;a=babelHelpers.objectWithoutPropertiesLoose(a,["activeColor","isActive","onFocusIn","onFocusOut","onHoverIn"]);var k=a.disabled,l=a.disabledIcon,m=a.icon,n=a.label,o=a.onClick,p=a.onHoverOut;a=a.testid;var q=b("React").jsx(b("TetraIcon.react"),{color:"disabled",icon:new(b("ImageIconSource"))(k===!0&&l||m,20,20),ref:c});k=b("React").jsx(b("CometTooltip.react"),{position:"above",tooltip:n,children:b("React").jsx(b("CometPressable.react"),{"aria-label":n,label:n,onFocusIn:f,onFocusOut:i,onHoverIn:j,onHoverOut:p,onPress:o,overlayDisabled:!1,ref:c,testid:a,xstyle:function(a){a=a.pressed;return[h.pressable,a&&h.pressed]},children:function(a){var c;a=a.overlay;return(c=b("React")).jsx("div",{children:c.jsx("div",{className:(g||(g=b("stylex")))(h.outer,h.circle),children:b("React").jsx(b("CometPressableChildrenWithOverlay.react"),{overlay:a,children:b("React").jsx("div",{className:g(h.icon,h.inner),children:q})})})})}})});e&&(k=b("React").jsx("div",{className:(g||(g=b("stylex")))(h.outer,h.circle),ref:c,style:{backgroundColor:d},children:k}));return k}e.exports=b("React").forwardRef(a)}),null);
__d("FeedComposerCometSproutExpandedButton.react",["ix","ComposerSproutDisplayTypeContext","ImageIconSource","React","TetraAccessoryListCell.react","fbicon"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useContext,i=b("React").useState;function a(a){__p&&__p();var c=h(b("ComposerSproutDisplayTypeContext")),d=i(!1),e=d[0],f=d[1];if(c.type!=="push_view")return null;d=a.disabled;var j=a.disabledIcon,k=a.icon,l=a.isActive,m=a.label,n=a.onClick;a=a.opensExternally;a=a===void 0?!1:a;return b("React").jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{icon:new(b("ImageIconSource"))(d&&j||k,20,20),iconBadge:l===!0?b("fbicon")._(g("550825"),8):void 0,size:36,type:"contained-icon"},addOnSecondary:a&&e?{color:"tertiary",icon:b("fbicon")._(g("538182"),16),type:"icon"}:void 0,disabled:d,headline:m,onHoverIn:function(){return f(!0)},onHoverOut:function(){return f(!1)},onPress:function(){c.popPage(),n&&n()}})}e.exports=a}),null);
__d("CometComposerIneligibilityContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(new Set());e.exports=a}),null);
__d("useComposerPluginIneligibility",["CometComposerIneligibilityContext","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(){return g(b("CometComposerIneligibilityContext"))}e.exports=a}),null);
__d("CometComposerSproutButton.react",["fbt","BaseButtonOrLink_DEPRECATED.react","CometTooltip.react","ComposerSproutDisplayTypeContext","FeedComposerCometSproutCollapsedButton.react","FeedComposerCometSproutExpandedButton.react","React","recoverableViolation","stylex","useComposerPluginIneligibility"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useContext,i=b("React").useEffect;function a(a,c){__p&&__p();var d=a.activeColor,e=a.disabled;e=e===void 0?!1:e;var f=a.disabledIcon,j=a.disabledTooltip;a.hasData;var k=a.icon,l=a.isActive;l=l===void 0?!1:l;var m=a.label,n=a.onClick,o=a.opensExternally,p=a.pluginName;a=babelHelpers.objectWithoutPropertiesLoose(a,["activeColor","disabled","disabledIcon","disabledTooltip","hasData","icon","isActive","label","onClick","opensExternally","pluginName"]);var q=b("useComposerPluginIneligibility")();q=q.has(p)||e;p=h(b("ComposerSproutDisplayTypeContext"));var r=p.type!=="push_view";i(function(){r&&o===!0&&b("recoverableViolation")("A sprout that opens externally was rendered collapsed, which means we did not have the opportunity to how the secondary icon that indicates a separate experience. This should not occur.","comet_composer")},[r,o]);e=r?b("React").jsx(b("FeedComposerCometSproutCollapsedButton.react"),babelHelpers["extends"]({},a,{activeColor:d,disabled:q,disabledIcon:f,icon:k,isActive:l,label:m,onClick:n,ref:c})):b("React").jsx(b("FeedComposerCometSproutExpandedButton.react"),{disabled:q,disabledIcon:f,icon:k,isActive:l,label:m,onClick:n,opensExternally:o});if(q===!0){return b("React").jsx("div",{className:"k4urcfbm",children:b("React").jsx(b("CometTooltip.react"),{position:"above",tooltip:(p=j)!=null?p:g._("This is incompatible with content in your post"),children:b("React").jsx("div",{className:"hzruof5a l8rlqa9s bipmatt0 bs8yw60a",children:e})})})}return e}e.exports=b("React").forwardRef(a)}),null);
__d("CometComposerPushPageContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("CometComposerViewStateAlteredContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({current:new Map()});e.exports=a}),null);
__d("createEmptyCometComposerViewState",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a!=null?a:{audience:{},editorState:{__type:"plain-text",hasFocus:!1,isComposing:!1,isPendingSelection:!1,selectionOffsets:null,text:""}}}e.exports=a}),null);
__d("CometComposerViewStateContext",["React","createEmptyCometComposerViewState"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(b("createEmptyCometComposerViewState")());e.exports=a}),null);
__d("CometComposerViewStateDispatcherContext",["React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(b("emptyFunction"));e.exports=a}),null);
__d("CometComposerViewStateReducersContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({current:new Map()});e.exports=a}),null);
__d("useCometComposerPushPage",["CometComposerPushPageContext","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(){return g(b("CometComposerPushPageContext"))}e.exports=a}),null);
__d("useComposerViewStateDispatcher",["CometComposerViewStateDispatcherContext","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(){return g(b("CometComposerViewStateDispatcherContext"))}e.exports=a}),null);
__d("useComposerViewStateReducer",["CometComposerViewStateAlteredContext","CometComposerViewStateReducersContext","useContextRef"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=function(a,b){return!1};b("useContextRef")((c=c)!=null?c:d,b("CometComposerViewStateAlteredContext"));return b("useContextRef")(a,b("CometComposerViewStateReducersContext"))}e.exports=a}),null);
__d("withSomeContext",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext;function a(a,c,d){var e=b("React").memo(a);function f(a,f){var h=g(c);h=d(h,a);return b("React").jsx(e,babelHelpers["extends"]({},a,h,{ref:f}))}return b("React").forwardRef(f)}e.exports=a}),null);
__d("withComposerViewStatePart",["CometComposerViewStateContext","React","withSomeContext"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("withSomeContext")(a,b("CometComposerViewStateContext"),c)}e.exports=a}),null);
__d("FeedComposerCometGlimmer.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){var c;return(a=b("React")).jsxs("div",{className:"oh7imozk dati1w0a qt6c0cv9 hv4rvrfc jb3vyjys i1fnvgqd spqzbugh cbu4d94t j83agx80 rq0escxv",children:[a.jsxs("div",{children:[a.jsx(c=b("BaseGlimmer.react"),{className:"hcukyx3x n851cfcs cxmmr5t8 n1l5q3vz afyhebng l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:0}),a.jsx("hr",{className:"hcukyx3x oygrvhab cxmmr5t8 kvgmc6g5 pwoa4pd7"}),a.jsxs("div",{className:"k4urcfbm discj3wi j83agx80 rq0escxv bp9cbjyn",children:[a.jsx(c,{className:"q676j6op qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",index:1}),a.jsx("div",{className:"n99xedck",children:a.jsx(c,{className:"ozuftl9m n851cfcs tvfksri0 n1l5q3vz p1ueia1e l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:1})})]})]}),a.jsx("div",{className:"k4urcfbm",children:a.jsx(c,{className:"hcukyx3x sjgh65i0 cxmmr5t8 aahdfvyu afyhebng l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:2})})]})}e.exports=a}),null);
__d("useCometComposerEntryPointDialog",["fbt","CometCardedDialog.react","ComposerEntryFalcoEvent","FeedComposerCometGlimmer.react","React","useCometEntryPointDialog","uuid"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useCallback,i=b("React").useState,j={withCloseButton:!0};function k(a){return b("React").jsx("div",{children:b("React").jsx(b("CometCardedDialog.react"),babelHelpers["extends"]({size:"content",title:a.title},a,{children:b("React").jsx(b("FeedComposerCometGlimmer.react"),{})}))})}function a(a){__p&&__p();var c=a||{},d=c.composerEntryPointName,e=c.composerSourceSurface,f=c.composerDialogEntryPoint,l=c.composerType,m=c.onBeforeClose,n=c.onSaveError,o=c.onSubmit,p=c.storyID,q=c.profileID,r=c.title,s=r===void 0?g._("Create Post"):r,t=c.renderLocation;r=b("useCometEntryPointDialog")(f,{profileID:q,storyID:p},"button",function(a){return b("React").jsx(k,babelHelpers["extends"]({onClose:a,title:s},j))});var u=r[0];c=r[1];p=r[2];var v=r[3];r=r[4];var w=i(b("uuid")()),x=w[0],y=w[1],z=h(function(){a!=null&&a.onSave!=null&&(a.onSave&&a.onSave())},[a]);w=h(function(a){a=a||{};var c=a.beginningViewState,g=a.feelingTaggerVisibleOnLoad;a=a.withTaggerVisibleOnLoad;b("ComposerEntryFalcoEvent").log(function(){var a;return{composer_entry_point_name:d,composer_source_surface:e,composer_type:(a=l)!=null?a:f.root.getModuleId(),creation_session_id:x}});var h="comet.composer";u(babelHelpers["extends"]({beginningViewState:c,composerType:l,creationSessionID:x,feelingTaggerVisibleOnLoad:g,onBeforeClose:m,onSave:z,onSaveError:n,onSubmit:o,profileID:q,renderLocation:t,title:s,withTaggerVisibleOnLoad:a},j),void 0,h);y(b("uuid")())},[f.root,d,e,l,x,m,z,n,o,q,t,u,s]);return[w,c,p,v,r]}e.exports=a}),null);
__d("useResumableComposerViewState",["React","createEmptyCometComposerViewState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useRef;function h(a){var b=a.mediaAttachments!=null?a.mediaAttachments.map(function(a){if(a.state==="UPLOADING"||a.state==="QUEUED")switch(a.fileType){case"PHOTO":return{data:a.data,file:a.file,fileType:"PHOTO",state:"NEW"};case"VIDEO":return{data:a.data,file:a.file,fileType:"VIDEO",state:"NEW"};default:return{data:a.data,file:a.file,fileType:"FILE",state:"NEW"}}return a}):void 0;return babelHelpers["extends"]({},a,{mediaAttachments:b})}function a(){var a=g(null),c=function(b){a.current=b!=null?h(b):null},d=function(){a.current=null},e=function(c){var d;d=(d=a.current)!=null?d:b("createEmptyCometComposerViewState")();return c!=null?babelHelpers["extends"]({},d,{attachmentArea:{activeAttachmentType:"MEDIA"},mediaAttachments:(d.mediaAttachments||[]).concat(c)}):d};return{clearResumableViewState:d,getResumableViewState:e,saveResumableViewState:c}}e.exports=a}),null);
__d("CometComposerAttachmentPluginTypes",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({ANIMATED_IMAGE:"ANIMATED_IMAGE",ASK_FOR_RECOMMENDATIONS:"ASK_FOR_RECOMMENDATIONS",DOC:"DOC",DUMMY:"DUMMY",EVENT:"EVENT",FILE:"FILE",FORMATTED_TEXT:"FORMATTED_TEXT",LINK:"LINK",LIVE_VIDEO:"LIVE_VIDEO",LIVING_ROOM:"LIVING_ROOM",LOCATION:"LOCATION",MEDIA:"MEDIA",MESSAGING:"MESSAGING",NONPROFIT:"NONPROFIT",POLL:"POLL",SHARE:"SHARE",VIEW_ONLY_FEED_ATTACHMENT:"VIEW_ONLY_FEED_ATTACHMENT"});e.exports=a}),null);
__d("cometFormattedTextIneligibilityCheck",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b,c=3,d=130;return((b=(b=a.match(/\n/g))==null?void 0:b.length)!=null?b:0)>=c||a.length>d}e.exports=a}),null);
__d("FeedComposerCometDialog.entrypoint",["JSResourceForInteraction","WebPixelRatio","qex","FeedComposerCometRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.storyID;return{queries:{composerQueryReference:{options:{fetchPolicy:"store-or-network"},parameters:b("FeedComposerCometRootQuery$Parameters"),variables:{hasStory:a!=null&&a!=="",isSATPv2:!!b("qex")._("1265942"),privacySelectorRenderLocation:"COMET_COMPOSER",scale:b("WebPixelRatio").get(),storyID:(a=a)!=null?a:""}}}}},root:b("JSResourceForInteraction")("FeedComposerCometDialog.react",{"class":"responsive",name:"Comet Composer Dialog",oncall:"comet_composer"})};e.exports=a}),null);
__d("FeedComposerCometSproutButtonContainer.react",["CometErrorBoundary.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").jsx(b("CometErrorBoundary.react"),{fallback:null,children:a.children})}e.exports=a}),null);
__d("useFeedComposerCometDialog",["requireDeferred","FeedComposerCometDialog.entrypoint","useCometComposerEntryPointDialog"],(function(a,b,c,d,e,f){"use strict";b("requireDeferred")("FeedComposerCometDialog.react");function a(a){return b("useCometComposerEntryPointDialog")(babelHelpers["extends"]({},a,{composerDialogEntryPoint:b("FeedComposerCometDialog.entrypoint")}))}e.exports=a}),null);
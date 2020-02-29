if (self.CavalryLogger) { CavalryLogger.start_js(["1U0nU"]); }

__d("CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"SplitOperation",name:"CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink$normalization",metadata:{derivedFrom:"CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink"},selections:[{kind:"ScalarField",alias:null,name:"has_member_profile",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"group",storageKey:null,args:null,concreteType:"Group",plural:!1,selections:[a]},{kind:"LinkedField",alias:null,name:"actor",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},a,{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null}]}]}}();e.exports=a}),null);
__d("CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Fragment",name:"CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink",type:"GroupMemberProfileActionLink",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"has_member_profile",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"group",storageKey:null,args:null,concreteType:"Group",plural:!1,selections:[a]},{kind:"LinkedField",alias:null,name:"actor",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null}]}]}}();e.exports=a}),null);
__d("CometFeedStoryDirectedTitleStrategy_contextTitle$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null};return{kind:"SplitOperation",name:"CometFeedStoryDirectedTitleStrategy_contextTitle$normalization",metadata:{derivedFrom:"CometFeedStoryDirectedTitleStrategy_contextTitle"},selections:[a,{kind:"ScalarField",alias:null,name:"is_prod_eligible",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"story",storageKey:null,args:null,concreteType:"Story",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"actors",storageKey:null,args:null,concreteType:null,plural:!0,selections:[a,b,c,d]},{kind:"LinkedField",alias:null,name:"to",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,c,d,b]},{kind:"LinkedField",alias:null,name:"comet_sections",storageKey:null,args:[{kind:"Variable",name:"location",variableName:"renderLocation"}],concreteType:"CometStorySections",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"action_link",storageKey:'action_link(supported:["GroupMemberProfileActionLink","GroupMemberAnonProfileActionLink"])',args:[{kind:"Literal",name:"supported",value:["GroupMemberProfileActionLink","GroupMemberAnonProfileActionLink"]}],concreteType:null,plural:!1,selections:[a,{kind:"InlineFragment",type:"GroupMemberProfileActionLink",selections:[{kind:"ModuleImport",documentName:"CometFeedStoryActorLink_story",fragmentName:"CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink",fragmentPropName:"groupMemberProfileActionLink"}]},{kind:"InlineFragment",type:"GroupMemberAnonProfileActionLink",selections:[{kind:"ModuleImport",documentName:"CometFeedStoryActorLink_story",fragmentName:"CometFeedStoryTitleGroupAnonProfileActor_actionLink",fragmentPropName:"actionLink"}]}]}]},c]}]}}();e.exports=a}),null);
__d("CometFeedStoryDirectedTitleStrategy_contextTitle.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null};return{kind:"Fragment",name:"CometFeedStoryDirectedTitleStrategy_contextTitle",type:"CometFeedStoryDirectedTitleStrategy",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"story",storageKey:null,args:null,concreteType:"Story",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"actors",storageKey:null,args:null,concreteType:null,plural:!0,selections:[a]},{kind:"LinkedField",alias:null,name:"to",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"FragmentSpread",name:"CometFeedStoryTitleEntity_actor",args:null}]},{kind:"FragmentSpread",name:"CometFeedStoryActorLink_story",args:null}]},{kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection",args:null}]}}();e.exports=a}),null);
__d("CometFeedStandardAttachmentFooter.react",["CometPressable.react","CometTrackingNodeProvider.react","React","TetraTextPairing.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useMemo,i={centerSection:{boxSizing:"rq0escxv",flexGrow:"buofh1pr",flexShrink:"g5gj957u",marginBottom:"enqfppq2",marginTop:"muag1w35",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingBottom:"e5nlhep0",paddingTop:"ecm0bbzt"},leadingSection:{flexGrow:"kb5gq1qc",flexShrink:"pfnyh3mw",marginEnd:"wkznzc2l"},metaTransform:{textTransform:"sqxagodl"},root:{alignItems:"bp9cbjyn",backgroundColor:"b3i9ofy5",borderTopColor:"t51s4qs2",borderEndColor:"bv6zxntz",borderBottomColor:"qc3rp1z7",borderStartColor:"rj06g9kl",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"rt8b4zig",borderEndWidth:"n8ej3o3l",borderBottomWidth:"afxsp9o4",borderStartWidth:"sk4xxmp2",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"btwxx1t3",justifyContent:"jifvfom9",minHeight:"ek66kcfh",paddingBottom:"f10w8fjw",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",paddingTop:"pybr56ya",position:"l9j0dhe7",":hover":{textDecoration:"p8dawk7l"}},socialContextSection:{marginBottom:"scwd0bx6",marginTop:"l2myg6lo"},trailingSection:{flexGrow:"kb5gq1qc",flexShrink:"pfnyh3mw",marginStart:"dhix69tm"}};function j(a){__p&&__p();if(Array.isArray(a)){if(a.length===0)return void 0;var c=[].concat(a).reduce(function(c,d,e){c=c.concat([b("React").jsx("span",{children:d},e)]);e!==a.length-1&&c.push(b("React").jsx("span",{"aria-hidden":!0,children:" \u2022 "},"middot-"+e));return c},[]);return b("React").jsx("span",{className:(g||(g=b("stylex")))(i.metaTransform),children:c})}return a!=null?b("React").jsx("span",{className:(g||(g=b("stylex")))(i.metaTransform),children:a}):void 0}function a(a){var c,d=h(function(){return a.leadingAddon!=null?b("React").jsx("div",{className:(g||(g=b("stylex")))(i.leadingSection),children:a.leadingAddon}):null},[a.leadingAddon]),e=h(function(){return a.trailingAddon!=null?b("React").jsx("div",{className:(g||(g=b("stylex")))(i.trailingSection),children:a.trailingAddon}):null},[a.trailingAddon]),f=h(function(){return a.socialContext!=null?b("React").jsx("div",{className:(g||(g=b("stylex")))(i.socialContextSection),children:a.socialContext}):null},[a.socialContext]);d=(c=b("React")).jsxs(c.Fragment,{children:[d,c.jsxs("div",{className:(g||(g=b("stylex")))(i.centerSection),children:[b("React").jsx(b("TetraTextPairing.react"),{body:a.body,bodyColor:"secondary",bodyLineLimit:1,headline:a.title,headlineLineLimit:2,level:3,meta:j(a.meta),metaLineLimit:1,metaLocation:"above"}),f]}),e]});return a.linkProps!=null||a.onPress!=null?b("React").jsx(b("CometTrackingNodeProvider.react"),{trackingNode:99,children:b("React").jsx(b("CometPressable.react"),{display:"inline",linkProps:a.linkProps,onPress:a.onPress,overlayDisabled:!0,xstyle:i.root,children:d})}):b("React").jsx(b("CometTrackingNodeProvider.react"),{trackingNode:99,children:b("React").jsx("div",{className:g(i.root),children:d})})}e.exports=a}),null);
__d("CometFeedStandardAttachmentFooterThumbnail.react",["CometImageIcon.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").jsx(b("CometImageIcon.react"),{size:60,src:a.src,style:"circle",testid:a.testid})}e.exports=a}),null);
__d("CometFeedStoryTitleGroupMemberActor.react",["CometRelay","GroupsCometMemberProfileLink.react","React","CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment;function a(a){a.children;var c=a.groupMemberProfileActionLink,d=babelHelpers.objectWithoutPropertiesLoose(a,["children","groupMemberProfileActionLink"]);c=h(g!==void 0?g:g=b("CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink.graphql"),c);var e=c.actor,f=c.group;c=c.has_member_profile;f=f==null?void 0:f.id;var i=e==null?void 0:e.id;return f==null||i==null||c==null?a.children:b("React").jsx(b("GroupsCometMemberProfileLink.react"),babelHelpers["extends"]({},d,{groupID:f,hasMemberProfile:c,memberID:i,profileUrl:e==null?void 0:e.url,children:a.children}))}e.exports=a}),null);
__d("CometFeedStoryDirectedTitleStrategy.react",["ix","fbt","CometFeedStoryActorLink.react","CometFeedStoryTitleEntity.react","CometRelay","CometTrackingNodeProvider.react","Locale","React","TetraIcon.react","fbicon","stylex","useCometFeedStoryMatchDebugger","CometFeedStoryDirectedTitleStrategy_contextTitle.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var k={icon:{paddingTop:"jb3vyjys",paddingEnd:"ph5uu5jm",paddingBottom:"qt6c0cv9",paddingStart:"b3onmgus",verticalAlign:"fgm26odu"},titleContainer:{fontSize:"jq4qci2q",fontWeight:"ekzkrbhg",lineHeight:"a3bd9o3v"}};function a(a){__p&&__p();a=a.contextTitle;b("useCometFeedStoryMatchDebugger")(a);a=a.story;if(a==null)return null;var c=a.actors,d=a.to;c=c==null?void 0:c[0];var e=d==null?void 0:d.name;if(c==null||d==null||e==null)return null;var f=h._("{actor} to {target}",[h._param("actor",c.name),h._param("target",e)]);f=b("React").jsxs("div",{"aria-label":f,children:[b("React").jsx("span",{children:b("React").jsx(b("CometFeedStoryActorLink.react"),{story:a,children:c.name})}),b("React").jsx("span",{style:k.icon,children:b("React").jsx(b("TetraIcon.react"),{color:"secondary",icon:b("Locale").isRTL()?b("fbicon")._(g("477899"),16):b("fbicon")._(g("477912"),16)})}),b("React").jsx("span",{children:b("React").jsx(b("CometFeedStoryTitleEntity.react"),{actor:d,children:e})})]});return b("React").jsx("div",{className:(j||(j=b("stylex")))(k.titleContainer),children:b("React").jsx(b("CometTrackingNodeProvider.react"),{trackingNode:304,children:f})})}e.exports=c(a,{contextTitle:i!==void 0?i:i=b("CometFeedStoryDirectedTitleStrategy_contextTitle.graphql")})}),null);
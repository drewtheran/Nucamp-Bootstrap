if (self.CavalryLogger) { CavalryLogger.start_js(["znsVw"]); }

__d("CometFeedStoryHeaderTitle_title.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometFeedStoryHeaderTitle_title",type:"TextWithEntities",metadata:null,argumentDefinitions:[],selections:[{kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities",args:null}]};e.exports=a}),null);
__d("CometFeedStoryFallbackHeaderStrategy_header$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},f={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"SplitOperation",name:"CometFeedStoryFallbackHeaderStrategy_header$normalization",metadata:{derivedFrom:"CometFeedStoryFallbackHeaderStrategy_header"},selections:[a,{kind:"ScalarField",alias:null,name:"is_prod_eligible",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"story",storageKey:null,args:null,concreteType:"Story",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"story_header",storageKey:null,args:[{kind:"Variable",name:"location",variableName:"renderLocation"}],concreteType:"StoryHeader",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"title",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image_ranges",storageKey:null,args:null,concreteType:"ImageAtRange",plural:!0,selections:[b,c,{kind:"LinkedField",alias:null,name:"entity_with_image",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scale",args:null,storageKey:null},d,{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null}]},e]}]},{kind:"LinkedField",alias:null,name:"inline_style_ranges",storageKey:null,args:null,concreteType:"InlineStyleAtRange",plural:!0,selections:[b,c,{kind:"ScalarField",alias:null,name:"inline_style",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:[b,c,{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"sample_entities",storageKey:null,args:null,concreteType:null,plural:!0,selections:[a,{kind:"InlineFragment",type:"User",selections:[e,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]},e]}]},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,e,{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"ScalarField",alias:"profile_url",name:"url",args:null,storageKey:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"category_type",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[f]},{kind:"InlineFragment",type:"Group",selections:[f,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]},b,c]},{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"icon_source",storageKey:null,args:[{kind:"Literal",name:"height",value:20},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:20}],concreteType:"Image",plural:!1,selections:[d]},{kind:"ScalarField",alias:null,name:"icon_cta_link",args:null,storageKey:null}]},e]}]}}();e.exports=a}),null);
__d("CometFeedStoryFallbackHeaderStrategy_header.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometFeedStoryFallbackHeaderStrategy_header",type:"CometFeedStoryFallbackHeaderStrategy",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"renderLocation",type:"StoryRenderLocation"},{kind:"RootArgument",name:"scale",type:"Float"}],selections:[{kind:"LinkedField",alias:null,name:"story",storageKey:null,args:null,concreteType:"Story",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"story_header",storageKey:null,args:[{kind:"Variable",name:"location",variableName:"renderLocation"}],concreteType:"StoryHeader",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"title",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[{kind:"FragmentSpread",name:"CometFeedStoryHeaderTitle_title",args:null}]},{kind:"LinkedField",alias:null,name:"icon_source",storageKey:null,args:[{kind:"Literal",name:"height",value:20},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:20}],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"icon_cta_link",args:null,storageKey:null}]}]},{kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection",args:null}]};e.exports=a}),null);
__d("CometFeedStoryStoryHeaderStrategy_header$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},e={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"SplitOperation",name:"CometFeedStoryStoryHeaderStrategy_header$normalization",metadata:{derivedFrom:"CometFeedStoryStoryHeaderStrategy_header"},selections:[a,{kind:"ScalarField",alias:null,name:"is_prod_eligible",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"story",storageKey:null,args:null,concreteType:"Story",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"title",storageKey:null,args:[{kind:"Variable",name:"location",variableName:"renderLocation"}],concreteType:"TextWithEntities",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image_ranges",storageKey:null,args:null,concreteType:"ImageAtRange",plural:!0,selections:[b,c,{kind:"LinkedField",alias:null,name:"entity_with_image",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scale",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null}]},d]}]},{kind:"LinkedField",alias:null,name:"inline_style_ranges",storageKey:null,args:null,concreteType:"InlineStyleAtRange",plural:!0,selections:[b,c,{kind:"ScalarField",alias:null,name:"inline_style",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:[b,c,{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"sample_entities",storageKey:null,args:null,concreteType:null,plural:!0,selections:[a,{kind:"InlineFragment",type:"User",selections:[d,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]},d]}]},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,d,{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"ScalarField",alias:"profile_url",name:"url",args:null,storageKey:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"category_type",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[e]},{kind:"InlineFragment",type:"Group",selections:[e,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]},b,c]},{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]},d]}]}}();e.exports=a}),null);
__d("CometFeedStoryStoryHeaderStrategy_header.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometFeedStoryStoryHeaderStrategy_header",type:"CometFeedStoryStoryHeaderStrategy",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"renderLocation",type:"StoryRenderLocation"}],selections:[{kind:"LinkedField",alias:null,name:"story",storageKey:null,args:null,concreteType:"Story",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"title",storageKey:null,args:[{kind:"Variable",name:"location",variableName:"renderLocation"}],concreteType:"TextWithEntities",plural:!1,selections:[{kind:"FragmentSpread",name:"CometFeedStoryHeaderTitle_title",args:null}]}]},{kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection",args:null}]};e.exports=a}),null);
__d("CometFeedStoryHeaderContainer.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").jsx("div",{className:"dati1w0a hv4rvrfc",children:b("React").jsx("div",{className:"l9j0dhe7 discj3wi ihqw7lf3 j1vyfwqu",children:a.children})})}e.exports=a}),null);
__d("CometFeedStoryHeaderIcon.react",["React","TetraIcon.react","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").jsx("div",{className:"oi9244e8",children:b("React").jsx(b("TetraIcon.react"),{color:"secondary",icon:a.icon})})}e.exports=a}),null);
__d("CometFeedStoryHeaderTitle.react",["CometEmojiTransform","CometEmoticonTransform","CometHovercardEntityRenderer","CometLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","React","TetraText.react","CometFeedStoryHeaderTitle_title.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i={"*":[b("CometLinkedEntityRenderer")],Event:[c=b("CometHovercardEntityRenderer")],Group:[c],Page:[c],User:[c]},j=[b("CometEmoticonTransform")(),b("CometEmojiTransform")()];function a(a){a=h(g!==void 0?g:g=b("CometFeedStoryHeaderTitle_title.graphql"),a.title);return b("React").jsx(b("TetraText.react"),{color:"secondary",type:"body3",children:b("React").jsx(b("CometTextWithEntitiesRelay.react"),{renderers:i,textWithEntities:a,transforms:j})})}e.exports=a}),null);
__d("CometFeedStoryFallbackHeaderStrategy.react",["BaseRow.react","BaseRowItem.react","CometFeedStoryHeaderContainer.react","CometFeedStoryHeaderIcon.react","CometFeedStoryHeaderTitle.react","CometLink.react","CometRelay","ImageIconSource","React","useCometFeedStoryMatchDebugger","CometFeedStoryFallbackHeaderStrategy_header.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment;function a(a){__p&&__p();var c,d;a=h(g!==void 0?g:g=b("CometFeedStoryFallbackHeaderStrategy_header.graphql"),a.header);b("useCometFeedStoryMatchDebugger")(a);c=(c=a.story)==null?void 0:(c=c.story_header)==null?void 0:c.title;if(c==null)return null;d=(d=a.story)==null?void 0:(d=d.story_header)==null?void 0:(d=d.icon_source)==null?void 0:d.uri;a=(a=a.story)==null?void 0:(a=a.story_header)==null?void 0:a.icon_cta_link;d=d!=null?new(b("ImageIconSource"))(d,20,20):null;return b("React").jsx(b("CometFeedStoryHeaderContainer.react"),{children:b("React").jsxs(b("BaseRow.react"),{verticalAlign:"center",children:[d&&b("React").jsx(b("BaseRowItem.react"),{children:b("React").jsx(i,{icon:d,iconCTALink:a})}),b("React").jsx(b("BaseRowItem.react"),{expanding:!0,children:b("React").jsx(b("CometFeedStoryHeaderTitle.react"),{title:c})})]})})}function i(a){var c=a.icon;a=a.iconCTALink;if(c==null)return null;c=b("React").jsx(b("CometFeedStoryHeaderIcon.react"),{icon:c});return a==null||a===""?c:b("React").jsx(b("CometLink.react"),{"aria-label":"Watch icon",href:a,children:c})}e.exports=a}),null);
__d("CometFeedStoryStoryHeaderStrategy.react",["CometFeedStoryHeaderContainer.react","CometFeedStoryHeaderTitle.react","CometRelay","React","recoverableViolation","useCometFeedStoryMatchDebugger","CometFeedStoryStoryHeaderStrategy_header.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment;function a(a){a=a.header;a=h(g!==void 0?g:g=b("CometFeedStoryStoryHeaderStrategy_header.graphql"),a);b("useCometFeedStoryMatchDebugger")(a);a=(a=a.story)==null?void 0:a.title;if(a==null){b("recoverableViolation")("story_header.title cannot be nullish in CometFeedStoryStoryHeaderStrategy","comet_feed");return null}return b("React").jsx(b("CometFeedStoryHeaderContainer.react"),{children:b("React").jsx(b("CometFeedStoryHeaderTitle.react"),{title:a})})}e.exports=a}),null);
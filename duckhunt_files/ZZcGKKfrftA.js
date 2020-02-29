if (self.CavalryLogger) { CavalryLogger.start_js(["eIy6\/"]); }

__d("VideoHomeLiveComponentWithUpNextQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"section_type",value:"WWW_LIVE_HERO"}],b={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},h={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"Request",fragment:{kind:"Fragment",name:"VideoHomeLiveComponentWithUpNextQuery",type:"Query",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"video_home_section",storageKey:'video_home_section(section_type:"WWW_LIVE_HERO")',args:a,concreteType:"VideoHomeSection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"section_components",storageKey:null,args:null,concreteType:"VideoHomeSectionComponentsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"InlineFragment",type:"VideoHomeFeedUnitSectionComponent",selections:[{kind:"LinkedField",alias:null,name:"feed_unit",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Story",selections:[{kind:"LinkedField",alias:null,name:"attachments",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"media",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Video",selections:[b,{kind:"FragmentSpread",name:"CometTahoeUpNextOverlay_video",args:null}]}]}]}]}]}]}]}]}]}]},operation:{kind:"Operation",name:"VideoHomeLiveComponentWithUpNextQuery",argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"video_home_section",storageKey:'video_home_section(section_type:"WWW_LIVE_HERO")',args:a,concreteType:"VideoHomeSection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"section_components",storageKey:null,args:null,concreteType:"VideoHomeSectionComponentsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:null,plural:!0,selections:[c,{kind:"InlineFragment",type:"VideoHomeFeedUnitSectionComponent",selections:[{kind:"LinkedField",alias:null,name:"feed_unit",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,b,{kind:"InlineFragment",type:"Story",selections:[{kind:"LinkedField",alias:null,name:"attachments",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"media",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,b,{kind:"InlineFragment",type:"Video",selections:[{kind:"ScalarField",alias:null,name:"is_live_streaming",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"playable_duration",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"preferred_thumbnail",storageKey:null,args:null,concreteType:"VideoThumbnail",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image",storageKey:'image(height:145,sizing:"cover-fill-cropped",width:257)',args:[{kind:"Literal",name:"height",value:145},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:257}],concreteType:"Image",plural:!1,selections:[d]},b]},{kind:"LinkedField",alias:null,name:"title",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image_ranges",storageKey:null,args:null,concreteType:"ImageAtRange",plural:!0,selections:[e,f,{kind:"LinkedField",alias:null,name:"entity_with_image",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scale",args:null,storageKey:null},d,{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null}]},b]}]},{kind:"LinkedField",alias:null,name:"inline_style_ranges",storageKey:null,args:null,concreteType:"InlineStyleAtRange",plural:!0,selections:[e,f,{kind:"ScalarField",alias:null,name:"inline_style",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:[e,f,{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"sample_entities",storageKey:null,args:null,concreteType:null,plural:!0,selections:[c,b,{kind:"InlineFragment",type:"User",selections:[g]}]}]},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,b,{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"ScalarField",alias:"profile_url",name:"url",args:null,storageKey:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"category_type",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[h]},{kind:"InlineFragment",type:"Group",selections:[h,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]},e,f]},{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,g,b,{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"verification_status",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[{kind:"ScalarField",alias:null,name:"is_verified",args:null,storageKey:null}]}]},{kind:"ScalarField",alias:null,name:"breaking_status",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_premiere",args:null,storageKey:null}]}]}]}]}]}]}]}]},b]}]},params:{operationKind:"query",name:"VideoHomeLiveComponentWithUpNextQuery",id:"3274576882557324",text:null,metadata:{}}}}();e.exports=a}),null);
__d("VideoHomeLiveHeroPlayerOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null};return{kind:"Fragment",name:"VideoHomeLiveHeroPlayerOverlay_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"broadcast_status",args:null,storageKey:null},a,{kind:"LinkedField",alias:null,name:"savable_description",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"LinkedField",alias:null,name:"profile_picture",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"is_verified",args:null,storageKey:null}]}]},{kind:"ScalarField",alias:null,name:"live_rewind_enabled",args:null,storageKey:null},{kind:"FragmentSpread",name:"VideoHomeVideoOwnerLink_video",args:null}]}}();e.exports=a}),null);
__d("VideoHomeLiveHeroPlayer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Fragment",name:"VideoHomeLiveHeroPlayer_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[a,{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"video_channel",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a]},{kind:"LinkedField",alias:null,name:"live_video_config",storageKey:null,args:null,concreteType:"LiveVideoConfig",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"clipping_config",storageKey:'clipping_config(params_to_expose:["is_enabled","creation_source"])',args:[{kind:"Literal",name:"params_to_expose",value:["is_enabled","creation_source"]}],concreteType:"LiveVideoClippingConfig",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_enabled",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"creation_source",args:null,storageKey:null}]}]},{kind:"ScalarField",alias:null,name:"live_rewind_enabled",args:null,storageKey:null},{kind:"FragmentSpread",name:"VideoHomeLiveHeroPlayerOverlay_video",args:null}]}}();e.exports=a}),null);
__d("VideoHomeVideoOwnerLink_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"VideoHomeVideoOwnerLink_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"uri_token",args:null,storageKey:null}]}]}]};e.exports=a}),null);
__d("BrowseFacebarHighlighter",["csx","CSS","NodeHighlighter"],(function(a,b,c,d,e,f,g){"use strict";a={};Object.assign(a,b("NodeHighlighter"),{getHighlightCandidates:function(){return["._53ad"]},isDiscardNode:function(a){return b("CSS").hasClass(a,"DefaultText")},createSegmentedRegex:function(a){a=this.escapeAndAddBidirectionalCharsToTokens(a);return"(^|\\s|\\b)("+a.join("|")+")"}});e.exports=a}),null);
__d("CometSearchTypeaheadBaseLoggingProvider",["requireCond","cr:1288453","gkx","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(){return Math.random().toString()};a=function(){__p&&__p();function a(a){var b=a.context;a=a.log;this.$4=[];this.$5=null;this.$6=null;this.$7=!1;this.$3=a;this.$1=b}var c=a.prototype;c.addEvent=function(a){var c=a.action,d=a.entries,e=a.entry;a=a.queryString;var f=String(Date.now());if(!this.$7||this.$5==null){b("recoverableViolation")("Cannot log a new event into inactive session on "+this.$1+" surface.","search");return null}this.$2&&this.$2.push({action:c,entries:d?[].concat(d):null,entry:e,queryString:a,sequenceID:f});return{sequenceID:f,sessionID:this.$5}};c.isSessionActive=function(){return this.$7};c.getSessionID=function(){this.$5==null&&b("recoverableViolation")("Logging sessionID requested from "+this.$1+" surface does not exist.","search");return this.$5};c.endSession=function(){__p&&__p();var a=this.$6,c=this.$5,d=this.$2;if(a==null||c==null||d==null)return;d=h(d);d={endTimeMs:Date.now(),events:d,sessionID:c,startTimeMs:a};this.$3(d);b("gkx")("1288454")&&(b("cr:1288453")&&b("cr:1288453")(d));this.$7=!1;this.$2=null;this.$6=null};c.startSession=function(a){__p&&__p();this.$7=!0;this.$2=[];a=(a=a)!=null?a:g();this.$5=a;var c=Date.now();this.$6=c;if(b("gkx")("1288454")){a={events:[],sessionID:a,startTimeMs:c};b("cr:1288453")&&b("cr:1288453")(a)}};return a}();function h(a){__p&&__p();if(a.length<2){b("recoverableViolation")("Logging session can't have less than 2 events","search");return[]}var c=a[0],d=a[1],e=a.slice(2),f=[];if(c.action==="typeahead_appeared"&&d.action==="keystroke"){c=babelHelpers["extends"]({},c,{entries:(c=c.entries)!=null?c:d.entries});(d=f).push.apply(d,[c].concat(e))}else f=[].concat(a);d=[];while(f.length>0){c=f.shift();e=f;a=e[0];d.push(babelHelpers["extends"]({},c,{entries:(e=a==null?void 0:a.entries)!=null?e:c.entries}))}return d}e.exports=a}),null);
__d("CometTypeaheadDataEntryWithMetaData",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){var b=a.key,c=a.label,d=a.metaData;a=a.rawData;this.$1=b;this.$2=c;this.$4=a;this.$3=d}var b=a.prototype;b.getKey=function(){return this.$1};b.getLabel=function(){return this.$2};b.getMetaData=function(){return this.$3};b.getRawData=function(){return this.$4};return a}();e.exports=a}),null);
__d("SearchTypeaheadLoggingSessionFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("search_typeahead_logging_session");e.exports=a}),null);
__d("cometSearchTypeaheadFalcoLoggingSessionLogBuilder",["SearchTypeaheadLoggingSessionFalcoEvent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=12;function a(a,c){return function(d){var e=h(a,c,d);b("SearchTypeaheadLoggingSessionFalcoEvent").logImmediately(function(){return{session:e}})}}function h(a,b,c){var d=c.endTimeMs,e=c.events,f=c.sessionID;c=c.startTimeMs;var h=e.filter(function(a,b){return b<Math.floor(g/2)||b>=e.length-Math.ceil(g/2)});return{context:a,end_time_ms:d,events:h.map(i),scoped_entity_id:b,session_id:f,start_time_ms:c}}function i(a){var b=a.action,c=a.entries,d=a.entry,e=a.queryString;a=a.sequenceID;return{action_type:b,entries:c!=null?c.map(j):[],entry:d!=null&&c!=null?j(d,c.indexOf(d)):null,query:(b=e)!=null?b:"",sequence_id:a}}function j(a,b){var c,d=a.getMetaData();return{entity_id:d==null?void 0:(c=d.logging)==null?void 0:c.entityID,entity_type:d==null?void 0:(c=d.logging)==null?void 0:c.entityType,id:a.getKey(),index_in_group:b,label:a.getLabel(),logging_id:d==null?void 0:(c=d.logging)==null?void 0:c.loggingID,sequence_id:d==null?void 0:(b=d.logging)==null?void 0:b.sequenceID,source:k(a)}}function k(a){__p&&__p();a=a.getMetaData();if(a==null)return"backend";a=a.markers;if(a.has("see_all"))return"escape";if(a.has("echo"))return"echo";if(a.has("recent"))return"recent_searches";return a.has("bootstrap")?"bootstrap":"backend"}e.exports=a}),null);
__d("VideoHomeLiveComponentWithClickToTahoeOrScrollTop.react",["requireCond","React","cr:1279507","VideoComponent","cr:1289297","cr:1289298","cr:1289299","cr:1289300","cr:1279508","VideoWithClickToTahoe"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){var c=new(b("VideoWithClickToTahoe"))(a,this.props.videoPermalink,this.props.videoChannelID,this.props.caller,this.props.isOfferVideo,a.getPlayerOrigin(),a.getPlayerSuborigin(),this.props.storyIdentifier,this.props.feedLocation,this.props.reactionVideoChannelType,null,this.props.externalLogID);if(b("cr:1279507")!=null&&b("cr:1279508")!=null){var d=new(b("cr:1279508"))(a,this.$1);d.disable();this.subscriptionsHandler=new(b("cr:1279507"))();this.subscriptionsHandler.addSubscriptions(a.addListener("enterWatchAndScroll",function(){c.disable(),d.enable()}),a.addListener("exitWatchAndScroll",function(){c.enable(),d.disable()}))}};d.disable=function(){var a;(a=this.subscriptionsHandler)==null?void 0:a.release()};d.$1=function(){if(!b("cr:1289300")||!b("cr:1289299")||!b("cr:1289297")||!b("cr:1289298"))return;b("cr:1289300").log({event:b("cr:1289299").CLICK,click_point:b("cr:1289297").LIVE_WNS,click_target:b("cr:1289298").VIDEO})};d.shouldComponentUpdate=function(){return!1};d.render=function(){return null};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoHomeLiveComponentWithMuteObserver.react",["CometVideoHomeLiveContext","React","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.subscriptions=new(b("SubscriptionsHandler"))(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.enable=function(a){var b=this;this.subscriptions.addSubscriptions(a.addListener("muteVideo",function(){b.context.setVideoMuted(!0)}),a.addListener("unmuteVideo",function(){b.context.setVideoMuted(!1)}))};d.disable=function(){};d.componentWillUnmount=function(){this.subscriptions.release()};d.render=function(){return null};return c}(b("React").Component);a.contextType=b("CometVideoHomeLiveContext");e.exports=a}),null);
__d("VideoHomeLiveComponentWithUpNext.react",["cx","requireDeferred","CometTahoeUpNextOverlay.react","CometVideoHomeLiveContext","React","RelayFBEnvironment","RelayModern","SubscriptionsHandler","VideoHomeVisibilityUtils","XVideoHomeLiveController","requestIdleCallback","VideoHomeLiveComponentWithUpNextQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var j=b("requireDeferred")("VideoHomeTypedLoggerLite"),k=5;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={cancelled:!1,hidden:!0,playerFinished:!1},d.subscriptions=new(b("SubscriptionsHandler"))(),d.$2=function(){d.setState({cancelled:!0})},d.$1=function(){d.vpc&&b("VideoHomeVisibilityUtils").isVisible(d.vpc)?d.setState({hidden:!1}):b("requestIdleCallback")(d.$1)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.enable=function(a){var b=this;this.vpc=a;this.subscriptions.addSubscriptions(a.addListener("stateChange",function(){var c=a.getState()==="finished";b.setState({playerFinished:c});c&&b.$1()}))};d.disable=function(){};d.componentWillUnmount=function(){this.subscriptions.release()};d.render=function(){__p&&__p();var a=this,c=this.state,d=c.cancelled,e=c.hidden;c=c.playerFinished;return!this.vpc||d||e||!c?null:b("React").jsx(i,{environment:b("RelayFBEnvironment"),query:h!==void 0?h:h=b("VideoHomeLiveComponentWithUpNextQuery.graphql"),render:function(c){__p&&__p();var d=c.error;c=c.props;if(d||c==null)return null;var e=(d=c.video_home_section.section_components)==null?void 0:(c=d.nodes)==null?void 0:(d=c[0])==null?void 0:(c=d.feed_unit)==null?void 0:(d=c.attachments)==null?void 0:(c=d[0])==null?void 0:c.media;d=b("XVideoHomeLiveController").getURIBuilder().setFBID("v",e.id).getURI();c=function(){a.context.setHotswapVideoID(e.id),j.onReady(function(a){a.log({event:"www_live_hero_up_next_chain",event_target:"video",event_target_id:e.id})})};return b("React").jsx("div",{className:"_8dj5",children:b("React").jsx("div",{className:"_8dio",children:b("React").jsx(b("CometTahoeUpNextOverlay.react"),{isMakingProgress:!0,video:e,navigateToNextVideo:c,nextVideoURL:d,onCancelCallback:a.$2,onProgressDone:c,timeoutSec:k,visible:!0})})})},variables:{}})};return c}(b("React").PureComponent);a.contextType=b("CometVideoHomeLiveContext");e.exports=a}),null);
__d("VideoComponentWithMetadataOverlay.react",["React","SubscriptionsHandler","VideoMetadataOverlay.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={hidden:!1,vpc:null},d.subscriptionsHandler=new(b("SubscriptionsHandler"))(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.enable=function(a){var b=this;this.setState({vpc:a});this.subscriptionsHandler.addSubscriptions(a.addListener("enterWatchAndScroll",function(){b.setState({hidden:!0})}),a.addListener("exitWatchAndScroll",function(){b.setState({hidden:!1})}))};d.disable=function(){this.subscriptionsHandler.release()};d.render=function(){return!this.state.vpc||this.state.hidden?null:b("React").jsx(b("VideoMetadataOverlay.react"),{overlay:this.props.overlay,vpc:this.state.vpc})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("VideoHomeVideoOwnerLink.react",["Link.react","React","RelayHooks","XVideoHomeShowController","VideoHomeVideoOwnerLink_video.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("RelayHooks").graphql;var h=b("RelayHooks").useFragment;function a(a){var c,d=a.children,e=a.video;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","video"]);e=h(g!==void 0?g:g=b("VideoHomeVideoOwnerLink_video.graphql"),e);e=(e==null?void 0:(c=e.owner)==null?void 0:c.uri_token)||(e==null?void 0:(c=e.owner)==null?void 0:c.id);if(e==null)return b("React").jsx(b("React").Fragment,{children:d});c=b("XVideoHomeShowController").getURIBuilder().setString("section_id",e).getURI();return b("React").jsx(b("Link.react"),babelHelpers["extends"]({},a,{href:c,children:d}))}e.exports=a}),null);
__d("VideoHomeLiveHeroPlayerOverlay.react",["cx","fbt","Badge.react","Image.react","LineClamp.react","React","RelayHooks","VideoBroadcastStatus","VideoHomeVerifiedPageTooltip.react","VideoHomeVideoOwnerLink.react","VideoHomeLiveHeroPlayerOverlay_video.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;b("RelayHooks").graphql;var j=b("RelayHooks").useFragment;function a(a){var c,d,e;a=a.video;a=j(i!==void 0?i:i=b("VideoHomeLiveHeroPlayerOverlay_video.graphql"),a);c=a.name!=null&&a.name!==""?a.name:(c=a.savable_description)==null?void 0:c.text;d=(d=a.owner)==null?void 0:(d=d.profile_picture)==null?void 0:d.uri;e=(e=a.owner)==null?void 0:e.name;var f=a.broadcast_status===b("VideoBroadcastStatus").LIVE;return b("React").jsxs(b("React").Fragment,{children:[!f&&b("React").jsx("div",{className:"_8ts-"}),b("React").jsxs("div",{className:"_8nga"+(f?"":" _8ts_")+(f&&a.live_rewind_enabled?" _8y-i":""),children:[b("React").jsx(b("VideoHomeVideoOwnerLink.react"),{video:a,children:b("React").jsx(b("Image.react"),{className:"_8ngb",height:36,src:d,width:36})}),b("React").jsxs("div",{className:"_8ngc",children:[c!=null&&c!==""&&b("React").jsx(b("LineClamp.react"),{className:"_8ngd",lineHeight:20,lines:1,children:c}),b("React").jsxs("div",{className:"_8tt0",children:[b("React").jsx(b("VideoHomeVideoOwnerLink.react"),{className:"_8nge",video:a,children:e}),((d=a.owner)==null?void 0:d.is_verified)&&b("React").jsx(b("VideoHomeVerifiedPageTooltip.react"),{children:b("React").jsx(b("Badge.react"),{size:"xsmall",type:"verified"})}),!f&&h._("{space} was live",[h._param("space"," ")])]})]})]})]})}e.exports=a}),null);
__d("VideoHomeLiveHeroPlayer.react",["cx","requireCond","requireDeferred","CometVideoHomeLiveAutoplayContext","CometVideoHomeLiveContext","Image.react","React","RelayHooks","VideoComponentContextMenu.react","VideoComponentDebugOverlay.react","VideoComponentEmbeddedControls.react","VideoComponentWithExternalLogger.react","VideoHomeLiveComponentWithClickToTahoeOrScrollTop.react","VideoHomeLiveComponentWithMuteObserver.react","cr:1269304","VideoHomeLoggingExternalLogIDContext","deferredLoadComponent","VideoComponentLiveVideoIndicator.react","VideoComponentPlayButton.react","VideoComponentStreamingReactionTray.react","VideoComponentWithLiveBroadcast.react","VideoComponentWithMetadataOverlay.react","VideoComponentWithTahoeExitAutoplay.react","VideoDataContainer.react","VideoHomeLiveComponentWithUpNext.react","VideoHomeLiveHeroPlayerOverlay.react","VideoPlayer.react","VideoHomeLiveHeroPlayer_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("React").useContext,j=b("React").useEffect,k=b("React").useState;b("RelayHooks").graphql;var l=b("RelayHooks").useFragment,m=b("deferredLoadComponent")(b("requireDeferred")("VideoComponentLiveEndScreen.react")),n=b("deferredLoadComponent")(b("requireDeferred")("VideoComponentLiveInterruptedScreen.react")),o=b("requireDeferred")("VideoHomeTypedLoggerLite");function a(a){__p&&__p();var c=l(h!==void 0?h:h=b("VideoHomeLiveHeroPlayer_video.graphql"),a.video),d=k(!0),e=d[0],f=d[1];d=i(b("CometVideoHomeLiveAutoplayContext"));var g=i(b("CometVideoHomeLiveContext")),p=g.setHeroVideoID;g=g.videoMuted;var q=c.id;j(function(){p(q)},[p,q]);var r=i(b("VideoHomeLoggingExternalLogIDContext"));if(c==null||q==null||c.url==null)return null;var s=a.reactionVideoChannelType||"video_home_www_live_hero",t=a.playerOrigin||"video_home";a=a.playerSubOrigin||"topic_live";var u=function(){o.onReady(function(a){a.log({event:"click",event_target:"video",event_target_id:q,event_target_info:c.url,section_video_channel_type:s})})},v="DEFAULT";return b("React").jsx("div",{className:"_8n18",children:b("React").jsxs("div",{className:"_150c",children:[!e&&b("React").jsx(b("Image.react"),{className:"_3chq",src:(e=c.image)==null?void 0:e.uri}),b("React").jsx(b("VideoDataContainer.react"),{onVideoLoaded:function(){f(!1)},renderLoading:function(){return b("React").jsx("div",{className:"_53j5",style:{width:"100%",height:"100%"},children:b("React").jsx("i",{className:"_5l7x"})})},videoID:q,children:b("React").jsxs(b("VideoPlayer.react"),{autoplay:!!d,disableClickPlayPause:!0,onVideoClick:u,playerOrigin:t,reactionVideoChannelType:s,startMuted:g,subOrigin:a,videoData:b("VideoDataContainer.react").VIDEO_DATA_PLACEHOLDER,children:[b("React").jsx(b("VideoComponentLiveVideoIndicator.react"),{}),b("React").jsx(b("VideoComponentWithLiveBroadcast.react"),{}),b("React").jsx(n,{}),b("React").jsx(m,{}),b("React").jsx(b("VideoComponentDebugOverlay.react"),{}),b("React").jsx(b("VideoComponentContextMenu.react"),{}),b("React").jsx(b("VideoHomeLiveComponentWithClickToTahoeOrScrollTop.react"),{caller:"channel_view_from_video_home",externalLogID:r,reactionVideoChannelType:s,videoPermalink:c.url,videoChannelID:(e=c.video_channel)==null?void 0:e.id,isOfferVideo:!1}),b("React").jsx(b("VideoComponentEmbeddedControls.react"),{hideControlsOnAutoplay:!0,showFullscreenButton:b("cr:1269304")===null,unhideControlsOnHover:!0,gamesVideoCreatorClippingGK:((t=(d=c.live_video_config)==null?void 0:(u=d.clipping_config)==null?void 0:u.is_enabled)!=null?t:!1)&&((g=c.live_video_config)==null?void 0:(a=g.clipping_config)==null?void 0:a.creation_source)===v,isLiveRewindEnabled:c.live_rewind_enabled}),b("React").jsx(b("VideoComponentStreamingReactionTray.react"),{}),b("React").jsx(b("VideoComponentWithTahoeExitAutoplay.react"),{}),b("React").jsx(b("VideoComponentWithMetadataOverlay.react"),{overlay:b("React").jsx(b("VideoHomeLiveHeroPlayerOverlay.react"),{video:c})}),b("VideoHomeLiveComponentWithUpNext.react")!=null&&b("React").jsx(b("VideoHomeLiveComponentWithUpNext.react"),{}),b("React").jsx(b("VideoHomeLiveComponentWithMuteObserver.react"),{}),b("React").jsx(b("VideoComponentPlayButton.react"),{}),b("React").jsx(b("VideoComponentWithExternalLogger.react"),{externalLogID:r,playerOrigin:"video_home",playerSuborigin:"topic_live"}),b("cr:1269304")&&b("React").jsx(b("cr:1269304"),{})]})})]})})}e.exports=a}),null);
__d("FluxHooks",["FluxContainerSubscriptions","React","shallowEqual","useSubscriptionValue"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(d=b("React")).useCallback,h=d.useEffect,i=d.useRef,j=d.useState;function a(a,c){var d=g(function(d){var e=c(a);return d!=null&&b("shallowEqual")(d,e)?d:e},[a,c]),e=g(function(b){var c=a.addListener(b);return function(){return c.remove()}},[a]);return b("useSubscriptionValue")({getCurrentValue:d,subscribe:e})}function c(a,c,d){__p&&__p();var e=g(function(c){var d=a(c);return c!=null&&b("shallowEqual")(c,d)?c:d},d),f=g(function(a){if(c.length===0)return function(){};var d=new(b("FluxContainerSubscriptions"))("useCalculateState");d.setStores(c);d.addListener(a);return function(){return d.reset()}},c);d=j(function(){return e()});var k=d[0],l=d[1];d=function(){l(e)};var m=i(d);m.current=d;var n=j(function(){return e}),o=n[0];n=n[1];o!==e&&(n(function(){return e}),d());h(function(){var a=!1,b=function(){a||m.current()},c=f(b);m.current();return function(){a=!0,c()}},[m,f]);return[k,l]}e.exports={useFluxStore:a,useCalculateState:c}}),null);
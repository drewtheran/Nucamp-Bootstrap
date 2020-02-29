if (self.CavalryLogger) { CavalryLogger.start_js(["PNurR"]); }

__d("CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},b={kind:"Variable",name:"scale",variableName:"scale"},c={kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"SplitOperation",name:"CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer$normalization",metadata:{derivedFrom:"CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer"},selections:[a,{kind:"ScalarField",alias:null,name:"is_prod_eligible",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"attachment",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"mediaset_token",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"all_subattachments",storageKey:"all_subattachments(first:5)",args:[{kind:"Literal",name:"first",value:5}],concreteType:"SubattachmentsConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"deduplication_key",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"media",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"ScalarField",alias:null,name:"is_playable",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:[b,{kind:"Literal",name:"width",value:584}],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},c,d]},{kind:"InlineFragment",type:"Photo",selections:[a,{kind:"LinkedField",alias:"viewer_image",name:"image",storageKey:null,args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},b],concreteType:"Image",plural:!1,selections:[c,d]},e,{kind:"ScalarField",alias:null,name:"accessibility_caption",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"focus",storageKey:null,args:null,concreteType:"Vect2",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"x",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"y",args:null,storageKey:null}]}]},{kind:"InlineFragment",type:"Video",selections:[a,e,{kind:"ScalarField",alias:null,name:"original_width",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"original_height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"broadcaster_origin",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"broadcast_status",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_live_streaming",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_looping",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"loop_count",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_spherical",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"permalink_url",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"captions_url",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"dash_prefetch_experimental",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"broadcaster_desired_latency_ms",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"broadcaster_latency_tolerance_ms",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_use_oz",args:null,storageKey:null},{kind:"ScalarField",alias:"playable_url_dash",name:"playable_url",args:[{kind:"Literal",name:"scrubbing_preference",value:"MPEG_DASH"}],storageKey:'playable_url(scrubbing_preference:"MPEG_DASH")'},{kind:"ScalarField",alias:null,name:"dash_manifest",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"min_quality_preference",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"playable_url",args:null,storageKey:null},{kind:"ScalarField",alias:"playable_url_quality_hd",name:"playable_url",args:[{kind:"Literal",name:"quality",value:"HD"}],storageKey:'playable_url(quality:"HD")'},{kind:"ScalarField",alias:null,name:"autoplay_gating_result",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"viewer_autoplay_setting",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_autoplay",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"drm_info",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"captions_settings",storageKey:null,args:null,concreteType:"CaptionsSettings",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"always_show_captions",args:null,storageKey:null},e]},{kind:"LinkedField",alias:null,name:"instream_video_ad_breaks_comet",storageKey:null,args:null,concreteType:"InstreamVideoAdBreaks",plural:!1,selections:[{kind:"ModuleImport",documentName:"VideoPlayerRelay_video",fragmentName:"InstreamVideoAdBreaksPlayer_adBreaks",fragmentPropName:"adBreaks"}]},{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,e]}]},e,{kind:"InlineFragment",type:"GenericAttachmentMedia",selections:[e]}]},{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'}]}]},{kind:"LinkedField",alias:null,name:"comet_product_tag_feed_overlay_renderer",storageKey:'comet_product_tag_feed_overlay_renderer(supported:["CometProductTagFeedOverlayRenderer"])',args:[{kind:"Literal",name:"supported",value:["CometProductTagFeedOverlayRenderer"]}],concreteType:null,plural:!1,selections:[a,{kind:"InlineFragment",type:"CometProductTagFeedOverlayRenderer",selections:[{kind:"ModuleImport",documentName:"CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer",fragmentName:"CometProductTagFeedOverlayRenderer_renderer",fragmentPropName:"renderer"}]}]}]}]}}();e.exports=a}),null);
__d("CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer",type:"StoryAttachmentAlbumStyleRenderer",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"attachment",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"comet_product_tag_feed_overlay_renderer",storageKey:'comet_product_tag_feed_overlay_renderer(supported:["CometProductTagFeedOverlayRenderer"])',args:[{kind:"Literal",name:"supported",value:["CometProductTagFeedOverlayRenderer"]}],concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"CometProductTagFeedOverlayRenderer",selections:[{kind:"ModuleImport",documentName:"CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer",fragmentName:"CometProductTagFeedOverlayRenderer_renderer",fragmentPropName:"renderer"}]}]},{kind:"FragmentSpread",name:"CometFeedStoryAlbumAttachment_attachment",args:null}]},{kind:"FragmentSpread",name:"useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion",args:null}]};e.exports=a}),null);
__d("CometAlbumGridLayoutChild_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometAlbumGridLayoutChild_photo",type:"Photo",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"FragmentSpread",name:"useCometPhotoViewerPlaceholderPassthroughProps_photo",args:null}]};e.exports=a}),null);
__d("CometAlbumGridLayoutChild_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometAlbumGridLayoutChild_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"FragmentSpread",name:"VideoPlayerRelay_video",args:null}]};e.exports=a}),null);
__d("CometFeedStoryAlbumAttachment_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Fragment",name:"CometFeedStoryAlbumAttachment_attachment",type:"StoryAttachment",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"scale",type:"Float"}],selections:[{kind:"ScalarField",alias:null,name:"mediaset_token",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"all_subattachments",storageKey:"all_subattachments(first:5)",args:[{kind:"Literal",name:"first",value:5}],concreteType:"SubattachmentsConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"deduplication_key",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"media",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_playable",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:584}],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Photo",selections:[a,b,{kind:"ScalarField",alias:null,name:"accessibility_caption",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"focus",storageKey:null,args:null,concreteType:"Vect2",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"x",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"y",args:null,storageKey:null}]},{kind:"FragmentSpread",name:"CometAlbumGridLayoutChild_photo",args:null}]},{kind:"InlineFragment",type:"Video",selections:[a,b,{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[b]},{kind:"ScalarField",alias:null,name:"playable_url",args:null,storageKey:null},{kind:"FragmentSpread",name:"CometAlbumGridLayoutChild_video",args:null}]}]},{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'}]}]}]}}();e.exports=a}),null);
__d("CometFeedFocusMedia.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={media:{bottom:"i09qtzwb",end:"n7fi1qx3",height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},root:{height:"do00u71z",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7"},wrapper:{position:"pmk7jnqg",top:"kr520xx4"}};function a(a){var c,d=a.children,e=a.mediaHeight,f=a.mediaWidth,i=a.viewportAspectRatio,j=a.xstyle;c=(c=a.focusX)!=null?c:.5;a=(a=a.focusY)!=null?a:.5;var k=f/e,l,m,n,o;k<i?(a=a,l=i/k,n="calc(("+i+"/("+f+"/"+e+"))*100%)",o="100%",m="top"):(a=c,n="100%",l=k/i,o="calc((("+f+"/"+e+")/"+i+")*100%)",m="left");c=Math.max(Math.min(.5-l*a,0),1-l);return b("React").jsx("div",{className:(g||(g=b("stylex")))(h.root,j),style:{paddingTop:100/i+"%"},children:b("React").jsx("div",{className:g(h.wrapper),style:(k={height:n},k[m]=c*100+"%",k.width=o,k),children:d(h.media)})})}e.exports=a}),null);
__d("CometFeedFocusImage.react",["CometFeedFocusMedia.react","CometImage.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h={border:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",borderBottom:"linmgsc8",borderTop:"opwvks06",pointerEvents:"hzruof5a"},root:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"}};function a(a){var c=a.alt,d=a.focusX,e=a.focusY,f=a.imageHeight,i=a.imageWidth,j=a.src;a=a.viewportAspectRatio;return b("React").jsxs("div",{className:(g||(g=b("stylex")))(h.root),children:[b("React").jsx(b("CometFeedFocusMedia.react"),{focusX:d,focusY:e,mediaHeight:f,mediaWidth:i,viewportAspectRatio:a,children:function(a){return b("React").jsx(b("CometImage.react"),{alt:c,className:(g||(g=b("stylex")))(a),src:j})}}),b("React").jsx("div",{className:g(h.border)})]})}e.exports=b("React").memo(a)}),null);
__d("VideoPlayerDefaultControls.react",["React","VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerFullscreenControl.react","VideoPlayerHooks","VideoPlayerLiveVideoControls.react","VideoPlayerPlaybackControl.react","VideoPlayerPlaybackTimer.react","VideoPlayerScrubber.react","VideoPlayerScrubberPreview.react","VideoPlayerSettingsControl.react","VideoPlayerTimeIndicator.react","VideoPlayerVolumeControl.react","useVideoPlayerBigPlayButtonOverlay","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("VideoPlayerHooks").useIsLive,h=b("VideoPlayerHooks").useMuted;function a(a){__p&&__p();var c=a.forceVisible,d=a.video;a=h();var e=g(),f=b("useVideoPlayerDefaultControlsVisibility")({forceVisible:c}),i=f.isControlsVisible;f=f.onUserInteraction;c=b("useVideoPlayerBigPlayButtonOverlay")({forceVisible:c});var j=c.bigPlayButtonElement;c=c.bigPlayButtonIsVisible;i=i&&!c;e=e?b("React").jsx(b("VideoPlayerLiveVideoControls.react"),{isBigPlayButtonVisible:c,isControlsVisible:i,isMuted:a,onUserInteraction:f,videoTahoeUrl:null}):b("React").jsxs(b("VideoPlayerControlsContainerOverlay.react"),{isBackgroundVisible:i,children:[b("React").jsxs(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:i,children:[b("React").jsx(b("VideoPlayerPlaybackControl.react"),{}),b("React").jsx(b("VideoPlayerPlaybackTimer.react"),{})]}),b("React").jsx(b("VideoPlayerControlsGroups.react").Expanded,{isVisible:i,children:b("React").jsx(b("VideoPlayerScrubber.react"),{onUserInteraction:f,renderTooltip:function(a){return d?b("React").jsx(b("VideoPlayerScrubberPreview.react"),{timestampSec:a,video:d}):b("React").jsx(b("VideoPlayerTimeIndicator.react"),{shouldCenterSelf:!0,timestampSec:a})}})}),b("React").jsxs(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:i,noPaddingEnd:!0,children:[b("React").jsx(b("VideoPlayerSettingsControl.react"),{onUserInteraction:f}),b("React").jsx(b("VideoPlayerFullscreenControl.react"),{onUserInteraction:f})]}),b("React").jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:(a||i)&&!c,noPaddingStart:!0,children:b("React").jsx(b("VideoPlayerVolumeControl.react"),{onUserInteraction:f})})]});return b("React").jsxs(b("React").Fragment,{children:[j,e]})}e.exports=a}),null);
__d("CometAlbumGridLayout.react",["fbt","CometFeedFocusImage.react","CometPressable.react","CometProductTaggingLoggingUtils","CometRelay","CometTrackingCodeContext","CometTrackingNodeProvider.react","CometTrackingNodesContext","GlobalVideoPortsContexts","React","ReactComposerCollageLayoutSelection","VideoPlayerDefaultControls.react","VideoPlayerInteractionOverlay.react","VideoPlayerRelay.react","VideoPlayerSurface.react","cometTestID","getAggregatedStoryTrackingNodeIndex","stylex","useCometPhotoViewerPlaceholderPassthroughProps","CometAlbumGridLayoutChild_photo.graphql","CometAlbumGridLayoutChild_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j,k=b("CometProductTaggingLoggingUtils").logProductTagPostClick;b("CometRelay").graphql;var l=b("CometRelay").useFragment,m=b("GlobalVideoPortsContexts").useVideoPlayerPortalingPlaceInfo,n=b("React").useContext,o=b("React").useLayoutEffect,p=b("React").useState,q=b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,r={grid:{position:"l9j0dhe7"},gridCell:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"pmk7jnqg"},imageButton:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",":active":{transform:"tm8avpzi"}},mediaPressed:{backgroundColor:"r9n4d945"},overlay:{alignItems:"bp9cbjyn",backgroundColor:"sx5rzos5",bottom:"i09qtzwb",display:"j83agx80",end:"n7fi1qx3",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},overlayText:{color:"qrtewk5h",fontSize:"mhxlubs3",fontWeight:"lrazzd5p",textAlign:"oqcyycmt"},root:{position:"l9j0dhe7"}},s=2;function a(a){__p&&__p();var c=a.adID,d=a.attachments,e=a.hasProductTags,f=a.initialTracePolicy,g=a.numItemsNotShown,h=a.subOrigin,i=a.urls;a=d.reduce(function(a,b,c){a.set(c,[b.width,b.height]);return a},new Map());a=b("ReactComposerCollageLayoutSelection").getBestUserCollageLayout(a);var k=Array.from(a.entries()).map(function(a){var b=a[0];a=a[1];return{attachment:d[b],columnSpan:a.getWidth(),columnStart:a.getLeft(),rowSpan:a.getHeight(),rowStart:a.getTop()}}),l=k.reduce(function(a,b){return Math.max(a,b.columnStart+b.columnSpan)},0),m=k.reduce(function(a,b){return Math.max(a,b.rowStart+b.rowSpan)},0);return b("React").jsx("div",babelHelpers["extends"]({className:(j||(j=b("stylex")))(r.root)},b("cometTestID")("CometAlbumGridLayout"),{children:b("React").jsx("div",{className:j(r.grid),style:{paddingTop:"calc("+m*100+"% / "+l+")"},children:b("React").jsx(b("CometTrackingNodeProvider.react"),{trackingNode:110,children:k.map(function(a,d){return b("React").jsx(u,{adID:c,cell:a,gridCellLength:k.length,hasProductTags:e,i:d,initialTracePolicy:f,numColumns:l,numItemsNotShown:g,numRows:m,subOrigin:h,urls:i},(d=a.attachment)==null?void 0:d.id)})})})}))}function t(a){var c=a.setPortableVideoID;a=m();var d=a.currentVideoID;o(function(){c(d)},[d,c]);return b("React").jsxs(b("VideoPlayerSurface.react"),{children:[b("React").jsx(q,{}),b("React").jsx(b("VideoPlayerDefaultControls.react"),{})]})}function u(a){__p&&__p();var c,d,e,f,m=a.adID,o=a.cell,q=a.gridCellLength,u=a.hasProductTags,v=a.i,w=a.initialTracePolicy,x=a.numColumns,y=a.numItemsNotShown,z=a.numRows,A=a.subOrigin;a=a.urls;var B=n(b("CometTrackingCodeContext")),C=n(b("CometTrackingNodesContext"));C=b("getAggregatedStoryTrackingNodeIndex")(C);c=l(h!==void 0?h:h=b("CometAlbumGridLayoutChild_photo.graphql"),(c=o.attachment)==null?void 0:c.photo);d=l(i!==void 0?i:i=b("CometAlbumGridLayoutChild_video.graphql"),(d=o.attachment)==null?void 0:d.video);e=b("useCometPhotoViewerPlaceholderPassthroughProps")({photo:c,placeholderImageSrc:(e=o.attachment)==null?void 0:e.uri});var D=p(null),E=D[0];D=D[1];var F=o.attachment;if(F==null)return null;var G=F.accessibilityCaption,H=F.focusX,I=F.focusY,J=F.height,K=F.id,L=F.uri,M=F.url;F=F.width;G=(G=G)!=null?G:g._("Image in an album");H=d!=null?b("React").jsx(b("VideoPlayerRelay.react"),{autoplayComponentEnabled:!0,portalingEnabled:!0,subOrigin:(f=A)!=null?f:"media_collage",video:d,children:b("React").jsx(t,{setPortableVideoID:D})}):b("React").jsx(b("CometFeedFocusImage.react"),{focusX:(f=H)!=null?f:.5,focusY:(D=I)!=null?D:.5,imageHeight:J,imageWidth:F,src:L,viewportAspectRatio:o.columnSpan/o.rowSpan});f=o.columnSpan;I=o.columnStart;D=o.rowSpan;J=o.rowStart;F=y>0&&v===q-1;L=s/2+.01;var N=c!=null?c==null?void 0:c.id:d==null?void 0:d.id;o=function(){u===!0&&N!=null&&k(m,"CometAlbumGridLayout","newsfeed",N,"product_tag_on_newsfeed_"+N)};return b("React").createElement("div",babelHelpers["extends"]({},b("cometTestID")("CometAlbumGridCell-"+v),{className:(j||(j=b("stylex")))(r.gridCell),key:K,style:{bottom:"calc(("+(z-(J+D))*100+"% / "+z+") + "+(J+D<z?L:0)+"px)",left:"calc(("+I*100+"% / "+x+") + "+(I>0?L:0)+"px)",right:"calc(("+(x-(I+f))*100+"% / "+x+") + "+(I+f<x?L:0)+"px)",top:"calc(("+J*100+"% / "+z+") + "+(J>0?L:0)+"px)"}}),b("React").jsxs(b("CometPressable.react"),{"aria-label":d!=null?g._("Video in an album"):G,display:"block",hideHoverOverlay:!0,linkProps:{passthroughProps:babelHelpers["extends"]({index:C,initialTracePolicy:w,portableVideoID:E,subOrigin:A,trackingCode:B},e),rel:"theater",url:a?v<a.length?a[v]:M:M},onPress:o,overlayPressedStyle:r.mediaPressed,xstyle:r.imageButton,children:[H,F?b("React").jsx("div",{className:(j||(j=b("stylex")))(r.overlay),children:b("React").jsx("div",{className:(j||(j=b("stylex")))(r.overlayText),children:g._("+{num}",[g._param("num",y)])})}):null]}))}e.exports=a}),null);
__d("CometFeedStoryAlbumAttachment.react",["CometAlbumGridLayout.react","React","RelayHooks","XCometPhotoControllerRouteBuilder","XCometVideoControllerRouteBuilder","recoverableViolation","CometFeedStoryAlbumAttachment_attachment.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("RelayHooks").graphql;var h=b("RelayHooks").useFragment;function i(a,b){var c=a==null?void 0:a.deduplication_key;if(c!=null)return c;c=a==null?void 0:(c=a.media)==null?void 0:(a=c.image)==null?void 0:a.uri;return c!=null?c:"attachment-"+b}function j(a,c){__p&&__p();return c==null?[]:c.map(function(c,d){__p&&__p();var e,f,g,h,j,k;e=(e=c.media)==null?void 0:e.image;var l=c==null?void 0:c.url;f=(f=c.media)==null?void 0:f.id;g=(g=c.media)==null?void 0:g.is_playable;h=(h=c.media)==null?void 0:h.playable_url;if(e==null||l==null||g===!0&&h==null)return null;h=(h=c.media)==null?void 0:(h=h.owner)==null?void 0:h.id;l=l;g===!0?a!=null&&a!==""&&f!=null&&h!=null&&(l=b("XCometVideoControllerRouteBuilder").buildURL({fbid:f,set:a,vanity:h})):a!=null&&a!==""&&f!=null&&(l=b("XCometPhotoControllerRouteBuilder").buildURL({fbid:f,set:a}));h=e.height;f=e.uri;e=e.width;if(f==null||h==null||e==null)return null;d=i(c,d);j=(j=c==null?void 0:c.media)!=null?j:null;return{accessibilityCaption:(k=c.media)==null?void 0:k.accessibility_caption,focusX:(k=c.media)==null?void 0:(k=k.focus)==null?void 0:k.x,focusY:(k=c.media)==null?void 0:(c=k.focus)==null?void 0:c.y,height:h,id:d,isPlayable:g===!0,photo:(j==null?void 0:j.__typename)==="Photo"?j:null,uri:f,url:l,video:(j==null?void 0:j.__typename)==="Video"?j:null,width:e}}).filter(Boolean)}var k=g!==void 0?g:g=b("CometFeedStoryAlbumAttachment_attachment.graphql");function a(a){__p&&__p();var c=h(k,a.attachment);if(c==null){b("recoverableViolation")("attachment cannot be nullish in CometFeedStoryAlbumAttachmentStyle","comet_feed");return null}var d=c==null?void 0:c.all_subattachments;c=c==null?void 0:c.mediaset_token;c=j(c,d==null?void 0:d.nodes);if(d==null||c.length<1){b("recoverableViolation")("subattachments cannot be nullish or empty in CometFeedStoryAlbumAttachmentStyle","comet_feed");return null}d=d.count||0;d=d===c.length?0:d-c.length+1;return b("React").jsxs("div",{children:[b("React").jsx(b("CometAlbumGridLayout.react"),{adID:a.adID,attachments:c,hasProductTags:a.hasProductTags,initialTracePolicy:a.initialTracePolicy,numItemsNotShown:d,subOrigin:a.subOrigin,urls:a.urls}),a.productTagOverlay]})}e.exports=a}),null);
__d("CometFeedStoryAlbumAttachmentStyle.react",["CometFeedStoryAlbumAttachment.react","CometRelay","React","RelayHooks","unrecoverableViolation","useCometFeedStoryAttachmentMatchDebugger","usePlayerOriginRouteTracePolicy","CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("CometRelay").MatchContainer;b("RelayHooks").graphql;var i=b("RelayHooks").useFragment,j=g!==void 0?g:g=b("CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer.graphql");function a(a){var c=i(j,a.styleTypeRenderer);b("useCometFeedStoryAttachmentMatchDebugger")(c);c=c.attachment;var d=b("usePlayerOriginRouteTracePolicy")();if(c==null)throw b("unrecoverableViolation")("attachment cannot be nullish in CometFeedStoryAlbumAttachmentStyle","comet_feed");var e=b("React").jsx(h,{match:c.comet_product_tag_feed_overlay_renderer,props:{isVisible:!0,referralSurface:"newsfeed"}});return b("React").jsx(b("CometFeedStoryAlbumAttachment.react"),{adID:a.adID,attachment:c,hasProductTags:c.comet_product_tag_feed_overlay_renderer!=null,initialTracePolicy:d,productTagOverlay:e,subOrigin:"media_collage"})}e.exports=a}),null);
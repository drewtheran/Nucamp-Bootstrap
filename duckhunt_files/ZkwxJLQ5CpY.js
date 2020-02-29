if (self.CavalryLogger) { CavalryLogger.start_js(["Ziq7p"]); }

__d("LiveClockQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"client_time",type:"Float!",defaultValue:null}],b=[{kind:"LinkedField",alias:null,name:"live_video_clock",storageKey:null,args:[{kind:"Variable",name:"client_time",variableName:"client_time"}],concreteType:"LiveClock",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"client_time",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"server_time",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"request_time",args:null,storageKey:null}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"LiveClockQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"LiveClockQuery",argumentDefinitions:a,selections:b},params:{operationKind:"query",name:"LiveClockQuery",id:"1911660518872546",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFIInstanceAction",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={changeOrderingMode:function(a,b){return{type:"story_change_order_mode",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,mode:b}},toggleComments:function(a){return{type:"story_toggle_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},changeCommentListVisibility:function(a,b){return{type:"story_change_visibility",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,visibility:b}},init:function(a,b){return{type:"instance_init",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,payload:b}},didRequestVODComments:function(a){return{type:"requested_vod_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},didReceiveVODComments:function(a){return{type:"received_vod_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},remove:function(a){return{type:"story_remove",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},toggleAutoTranslateCommments:function(a){return{type:"toggle_auto_translate_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},toggleCommercialBreak:function(a,b){return{type:"story_toggle_commercial_break",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,inCommercial:b}},translateAll:function(a){return{type:"translate_all",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},foundVideoPlayerController:function(a,b){return{ftentidentifier:a.ftentidentifier,instanceID:a.instanceid,videoPlayerController:b,type:"found_video_player_controller"}}};e.exports=a}),null);
__d("CommentPrivacyValue",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DEFAULT_PRIVACY:0,OWNER_OR_COMMENTER:1,FRIENDS_ONLY:2,FRIENDS_AND_POST_OWNER:3,SIDE_CONVERSATION:4,SIDE_CONVERSATION_AND_POST_OWNER:5,GRAPHQL_MULTIPLE_VALUE_HACK_DO_NOT_USE:-1})}),null);
__d("FacecastStreamingCommentDelayTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FacecastStreamingCommentDelayLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FacecastStreamingCommentDelayLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FacecastStreamingCommentDelayLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.appid=a;return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setClientUserID=function(a){this.$1.client_userid=a;return this};c.setCommentID=function(a){this.$1.comment_id=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setProtocol=function(a){this.$1.protocol=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={appid:!0,appversion:!0,client_userid:!0,comment_id:!0,event:!0,protocol:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("UFISubscriptionUpdates",["fbt","BanzaiODS","CommentPrivacyValue","FacecastStreamingCommentDelayTypedLogger","IdentityBadgeUtils","ImmutableObject","ShortProfiles","UFICentralUpdates","UFIComments","UFIConstants","UFIReactionsUtils","UFISharedDispatcher","UFIStoryAction","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();b("BanzaiODS").setEntitySample("feedback",1e-4);var h={handleLiveLike:function(a,c,d){__p&&__p();b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_like_received");if(!c||!c.feedback_like_subscribe)return;d=c.feedback_like_subscribe.feedback;var e=c.feedback_like_subscribe.liker;if(!d||!e)return;var f=[{actiontype:b("UFIConstants").UFIActionType.LIKE_ACTION,actorid:e.id,clientid:c.feedback_like_subscribe.client_mutation_id,entidentifier:a,likesentences:{current:d.does_viewer_like?d.viewer_likes_sentence:d.viewer_does_not_like_sentence,alternate:d.does_viewer_like?d.viewer_does_not_like_sentence:d.viewer_likes_sentence},hasviewerliked:d.does_viewer_like,likecount:d.likers.count}],g=d.reactions_summary;if(g){g=b("UFIReactionsUtils").getReactionCountMapFromSummary(d.reactions_summary);var h=d.viewer_feedback_reaction_info?d.viewer_feedback_reaction_info.key:0,i=d.reaction_count_reduced?d.reaction_count_reduced:d.reactors.count;f.push({actiontype:b("UFIConstants").UFIActionType.REACTION,actorid:e.id,clientid:c.feedback_like_subscribe.client_mutation_id,entidentifier:a,viewerreaction:h,reactioncount:d.reactors.count,reactioncountreduced:i,reactioncountmap:g,reactionsentences:{current:h?d.viewer_likes_reaction_sentence:d.viewer_does_not_like_reaction_sentence,alternate:h?d.viewer_does_not_like_reaction_sentence:d.viewer_likes_reaction_sentence}})}b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{actions:f})},handleLiveShares:function(a,c,d){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_share_received");d=c&&c.feedback.share_count_reduced!==null;if(!d)return;d=[{actiontype:b("UFIConstants").UFIActionType.SHARE_COUNT_UPDATE_ACTION,sharecountreduced:c.feedback.share_count_reduced,entidentifier:a}];b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{actions:d})},handleLiveComment:function(a,c,d){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_comment_received");d=c&&c.comment;if(!d)return;a=this.prepareCommentData(a,d,c.client_mutation_id);c.serialized_short_profiles&&b("ShortProfiles").setMulti(JSON.parse(c.serialized_short_profiles));b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{comments:[a]})},handleLiveStreamingComment:function(a,c,d,e){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_streaming_comment_received");var f=c&&c.comment;if(!f)return;e&&new(b("FacecastStreamingCommentDelayTypedLogger"))().setCommentID(f.legacy_fbid).setEvent("push").log();var g=this.prepareCommentData(a,f,c.client_mutation_id);c.serialized_short_profiles&&b("ShortProfiles").setMulti(JSON.parse(c.serialized_short_profiles));b("requireWeak")("UFILiveStreamingComments",function(b){b.enqueueSubscribedComment(a,{comments:[g],streamingstate:"live",priority:f.live_streaming_comment_priority},c.feedback.top_level_comments.total_count)})},handleLiveStreamingReply:function(a,c,d){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_streaming_reply_received");if(c==null)return;d=c.comment;if(d==null)return;a=this.prepareCommentData(a,d,c.client_mutation_id);c.serialized_short_profiles&&b("ShortProfiles").setMulti(JSON.parse(c.serialized_short_profiles));b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.STREAMING,{comments:[a],streamingstate:"live",priority:d.live_streaming_comment_priority})},prepareCommentData:function(a,c,d){__p&&__p();d===void 0&&(d=null);a={__typename:"saved",author:c.author.id,body:c.body,cancomment:c.feedback.can_viewer_comment,canedit:c.can_viewer_edit,canremove:c.can_viewer_delete,canreport:c.can_viewer_report,canembed:c.can_viewer_embed,ftentidentifier:a,id:c.legacy_token,fbid:c.legacy_fbid,legacyid:c.legacy_fbid,timestamp:{time:c.created_time,text:g._("a few seconds ago")},hasviewerliked:c.feedback.does_viewer_like,identityBadges:b("IdentityBadgeUtils").fromLiveVideoCommentCreateSubscription(c.identity_badges_web||[]),isauthorbot:c.isauthorbot,isauthornoncoworker:c.is_author_non_coworker,isfeatured:c.is_featured,istranslatable:c.translation_available_for_viewer,likecount:c.feedback.likers.count,viewercanlike:c.feedback.can_viewer_like,parentcommentid:c.comment_parent&&c.comment_parent.legacy_token,parentcommentauthorid:(a=c)!=null?(a=a.comment_parent)!=null?(a=a.author)!=null?a.id:a:a:a,privacy_value:b("CommentPrivacyValue")[c.comment_privacy_value],spamreplycount:0,hasConstituentBadge:c.has_constituent_badge,moderator_badge_text:c.moderator_badge_text,videoTimeOffset:c.timestamp_in_video,canviewerpin:c.can_viewer_pin,canviewerunpin:c.can_viewer_unpin,ispinnedbyauthor:c.is_author_pinned};var e=c.written_while_video_was_live;c.timestamp_in_video!=null&&e!=null&&(a.postedLiveState=e?"Live":"OnDemand");d!=null&&(a.clientid=d);if(c.attachments&&c.attachments.length){e=Object.assign({},c.attachments[0]);d=e.style_list;if(d&&d.length){var f=d[0];if(f=="sticker"){var h=e.target;a.attachment={fbid:h.id,metadata:{source_uri:h.img.uri,source_uri_2x:h.img_2x.uri,width:h.img.width,height:h.img.height,frameCount:h.frame_count,frameRate:h.frame_rate,framesPerCol:h.frames_per_column,framesPerRow:h.frames_per_row,sprite_uri:h.sprite_img&&h.sprite_img.uri,sprite_uri_2x:h.sprite_img_2x&&h.sprite_img_2x.uri},type:"sticker"}}else if(f=="photo"){h=e.target;a.attachment={fbid:h.id,metadata:{preview_uri:h.photo_img&&h.photo_img.uri,width:h.photo_img.width,height:h.photo_img.height,url:h.url},type:"photo"}}else if(f=="share"||f=="image_share")e.type="live_share",a.attachment=e;else if(f=="animated_image_share"||f=="animated_image_autoplay"||f=="animated_image_video"||f=="animated_image_video_autoplay")e.type="gif",a.attachment=e;else if(f=="video_inline")e.type="video",a.attachment=e;else if(f=="file_upload")e.type="file",a.attachment=e;else if(f=="comment_place_info")e.type="live_comment_place_info",a.attachment=e;else if(f=="donation")e.type="donation",a.attachment=e;else if(f=="TIP_JAR_PAYMENT")e.type="TIP_JAR_PAYMENT",a.attachment=e;else if(f=="chat_command_result")e.type="chat_command_result",a.attachment=e;else if(f=="COMMENT_MESSAGE_INFO")e.type="upsell_info",a.attachment=e;else if(f=="gaming_video_chat_attachment"){h=d==null?void 0:d[1];h=="marketplace_ecomm_product_item"&&(e.type="marketplace_ecomm_product_item",a.attachment=e)}}}c.translated_body_for_viewer&&(a.translationdata={sourceDialectName:c.translatability_for_viewer.source_dialect_name,targetDialectName:c.translatability_for_viewer.target_dialect_name,translatedText:c.translated_body_for_viewer,trigger:c.translatability_for_viewer.translation_type});f=c.feedback;f.reactions_summary&&(a.canviewerreact=f.can_viewer_react,a.reactioncount=f.reactors.count,a.reactioncountmap=b("UFIReactionsUtils").getReactionCountMapFromSummary(f.reactions_summary),a.reactioncountreduced=f.reaction_count_reduced?f.reaction_count_reduced:f.reactors.count,a.viewerreaction=f.viewer_feedback_reaction_info?f.viewer_feedback_reaction_info.key:0);return a},handlePinnedCommentEvent:function(a,c,d){if(c){c=h.prepareCommentData(a.ftentidentifier,c,d);b("UFIComments").setComment(c.id,new(b("ImmutableObject"))(c));b("UFISharedDispatcher").dispatch(b("UFIStoryAction").pinComment(a,c.id))}else b("UFISharedDispatcher").dispatch(b("UFIStoryAction").unpinComment(a))},handleFeedbackPinnedComment:function(a,b){var c=b.pinned_streaming_comment_pin_subscribe.pin_event.pinned_comment;b=b.pinned_streaming_comment_pin_subscribe.client_subscription_id;this.handlePinnedCommentEvent(a,c,b)},handleLivePinnedComment:function(a,b,c){c=b.pinned_comment_event_create_subscribe;if(c){c=c.pinned_comment_event.pinned_comment;b=b.client_mutation_id;this.handlePinnedCommentEvent(a,c,b)}},handleLiveCommentLike:function(a,c,d){a=c&&c.comment_like_subscribe&&c.comment_like_subscribe.feedback;if(!a)return;d=null;a.reactions_summary&&(d={reactioncount:a.reactors.count,reactioncountmap:b("UFIReactionsUtils").getReactionCountMapFromSummary(a.reactions_summary),reactioncountreduced:a.reaction_count_reduced?a.reaction_count_reduced:a.reactors.count,viewerreaction:a.viewer_feedback_reaction_info?a.viewer_feedback_reaction_info.key:0});b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{actions:[{actiontype:b("UFIConstants").UFIActionType.COMMENT_LIKE,clientid:c.comment_like_subscribe.client_mutation_id,commentid:a.legacy_comment_token,likecount:a.likers&&a.likers.count,reactiondata:d,viewerliked:a.does_viewer_like}]})},handleFacecastCommentUpdate:function(a,c,d){a=c&&c.facecast_comment_update_subscribe&&c.facecast_comment_update_subscribe.comment&&c.facecast_comment_update_subscribe.comment.feedback;if(!a)return;d=null;a.reactions_summary&&(d={reactioncount:a.reactors.count,reactioncountmap:b("UFIReactionsUtils").getReactionCountMapFromSummary(a.reactions_summary),reactioncountreduced:a.reaction_count_reduced?a.reaction_count_reduced:a.reactors.count,viewerreaction:a.viewer_feedback_reaction_info?a.viewer_feedback_reaction_info.key:0});b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{actions:[{actiontype:b("UFIConstants").UFIActionType.COMMENT_LIKE,commentid:a.legacy_comment_token,likecount:a.likers&&a.likers.count,reactiondata:d,viewerliked:a.does_viewer_like}]})}};e.exports=h}),null);
__d("UFILiveVideoAutoscrollHandler",["DOM","UFIConstants","UFINewCommentsPillUtils","UFIUnseenCommentsStore","getOrCreateDOMID","queryThenMutateDOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){}var c=a.prototype;c.$2=function(a){a=b("DOM").scry(a,".UFILastComment");a=a.length>0?a[0]:null;var c=a?b("getOrCreateDOMID")(a):null;if(c===null||c===this.$1)return null;this.$1=c;return a};c.manageScroll=function(a,c,d,e){var f=this,g,h,i,j=0;b("queryThenMutateDOM")(function(){g=a.scrollHeight;h=a.offsetHeight;i=a.scrollTop;var b=f.$2(a);b&&(j=b.offsetHeight)},function(){var f=b("UFIUnseenCommentsStore").getCommentReactionsMenuShown(c.instanceid),k=g-h-i-j;d||k<b("UFIConstants").maxScrollDistanceForAutoScroll&&!f?(a.scrollTop=g-h,e&&e()):j>0&&b("UFINewCommentsPillUtils").updateScrolledUp(a,c)})};return a}();e.exports=a}),null);
__d("UFICommentLiveVideoAnnouncementImage.react",["ix","cx","CurrentUser","Image.react","React","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.$1();if(!a)return b("React").jsx("span",{});var c=b("CurrentUser").isWorkUser();return this.props.isJoinEvent?b("React").jsx("div",{className:"_15lj",children:b("React").jsx(b("Image.react"),{className:"_24l1",src:a})}):b("React").jsx("div",{className:"_15lj"+(c?"":" _z79")+(c?" _66n8":""),children:b("React").jsx(b("Image.react"),{className:"_15lk",height:20,src:a,width:20})})};d.$1=function(){__p&&__p();if(!this.props.isJoinEvent)if(b("CurrentUser").isWorkUser())return g("127093");else return g("114228");if(this.props.image)return this.props.image;switch(this.props.glyphName){case"comment":return g("114673");case"eye":return g("114860");case"bulb":return g("114492");case"like":return g("115160");default:return null}};return c}(b("React").PureComponent);e.exports=a}),null);
__d("LiveClockWWWTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LiveClockWWWLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LiveClockWWWLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LiveClockWWWLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientReceiveTimeMs=function(a){this.$1.client_receive_time_ms=a;return this};c.setClientSendTimeMs=function(a){this.$1.client_send_time_ms=a;return this};c.setRequestTimeMs=function(a){this.$1.request_time_ms=a;return this};c.setServerTimeMs=function(a){this.$1.server_time_ms=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={client_receive_time_ms:!0,client_send_time_ms:!0,request_time_ms:!0,server_time_ms:!0,time:!0,weight:!0};e.exports=a}),null);
__d("edgeIsInConnection",["nodeIsInConnection"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){c=c.getLinkedRecord("node");if(c==null){d&&d("Search edge has no node.");return!1}return b("nodeIsInConnection")(a,c,d)}e.exports=a}),null);
__d("LiveClock",["regeneratorRuntime","LiveClockWWWTypedLogger","RelayFBEnvironment","RelayModern","promiseDone","LiveClockQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").fetchQuery;b("RelayModern").graphql;var i=5e3,j=12e4,k=5,l=2e3,m=50,n=1e4,o=1e4,p=g!==void 0?g:g=b("LiveClockQuery.graphql");a=function(){__p&&__p();function a(){this.$1=null,this.$2=!1,this.$4=0,this.$5=o,this.$6=0,this.$7=0,this.$8=!1,this.$3=0,this.$10(0)}var c=a.prototype;c.$10=function(a){this.$6=0};c.startClock=function(a){this.$8||(this.$8=!0,a!=null&&(this.$1=a),this.$11())};c.stopClock=function(){this.$8=!1,window.clearTimeout(this.$9)};c.$11=function(){__p&&__p();var a;return b("regeneratorRuntime").async(function(c){__p&&__p();while(1)switch(c.prev=c.next){case 0:if(!this.$8){c.next=4;break}a=this.currentTimeMillis();c.next=4;return b("regeneratorRuntime").awrap(this.fetchTimes(a));case 4:case"end":return c.stop()}},null,this)};c.$12=function(a,c,d,e){var f,g,h;return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:f=(c-a+(d-e))/2,g=e-a-(d-c),this.$13(a,c,d,e),this.$14(f,g),this.$15(f,g),this.$2||(this.$2=!0,h=this.currentTimeMillis(),this.$1!=null&&this.$1(h));case 6:case"end":return b.stop()}},null,this)};c.$15=function(a,c){var d;return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:d=this.$16(a),d||(this.$7=0),d?(this.$7++,this.$5=m,this.$7>k&&(this.$5=l)):this.$17(c)?this.$5=o:(this.$5*=2,this.$5>j&&(this.$5=j),this.$5<o&&(this.$5=o));case 3:case"end":return b.stop()}},null,this)};c.$14=function(a,b){if(this.$17(b)){this.$4==0&&(this.$6+=a);return}this.$6+=a;this.$4++};c.fetchTimes=function(a){__p&&__p();var c=this;return b("regeneratorRuntime").async(function(d){__p&&__p();while(1)switch(d.prev=d.next){case 0:b("promiseDone")(h(b("RelayFBEnvironment"),p,{client_time:a},{force:!0}).then(function(a){if(a){var b=a.live_video_clock.client_time,d=a.live_video_clock.server_time*1e3;a=a.live_video_clock.request_time*1e3;var e=c.currentTimeMillis();c.$12(b,a,d,e);c.$9=window.setTimeout(function(){c.$11()},c.$5)}else return}));case 1:case"end":return d.stop()}},null,this)};c.currentTimeMillis=function(){return this.elapsedRealTimeMillis()+this.$3+this.$6};c.elapsedRealTimeMillis=function(){return Date.now()};c.$16=function(a){return Math.abs(a)>i};c.$17=function(a){return a>n};c.isRunning=function(){return this.$8};c.isReady=function(){return this.$2};c.$13=function(a,c,d,e){new(b("LiveClockWWWTypedLogger"))().setClientSendTimeMs(a).setRequestTimeMs(c).setServerTimeMs(d).setClientReceiveTimeMs(e).log()};return a}();e.exports=a}),null);
__d("LivingRoomProfileTileBadge.react",["cx","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.isCommentating||a.isSpeaking,d=a.isSpeaking?b("React").jsx("div",{className:"_6mm6",children:b("React").jsx("span",{className:"_6mlm"})}):null,e=a.asset===null,f=e||a.size==="small"?null:b("React").jsx(b("Image.react"),{className:(a.size==="regular"?"_6y-q":"")+(a.size==="large"?" _6y-r":"")+(a.size==="extra large"?" _7a6j":""),src:a.asset}),g="_6z5p"+(c?" _6y-l":"")+(c?"":" _6y-m")+(a.size==="small"?" _6y-n":"")+(a.size==="regular"?" _6y-o":"")+(a.size==="large"?" _6y-p":"")+(a.size==="extra large"?" _7a6k":"");g=b("React").jsx("div",{className:g,children:f});return b("React").jsxs(b("React").Fragment,{children:[a.size!=="small"?b("React").jsx("div",{className:"_6y-s"+(c?" _6y-t":"")+(c?"":" _6y-u")+(a.useBackgroundColor?" _7a6y":"")}):null,e?null:g,d]})}e.exports=a}),null);
__d("TimeOffset",["DateConsts"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={timeToTimestamp:function(a){if(a<=0)return"0:00";var b=Math.floor(a/3600),c=b?b+":":"";c+=((b?"0":"")+Math.floor(a%3600/60)).slice(-2)+":";return c+("0"+a%60).slice(-2)},timestampToTime:function(a){a=a.match(/(?:(\d{1,2}):)?(?:(\d{1,2}):)?(\d{1,2})/);if(!a)return-1;var c=parseInt(a[3],10);a[1]&&!a[2]?c+=parseInt(a[1],10)*b("DateConsts").SEC_PER_MIN:a[1]&&a[2]&&(c+=parseInt(a[1],10)*b("DateConsts").SEC_PER_HOUR+parseInt(a[2],10)*b("DateConsts").SEC_PER_MIN);return c}};e.exports=a}),null);
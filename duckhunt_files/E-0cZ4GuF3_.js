if (self.CavalryLogger) { CavalryLogger.start_js(["WyO9j"]); }

__d("ComposerXContextConfig",[],(function(a,b,c,d,e,f){e.exports={propertyNames:{actorID:"ACTOR_ID",postID:"POST_ID"},propertyValues:{ACTOR_ID:"actorID",POST_ID:"postID"}}}),null);
__d("TimelineProfilePictureLoggerEnums",[],(function(a,b,c,d,e,f){e.exports={actions:{ADD_FRAME:"add_frame",EDIT_THUMBNAIL:"edit_thumbnail",FROM_PHOTOS:"from_photos",MAKE_PROFILE:"make_profile",SILHOUETTE:"silhouette",SUGGESTION:"suggestion",SUGGESTION_UPLOAD:"suggestion_upload",SYNCED_PHOTO:"synced_photo",TAKE_PHOTO:"take_photo",UPLOAD:"upload_photo",USE_PREVIOUS:"use_previous"},flows:{PERMALINK:"permalink",SNOWLIFT:"snowlift",SPOTLIGHT:"spotlight",VAULT:"vault",ZOOMCROP:"zoomcrop"},steps:{CANCEL:"cancel",CROP:"crop",CROP_FAIL:"crop_fail",CROP_SAVING:"crop_saving",CROP_SUCCESS:"crop_success",DRAG_AND_DROP:"drag_and_drop",FAIL:"fail",INIT:"init",LOADING:"loading",PREVIOUS_PIC_FAIL:"previous_pic_fail",PREVIOUS_PIC_INIT:"previous_pic_init",PREVIOUS_PIC_SAVING:"previous_pic_saving",PREVIOUS_PIC_SUCCESS:"previous_pic_success",RESIZE_BEGIN:"resize_begin",RESIZE_SKIPPED:"resize_skipped",RESIZE_SUCCESS:"resize_success",RESIZE_FAIL:"resize_fail",SKIP_CROP:"skip_crop",SUCCESS:"success",UPLOAD_CANCEL:"upload_cancel",UPLOAD_SELECT:"upload_select",UPLOAD_SUCCESS:"upload_success",VIEWER_INIT:"viewer_init"}}}),null);
__d("ComposerXAttachmentBootstrap",["csx","cx","CSS","Form","FormSubmit","Parent","URI"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=[],k={bootstrap:function(a){k.load(b("Parent").byTag(a,"form"),a.getAttribute("data-endpoint"))},load:function(a,c,d){c=new(i||(i=b("URI")))(c).addQueryData({composerurihash:k.getURIHash(c)});b("CSS").conditionClass(a,"_fu",d);d=b("Parent").bySelector(a,"._2_4");b("CSS").removeClass(d,"async_saving");b("Form").setDisabled(a,!1);a.action=c.toString();b("FormSubmit").send(a)},getURIHash:function(a){if(a==="initial")return"initial";var b=j.indexOf(a);if(b!==-1)return b+"";else{b=j.length;j[b]=a;return b+""}}};e.exports=k}),null);
__d("ComposerXContext",["invariant","ComposerXContextConfig"],(function(a,b,c,d,e,f,g){__p&&__p();var h=function(a){return b("ComposerXContextConfig").propertyNames[a]};a=function(){"use strict";__p&&__p();function a(a){this.$1={};for(var b in a)this.setProperty(b,a[b])}var b=a.prototype;b.getProperty=function(a){h(a)||g(0,5921);return this.$1[a]};b.setProperty=function(a,b){h(a)||g(0,5922);this.$1[a]=b;return this};return a}();a.PROPERTIES=b("ComposerXContextConfig").propertyValues;e.exports=a}),null);
__d("ComposerXSessionIDInserter",["csx","ComposerXSessionIDs","DOM","DOMQuery","Event","Parent","onEnclosingPageletDestroy"],(function(a,b,c,d,e,f,g){__p&&__p();var h={init:function(a){var c=b("Event").listen(a,"submit",h._onSubmit);b("onEnclosingPageletDestroy")(a,function(){c.remove()})},_onSubmit:function(a){h.insertSessionInput(a.getTarget())},insertSessionInput:function(a){var c=b("Parent").bySelector(a,"._119");if(!c)return;c=b("ComposerXSessionIDs").getSessionID(c.id);if(!c)return;var d=b("DOMQuery").scry(a,"._5r_b")[0];!d?b("DOM").prependContent(a,b("ComposerXSessionIDs").createSessionIDInput(c)):d.value=c}};e.exports=h}),null);
__d("ComposerX",["csx","cx","ActorURI","Arbiter","ComposerXAttachmentBootstrap","ComposerXContext","ComposerXMarauderLogger","ComposerXSessionIDInserter","ComposerXSessionIDs","ComposerXStore","CSS","DOM","DOMQuery","PrivacySelector","PrivacySelectorNewDispatcher","SubscriptionsHandler","URI","getObjectValues","removeFromArray"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j="any";a=function(){"use strict";__p&&__p();function a(a){this._root=a,this._composerID=a.id,this._attachments={},this._context=new(b("ComposerXContext"))({}),b("ComposerXSessionIDs").resetSessionID(this._composerID),b("ComposerXSessionIDInserter").init(this._root),this._subscriptionsHandler=new(b("SubscriptionsHandler"))(),this._subscriptionsHandler.addSubscriptions(b("Arbiter").subscribe(["composer/publish","composer/close"],function(c,d){if(d.composer_id===this._composerID){this.reset();c=b("DOMQuery").scry(a,".hidden_target_specs");c&&c.length&&c.forEach(b("DOM").remove);b("Arbiter").inform("composer/publishDone",d)}}.bind(this))),this._subscriptionsHandler.addSubscriptions.apply(this._subscriptionsHandler,b("ComposerXMarauderLogger").listenForPostEvents(this._composerID,this._getContent())),this._attachmentFetchForm=b("DOMQuery").find(a,"._2_4"),b("Arbiter").inform("composer/ready",{},"state")}var c=a.prototype;c.getAttachment=function(a,c,d,e){a=this._augmentURI(a);var f=b("ComposerXAttachmentBootstrap").getURIHash(a);this._endpointHashToShow=f;var g=this._attachments[f];g&&!e?this._showAttachmentAfterComponentsLoaded(f,d):this.fetchAttachmentData(a,c,e)};c.fetchAttachmentData=function(a,c,d){a=this._augmentURI(a);var e=b("ComposerXAttachmentBootstrap").getURIHash(a);if(this._attachments[e]&&!d)return;this._currentFetchEndpoints.includes(e)||(b("ComposerXAttachmentBootstrap").load(this._attachmentFetchForm,a,c),this._currentFetchEndpoints.push(e))};c.setAttachment=function(a,c,d,e){b("removeFromArray")(this._currentFetchEndpoints,a),this._setupAttachment(a,c,d,e),this._showAttachmentAfterComponentsLoaded(a,!1)};c.setInitialAttachment=function(a,c,d,e,f){f&&(this._context=f);a=this._augmentURI(a);f=b("ComposerXAttachmentBootstrap").getURIHash(a);this._setupAttachment(f,c,d,e);this._initialAttachmentEndpoint=a;this._currentInstance||this._showAttachmentAfterComponentsLoaded(f,!0)};c.setComponent=function(a,c){b("ComposerXStore").get(this._composerID,a)||(b("ComposerXStore").set(this._composerID,a,c),b("DOM").appendContent(this._attachmentFetchForm,b("DOM").create("input",{type:"hidden",name:"loaded_components[]",value:a})))};c.reset=function(){__p&&__p();this._currentInstance&&(this._currentInstance.cleanup(),this._currentInstance=null);b("ComposerXSessionIDs").resetSessionID(this._composerID);for(var a in this._attachments)this._attachments[a].instance.reset();var c=b("ComposerXStore").getAllForComposer(this._composerID);b("getObjectValues")(c).forEach(function(a){a.reset&&a.reset(a)});c=b("PrivacySelector").getAdamaSelectorInstance(b("DOM").scry(this._root,"div._1lo2")[0]);var d=b("ComposerXStore").get(this._composerID,"mainprivacywidget");d=d&&d.instance&&d.instance.getInstance();c?d.setInstance(c):c=d&&d.getInstance();c&&c.shouldReplaceOnPost()&&b("PrivacySelectorNewDispatcher").handleUpdateFromSelector({selector_type:8787670733..toString(),post_param:"",unique_id:"_reloadStickySelectors",reload:!0});this.getAttachment(this._initialAttachmentEndpoint,!1,!0);b("Arbiter").inform("composer/reset")};c.destroy=function(){this._subscriptionsHandler.release()};c.addPlaceholders=function(a,b){__p&&__p();var c;for(var d in this._attachments){c=this._attachments[d];if(c.instance===a){b.forEach(function(a){c.placeholders.push(a),c.required_components.push(a.component_name)});break}}this._currentInstance===a&&this._fillPlaceholders(b)};c.hasAttachmentWithClassName=function(a){return b("DOMQuery").scry(this._root,"."+a).length>0};c.showAttachmentThrobber=function(){b("CSS").addClass(this._attachmentFetchForm,"async_saving")};c.hideAttachmentThrobber=function(){b("CSS").removeClass(this._attachmentFetchForm,"async_saving")};c.getContext=function(){return this._context};c.getID=function(){return this._composerID};c._setupAttachment=function(a,c,d,e){c.setComposerID(this._composerID);this._attachments[a]={instance:c,placeholders:d,required_components:e};a=this._getContent();d=c.getRoot();d.parentNode!==a&&(b("CSS").hide(d),b("DOM").appendContent(a,d))};c._getContent=function(){return b("DOMQuery").find(this._root,"div._55d0")};c._showAttachment=function(a,c,d,e){__p&&__p();if(this._currentInstance===a)return;if(this._endpointHashToShow===j)this._endpointHashToShow=null;else if(this._endpointHashToShow!==c)return;if(this._currentInstance){if(!this._currentInstance.canSwitchAway())return;this._currentInstance.cleanup()}this._currentInstance=a;c=this._getContent().childNodes;var f=a.getRoot();for(var g=0;g<c.length;g++)c[g]!==f&&b("CSS").hide(c[g]);b("CSS").show(f);this._fillPlaceholders(d);a.initWithComponents(e);this._setAttachmentSelectedClass(a.attachmentClassName);b("Arbiter").inform("composer/initializedAttachment",{composerRoot:this._root,isInitial:e})};c._showAttachmentAfterComponentsLoaded=function(a,c){var d=this._attachments[a];b("ComposerXStore").waitForComponents(this._composerID,d.required_components,this._showAttachment.bind(this,d.instance,a,d.placeholders,c))};c._fillPlaceholders=function(a){a.forEach(function(a){var c=b("ComposerXStore").get(this._composerID,a.component_name);c.element&&a.element!==c.element.parentNode&&b("DOM").setContent(a.element,c.element)}.bind(this))};c._setAttachmentSelectedClass=function(a){var c=b("DOMQuery").scry(this._root,"._519b")[0];c&&(b("CSS").removeClass(c,"_519b"),c=b("DOMQuery").scry(c,'*[aria-pressed="true"]')[0],c&&c.setAttribute("aria-pressed","false"));if(a){a=b("DOMQuery").scry(this._root,"."+a)[0];a&&(b("CSS").addClass(a,"_519b"),c=b("DOMQuery").scry(a,'*[aria-pressed="false"]')[0],c&&c.setAttribute("aria-pressed","true"))}};c._augmentURI=function(a){var c=this._context.getProperty(b("ComposerXContext").PROPERTIES.ACTOR_ID);c=c?b("ActorURI").create(a,c):new(i||(i=b("URI")))(a);a=this._context.getProperty(b("ComposerXContext").PROPERTIES.POST_ID);a&&c.addQueryData("post_id",a);return c.toString()};return a}();Object.assign(a.prototype,{_endpointHashToShow:j,_currentFetchEndpoints:[],_initialAttachmentEndpoint:""});e.exports=a}),null);
__d("registerForLeaveWarning",["fbt","Run","URI","createCancelableFunction"],(function(a,b,c,d,e,f,g){__p&&__p();var h;function c(a){var c=(h||(h=b("URI"))).getNextURI(),d=b("createCancelableFunction")(a);b("Run").onBeforeUnload(function(){return i(d,c)});return d}function i(c,d){__p&&__p();var e=(h||(h=b("URI"))).getMostRecentURI(),f=h.getNextURI();e=Object.prototype.hasOwnProperty.call(e.getQueryData(),"theater")&&d.path===f.path;var j=Object.prototype.hasOwnProperty.call(f.getQueryData(),"theater");f=a.DialogNavigationStack&&a.DialogNavigationStack.isActiveURI(f);if(e||j||f){b("Run").onAfterLoad(function(){b("Run").onBeforeUnload(function(){return i(c,d)})});return}if(a.Dialog&&a.Dialog.getCurrent())return;if(c())return g._("You haven't finished your post yet. Do you want to leave without finishing?")}e.exports=c}),null);
__d("ComposerXController",["csx","invariant","ActorURI","Arbiter","ComposerX","ComposerXAttachmentBootstrap","ComposerXContext","ComposerXMarauderLogger","Event","Parent","$","emptyFunction","ge","registerForLeaveWarning"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={},j={},k={};function l(a){var c=b("ge")(a);if(!c)return null;c=b("Parent").bySelector(b("$")(a),"._119");a=c.id;k[a]||(k[a]=new(b("ComposerX"))(c));return k[a]}function m(a){var b=l(a);b!==null||h(0,2477,a);return b}function n(a){if(!j[a])return;j[a].forEach(function(a){return a.cancel()});delete j[a]}var o={registerConditionForComposerCancel:function(a,c){a=m(a).getID();a in i||(i[a]=[]);i[a].push(c);a in j||(j[a]=[]);j[a].push(b("registerForLeaveWarning")(c))},hasChanges:function(a){a=i[a];return!a?!1:a.some(function(a){return a()})},getAttachment:function(a,b,c,d){a=m(a);a.getAttachment(b,c,null,d)},fetchAttachmentData:function(a,b,c){m(a).fetchAttachmentData(b,c)},setAttachment:function(a,b,c,d,e){a=l(a);a&&a.setAttachment(b,c,d,e)},setInitialAttachment:function(a,b,c,d,e,f){a=m(a);a.setInitialAttachment(b,c,d,e,f)},setComponent:function(a,b,c){a=l(a);a&&a.setComponent(b,c)},reset:function(a){a=m(a);a.reset()},holdTheMarkup:b("emptyFunction"),getEndpoint:function(a,c,d){a=m(a);var e=a.getContext();c=b("ActorURI").create(c,e.getProperty(b("ComposerXContext").PROPERTIES.ACTOR_ID)).toString();b("ComposerXAttachmentBootstrap").load(a._attachmentFetchForm,c,d)},addPlaceholders:function(a,b,c){a=m(a);a.addPlaceholders(b,c)},hasAttachmentWithClassName:function(a,b){a=m(a);return a.hasAttachmentWithClassName(b)},showAttachmentThrobber:function(a){a=m(a);a.showAttachmentThrobber()},hideAttachmentThrobber:function(a){a=m(a);a.hideAttachmentThrobber()},logEventForElement:function(a,c){if(!b("Parent").bySelector(b("$")(a),"._119"))return;b("Event").listen(a,"click",function(){var d=o.getComposerID(a);b("ComposerXMarauderLogger").logEvent(c,d)})},getComposerID:function(a){return m(a).getID()},destroyComposer:function(a){if(!(a in k))return;k[a].destroy();delete k[a];delete i[a];n(a)}};b("ComposerXAttachmentBootstrap").bootstrap=function(a){o.getAttachment(a,a.getAttribute("data-endpoint"))};b("Arbiter").subscribe("page_transition",function(){for(var a in k)b("ge")(a)||o.destroyComposer(a)});e.exports=o}),null);
__d("isAnimatedGif",["Promise"],(function(a,b,c,d,e,f){__p&&__p();var g=1e6;function h(a){return a[0]===71&&a[1]===73&&a[2]===70}function i(a,b){return a[b]===0&&a[b+1]===33&&a[b+2]===249&&a[b+3]===4&&a[b+8]===0&&(a[b+9]===44||a[b+9]===33)}function j(a){if(!h(a))return!1;var b=0;for(var c=0;c+9<a.length;++c){i(a,c)&&b++;if(b>1)return!0}return!1}function a(a){__p&&__p();return new(b("Promise"))(function(b){__p&&__p();var c=new FileReader();c.onloadend=function(a){if(a.target.readyState==FileReader.DONE){a=new Uint8Array(a.target.result);j(a)?b(!0):b(!1)}};c.onerror=function(a){b(!1)};var d=Math.min(g,a.size);d=a.slice(0,d);c.readAsArrayBuffer(d)})}e.exports=a}),null);
__d("ComposerXMediaUploadHandler",["fbt","Arbiter","AsyncRequest","ComposerXController","CSS","Dialog","ReloadPage","SubscriptionsHandler","URI","VideoUploadConfig","VideoUploadFile","isAnimatedGif"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i="/ajax/composerx/attachment/media/upload/",j="/ajax/composerx/attachment/video/upload/",k=0;a=function(){"use strict";__p&&__p();function a(a,b){this.$1=a,this.$2=b}var c=a.prototype;c.fetchAttachments=function(){var a=this;[this.getPhotoUploadAttachmentEndpoint(),j].forEach(function(c){b("ComposerXController").fetchAttachmentData(a.$1,c)})};c.handleFileSelected=function(b){var c=this;a.isVideoOrAnimatedGifAsync(b,function(a){a?c.handleVideoSelected(b):c.handlePhotoSelected(b)})};a.canUploadAnimatedGIF=function(){return"gif"in b("VideoUploadConfig").videoExtensions};a.isVideoOrAnimatedGifAsync=function(c,d){var e=b("VideoUploadFile").getExtensionFromFileInput(c.getInput());a.canUploadAnimatedGIF()&&e==="gif"?b("isAnimatedGif")(c.getInput().files[0]).then(d):b("VideoUploadConfig").videoExtensions[e]?d(!0):d(!1)};c.handleVideoSelected=function(a){if(this.$2&&this.$2.imagesOnly){var c=new(b("Dialog"))().setModal(!0).setButtons([b("Dialog").OK]);this.$2.isEditComposer?c.setTitle(g._("Can't add video")).setBody(g._("Sorry, you can't add a video to a post you're editing.")):c.setTitle(g._("Invalid Image File")).setBody(g._("Please upload a valid image file."));c.show();return}b("ComposerXController").getAttachment(this.$1,j);b("Arbiter").inform("ComposerXFilesStore/filesAdded/"+this.$1+"/videoupload",{fileInput:a},"persistent")};c.handlePhotoSelected=function(c){b("ComposerXController").getAttachment(this.$1,this.getPhotoUploadAttachmentEndpoint()),a.$3(this.$1,c)};a.isVideoFile=function(a){a=b("VideoUploadFile").getExtensionFromFileInput(a.getInput());return!!b("VideoUploadConfig").videoExtensions[a]};c.$4=function(){return this.$2?this.$2.photoUploadOverrideEndpoint:null};c.getPhotoUploadAttachmentEndpoint=function(){var a=this.$4();return a?a:i};a.$3=function(a,c){b("Arbiter").inform("ComposerXFilesStore/filesAdded/"+a+"/mediaupload",{fileInput:c,receivedBySubscriber:!1},"persistent")};a.setupFileUploadToComposerDialog=function(a,c,d,e){__p&&__p();var f=this,g="composerxmediauploadhandler"+k++,i=function(c){b("CSS").conditionClass(a.getControl(),d,c),a.getInput().disabled=c},j=new(h||(h=b("URI")))(c),l=j.getQueryData();l.client_ref=g;j.setQueryData(l);c=j.toString();a.subscribe("change",function(){new(b("AsyncRequest"))().setURI(c).setErrorHandler(function(){a.clear(),i(!1)}).send(),i(!0)});b("Arbiter").subscribe("composer/dialog/"+g+"/new",function(c,d){f.$3(d.composerID,a);var g=new(b("SubscriptionsHandler"))();g.addSubscriptions(b("Arbiter").subscribe("composer/publish",function(a,c){e&&d.composerID===c.composer_id&&b("ReloadPage").now()}),d.dialog.subscribe("hide",function(){g.release(),a.clear(),i(!1)}))})};return a}();e.exports=a}),null);
__d("ProfileIntroCardEditMediaFunnelLogger",["Event","FunnelLogger"],(function(a,b,c,d,e,f){__p&&__p();var g="WWW_PROFILE_INTRO_CARD_EDIT_MEDIA_FUNNEL";function a(a){b("Event").listen(a,"click",function(){b("FunnelLogger").endFunnel(g)})}function c(a){b("Event").listen(a,"click",function(){b("FunnelLogger").appendAction(g,"save"),b("FunnelLogger").endFunnel(g)})}function d(a){b("Event").listen(a,"click",function(){b("FunnelLogger").startFunnel(g),b("FunnelLogger").appendAction(g,"intro_card_edit")})}function f(){b("FunnelLogger").addFunnelTag(g,"in_new_editor")}function h(a){b("Event").listen(a,"click",function(){b("FunnelLogger").startFunnel(g),b("FunnelLogger").appendAction(g,"single_edit")})}function i(){b("FunnelLogger").appendAction(g,"see_dialog")}function j(){b("FunnelLogger").appendAction(g,"open_picker")}function k(a){b("Event").listen(a,"click",function(){b("FunnelLogger").appendAction(g,"add_media")})}function l(){b("FunnelLogger").appendAction(g,"add_media")}function m(){b("FunnelLogger").appendAction(g,"remove_media")}function n(){b("FunnelLogger").appendAction(g,"search")}function o(){b("FunnelLogger").appendAction(g,"see_more")}function p(){b("FunnelLogger").appendAction(g,"section_names_loaded")}function q(){b("FunnelLogger").appendAction(g,"section_loaded")}function r(){b("FunnelLogger").appendAction(g,"empty_section_loaded")}function s(){b("FunnelLogger").appendAction(g,"all_sections_loaded")}function t(){b("FunnelLogger").appendAction(g,"upload_start")}function u(){b("FunnelLogger").appendAction(g,"upload_succes")}e.exports={logCancel:a,logSave:c,logSeeDialog:i,logSingleEdit:h,logIntroCardEdit:d,logOpenPicker:j,logAddMedia:k,directlyLogAddMedia:l,directlyLogRemoveMedia:m,logSearch:n,logSeeMore:o,logSectionNamesLoaded:p,logSeeMoreSectionLoaded:q,logAllSectionsInitialLoad:s,logEmptySectionLoaded:r,logUploadStart:t,logUploadSuccess:u,addNewEditorTag:f}}),null);
__d("ProfilePhotoActionLogger",["Banzai"],(function(a,b,c,d,e,f){a={EVENT_SELECT_METHOD:"select_method",EVENT_CAMERA_PERMISSION_PROVIDED:"permission_provided",EVENT_CAMERA_PERMISSION_DENIED:"permission_denied",EVENT_CAMERA_NO_WEBCAM:"permission_denied",EVENT_CAMERA_UNKNOWN_MEDIASTREAM_ERROR:"unknown_mediastream_error",EVENT_CAMERA_TAKE_PHOTO:"take_photo",EVENT_CAMERA_RETAKE_PHOTO:"retake_photo",EVENT_CAMERA_UPLOAD_ATTEMPT:"upload_attempt",EVENT_CAMERA_UPLOAD_ERROR:"upload_error",EVENT_CAMERA_UPLOAD_SUCCESS:"upload_success",SOURCE_SUGGESTIONS:"suggestions",SOURCE_TIMELINE:"timeline",SOURCE_NUX:"nux",METHOD_EXISTING:"existing",METHOD_UPLOAD:"upload",METHOD_CAMERA:"camera",log:function(a,c,d){b("Banzai").post("profile_photo_action",{event:a,source:c,method:d})}};e.exports=a}),null);
__d("ProfilePicAccessibility",["csx","cx","CSS","FocusEvent","Parent","Run","ifRequired"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=null,j=[],k=[],l=!1;function m(a){i&&b("CSS").conditionClass(i,"_5-3g",a||l)}function n(a){l=a,m(a)}function o(){i=null,j.map(function(a){return a.unsubscribe()}),j=[],k.map(function(a){return a.remove()}),k=[]}a={init:function(a,c){__p&&__p();if(a.length===0)return;var d=b("Parent").bySelector(a[0],"._5ycb");i=d instanceof HTMLElement?d:null;k=a.map(function(a){return b("FocusEvent").listen(a,m)});c&&(j=[c.subscribe("show",n.bind(null,!0)),c.subscribe("hide",n.bind(null,!1))]);b("ifRequired")("XUISubNavigationLoader",function(a){return a.onLeave(o)},function(){return b("Run").onLeave(o)})}};e.exports=a}),null);
__d("TimelineProfilePicConfig",["fbt"],(function(a,b,c,d,e,f,g){a={loading:"timeline/profile_pic/loading",success:"timeline/profile_pic/success",leavingMessage:g._("Your profile picture is still uploading, are you sure you want to leave?")};e.exports=a}),null);
__d("ProfilePictureFlowLogging",["Arbiter","Banzai","CurrentUser","Event","Parent","ProfilePhotoActionLogger","Run","TimelineProfilePicConfig","TimelineProfilePictureLoggerEnums","WebFunnelLogger","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g=b("TimelineProfilePicConfig").loading,h=b("TimelineProfilePicConfig").success,i="data-action-type",j,k,l,m;function n(){m&&m.unsubscribe(),m=null}function o(a){var c=new(b("WebFunnelLogger"))("ProfileBlueTimelineWebFunnelDefinition").setSessionKey(b("CurrentUser").getID());a===p.step.UPLOAD_SUCCESS?c.setAction("[impression][profile picture edit dialog][upload success]").log():j===p.action.ADD_FRAME&&a===p.step.VIEWER_INIT?c.setAction("[impression][profile picture edit dialog][frame selector]").log():a===p.step.VIEWER_INIT?c.setAction("[impression][profile picture edit dialog][edit thumbnail]").log():a===p.step.SUCCESS&&c.setAction("[impression][profile picture edit dialog][save success]").log()}var p={action:b("TimelineProfilePictureLoggerEnums").actions,flow:b("TimelineProfilePictureLoggerEnums").flows,step:b("TimelineProfilePictureLoggerEnums").steps,log:function(a){var c=a||p.step.INIT;b("Banzai").post("profile_pic_action",{action_type:j,flow_type:k,step_type:c});o(c);j===p.action.UPLOAD&&c===p.step.INIT&&b("ProfilePhotoActionLogger").log(b("ProfilePhotoActionLogger").EVENT_SELECT_METHOD,l,b("ProfilePhotoActionLogger").METHOD_UPLOAD);k=null;(a==="success"||a==="fail")&&(j=null);return p},setAction:function(a){j=a;return p},setFlowType:function(a){k=a;return p},setSource:function(a){l=a;return p},init:function(a,c){c&&(l=c),m||(m=b("Arbiter").subscribe([g,h],function(a){p.log(a===g?b("TimelineProfilePictureLoggerEnums").steps.LOADING:b("TimelineProfilePictureLoggerEnums").steps.SUCCESS)}),b("Run").onLeave(n)),b("tidyEvent")(b("Event").listen(a,"click",function(a){a=b("Parent").byAttribute(a.getTarget(),i);if(!a)return;p.setAction(a.getAttribute(i)).log()}))},initMenuItems:function(a,b,c){p.init(a.getRoot(),c)}};e.exports=p}),null);
__d("XWorkNewsfeedNuxNextStepController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/newsfeed_nux/next_step/",{})}),null);
__d("ProfilePicCropViewerInit",["Bootloader","CurrentCommunity","ProfilePictureFlowLogging","React","ServerRedirect","XWorkNewsfeedNuxNextStepController"],(function(a,b,c,d,e,f){__p&&__p();var g="profile-picture-crop",h="loading",i=b("ProfilePictureFlowLogging").flow,j,k;function l(){k&&k.close()}function m(a,c,d){__p&&__p();d=d||{};b("Bootloader").loadModules(["SpotlightViewerInit","ZoomProfilePicCropViewer.react","PhotoStore","AsyncRequest","AsyncResponse","XProfilePicCropViewerAsyncController"],function(e,f,i,m,n,o){__p&&__p();l();var p=d.stickerID;j=g+":"+a+":"+c;p&&(j+=":"+p);var q=d.successCallback,r=b("CurrentCommunity").getID()!=="0";!q&&(d.source==="atwork_nux"||d.source==="timeline"||d.source==="atwork_profile_nux")&&r&&(q=function(a){a=b("XWorkNewsfeedNuxNextStepController").getURIBuilder().getURI();new m().setURI(a).setData({current_step_id:1,skipped:!1}).setHandler(function(){b("ServerRedirect").reloadPage()}).send()});if(!d.skipCropping){k=e.render(b("React").jsx(f,{cancelCallback:d.cancelCallback,cropMode:d.cropMode,errorCallback:d.errorCallback,method:d.method,open:!0,photoID:a,profileID:c,setid:j,source:d.source,successCallback:q,uploadRequest:d.uploadRequest,warnOnCancel:d.warnOnCancel}),function(){k=null});if(i.hasBeenCreated(j)||a===h)return;r=o.getURIBuilder().setString("photo_id",a).setInt("profile_id",c).setString("set_id",j).setBool("will_load_more_photos",!0);p&&r.setInt("sticker_id",p);r=r.getURI();var s=j;new m(r).setErrorHandler(function(a){s===j&&l(),n.defaultErrorHandler(a)}).send()}},"ProfilePicCropViewerInit");return!0}a={close:l,getFlowType:function(){return i.ZOOMCROP},useCropViewer:function(){return!0},loading:function(a,b){m(h,a,b)},loadID:m};e.exports=a}),null);
__d("ProfileNavigationItemDropdown",["Event","goURI","setImmediate","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this,d=a.menuElement,e=a.menuInstance,f=a.href;this.$1=[];this.$2=[];b("tidyEvent")(b("Event").listen(d,"click",function(a){c.$1.forEach(function(a){a.call(c)}),b("setImmediate")(function(){a.ctrlKey||a.metaKey?window.open(f,"_blank"):b("goURI")(f)})}));e.subscribe("itemclick",function(a,b){c.$2.forEach(function(a){a.call(c,b.item)})})}var c=a.prototype;c.onTriggerClick=function(a){this.$1.push(a)};c.onMenuItemClick=function(a){this.$2.push(a)};return a}();e.exports=a}),null);
__d("legacy:TimelineCover",["TimelineCover"],(function(a,b,c,d,e,f){a.TimelineCover=b("TimelineCover")}),3);
__d("TimelineCoverPhotoChangePrivacyDialog",["Arbiter","Event"],(function(a,b,c,d,e,f){a={init:function(a,b,c){this._dialog=a,this._tooltipLink=c,this._closeButton=b,this._showDialog=!1,this._tooltip=null},registerDialogShow:function(){this._showDialog=!0,b("Arbiter").subscribe("CoverPhotoEdit",function(a,b){if(!this._showDialog)return;b.state==="open"?(this._dialog&&this._dialog.show(),this._tooltipLink&&(this._tooltip=this._tooltipLink.getAttribute("data-hover"),this._tooltipLink.setAttribute("data-hover",null))):b.state==="closed"&&this.hideDialog()}.bind(this)),b("Event").listen(this._closeButton,"click",this.hideDialog.bind(this))},hideDialog:function(){this._dialog&&this._dialog.hide(),this._tooltipLink&&this._tooltipLink.setAttribute("data-hover",this._tooltip),this._showDialog=!1}};e.exports=a}),null);
__d("ProfileWizardUIEvents",[],(function(a,b,c,d,e,f){a=Object.freeze({CUSTOM_HIDE_HANDLE:"ProfileWizardUIEvents/customHideHandle",CUSTOM_SHOW_HANDLE:"ProfileWizardUIEvents/customShowHandle",HIDE_POPUP:"ProfileWizardUIEvents/hidePopup",PROFILE_PIC_UPLOADED:"ProfileWizardUIEvents/profilePicUploaded",SHOW_POPUP:"ProfileWizardUIEvents/showPopup",STEP_COMPLETE:"ProfileWizardUIEvents/stepComplete",STEP_EDITED:"ProfileWizardUIEvents/stepEdited"});e.exports=a}),null);
__d("XProfileWizardImpressionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/wizard_impression/{surface}/",{error_code:{type:"Int"},step:{type:"Int",required:!0},surface:{type:"Enum",required:!0,enumType:1}})}),null);
__d("ProfileWizardUIManager",["invariant","Arbiter","AsyncRequest","ProfileWizardUIEvents","XProfileWizardImpressionController","destroyOnUnload"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(c,d){d===void 0&&(d=null);this.$1=c;this.$2=d||this.$1[0];var e=b("Arbiter").subscribe(b("ProfileWizardUIEvents").STEP_COMPLETE,this.stepComplete.bind(this));d!=null&&a.informShowPopupForStep(d);b("destroyOnUnload")(function(){return e.unsubscribe()})}var c=a.prototype;c.stepComplete=function(b,c){b=this.getNextStepIndex(c.stepNumber);b&&(a.informShowPopupForStep(b),this.$2=b)};c.getCurrentStepIndex=function(){return this.$2};c.getNextStepIndex=function(a){a=this.$1.indexOf(a);a!==-1||g(0,1894);return a<this.$1.length-1?this.$1[a+1]:null};c.hasNextStep=function(){return!!this.getNextStepIndex(this.getCurrentStepIndex())};a.informShowPopupForStep=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").SHOW_POPUP+a,{stepNumber:a},"persistent")};a.informHidePopupForStep=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").HIDE_POPUP+a,{stepNumber:a},"persistent")};a.informStepComplete=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").STEP_COMPLETE,{stepNumber:a})};a.informCustomShowHandler=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").CUSTOM_SHOW_HANDLE+a,{stepNumber:a},"persistent")};a.informCustomHideHandler=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").CUSTOM_HIDE_HANDLE+a,{stepNumber:a},"persistent")};a.subscribeShowPopupForStep=function(c,d,e){return a.$3(b("ProfileWizardUIEvents").SHOW_POPUP,c,e)};a.subscribeHidePopupForStep=function(c,d,e){return a.$3(b("ProfileWizardUIEvents").HIDE_POPUP,c,e)};a.subscribeCustomShowHandler=function(c,d){return a.$3(b("ProfileWizardUIEvents").CUSTOM_SHOW_HANDLE,c,d)};a.subscribeCustomHideHandler=function(c,d){return a.$3(b("ProfileWizardUIEvents").CUSTOM_HIDE_HANDLE,c,d)};a.$3=function(a,c,d){var e=b("Arbiter").subscribe(a+c,d);b("destroyOnUnload")(function(){return e.unsubscribe()});return e};a.markStepImpression=function(a,c){a=b("XProfileWizardImpressionController").getURIBuilder().setInt("step",a).setEnum("surface",c).getURI();new(b("AsyncRequest"))().setURI(a).send()};a.init=function(b,c){c===void 0&&(c=null);return new a(b,c)};return a}();e.exports=a}),null);
__d("XTimelineCoverPhotoGalleryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/timeline/cover/gallery/",{})}),null);
__d("TimelineCoverPhotoNUX",["cx","AsyncRequest","CSS","ProfileWizardUIManager","XTimelineCoverPhotoGalleryController","$","destroyOnUnload"],(function(a,b,c,d,e,f,g){__p&&__p();var h="fbProfileCover",i="_3y4k";a=function(){"use strict";__p&&__p();a.init=function(b,c,d,e){new a(b,c,d,e)};function a(a,c,d,e){__p&&__p();var f=this;this.$6=!1;this.$2=c;this.$1=b("$")(h);this.$4=a.getPopover();this.$3=e;b("ProfileWizardUIManager").subscribeCustomShowHandler(d,function(){return f.$7()});b("ProfileWizardUIManager").subscribeCustomHideHandler(d,function(){return f.$8()});this.$5=this.$4.subscribeOnce("show",function(){if(f.$3||f.$6)return;f.$4.hideLayer();f.$7()});var g=this.$2.subscribe("cancel",function(){b("CSS").removeClass(f.$1,i)}),j=this.$2.subscribe("confirm",function(){f.$4.showLayer(),f.$8()});b("destroyOnUnload")(function(){f.$2.unsubscribe(g),f.$2.unsubscribe(j),f.$4.unsubscribe(f.$5)})}var c=a.prototype;c.$8=function(){this.$2.hide(),b("CSS").removeClass(this.$1,i)};c.$7=function(){if(this.$6)return;this.$2.show();this.$3||(b("CSS").addClass(this.$1,i),new(b("AsyncRequest"))().setURI(b("XTimelineCoverPhotoGalleryController").getURIBuilder().getURI()).send());this.$6=!0};return a}();e.exports=a}),null);
__d("TimelineProfilePic",["Arbiter","CSS","Dialog","DOM","HTML","Run","TimelineProfilePicConfig","$","ge"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(){"use strict";__p&&__p();a.init=function(b,c){a.destroyInstance(),g=new a(b||"fbProfileCover",c||".profilePicThumb")};function a(a,c){this.$1=b("$")(a),this.$2=c,this.$3=[b("Arbiter").subscribe(b("TimelineProfilePicConfig").loading,this.startLoading.bind(this)),b("Arbiter").subscribe(b("TimelineProfilePicConfig").success,this.onUploadSuccess.bind(this))],b("Run").onBeforeUnload(this.onBeforeUnload.bind(this)),b("Run").onLeave(this.destroy.bind(this))}var c=a.prototype;c.$4=function(a){this.$5=a,b("CSS").conditionClass(this.$1,"profilePicLoading",a)};c.destroy=function(){this.$3.forEach(function(a){a.unsubscribe()}),this.$3=[],g=null};c.startLoading=function(a,b){this.$4(!!b.isLoading)};c.onUploadSuccess=function(a,c){__p&&__p();this.$4(!1);if(!c.newPic)return;a=b("Dialog").getCurrent();a&&a.hide();a=c.newPic;b("DOM").replace(b("DOM").find(this.$1,this.$2),typeof a==="string"?b("HTML")(a):a);if(c.profileId&&c.headerPicURL){a=b("ge")("profile_pic_header_"+c.profileId);a&&(a.src=c.headerPicURL)}a=b("ge")("fbProfilePicSelector");a&&b("CSS").removeClass(a,"fbTimelineNullProfilePicSelector")};c.onBeforeUnload=function(){if(g===this&&this.$5)return b("TimelineProfilePicConfig").leavingMessage};a.destroyInstance=function(){g&&g.destroy()};return a}();e.exports=a}),null);
__d("XProfileRefresherDialogImpressionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/refresher/dialog_impression/",{})}),null);
__d("ProfileActionsUpdateInfoButton",["AsyncRequest","CSS","Event","XProfileRefresherDialogImpressionController","destroyOnUnload"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d){var e=this;this.$1=b("Event").listen(a,"click",function(){c.hide(),b("CSS").hide(d),e.$2()});c.subscribe("cancel",function(){return e.$2()});b("destroyOnUnload")(function(){return e.$3()})}var c=a.prototype;c.$3=function(){this.$1&&this.$1.remove()};c.$2=function(){new(b("AsyncRequest"))().setURI(b("XProfileRefresherDialogImpressionController").getURIBuilder().getURI()).send()};return a}();e.exports=a}),null);
__d("ProfileWizardStepFlyout",["DOMScroll","Event","ProfileWizardUIManager","destroyOnUnload"],(function(a,b,c,d,e,f){__p&&__p();a=function(a,c,d){"use strict";__p&&__p();b("ProfileWizardUIManager").subscribeShowPopupForStep(c,d,function(){b("DOMScroll").scrollTo(a.getCausalElement(),500,!1,0,20,function(){b("ProfileWizardUIManager").informCustomShowHandler(c),a.show()})});b("ProfileWizardUIManager").subscribeHidePopupForStep(c,d,function(){b("ProfileWizardUIManager").informCustomHideHandler(c),a.hide()});var e=b("Event").listen(a.getCausalElement(),"click",function(){return b("ProfileWizardUIManager").informHidePopupForStep(c)}),f=[a.subscribe("cancel",function(){b("ProfileWizardUIManager").informStepComplete(c),b("ProfileWizardUIManager").markStepImpression(c,d)}),a.subscribe("confirm",function(){a.hide(),b("ProfileWizardUIManager").markStepImpression(c,d)})];b("destroyOnUnload")(function(){while(f.length)a.unsubscribe(f.pop());e.remove()})};e.exports=a}),null);
__d("InfoReviewInstanceManager",["csx","DOM","Event","ReactDOM"],(function(a,b,c,d,e,f,g){__p&&__p();var h="._5sf3",i=[],j=[];a={addInstanceRoot:function(a,c){j.push(b("Event").listen(c,"click",function(a){a=b("DOM").scry(c,h)[0];a&&b("DOM").remove(a)})),i.push(a)},cleanupInstances:function(){var a=[];while(i.length){var c=i.pop();document.contains(c)?a.push(c):b("ReactDOM").unmountComponentAtNode(c)}while(j.length)j.pop().remove();i=a}};e.exports=a}),null);
__d("InfoReviewCloseButton",["DOM","Event","InfoReviewInstanceManager","Parent","$","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g="fbTimelineUnit";a=function(){"use strict";__p&&__p();function a(a,c){this.$1=a,this.$2=c,this.$3=b("Event").listen(this.$1,"click",this.$4.bind(this)),b("tidyEvent")(this.$3)}var c=a.prototype;c.$4=function(){var a=b("$")(this.$2);a.parentElement.children.length===1&&(a=b("Parent").byClass(a,g));b("DOM").remove(a)&&this.$5();b("InfoReviewInstanceManager").cleanupInstances()};c.$5=function(){this.$1=null,this.$2=null,this.$3&&this.$3.remove(),this.$3=null};return a}();e.exports=a}),null);
__d("InfoReviewRequestForm",["csx","DOM","Event","tidyEvent"],(function(a,b,c,d,e,f,g){a={initNUX:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(){var a=b("DOM").scry(c,"._58al")[0];a&&a.focus()}))}};e.exports=a}),null);
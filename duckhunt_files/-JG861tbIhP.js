if (self.CavalryLogger) { CavalryLogger.start_js(["5Ghoo"]); }

__d("legacy:dom-html",["HTML"],(function(a,b,c,d,e,f){a.HTML=b("HTML")}),3);
__d("legacy:netego",["NetEgo"],(function(a,b,c,d,e,f){a.NetEgo=b("NetEgo")}),3);
__d("HideInlineHelp",[],(function(a,b,c,d,e,f){var g={};a={registerMenu:function(a,b,c){g[a]=b.setValue.bind(b,c)},triggerUndo:function(a){g[a]()}};e.exports=a}),null);
__d("MakeProfilePicInit",["ProfilePicCropViewerInit","URI"],(function(a,b,c,d,e,f){var g;a={handleOptimus:function(a,c,d){d.preventDefault();a=new(g||(g=b("URI")))(c.getAttribute("ajaxify")||c.getAttribute("href")).getQueryData();b("ProfilePicCropViewerInit").loadID(a.fbid,a.profile_id,{source:a.pp_source,stickerID:a.sticker_id})}};e.exports=a}),null);
__d("legacy:Selector",["SelectorDeprecated"],(function(a,b,c,d,e,f){a.Selector=b("SelectorDeprecated")}),3);
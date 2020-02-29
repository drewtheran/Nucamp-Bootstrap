if (self.CavalryLogger) { CavalryLogger.start_js(["F8hBR"]); }

__d("MessengerTypeaheadView.react",["cx","Bootloader","MessengerContactAdapters","MessengerContactList.react","MessengerSearchFunnelLoggerConstants","MessengerSearchLoggerUtil","MessengerTypeaheadUtils","MessengerUniversalSearchFunnelLoggerConstants","React","compactArray","immutable","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isExpectingEntriesUpdate:!1,localEntries:[]},d.$1=b("immutable").OrderedMap(),d.$2=function(a,b){d.props.onSelect&&d.props.onSelect(a,b)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidUpdate=function(a,c){__p&&__p();var d=this;this.$1=b("MessengerTypeaheadUtils").buildListSections(this.props.entries,this.props.queryString);if(a.isLoading&&!this.props.isLoading&&this.props.queryString!==""){this.$3({name:b("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST,queryString:this.props.queryString,entries:this.props.entries.map(function(a){return a.getUniqueID()})});var e=this.$1.mapEntries(function(a){var d=a[0];a=a[1];a=a.map(function(a){var e=a.getUniqueID();return{result_fbid:e,result_type:b("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(a.getType()),rank_section:d.toString(),data_source:[c.localEntries.includes(e)?b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL:b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.SERVER_XCONTROLLER]}});return[d.toString(),b("compactArray")(a)]}),f=[];e.forEach(function(a){f=f.concat(a)});var g=b("immutable").OrderedMap();f.forEach(function(a){g=g.set(a.result_fbid,a)});b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(a){a.logImpressions(g,d.props.queryString,b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_SURFACES.TYPEAHEAD,b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL_AND_SERVER)},"MessengerTypeaheadView.react");this.setState({isExpectingEntriesUpdate:!1})}else if(a.isLoading&&this.state.isExpectingEntriesUpdate){e=this.props.entries.map(function(a){return a.getUniqueID()});this.$3({name:b("MessengerSearchFunnelLoggerConstants").LOADING_STATE_IMPRESSION_LIST,queryString:this.props.queryString,entries:e});b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(a){var c=d.props.entries.map(function(a){var c=a.getUniqueID();a=a.getType();return[c,{result_fbid:c,result_type:b("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(a),rank_section:b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL,data_source:[b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL]}]});c=b("immutable").OrderedMap(c);a.logImpressions(c,d.props.queryString,b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_SURFACES.TYPEAHEAD,b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL)},"MessengerTypeaheadView.react");this.setState({isExpectingEntriesUpdate:!1,localEntries:e})}a.queryString!==this.props.queryString&&this.setState({isExpectingEntriesUpdate:!0})};d.render=function(){var a;return b("React").jsx(b("MessengerContactList.react"),{controlleeID:this.props.controlleeID,className:b("joinClasses")(this.props.className,"_4p-s"),contactAdapter:b("MessengerContactAdapters").fromSearchableEntry,hasHoverState:this.props.hasHoverState,highlightedEntry:this.props.highlightedEntry,isLoading:this.props.isLoading,listSections:this.$1,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.$2,originalEntryIDs:this.props.originalEntryIDs,invitedEntryIDs:this.props.invitedEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:!1,viewer:this.props.viewer,rowComponent:this.props.rowComponent,useDarkTheme:(a=this.props.useDarkTheme)!=null?a:!1})};d.$3=function(a){b("Bootloader").loadModules(["MessengerSearchFunnelLogger"],function(c){switch(a.name){case b("MessengerSearchFunnelLoggerConstants").LOADING_STATE_IMPRESSION_LIST:c.logLoadingStateQuery(b("MessengerSearchFunnelLoggerConstants").NAME,a.queryString,a.entries);break;case b("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST:c.logUpdateQuery(b("MessengerSearchFunnelLoggerConstants").NAME,b("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST,a.queryString,a.entries);break}},"MessengerTypeaheadView.react")};return c}(b("React").PureComponent);a.propTypes={controlleeID:(c=b("prop-types")).string,entries:c.array.isRequired,hasHoverState:c.bool,highlightedEntry:c.object,isLoading:c.bool,onHighlight:c.func,onRenderHighlight:c.func,onScrollIntoView:c.func,onSelect:c.func,originalEntryIDs:c.instanceOf(b("immutable").Set),invitedEntryIDs:c.instanceOf(b("immutable").Set),queryString:c.string,selectedEntryIDs:c.instanceOf(b("immutable").Set),viewer:c.string.isRequired,rowComponent:c.func,useDarkTheme:c.bool};e.exports=a}),null);
__d("MessengerSearchFunnelLogger",["FunnelLogger","MercuryIDs","MessengerSearchFunnelLoggerConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a,c,d){b("FunnelLogger").startFunnel(a),b("FunnelLogger").addFunnelTag(a,c),b("FunnelLogger").addFunnelTag(a,d),b("FunnelLogger").appendActionIfNew(a,"search_start"),g=[]}function c(a){b("FunnelLogger").appendActionIfNew(a,"search_end"),b("FunnelLogger").endFunnel(a)}function d(a,c){b("FunnelLogger").appendActionWithPayload(a,"initiate_content_search",{query_string:c,impression_list:g}),b("FunnelLogger").endFunnel(a)}function f(a,c,d,e){if(d==null||g==null||g.length===0){b("FunnelLogger").appendActionWithPayload(a,"search_result_error",{error:"threadID or latest impression list are null",thread_id:d,impression_list:g});b("FunnelLogger").endFunnel(a);return}d=b("MercuryIDs").getThreadFBIDFromThreadID(d);b("FunnelLogger").appendActionWithPayload(a,"log_result_selection",{thread_id:d,type:e,rank:g.indexOf(d),search_query:c?c:""})}function h(a,c,d){b("FunnelLogger").appendActionWithPayloadIfNew(a,"loading_state_impression_list",{search_query:c,impression_list:d}),g=d}function i(a,c){b("FunnelLogger").appendActionWithPayload(a,b("MessengerSearchFunnelLoggerConstants").SEND_SERVER_REQUEST,{search_query:c})}function j(a,c,d,e){b("FunnelLogger").appendActionWithPayload(a,c,{search_query:d,impression_list:e}),g=e}function k(a){b("FunnelLogger").appendAction(a,"clear_search_query"),this.endFunnel(a)}e.exports={startFunnel:a,logResultSelection:f,logStartQuery:i,endFunnel:c,logContentSearchInitiation:d,logLoadingStateQuery:h,logUpdateQuery:j,logClearQuery:k}}),null);
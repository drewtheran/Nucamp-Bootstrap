if (self.CavalryLogger) { CavalryLogger.start_js(["4ErZl"]); }

__d("P2PNUXRendererUtils",["CurrentUser","ImmutableObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={getTransferFromMessage:function(a){var c;if(!a||!a.attachments||!a.attachments.length)return null;a=a.attachments[0];this.isShareAttachment(a)&&(c=a.share.target);c&&(c=new(b("ImmutableObject"))(c));return c},isSuccessfulReceivedTransfer:function(a){return a&&a.receiver&&a.receiver.id===b("CurrentUser").getID()&&(a.status===13||a.status===4)},isShareAttachment:function(a){return!!(typeof a!=="string"&&a.attach_type=="share"&&a.share&&a.share.style_list&&a.share.style_list.indexOf("orion")>=0)},doesNUXNeedCreditCards:function(a){var c=b("CurrentUser").getID()===a.sender.id;return!c&&a.status===4},isRecipientActionableStatus:function(a){var c=a.status;a=b("CurrentUser").getID()===a.sender.id;return!a&&(c===4||c===6||c===9)}};e.exports=a}),null);
__d("P2PFriendsListStore",["EventEmitter","P2PActionConstants","P2PAPI","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h="",i=25;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").FRIENDS_LIST_UPDATED:this.handleFriendsListUpdated(c);this.emit("change");break}};d.handleFriendsListUpdated=function(a){(!h||h===a.query)&&(g=a.friends)};d.searchFriends=function(a){h=a,this.fetchFriends(a)};d.fetchFriends=function(a){b("P2PAPI").getFriendsList(i,a)};d.getFriends=function(){return g};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PFriendPicker.react",["ix","cx","fbt","glyph","Image.react","Layout.react","debounce","MercuryIDs","P2PActions","P2PFriendsListStore","P2PLoadingMask.react","P2PLogger","P2PText.react","React","prop-types","ScrollableArea.react","XUIButton.react","XUITextInput.react"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k=b("Layout.react").FillColumn,l=b("Layout.react").Column;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={friends:b("P2PFriendsListStore").getFriends(),showLoader:!0},d.log=function(a,c){b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:d.props.eventFlow},c))},d.loggedSearch=null,d.friendPickerStoreSub=null,d.updateFriendsList=function(){d.setState({friends:b("P2PFriendsListStore").getFriends(),showLoader:!1})},d.onFriendSelect=function(a){d.log("UI_Actn_Friend_Picker_Select",{object_id:a.id}),b("P2PActions").chatSendViewOpened({amount:d.props.amount,referrer:d.props.referrer,sendMoneyNUXDismissed:d.props.sendMoneyNUXDismissed,threadID:b("MercuryIDs").getThreadIDFromUserID(a.id)}),d.props.onFriendSelected&&d.props.onFriendSelected()},d.getQuery=function(){return d.refs.input_ref&&d.refs.input_ref.refs.textInput.getValue()},d.onSearchInputChange=function(){d.loggedSearch||(d.log("UI_Actn_Friend_Picker_Search"),d.loggedSearch=!0);var a=d.getQuery();a||d.setState({showLoader:!0});b("P2PFriendsListStore").searchFriends(a)},d.renderTagLineRow=function(){return d.state.showLoader?null:b("React").jsx("li",{className:"_1px5",children:b("React").jsx("div",{className:"_1px6",children:d.props.subTitle})})},d.renderfriendRow=function(a){var c;d.props.buttonLabel&&(c=b("React").jsx(b("XUIButton.react"),{label:d.props.buttonLabel,size:"large"}));return b("React").jsx("li",{className:"_1px7",onClick:d.onFriendSelect.bind(babelHelpers.assertThisInitialized(d),a),children:b("React").jsxs(b("Layout.react"),{children:[b("React").jsxs(k,{children:[b("React").jsx("div",{className:"_1px8",children:b("React").jsx(b("Image.react"),{className:"_1px9",height:50,src:a.image_src,width:50})}),b("React").jsx("div",{className:"_1pxa",children:b("React").jsx(b("P2PText.react"),{className:"_1pxb",type:"primary",children:a.full_name})})]}),b("React").jsx(l,{className:"_1pxc",children:c})]})},a.id)},d.renderFriendList=function(){var a=d.getQuery();if(!d.state.showLoader&&d.state.friends.length===0)if(a&&a.length)return b("React").jsx("div",{className:"_1pxd",children:i._("No results.")});else return b("React").jsx("div",{className:"_1pxd",children:i._("You do not have any friends who are able to receive money.")});return b("React").jsxs("div",{className:"_1pxe",children:[b("React").jsx(b("P2PLoadingMask.react"),{visible:d.state.showLoader}),b("React").jsx(b("ScrollableArea.react"),{height:d.props.height,children:b("React").jsxs("ul",{children:[d.state.friends.map(d.renderfriendRow),d.renderTagLineRow()]})})]})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.friendPickerStoreSub=b("P2PFriendsListStore").addListener("change",this.updateFriendsList),b("P2PFriendsListStore").searchFriends(),this.log("UI_Actn_Friend_Picker_Shown")};d.componentWillUnmount=function(){this.friendPickerStoreSub&&(this.friendPickerStoreSub.remove(),this.friendPickerStoreSub=null)};d.render=function(){var a;return(a=b("React")).jsxs("div",{children:[a.jsx("div",{className:"_1pxf",children:a.jsxs("div",{className:"_1pxg",children:[a.jsx(b("XUITextInput.react"),{className:"_1pxn",height:"tall",onChange:b("debounce")(this.onSearchInputChange,150),placeholder:i._("Search friends"),ref:"input_ref"}),a.jsx(b("Image.react"),{className:"_1pxo",src:g("101450")})]})}),this.renderFriendList()]})};return c}(b("React").Component);a.propTypes={amount:(c=b("prop-types")).string,buttonLabel:c.node,eventFlow:c.string.isRequired,height:c.number,onFriendSelected:c.func,referrer:c.string,sendMoneyNUXDismissed:c.bool,subTitle:c.node};a.defaultProps={amount:"",buttonLabel:i._("Pay Friend"),height:350,title:i._("Select Friend"),subTitle:i._("These are your friends who are able to receive money.")};e.exports=a}),null);
__d("P2PSendMoneyNUXListItems.react",["fbt","ix","Image.react","P2PListRow.react","P2PText.react","React","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.renderRow=function(a,c){return b("React").jsxs(b("P2PListRow.react"),{offset:d.props.size,children:[b("React").jsx(b("Image.react"),babelHelpers["extends"]({},a)),b("React").jsx(b("P2PText.react"),{type:"primary",children:c})]})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props.size;return b("React").jsxs("div",{children:[this.renderRow(a==="small"?{height:18,src:h("94401"),width:18}:{height:36,src:h("94400"),width:36},g._("It's FREE to send and receive money.")),this.renderRow(a==="small"?{height:27,src:h("94405"),width:18}:{height:54,src:h("94404"),width:36},g._("Industry-leading security \u2014 password protection, anti-fraud team and more.")),this.renderRow(a==="small"?{height:13,src:h("94403"),width:18}:{height:26,src:h("94402"),width:36},g._("Send money from your debit card to theirs."))]})};return c}(b("React").Component);a.propTypes={offset:b("prop-types").oneOf(["small","medium"])};a.defaultProps={size:"small"};e.exports=a}),null);
__d("P2PSendMoneyNUXTitleText.react",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";function a(){return b("React").jsx("div",{children:g._("Send Money to Anyone")})}e.exports=a}),null);
__d("P2PSendMoneyNUXDialog.react",["cx","MessengerEnvironment","P2PDialog.react","P2PDialogBody.react","P2PDialogFooter.react","P2PDialogTitle.react","P2PEncryptedText.react","P2PLogger","P2PNUXNextButton.react","P2PSendMoneyNUXListItems.react","P2PSendMoneyNUXTitleText.react","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(){d.$1("UI_Actn_Send_Money_NUX_Next_Click"),d.props.onNextClick()},d.$1=function(a,c){b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:d.props.eventFlow},d.props.loggingData,c))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$1("UI_Actn_Send_Money_NUX_Shown")};d.render=function(){var a;return(a=b("React")).jsxs(b("P2PDialog.react"),{onToggle:this.props.onToggle,width:this.props.width,children:[a.jsx(b("P2PDialogTitle.react"),{children:a.jsx(b("P2PSendMoneyNUXTitleText.react"),{})}),a.jsx(b("P2PDialogBody.react"),{className:"_1ou5",children:a.jsx(b("P2PSendMoneyNUXListItems.react"),{size:"large"})}),a.jsx(b("P2PDialogFooter.react"),{leftContent:a.jsx("div",{className:"_1ou6",children:a.jsx(b("P2PEncryptedText.react"),{})}),children:a.jsx(b("P2PNUXNextButton.react"),{onNextClick:this.$2})})]})};return c}(b("React").Component);a.propTypes={eventFlow:(c=b("prop-types")).string,onToggle:c.func.isRequired,onNextClick:c.func.isRequired,width:c.number};a.defaultProps={width:b("MessengerEnvironment").messengerui?400:350};e.exports=a}),null);
__d("P2PTransferStore",["Arbiter","ChannelConstants","CurrentUser","EventEmitter","ImmutableObject","P2PActionConstants","P2PActions","P2PAPI","P2PDispatcher","P2PGKValues","P2PNUXRendererUtils","MercuryThreadInformer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MercuryThreadInformer").get(),h=!1,i,j=[],k,l={},m=!1,n=!1,o=new Set(),p=!1,q=0;function r(a,c){c&&(l[c]=new(b("ImmutableObject"))(a))}function s(a,b){b&&(l[b]={error:a})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("P2P/TransferStatusChanged"),c.handleChannelTransferStatusChanged.bind(babelHelpers.assertThisInitialized(c)));g.subscribe("messages-received",c.handleMessageReceived.bind(babelHelpers.assertThisInitialized(c)));b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){__p&&__p();var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").TRANSFERS_UPDATED:this.handleTransfersUpdated(c);this.emit("change");break;case b("P2PActionConstants").TRANSFERS_UPDATED_ERROR:this.handleTransfersUpdatedError(c);this.emit("change");break;case b("P2PActionConstants").NUX_TRANSFERS_UPDATED:this.handleNUXTransfersUpdated(c);this.emit("change");break;case b("P2PActionConstants").TRANSFER_ADDED:this.handleTransferAdded(c);this.emit("change");break;case b("P2PActionConstants").TRANSFER_UPDATED:this.handleTransferUpdated(c);this.emit("change");break;case b("P2PActionConstants").TRANSFER_ACCEPTED:this.handleTransferAccepted();this.emit("change");break;case b("P2PActionConstants").TRANSFER_DECLINED:this.handleTransferDeclined(c);this.emit("change");break;case b("P2PActionConstants").EXTENSIVE_TRANSFER_DETAILS_UPDATED:this.handleTransferWithExtensiveDetails(c);this.emit("change");break}};d.getAsyncRequestState=function(){return l};d.handleTransfersUpdated=function(a){__p&&__p();var c=this;k=null;m=!0;var d=[];a=a.map(function(a){var e=c.getTransferByID(a.transfer_id),f={};if(e)for(var g in e)f[g]=a[g]!==null?a[g]:e[g];d.push(a.transfer_id);return new(b("ImmutableObject"))(a,f)});var e=j.filter(function(a){return d.indexOf(a.transfer_id)===-1});j=a.concat(e);j=j.sort(function(a,b){return b.creationTime-a.creationTime})};d.handleTransfersUpdatedError=function(a){k=a.error,s(a.requestID,a.error)};d.handleNUXTransfersUpdated=function(a){m||this.handleTransfersUpdated(a)};d.handleTransferAdded=function(a){__p&&__p();var c;r(a,a.requestID);a&&a.sender&&a.sender.id===b("CurrentUser").getID()&&(p=!0);c=j.filter(function(b){return b.transfer_id===a.transfer_id})[0];if(c)return;j.push(new(b("ImmutableObject"))(a));j=j.sort(function(a,b){return b.creationTime-a.creationTime})};d.handleTransferAddedError=function(a){s(a.requestID,a.errors)};d.handleChannelTransferStatusChanged=function(a,c){c=c.obj,b("P2PActions").transferUpdated(c)};d.handleMessageReceived=function(a,c){__p&&__p();for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){a=c[d];for(var e=0;e<a.length;e++)if(a[e].attachments&&a[e].attachments.length){var f=b("P2PNUXRendererUtils").getTransferFromMessage(a[e]);if(f){!this.hasReceived()&&f.receiver.id===b("CurrentUser").getID()&&b("P2PAPI").getBannerStates();b("P2PActions").transferAdded(f);return}}}};d.handleTransferUpdated=function(a){for(var c=0,d=j.length;c<d;c++)j[c].transfer_id===a.transfer_id&&(j[c]=b("ImmutableObject").set(j[c],a))};d.handleTransferAccepted=function(){var a;for(var c=0,d=j.length;c<d;c++)j[c].status===4&&(a={},a.status=13,j[c]=b("ImmutableObject").set(j[c],a));n=!0};d.handleTransferDeclined=function(a){var c;for(var d=0,e=j.length;d<e;d++)if(j[d].transfer_id===a.transfer_id&&j[d].status===4){c={};c.status=5;j[d]=b("ImmutableObject").set(j[d],c);break}};d.handleTransferUpdatedError=function(a){s(a.requestID,a.errors)};d.getTransferByID=function(a){return j.filter(function(b){return a===b.transfer_id})[0]};d.getAll=function(a){h||(h=!0,b("P2PAPI").getTransactions(a));return j};d.getNUXTransfer=function(){var a=j.filter(function(a){return b("P2PNUXRendererUtils").isRecipientActionableStatus(a)})[0];!a&&!i&&!h&&(i=!0,b("P2PAPI").getNUXTransactions());a&&!a.currency&&q++<3&&b("P2PAPI").getNUXTransactions();return a};d.hasTransfers=function(){return j.length>0};d.hasAccepted=function(){return n};d.hasReceivedFromSender=function(a){for(var b=0,c=j.length;b<c;b++)if(j[b].sender.id===a)return!0;return!1};d.hasReceived=function(){for(var a=0,c=j.length;a<c;a++)if(j[a].receiver.id===b("CurrentUser").getID())return!0;return!1};d.getTransferFetchError=function(){return k};d.getTransferWithExtensiveDetailsByID=function(a){o.has(a)||(o.add(a),b("P2PAPI").getExtensiveTransferDetailsByID(a))};d.handleTransferWithExtensiveDetails=function(a){this.getTransferByID(a.transfer_id)?this.handleTransferUpdated(a):this.handleTransferAdded(a)};d.getAllLocal=function(){return j};d.hasSentDuringSession=function(){return p};d.shouldShowSenderNUX=function(){return!b("P2PGKValues").P2PUserAddedCredentialBefore&&!this.hasSentDuringSession()};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PFriendPickerDialog.react",["cx","fbt","P2PActions","P2PDialog.react","P2PDialogBody.react","P2PDialogTitle.react","P2PFriendPicker.react","P2PSendMoneyNUXDialog.react","P2PTransferStore","React","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(a=b=c.call.apply(c,[this].concat(e))||this,b.state={sendMoneyNUXDismissed:!1},b.handleToggle=function(a){a||b.props.onClose()},b.handleNUXNextClick=function(){b.setState({sendMoneyNUXDismissed:!0})},a)||babelHelpers.assertThisInitialized(b)}var d=a.prototype;d.render=function(){var a=445;return!this.state.sendMoneyNUXDismissed&&b("P2PTransferStore").shouldShowSenderNUX()?b("React").jsx(b("P2PSendMoneyNUXDialog.react"),{eventFlow:this.props.eventFlow,onToggle:this.handleToggle,onNextClick:this.handleNUXNextClick,width:a}):b("React").jsxs(b("P2PDialog.react"),{onToggle:this.handleToggle,width:a,children:[b("React").jsx(b("P2PDialogTitle.react"),{children:b("React").jsx("div",{className:"_4ia-",children:this.props.title})}),b("React").jsx(b("P2PDialogBody.react"),{className:"_4ib0",children:b("React").jsx(b("P2PFriendPicker.react"),{amount:this.props.amount,buttonLabel:this.props.buttonLabel,eventFlow:this.props.eventFlow,onFriendSelected:this.props.onClose,referrer:this.props.referrer,sendMoneyNUXDismissed:this.state.sendMoneyNUXDismissed,subTitle:this.props.subTitle})})]})};return a}(b("React").Component);i.propTypes={amount:(a=b("prop-types")).string,buttonLabel:a.node,eventFlow:a.string.isRequired,onClose:a.func.isRequired,referrer:a.string,subTitle:a.node,title:a.node};i.defaultProps={amount:"",title:h._("Select Friend"),subTitle:h._("These are your friends who are able to receive money.")};e.exports={module:i,render:function(a){b("P2PActions").showDialog(i,babelHelpers["extends"]({title:h._("Send Money to Friends")},a,{onClose:b("P2PActions").hideDialog}))}}}),null);
__d("P2PSendMoneyHelper",["fbt","MercuryIDs","P2PActions","P2PFriendPickerDialog.react","P2PLogger"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("P2PFriendPickerDialog.react").module;a={bindProfileSendMoneyAction:function(a,c){a.subscribe("itemclick",function(a,d){d.item.getValue()==="send_money"&&b("P2PActions").chatSendViewOpened({referrer:"profile_action",threadID:b("MercuryIDs").getThreadIDFromUserID(c)})})},bindPeopleSearchResultSendMoneyAction:function(a,c){a.subscribe("itemclick",function(a,d){d.item.getValue()==="send_money"&&(b("P2PLogger").log("Actn_PeopleSearchSendMoneyButtonClicked",{www_event_referrer:"www_people_search_result",www_event_flow:"UI_FLOW_P2P_PEOPLE_SEARCH_SEND_MONEY",object_id:c}),b("P2PActions").chatSendViewOpened({referrer:"people_search_result",threadID:b("MercuryIDs").getThreadIDFromUserID(c)}))})},initPaymentsBluebarMenuItems:function(a){a.subscribe("itemclick",function(a,c){a=c.item.getValue();a==="send_money"?b("P2PActions").showDialog(h,{eventFlow:"UI_FLOW_SEND_MONEY_BLUEBAR",onClose:b("P2PActions").hideDialog,referrer:"bluebar",title:g._("Send Money to Friends")}):a==="payments_history"&&b("P2PLogger").log("UI_ACTN_PAYMENTS_HISTORY_BLUEBAR_CLICK",{www_event_flow:"UI_FLOW_PAYMENTS_MENU_BLUEBAR"})})}};e.exports=a}),null);
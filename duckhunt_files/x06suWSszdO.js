if (self.CavalryLogger) { CavalryLogger.start_js(["VkJMW"]); }

__d("CommerceUI",[],(function(a,b,c,d,e,f){e.exports={MAX_ITEMS_BEFORE_LIMITED_STOCK_WARNING:9,MAX_VARIANTS:4,MAX_CUSTOMIZATIONS:5}}),null);
__d("AppUserRoleConstants.brands",[],(function(a,b,c,d,e,f){a=Object.freeze({ADMIN:"ADMIN",MANAGER:"MANAGER",EMPLOYEE:"EMPLOYEE",NO_PERMISSION:"NO_PERMISSION"});e.exports=a}),null);
__d("CommerceErrorNotice.react",["React","XUINotice.react","XUIText.react","prop-types"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.error;if(!a)return b("React").jsx("span",{});var c=null;a.__html?c=b("React").jsx(b("XUIText.react"),{size:"meta1",display:"block",dangerouslySetInnerHTML:a}):c=b("React").jsx(b("XUIText.react"),{size:"meta1",display:"block",children:a});a=this.props;var d=a.className,e=a.use;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","use"]);return b("React").jsx(b("XUINotice.react"),babelHelpers["extends"]({use:e||"warn",className:d},a,{children:c}))};return c}(b("React").Component);a.propTypes={error:b("prop-types").oneOfType([b("prop-types").string,b("prop-types").object])};a.defaultProps={error:null};e.exports=a}),null);
__d("FixedDataTableAbstractSortableHeader.react",["ix","cx","AdsManagerNavigationGatingUtils","Image.react","PopoverMenu.react","PopoverMenuShowOnHover","React","asset","fbglyph","gkx","joinClasses","keyMirror","prop-types"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("AdsManagerNavigationGatingUtils").getHasGeoPreview(),j=b("keyMirror")({ASC:null,DESC:null});function k(a){switch(a){case j.ASC:return j.DESC;default:return j.ASC}}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){var b=k(c.props.sorting);c.props.onClick(b,a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props,c=a.children,d=a.className,e=a.sortMenu,f=a.sorting,h=a.isSortDisabled;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","sortMenu","sorting","isSortDisabled"]);var k="_54_8"+(h?" _3w3t":"")+(!!f&&!h&&!e?" _54_9":"")+(f===j.DESC&&!h&&!e?" _5y6x":"")+(!!f&&!h&&!!e?" _3qz2":"")+(e?" _7myg":""),l;if(e){!f||h?h=b("gkx")("729189")?g("505794"):g("125303"):f===j.DESC?h=b("gkx")("729189")?g("505782"):g("134915"):h=b("gkx")("729189")?g("505789"):g("134927");l=b("React").jsx(b("PopoverMenu.react"),{activateControlVisiblityPropName:"onShow",alignh:i?"left":"right",behaviors:[b("PopoverMenuShowOnHover")],deactivateControlVisiblityPropName:"onHide",menu:e,position:"below",children:b("React").jsx(b("Image.react"),{"data-testid":"fixed-data-table-sort-icon",className:"_3qz3",src:h})})}return b("React").jsxs("div",babelHelpers["extends"]({},a,{onClick:this.$1,className:b("joinClasses")(k,d),role:"columnheader",tabIndex:"-1",children:[c,l]}))};return c}(b("React").Component);a.propTypes={className:(c=b("prop-types")).string,disabledReason:c.string,isSortDisabled:c.bool,sortMenu:c.node,sorting:c.oneOf([j.ASC,j.DESC]),onClick:c.func.isRequired};e.exports=a}),null);
__d("FixedDataTableSortableHeader.react",["ix","cx","fbt","xuiglyph","FixedDataTableAbstractSortableHeader.react","Image.react","React","XUIError.react","joinClasses"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k=i._("Please use the filters to narrow down the number of items to be sorted.");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["className"]);var d=a.isSortDisabled?this.$1(a.disabledReason):null;return b("React").jsx(b("FixedDataTableAbstractSortableHeader.react"),babelHelpers["extends"]({className:b("joinClasses")(c,"_2wzx")},a,{children:b("React").jsxs("div",{className:"_2eq6",children:[d,this.props.children]})}))};d.$1=function(a){a===void 0&&(a=k);return b("React").jsx(b("XUIError.react"),{xuiErrorPosition:"above",xuiError:a,children:b("React").jsxs("span",{className:"_2wzy",children:[b("React").jsx(b("Image.react"),{className:"_2w-0",src:g("88769")}),b("React").jsx(b("Image.react"),{className:"_2w-1",src:g("88766")})]})})};return c}(b("React").Component);a.propTypes=babelHelpers["extends"]({},b("FixedDataTableAbstractSortableHeader.react").propTypes);e.exports=a}),null);
__d("UFISearchInput.react",["ix","cx","fbt","AbstractButton.react","AbstractTextInput.react","FlexLayout.react","Image.react","React","asset","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.focusInput()};d.render=function(){var a;return(a=b("React")).jsxs(b("FlexLayout.react"),{className:"_2pgc",align:"center",direction:"horizontal",children:[a.jsx(b("Image.react"),{className:"_2pgd",src:g("363738")}),a.jsx(b("AbstractTextInput.react"),{onChange:this.props.onChange,onClick:this.props.onClick,placeholder:this.props.placeholder,ref:"inputField",value:this.props.value,"aria-label":this.props.label}),a.jsx(b("AbstractButton.react"),{labelIsHidden:!0,onClick:this.props.onClear,label:i._("Clear search"),className:(this.props.value.length===0?"hidden_elem":"")+" _2pge",image:b("React").jsx(b("Image.react"),{src:g("393092")})})]})};d.focusInput=function(){this.refs.inputField.focusInput()};return c}(b("React").PureComponent);a.propTypes={onChange:(c=b("prop-types")).func,onClear:c.func,onClick:c.func,placeholder:c.node,value:c.string.isRequired,label:c.string};e.exports=a}),null);
__d("StickerInterfaces",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSAGES:"messages",NEO:"neo",COMMENTS:"comments",STICKERED:"stickered",COMPOSER:"composer",POSTS:"posts",FRAMES:"frames",SMS:"sms",MONTAGE:"montage"})}),null);
__d("UFIStickerButton.react",["cx","fbt","Arbiter","Bootloader","FocusRelocator.react","Link.react","React","StickerInterfaces","createReactClass_DEPRECATED","getObjectValues","prop-types","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();c=b("createReactClass_DEPRECATED")({displayName:"UFIStickerButton",_clickGuard:!1,_updateListener:null,_openFlyoutListener:null,_linkRef:null,propTypes:{customStickerOwnerID:(a=b("prop-types")).string,onStickerFlyoutShow:a.func,onStickerSelected:a.func.isRequired,showTooltip:a.bool,stickerInterface:a.oneOf(b("getObjectValues")(b("StickerInterfaces"))),tabIndex:a.number},getDefaultProps:function(){return{customStickerOwnerID:"",showTooltip:!0,stickerInterface:"comments"}},getInitialState:function(){return{renderFlyout:null,flyoutShown:!1}},componentDidMount:function(){var a=this;this._updateListener=b("Arbiter").subscribe("page_transition",function(){return a._hideFlyout()});this._openFlyoutListener=b("Arbiter").subscribe("GamingStickers/openFlyout",function(b,c){return a._showFlyout(c)})},componentWillUnmount:function(){this._updateListener&&this._updateListener.unsubscribe(),this._openFlyoutListener&&this._openFlyoutListener.unsubscribe()},render:function(){var a=h._("Post a sticker");return b("React").jsx(b("FocusRelocator.react"),{from:this._linkRef,to:this.refs.icon,children:b("React").jsxs(b("Link.react"),{"aria-label":a,className:"_r1a UFICommentStickerButton","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.showTooltip?a:null,linkRef:this._setRef,onClick:this._onLinkClicked,onMouseDown:this._prepareForClick,role:"button",tabIndex:this.props.tabIndex,children:[b("React").jsx("div",{ref:"icon",className:"UFICommentStickerIcon"+(this.state.flyoutShown?" UFICommentStickerIconActive":"")}),this.props.children,this.state.renderFlyout?this.state.renderFlyout():null]})})},_hideFlyout:function(){this.setState({flyoutShown:!1})},_showFlyout:function(a){var c=this;b("Bootloader").loadModules(["ContextualLayerAutoFlip","LayerTabIsolation","StickersFlyout.react","XUIContextualDialog.react","StickersActions"],function(d,e,f,g,h){c.setState({flyoutShown:!0,renderFlyout:function(){return b("React").jsx(g,{alignment:"right",behaviors:{ContextualLayerAutoFlip:d,LayerTabIsolation:e},className:"_5e-r",contextRef:function(){return c._linkRef},onBlur:c._hideFlyout,onToggle:function(a){!a&&c.state.flyoutShown&&c._hideFlyout()},position:"above",shown:c.state.flyoutShown,hasActionableContext:!0,width:278,children:b("React").jsx("div",{children:b("React").jsx(f,{customStickerOwnerID:c.props.customStickerOwnerID,onEscKeyDown:c._hideFlyout,onStickerSelect:c._onStickerSelected,stickerInterface:c.props.stickerInterface,shown:c.state.flyoutShown})})})}}),c.props.onStickerFlyoutShow&&c.props.onStickerFlyoutShow(),a&&b("setImmediate")(function(){return h.selectTrayPack(a)})},"UFIStickerButton.react")},_prepareForClick:function(){this._clickGuard=this.state.flyoutShown},_onLinkClicked:function(a){a.preventDefault();if(this.state.renderFlyout!==null){this._clickGuard||(this.props.onStickerFlyoutShow&&this.props.onStickerFlyoutShow(),this.setState({flyoutShown:!0}));return}this._showFlyout(null)},_onStickerSelected:function(a,b,c){this.props.onStickerSelected(a,b,c),this._hideFlyout()},_setRef:function(a){this._linkRef=a}});e.exports=c}),null);
__d("FBCheckbox.react",["cx","Keys","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){if(d.props.disabled)return;d.props.onToggle&&d.props.onToggle(!d.props.checked)},d.$2=function(a){switch(a.keyCode){case b("Keys").SPACE:a.preventDefault();d.$1();break;default:break}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a="_kx6"+(this.props.checked?" _kx7":"")+(this.props.disabled?" _kx8":"")+(this.props.hovered?" _kx9":"")+(this.props.checked?"":" _kxa");return b("React").jsx("div",{"aria-checked":this.props.checked?"true":"false","aria-disabled":this.props.disabled?"true":"false",className:b("joinClasses")(a,this.props.className),onClick:this.$1,onKeyDown:this.$2,role:"checkbox",tabIndex:"0"})};return c}(b("React").Component);a.propTypes={checked:(c=b("prop-types")).bool.isRequired,className:c.string,disabled:c.bool,hovered:c.bool,onToggle:c.func};e.exports=a}),null);
__d("FBNumberInput.react",["Input","React","debounce","intlNumUtils","joinClasses","prop-types"],(function(a,b,c,d,e,f){__p&&__p();var g=200;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c;c=a.call(this)||this;c.$1=function(a){a!==null?(a=c.props.nonnegative?Math.abs(a):a,c.props.minValue!=null&&a<c.props.minValue?a=c.props.minValue:c.props.maxValue!=null&&a>c.props.maxValue&&(a=c.props.maxValue)):c.props.defaultValue!=null&&(a=c.props.defaultValue);return a};c.$2=function(a){a=b("intlNumUtils").parseNumber(a);c.props.onlyIntegers&&(a=Math.trunc(a));return a};c.$3=b("debounce")(function(a){a=c.$2(b("Input").getValue(a));a===c.$1(a)&&c.props.onValueChange(a)},g);c.$4=function(a){return c.props.formatNumber?b("intlNumUtils").formatNumberWithThousandDelimiters(a,0):""+a};c.$5=function(a){c.setState({focused:!1});var d=c.$1(c.$2(b("Input").getValue(a.target))),e=d!==null?c.$4(d):"";b("Input").setValue(a.target,e);c.props.triggerCallbackOnChange&&c.$3.reset();c.props.onValueChange(d)};c.$6=function(a){c.setState({focused:!0})};c.$7=function(a){var b=c.props,d=b.onChange;b=b.triggerCallbackOnChange;b?c.$3(a.target):d&&d(a)};c.state={focused:!1};return c}var d=c.prototype;d.render=function(){var a=this.props,c=a.value,d=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["value","className"]);c&&(c=this.$4(c));return b("React").jsx("input",babelHelpers["extends"]({},a,{className:b("joinClasses")(d,"inputtext"),type:"text",ref:"fb_number_input",defaultValue:c,value:this.state.focused?void 0:c,onBlur:this.$5,onFocus:this.$6,onChange:this.$7}))};return c}(b("React").Component);a.propTypes={nonnegative:(c=b("prop-types")).bool,onValueChange:c.func.isRequired,value:c.number,defaultValue:c.number,minValue:c.number,maxValue:c.number,placeholder:c.string,formatNumber:c.bool,onlyIntegers:c.bool,triggerCallbackOnChange:c.bool};e.exports=a}),null);
__d("Token.react",["cx","fbt","CloseButton.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=null;this.props.name&&(a=[b("React").jsx("input",{type:"hidden",name:this.props.name+"[]",value:this.props.value}),b("React").jsx("input",{type:"hidden",name:"text_"+this.props.name+"[]",value:this.props.label})]);var c=null,d=h._("Remove {item}",[h._param("item",this.props.label)]);this.props.removable&&(c=b("React").jsx(b("CloseButton.react"),{ariaLabel:d,className:"remove",size:"small",onClick:this.props.onRemove}));d="uiToken"+(this.props.removable?" removable":"");return b("React").jsxs("span",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d),children:[b("React").jsx("span",{className:"uiTokenText",children:this.props.label}),a,c]}))};return c}(b("React").Component);a.propTypes={name:(c=b("prop-types")).string,label:c.string.isRequired,value:c.string,removable:c.bool,onRemove:c.func};e.exports=a}),null);
__d("useEffectOnce",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useEffect;function a(a){return g(a,[])}e.exports=a}),null);
__d("AudioContextSingleton",["FBLogger"],(function(a,b,c,d,e,f){var g=window.AudioContext||window.webkitAudioContext||window.mozAudioContext,h=null;a={get:function(){h==null&&(h=new g());h.state==="closed"&&(b("FBLogger")("project").warn("AudioContext Singleton has been closed"),h=new g());return h}};e.exports=a}),null);
__d("ReactComponentRenderer",["React","ReactDOM","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b){this.klass=a,this.container=b,this.props={},this.component=null}var c=a.prototype;c.replaceProps=function(a,b){this.props={},this.setProps(a,b)};c.setProps=function(a,c){if(this.klass==null)return;Object.assign(this.props,a);a=b("React").createElement(this.klass,this.props);var d=this;b("ReactDOM").render(a,this.container,function(){d.component=this,c&&c.call(this)})};c.unmount=function(){b("ReactDOM").unmountComponentAtNode(this.container),this.klass=null};return a}();e.exports=a}),null);
__d("StyleSheet",["mapObject"],(function(a,b,c,d,e,f){"use strict";var g;a={create:function(a){return(g||(g=b("mapObject")))(a,function(a,c){return(g||(g=b("mapObject")))(a,function(a,b){return b==="lineHeight"&&typeof a==="number"?a+"px":a})})},hairlineWidth:1};e.exports=a}),null);
__d("SphericalMediaConstants",[],(function(a,b,c,d,e,f){"use strict";a={COMP_PHOTO_EDIT_THUMB:"PhotoEditThumbanil",COMP_PHOTO_VIEWER:"PhotoViewer",EDIT_VIEWPORT_SIZE:{width:476,height:476},HALF_EQUIRECT_PARTIAL_LIMIT:85,HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1e3,MOUSE_EXPOSURE:4e3,LOGGER_SURFACES:{newsfeed:"newsfeed",timeline:"timeline",fullpage:"photo_viewer",snowlift:"www_snowlift",composer:"composer",albumComposer:"album_composer",stories:"stories",other:"other"},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1e3,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:"tag",TAGGED_FACEBOX:"tagged_facebox",UNTAGGED_FACEBOX:"untagged_facebox",DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10,DEFAULT_VOLUME:{MUTE:0,HIGH:.7}};e.exports=a}),null);
__d("XAdsAccountAdvertisingAccessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/accountquality/advertising_access/",{callsite:{type:"Enum",enumType:0},id:{type:"FBID"}})}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["VqEXF"]); }

__d("GamesImageSlideshow.react",["cx","Animation","Image.react","React","ReactDOM","TimeSlice","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();var h=1500,i=250;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={previous:0,active:0},d.$1=function(){__p&&__p();if(d.running)return;d.running=!0;var a=function(){var c=(this.state.active+1)%this.props.image_urls.length,d=this.props.image_urls[c],e=new Image(),f=function(){if(!this.running)return;this.$3(c);this.interval=setTimeout(a,h)}.bind(this);e.onload=b("TimeSlice").guard(f,"GamesImageSlideshow image.onload",{propagationType:b("TimeSlice").PropagationType.CONTINUATION});e.src=d}.bind(babelHelpers.assertThisInitialized(d));a()},d.$3=function(a){d.setState({previous:d.state.active,active:a},d.$4)},d.$4=function(){if(d.state.active!==d.state.previous){var a=b("ReactDOM").findDOMNode(d.refs[d.state.previous]),c=b("ReactDOM").findDOMNode(d.refs[d.state.active]);d.anims=[new(b("Animation"))(a).from("opacity",1).to("opacity",0).duration(i).go(),new(b("Animation"))(c).from("opacity",0).to("opacity",1).duration(i).go()]}},d.$2=function(){d.interval&&(clearTimeout(d.interval),d.interval=null)},d.$5=function(){d.running=!1,d.$2(),d.anims&&d.anims.map(function(a){a.stop()}),d.$3(0)},d.$6=function(a){return b("React").jsx(b("Image.react"),{ref:a,src:d.props.image_urls[a]},a)},d.$7=function(){var a=d.state.previous,b=d.state.active;if(a===b)return[d.$6(a)];else return[d.$6(a),d.$6(b)]},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.props.autoplay&&(this.timeout=setTimeout(this.$1,h))};d.componentWillUnmount=function(){this.$2()};d.render=function(){return b("React").jsx("div",{style:{height:this.props.height+"px",width:this.props.width+"px"},onMouseEnter:this.props.autoplay?null:this.$1,onMouseLeave:this.props.autoplay?null:this.$5,className:"_4x1w",children:this.$7()})};return c}(b("React").Component);a.propTypes={image_urls:(c=b("prop-types")).array.isRequired,height:c.number.isRequired,width:c.number.isRequired,autoplay:c.bool};a.defaultProps={autoplay:!1};e.exports=a}),null);
__d("legacy:FBXSaveExperience",["FBXSaveExperience"],(function(a,b,c,d,e,f){a.FBXSaveExperience=b("FBXSaveExperience")}),3);
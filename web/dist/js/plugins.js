"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){var t=function(){function e(t){_classCallCheck(this,e);for(var n in t)this[n]=t[n];var i=this.element;this.dimention={image:e.getDimension(i),parent:e.getDimension(i.closest("div"))}}return _createClass(e,[{key:"getOrientation",value:function(){var t=e.getRatio(this.dimention.image),n=e.getRatio(this.dimention.parent),i="portrait";return t>1&&t>n&&!this.revert&&(i="landscape"),i}}],[{key:"getDimension",value:function(e){return{width:e.width(),height:e.height()}}},{key:"getRatio",value:function(e){return e.width/e.height}}]),e}();e.widget("pls.pictureOrientation",{options:{revert:!1},_create:function(){var e=this;this._destroy();var t=this.element;this.complete||t.height()>0?this._calcClass(t):t.on("load",function(){e._calcClass(t)})},reflow:function(){this._create()},_calcClass:function(e){var n={element:this.element,revert:this.options.revert},i=new t(n).getOrientation();e.addClass("img--"+i)},_destroy:function(){this.element.removeClass("img--portrait img--landscape")}})}(jQuery);
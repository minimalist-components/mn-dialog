"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnDialog=function(_HTMLElement){function MnDialog(self){var _this,_ret;return _classCallCheck(this,MnDialog),self=_this=_possibleConstructorReturn(this,(MnDialog.__proto__||Object.getPrototypeOf(MnDialog)).call(this,self)),_this.setCard(),_this.setOpenEvents(),_this.setCloseEvents(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnDialog,_HTMLElement),_createClass(MnDialog,[{key:"setCard",value:function(){function putInCard(element){card.appendChild(element)}function cardClass(cssClass){return["padding-title","padding"].indexOf(cssClass)>-1}var _this2=this,card=document.createElement("div");card.classList.add("mn-card"),Array.from(this.classList).filter(cardClass).forEach(function(cssClass){_this2.classList.remove(cssClass),card.classList.add(cssClass)}),Array.from(this.children).forEach(putInCard),this.insertBefore(card,this.firstChild)}},{key:"setOpenEvents",value:function(){var _this3=this;document.addEventListener("click",function(event){event.target.matches('button[open-dialog="'+_this3.id+'"]')&&(_this3.open(),event.stopPropagation())})}},{key:"setCloseEvents",value:function(){var _this4=this;document.addEventListener("click",function(event){event.target.matches("button[close-dialog]")&&(_this4.close(),event.stopPropagation())}),document.addEventListener("keyup",function(event){27===event.keyCode&&_this4.close()}),this.addEventListener("click",function(event){var clickOutside=!event.target.closest(".mn-card"),clickOutsideDisabled=_this4.classList.contains("disable-click-outside");clickOutside&&!clickOutsideDisabled&&_this4.close()})}},{key:"open",value:function(){this.scrollTop=0,window.MnBackdrop.show({target:this}),document.body.classList.add("mn-dialog-visible");var previousDialog=document.querySelector("mn-dialog.visible");previousDialog&&previousDialog.classList.remove("visible"),this.classList.add("visible")}},{key:"close",value:function(){window.MnBackdrop.hide({target:this}),document.body.classList.remove("mn-dialog-visible"),this.classList.remove("visible")}}],[{key:"clickOutside",value:function(value){var _this5=this,dialogs=document.querySelectorAll("mn-dialog");this.clickOutsideDisabled=!value,Array.from(dialogs).forEach(function(dialog){_this5.clickOutsideDisabled?dialog.classList.add("disable-click-outside"):dialog.classList.remove("disable-click-outside")})}}]),MnDialog}(HTMLElement);window.customElements.define("mn-dialog",MnDialog),window.MnDialog=MnDialog;
//# sourceMappingURL=mn-dialog.js.map

"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnDialog=function(_HTMLElement){function MnDialog(self){var _this,_ret;return _classCallCheck(this,MnDialog),self=_this=_possibleConstructorReturn(this,(MnDialog.__proto__||Object.getPrototypeOf(MnDialog)).call(this,self)),_this.setCard(),_this.setOpenEvents(),_this.setCloseEvents(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnDialog,_HTMLElement),_createClass(MnDialog,[{key:"setCard",value:function(){function putInCard(element){card.appendChild(element)}function cardClass(cssClass){var validClasses=["padding-header","padding"],isValidClass=validClasses.indexOf(cssClass)>-1;return isValidClass}var _this2=this,card=document.createElement("div");card.classList.add("mn-card"),Array.from(this.classList).filter(cardClass).forEach(function(cssClass){_this2.classList.remove(cssClass),card.classList.add(cssClass)}),Array.from(this.children).forEach(putInCard),this.insertBefore(card,this.firstChild)}},{key:"setOpenEvents",value:function(){function setEventListener(button){button.addEventListener("click",function(event){openDialog(event),event.stopPropagation()})}var id=this.id,buttons=document.querySelectorAll('button[open-dialog="'+id+'"]'),openDialog=this.open;Array.from(buttons).forEach(setEventListener)}},{key:"setCloseEvents",value:function(){var _this3=this,buttons=document.querySelectorAll("[close-dialog]");Array.from(buttons).forEach(function(button){return button.addEventListener("click",function(){return _this3.close()})}),document.addEventListener("keyup",function(){var esc=27===event.keyCode;esc&&_this3.close()}),this.addEventListener("click",function(event){var clickOutside=!event.target.closest(".mn-card");clickOutside&&_this3.close()})}},{key:"open",value:function(event){var id=void 0,dialog=void 0;event?(id=event.target.getAttribute("open-dialog"),dialog=document.querySelector("mn-dialog#"+id)):dialog=this,dialog.scrollTop=0,window.MnBackdrop.show(),document.body.classList.add("mn-dialog-visible");var previousDialog=document.querySelector("mn-dialog.visible");previousDialog&&previousDialog.classList.remove("visible"),dialog.classList.add("visible")}},{key:"close",value:function(){window.MnBackdrop.hide(),document.body.classList.remove("mn-dialog-visible"),this.classList.remove("visible")}}]),MnDialog}(HTMLElement);window.customElements.define("mn-dialog",MnDialog);
//# sourceMappingURL=mn-dialog.js.map

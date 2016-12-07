"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnDialog=function(_HTMLElement){function MnDialog(self){var _this,_ret;return _classCallCheck(this,MnDialog),self=_this=_possibleConstructorReturn(this,(MnDialog.__proto__||Object.getPrototypeOf(MnDialog)).call(this,self)),_this.setCard(),_this.setOpenEvents(),_this.setCloseEvents(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnDialog,_HTMLElement),_createClass(MnDialog,[{key:"setCard",value:function(){function putInCard(element){card.appendChild(element)}function cardClass(cssClass){var validClasses=["padding-header","padding"],isValidClass=validClasses.indexOf(cssClass)>-1;return isValidClass}var _this2=this,card=document.createElement("div");card.classList.add("mn-card"),Array.from(this.classList).filter(cardClass).forEach(function(cssClass){console.log(cssClass),_this2.classList.remove(cssClass),card.classList.add(cssClass)}),Array.from(this.children).forEach(putInCard),this.insertBefore(card,this.firstChild)}},{key:"setOpenEvents",value:function(){function setEventListener(button){button.addEventListener("click",openDialog)}var id=this.id,buttons=document.querySelectorAll('button[data-open-dialog="'+id+'"]'),openDialog=this.open;Array.from(buttons).forEach(setEventListener)}},{key:"setCloseEvents",value:function(){var buttons=document.querySelectorAll("[data-close-dialog]"),close=this.close;Array.from(buttons).forEach(function(button){return button.addEventListener("click",close)}),document.body.addEventListener("click",close),document.addEventListener("keyup",function(){var esc=27===event.keyCode,isOpened=document.body.classList.contains("mn-dialog-opened");if(esc&&isOpened){var dialog=document.querySelector("mn-dialog.opened");document.body.classList.remove("mn-dialog-opened"),dialog.classList.remove("opened")}})}},{key:"open",value:function(){var id=event.target.getAttribute("data-open-dialog"),dialog=document.querySelector("mn-dialog#"+id);document.body.classList.add("mn-dialog-opened");var previousDialog=document.querySelector("mn-dialog.opened");previousDialog&&previousDialog.classList.remove("opened"),dialog.classList.add("opened")}},{key:"close",value:function(event){event.stopPropagation();var clickButtonClose=event.target.getAttribute("data-close-dialog"),clickOutside="BODY"===event.target.tagName&&event.target.classList.contains("mn-dialog-opened");if(clickButtonClose||clickOutside){var dialog=document.querySelector("mn-dialog.opened");document.body.classList.remove("mn-dialog-opened"),dialog.classList.remove("opened")}}}]),MnDialog}(HTMLElement);customElements.define("mn-dialog",MnDialog);
//# sourceMappingURL=mn-dialog.js.map

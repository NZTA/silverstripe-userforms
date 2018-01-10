!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,r){"use strict";var n=r(3),i=r.n(n),o=r(2),s=r.n(o);i()(document).ready(function(t){function e(e){return this.$el=e instanceof t?e:t(e),this.$el.find("h4").text(s.a._t("UserForms.ERROR_CONTAINER_HEADER","Please correct the following errors and try again:")),this}function r(r){var n=this;return this.$el=r instanceof t?r:t(r),this.$elButton=t(".step-button-wrapper[data-for='"+this.$el.prop("id")+"']"),this.viewed=!1,this.valid=!1,this.id=null,this.hide(),u.DISPLAY_ERROR_MESSAGES_AT_TOP&&(this.errorContainer=new e(this.$el.find(".error-container")),a.$el.on("userform.form.error",function(e,r){n.$el.is(":visible")&&t.each(r.errorList,function(e,r){n.errorContainer.updateErrorMessage(t(r.element),r.message)})}),a.$el.on("userform.form.valid",function(t,e){n.errorContainer.removeErrorMessage(e)})),this.$elButton.on("userform.field.hide userform.field.show",function(){a.$el.trigger("userform.form.conditionalstep")}),this}function n(e){var r=this,n=this;return this.$el=e instanceof t?e:t(e),this.$buttons=this.$el.find(".step-button-jump"),this.$jsAlign=this.$el.find(".js-align"),this.$buttons.each(function(e,i){t(i).on("click",function(e){e.preventDefault(),n.$el.trigger("userform.progress.changestep",[parseInt(t(r).data("step"),10)])})}),a.$el.on("userform.form.changestep",function(t,e){n.update(e)}),a.$el.on("userform.form.conditionalstep",function(){var e=n.$buttons.filter(":visible");e.each(function(e,r){t(r).text(e+1)}),n.$el.find(".progress-bar").attr("aria-valuemax",e.length),n.$el.find(".total-step-number").text(e.length)}),this.$jsAlign.each(function(e,r){var i=t(r),o=100/(n.$jsAlign.length-1)*(e+"%"),s=i.innerWidth()/2*-1;i.css({left:o,marginLeft:s}),e===n.$jsAlign.length-1?i.css({marginLeft:2*s}):0===e&&i.css({marginLeft:0})}),this.update(0),this}function i(e){var r=this;return this.$el=e instanceof t?e:t(e),this.$prevButton=this.$el.find(".step-button-prev"),this.$nextButton=this.$el.find(".step-button-next"),this.$prevButton.parent().attr("aria-hidden",!1).show(),this.$nextButton.parent().attr("aria-hidden",!1).show(),this.$prevButton.on("click",function(t){t.preventDefault(),r.$el.trigger("userform.action.prev")}),this.$nextButton.on("click",function(t){t.preventDefault(),r.$el.trigger("userform.action.next")}),a.$el.on("userform.form.changestep userform.form.conditionalstep",function(){r.update()}),this.update(),this}function o(r){var n=this,i=this;return this.$el=r instanceof t?r:t(r),this.steps=[],this.errorContainer=new e(this.$el.children(".error-container")),this.$el.on("userform.action.prev",function(){i.prevStep()}),this.$el.on("userform.action.next",function(){i.nextStep()}),t("#userform-progress").on("userform.progress.changestep",function(t,e){i.jumpToStep(e-1)}),this.$el.on("userform.form.valid",function(t,e){i.errorContainer.removeStepLink(e)}),this.$el.validate(this.validationOptions),t(".optionset.requiredField input").each(function(){t(n).rules("add",{required:!0})}),this}var a=null,u={},l={show:function(){this.$el.attr("aria-hidden",!1).show()},hide:function(){this.$el.attr("aria-hidden",!0).hide()}};e.prototype.hasErrors=function(){return this.$el.find(".error-list").children().length>0},e.prototype.removeErrorMessage=function(t){this.$el.find("#"+t+"-top-error").remove(),this.hasErrors()||this.hide()},e.prototype.addStepLink=function(e){var r=e.$el.attr("id")+"-error-link",n=this.$el.find("#"+r),i=e.$el.attr("id"),o=e.$el.data("title");n.length||(n=t('<li id="'+r+'"><a href="#'+i+'">'+o+"</a></li>"),n.on("click",function(t){t.preventDefault(),a.jumpToStep(e.id)}),this.$el.find(".error-list").append(n))},e.prototype.removeStepLink=function(e){var r=t("#"+e).closest(".form-step").attr("id");this.$el.find("#"+r+"-error-link").remove(),this.$el.find(".error-list").is(":empty")&&this.hide()},e.prototype.updateErrorMessage=function(e,r){var n=this,i=e.attr("id"),o="#"+i,s=i+"-top-error",a=t("#"+s),u=e.attr("aria-describedby");if(!r)return void a.addClass("fixed");a.removeClass("fixed"),this.show(),1===a.length?a.show().find("a").html(r):(e.closest(".field[id]").each(function(){o="#"+t(n).attr("id")}),a=t("<li><a></a></li>"),a.attr("id",s).find("a").attr("href",location.pathname+location.search+o).html(r),this.$el.find("ul").append(a),u?u.match(new RegExp("\\b"+s+"\\b"))||(u+=" "+s):u=s,e.attr("aria-describedby",u))},r.prototype.conditionallyHidden=function(){return!this.$elButton.find("button").is(":visible")},n.prototype.update=function(e){var r=t(t(".form-step")[e]),n=0,i=e/(this.$buttons.length-1)*100;this.$buttons.each(function(r,i){return!(r>e||(t(i).is(":visible")&&(n+=1),0))}),this.$el.find(".current-step-number").each(function(e,r){t(r).text(n)}),this.$el.find("[aria-valuenow]").each(function(e,r){t(r).attr("aria-valuenow",n)}),this.$buttons.each(function(e,r){var i=t(r),o=i.parent();if(parseInt(i.data("step"),10)===n&&i.is(":visible"))return o.addClass("current viewed"),void i.removeAttr("disabled");o.removeClass("current")}),this.$el.siblings(".progress-title").text(r.data("title")),i=i?i+"%":"",this.$el.find(".progress-bar").width(i)},i.prototype.update=function(){var t=a.steps.length,e=a.currentStep?a.currentStep.id:0,r=null,n=null;for(this.$el.find(".step-button-prev")[0===e?"hide":"show"](),r=t-1;r>=0;r--)if(n=a.steps[r],!n.conditionallyHidden()){this.$el.find(".step-button-next")[e>=r?"hide":"show"](),this.$el.find(".Actions")[e>=r?"show":"hide"]();break}},o.prototype.validationOptions={ignore:":hidden,ul",errorClass:"error",errorElement:"span",errorPlacement:function(t,e){t.addClass("message"),e.is(":radio")||e.parents(".checkboxset").length>0?t.appendTo(e.closest(".middleColumn")):e.parents(".checkbox").length>0?t.appendTo(e.closest(".field")):t.insertAfter(e)},invalidHandler:function(t,e){setTimeout(function(){e.currentElements.filter(".error").first().focus()},0)},submitHandler:function(e){var r=!0;a.currentStep&&(a.currentStep.valid=t(e).valid()),t.each(a.steps,function(t,e){e.valid||e.conditionallyHidden()||(r=!1,a.errorContainer.addStepLink(e))}),r?(t(e).removeClass("dirty"),e.submit()):a.errorContainer.show()},success:function(e){var r=t(e).attr("id"),n=r.substr(0,r.indexOf("-error")).replace(/[\\[\\]]/,"");e.remove(),a.$el.trigger("userform.form.valid",[n])}},o.prototype.addStep=function(t){!t instanceof r||(t.id=this.steps.length,this.steps.push(t))},o.prototype.setCurrentStep=function(t){t instanceof r&&(this.currentStep=t,this.currentStep.show(),this.currentStep.viewed=!0,this.currentStep.$el.addClass("viewed"))},o.prototype.jumpToStep=function(t,e){var r=this.steps[t],n=!1,i=void 0===e||e;if(void 0!==r){if(r.conditionallyHidden())return void(i?this.jumpToStep(t+1):this.jumpToStep(t-1));n=this.$el.valid(),this.currentStep.valid=n,!1===n&&!1===r.viewed||(this.currentStep.hide(),this.setCurrentStep(r),this.$el.trigger("userform.form.changestep",[r.id]))}},o.prototype.nextStep=function(){this.jumpToStep(this.steps.indexOf(this.currentStep)+1,!0)},o.prototype.prevStep=function(){this.jumpToStep(this.steps.indexOf(this.currentStep)-1,!1)},function(){var n=this,i=t(".userform");if(0!==i.length){u.ENABLE_LIVE_VALIDATION=void 0!==i.data("livevalidation"),u.DISPLAY_ERROR_MESSAGES_AT_TOP=void 0!==i.data("toperrors"),!1===u.ENABLE_LIVE_VALIDATION&&t.extend(o.prototype.validationOptions,{onfocusout:!1}),u.DISPLAY_ERROR_MESSAGES_AT_TOP&&t.extend(o.prototype.validationOptions,{invalidHandler:function(t,e){i.trigger("userform.form.error",[e])},onfocusout:!1}),t(".userform-progress, .step-navigation").attr("aria-hidden",!1).show(),t.extend(r.prototype,l),t.extend(e.prototype,l),a=new o(i),u.HIDE_FIELD_LABELS&&i.find("label.left").each(function(){var e=t(n);t('[name="'+e.attr("for")+'"]').attr("placeholder",e.text()),e.remove()}),a.$el.find(".form-step").each(function(t,e){var n=new r(e);a.addStep(n)}),a.setCurrentStep(a.steps[0]),t(document).on("click","input.text[data-showcalendar]",function(){var e=t(n);e.ssDatepicker(),e.data("datepicker")&&e.datepicker("show")}),setInterval(function(){t.ajax({url:"UserDefinedFormController/ping"})},18e4);var d=t("form.userform");void 0!==d.areYouSure&&d.areYouSure({message:s.a._t("UserForms.LEAVE_CONFIRMATION","You have unsaved changes!")})}}()})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(0)},function(t,e){t.exports=i18n},function(t,e){t.exports=jQuery}]);
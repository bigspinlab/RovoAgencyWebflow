(()=>{if(document.getElementById("email-form")){var e=e||[];e.push((function(){$(document).off("submit");var t=document.querySelector("#email-form"),r=document.querySelector("#rovo-newsletter-email"),o=document.querySelector("#rovo-newsletter-checkbox");$("#email-form").submit((function(a){a.preventDefault();var i,c,l="https://webflow.com/api/v1/form/"+$("html").attr("data-wf-site"),n={name:a.currentTarget.getAttribute("data-name"),source:window.location.href,test:e.env(),fields:{},fileUploads:{},dolphin:/pass[\s-_]?(word|code)|secret|login|credentials/i.test($("#email-form").html())};i=$("#email-form"),c=(c=n.fields)||{},i.find(':input:not([type="submit"]):not([type="file"])').each((function(e,t){var r=$(t),o=r.attr("type"),a=r.attr("data-name")||r.attr("name")||"Field "+(e+1),l=r.val();if("checkbox"===o)l=r.is(":checked");else if("radio"===o){if(null===c[a]||"string"==typeof c[a])return;l=i.find('input[name="'+r.attr("name")+'"]:checked').val()||null}"string"==typeof l&&(l=$.trim(l)),c[a]=l})),t.checkValidity()?$.ajax({url:l,data:n,type:"POST",dataType:"json",crossDomain:!0}).done((function(e){var a,i;a=document.querySelector(".rovo-checkbox-field-error"),i=document.querySelector(".rovo-email-field-error"),a&&o.parentElement.classList.remove("rovo-checkbox-field-error"),i&&r.parentElement.classList.remove("rovo-email-field-error"),t.classList.add("form-success"),r.value="Thank you!",setTimeout((function(){t.classList.remove("form-success"),t.reset(),document.querySelector("#rovo-newsletter-checkbox").checked=!0}),3e3)})).fail((function(e){return console.log(e)})):(!r.checkValidity()&&r.parentElement.classList.add("rovo-email-field-error"),!o.checkValidity()&&o.parentElement.classList.add("rovo-checkbox-field-error"))}))}))}})();
//# sourceMappingURL=mainSubmitNewsletterForm01.js.map
(()=>{"use strict";const t=new class{constructor(){this.API_HOST="https://api.appworks-school.tw/api/1.0"}async getProducts(t,e){const s=await fetch(`${this.API_HOST}/products/${t}?paging=${e}`);return await s.json()}async getCampaigns(){const t=await fetch(`${this.API_HOST}/marketing/campaigns`);return await t.json()}async searchProducts(t,e){const s=await fetch(`${this.API_HOST}/products/search?keyword=${t}&paging=${e}`);return await s.json()}async getProduct(t){const e=await fetch(`${this.API_HOST}/products/details?id=${t}`);return await e.json()}async checkout(t){const e=await fetch(`${this.API_HOST}/order/checkout`,{body:JSON.stringify(t),headers:{"content-type":"application/json"},method:"POST"});return await e.json()}async signin(t){const e=await fetch(`${this.API_HOST}/user/signin`,{body:JSON.stringify(t),headers:{"content-type":"application/json"},method:"POST"});return await e.json()}};new class{constructor(t,e){this.model=t,this.view=e,this.view.renderNumber(this.model.number)}}(new class extends class{constructor(){this.cart=new class{constructor(){this.cartItems=JSON.parse(window.localStorage.getItem("cart")||"[]"),this.renderCart(this.cartItems)}static calculateSubtotal(t){return t.reduce(((t,e)=>t+e.qty*e.price),0)}renderCart(t){document.querySelector(".count").textContent=t.length}getItems(){return this.cartItems}setItems(t){this.cartItems=t,this.renderCart(this.cartItems),window.localStorage.setItem("cart",JSON.stringify(this.cartItems))}}}}{constructor(){super(),this.number=this.getNumber()}getNumber(){return new URLSearchParams(window.location.search).get("number")}},new class extends class{constructor(){this.fb=new class{constructor(){window.fbAsyncInit=this.init.bind(this),this.auth=void 0}setup(t){this.getLoginStatusCallback=t,this.loadSdk()}loadSdk(){var t,e,s,i,n;e="script",s="facebook-jssdk",n=(t=document).getElementsByTagName(e)[0],t.getElementById(s)||((i=t.createElement(e)).id=s,i.src="https://connect.facebook.net/zh_TW/sdk.js",n.parentNode.insertBefore(i,n))}init(){window.FB.init({appId:"700590737403665",cookie:!0,xfbml:!0,version:"v3.1"}),window.FB.getLoginStatus((t=>{this.handleLoginStatus(t),"function"==typeof this.getLoginStatusCallback&&(this.auth?this.getProfile().then((t=>{this.getLoginStatusCallback(t)})):window.location.href="/")}))}handleLoginStatus(t){"connected"===t.status&&(this.auth=t.authResponse,this.loginToServer())}handleClickProfile(){this.auth?window.location.href="/profile.html":this.loginToFb()}loginToFb(){window.FB.login((t=>{this.handleLoginStatus(t)}),{scope:"public_profile,email"})}loginToServer(){t.signin({provider:"facebook",access_token:this.auth.accessToken})}getProfile(){return new Promise(((t,e)=>{window.FB.api("/me?fields=id,name,email,picture.height(2048)",(s=>{s.error?e(s.error):t(s)}))}))}},this.tag=this.getTag(),this.inputSearch=this.getElement("input#search"),this.tagMen=this.getElement(".tag-men"),this.tagWomen=this.getElement(".tag-women"),this.tagAccessories=this.getElement(".tag-accessories"),this.profile=this.getElement("#profile"),this.setTag(),this.bindInputSearchKeydown(),this.bindClickProfile(this.fb.handleClickProfile.bind(this.fb))}setTag(){switch(this.tag){case"men":this.tagMen.classList.add("tag--active");break;case"women":this.tagWomen.classList.add("tag--active");break;case"accessories":this.tagAccessories.classList.add("tag--active");break;default:this.getElement("input#search").value=this.tag}}bindInputSearchKeydown(){this.inputSearch.addEventListener("keydown",(t=>{13===t.keyCode&&(window.location.href=`/?tag=${t.currentTarget.value}`)}))}bindClickProfile(t){this.profile.addEventListener("click",(()=>{t()}))}getTag(){return new URLSearchParams(window.location.search).get("tag")}createElement(t,e){const s=document.createElement(t);return e.classList&&s.classList.add(...e.classList),e.attributes&&Object.entries(e.attributes).forEach((([t,e])=>{s.setAttribute(t,e)})),e.styles&&Object.entries(e.styles).forEach((([t,e])=>{s.style[t]=e})),e.children&&s.append(...e.children),e.parent&&e.parent.append(s),s}getElement(t){return document.querySelector(t)}}{constructor(){super(),this.number=this.getElement("#number"),this.fb.setup()}renderNumber(t){this.number.textContent=t}})})();
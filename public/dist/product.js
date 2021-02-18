(()=>{"use strict";const t=new class{constructor(){this.API_HOST="https://api.appworks-school.tw/api/1.0"}async getProducts(t,e){const i=await fetch(`${this.API_HOST}/products/${t}?paging=${e}`);return await i.json()}async getCampaigns(){const t=await fetch(`${this.API_HOST}/marketing/campaigns`);return await t.json()}async searchProducts(t,e){const i=await fetch(`${this.API_HOST}/products/search?keyword=${t}&paging=${e}`);return await i.json()}async getProduct(t){const e=await fetch(`${this.API_HOST}/products/details?id=${t}`);return await e.json()}async checkout(t){const e=await fetch(`${this.API_HOST}/order/checkout`,{body:JSON.stringify(t),headers:{"content-type":"application/json"},method:"POST"});return await e.json()}async signin(t){const e=await fetch(`${this.API_HOST}/user/signin`,{body:JSON.stringify(t),headers:{"content-type":"application/json"},method:"POST"});return await e.json()}};new class{constructor(t,e){this.model=t,this.view=e,this.id=this.getId(),this.getProduct()}getId(){return new URLSearchParams(window.location.search).get("id")}handleClickColorCode(t){this.model.changeColorCode(t),this.onProductVariantChanged(this.model.product,this.model.selectedColorCode,this.model.selectedSize,this.model.quantity)}handleClickSize(t){this.model.changeSize(t),this.onProductVariantChanged(this.model.product,this.model.selectedColorCode,this.model.selectedSize,this.model.quantity)}handleClickIncrement(){this.model.incrementQuantity(),this.onProductVariantChanged(this.model.product,this.model.selectedColorCode,this.model.selectedSize,this.model.quantity)}handleClickDecrement(){this.model.decrementQuantity(),this.onProductVariantChanged(this.model.product,this.model.selectedColorCode,this.model.selectedSize,this.model.quantity)}handleClickAddToCart(){this.model.addToCart()}onProductChanged(t,e,i,s){this.view.renderProductDetail(t),this.view.renderProductVariant(t,e,i,s),this.view.bindClickColorCode(this.handleClickColorCode.bind(this)),this.view.bindClickSize(this.handleClickSize.bind(this)),this.view.bindClickIncrement(this.handleClickIncrement.bind(this)),this.view.bindClickDecrement(this.handleClickDecrement.bind(this)),this.view.bindClickAddToCart(this.handleClickAddToCart.bind(this))}onProductVariantChanged(t,e,i,s){this.view.renderProductVariant(t,e,i,s),this.view.bindClickColorCode(this.handleClickColorCode.bind(this)),this.view.bindClickSize(this.handleClickSize.bind(this))}getProduct(){t.getProduct(this.id).then((({data:t})=>{this.model.setProduct(t),this.onProductChanged(this.model.product,this.model.selectedColorCode,this.model.selectedSize,this.model.quantity)}))}}(new class extends class{constructor(){this.cart=new class{constructor(){this.cartItems=JSON.parse(window.localStorage.getItem("cart")||"[]"),this.renderCart(this.cartItems)}static calculateSubtotal(t){return t.reduce(((t,e)=>t+e.qty*e.price),0)}renderCart(t){document.querySelector(".count").textContent=t.length}getItems(){return this.cartItems}setItems(t){this.cartItems=t,this.renderCart(this.cartItems),window.localStorage.setItem("cart",JSON.stringify(this.cartItems))}}}}{constructor(){super(),this.product=void 0,this.selectedColorCode=void 0,this.selectedSize=void 0,this.quantity=void 0}findFirstValidVariant(t,e){return t.variants.find((t=>(!e||t.color_code===e)&&t.stock>0))}findEqualVariant(t,e){return this.product.variants.find((i=>i.color_code===t&&i.size===e))}setProduct(t){this.product=t;const e=this.findFirstValidVariant(this.product);this.selectedColorCode=e.color_code,this.selectedSize=e.size,this.quantity=1}changeColorCode(t){const e=this.product.colors[t].code;this.selectedColorCode!==e&&(this.selectedColorCode=e,this.selectedSize=this.findFirstValidVariant(this.product,this.selectedColorCode).size,this.quantity=1)}changeSize(t){const e=this.product.sizes[t],i=this.selectedSize!==e,s=0!==this.findEqualVariant(this.selectedColorCode,e).stock;i&&s&&(this.selectedSize=e,this.quantity=1)}incrementQuantity(){this.quantity===this.findEqualVariant(this.selectedColorCode,this.selectedSize).stock||(this.quantity+=1)}decrementQuantity(){1===this.quantity||(this.quantity-=1)}addToCart(){const t=this.cart.getItems(),e=t.findIndex((t=>t.id===this.product.id&&t.color.code===this.selectedColorCode&&t.size===this.selectedSize));e>-1?t[e].qty=this.quantity:t.push({id:this.product.id,name:this.product.title,price:this.product.price,color:this.product.colors.find((t=>t.code===this.selectedColorCode)),size:this.selectedSize,qty:this.quantity,image:this.product.main_image,stock:this.product.variants.find((t=>t.color_code===this.selectedColorCode&&t.size===this.selectedSize)).stock}),this.cart.setItems(t),window.alert("已加入購物車")}},new class extends class{constructor(){this.fb=new class{constructor(){window.fbAsyncInit=this.init.bind(this),this.auth=void 0}setup(t){this.getLoginStatusCallback=t,this.loadSdk()}loadSdk(){var t,e,i,s,o;e="script",i="facebook-jssdk",o=(t=document).getElementsByTagName(e)[0],t.getElementById(i)||((s=t.createElement(e)).id=i,s.src="https://connect.facebook.net/zh_TW/sdk.js",o.parentNode.insertBefore(s,o))}init(){window.FB.init({appId:"700590737403665",cookie:!0,xfbml:!0,version:"v3.1"}),window.FB.getLoginStatus((t=>{this.handleLoginStatus(t),"function"==typeof this.getLoginStatusCallback&&(this.auth?this.getProfile().then((t=>{this.getLoginStatusCallback(t)})):window.location.href="/")}))}handleLoginStatus(t){"connected"===t.status&&(this.auth=t.authResponse,this.loginToServer())}handleClickProfile(){this.auth?window.location.href="/profile.html":this.loginToFb()}loginToFb(){window.FB.login((t=>{this.handleLoginStatus(t)}),{scope:"public_profile,email"})}loginToServer(){t.signin({provider:"facebook",access_token:this.auth.accessToken})}getProfile(){return new Promise(((t,e)=>{window.FB.api("/me?fields=id,name,email,picture.height(2048)",(i=>{i.error?e(i.error):t(i)}))}))}},this.tag=this.getTag(),this.inputSearch=this.getElement("input#search"),this.tagMen=this.getElement(".tag-men"),this.tagWomen=this.getElement(".tag-women"),this.tagAccessories=this.getElement(".tag-accessories"),this.profile=this.getElement("#profile"),this.setTag(),this.bindInputSearchKeydown(),this.bindClickProfile(this.fb.handleClickProfile.bind(this.fb))}setTag(){switch(this.tag){case"men":this.tagMen.classList.add("tag--active");break;case"women":this.tagWomen.classList.add("tag--active");break;case"accessories":this.tagAccessories.classList.add("tag--active");break;default:this.getElement("input#search").value=this.tag}}bindInputSearchKeydown(){this.inputSearch.addEventListener("keydown",(t=>{13===t.keyCode&&(window.location.href=`/?tag=${t.currentTarget.value}`)}))}bindClickProfile(t){this.profile.addEventListener("click",(()=>{t()}))}getTag(){return new URLSearchParams(window.location.search).get("tag")}createElement(t,e){const i=document.createElement(t);return e.classList&&i.classList.add(...e.classList),e.attributes&&Object.entries(e.attributes).forEach((([t,e])=>{i.setAttribute(t,e)})),e.styles&&Object.entries(e.styles).forEach((([t,e])=>{i.style[t]=e})),e.children&&i.append(...e.children),e.parent&&e.parent.append(i),i}getElement(t){return document.querySelector(t)}}{constructor(){super(),this.product=this.getElement("#product"),this.productMainImage=this.getElement(".product__main-image"),this.productTitle=this.getElement(".product__title"),this.productId=this.getElement(".product__id"),this.productPrice=this.getElement(".product__price"),this.productNote=this.getElement(".product__note"),this.productTexture=this.getElement(".product__texture"),this.productDescription=this.getElement(".product__description"),this.productWash=this.getElement(".product__wash"),this.productPlace=this.getElement(".product__place"),this.productStory=this.getElement(".product__story"),this.productColors=this.getElement("#colors"),this.productSizes=this.getElement("#sizes"),this.productQuantity=this.getElement("#quantity"),this.increment=this.getElement("#increment"),this.decrement=this.getElement("#decrement"),this.addToCart=this.getElement("#add-to-cart"),this.productColorList=[],this.productSizeList=[],this.fb.setup()}renderProductDetail(t){this.productMainImage.setAttribute("src",t.main_image),this.productTitle.textContent=t.title,this.productId.textContent=t.id,this.productPrice.textContent=`TWD.${t.price}`,this.productNote.textContent=t.note,this.productTexture.textContent=t.texture,this.productDescription.textContent=t.description,this.productWash.textContent=`清洗：${t.wash}`,this.productPlace.textContent=`產地：${t.place}`,this.productStory.textContent=t.story,t.images.forEach((t=>{this.createElement("img",{classList:["product__image"],attributes:{src:t},parent:this.product})}))}renderProductColors(t,e){this.productColors.innerHTML="",this.colorList=t.colors.map((t=>{const i=["product__color"];return e===t.code&&i.push("product__color--selected"),this.createElement("div",{classList:i,styles:{backgroundColor:`#${t.code}`},parent:this.productColors})}))}renderProductSizes(t,e,i){this.productSizes.innerHTML="",this.sizeList=t.sizes.map((s=>{const o=i===s,r=0===t.variants.find((t=>t.color_code===e&&t.size===s)).stock,n=["product__size"];return o&&n.push("product__size--selected"),r&&n.push("product__size--disabled"),this.createElement("div",{classList:n,children:[s],parent:this.productSizes})}))}renderProductQuantity(t){this.productQuantity.innerHTML="",this.productQuantity.textContent=t}renderProductVariant(t,e,i,s){this.renderProductColors(t,e),this.renderProductSizes(t,e,i),this.renderProductQuantity(s)}bindClickColorCode(t){this.colorList.forEach(((e,i)=>{e.addEventListener("click",(()=>{t(i)}))}))}bindClickSize(t){this.sizeList.forEach(((e,i)=>{e.addEventListener("click",(()=>{t(i)}))}))}bindClickIncrement(t){this.increment.addEventListener("click",(()=>{t()}))}bindClickDecrement(t){this.decrement.addEventListener("click",(()=>{t()}))}bindClickAddToCart(t){this.addToCart.addEventListener("click",(()=>{t()}))}})})();
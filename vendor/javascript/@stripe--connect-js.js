/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
const e={"account-onboarding":{setFullTermsOfServiceUrl:e=>{},setRecipientTermsOfServiceUrl:e=>{},setPrivacyPolicyUrl:e=>{},setSkipTermsOfServiceCollection:e=>{},setCollectionOptions:e=>{},setOnExit:e=>{}},"account-management":{setCollectionOptions:e=>{}},"notification-banner":{setCollectionOptions:e=>{}},"payment-details":{setPayment:e=>{},setOnClose:e=>{}}};const n={"account-onboarding":"stripe-connect-account-onboarding",payments:"stripe-connect-payments","payment-details":"stripe-connect-payment-details",payouts:"stripe-connect-payouts","payouts-list":"stripe-connect-payouts-list",balances:"stripe-connect-balances","account-management":"stripe-connect-account-management","notification-banner":"stripe-connect-notification-banner",documents:"stripe-connect-documents"};const t="loadConnect was called but an existing Connect.js script already exists in the document; existing script parameters will be used";const o="https://connect-js.stripe.com/v1.0/connect.js";const findScript=()=>document.querySelectorAll(`script[src="${o}"]`)[0]||null;const injectScript=()=>{const e=document.createElement("script");e.src="https://connect-js.stripe.com/v1.0/connect.js";const n=document.head;if(!n)throw new Error("Expected document.head not to be null. Connect.js requires a <head> element.");document.head.appendChild(e);return e};let c=null;const loadScript=()=>{if(c!==null)return c;c=new Promise(((e,n)=>{if(typeof window!=="undefined"){window.StripeConnect&&console.warn(t);if(window.StripeConnect){const n=createWrapper(window.StripeConnect);e(n)}else try{let o=findScript();o?console.warn(t):o||(o=injectScript());o.addEventListener("load",(()=>{if(window.StripeConnect){const n=createWrapper(window.StripeConnect);e(n)}else n(new Error("Connect.js did not load the necessary objects"))}));o.addEventListener("error",(()=>{n(new Error("Failed to load Connect.js"))}))}catch(e){n(e)}}else n("ConnectJS won't load when rendering code in the server - it can only be loaded on a browser. This error is expected when loading ConnectJS in SSR environments, like NextJS. It will have no impact in the UI, however if you wish to avoid it, you can switch to the `pure` version of the connect.js loader: https://github.com/stripe/connect-js#importing-loadconnect-without-side-effects.")}));return c};const hasCustomMethod=n=>n in e;const initStripeConnect=(t,o)=>{const c=t.then((e=>e.initialize(o)));return{create:t=>{let o=n[t];o||(o=t);const s=document.createElement(o);if(hasCustomMethod(t)){const n=e[t];for(const e in n)s[e]=function(n){c.then((()=>{this[`${e}InternalOnly`](n)}))}}c.then((e=>{if(!s.isConnected&&!s.setConnector){const e=s.style.display;s.style.display="none";document.body.appendChild(s);document.body.removeChild(s);s.style.display=e}s.setConnector(e.connect)}));return s},update:e=>{c.then((n=>{n.update(e)}))},debugInstance:()=>c,logout:()=>c.then((e=>e.logout()))}};const createWrapper=e=>{window.StripeConnect=window.StripeConnect||{};window.StripeConnect.optimizedLoading=true;const n={initialize:n=>{var t;const o=(t=n.metaOptions)!==null&&t!==void 0?t:{};const c=e.init(Object.assign(Object.assign({},n),{metaOptions:Object.assign(Object.assign({},o),{sdk:true,sdkOptions:{sdkVersion:"3.3.5"}})}));return c}};return n};const s=Promise.resolve().then((()=>loadScript()));let i=false;s.catch((e=>{i||console.warn(e)}));const loadConnectAndInitialize=e=>{i=true;return initStripeConnect(s,e)};export{loadConnectAndInitialize};


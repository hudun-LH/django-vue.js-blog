!function(t){function n(e){if(r[e])return r[e].exports;var s=r[e]={exports:{},id:e,loaded:!1};return t[e].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){r(1),r(2),t.exports=r(3)},function(t,n){function r(t){return f(e(p(t),t.length*h))}function e(t,n){t[n>>5]|=128<<n%32,t[(n+64>>>9<<4)+14]=n;for(var r=1732584193,e=-271733879,s=-1732584194,l=271733878,p=0;p<t.length;p+=16){var f=r,d=e,v=s,g=l;r=o(r,e,s,l,t[p+0],7,-680876936),l=o(l,r,e,s,t[p+1],12,-389564586),s=o(s,l,r,e,t[p+2],17,606105819),e=o(e,s,l,r,t[p+3],22,-1044525330),r=o(r,e,s,l,t[p+4],7,-176418897),l=o(l,r,e,s,t[p+5],12,1200080426),s=o(s,l,r,e,t[p+6],17,-1473231341),e=o(e,s,l,r,t[p+7],22,-45705983),r=o(r,e,s,l,t[p+8],7,1770035416),l=o(l,r,e,s,t[p+9],12,-1958414417),s=o(s,l,r,e,t[p+10],17,-42063),e=o(e,s,l,r,t[p+11],22,-1990404162),r=o(r,e,s,l,t[p+12],7,1804603682),l=o(l,r,e,s,t[p+13],12,-40341101),s=o(s,l,r,e,t[p+14],17,-1502002290),e=o(e,s,l,r,t[p+15],22,1236535329),r=a(r,e,s,l,t[p+1],5,-165796510),l=a(l,r,e,s,t[p+6],9,-1069501632),s=a(s,l,r,e,t[p+11],14,643717713),e=a(e,s,l,r,t[p+0],20,-373897302),r=a(r,e,s,l,t[p+5],5,-701558691),l=a(l,r,e,s,t[p+10],9,38016083),s=a(s,l,r,e,t[p+15],14,-660478335),e=a(e,s,l,r,t[p+4],20,-405537848),r=a(r,e,s,l,t[p+9],5,568446438),l=a(l,r,e,s,t[p+14],9,-1019803690),s=a(s,l,r,e,t[p+3],14,-187363961),e=a(e,s,l,r,t[p+8],20,1163531501),r=a(r,e,s,l,t[p+13],5,-1444681467),l=a(l,r,e,s,t[p+2],9,-51403784),s=a(s,l,r,e,t[p+7],14,1735328473),e=a(e,s,l,r,t[p+12],20,-1926607734),r=i(r,e,s,l,t[p+5],4,-378558),l=i(l,r,e,s,t[p+8],11,-2022574463),s=i(s,l,r,e,t[p+11],16,1839030562),e=i(e,s,l,r,t[p+14],23,-35309556),r=i(r,e,s,l,t[p+1],4,-1530992060),l=i(l,r,e,s,t[p+4],11,1272893353),s=i(s,l,r,e,t[p+7],16,-155497632),e=i(e,s,l,r,t[p+10],23,-1094730640),r=i(r,e,s,l,t[p+13],4,681279174),l=i(l,r,e,s,t[p+0],11,-358537222),s=i(s,l,r,e,t[p+3],16,-722521979),e=i(e,s,l,r,t[p+6],23,76029189),r=i(r,e,s,l,t[p+9],4,-640364487),l=i(l,r,e,s,t[p+12],11,-421815835),s=i(s,l,r,e,t[p+15],16,530742520),e=i(e,s,l,r,t[p+2],23,-995338651),r=u(r,e,s,l,t[p+0],6,-198630844),l=u(l,r,e,s,t[p+7],10,1126891415),s=u(s,l,r,e,t[p+14],15,-1416354905),e=u(e,s,l,r,t[p+5],21,-57434055),r=u(r,e,s,l,t[p+12],6,1700485571),l=u(l,r,e,s,t[p+3],10,-1894986606),s=u(s,l,r,e,t[p+10],15,-1051523),e=u(e,s,l,r,t[p+1],21,-2054922799),r=u(r,e,s,l,t[p+8],6,1873313359),l=u(l,r,e,s,t[p+15],10,-30611744),s=u(s,l,r,e,t[p+6],15,-1560198380),e=u(e,s,l,r,t[p+13],21,1309151649),r=u(r,e,s,l,t[p+4],6,-145523070),l=u(l,r,e,s,t[p+11],10,-1120210379),s=u(s,l,r,e,t[p+2],15,718787259),e=u(e,s,l,r,t[p+9],21,-343485551),r=c(r,f),e=c(e,d),s=c(s,v),l=c(l,g)}return Array(r,e,s,l)}function s(t,n,r,e,s,o){return c(l(c(c(n,t),c(e,o)),s),r)}function o(t,n,r,e,o,a,i){return s(n&r|~n&e,t,n,o,a,i)}function a(t,n,r,e,o,a,i){return s(n&e|r&~e,t,n,o,a,i)}function i(t,n,r,e,o,a,i){return s(n^r^e,t,n,o,a,i)}function u(t,n,r,e,o,a,i){return s(r^(n|~e),t,n,o,a,i)}function c(t,n){var r=(65535&t)+(65535&n),e=(t>>16)+(n>>16)+(r>>16);return e<<16|65535&r}function l(t,n){return t<<n|t>>>32-n}function p(t){for(var n=Array(),r=(1<<h)-1,e=0;e<t.length*h;e+=h)n[e>>5]|=(t.charCodeAt(e/h)&r)<<e%32;return n}function f(t){for(var n=g?"0123456789ABCDEF":"0123456789abcdef",r="",e=0;e<4*t.length;e++)r+=n.charAt(t[e>>2]>>e%4*8+4&15)+n.charAt(t[e>>2]>>e%4*8&15);return r}function d(t){var n="LFBSKoYzlspx7lueZvnOQiJmanuhjs163Ef9NWCvkgb5UeItyAbcMi4aqDy28twG",e=r(t+n);return e}var v="https://"+window.location.host+"/",g=0,h=8;window.generateUrl=function(t){var n=(new Date).getTime().toString().substring(0,10),r=d(n);return v+t+"?timestamp="+n+"&sign="+r},window.generateUrlWithToken=function(t,n){var r=(new Date).getTime().toString().substring(0,10),e=d(r);return v+t+"?timestamp="+r+"&sign="+e+"&token="+n}},function(t,n){jQuery(function(t){t(document).ready(function(){var n=[],r=[],e=0,s="",o="",a="",i=null,u=0,c=0,l=0,p=0;t(window).scroll(function(n){var r=t(this).scrollTop();s=r>e?"down":"up",e=r}),t.fn.stickUp=function(n){t(this).addClass("stuckMenu");var e=0;if(null!=n){for(var s in n.parts)n.parts.hasOwnProperty(s)&&(r[e]=n.parts[e],e++);0==e&&console.log("error:needs arguments"),o=n.itemClass,a=n.itemHover,null!=n.topMargin?"auto"==n.topMargin?p=parseInt(t(".stuckMenu").css("margin-top")):isNaN(n.topMargin)&&n.topMargin.search("px")>0?p=parseInt(n.topMargin.replace("px","")):isNaN(parseInt(n.topMargin))?(console.log("incorrect argument, ignored."),p=0):p=parseInt(n.topMargin):p=0,i=t("."+o).size()}u=parseInt(t(this).height()),c=parseInt(t(this).css("margin-bottom")),l=parseInt(t(this).next().closest("div").css("margin-top")),vartop=parseInt(t(this).offset().top)},t(document).on("scroll",function(){function e(e){contentView=.4*t("#"+r[e]).height(),testView=n[e]-contentView,varscroll>testView?(t("."+o).removeClass(a),t("."+o+":eq("+e+")").addClass(a)):varscroll<50&&(t("."+o).removeClass(a),t("."+o+":eq(0)").addClass(a))}if(varscroll=parseInt(t(document).scrollTop()),null!=i)for(var f=0;f<i;f++)n[f]=t("#"+r[f]).offset().top,"down"==s&&varscroll>n[f]-50&&varscroll<n[f]+50&&(t("."+o).removeClass(a),t("."+o+":eq("+f+")").addClass(a)),"up"==s&&e(f);vartop<varscroll+p&&(t(".stuckMenu").addClass("isStuck"),t(".stuckMenu").next().closest("div").css({"margin-top":u+c+l+"px"},10),t(".stuckMenu").css("position","fixed"),t(".isStuck").css({top:"0px"},10,function(){})),varscroll+p<vartop&&(t(".stuckMenu").removeClass("isStuck"),t(".stuckMenu").next().closest("div").css({"margin-top":l+"px"},10),t(".stuckMenu").css("position","relative"))})})})},function(t,n){jQuery(function(t){t(document).ready(function(){t("#myNav").stickUp()})}),$(".button-collapse").sideNav(),Vue.config.delimiters=["${","}}"];new Vue({el:"#vBase",data:{},methods:{getData:function(){var t=generateUrl("api/v1/articles")+"&query=latest";this.$http.get(t,function(t){1==t.status&&this.$set("latest",t.body.article_list)}),t=generateUrl("api/v1/articles")+"&query=popular",this.$http.get(t,function(t){1==t.status&&this.$set("popular",t.body.article_list)})}},ready:function(){this.getData()},computed:{noLatest:function(){return null==this.latest},noPopular:function(){return null==this.popular}}})}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{597:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var o,i,r=0,c=0,l=0,a=0,u=0,s=0,f="object"==typeof performance&&performance.now?performance:Date,w="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function _(){return u||(w(p),u=f.now()+s)}function p(){u=0}function m(){this._call=this._time=this._next=null}function h(t,n,e){var o=new m;return o.restart(t,n,e),o}function d(){u=(a=f.now())+s,r=c=0;try{!function(){_(),++r;for(var t,n=o;n;)(t=u-n._time)>=0&&n._call.call(null,t),n=n._next;--r}()}finally{r=0,function(){var t,n,e=o,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:o=n);i=t,y(r)}(),u=0}}function x(){var t=f.now(),n=t-a;n>1e3&&(s-=n,a=t)}function y(t){r||(c&&(c=clearTimeout(c)),t-u>24?(t<1/0&&(c=setTimeout(d,t-f.now()-s)),l&&(l=clearInterval(l))):(l||(a=f.now(),l=setInterval(x,1e3)),r=1,w(d)))}m.prototype=h.prototype={constructor:m,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?_():+e)+(null==n?0:+n),this._next||i===this||(i?i._next=this:o=this,i=this),this._call=t,this._time=e,y()},stop:function(){this._call&&(this._call=null,this._time=1/0,y())}}}}]);
var le=Object.defineProperty,ue=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var N=(h,o,c)=>o in h?le(h,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):h[o]=c,j=(h,o)=>{for(var c in o||(o={}))_e.call(o,c)&&N(h,c,o[c]);if(S)for(var c of S(o))be.call(o,c)&&N(h,c,o[c]);return h},q=(h,o)=>ue(h,ve(o));import"./app-BdQz8fMo.js";import{c as me,g as ge}from"./jsQR-CSv-k2tR.js";var I={exports:{}};(function(h,o){(function(c,_){h.exports=_()})(me,function(){var c=function(){},_=Object.prototype.hasOwnProperty,p=Array.prototype.slice;function O(t,e){var i;return typeof Object.create=="function"?i=Object.create(t):(c.prototype=t,i=new c,c.prototype=null),e&&E(!0,i,e),i}function D(t,e,i,r){var a=this;return typeof t!="string"&&(r=i,i=e,e=t,t=null),typeof e!="function"&&(r=i,i=e,e=function(){return a.apply(this,arguments)}),E(!1,e,a,r),e.prototype=O(a.prototype,i),e.prototype.constructor=e,e.class_=t||a.class_,e.super_=a,e}function E(t,e,i){i=p.call(arguments,2);for(var r,a,x=0,s=i.length;x<s;x++){a=i[x];for(r in a)(!t||_.call(a,r))&&(e[r]=a[r])}}var P=D;function B(){}B.class_="Nevis",B.super_=Object,B.extend=P;var U=B,l=U,V=l.extend(function(t,e,i){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=!!i},{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,i=e.padding||0,r=Math.floor((e.size-i*2)/t.width);return Math.max(1,r)},getOffset:function(t){var e=this.qrious,i=e.padding;if(i!=null)return i;var r=this.getModuleSize(t),a=Math.floor((e.size-r*t.width)/2);return Math.max(0,a)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),C=V,G=C.extend({draw:function(t){var e,i,r=this.qrious,a=this.getModuleSize(t),x=this.getOffset(t),s=this.element.getContext("2d");for(s.fillStyle=r.foreground,s.globalAlpha=r.foregroundAlpha,e=0;e<t.width;e++)for(i=0;i<t.width;i++)t.buffer[i*t.width+e]&&s.fillRect(a*e+x,a*i+x,a,a)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),i=t.size;e.lineWidth=1,e.clearRect(0,0,i,i),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,i,i)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),F=G,K=l.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),Q=K,X=l.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),k=X,$=l.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),m=$,H=l.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),W=H,d=l.extend(function(t){var e,i,r,a,x,s=t.value.length;for(this._badness=[],this._level=k.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,r=(this._level-1)*4+(this._version-1)*16,a=k.BLOCKS[r++],x=k.BLOCKS[r++],e=k.BLOCKS[r++],i=k.BLOCKS[r],r=e*(a+x)+x-3+(this._version<=9),!(s<=r)););this._dataBlock=e,this._eccBlock=i,this._neccBlock1=a,this._neccBlock2=x;var n=this.width=17+4*this._version;this.buffer=d._createArray(n*n),this._ecc=d._createArray(e+(e+i)*(a+x)+x),this._mask=d._createArray((n*(n+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+n*(n-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(s),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(t,e){var i,r=this.buffer,a=this.width;for(r[t+a*e]=1,i=-2;i<2;i++)r[t+i+a*(e-2)]=1,r[t-2+a*(e+i+1)]=1,r[t+2+a*(e+i)]=1,r[t+i+1+a*(e+2)]=1;for(i=0;i<2;i++)this._setMask(t-1,e+i),this._setMask(t+1,e-i),this._setMask(t-i,e-1),this._setMask(t+i,e+1)},_appendData:function(t,e,i,r){var a,x,s,n=this._polynomial,f=this._stringBuffer;for(x=0;x<r;x++)f[i+x]=0;for(x=0;x<e;x++){if(a=m.LOG[f[t+x]^f[i]],a!==255)for(s=1;s<r;s++)f[i+s-1]=f[i+s]^m.EXPONENT[d._modN(a+n[r-s])];else for(s=i;s<i+r;s++)f[s]=f[s+1];f[i+r-1]=a===255?0:m.EXPONENT[d._modN(a+n[0])]}},_appendEccToData:function(){var t,e=0,i=this._dataBlock,r=this._calculateMaxLength(),a=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,i,r,a),e+=i,r+=a;for(t=0;t<this._neccBlock2;t++)this._appendData(e,i+1,r,a),e+=i+1,r+=a},_applyMask:function(t){var e,i,r,a,x=this.buffer,s=this.width;switch(t){case 0:for(a=0;a<s;a++)for(r=0;r<s;r++)!(r+a&1)&&!this._isMasked(r,a)&&(x[r+a*s]^=1);break;case 1:for(a=0;a<s;a++)for(r=0;r<s;r++)!(a&1)&&!this._isMasked(r,a)&&(x[r+a*s]^=1);break;case 2:for(a=0;a<s;a++)for(e=0,r=0;r<s;r++,e++)e===3&&(e=0),!e&&!this._isMasked(r,a)&&(x[r+a*s]^=1);break;case 3:for(i=0,a=0;a<s;a++,i++)for(i===3&&(i=0),e=i,r=0;r<s;r++,e++)e===3&&(e=0),!e&&!this._isMasked(r,a)&&(x[r+a*s]^=1);break;case 4:for(a=0;a<s;a++)for(e=0,i=a>>1&1,r=0;r<s;r++,e++)e===3&&(e=0,i=!i),!i&&!this._isMasked(r,a)&&(x[r+a*s]^=1);break;case 5:for(i=0,a=0;a<s;a++,i++)for(i===3&&(i=0),e=0,r=0;r<s;r++,e++)e===3&&(e=0),!((r&a&1)+!(!e|!i))&&!this._isMasked(r,a)&&(x[r+a*s]^=1);break;case 6:for(i=0,a=0;a<s;a++,i++)for(i===3&&(i=0),e=0,r=0;r<s;r++,e++)e===3&&(e=0),!((r&a&1)+(e&&e===i)&1)&&!this._isMasked(r,a)&&(x[r+a*s]^=1);break;case 7:for(i=0,a=0;a<s;a++,i++)for(i===3&&(i=0),e=0,r=0;r<s;r++,e++)e===3&&(e=0),!((e&&e===i)+(r+a&1)&1)&&!this._isMasked(r,a)&&(x[r+a*s]^=1);break}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,i=this._eccBlock,r=this._polynomial;for(r[0]=1,t=0;t<i;t++){for(r[t+1]=1,e=t;e>0;e--)r[e]=r[e]?r[e-1]^m.EXPONENT[d._modN(m.LOG[r[e]]+t)]:r[e-1];r[0]=m.EXPONENT[d._modN(m.LOG[r[0]]+t)]}for(t=0;t<=i;t++)r[t]=m.LOG[r[t]]},_checkBadness:function(){var t,e,i,r,a,x=0,s=this._badness,n=this.buffer,f=this.width;for(a=0;a<f-1;a++)for(r=0;r<f-1;r++)(n[r+f*a]&&n[r+1+f*a]&&n[r+f*(a+1)]&&n[r+1+f*(a+1)]||!(n[r+f*a]||n[r+1+f*a]||n[r+f*(a+1)]||n[r+1+f*(a+1)]))&&(x+=d.N2);var v=0;for(a=0;a<f;a++){for(i=0,s[0]=0,t=0,r=0;r<f;r++)e=n[r+f*a],t===e?s[i]++:s[++i]=1,t=e,v+=t?1:-1;x+=this._getBadness(i)}v<0&&(v=-v);var R=0,w=v;for(w+=w<<2,w<<=1;w>f*f;)w-=f*f,R++;for(x+=R*d.N4,r=0;r<f;r++){for(i=0,s[0]=0,t=0,a=0;a<f;a++)e=n[r+f*a],t===e?s[i]++:s[++i]=1,t=e;x+=this._getBadness(i)}return x},_convertBitStream:function(t){var e,i,r=this._ecc,a=this._version;for(i=0;i<t;i++)r[i]=this._value.charCodeAt(i);var x=this._stringBuffer=r.slice(),s=this._calculateMaxLength();t>=s-2&&(t=s-2,a>9&&t--);var n=t;if(a>9){for(x[n+2]=0,x[n+3]=0;n--;)e=x[n],x[n+3]|=255&e<<4,x[n+2]=e>>4;x[2]|=255&t<<4,x[1]=t>>4,x[0]=64|t>>12}else{for(x[n+1]=0,x[n+2]=0;n--;)e=x[n],x[n+2]|=255&e<<4,x[n+1]=e>>4;x[1]|=255&t<<4,x[0]=64|t>>4}for(n=t+3-(a<10);n<s;)x[n++]=236,x[n++]=17},_getBadness:function(t){var e,i=0,r=this._badness;for(e=0;e<=t;e++)r[e]>=5&&(i+=d.N1+r[e]-5);for(e=3;e<t-1;e+=2)r[e-2]===r[e+2]&&r[e+2]===r[e-1]&&r[e-1]===r[e+1]&&r[e-1]*3===r[e]&&(r[e-3]===0||e+3>t||r[e-3]*3>=r[e]*4||r[e+3]*3>=r[e]*4)&&(i+=d.N3);return i},_finish:function(){this._stringBuffer=this.buffer.slice();var t,e,i=0,r=3e4;for(e=0;e<8&&(this._applyMask(e),t=this._checkBadness(),t<r&&(r=t,i=e),i!==7);e++)this.buffer=this._stringBuffer.slice();i!==e&&this._applyMask(i),r=k.FINAL_FORMAT[i+(this._level-1<<3)];var a=this.buffer,x=this.width;for(e=0;e<8;e++,r>>=1)r&1&&(a[x-1-e+x*8]=1,e<6?a[8+x*e]=1:a[8+x*(e+1)]=1);for(e=0;e<7;e++,r>>=1)r&1&&(a[8+x*(x-7+e)]=1,e?a[6-e+x*8]=1:a[7+x*8]=1)},_interleaveBlocks:function(){var t,e,i=this._dataBlock,r=this._ecc,a=this._eccBlock,x=0,s=this._calculateMaxLength(),n=this._neccBlock1,f=this._neccBlock2,v=this._stringBuffer;for(t=0;t<i;t++){for(e=0;e<n;e++)r[x++]=v[t+e*i];for(e=0;e<f;e++)r[x++]=v[n*i+t+e*(i+1)]}for(e=0;e<f;e++)r[x++]=v[n*i+t+e*(i+1)];for(t=0;t<a;t++)for(e=0;e<n+f;e++)r[x++]=v[s+t+e*a];this._stringBuffer=r},_insertAlignments:function(){var t,e,i,r=this._version,a=this.width;if(r>1)for(t=Q.BLOCK[r],i=a-7;;){for(e=a-7;e>t-3&&(this._addAlignment(e,i),!(e<t));)e-=t;if(i<=t+9)break;i-=t,this._addAlignment(6,i),this._addAlignment(i,6)}},_insertFinders:function(){var t,e,i,r,a=this.buffer,x=this.width;for(t=0;t<3;t++){for(e=0,r=0,t===1&&(e=x-7),t===2&&(r=x-7),a[r+3+x*(e+3)]=1,i=0;i<6;i++)a[r+i+x*e]=1,a[r+x*(e+i+1)]=1,a[r+6+x*(e+i)]=1,a[r+i+1+x*(e+6)]=1;for(i=1;i<5;i++)this._setMask(r+i,e+1),this._setMask(r+1,e+i+1),this._setMask(r+5,e+i),this._setMask(r+i+1,e+5);for(i=2;i<4;i++)a[r+i+x*(e+2)]=1,a[r+2+x*(e+i+1)]=1,a[r+4+x*(e+i)]=1,a[r+i+1+x*(e+4)]=1}},_insertTimingGap:function(){var t,e,i=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(i-8,e),this._setMask(7,e+i-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+i-8,7),this._setMask(t,i-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,i=this.width;for(t=0;t<i-14;t++)t&1?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+i*6]=1,e[6+i*(8+t)]=1)},_insertVersion:function(){var t,e,i,r,a=this.buffer,x=this._version,s=this.width;if(x>6)for(t=W.BLOCK[x-7],e=17,i=0;i<6;i++)for(r=0;r<3;r++,e--)1&(e>11?x>>e-12:t>>e)?(a[5-i+s*(2-r+s-11)]=1,a[2-r+s-11+s*(5-i)]=1):(this._setMask(5-i,2-r+s-11),this._setMask(2-r+s-11,5-i))},_isMasked:function(t,e){var i=d._getMaskBit(t,e);return this._mask[i]===1},_pack:function(){var t,e,i,r=1,a=1,x=this.width,s=x-1,n=x-1,f=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<f;e++)for(t=this._stringBuffer[e],i=0;i<8;i++,t<<=1){128&t&&(this.buffer[s+x*n]=1);do a?s--:(s++,r?n!==0?n--:(s-=2,r=!r,s===6&&(s--,n=9)):n!==x-1?n++:(s-=2,r=!r,s===6&&(s--,n-=8))),a=!a;while(this._isMasked(s,n))}},_reverseMask:function(){var t,e,i=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+i-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+i-7)},_setMask:function(t,e){var i=d._getMaskBit(t,e);this._mask[i]=1},_syncMask:function(){var t,e,i=this.width;for(e=0;e<i;e++)for(t=0;t<=e;t++)this.buffer[t+i*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,i=[];for(e=0;e<t;e++)i[e]=0;return i},_getMaskBit:function(t,e){var i;return t>e&&(i=t,t=e,e=i),i=e,i+=e*e,i>>=1,i+=t,i},_modN:function(t){for(;t>=255;)t-=255,t=(t>>8)+(t&255);return t},N1:3,N2:3,N3:40,N4:10}),J=d,Y=C.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),Z=Y,ee=l.extend(function(t,e,i,r){this.name=t,this.modifiable=!!e,this.defaultValue=i,this._valueTransformer=r},{transform:function(t){var e=this._valueTransformer;return typeof e=="function"?e(t,this):t}}),u=ee,te=l.extend(null,{abs:function(t){return t!=null?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return t!=null?t.toUpperCase():null}}),b=te,g=l.extend(function(t){this.options={},t.forEach(function(e){this.options[e.name]=e},this)},{exists:function(t){return this.options[t]!=null},get:function(t,e){return g._get(this.options[t],e)},getAll:function(t){var e,i=this.options,r={};for(e in i)b.hasOwn(i,e)&&(r[e]=g._get(i[e],t));return r},init:function(t,e,i){typeof i!="function"&&(i=b.noop);var r,a;for(r in this.options)b.hasOwn(this.options,r)&&(a=this.options[r],g._set(a,a.defaultValue,e),g._createAccessor(a,e,i));this._setAll(t,e,!0)},set:function(t,e,i){return this._set(t,e,i)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,i,r){var a=this.options[t];if(!a)throw new Error("Invalid option: "+t);if(!a.modifiable&&!r)throw new Error("Option cannot be modified: "+t);return g._set(a,e,i)},_setAll:function(t,e,i){if(!t)return!1;var r,a=!1;for(r in t)b.hasOwn(t,r)&&this._set(r,t[r],e,i)&&(a=!0);return a}},{_createAccessor:function(t,e,i){var r={get:function(){return g._get(t,e)}};t.modifiable&&(r.set=function(a){g._set(t,a,e)&&i(a,t)}),Object.defineProperty(e,t.name,r)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,i){var r="_"+t.name,a=i[r],x=t.transform(e!=null?e:t.defaultValue);return i[r]=x,x!==a}}),ie=g,re=l.extend(function(){this._services={}},{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),ae=re,M=new ie([new u("background",!0,"white"),new u("backgroundAlpha",!0,1,b.abs),new u("element"),new u("foreground",!0,"black"),new u("foregroundAlpha",!0,1,b.abs),new u("level",!0,"L",b.toUpperCase),new u("mime",!0,"image/png"),new u("padding",!0,null,b.abs),new u("size",!0,100,b.abs),new u("value",!0,"")]),y=new ae,A=l.extend(function(t){M.init(t,this,this.update.bind(this));var e=M.get("element",this),i=y.getService("element"),r=e&&i.isCanvas(e)?e:i.createCanvas(),a=e&&i.isImage(e)?e:i.createImage();this._canvasRenderer=new F(this,r,!0),this._imageRenderer=new Z(this,a,a===e),this.update()},{get:function(){return M.getAll(this)},set:function(t){M.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new J({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){y.setService(t.getName(),t)}});Object.defineProperties(A.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var xe=A,L=xe,se=l.extend({getName:function(){}}),ne=se,fe=ne.extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}),oe=fe,ce=oe.extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}}),he=ce;L.use(new he);var de=L;return de})})(I);var ke=I.exports;const T=ge(ke),we=T;window.jsQR=T;class z{constructor(o,c={}){let _=new Image;_.width=o.width,_.height=o.height,this.canvas=o,this.imgObj=_,this.ctx=o.getContext("2d"),this.opciones=c}aQr(o=""){return this.getCodificador().value=o,this}aTexto(){let o=this.imgObj;return new Uint8ClampedArray(this.ctx.getImageData(0,0,o.width,o.height))}desdeImagen(o){let c=this.imgObj;return c.src=URL.createObjectURL(o),c.onload=()=>{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(c,0,0)},this}getCodificador(){return this.qr||(this.qr=new we(q(j({},this.opciones),{element:this.canvas,value:""}))),this.qr}}window.Convertidor=z;window.onload=()=>{let h=document.getElementById("canvas"),c=new z(h).aQr("Convertir de texto a QR").getCodificador(),_=document.getElementById("descargar"),p=document.getElementById("formulario");p.addEventListener("submit",O=>{O.preventDefault(),c.value=p.querySelector("#contenido").value,console.log(c.value),_.href=c.toDataURL()})};

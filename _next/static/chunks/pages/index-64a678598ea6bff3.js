(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(o,e,n){"use strict";n.r(e);var t=n(5893),l=n(7294),c=n(2729),a=n.n(c);let i=()=>{let[o,e]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),n=JSON.parse(JSON.stringify(o)),[c,i]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),r=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],s=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],f=(e,n)=>{let t=0;for(let l of s)void 0!==r[e+l[0]]&&void 0!==r[n+l[1]]&&1===c[e+l[0]][n+l[1]]&&0===o[e+l[0]][n+l[1]]&&-1===r[e+l[0]][n+l[1]]?t++:void 0!==r[e+l[0]]&&void 0!==r[n+l[1]]&&1===c[e+l[0]][n+l[1]]&&1===o[e+l[0]][n+l[1]]&&11===r[e+l[0]][n+l[1]]&&t++;if(0===t)for(let o of s)r[e][n]=0,void 0!==r[e+o[0]]&&void 0!==r[n+o[1]]&&-1===r[e+o[0]][n+o[1]]&&11!==r[e][n]&&f(e+o[0],n+o[1]);else r[e][n]=t};for(let e=0;e<9;e++)for(let n=0;n<9;n++)if(1===o[e][n]){if(1===c[e][n]){for(let o=0;o<9;o++)for(let e=0;e<9;e++)1===c[o][e]&&(r[o][e]=11);continue}f(e,n)}console.log("board"),console.table(r),console.log("bombMap"),console.table(c),console.log("userInputs"),console.table(o);let _=0;for(let o=0;o<9;o++)for(let e=0;e<9;e++)1===c[o][e]&&_++;let d=(o,t)=>{if(0===_){let e=0;for(;e<10;){let n=Math.floor(Math.random()*c.length),l=Math.floor(Math.random()*c[0].length);if(1!==c[l][n]&&"".concat(l).concat(n)!=="".concat(o).concat(t)){let o=[...c];o[l][n]=1,e++,i(o)}}console.log("一クリ目",o,t)}n[o][t]=1,e(n)};return(0,t.jsx)("div",{className:a().container,children:(0,t.jsx)("div",{className:a().board,children:r.map((o,e)=>o.map((o,n)=>(0,t.jsx)("div",{className:-1===o?a().stone:a().number,style:o>=0?{backgroundPosition:"".concat(-((o-1)*75.86),"px 0")}:{},onClick:()=>d(e,n)},"".concat(e,"-").concat(n))))})})};e.default=i},2729:function(o){o.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",number:"index_number__l0yF_",stone:"index_stone__oeDmm"}}},function(o){o.O(0,[774,888,179],function(){return o(o.s=8312)}),_N_E=o.O()}]);
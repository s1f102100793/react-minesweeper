(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8325)}])},8325:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return f}});var r=t(5893),n=t(922),l=t.n(n);let a=e=>(0,r.jsxs)("div",{className:l().upper,children:[(0,r.jsxs)("div",{className:l().left,children:[" ",String(e.bombcount).padStart(3,"0")," "]}),(0,r.jsx)("button",{className:e.clearcount===e.bombcount2?l().clear:1===e.gameover?l().over:l().middle,onClick:e.resetboard}),(0,r.jsx)("div",{className:l().right,children:String(e.timer).padStart(3,"0")})]});var c=t(7294);let s=()=>{let[e,o]=(0,c.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),t=JSON.parse(JSON.stringify(e)),[r,n]=(0,c.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);return{board:[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],userInputs:e,bombMap:r,bombcount:10,setuserInputs:o,setBombMap:n,newInputs:t}},i=()=>{let{board:e,userInputs:o,bombMap:t,setuserInputs:r,setBombMap:n,newInputs:l}=s(),[a,i]=(0,c.useState)(0),u=10,d=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],_=(o,r)=>{let n=0;for(let l of d)void 0!==e[o+l[0]]&&void 0!==e[r+l[1]]&&1===t[o+l[0]][r+l[1]]&&n++;if(11!==e[o][r]){if(0===n)for(let t of d)e[o][r]=0,void 0!==e[o+t[0]]&&void 0!==e[r+t[1]]&&-1===e[o+t[0]][r+t[1]]&&11!==e[o][r]&&_(o+t[0],r+t[1]);else e[o][r]=n}},f=0,b=0;for(let r=0;r<9;r++)for(let n=0;n<9;n++){if(1===o[r][n]){if(1===t[r][n]){for(let o=0;o<9;o++)for(let r=0;r<9;r++)1===t[o][r]&&(e[o][r]=11,f=1);continue}_(r,n)}2===o[r][n]?(e[r][n]=10,u--):3===o[r][n]&&(e[r][n]=9)}for(let o=0;o<9;o++)for(let t=0;t<9;t++)(-1===e[o][t]||10===e[o][t]||9===e[o][t])&&b++;if(b===u)for(let o=0;o<9;o++)for(let r=0;r<9;r++)1===t[o][r]&&(e[o][r]=10);let p=(e,a,c)=>{if(console.log("押されている"),2===c.button){c.preventDefault();let t=[...o],n=t[e][a];0===n?t[e][a]=2:2===n?t[e][a]=3:3===n&&(t[e][a]=0),r(t)}else if(0===o[e][a]){if(0===m){let o=0;for(;o<10;){let r=Math.floor(Math.random()*t.length),l=Math.floor(Math.random()*t[0].length);if(1!==t[l][r]&&"".concat(l).concat(r)!=="".concat(e).concat(a)){let e=[...t];e[l][r]=1,o++,n(e)}}console.log("一クリ目",e,a),i(0)}l[e][a]=1,r(l)}},m=0;for(let e=0;e<9;e++)for(let o=0;o<9;o++)1===t[e][o]&&m++;let v=()=>{for(let r=0;r<9;r++)for(let n=0;n<9;n++)e[r][n]=-1,o[r][n]=0,t[r][n]=0;m=0,i(0)};return console.log("board"),console.table(e),console.log("bombMap"),console.table(t),console.log("userInputs"),console.table(o),(0,c.useEffect)(()=>{let e;return m>0&&b!==u&&0===f&&(e=setInterval(()=>{i(e=>e+1)},1e3)),()=>clearInterval(e)},[m,b,10,u,f]),{clearcount:b,gameover:f,timer:a,onClick:p,setTimer:i,bombcount2:u,resetboard:v,board:e}};var u=t(2729),d=t.n(u);let _=()=>{let{bombcount:e}=s(),{clearcount:o,gameover:t,timer:n,onClick:l,bombcount2:c,resetboard:u,board:_}=i();return console.log("return前"),console.table(_),(0,r.jsx)("div",{className:d().container,children:(0,r.jsxs)("div",{className:d().boardboard,children:[(0,r.jsx)(a,{bombcount:e,clearcount:o,bombcount2:c,gameover:t,resetboard:u,timer:n}),(0,r.jsx)("div",{className:d().board,children:_.map((e,o)=>e.map((e,t)=>(0,r.jsx)("div",{className:-1===e?d().stone:d().number,style:e>=0?{backgroundPosition:"".concat(-((e-1)*55.83),"px 0")}:{},onClick:e=>l(o,t,e),onContextMenu:e=>l(o,t,e)},"".concat(o,"-").concat(t))))})]})})};var f=_},922:function(e){e.exports={upper:"upper_upper__IzObB",left:"upper_left___0CJT",middle:"upper_middle__v02Jx",right:"upper_right__txySA",over:"upper_over__8CKvu",clear:"upper_clear__B4cC8"}},2729:function(e){e.exports={container:"index_container__gnN1f",boardboard:"index_boardboard__YE2Hj",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",number:"index_number__l0yF_",stone:"index_stone__oeDmm"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
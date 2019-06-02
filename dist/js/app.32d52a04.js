(function(e){function t(t){for(var r,s,a=t[0],c=t[1],u=t[2],d=0,f=[];d<a.length;d++)s=a[d],i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/word-guess/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01d3":function(e,t,n){},"0279":function(e,t,n){"use strict";var r=n("9355"),i=n.n(r);i.a},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"03c5":function(e,t,n){"use strict";var r=n("cf71"),i=n.n(r);i.a},"0c0a":function(e,t,n){},"0dba":function(e,t,n){e.exports=n.p+"media/gameleave.af953349.wav"},"25aa":function(e,t,n){},"37a7":function(e,t,n){},"3d24":function(e,t,n){},"3d25":function(e,t,n){"use strict";var r=n("778e"),i=n.n(r);i.a},"3da0":function(e,t,n){},"48fe":function(e,t,n){"use strict";var r=n("3d24"),i=n.n(r);i.a},5677:function(e,t,n){"use strict";var r=n("710a"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",[r("div",{style:{transform:"rotateY("+e.deg+"deg)"}},[r("img",{attrs:{id:"logo-svg",src:n("9b19")}})]),r("h1",[e._v("Word Guess")])]),r("transition",{attrs:{name:"page",mode:"out-in"}},[r("router-view")],1)],1)},o=[],s=(n("ac6a"),{name:"App",data:function(){return{deg:0}},created:function(){var e=this;console.log(ut),setInterval(function(){e.deg=e.deg+10},100),this.fetchWords()},methods:{fetchWords:function(){for(var e=this,t=["https://cors-anywhere.herokuapp.com/https://my-project-1493752659302.appspot.com/words/vocab/academic","https://cors-anywhere.herokuapp.com/https://my-project-1493752659302.appspot.com/words/vocab/music"],n=0,r=t;n<r.length;n++){var i=r[n];fetch(i).then(function(e){return e.json()}).then(function(t){e.populateDb(t)})}},populateDb:function(e){e.forEach(function(e){ut.words.put({self:e.self,definition:e.definition,level:e.level,tag:e.tag})})}}}),a=s,c=(n("034f"),n("2877")),u=Object(c["a"])(a,i,o,!1,null,null,null),l=u.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v(e._s("Classical word quiz game"))]),n("nav",[n("router-link",{attrs:{to:"/home"}},[e._v("Home")]),n("router-link",{attrs:{to:"/game"}},[e._v("Game")]),n("router-link",{attrs:{to:"/dict"}},[e._v("Dictionary")]),n("router-link",{attrs:{to:"/records"}},[e._v("Records")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])},v=[],h={name:"Home",data:function(){return{allWords:[]}},created:function(){},methods:{}},p=h,m=(n("6adf"),Object(c["a"])(p,f,v,!1,null,"577d6494",null)),k=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[n("h2",[e._v(e._s("Choose game settings"))]),n("diff-picker",{attrs:{randomize:e.shuffle},on:{changed:e.handleChangedDiffs}}),n("tag-picker",{attrs:{randomize:e.shuffle},on:{changed:e.handleChangedTags}}),n("section",{attrs:{id:"controls"}},[n("router-link",{attrs:{to:"/home"}},[e._v("Back")]),n("a",{attrs:{id:"randomize"},on:{click:e.randomize}},[e._v("Shuffle")]),n("router-link",{attrs:{tags:e.selectedTags,diffs:e.selectedDiffs,to:{name:"Play",params:{tags:e.selectedTags,diffs:e.selectedDiffs}}}},[e._v("Play")])],1)],1)},_=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"diff-picker"},e._l(e.diffs,function(t){return n("diff",{key:t,attrs:{text:t,toggle:e.randomize},on:{clickedDiff:e.handleDiffClick}})}),1)},w=[],b=(n("ac4d"),n("8a81"),n("6762"),n("2fdb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"diff",class:{active:e.isClicked},on:{click:e.toggleClick}},[e._v(e._s(e.text))])}),j=[],z={name:"Diff",props:["text","randomize"],data:function(){return{isClicked:!1}},methods:{toggleClick:function(){this.isClicked=!this.isClicked,this.$emit("clickedDiff",{text:this.text,state:this.isClicked})}}},x=z,C=(n("c2c7"),Object(c["a"])(x,b,j,!1,null,null,null)),O=C.exports,T={name:"DiffPicker",components:{Diff:O},props:["randomize"],methods:{handleDiffClick:function(e){e.state&&!this.selected.includes(e.text)?this.selected.push(e.text):this.selected.splice(this.selected.indexOf(e.text),1),this.$emit("changed",this.selected)}},data:function(){return{diffs:["Beginner","Intermediate","Advanced"],selected:[]}},watch:{randomize:function(){var e=this.$children.randomSubArray(),t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var s=i.value;s.toggleClick.call()}}catch(a){n=!0,r=a}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}}},P=T,R=(n("5677"),Object(c["a"])(P,y,w,!1,null,"eebc607e",null)),E=R.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag-picker"},e._l(e.tags,function(t){return n("tag",{key:t,attrs:{text:t},on:{clickedTag:e.handleTagClick}})}),1)},D=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag",class:{active:e.isClicked},on:{click:e.toggleClick}},[e._v(e._s(e.text))])},S=[],W={name:"Tag",props:["text"],data:function(){return{isClicked:!1}},methods:{toggleClick:function(){this.isClicked=!this.isClicked,this.$emit("clickedTag",{text:this.text,state:this.isClicked})}}},G=W,I=(n("d5cb"),Object(c["a"])(G,A,S,!1,null,null,null)),N=I.exports,L={name:"TagPicker",components:{Tag:N},props:["randomize"],methods:{handleTagClick:function(e){e.state&&!this.selected.includes(e.text)?this.selected.push(e.text):this.selected.splice(this.selected.indexOf(e.text),1),this.$emit("changed",this.selected)}},data:function(){return{tags:["Music","Animals","Food","Academic"],selected:[]}},watch:{randomize:function(){var e=this.$children.randomSubArray(),t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var s=i.value;s.toggleClick.call()}}catch(a){n=!0,r=a}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}}},B=L,M=(n("f3be"),Object(c["a"])(B,$,D,!1,null,"5109c4c6",null)),J=M.exports,q={name:"Game",components:{DiffPicker:E,TagPicker:J},data:function(){return{shuffle:!1,selectedTags:[],selectedDiffs:[]}},methods:{randomize:function(){this.shuffle=!this.shuffle},handleChangedDiffs:function(e){this.selectedDiffs=e},handleChangedTags:function(e){this.selectedTags=e}}},V=q,U=(n("3d25"),Object(c["a"])(V,g,_,!1,null,"c2babec2",null)),H=U.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dict"},[n("diff-picker",{on:{changed:e.updateDiffs}}),n("tag-picker",{on:{changed:e.updateTags}}),n("word-list",{attrs:{words:e.words}}),n("router-link",{attrs:{to:"/home"}},[e._v("Back")])],1)},Y=[],Q=(n("96cf"),n("3b8d")),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wordlist"},e._l(e.words,function(e){return n("word",{key:e.self,attrs:{word:e}})}),1)},X=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"word",on:{click:e.toggleShow}},[n("div",{staticClass:"self"},[e._v(e._s(e.word.self))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isClicked,expression:"isClicked"}],staticClass:"definition"},[e._v(e._s(e.word.definition))])])},ee=[],te={name:"Word",props:["word"],data:function(){return{isClicked:!1}},methods:{toggleShow:function(){this.isClicked=!this.isClicked}}},ne=te,re=(n("48fe"),Object(c["a"])(ne,Z,ee,!1,null,"3ca8dfdd",null)),ie=re.exports,oe={name:"WordList",props:["words"],components:{Word:ie}},se=oe,ae=(n("aa1c"),Object(c["a"])(se,K,X,!1,null,"bbcf1f10",null)),ce=ae.exports,ue={components:{DiffPicker:E,WordList:ce,TagPicker:J},name:"Dict",created:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ut.words.toArray();case 2:this.allWords=e.sent,this.words=this.allWords;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{allWords:[],words:[]}},methods:{updateDiffs:function(e){console.log(e),this.words=this.allWords.filter(function(t){return 0===e.length||e.includes(t.level)})},updateTags:function(e){console.log(e),this.words=this.allWords.filter(function(t){return 0===e.length||e.includes(t.tag)})}}},le=ue,de=(n("0279"),Object(c["a"])(le,F,Y,!1,null,"92d3e6a2",null)),fe=de.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"about"}},[n("h1",[e._v("Word Guess")]),n("h2",[e._v("Clasical Word Quiz")]),n("h4",[e._v("Cil projektu")]),n("p",[e._v("\n    Cilem projektu bylo vytvorit jednoduchou hru za ucelem naucit si zaklady jazyku Javascript,\n    prozkoumat zajimave moznosti jazyku CSS3 a vyzkouset si framework Vue.js\n    "),n("Vue",{staticClass:"js"})],1),e._m(0),n("h4",[e._v("Realizace")]),n("i",[e._v("Vyuzity Stack:")]),e._m(1),n("p",[e._v("\n    Slova se cepraji z externiho serveru na Google Cloudu (psano v nodejs), ktery je ma ulozena v zadanem formatu.\n    Nasledne se slova ukladaji i do interni IndexedDB databazi pro optimalizaci vyuziti site.\n    Instance teto databazi je pak pouzita tam kde je treba (ve slovniku a u voleb parametru hry).\n  ")]),e._m(2),n("h4",[e._v("Pozadavky na HTML")]),e._m(3),n("h4",[e._v("Pozadavky na CSS3")]),e._m(4),n("h4",[e._v("Pozadavky na Javascript")]),e._m(5),n("router-link",{attrs:{to:"/home"}},[e._v("Back")])],1)},he=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    Podstata hry samotne je jednoducha - je to\n    "),n("i",[e._v('"word quiz"')]),e._v(".\n    Uzivatel zvoli libovolnou mnozinu urovne slozitosti (kterych je celkove tri), libovolnou mnozinu okruhu slov a zacne hrat.\n    "),n("b",[e._v("Otazka")]),e._v("\n    je definice slova, moznosti odpovedi jsou ctyri, spravna moznost je vzdy jedna. Cas je ohranicen, celkem 7 sekund na otazku.\n    Po odpovedi ci uplynuti casu se zobrazi vysledek a zindikuje se spravna odpoved. Takle hra pokracuje az uzivatel ji ukonci, nebo se vyprazdni slovni zasoba anebo uzivatel pujde zpatky.\n    Po skonceni hry si uzivatel bud ulozi vysledky do tabulky anebo necha a jde zpatky.\n    Hra je doplnena setridenou tabulkou vysledku a slovnikem s moznosti filtrovani slov podle slozitosti a okruhu.\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("HTML 5, CSS 3, Javascript")]),n("li",[e._v("Vue.js, Vue router, Vue CLI")]),n("li",[e._v("Dexie")]),n("li",[e._v("Webpack, Babel, NPM")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    Cela aplikace je rozdelena do vetsich komponent, ktere se skladaji z mensich casti.\n    Nasledne kazda komponenta ci cast je zodpovedna za jedinou vec.\n    Tak, napriklad, komponenta\n    "),n("b",[e._v("Dictionary")]),e._v(" je slozena z casti\n    "),n("i",[e._v("DiffPicker")]),e._v(",\n    "),n("i",[e._v("TagPicker")]),e._v(", a\n    "),n("i",[e._v("WordList")]),e._v(".\n    Casti\n    "),n("i",[e._v("DiffPicker")]),e._v(" a\n    "),n("i",[e._v("TagPicker")]),e._v(" jsou pak moc podobne a skladaji se z komponent\n    "),n("i",[e._v("Diff")]),e._v(" a\n    "),n("i",[e._v("Tag")]),e._v(" respektive.\n    Ty uz jsou pak nejjednodussi bloky. Jsou to v podstate\n    "),n("i",[e._v("html")]),e._v(" znacky\n    "),n("i",[e._v("div")]),e._v('\n    , reagujici na stisknuti a predavajici tyto udalosti nahoru rodicum, kde jsou pak informace o techto udalostech vyuzita pro provedeni zmen.\n    Tyto casti a komponenty maji vlastni "scoped" stylovani. Nejcasteji bylo pouzito stylovani pomoci Flexboxu. Podobne to funguje v cele aplikaci.\n    Jsou tedy vyuzite principy\n    '),n("i",[e._v("Props down - events up")]),e._v(",\n    "),n("i",[e._v("Separation of concerns")]),e._v(" a reaktivita.\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("DOCTYPE je validni")]),n("li",[e._v("Testovano v Chrome, Firefox a Edge")]),n("li",[e._v("Byla pouzita SVG grafika pro tvorbu logo ikonky")]),n("li",[e._v("audio prvky behem hry")]),n("li",[e._v("semanticky znacky pro navigaci")]),n("li",[e._v("osetreny formularovy prvek pro zadani vysledku")]),n("li",[e._v("aplikace je funkcni i offline")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("\n      V par mistech (\n      "),n("i",[e._v("Dictionary")]),e._v(",\n      "),n("i",[e._v("Result")]),e._v(") je vyuzito pridani pseudopotomku v zavislosti na poctu realnich potomku, jsou vyuzita i dalsi pokrocile selektory(\n      "),n("i",[e._v(":hover")]),e._v(")\n    ")]),n("li",[e._v("Aplikace je vyuzitelna i na moblnich zarizenich (Media querries, vendor prefixy)")]),n("li",[e._v("Jednoduche transitions a animations (prechod mezi stranky, animace buttonu)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("\n      OOP - zcasti je. Komponenty jsou v podstate objekty, komunikujici pomoci zprav.\n      Take byla polyfillovana trida\n      "),n("i",[e._v("Array")]),e._v(" pro jednoduche generovani nahodnych mnozin\n    ")]),n("li",[e._v("Byl vyuzit framework Vue.js a jeho zakl. principy")]),n("li",[e._v("Misto LocalStorage bylo vyuzito IndexedDB(Dexie)")]),n("li",[e._v("Posuny tlacitek fungujou korektne")]),n("li",[e._v("Jsou zvuky, prehrane z JS")]),n("li",[e._v("Aplikace je funkcni i offline")])])}],pe={name:"About"},me=pe,ke=(n("dd44"),Object(c["a"])(me,ve,he,!1,null,"89f44092",null)),ge=ke.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"play"}},[n("modal",{attrs:{name:"no-words"}},[e._v("No words left!")]),e.canPlay?n("div",{attrs:{id:"play-layout"}},[n("question",{attrs:{guess:e.currentGuess,opts:e.currentOpts,directive:e.directive},on:{questionResult:e.handleResult}}),n("div",{attrs:{id:"controls"}},[n("router-link",{attrs:{to:{name:"Result",params:{records:e.record,canEdit:!0}}}},[e._v("End")]),n("router-link",{attrs:{id:"back",to:"/game"}},[e._v("Back")])],1)],1):e._e()],1)},ye=[],we=n("7618"),be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"question"}},[n("h2",{attrs:{id:"guess"}},[e._v(e._s(e.answer))]),n("p",[e._v(e._s(e.watchedGuess))]),n("timer",{attrs:{id:"timer",directive:e.controlDirective},on:{timer:e.controlTimer}}),n("div",{attrs:{id:"opts"}},e._l(e.watchedOpts,function(t){return n("option-ans",{key:t.self,attrs:{word:t},on:{optClicked:e.handleClick}})}),1)],1)},je=[],ze=n("75fc"),xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"timer"}},[n("div",{style:{width:e.progress+"%"},attrs:{id:"line"}})])},Ce=[],Oe={name:"Timer",props:["directive"],data:function(){return{limit:1e4,interval:null,step:50,progress:0}},methods:{start:function(){this.reset(),this.interval=setInterval(this.count,this.step)},count:function(){this.progress--},stop:function(){clearInterval(this.interval)},reset:function(){this.progress=100}},watch:{progress:function(){0===this.progress&&this.$emit("timer","timeout")},directive:function(){switch(this.directive){case"stop":this.stop();break;case"start":this.start();break;case"reset":this.reset();break}}}},Te=Oe,Pe=(n("a909"),Object(c["a"])(Te,xe,Ce,!1,null,"7178a9f2",null)),Re=Pe.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"opt",class:{none:-1===e.state,wrong:!1===e.state,correct:!0===e.state},on:{click:e.handleClick}},[e._v(e._s(e.displayedText))])])},$e=[],De={name:"OptionAns",props:["word"],data:function(){return{displayedText:this.word.self,state:-1}},mounted:function(){var e=this;lt.$on("optClickedResponse",function(t){if(t.component===e)if(e.state=t.result,!0===t.result){var r=new Audio(n("ce84"));r.play()}else if(!1===t.result){var i=new Audio(n("6455"));i.play()}})},methods:{handleClick:function(){this.$emit("optClicked",this)}}},Ae=De,Se=(n("b9f2"),Object(c["a"])(Ae,Ee,$e,!1,null,"2bbd51b8",null)),We=Se.exports,Ge={name:"Question",props:["opts","guess","directive"],components:{Timer:Re,OptionAns:We},data:function(){return{watchedGuess:"",watchedOpts:[],controlDirective:"None",answered:!1,answer:"",givenAnswer:"",lastClickedOption:null}},watch:{directive:function(){switch(this.directive){case"render":this.resetParams(),this.watchedGuess=this.guess.definition,this.watchedOpts=[].concat(Object(ze["a"])(this.opts),[this.guess]);break;case"startTimer":this.controlDirective="start";break}}},methods:{controlTimer:function(e){"timeout"===e&&(this.controlDirective="stop",this.$emit("questionResult",{result:"timeout"}))},handleClick:function(e){if(!this.answered){this.answered=!0,this.lastClickedOption=e,this.givenAnswer=e.word.self;var t=this.givenAnswer===this.guess.self;lt.$emit("optClickedResponse",{result:t,component:e}),this.controlDirective="stop",this.answer=this.guess.self,this.$emit("questionResult",{result:t?"correct":"wrong"})}},resetParams:function(){this.answered=!1,this.givenAnswer="",lt.$emit("optClickedResponse",{result:-1,component:this.lastClickedOption}),this.answer=""}}},Ie=Ge,Ne=(n("03c5"),Object(c["a"])(Ie,be,je,!1,null,"72006f2e",null)),Le=Ne.exports,Be={name:"Play",props:["tags","diffs"],components:{Question:Le},data:function(){return{allWords:[],wordsToPlay:[],currentGuess:null,currentOpts:null,gameLoop:null,directive:"None",canPlay:!0,record:[]}},mounted:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new Audio(n("ea79")),t.crossOrigin="anonymous",t.setAttribute("media-player","audioPlayer"),console.log(t),t.play().then(function(e){return console.log(e)}),e.next=7,ut.words.toArray();case 7:this.allWords=e.sent;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),watch:{allWords:function(){var e=this;void 0!==Object(we["a"])(this.allWords)&&0!==this.allWords.length&&(this.wordsToPlay=this.allWords.filter(function(t){return(0===e.tags.length||e.tags.includes(t.tag))&&(0===e.diffs.length||e.diffs.includes(t.level))})),this.initGameLoop()}},methods:{initGameLoop:function(){this.gameLoop=setTimeout(this.playIteration,200)},playIteration:function(){var e=this;0===this.wordsToPlay.length&&(this.canPlay=!1,this.$modal.show("no-words"),setTimeout(function(){e.$router.push({name:"Result",params:{canEdit:!0,records:e.record}})},1e3)),this.currentGuess=this.wordsToPlay.popRandomEl(),this.currentOpts=this.allWords.subArrayOfNExclusiveWith(3,this.currentGuess),this.directive="render",setTimeout(function(){e.directive="startTimer"},350)},handleResult:function(e){this.record.push({word:this.currentGuess,result:"correct"===e.result}),this.gameLoop=setTimeout(this.playIteration,2e3),console.log(this.record)},exit:function(){clearTimeout(this.gameLoop)}}},Me=Be,Je=(n("d516"),Object(c["a"])(Me,_e,ye,!1,null,"070e3eb3",null)),qe=Je.exports,Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"result"}},[n("h2",[e._v("Game Over")]),n("h3",[e._v("You have guessed:")]),n("word-list",{staticClass:"result",attrs:{words:e.correctList}}),n("h3",[e._v("You have not guess:")]),n("word-list",{staticClass:"result",attrs:{words:e.wrongList}}),e.canEdit?n("div",{attrs:{id:"record"}},[n("label",{attrs:{for:"username"}},[e._v("Enter your name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{autofocus:"true",name:"username",id:"username",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("router-link",{attrs:{id:"save",newUsername:e.username,newRecord:e.records,canReturn:!0,to:{name:"Records",params:{newUsername:e.username,newRecord:e.records,canReturn:!0}}}},[e._v("Save")])],1):e._e(),n("router-link",{attrs:{id:"home",to:"/home"}},[e._v("Dismiss")])],1)},Ue=[],He={name:"Result",components:{WordList:ce},props:["previousName","records","canEdit"],data:function(){return{username:this.previousName||""}},created:function(){if(this.canEdit){var e=new Audio(n("0dba"));e.play()}},computed:{correctList:function(){return console.log(this.records),"undefined"==typeof this.records?[]:this.records.filter(function(e){return e.result}).map(function(e){return e.word})},wrongList:function(){return"undefined"==typeof this.records?[]:this.records.filter(function(e){return!e.result}).map(function(e){return e.word})}}},Fe=He,Ye=(n("8aab"),Object(c["a"])(Fe,Ve,Ue,!1,null,"db9828e0",null)),Qe=Ye.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"records"}},[n("h2",[e._v("Table of Records")]),e.canReturn?n("router-link",{attrs:{id:"save",to:{name:"Result",params:{previousName:e.newUsername,records:e.newRecord}}}},[e._v("Back to results")]):e._e(),n("table",[e._m(0),n("tbody",e._l(e.records,function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.username))]),n("td",[e._v(e._s(t.score))])])}),0)]),n("router-link",{attrs:{to:"/home"}},[e._v("Back")])],1)},Xe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Username")]),n("th",[e._v("Score")])])])}],Ze={Beginner:1,Intermediate:2,Advanced:3},et={name:"Records",props:["newUsername","newRecord","canReturn"],data:function(){return{records:[]}},mounted:function(){this.addNewRecord(),this.loadRecords()},methods:{addNewRecord:function(){if(this.newUsername&&this.newRecord){var e=this.newRecord.reduce(function(e,t){return e+t.result*Ze[t.word.level]},0);ut.records.add({username:this.newUsername,score:e})}},loadRecords:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ut.records.orderBy("score").reverse().toArray();case 2:this.records=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},tt=et,nt=(n("87ca"),Object(c["a"])(tt,Ke,Xe,!1,null,null,null)),rt=nt.exports;r["a"].use(d["a"]);var it=new d["a"]({routes:[{path:"/",component:k},{path:"/home",name:"Home",component:k},{path:"/game",name:"Game",component:H},{path:"/dict",name:"Dictionary",component:fe},{path:"/about",name:"About",component:ge},{path:"/play",name:"Play",component:qe,props:!0},{path:"/result",name:"Result",component:Qe,props:!0},{path:"/records",name:"Records",component:rt,props:!0}]}),ot=n("9483");Object(ot["a"])("".concat("/word-guess/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object.randInt=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(n){for(var i=[],o=0;o<r;o++)i.push(e+Math.floor(Math.random()*t));return i}return e+Math.floor(Math.random()*t)},Array.prototype.getRandomEl=function(){var e=Object.randInt(0,this.length);return this[e]},Array.prototype.popRandomEl=function(){var e=Object.randInt(0,this.length);return this.swapInd(e,this.length-1),this.pop()},Array.prototype.swapInd=function(e,t){var n=this[e];this[e]=this[t],this[t]=n},Array.prototype.randomSubArray=function(){var e=Object.randInt(0,2,!0,this.length);return this.filter(function(t,n){return 1===e[n]})},Array.prototype.subArrayOfNExclusiveWith=function(e,t){if(e<0||this.length<e)return[];var n=this.indexOf(t);if(-1==n)return[];var r=[];while(r.length!==e){var i=Object.randInt(0,this.length);i===n||r.includes(i)||r.push(i)}return this.filter(function(e,t){if(r.includes(t))return e})};var st=n("74ce"),at=n("1881"),ct=n.n(at);n.d(t,"eventHub",function(){return lt}),n.d(t,"db",function(){return ut}),r["a"].config.productionTip=!1;var ut=new st["a"]("WordGuessDB");ut.version(1).stores({words:"self, definition, tag, level",records:"++id, username, score"});var lt=new r["a"]({});new r["a"]({router:it,render:function(e){return e(l)}}).$mount("#app"),r["a"].use(ct.a)},6455:function(e,t,n){e.exports=n.p+"media/wrong.19b1fe35.wav"},"64a9":function(e,t,n){},"6adf":function(e,t,n){"use strict";var r=n("d770"),i=n.n(r);i.a},"710a":function(e,t,n){},"778e":function(e,t,n){},"87ca":function(e,t,n){"use strict";var r=n("3da0"),i=n.n(r);i.a},"8aab":function(e,t,n){"use strict";var r=n("a6c2"),i=n.n(r);i.a},9355:function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.df64f36c.svg"},a6c2:function(e,t,n){},a909:function(e,t,n){"use strict";var r=n("25aa"),i=n.n(r);i.a},aa1c:function(e,t,n){"use strict";var r=n("37a7"),i=n.n(r);i.a},b9f2:function(e,t,n){"use strict";var r=n("fa69"),i=n.n(r);i.a},c2c7:function(e,t,n){"use strict";var r=n("d426"),i=n.n(r);i.a},c363:function(e,t,n){},ce84:function(e,t,n){e.exports=n.p+"media/correct.65255d26.wav"},cf71:function(e,t,n){},d426:function(e,t,n){},d516:function(e,t,n){"use strict";var r=n("0c0a"),i=n.n(r);i.a},d5cb:function(e,t,n){"use strict";var r=n("e979"),i=n.n(r);i.a},d770:function(e,t,n){},dd44:function(e,t,n){"use strict";var r=n("01d3"),i=n.n(r);i.a},e979:function(e,t,n){},ea79:function(e,t,n){e.exports=n.p+"media/gameenter.840e7327.wav"},f3be:function(e,t,n){"use strict";var r=n("c363"),i=n.n(r);i.a},fa69:function(e,t,n){}});
//# sourceMappingURL=app.32d52a04.js.map
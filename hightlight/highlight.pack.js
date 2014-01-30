var hljs=new function(){function q(a){return a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")
}function A(a){for(var b=a.firstChild;
b;
b=b.nextSibling){if(b.nodeName.toUpperCase()=="CODE"){return b
}if(!(b.nodeType==3&&b.nodeValue.match(/\s+/))){break
}}}function u(a,b){return Array.prototype.map.call(a.childNodes,function(c){if(c.nodeType==3){return b?c.nodeValue.replace(/\n/g,""):c.nodeValue
}if(c.nodeName.toUpperCase()=="BR"){return"\n"
}return u(c,b)
}).join("")
}function B(a){var b=(a.className+" "+(a.parentNode?a.parentNode.className:"")).split(/\s+/);
b=b.map(function(d){return d.replace(/^language-/,"")
});
for(var c=0;
c<b.length;
c++){if(x[b[c]]||b[c]=="no-highlight"){return b[c]
}}}function z(a){var c=[];
(function b(f,e){for(var d=f.firstChild;
d;
d=d.nextSibling){if(d.nodeType==3){e+=d.nodeValue.length
}else{if(d.nodeName.toUpperCase()=="BR"){e+=1
}else{if(d.nodeType==1){c.push({event:"start",offset:e,node:d});
e=b(d,e);
c.push({event:"stop",offset:e,node:d})
}}}}return e
})(a,0);
return c
}function s(c,a,h){var b=0;
var e="";
var k=[];
function i(){if(!c.length||!a.length){return c.length?c:a
}if(c[0].offset!=a[0].offset){return(c[0].offset<a[0].offset)?c:a
}return a[0].event=="start"?c:a
}function j(l){function m(n){return" "+n.nodeName+'="'+q(n.value)+'"'
}e+="<"+l.nodeName.toLowerCase()+Array.prototype.map.call(l.attributes,m).join("")+">"
}function f(l){e+="</"+l.nodeName.toLowerCase()+">"
}function d(l){(l.event=="start"?j:f)(l.node)
}while(c.length||a.length){var g=i();
e+=q(h.substr(b,g[0].offset-b));
b=g[0].offset;
if(g==c){k.reverse().forEach(f);
do{d(g.splice(0,1)[0]);
g=i()
}while(g==c&&g.length&&g[0].offset==b);
k.reverse().forEach(j)
}else{if(g[0].event=="start"){k.push(g[0].node)
}else{k.pop()
}d(g.splice(0,1)[0])
}}return e+q(h.substr(b))
}function w(a){function d(e){return(e&&e.source)||e
}function c(e,f){return RegExp(d(e),"m"+(a.cI?"i":"")+(f?"g":""))
}function b(k,f){if(k.compiled){return
}k.compiled=true;
var i=[];
if(k.k){var j={};
function e(n,m){if(a.cI){m=m.toLowerCase()
}m.split(" ").forEach(function(F){var E=F.split("|");
j[E[0]]=[n,E[1]?Number(E[1]):1];
i.push(E[0])
})
}k.lR=c(k.l||"\\b"+hljs.IR+"\\b(?!\\.)",true);
if(typeof k.k=="string"){e("keyword",k.k)
}else{for(var l in k.k){if(!k.k.hasOwnProperty(l)){continue
}e(l,k.k[l])
}}k.k=j
}if(f){if(k.bWK){k.b="\\b("+i.join("|")+")\\b(?!\\.)\\s*"
}k.bR=c(k.b?k.b:"\\B|\\b");
if(!k.e&&!k.eW){k.e="\\B|\\b"
}if(k.e){k.eR=c(k.e)
}k.tE=d(k.e)||"";
if(k.eW&&f.tE){k.tE+=(k.e?"|":"")+f.tE
}}if(k.i){k.iR=c(k.i)
}if(k.r===undefined){k.r=1
}if(!k.c){k.c=[]
}for(var g=0;
g<k.c.length;
g++){if(k.c[g]=="self"){k.c[g]=k
}b(k.c[g],k)
}if(k.starts){b(k.starts,f)
}var h=[];
for(var g=0;
g<k.c.length;
g++){h.push(d(k.c[g].b))
}if(k.tE){h.push(d(k.tE))
}if(k.i){h.push(d(k.i))
}k.t=h.length?c(h.join("|"),true):{exec:function(m){return null
}}
}b(a)
}function y(N,l,R,a){function W(C,D){for(var E=0;
E<D.c.length;
E++){var F=D.c[E].bR.exec(C);
if(F&&F.index==0){return D.c[E]
}}}function P(D,C){if(D.e&&D.eR.test(C)){return D
}if(D.eW){return P(D.parent,C)
}}function O(C,D){return !R&&D.i&&D.iR.test(C)
}function f(D,C){var E=j.cI?C[0].toLowerCase():C[0];
return D.k.hasOwnProperty(E)&&D.k[E]
}function g(){var G=q(i);
if(!T.k){return G
}var D="";
var C=0;
T.lR.lastIndex=0;
var F=T.lR.exec(G);
while(F){D+=G.substr(C,F.index-C);
var E=f(T,F);
if(E){k+=E[1];
D+='<span class="'+E[0]+'">'+F[0]+"</span>"
}else{D+=F[0]
}C=T.lR.lastIndex;
F=T.lR.exec(G)
}return D+G.substr(C)
}function d(){if(T.sL&&!x[T.sL]){return q(i)
}var D=T.subLanguageMode=="continuous"?T.top:undefined;
var C=T.sL?y(T.sL,i,true,D):v(i);
if(T.r>0){k+=C.keyword_count;
V+=C.r
}T.top=C.top;
return'<span class="'+C.language+'">'+C.value+"</span>"
}function b(){return T.sL!==undefined?d():g()
}function c(D,C){var E=D.cN?'<span class="'+D.cN+'">':"";
if(D.rB){h+=E;
i=""
}else{if(D.eB){h+=q(C)+E;
i=""
}else{h+=E;
i=C
}}T=Object.create(D,{parent:{value:T}})
}function Q(G,D){i+=G;
if(D===undefined){h+=b();
return 0
}var E=W(D,T);
if(E){h+=b();
c(E,D);
return E.rB?0:D.length
}var C=P(T,D);
if(C){var F=T;
if(!(F.rE||F.eE)){i+=D
}h+=b();
do{if(T.cN){h+="</span>"
}V+=T.r;
T=T.parent
}while(T!=C.parent);
if(F.eE){h+=q(D)
}i="";
if(C.starts){c(C.starts,"")
}return F.rE?0:D.length
}if(O(D,T)){throw new Error('Illegal lexem "'+D+'" for mode "'+(T.cN||"<unnamed>")+'"')
}i+=D;
return D.length||1
}var j=x[N];
if(!j){throw new Error('Unknown language: "'+N+'"')
}w(j);
var T=a||j;
var h="";
for(var n=T;
n!=j;
n=n.parent){if(n.cN){h='<span class="'+n.cN+'">'+h
}}var i="";
var V=0;
var k=0;
try{var m,S,U=0;
while(true){T.t.lastIndex=U;
m=T.t.exec(l);
if(!m){break
}S=Q(l.substr(U,m.index-U),m[0]);
U=m.index+S
}Q(l.substr(U));
for(var n=T;
n.parent;
n=n.parent){if(n.cN){h+="</span>"
}}return{r:V,keyword_count:k,value:h,language:N,top:T}
}catch(e){if(e.message.indexOf("Illegal")!=-1){return{r:0,keyword_count:0,value:q(l)}
}else{throw e
}}}function v(a){var e={keyword_count:0,r:0,value:q(a)};
var c=e;
for(var d in x){if(!x.hasOwnProperty(d)){continue
}var b=y(d,a,false);
b.language=d;
if(b.keyword_count+b.r>c.keyword_count+c.r){c=b
}if(b.keyword_count+b.r>e.keyword_count+e.r){c=e;
e=b
}}if(c.language){e.second_best=c
}return e
}function t(a,b,c){if(b){a=a.replace(/^((<[^>]+>|\t)+)/gm,function(g,d,e,f){return d.replace(/\t/g,b)
})
}if(c){a=a.replace(/\n/g,"<br>")
}return a
}function p(a,g,c){var f=u(a,c);
var h=B(a);
if(h=="no-highlight"){return
}var e=h?y(h,f,true):v(f);
h=e.language;
var d=z(a);
if(d.length){var b=document.createElementNS("http://www.w3.org/1999/xhtml","pre");
b.innerHTML=e.value;
e.value=s(d,z(b),f)
}e.value=t(e.value,g,c);
var i=a.className;
if(!i.match("(\\s|^)(language-)?"+h+"(\\s|$)")){i=i?(i+" "+h):h
}a.innerHTML=e.value;
a.className=i;
a.result={language:h,kw:e.keyword_count,re:e.r};
if(e.second_best){a.second_best={language:e.second_best.language,kw:e.second_best.keyword_count,re:e.second_best.r}
}}function o(){if(o.called){return
}o.called=true;
Array.prototype.map.call(document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","pre"),A).filter(Boolean).forEach(function(a){p(a,hljs.tabReplace)
})
}function r(){window.addEventListener("DOMContentLoaded",o,false);
window.addEventListener("load",o,false)
}var x={};
this.LANGUAGES=x;
this.highlight=y;
this.highlightAuto=v;
this.fixMarkup=t;
this.highlightBlock=p;
this.initHighlighting=o;
this.initHighlightingOnLoad=r;
this.IR="[a-zA-Z][a-zA-Z0-9_]*";
this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";
this.NR="\\b\\d+(\\.\\d+)?";
this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
this.BNR="\\b(0b[01]+)";
this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
this.BE={b:"\\\\[\\s\\S]",r:0};
this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};
this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};
this.CLCM={cN:"comment",b:"//",e:"$"};
this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};
this.HCM={cN:"comment",b:"#",e:"$"};
this.NM={cN:"number",b:this.NR,r:0};
this.CNM={cN:"number",b:this.CNR,r:0};
this.BNM={cN:"number",b:this.BNR,r:0};
this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};
this.inherit=function(b,a){var d={};
for(var c in b){d[c]=b[c]
}if(a){for(var c in a){d[c]=a[c]
}}return d
}
}();
hljs.LANGUAGES.bash=function(g){var j={cN:"variable",b:/\$[\w\d#@][\w\d_]*/};
var f={cN:"variable",b:/\$\{(.*?)\}/};
var h={cN:"string",b:/"/,e:/"/,c:[g.BE,j,f,{cN:"variable",b:/\$\(/,e:/\)/,c:g.BE}],r:0};
var i={cN:"string",b:/'/,e:/'/,r:0};
return{l:/-?[a-z]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:true,c:[{cN:"title",b:/\w[\w\d_]*/}],r:0},g.HCM,g.NM,h,i,j,f]}
}(hljs);
hljs.LANGUAGES.clojure=function(r){var x={built_in:"def cond apply if-not if-let if not not= = &lt; < > &lt;= <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for doseq dosync dotimes and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import intern refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! import use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if throw printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time ns assert re-find re-groups rand-int rand mod locking assert-valid-fdecl alias namespace resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! memfn to-array future future-call into-array aset gen-class reduce merge map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"};
var w="[a-zA-Z_0-9\\!\\.\\?\\-\\+\\*\\/\\<\\=\\>\\&\\#\\$';]+";
var B="[\\s:\\(\\{]+\\d+(\\.\\d+)?";
var y={cN:"number",b:B,r:0};
var s={cN:"string",b:'"',e:'"',c:[r.BE],r:0};
var k={cN:"comment",b:";",e:"$",r:0};
var p={cN:"collection",b:"[\\[\\{]",e:"[\\]\\}]"};
var z={cN:"comment",b:"\\^"+w};
var A={cN:"comment",b:"\\^\\{",e:"\\}"};
var u={cN:"attribute",b:"[:]"+w};
var q={cN:"list",b:"\\(",e:"\\)"};
var v={eW:true,k:{literal:"true false nil"},r:0};
var t={k:x,l:w,cN:"title",b:w,starts:v};
q.c=[{cN:"comment",b:"comment"},t,v];
v.c=[q,s,z,A,k,u,p,y];
p.c=[q,s,z,k,u,p,y];
return{i:/\S/,c:[k,q]}
}(hljs);
hljs.LANGUAGES.cmake=function(b){return{cI:true,k:{keyword:"add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or",operator:"equal less greater strless strgreater strequal matches"},c:[{cN:"envvar",b:"\\${",e:"}"},b.HCM,b.QSM,b.NM]}
}(hljs);
hljs.LANGUAGES.coffeescript=function(l){var g={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"};
var h="[A-Za-z$_][0-9A-Za-z$_]*";
var i={cN:"title",b:h};
var j={cN:"subst",b:"#\\{",e:"}",k:g,};
var k=[l.BNM,l.inherit(l.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",b:"'''",e:"'''",c:[l.BE]},{cN:"string",b:"'",e:"'",c:[l.BE],r:0},{cN:"string",b:'"""',e:'"""',c:[l.BE,j]},{cN:"string",b:'"',e:'"',c:[l.BE,j],r:0},{cN:"regexp",b:"///",e:"///",c:[l.HCM]},{cN:"regexp",b:"//[gim]*",r:0},{cN:"regexp",b:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"},{cN:"property",b:"@"+h},{b:"`",e:"`",eB:true,eE:true,sL:"javascript"}];
j.c=k;
return{k:g,c:k.concat([{cN:"comment",b:"###",e:"###"},l.HCM,{cN:"function",b:"("+h+"\\s*=\\s*)?(\\(.*\\))?\\s*[-=]>",e:"[-=]>",rB:true,c:[i,{cN:"params",b:"\\(",rB:true,c:[{b:/\(/,e:/\)/,k:g,c:["self"].concat(k)}]}]},{cN:"class",bWK:true,k:"class",e:"$",i:"[:\\[\\]]",c:[{bWK:true,k:"extends",eW:true,i:":",c:[i]},i]},{cN:"attribute",b:h+":",e:":",rB:true,eE:true}])}
}(hljs);
hljs.LANGUAGES.cpp=function(d){var c={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};
return{k:c,i:"</",c:[d.CLCM,d.CBLCLM,d.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},d.CNM,{cN:"preprocessor",b:"#",e:"$",c:[{b:"<",e:">",i:"\\n"},d.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:c,r:10,c:["self"]}]}
}(hljs);
hljs.LANGUAGES.cs=function(b){return{k:"abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield",c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},b.CLCM,b.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},b.ASM,b.QSM,b.CNM]}
}(hljs);
hljs.LANGUAGES.css=function(e){var d="[a-zA-Z-][a-zA-Z0-9_-]*";
var f={cN:"function",b:d+"\\(",e:"\\)",c:["self",e.NM,e.ASM,e.QSM]};
return{cI:true,i:"[=/|']",c:[e.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:true,eE:true,r:0,c:[f,e.ASM,e.QSM,e.NM]}]},{cN:"tag",b:d,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[f,e.NM,e.QSM,e.ASM,e.CBLCLM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}
}(hljs);
hljs.LANGUAGES.d=function(C){var Y={keyword:"abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",built_in:"bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",literal:"false null true"};
var X="(0|[1-9][\\d_]*)",J="(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",S="0[bB][01_]+",E="([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",B="0[xX]"+E,K="([eE][+-]?"+J+")",L="("+J+"(\\.\\d*|"+K+")|\\d+\\."+J+J+"|\\."+X+K+"?)",P="(0[xX]("+E+"\\."+E+"|\\.?"+E+")[pP][+-]?"+J+")",O="("+X+"|"+S+"|"+B+")",M="("+P+"|"+L+")";
var A="\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};";
var N={cN:"number",b:"\\b"+O+"(L|u|U|Lu|LU|uL|UL)?",r:0};
var Q={cN:"number",b:"\\b("+M+"([fF]|L|i|[fF]i|Li)?|"+O+"(i|[fF]i|Li))",r:0};
var H={cN:"string",b:"'("+A+"|.)",e:"'",i:"."};
var I={b:A,r:0};
var D={cN:"string",b:'"',c:[I],e:'"[cwd]?',r:0};
var U={cN:"string",b:'[rq]"',e:'"[cwd]?',r:5};
var F={cN:"string",b:"`",e:"`[cwd]?"};
var R={cN:"string",b:'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',r:10};
var G={cN:"string",b:'q"\\{',e:'\\}"'};
var V={cN:"shebang",b:"^#!",e:"$",r:5};
var T={cN:"preprocessor",b:"#(line)",e:"$",r:5};
var W={cN:"keyword",b:"@[a-zA-Z_][a-zA-Z_\\d]*"};
var Z={cN:"comment",b:"\\/\\+",c:["self"],e:"\\+\\/",r:10};
return{l:C.UIR,k:Y,c:[C.CLCM,C.CBLCLM,Z,R,D,U,F,G,Q,N,H,V,T,W]}
}(hljs);
hljs.LANGUAGES.delphi=function(i){var m="and safecall cdecl then string exports library not pascal set virtual file in array label packed end. index while const raise for to implementation with except overload destructor downto finally program exit unit inherited override if type until function do begin repeat goto nil far initialization object else var uses external resourcestring interface end finalization class asm mod case on shr shl of register xorwrite threadvar try record near stored constructor stdcall inline div out or procedure";
var n="safecall stdcall pascal stored const implementation finalization except to finally program inherited override then exports string read not mod shr try div shl set library message packed index for near overload label downto exit public goto interface asm on of constructor or private array unit raise destructor var type until function else external with case default record while protected property procedure published and cdecl do threadvar file in if end virtual write far out begin repeat nil initialization object uses resourcestring class register xorwrite inline static";
var j={cN:"comment",b:"{",e:"}",r:0};
var l={cN:"comment",b:"\\(\\*",e:"\\*\\)",r:10};
var p={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};
var o={cN:"string",b:"(#\\d+)+"};
var k={cN:"function",bWK:true,e:"[:;]",k:"function constructor|10 destructor|10 procedure|10",c:[{cN:"title",b:i.IR},{cN:"params",b:"\\(",e:"\\)",k:m,c:[p,o]},j,l]};
return{cI:true,k:m,i:'("|\\$[G-Zg-z]|\\/\\*|</)',c:[j,l,i.CLCM,p,o,i.NM,k,{cN:"class",b:"=\\bclass\\b",e:"end;",k:n,c:[p,o,j,l,i.CLCM,k]}]}
}(hljs);
hljs.LANGUAGES.diff=function(b){return{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}
}(hljs);
hljs.LANGUAGES.erlang=function(v){var B="[a-z'][a-zA-Z0-9_']*";
var p="("+B+":"+B+"|"+B+")";
var y={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun let not of orelse|10 query receive rem try when xor",literal:"false true"};
var s={cN:"comment",b:"%",e:"$",r:0};
var z={cN:"number",b:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",r:0};
var x={b:"fun\\s+"+B+"/\\d+"};
var q={b:p+"\\(",e:"\\)",rB:true,r:0,c:[{cN:"function_name",b:p,r:0},{b:"\\(",e:"\\)",eW:true,rE:true,r:0}]};
var w={cN:"tuple",b:"{",e:"}",r:0};
var D={cN:"variable",b:"\\b_([A-Z][A-Za-z0-9_]*)?",r:0};
var r={cN:"variable",b:"[A-Z][a-zA-Z0-9_]*",r:0};
var C={b:"#"+v.UIR,r:0,rB:true,c:[{cN:"record_name",b:"#"+v.UIR,r:0},{b:"{",e:"}",r:0}]};
var t={k:y,b:"(fun|receive|if|try|case)",e:"end"};
t.c=[s,x,v.inherit(v.ASM,{cN:""}),t,q,v.QSM,z,w,D,r,C];
var u=[s,x,t,q,v.QSM,z,w,D,r,C];
q.c[1].c=u;
w.c=u;
C.c[1].c=u;
var A={cN:"params",b:"\\(",e:"\\)",c:u};
return{k:y,i:"(</|\\*=|\\+=|-=|/=|/\\*|\\*/|\\(\\*|\\*\\))",c:[{cN:"function",b:"^"+B+"\\s*\\(",e:"->",rB:true,i:"\\(|#|//|/\\*|\\\\|:",c:[A,{cN:"title",b:B}],starts:{e:";|\\.",k:y,c:u}},s,{cN:"pp",b:"^-",e:"\\.",r:0,eE:true,rB:true,l:"-"+v.IR,k:"-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior",c:[A]},z,v.QSM,C,D,r,w]}
}(hljs);
hljs.LANGUAGES.fsharp=function(b){return{k:"abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",c:[{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},{cN:"string",b:'"""',e:'"""'},{cN:"comment",b:"\\(\\*",e:"\\*\\)"},{cN:"class",bWK:true,e:"\\(|=|$",k:"type",c:[{cN:"title",b:b.UIR}]},{cN:"annotation",b:"\\[<",e:">\\]"},{cN:"attribute",b:"\\B('[A-Za-z])\\b",c:[b.BE]},b.CLCM,b.inherit(b.QSM,{i:null}),b.CNM]}
}(hljs);
hljs.LANGUAGES.go=function(d){var c={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",constant:"true false iota nil",typename:"bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};
return{k:c,i:"</",c:[d.CLCM,d.CBLCLM,d.QSM,{cN:"string",b:"'",e:"[^\\\\]'",r:0},{cN:"string",b:"`",e:"`"},{cN:"number",b:"[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?",r:0},d.CNM]}
}(hljs);
hljs.LANGUAGES.haskell=function(m){var k={cN:"comment",b:"--",e:"$"};
var l={cN:"comment",c:["self"],b:"{-",e:"-}"};
var n={cN:"pragma",b:"{-#",e:"#-}"};
var i={cN:"preprocessor",b:"^#",e:"$"};
var o={cN:"type",b:"\\b[A-Z][\\w']*",r:0};
var p={cN:"container",b:"\\(",e:"\\)",i:'"',c:[n,k,l,i,{cN:"type",b:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},{cN:"title",b:"[_a-z][\\w']*"}]};
var j={cN:"container",b:"{",e:"}",c:p.c};
return{k:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",c:[{cN:"module",b:"\\bmodule ",e:"where",k:"module where",c:[p,l],i:"\\W\\.|;"},{cN:"import",b:"\\bimport ",e:"$",k:"import qualified as hiding",c:[p,k,l],i:"\\W\\.|;"},{cN:"class",b:"\\b(class |instance )",e:"where",k:"class family instance where",c:[o,p,l]},{cN:"typedef",b:"\\b(data |(new)?type )",e:"$",k:"data family type newtype deriving",c:[n,k,l,o,p,j]},{cN:"default",b:"\\bdefault ",e:"$",k:"default",c:[o,p,k,l]},{cN:"infix",b:"\\b(infix |infixl |infixr )",e:"$",k:"infix infixl infixr",c:[m.CNM,k,l]},{cN:"foreign",b:"\\bforeign ",e:"$",k:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",c:[o,m.QSM,k,l]},{cN:"shebang",b:"#!\\/usr\\/bin\\/env runhaskell",e:"$"},n,k,l,i,m.QSM,m.CNM,o,{cN:"title",b:"^[_a-z][\\w']*"},{b:"->|<-"}]}
}(hljs);
hljs.LANGUAGES.ini=function(b){return{cI:true,i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[b.QSM,b.NM],r:0}]}]}
}(hljs);
hljs.LANGUAGES.java=function(b){return{k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}],r:10},b.CLCM,b.CBLCLM,b.ASM,b.QSM,{cN:"class",bWK:true,e:"{",k:"class interface",eE:true,i:":",c:[{bWK:true,k:"extends implements",r:10},{cN:"title",b:b.UIR}]},b.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}
}(hljs);
hljs.LANGUAGES.javascript=function(b){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[b.ASM,b.QSM,b.CLCM,b.CBLCLM,b.CNM,{b:"("+b.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[b.CLCM,b.CBLCLM,b.REGEXP_MODE,{b:/</,e:/>;/,sL:"xml"}],r:0},{cN:"function",bWK:true,e:/{/,k:"function",c:[{cN:"title",b:/[A-Za-z$_][0-9A-Za-z$_]*/},{cN:"params",b:/\(/,e:/\)/,c:[b.CLCM,b.CBLCLM],i:/["'\(]/}],i:/\[|%/}]}
}(hljs);
hljs.LANGUAGES.lisp=function(v){var s="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*";
var r="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";
var t={cN:"shebang",b:"^#!",e:"$"};
var D={cN:"literal",b:"\\b(t{1}|nil)\\b"};
var A=[{cN:"number",b:r,r:0},{cN:"number",b:"#b[0-1]+(/[0-1]+)?"},{cN:"number",b:"#o[0-7]+(/[0-7]+)?"},{cN:"number",b:"#x[0-9a-f]+(/[0-9a-f]+)?"},{cN:"number",b:"#c\\("+r+" +"+r,e:"\\)"}];
var w={cN:"string",b:'"',e:'"',c:[v.BE],r:0};
var q={cN:"comment",b:";",e:"$"};
var x={cN:"variable",b:"\\*",e:"\\*"};
var p={cN:"keyword",b:"[:&]"+s};
var C={b:"\\(",e:"\\)",c:["self",D,w].concat(A)};
var z={cN:"quoted",b:"['`]\\(",e:"\\)",c:A.concat([w,x,p,C])};
var B={cN:"quoted",b:"\\(quote ",e:"\\)",k:{title:"quote"},c:A.concat([w,x,p,C])};
var u={cN:"list",b:"\\(",e:"\\)"};
var y={eW:true,r:0};
u.c=[{cN:"title",b:s},y];
y.c=[z,B,u,D].concat(A).concat([w,q,x,p]);
return{i:/\S/,c:A.concat([t,D,w,q,z,B,u])}
}(hljs);
hljs.LANGUAGES.lua=function(f){var g="\\[=*\\[";
var h="\\]=*\\]";
var j={b:g,e:h,c:["self"]};
var i=[{cN:"comment",b:"--(?!"+g+")",e:"$"},{cN:"comment",b:"--"+g,e:h,c:[j],r:10}];
return{l:f.UIR,k:{keyword:"and break do else elseif end false for if in local nil not or repeat return then true until while",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},c:i.concat([{cN:"function",bWK:true,e:"\\)",k:"function",c:[{cN:"title",b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"},{cN:"params",b:"\\(",eW:true,c:i}].concat(i)},f.CNM,f.ASM,f.QSM,{cN:"string",b:g,e:h,c:[j],r:10}])}
}(hljs);
hljs.LANGUAGES.objectivec=function(d){var c={keyword:"int float while private char catch export sizeof typedef const struct for union unsigned long volatile static protected bool mutable if public do return goto void enum else break extern asm case short default double throw register explicit signed typename try this switch continue wchar_t inline readonly assign property self synchronized end synthesize id optional required nonatomic super unichar finally dynamic IBOutlet IBAction selector strong weak readonly",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"};
return{k:c,i:"</",c:[d.CLCM,d.CBLCLM,d.CNM,d.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",bWK:true,e:"({|$)",k:"interface class protocol implementation",c:[{cN:"id",b:d.UIR}]},{cN:"variable",b:"\\."+d.UIR,r:0}]}
}(hljs);
hljs.LANGUAGES.perl=function(n){var r="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";
var o={cN:"subst",b:"[$@]\\{",e:"\\}",k:r,r:10};
var q={cN:"variable",b:"\\$\\d"};
var j={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};
var m=[n.BE,o,q,j];
var k={b:"->",c:[{b:n.IR},{b:"{",e:"}"}]};
var l={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};
var p=[q,j,n.HCM,l,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},k,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:m,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:m,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:m,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:m,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:m,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:m,r:5},{cN:"string",b:"'",e:"'",c:[n.BE],r:0},{cN:"string",b:'"',e:'"',c:m,r:0},{cN:"string",b:"`",e:"`",c:[n.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"("+n.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[n.HCM,l,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[n.BE],r:0}]},{cN:"sub",bWK:true,e:"(\\s*\\(.*?\\))?[;{]",k:"sub",r:5},{cN:"operator",b:"-\\w\\b",r:0}];
o.c=p;
k.c[1].c=p;
return{k:r,c:p}
}(hljs);
hljs.LANGUAGES.php=function(g){var h={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};
var f=[g.inherit(g.ASM,{i:null}),g.inherit(g.QSM,{i:null}),{cN:"string",b:'b"',e:'"',c:[g.BE]},{cN:"string",b:"b'",e:"'",c:[g.BE]}];
var j=[g.BNM,g.CNM];
var i={cN:"title",b:g.UIR};
return{cI:true,l:g.UIR,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[g.CLCM,g.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"}]},{cN:"comment",b:"__halt_compiler.+?;",eW:true,k:"__halt_compiler",l:g.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[g.BE]},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"},h,{cN:"function",bWK:true,e:"{",k:"function",i:"\\$|\\[|%",c:[i,{cN:"params",b:"\\(",e:"\\)",c:["self",h,g.CBLCLM].concat(f).concat(j)}]},{cN:"class",bWK:true,e:"{",k:"class",i:"[:\\(\\$]",c:[{bWK:true,eW:true,k:"extends",c:[i]},i]},{b:"=>"}].concat(f).concat(j)}
}(hljs);
hljs.LANGUAGES.python=function(h){var i={cN:"prompt",b:/^(>>>|\.\.\.) /};
var l=[{cN:"string",b:/(u|b)?r?'''/,e:/'''/,c:[i],r:10},{cN:"string",b:/(u|b)?r?"""/,e:/"""/,c:[i],r:10},{cN:"string",b:/(u|r|ur)'/,e:/'/,c:[h.BE],r:10},{cN:"string",b:/(u|r|ur)"/,e:/"/,c:[h.BE],r:10},{cN:"string",b:/(b|br)'/,e:/'/,c:[h.BE]},{cN:"string",b:/(b|br)"/,e:/"/,c:[h.BE]}].concat([h.ASM,h.QSM]);
var j={cN:"title",b:h.UIR};
var k={cN:"params",b:/\(/,e:/\)/,c:["self",h.CNM,i].concat(l)};
var g={bWK:true,e:/:/,i:/[${=;\n]/,c:[j,k],r:10};
return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:l.concat([i,h.HCM,h.inherit(g,{cN:"function",k:"def"}),h.inherit(g,{cN:"class",k:"class"}),h.CNM,{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}])}
}(hljs);
hljs.LANGUAGES.ruby=function(r){var v="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";
var m="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
var p={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"};
var t={cN:"yardoctag",b:"@[A-Za-z]+"};
var l=[{cN:"comment",b:"#",e:"$",c:[t]},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:[t],r:10},{cN:"comment",b:"^__END__",e:"\\n$"}];
var s={cN:"subst",b:"#\\{",e:"}",l:v,k:p};
var n=[r.BE,s];
var u=[{cN:"string",b:"'",e:"'",c:n,r:0},{cN:"string",b:'"',e:'"',c:n,r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:n},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:n},{cN:"string",b:"%[qw]?{",e:"}",c:n},{cN:"string",b:"%[qw]?<",e:">",c:n,r:10},{cN:"string",b:"%[qw]?/",e:"/",c:n,r:10},{cN:"string",b:"%[qw]?%",e:"%",c:n,r:10},{cN:"string",b:"%[qw]?-",e:"-",c:n,r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:n,r:10},{cN:"string",b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}];
var o={cN:"function",bWK:true,e:" |$|;",k:"def",c:[{cN:"title",b:m,l:v,k:p},{cN:"params",b:"\\(",e:"\\)",l:v,k:p}].concat(l)};
var q=l.concat(u.concat([{cN:"class",bWK:true,e:"$|;",k:"class module",c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+r.IR+"::)?"+r.IR}]}].concat(l)},o,{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:u.concat([{b:m}]),r:0},{cN:"symbol",b:v+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+r.RSR+")\\s*",c:l.concat([{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[r.BE,s]},{cN:"regexp",b:"%r{",e:"}[a-z]*",i:"\\n",c:[r.BE,s]},{cN:"regexp",b:"%r\\(",e:"\\)[a-z]*",i:"\\n",c:[r.BE,s]},{cN:"regexp",b:"%r!",e:"![a-z]*",i:"\\n",c:[r.BE,s]},{cN:"regexp",b:"%r\\[",e:"\\][a-z]*",i:"\\n",c:[r.BE,s]}]),r:0}]));
s.c=q;
o.c[1].c=q;
return{l:v,k:p,c:q}
}(hljs);
hljs.LANGUAGES.rust=function(e){var g={cN:"title",b:e.UIR};
var h={cN:"number",b:"\\b(0[xb][A-Za-z0-9_]+|[0-9_]+(\\.[0-9_]+)?([uif](8|16|32|64)?)?)",r:0};
var f="assert bool break char check claim comm const cont copy dir do drop else enum extern export f32 f64 fail false float fn for i16 i32 i64 i8 if impl int let log loop match mod move mut priv pub pure ref return self static str struct task true trait type u16 u32 u64 u8 uint unsafe use vec while";
return{k:f,i:"</",c:[e.CLCM,e.CBLCLM,e.inherit(e.QSM,{i:null}),e.ASM,h,{cN:"function",bWK:true,e:"(\\(|<)",k:"fn",c:[g]},{cN:"preprocessor",b:"#\\[",e:"\\]"},{bWK:true,e:"(=|<)",k:"type",c:[g],i:"\\S"},{bWK:true,e:"({|<)",k:"trait enum",c:[g],i:"\\S"}]}
}(hljs);
hljs.LANGUAGES.scala=function(e){var f={cN:"annotation",b:"@[A-Za-z]+"};
var d={cN:"string",b:'u?r?"""',e:'"""',r:10};
return{k:"type yield lazy override def with val var false true sealed abstract private trait object null if for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws",c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},e.CLCM,e.CBLCLM,d,e.ASM,e.QSM,{cN:"class",b:"((case )?class |object |trait )",e:"({|$)",i:":",k:"case class trait object",c:[{bWK:true,k:"extends with",r:10},{cN:"title",b:e.UIR},{cN:"params",b:"\\(",e:"\\)",c:[e.ASM,e.QSM,d,f]}]},e.CNM,f]}
}(hljs);
hljs.LANGUAGES.smalltalk=function(f){var e="[a-z][a-zA-Z0-9_]*";
var g={cN:"char",b:"\\$.{1}"};
var h={cN:"symbol",b:"#"+f.UIR};
return{k:"self super nil true false thisContext",c:[{cN:"comment",b:'"',e:'"',r:0},f.ASM,{cN:"class",b:"\\b[A-Z][A-Za-z0-9_]*",r:0},{cN:"method",b:e+":"},f.CNM,h,g,{cN:"localvars",b:"\\|\\s*"+e+"(\\s+"+e+")*\\s*\\|"},{cN:"array",b:"\\#\\(",e:"\\)",c:[f.ASM,g,f.CNM,h]}]}
}(hljs);
hljs.LANGUAGES.sql=function(b){return{cI:true,c:[{cN:"operator",b:"(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[b.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[b.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[b.BE]},b.CNM]},b.CBLCLM,{cN:"comment",b:"--",e:"$"}]}
}(hljs);
hljs.LANGUAGES.tex=function(f){var g={cN:"command",b:"\\\\[a-zA-Zа-яА-я]+[\\*]?"};
var h={cN:"command",b:"\\\\[^a-zA-Zа-яА-я0-9]"};
var e={cN:"special",b:"[{}\\[\\]\\&#~]",r:0};
return{c:[{b:"\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",rB:true,c:[g,h,{cN:"number",b:" *=",e:"-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",eB:true}],r:10},g,h,e,{cN:"formula",b:"\\$\\$",e:"\\$\\$",c:[g,h,e],r:0},{cN:"formula",b:"\\$",e:"\\$",c:[g,h,e],r:0},{cN:"comment",b:"%",e:"$",r:0}]}
}(hljs);
hljs.LANGUAGES.vala=function(b){return{k:{keyword:"char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",built_in:"DBus GLib CCode Gee Object",literal:"false true null"},c:[{cN:"class",bWK:true,e:"{",k:"class interface delegate namespace",i:"[^,:\\n\\s\\.]",c:[{cN:"title",b:b.UIR}]},b.CLCM,b.CBLCLM,{cN:"string",b:'"""',e:'"""',r:5},b.ASM,b.QSM,b.CNM,{cN:"preprocessor",b:"^#",e:"$",r:2},{cN:"constant",b:" [A-Z_]+ ",r:0}]}
}(hljs);
hljs.LANGUAGES.xml=function(e){var f="[A-Za-z0-9\\._:-]+";
var d={eW:true,r:0,c:[{cN:"attribute",b:f,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};
return{cI:true,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[d],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[d],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",r:0,c:[{cN:"title",b:"[^ /><]+"},d]}]}
}(hljs);
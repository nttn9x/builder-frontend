(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{1003:function(e,t,n){"use strict";function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return i}))},1004:function(e,t,n){var i=n(1187).parse;function r(e){return e.replace(/[\s,]+/g," ").trim()}var a={},s={};var o=!0;var c=!1;function u(e){var t=r(e);if(a[t])return a[t];var n=i(e,{experimentalFragmentVariables:c});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");return n=function e(t,n){var i=Object.prototype.toString.call(t);if("[object Array]"===i)return t.map((function(t){return e(t,n)}));if("[object Object]"!==i)throw new Error("Unexpected input.");n&&t.loc&&delete t.loc,t.loc&&(delete t.loc.startToken,delete t.loc.endToken);var r,a,s,o=Object.keys(t);for(r in o)o.hasOwnProperty(r)&&(a=t[o[r]],"[object Object]"!==(s=Object.prototype.toString.call(a))&&"[object Array]"!==s||(t[o[r]]=e(a,!0)));return t}(n=function(e){for(var t,n={},i=[],a=0;a<e.definitions.length;a++){var c=e.definitions[a];if("FragmentDefinition"===c.kind){var u=c.name.value,p=r((t=c.loc).source.body.substring(t.start,t.end));s.hasOwnProperty(u)&&!s[u][p]?(o&&console.warn("Warning: fragment with name "+u+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),s[u][p]=!0):s.hasOwnProperty(u)||(s[u]={},s[u][p]=!0),n[p]||(n[p]=!0,i.push(c))}else i.push(c)}return e.definitions=i,e}(n),!1),a[t]=n,n}function p(){for(var e=Array.prototype.slice.call(arguments),t=e[0],n="string"===typeof t?t:t[0],i=1;i<e.length;i++)e[i]&&e[i].kind&&"Document"===e[i].kind?n+=e[i].loc.source.body:n+=e[i],n+=t[i];return u(n)}p.default=p,p.resetCaches=function(){a={},s={}},p.disableFragmentWarnings=function(){o=!1},p.enableExperimentalFragmentVariables=function(){c=!0},p.disableExperimentalFragmentVariables=function(){c=!1},e.exports=p},1187:function(e,t,n){"use strict";n.r(t),n.d(t,"parse",(function(){return F})),n.d(t,"parseValue",(function(){return P})),n.d(t,"parseType",(function(){return M}));var i=n(377);function r(e,t){if(!Boolean(e))throw new Error(t)}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"function"===typeof Symbol&&Symbol.iterator,"function"===typeof Symbol&&Symbol.asyncIterator;var s="function"===typeof Symbol?Symbol.toStringTag:"@@toStringTag";function o(e,t){for(var n,i=/\r\n|[\n\r]/g,r=1,a=t+1;(n=i.exec(e.body))&&n.index<t;)r+=1,a=t+1-(n.index+n[0].length);return{line:r,column:a}}function c(e){return u(e.source,o(e.source,e.start))}function u(e,t){var n=e.locationOffset.column-1,i=l(n)+e.body,r=t.line-1,a=e.locationOffset.line-1,s=t.line+a,o=1===t.line?n:0,c=t.column+o,u="".concat(e.name,":").concat(s,":").concat(c,"\n"),h=i.split(/\r\n|[\n\r]/g),f=h[r];if(f.length>120){for(var d=Math.floor(c/80),E=c%80,v=[],T=0;T<f.length;T+=80)v.push(f.slice(T,T+80));return u+p([["".concat(s),v[0]]].concat(v.slice(1,d+1).map((function(e){return["",e]})),[[" ",l(E-1)+"^"],["",v[d+1]]]))}return u+p([["".concat(s-1),h[r-1]],["".concat(s),f],["",l(c-1)+"^"],["".concat(s+1),h[r+1]]])}function p(e){var t=e.filter((function(e){e[0];return void 0!==e[1]})),n=Math.max.apply(Math,t.map((function(e){return e[0].length})));return t.map((function(e){var t,i=e[0],r=e[1];return l(n-(t=i).length)+t+(r?" | "+r:" |")})).join("\n")}function l(e){return Array(e+1).join(" ")}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){var t="function"===typeof Map?new Map:void 0;return(v=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return T(e,arguments,y(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),I(i,e)})(e)}function T(e,t,n){return(T=N()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&I(r,n.prototype),r}).apply(null,arguments)}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(p,e);var t,n,i,r=function(e){var t=N();return function(){var n,i=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d(this,n)}}(p);function p(e,t,n,i,s,c,u){var l,h,f,v,T;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),T=r.call(this,e);var N,I=Array.isArray(t)?0!==t.length?t:void 0:t?[t]:void 0,y=n;!y&&I&&(y=null===(N=I[0].loc)||void 0===N?void 0:N.source);var O,m=i;!m&&I&&(m=I.reduce((function(e,t){return t.loc&&e.push(t.loc.start),e}),[])),m&&0===m.length&&(m=void 0),i&&n?O=i.map((function(e){return o(n,e)})):I&&(O=I.reduce((function(e,t){return t.loc&&e.push(o(t.loc.source,t.loc.start)),e}),[]));var _,A=u;if(null==A&&null!=c){var k=c.extensions;"object"==a(_=k)&&null!==_&&(A=k)}return Object.defineProperties(E(T),{name:{value:"GraphQLError"},message:{value:e,enumerable:!0,writable:!0},locations:{value:null!==(l=O)&&void 0!==l?l:void 0,enumerable:null!=O},path:{value:null!==s&&void 0!==s?s:void 0,enumerable:null!=s},nodes:{value:null!==I&&void 0!==I?I:void 0},source:{value:null!==(h=y)&&void 0!==h?h:void 0},positions:{value:null!==(f=m)&&void 0!==f?f:void 0},originalError:{value:c},extensions:{value:null!==(v=A)&&void 0!==v?v:void 0,enumerable:null!=A}}),(null===c||void 0===c?void 0:c.stack)?(Object.defineProperty(E(T),"stack",{value:c.stack,writable:!0,configurable:!0}),d(T)):(Error.captureStackTrace?Error.captureStackTrace(E(T),p):Object.defineProperty(E(T),"stack",{value:Error().stack,writable:!0,configurable:!0}),T)}return t=p,(n=[{key:"toString",value:function(){return function(e){var t=e.message;if(e.nodes)for(var n=0,i=e.nodes;n<i.length;n++){var r=i[n];r.loc&&(t+="\n\n"+c(r.loc))}else if(e.source&&e.locations)for(var a=0,s=e.locations;a<s.length;a++){var o=s[a];t+="\n\n"+u(e.source,o)}return t}(this)}},{key:s,get:function(){return"Object"}}])&&f(t.prototype,n),i&&f(t,i),p}(v(Error));function m(e,t,n){return new O("Syntax Error: ".concat(n),void 0,e,[t])}var _=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),A=n(248);function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var D=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GraphQL request",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{line:1,column:1};this.body=e,this.name=t,this.locationOffset=n,this.locationOffset.line>0||r(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||r(0,"column in locationOffset is 1-indexed and must be positive.")}var t,n,i;return t=e,(n=[{key:s,get:function(){return"Source"}}])&&k(t.prototype,n),i&&k(t,i),e}(),x=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),b=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),S=n(378),R=function(){function e(e){var t=new A.b(x.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==x.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=g(this,e)}while(e.kind===x.COMMENT);return e},e}();function C(e){return isNaN(e)?x.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function g(e,t){var n=e.source,i=n.body,r=i.length,a=function(e,t,n){var i=e.length,r=t;for(;r<i;){var a=e.charCodeAt(r);if(9===a||32===a||44===a||65279===a)++r;else if(10===a)++r,++n.line,n.lineStart=r;else{if(13!==a)break;10===e.charCodeAt(r+1)?r+=2:++r,++n.line,n.lineStart=r}}return r}(i,t.end,e),s=e.line,o=1+a-e.lineStart;if(a>=r)return new A.b(x.EOF,r,r,s,o,t);var c=i.charCodeAt(a);switch(c){case 33:return new A.b(x.BANG,a,a+1,s,o,t);case 35:return function(e,t,n,i,r){var a,s=e.body,o=t;do{a=s.charCodeAt(++o)}while(!isNaN(a)&&(a>31||9===a));return new A.b(x.COMMENT,t,o,n,i,r,s.slice(t+1,o))}(n,a,s,o,t);case 36:return new A.b(x.DOLLAR,a,a+1,s,o,t);case 38:return new A.b(x.AMP,a,a+1,s,o,t);case 40:return new A.b(x.PAREN_L,a,a+1,s,o,t);case 41:return new A.b(x.PAREN_R,a,a+1,s,o,t);case 46:if(46===i.charCodeAt(a+1)&&46===i.charCodeAt(a+2))return new A.b(x.SPREAD,a,a+3,s,o,t);break;case 58:return new A.b(x.COLON,a,a+1,s,o,t);case 61:return new A.b(x.EQUALS,a,a+1,s,o,t);case 64:return new A.b(x.AT,a,a+1,s,o,t);case 91:return new A.b(x.BRACKET_L,a,a+1,s,o,t);case 93:return new A.b(x.BRACKET_R,a,a+1,s,o,t);case 123:return new A.b(x.BRACE_L,a,a+1,s,o,t);case 124:return new A.b(x.PIPE,a,a+1,s,o,t);case 125:return new A.b(x.BRACE_R,a,a+1,s,o,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return function(e,t,n,i,r){var a=e.body,s=a.length,o=t+1,c=0;for(;o!==s&&!isNaN(c=a.charCodeAt(o))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++o;return new A.b(x.NAME,t,o,n,i,r,a.slice(t,o))}(n,a,s,o,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return function(e,t,n,i,r,a){var s=e.body,o=n,c=t,u=!1;45===o&&(o=s.charCodeAt(++c));if(48===o){if((o=s.charCodeAt(++c))>=48&&o<=57)throw m(e,c,"Invalid number, unexpected digit after 0: ".concat(C(o),"."))}else c=L(e,c,o),o=s.charCodeAt(c);46===o&&(u=!0,o=s.charCodeAt(++c),c=L(e,c,o),o=s.charCodeAt(c));69!==o&&101!==o||(u=!0,43!==(o=s.charCodeAt(++c))&&45!==o||(o=s.charCodeAt(++c)),c=L(e,c,o),o=s.charCodeAt(c));if(46===o||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(o))throw m(e,c,"Invalid number, expected digit but got: ".concat(C(o),"."));return new A.b(u?x.FLOAT:x.INT,t,c,i,r,a,s.slice(t,c))}(n,a,c,s,o,t);case 34:return 34===i.charCodeAt(a+1)&&34===i.charCodeAt(a+2)?function(e,t,n,i,r,a){var s=e.body,o=t+3,c=o,u=0,p="";for(;o<s.length&&!isNaN(u=s.charCodeAt(o));){if(34===u&&34===s.charCodeAt(o+1)&&34===s.charCodeAt(o+2))return p+=s.slice(c,o),new A.b(x.BLOCK_STRING,t,o+3,n,i,r,Object(S.a)(p));if(u<32&&9!==u&&10!==u&&13!==u)throw m(e,o,"Invalid character within String: ".concat(C(u),"."));10===u?(++o,++a.line,a.lineStart=o):13===u?(10===s.charCodeAt(o+1)?o+=2:++o,++a.line,a.lineStart=o):92===u&&34===s.charCodeAt(o+1)&&34===s.charCodeAt(o+2)&&34===s.charCodeAt(o+3)?(p+=s.slice(c,o)+'"""',c=o+=4):++o}throw m(e,o,"Unterminated string.")}(n,a,s,o,t,e):function(e,t,n,i,r){var a=e.body,s=t+1,o=s,c=0,u="";for(;s<a.length&&!isNaN(c=a.charCodeAt(s))&&10!==c&&13!==c;){if(34===c)return u+=a.slice(o,s),new A.b(x.STRING,t,s+1,n,i,r,u);if(c<32&&9!==c)throw m(e,s,"Invalid character within String: ".concat(C(c),"."));if(++s,92===c){switch(u+=a.slice(o,s-1),c=a.charCodeAt(s)){case 34:u+='"';break;case 47:u+="/";break;case 92:u+="\\";break;case 98:u+="\b";break;case 102:u+="\f";break;case 110:u+="\n";break;case 114:u+="\r";break;case 116:u+="\t";break;case 117:var p=(h=a.charCodeAt(s+1),f=a.charCodeAt(s+2),d=a.charCodeAt(s+3),E=a.charCodeAt(s+4),w(h)<<12|w(f)<<8|w(d)<<4|w(E));if(p<0){var l=a.slice(s+1,s+5);throw m(e,s,"Invalid character escape sequence: \\u".concat(l,"."))}u+=String.fromCharCode(p),s+=4;break;default:throw m(e,s,"Invalid character escape sequence: \\".concat(String.fromCharCode(c),"."))}++s,o=s}}var h,f,d,E;throw m(e,s,"Unterminated string.")}(n,a,s,o,t)}throw m(n,a,function(e){if(e<32&&9!==e&&10!==e&&13!==e)return"Cannot contain the invalid character ".concat(C(e),".");if(39===e)return"Unexpected single quote character ('), did you mean to use a double quote (\")?";return"Cannot parse the unexpected character ".concat(C(e),".")}(c))}function L(e,t,n){var i=e.body,r=t,a=n;if(a>=48&&a<=57){do{a=i.charCodeAt(++r)}while(a>=48&&a<=57);return r}throw m(e,r,"Invalid number, expected digit but got: ".concat(C(a),"."))}function w(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function F(e,t){return new B(e,t).parseDocument()}function P(e,t){var n=new B(e,t);n.expectToken(x.SOF);var i=n.parseValueLiteral(!1);return n.expectToken(x.EOF),i}function M(e,t){var n=new B(e,t);n.expectToken(x.SOF);var i=n.parseTypeReference();return n.expectToken(x.EOF),i}var B=function(){function e(e,t){var n="string"===typeof e?new D(e):e;n instanceof D||r(0,"Must provide Source. Received: ".concat(Object(i.a)(n),".")),this._lexer=new R(n),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(x.NAME);return{kind:_.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:_.DOCUMENT,definitions:this.many(x.SOF,this.parseDefinition,x.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(x.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(x.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(x.BRACE_L))return{kind:_.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek(x.NAME)&&(t=this.parseName()),{kind:_.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(x.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(x.PAREN_L,this.parseVariableDefinition,x.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:_.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(x.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(x.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(x.DOLLAR),{kind:_.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:_.SELECTION_SET,selections:this.many(x.BRACE_L,this.parseSelection,x.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(x.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,i=this.parseName();return this.expectOptionalToken(x.COLON)?(e=i,t=this.parseName()):t=i,{kind:_.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(x.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){var t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(x.PAREN_L,t,x.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(x.COLON),{kind:_.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:_.ARGUMENT,name:this.parseName(),value:(this.expectToken(x.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(x.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(x.NAME)?{kind:_.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:_.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case x.BRACKET_L:return this.parseList(e);case x.BRACE_L:return this.parseObject(e);case x.INT:return this._lexer.advance(),{kind:_.INT,value:t.value,loc:this.loc(t)};case x.FLOAT:return this._lexer.advance(),{kind:_.FLOAT,value:t.value,loc:this.loc(t)};case x.STRING:case x.BLOCK_STRING:return this.parseStringLiteral();case x.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:_.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:_.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:_.NULL,loc:this.loc(t)};default:return{kind:_.ENUM,value:t.value,loc:this.loc(t)}}case x.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:_.STRING,value:e.value,block:e.kind===x.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:_.LIST,values:this.any(x.BRACKET_L,(function(){return t.parseValueLiteral(e)}),x.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:_.OBJECT,fields:this.any(x.BRACE_L,(function(){return t.parseObjectField(e)}),x.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken(x.COLON),{kind:_.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(x.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(x.AT),{kind:_.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(x.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(x.BRACKET_R),e={kind:_.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(x.BANG)?{kind:_.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:_.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===x.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(x.STRING)||this.peek(x.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var n=this.parseDirectives(!0),i=this.many(x.BRACE_L,this.parseOperationTypeDefinition,x.BRACE_R);return{kind:_.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(x.COLON);var n=this.parseNamedType();return{kind:_.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),i=this.parseDirectives(!0);return{kind:_.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),a=this.parseFieldsDefinition();return{kind:_.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:a,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e=[];if(this.expectOptionalKeyword("implements")){this.expectOptionalToken(x.AMP);do{var t;e.push(this.parseNamedType())}while(this.expectOptionalToken(x.AMP)||!0===(null===(t=this._options)||void 0===t?void 0:t.allowLegacySDLImplementsInterfaces)&&this.peek(x.NAME))}return e},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek(x.BRACE_L)&&this._lexer.lookahead().kind===x.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(x.BRACE_L,this.parseFieldDefinition,x.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(x.COLON);var r=this.parseTypeReference(),a=this.parseDirectives(!0);return{kind:_.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:a,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(x.PAREN_L,this.parseInputValueDef,x.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(x.COLON);var i,r=this.parseTypeReference();this.expectOptionalToken(x.EQUALS)&&(i=this.parseValueLiteral(!0));var a=this.parseDirectives(!0);return{kind:_.INPUT_VALUE_DEFINITION,description:t,name:n,type:r,defaultValue:i,directives:a,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),a=this.parseFieldsDefinition();return{kind:_.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:a,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:_.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){var e=[];if(this.expectOptionalToken(x.EQUALS)){this.expectOptionalToken(x.PIPE);do{e.push(this.parseNamedType())}while(this.expectOptionalToken(x.PIPE))}return e},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:_.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(x.BRACE_L,this.parseEnumValueDefinition,x.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseDirectives(!0);return{kind:_.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:_.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(x.BRACE_L,this.parseInputValueDef,x.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===x.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany(x.BRACE_L,this.parseOperationTypeDefinition,x.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:_.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:_.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:_.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:_.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:_.UNION_TYPE_EXTENSION,name:t,directives:n,types:i,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:_.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:_.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(x.AT);var n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var a=this.parseDirectiveLocations();return{kind:_.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:a,loc:this.loc(e)}},t.parseDirectiveLocations=function(){this.expectOptionalToken(x.PIPE);var e=[];do{e.push(this.parseDirectiveLocation())}while(this.expectOptionalToken(x.PIPE));return e},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==b[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new A.a(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw m(this._lexer.source,t.start,"Expected ".concat(j(e),", found ").concat(U(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==x.NAME||t.value!==e)throw m(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(U(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===x.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!==e&&void 0!==e?e:this._lexer.token;return m(this._lexer.source,t.start,"Unexpected ".concat(U(t),"."))},t.any=function(e,t,n){this.expectToken(e);for(var i=[];!this.expectOptionalToken(n);)i.push(t.call(this));return i},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}return[]},t.many=function(e,t,n){this.expectToken(e);var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i},e}();function U(e){var t=e.value;return j(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function j(e){return function(e){return e===x.BANG||e===x.DOLLAR||e===x.AMP||e===x.PAREN_L||e===x.PAREN_R||e===x.SPREAD||e===x.COLON||e===x.EQUALS||e===x.AT||e===x.BRACKET_L||e===x.BRACKET_R||e===x.BRACE_L||e===x.PIPE||e===x.BRACE_R}(e)?'"'.concat(e,'"'):e}},981:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var i,r=n(9);!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(i||(i={}));var a=new Map;function s(e){var t;switch(e){case i.Query:t="Query";break;case i.Mutation:t="Mutation";break;case i.Subscription:t="Subscription"}return t}function o(e){var t,n,s=a.get(e);if(s)return s;Object(r.b)(!!e&&!!e.kind,7);var o=e.definitions.filter((function(e){return"FragmentDefinition"===e.kind})),c=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})),u=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation})),p=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"subscription"===e.operation}));Object(r.b)(!o.length||c.length||u.length||p.length,8),Object(r.b)(c.length+u.length+p.length<=1,9),n=c.length?i.Query:i.Mutation,c.length||u.length||(n=i.Subscription);var l=c.length?c:u.length?u:p;Object(r.b)(1===l.length,10);var h=l[0];t=h.variableDefinitions||[];var f={name:h.name&&"Name"===h.name.kind?h.name.value:"data",type:n,variables:t};return a.set(e,f),f}},989:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(9),r=n(65),a=n(981),s=function(){function e(e,t){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=e||{},this.context=t||{}}return e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(e,t){void 0===t&&(t=!1),t&&!Object(r.a)(this.options,e)&&(this.previousOptions=this.options),this.options=e},e.prototype.unmount=function(){this.isMounted=!1},e.prototype.refreshClient=function(){var e=this.options&&this.options.client||this.context&&this.context.client;Object(i.b)(!!e,44);var t=!1;return e!==this.client&&(t=!0,this.client=e,this.cleanup()),{client:this.client,isNew:t}},e.prototype.verifyDocumentType=function(e,t){var n=Object(a.c)(e);Object(a.b)(t),Object(a.b)(n.type);Object(i.b)(n.type===t,45)},e}()}}]);
//# sourceMappingURL=0.f3e33d5a.chunk.js.map
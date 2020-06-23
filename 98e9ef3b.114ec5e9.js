(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),c=(n(0),n(139)),o={id:"htaccess",title:".htaccess\u914d\u7f6e"},i={id:"htaccess",title:".htaccess\u914d\u7f6e",description:"301\u91cd\u5b9a\u5411htaccess\u5199\u6cd5",source:"@site/docs\\htaccess.md",permalink:"/docs/htaccess",editUrl:"https://github.com/mrg123/mrg123.github.io/edit/master/my-website/docs/htaccess.md",sidebar:"someSidebar",next:{title:"vhost\u5e38\u89c1\u914d\u7f6e",permalink:"/docs/apache-vhost"}},p=[{value:"301\u91cd\u5b9a\u5411htaccess\u5199\u6cd5",id:"301\u91cd\u5b9a\u5411htaccess\u5199\u6cd5",children:[]},{value:"apache\u5f00\u542f\u4f2a\u9759\u6001",id:"apache\u5f00\u542f\u4f2a\u9759\u6001",children:[]},{value:"cPanel\u4e2d,\u4f7f\u7528.htaccess\u8bbe\u7f6e\u4e3b\u57df\u540d\u6307\u5411\u5b50\u76ee\u5f55",id:"cpanel\u4e2d\u4f7f\u7528htaccess\u8bbe\u7f6e\u4e3b\u57df\u540d\u6307\u5411\u5b50\u76ee\u5f55",children:[]},{value:"\u5185\u7f51\u5f00\u542f\u7aef\u53e3,\u65b9\u4fbf\u5176\u4ed6\u7535\u8111\u8bbf\u95ee\u5f00\u53d1\u7535\u8111",id:"\u5185\u7f51\u5f00\u542f\u7aef\u53e3\u65b9\u4fbf\u5176\u4ed6\u7535\u8111\u8bbf\u95ee\u5f00\u53d1\u7535\u8111",children:[]}],b={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"301\u91cd\u5b9a\u5411htaccess\u5199\u6cd5"},"301\u91cd\u5b9a\u5411htaccess\u5199\u6cd5"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-apache"}),'RewriteCond %{HTTP_HOST} ^mrg123\\.com$\nRewriteRule ^/?$ "https\\:\\/\\/mrg123\\.com\\/" [R=301,L]\n')),Object(c.b)("p",null,"/.htaccess\u672b\u5c3e\u6dfb\u52a0"),Object(c.b)("p",null,"301\u91cd\u5b9a\u5411\u628a\u6765\u81ea\u57df\u540dmrg123.com\u7684\u8bf7\u6c42\u91cd\u5b9a\u5411\u5230",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.mrg123.com%E4%B8%8A.%E4%B9%9F%E5%8F%AF%E4%BB%A5%E5%B0%86http%E7%9A%84%E8%AF%B7%E6%B1%82%E5%85%A8%E9%83%A8%E8%BD%AC%E5%88%B0https,%E9%9B%86%E4%B8%AD%E5%9F%9F%E5%90%8D%E7%9A%84%E6%9D%83%E9%87%8D,%E6%9C%89%E7%BD%91%E7%AB%99seo,%E6%8F%90%E5%8D%87%E5%9F%9F%E5%90%8D%E6%9D%83%E9%87%8D"}),"www.mrg123.com\u4e0a.\u4e5f\u53ef\u4ee5\u5c06http\u7684\u8bf7\u6c42\u5168\u90e8\u8f6c\u5230https,\u96c6\u4e2d\u57df\u540d\u7684\u6743\u91cd,\u6709\u7f51\u7ad9seo,\u63d0\u5347\u57df\u540d\u6743\u91cd"),"."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4e86\u89e3301\u7684\u66f4\u591a\u5199\u6cd5 ",Object(c.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-1"}),Object(c.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")))),Object(c.b)("h2",{id:"apache\u5f00\u542f\u4f2a\u9759\u6001"},"apache\u5f00\u542f\u4f2a\u9759\u6001"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-apache"}),"RewriteEngine On\nRewriteBase /\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule ^(.+)$ index.php [QSA,L]\n")),Object(c.b)("p",null,"/.htaccess\u672b\u5c3e\u6dfb\u52a0"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7b80\u5355\u7684php\u8def\u7531 ",Object(c.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-2"}),Object(c.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")))),Object(c.b)("h2",{id:"cpanel\u4e2d\u4f7f\u7528htaccess\u8bbe\u7f6e\u4e3b\u57df\u540d\u6307\u5411\u5b50\u76ee\u5f55"},"cPanel\u4e2d,\u4f7f\u7528.htaccess\u8bbe\u7f6e\u4e3b\u57df\u540d\u6307\u5411\u5b50\u76ee\u5f55"),Object(c.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3b\u57df\u540d\u53ea\u80fd\u6307\u5411public_html\u76ee\u5f55,\u8fd9\u65f6\u5019\u518d\u6dfb\u52a0\u5176\u4ed6\u5b50\u57df\u540d,\u6216\u9644\u52a0\u57df\u540d,\u6574\u4e2a\u7f51\u7ad9\u76ee\u5f55\u7ed3\u6784\u5c06\u76f8\u5f53\u6df7\u4e71."),Object(c.b)("p",null,"\u5728/public_html/\u521b\u5efa.htaccess,\u5229\u7528apache\u7684rewrite\u5c06\u57df\u540d\u6307\u5411\u5b50\u76ee\u5f55,.htaccess\u5185\u5bb9\u5982\u4e0b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"RewriteEngine on\nRewriteCond %{HTTP_HOST} ^(www.)?example.com$\nRewriteCond %{REQUEST_URI} !^/blog/\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule ^(.*)$ /blog/$1\nRewriteCond %{HTTP_HOST} ^(www.)?example.com$\nRewriteRule ^(/)?$ blog/index.php [L]\n")),Object(c.b)("h2",{id:"\u5185\u7f51\u5f00\u542f\u7aef\u53e3\u65b9\u4fbf\u5176\u4ed6\u7535\u8111\u8bbf\u95ee\u5f00\u53d1\u7535\u8111"},"\u5185\u7f51\u5f00\u542f\u7aef\u53e3,\u65b9\u4fbf\u5176\u4ed6\u7535\u8111\u8bbf\u95ee\u5f00\u53d1\u7535\u8111"),Object(c.b)("p",null,"Listen 8044\nListen 127\nListen 128"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"<VirtualHost _default_:127>\n")),Object(c.b)("div",{className:"footnotes"},Object(c.b)("hr",{parentName:"div"}),Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",Object(r.a)({parentName:"ol"},{id:"fn-1"}),Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.internetmarketingninjas.com/blog/search-engine-optimization/301-redirects/"}),"https://www.internetmarketingninjas.com/blog/search-engine-optimization/301-redirects/"),' "301-redirects"',Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(c.b)("li",Object(r.a)({parentName:"ol"},{id:"fn-2"}),Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.taniarascia.com/the-simplest-php-router/"}),"https://www.taniarascia.com/the-simplest-php-router/"),' "the-simplest-php-router"',Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")))))}s.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(n),m=r,h=l["".concat(o,".").concat(m)]||l[m]||u[m]||c;return n?a.a.createElement(h,i(i({ref:t},b),{},{components:n})):a.a.createElement(h,i({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
(this["webpackJsonppanier-achats"]=this["webpackJsonppanier-achats"]||[]).push([[0],{31:function(e){e.exports=JSON.parse('[{"id":"prd0001","nom":"T-shirt \xe0 col rond","prix":10.99},{"id":"prd0002","nom":"T-shirt \xe0 col V","prix":12.95},{"id":"prd0003","nom":"Un autre T-shirt","prix":14.5},{"id":"prd0004","nom":"Chandail pour femme","prix":17.67},{"id":"prd0005","nom":"Chandail \xe0 manche longue","prix":24.95},{"id":"prd0006","nom":"J\'ai pu d\'id\xe9e","prix":100}]')},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(0),r=c.n(s),i=c(18),a=c.n(i),o=c(14),j=(c(39),c(6)),l=(c(40),c(28)),d=c.n(l),u=c(70);c(41);function b(e){var t=Object(j.a)(e.etatPanier,2),c=t[0],s=(t[1],function(e){var t={},c=Object.values(e);t.nbArticles=c.length,t.qteArticles=c.reduce((function(e,t){return t.qte+e}),0);var n=c.reduce((function(e,t){return t.prix*t.qte+e}),0);t.st=n.toFixed(2),console.log(n);var s=.05*n;t.tps=s.toFixed(2);var r=.09975*n;return t.tvq=s.toFixed(2),t.total=(n+s+r).toFixed(2),t}(c));return Object(n.jsxs)("div",{className:"SommairePanier"+(e.cacher?" cacher":""),children:[Object(n.jsxs)("span",{className:"nbArticles",children:["Articles diff\xe9rents : ",s.nbArticles]}),Object(n.jsxs)("span",{className:"qteArticles",children:["Articles total : ",s.qteArticles]}),Object(n.jsxs)("span",{className:"sousTotal",children:["Sous-total : ",s.st]}),Object(n.jsxs)("span",{className:"tps",children:["TPS : ",s.tps]}),Object(n.jsxs)("span",{className:"tvq",children:["TVQ : ",s.tvq]}),Object(n.jsxs)("span",{className:"total",children:["Total : ",s.total]})]})}function x(e){var t=Object(s.useState)(!0),c=Object(j.a)(t,2),r=c[0],i=c[1],a=Object(j.a)(e.etatPanier,1)[0];return Object(n.jsxs)("header",{className:"Entete",children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.b,{to:"/",children:"Logo"})}),Object(n.jsxs)("ul",{className:"navPrincipale",children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/nos-produits",children:"Produits"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/a-propos-de-magasin",children:"\xc0 propos de nous"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/contact",children:"Contactez-nous"})})]}),Object(n.jsxs)("ul",{className:"navUtil",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(u.a,{onClick:function(){return i(!r)},badgeContent:Object.values(a).reduce((function(e,t){return e+t.qte}),0),color:"primary",children:Object(n.jsx)(d.a,{})}),Object(n.jsx)(b,{cacher:r,etatPanier:e.etatPanier})]}),Object(n.jsx)("li",{children:"Mon compte"})]})]})}function O(){return Object(n.jsxs)("div",{className:"Accueil",children:[Object(n.jsx)("h2",{children:"Magasin"}),Object(n.jsx)("p",{children:"Page d'Accueil en construction"})]})}function p(){return Object(n.jsxs)("div",{className:"Apropos",children:[Object(n.jsx)("h2",{children:"\xc0 propos de nous"}),Object(n.jsx)("p",{children:"bla bla bla..."})]})}function h(){return Object(n.jsxs)("div",{className:"Contact",children:[Object(n.jsx)("h2",{children:"Nous contacter"}),Object(n.jsx)("p",{children:"Formulaire de contact \xe0 venir ..."})]})}c(51);function m(e){var t=(new Date).getFullYear();return Object(n.jsxs)("footer",{children:["\xa9 ",e.avecNom," - ",t," - ",e.phrase]})}c(52);var f=c(29);c(53);function v(e){var t=Object(s.useState)(0),c=Object(j.a)(t,2),r=c[0],i=c[1],a=Object(s.useState)(e.etiquette),o=Object(j.a)(a,2),l=o[0],d=o[1];return Object(n.jsx)(u.a,{badgeContent:r,color:"secondary",children:Object(n.jsx)("button",{onClick:function(t){e.onClick(),i(r+1),d(e.etiquetteClick),t.target.classList.add("rouge")},className:"BtnAjoutPanier",children:l})})}c(54);var N=c(30),g=c.n(N);function P(e){return Object(n.jsxs)("li",{className:"Produit",children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"images-produits/"+e.id+".webp",alt:e.nom})}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h3",{children:e.nom}),Object(n.jsxs)("p",{className:"prix",children:[e.prix," $CA"]}),Object(n.jsx)(v,{onClick:function(){var t=Object(j.a)(e.etatPanier,2),c=t[0],n=t[1];c[e.id]?c[e.id].qte++:c[e.id]={prix:e.prix,qte:1},n(Object(f.a)({},c)),console.log(c)},etiquette:"Ajouter au panier",etiquetteClick:Object(n.jsx)(g.a,{})})]})]})}var q=c(31);var A=function(e){return Object(n.jsxs)("div",{className:"ListeProduits",children:[Object(n.jsx)("h2",{children:"Produits disponibles"}),Object(n.jsx)("ul",{children:q.map((function(t){return Object(n.jsx)(P,{etatPanier:e.etatPanier,id:t.id,nom:t.nom,prix:t.prix},t.id)}))})]})};c(55);var C=c(3);function S(e){var t=function(e,t){var c=Object(s.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),n=Object(j.a)(c,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(r))}),[r,t]),[r,i]}({},"panier-pvr");return Object(n.jsxs)("div",{className:"Page",children:[Object(n.jsx)(x,{etatPanier:t}),Object(n.jsx)("section",{className:"contenuPrincipal",children:Object(n.jsxs)(C.c,{children:[Object(n.jsx)(C.a,{path:"/",component:O,exact:!0}),Object(n.jsx)(C.a,{path:"/nos-produits",exact:!0,children:Object(n.jsx)(A,{etatPanier:t})}),Object(n.jsx)(C.a,{path:"/a-propos-de-magasin",component:p,exact:!0}),Object(n.jsx)(C.a,{path:"/contact",component:h,exact:!0})]})}),Object(n.jsx)(m,{avecNom:"Tim",phrase:"Tous droits r\xe9serv\xe9s."})]})}a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{basename:"/panier-achats",children:Object(n.jsx)(S,{})})}),document.getElementById("racine"))}},[[57,1,2]]]);
//# sourceMappingURL=main.6ab7b3ca.chunk.js.map
(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=n(49),s=n(151),d=n(38),p=n(110),j=n(142),h=n(143),x=n(153),l=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},b=n(41),u=n.n(b),m=n(111),g=n(6),O=Object(m.a)((function(){return{cardContainer:{backgroundColor:"lightgray",display:"flex",paddingTop:"25px",paddingLeft:"25px",paddingRight:"50px",flexDirection:"row"},whosThatPokemon:{marginTop:"15px",height:"150px",padding:"5px"},pokemonImage:{paddingLeft:"50px",marginBottom:"20px"},button:{backgroundColor:"firebrick"},pokemonInfo:{border:"solid 7px",borderBlockStyle:"groove",borderRadius:"5px",marginLeft:"80px",height:"170px",padding:"50px",backgroundColor:"honeydew"}}})),f=function(e){var t=O(),n=e.match,c=e.history,r=n.params.pokemonId,i=Object(a.useState)(void 0),o=Object(d.a)(i,2),s=o[0],b=o[1];Object(a.useEffect)((function(){u.a.get("https://pokeapi.co/api/v2/pokemon/".concat(r,"/")).then((function(e){var t=e.data;b(t)})).catch((function(e){b(!1)}))}),[r]);return Object(g.jsxs)(g.Fragment,{children:[void 0===s&&Object(g.jsx)(h.a,{}),void 0!==s&&s&&function(e){var n=e.name,a=e.id,c=e.species,r=e.height,i=e.weight,o=e.types,s=e.sprites,d="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(a,".svg"),h=s.front_default;return Object(g.jsxs)("div",{className:t.cardContainer,children:[Object(g.jsxs)(p.a,{variant:"h3",className:t.whosThatPokemon,children:["".concat(a,".")," ",l(n),Object(g.jsx)("img",{src:h,alt:""})]}),Object(g.jsx)("img",{style:{width:"300px",height:"300px"},className:t.pokemonImage,src:d,alt:""}),Object(g.jsxs)("div",{className:t.pokemonInfo,children:[Object(g.jsx)(p.a,{variant:"h5",children:"Stats:"}),Object(g.jsxs)(p.a,{children:["Species: ",Object(g.jsxs)(j.a,{href:c.url,children:[l(c.name)," "]})]}),Object(g.jsxs)(p.a,{children:["Height: ",r," "]}),Object(g.jsxs)(p.a,{children:["Weight: ",i," "]}),Object(g.jsx)(p.a,{variant:"h6",children:" Types:"}),o.map((function(e){var t=e.type.name;return Object(g.jsxs)(p.a,{children:[" ","".concat(l(t))]},t)}))]})]})}(s),!1===s&&Object(g.jsx)(p.a,{children:" Pokemon not found"}),void 0!==s&&Object(g.jsx)(x.a,{variant:"contained",onClick:function(){return c.push("/")},className:t.button,children:"back to pokedex"})]})},k=n(145),v=n(146),C=n(147),y=n(148),w=n(149),I=n(150),N=n(152),S=n(144),B=n(15),P=n(65),T=n.n(P),L=Object(S.a)((function(e){return{pokedexContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},appBar:{backgroundColor:"indianred"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},searchContainer:{display:"flex",margin:"auto",backgroundColor:Object(B.a)(e.palette.common.white,.25),paddingLeft:"20px",paddingRight:"20px",marginTop:"5px",marginBottom:"5px",border:"1px solid black",borderRadius:"5px",paddingBottom:"2px"},searchIcon:{alignSelf:"flex-end",marginBottom:"5px"},searchInput:{width:"200px",margin:"5px"}}})),F=function(e){var t=L(),n=e.history,c=Object(a.useState)({}),r=Object(d.a)(c,2),i=r[0],o=r[1],s=Object(a.useState)(""),j=Object(d.a)(s,2),x=j[0],b=j[1];Object(a.useEffect)((function(){u.a.get("https://pokeapi.co/api/v2/pokemon?limit=807").then((function(e){var t=e.data.results,n={};t.forEach((function(e,t){n[t+1]={id:t+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png")}})),o(n)}))}),[]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w.a,{position:"static",className:t.appBar,children:Object(g.jsx)(I.a,{children:Object(g.jsxs)("div",{className:t.searchContainer,children:[Object(g.jsx)(T.a,{className:t.searchIcon}),Object(g.jsx)(N.a,{className:t.searchInput,onChange:function(e){b(e.target.value)},label:"Search",variant:"standard"})]})})}),i?Object(g.jsx)(k.a,{container:!0,spacing:2,className:t.pokedexContainer,children:Object.keys(i).map((function(e){return i[e].name.includes(x)&&function(e){var a=i[e],c=a.id,r=a.name,o=a.sprite;return Object(g.jsx)(k.a,{item:!0,xs:4,children:Object(g.jsxs)(v.a,{onClick:function(){return n.push("/".concat(c))},children:[Object(g.jsx)(C.a,{className:t.cardMedia,image:o,style:{width:"130px",height:"130px"}}),Object(g.jsx)(y.a,{className:t.cardContent,children:Object(g.jsx)(p.a,{children:"".concat(c,". ").concat(l(r))})})]})},e)}(e)}))}):Object(g.jsx)(h.a,{})]})},R=function(){return Object(g.jsxs)(s.c,{children:[Object(g.jsx)(s.a,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(F,Object(o.a)({},e))}}),Object(g.jsx)(s.a,{exact:!0,path:"/:pokemonId",render:function(e){return Object(g.jsx)(f,Object(o.a)({},e))}})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},E=n(19),M=Object(E.a)();i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(s.b,{history:M,children:Object(g.jsx)(R,{})})}),document.getElementById("root")),A()}},[[108,1,2]]]);
//# sourceMappingURL=main.3455466d.chunk.js.map
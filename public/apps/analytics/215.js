"use strict";(self.webpackChunk_wpbones_wp_bannerize_pro=self.webpackChunk_wpbones_wp_bannerize_pro||[]).push([[215],{139:(e,t,a)=>{a.d(t,{r:()=>m});var n=a(1609),l=a(8149),r=a(2538),c=a(4952),o=a(8125),i=a(2648),s=a(792);function m({banners:e,onChange:t}){const{data:a,error:m,isLoading:d,isValidating:u,mutate:h}=(0,i.Ay)("wp_bannerize_get_banners",s.b),p=(0,n.createElement)(o.A,{style:{width:(0,l.D)(16),height:(0,l.D)(16)}}),b=a?a.map((e=>({value:`${e.ID}`,label:e.post_title}))):[];return(0,n.createElement)(r.K,{comboboxProps:{shadow:"md"},leftSectionPointerEvents:"none",leftSection:d||!a?(0,n.createElement)(c.a,{size:"xs"}):p,size:"xs",disabled:d||!a,placeholder:"Pick one or more Banners...",data:b,value:e,onChange:e=>{t(e)},searchable:!0})}},9619:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(1609),l=a(8149),r=a(2538),c=a(4952),o=a(8125),i=a(2648),s=a(792);function m({campaigns:e,onChange:t}){const{data:a,error:m,isLoading:d,isValidating:u,mutate:h}=(0,i.Ay)("wp_bannerize_get_campaigns",s.b),p=(0,n.createElement)(o.A,{style:{width:(0,l.D)(16),height:(0,l.D)(16)}}),b=a?"object"!=typeof a||Array.isArray(a)?a.map((e=>({value:`${e.term_id}`,label:e.name}))):Object.values(a).map((e=>({value:`${e.term_id}`,label:e.name}))):[];return(0,n.createElement)(r.K,{comboboxProps:{shadow:"md"},leftSectionPointerEvents:"none",leftSection:d||!a?(0,n.createElement)(c.a,{size:"xs"}):p,size:"xs",disabled:d||!a,placeholder:"Pick one or more Campaigns...",data:b,value:e,onChange:e=>{t(e)},searchable:!0})}},4215:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(1609),l=a(9019),r=a(7673),c=a(5801),o=a(1101),i=a(4034),s=a(3976),m=a(4999),d=a(1670),u=a(4952),h=a(4118),p=a(8149),b=a(6766),E=a(5133),g=a(9428),y=a(9718),w=a(1203),f=a(9842),_=a(3306),v=a(1387),A=a(3535),C=a(6265),x=a(2033),S=a(4986),D=a(4353),$=a.n(D),k=a(2648),z=a(792),L=a(1521),j=a(139),Y=a(9619);function I({analytic:e="clicks"}){const t=(0,o.xd)(),[a,D]=(0,n.useState)("bar"),[I,P]=(0,n.useState)("day"),[B,O]=(0,n.useState)(),[M,R]=(0,n.useState)(),[T,U]=(0,n.useState)(),[W,K]=(0,n.useState)([]),[V,F]=(0,n.useState)([]),{data:Z,error:Q,isLoading:q,isValidating:G,mutate:H}=(0,k.Ay)(T,(async()=>(0,z.b)(M,{accuracy:I,campaigns:W,banners:V}))),J={impressions:"Impressions",clicks:"Clicks",ctr:"CTR"}[e],N={impressions:"blue.6",clicks:"teal.6",ctr:"red.6"}[e],X={impressions:(0,n.createElement)(g.A,{style:{height:18}}),clicks:(0,n.createElement)(y.A,{style:{height:18}}),ctr:(0,n.createElement)(w.A,{style:{height:18}})}[e];return(0,n.useEffect)((()=>{R(`wp_bannerize_get_${e}_trends`),U(`wp_bannerize_get_${e}_trends${I}${W.join(",")}${V.join(",")}`)}),[e,I,W,V]),(0,n.useEffect)((()=>{if(Z){const t=Z.map((t=>({date:"day"===I?$()(t.date).format("MMM D, YYYY"):$()(t.date).format("MMM YYYY"),[e]:+t[e]})));O(t)}}),[Z]),(0,n.createElement)(i.L,{mt:16,radius:16,legend:(0,n.createElement)(s.E,{size:"lg",color:N},(0,n.createElement)(m.Y,{gap:4},X,J))},(0,n.createElement)(l.B,{mt:16,mih:300},q||!B?(0,n.createElement)(d.o,{h:320},(0,n.createElement)(u.a,null)):null,!q&&B&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(m.Y,{grow:!0},(0,n.createElement)(m.Y,null,(0,n.createElement)(h.I,{radius:"xl",size:"xs",data:[{value:"line",label:(0,n.createElement)(d.o,{style:{gap:10}},(0,n.createElement)(f.A,{style:{width:(0,p.D)(16),height:(0,p.D)(16),color:t.colors.blue[6]}}),(0,n.createElement)("span",null,"Line"))},{value:"bar",label:(0,n.createElement)(d.o,{style:{gap:10}},(0,n.createElement)(_.A,{style:{width:(0,p.D)(16),height:(0,p.D)(16),color:t.colors.blue[6]}}),(0,n.createElement)("span",null,"Bar"))}],value:a,onChange:D}),(0,n.createElement)(h.I,{radius:"xl",size:"xs",value:I,onChange:P,data:[{value:"day",label:(0,n.createElement)(d.o,{style:{gap:10}},(0,n.createElement)(v.A,{style:{width:(0,p.D)(16),height:(0,p.D)(16),color:t.colors.blue[6]}}),(0,n.createElement)("span",null,"Day"))},{value:"month",label:(0,n.createElement)(d.o,{style:{gap:10}},(0,n.createElement)(A.A,{style:{width:(0,p.D)(16),height:(0,p.D)(16),color:t.colors.blue[6]}}),(0,n.createElement)("span",null,"Month"))}]}),(0,n.createElement)(b.W,{shadow:"md",withArrow:!0},(0,n.createElement)(b.W.Target,null,(0,n.createElement)(E.$,{variant:"outline",size:"xs",rightSection:(0,n.createElement)(C.A,{style:{width:14}})},"Tools")),(0,n.createElement)(b.W.Dropdown,null,(0,n.createElement)(b.W.Label,null,"Charts"),(0,n.createElement)(b.W.Item,{onClick:async()=>{(0,L.B)(B,e)},leftSection:(0,n.createElement)(x.A,{width:18,color:t.colors.blue[6]})},"Export CSV"),(0,n.createElement)(b.W.Item,{leftSection:(0,n.createElement)(S.A,{width:18,color:t.colors.blue[6]}),onClick:async()=>{await H()}},"Refresh")))),(0,n.createElement)(Y.Z,{campaigns:W,onChange:K}),(0,n.createElement)(j.r,{banners:V,onChange:F})),(0,n.createElement)(n.Fragment,null,"line"===a&&(0,n.createElement)(r.Q,{h:300,data:B,dataKey:"date",series:[{name:e,color:N}],xAxisLabel:"Date",yAxisLabel:"Amount",unit:"ctr"===e?"%":void 0,curveType:"linear"}),"bar"===a&&(0,n.createElement)(c.E,{h:300,data:B,dataKey:"date",series:[{name:e,color:N}],unit:"ctr"===e?"%":void 0,curveType:"natural"})))))}function P(){return(0,n.createElement)(l.B,null,(0,n.createElement)(I,{analytic:"impressions"}),(0,n.createElement)(I,{analytic:"clicks"}),(0,n.createElement)(I,{analytic:"ctr"}))}},1521:(e,t,a)=>{a.d(t,{B:()=>n,y:()=>l});const n=(e,t)=>{t=t?`${t}-${(new Date).toISOString().slice(0,10)}`:`bannerize-export-${(new Date).toISOString().slice(0,10)}`;const a=(e=>{const t=Object.keys(e[0]),a=[];return a.push(t.join(",")),e.forEach((e=>{const n=t.map((t=>`"${(""+e[t]).replace(/"/g,'\\"')}"`));a.push(n.join(","))})),a.join("\n")})(e),n=new Blob([a],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a"),r=URL.createObjectURL(n);l.setAttribute("href",r),l.setAttribute("download",`${t}.csv`),l.style.visibility="hidden",document.body.appendChild(l),l.click(),document.body.removeChild(l)},l=(e="csv",t="clicks")=>{fetch(window.ajaxurl,{method:"POST",body:new URLSearchParams({action:`wp_bannerize_export_${e}_${t}`,nonce:WPBannerize.nonce}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{if(t.ok)return t.blob();throw new Error(`Error exporting ${e.toLocaleUpperCase()}`)})).then((a=>{const n=`bannerize-${t}-export-${(new Date).toISOString().slice(0,10)}.${e}`,l=document.createElement("a"),r=URL.createObjectURL(a);l.setAttribute("href",r),l.setAttribute("download",n),document.body.appendChild(l),l.click(),document.body.removeChild(l)})).catch((t=>console.error(`Download ${e.toLocaleUpperCase()} failed:`,t)))}}}]);
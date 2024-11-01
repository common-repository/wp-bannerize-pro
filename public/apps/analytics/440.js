"use strict";(self.webpackChunk_wpbones_wp_bannerize_pro=self.webpackChunk_wpbones_wp_bannerize_pro||[]).push([[440],{8440:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(1609),r=n(1101),o=n(7826),c=n(3073),l=n(2498),i=n(1670),s=n(4952),d=n(4999),m=n(6766),p=n(5133),u=n(3976),h=n(54),b=n(2809),g=n(6945),E=n(8335),w=n(9543),y=n(6265),f=n(2033),$=n(5457),C=n(7650),_=n(4225),A=n(4986),S=n(7814),z=n(2648),v=n(792),k=n(1521),x=n(139),P=n(5447),D=n(3485);function j({analytic:e="clicks",selectedRecords:t,onBulkAction:n}){const[r,o]=(0,a.useState)(""),c=()=>{n(r,e,t)};return(0,a.createElement)(d.Y,null,(0,a.createElement)(P.l,{size:"xs",disabled:0===t.length,placeholder:"Bulk Actions",data:["Delete"],value:r,clearable:!0,onChange:o,leftSection:(0,a.createElement)(C.A,{size:14}),inputContainer:e=>(0,a.createElement)(d.Y,{align:"flex-start"},e,(0,a.createElement)(p.$,{rightSection:(0,a.createElement)(D.A,{size:14}),onClick:c,disabled:0===t.length||!r||0===r?.length,size:"xs"},"Apply"))}))}var B=n(9619);const R=[15,20,30];function L({analytic:e="clicks"}){(0,g.U)("(pointer: coarse)");const t=(0,r.xd)(),n=window.WPBannerize.manage_analytics.length>0,[P,D]=(0,a.useState)(1),[L,O]=(0,a.useState)(R[1]),[T,I]=(0,a.useState)([]),[W,U]=(0,a.useState)({columnAccessor:"date",direction:"desc"}),[Y,M]=(0,a.useState)([]),[Q,V]=(0,a.useState)([]),F="clicks"===e?"Clicks":"Impressions",K=`wp_bannerize_get_${e}`,Z=`wp_bannerize_get_${e}${W.columnAccessor}${W.direction}${L}${P}${Y.join(",")}${Q.join(",")}`,q=`${W.columnAccessor} ${W.direction}`,{data:H,error:G,isLoading:J,isValidating:N,mutate:X}=(0,z.Ay)(Z,(async()=>(0,v.b)(K,{page:P,orderBy:q,pageSize:L,page:P,campaigns:Y,banners:Q})));return(0,a.useEffect)((()=>{D(1)}),[L]),J||!H?(0,a.createElement)(i.o,null,(0,a.createElement)(s.a,null)):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(d.Y,{mt:8,grow:!0},n&&(0,a.createElement)(j,{analytic:e,selectedRecords:T,onBulkAction:async(e,t)=>{if("Delete"===e){const e=T.map((e=>`Date: ${e.date}\nBanner ID: ${e.banner_id}\nTitle: ${e.title}\nCampaigns: ${e.campaigns}`)).join("\n\n");E.jQ.openConfirmModal({title:"Please confirm your action",centered:!0,children:(0,a.createElement)(o.E,{size:"sm"},"Are your sure you want to delete the selected records",(0,a.createElement)(l.F,{h:250},(0,a.createElement)(c.C,{block:!0},e)),"This action cannot be undone."),labels:{confirm:"Confirm",cancel:"Cancel"},confirmProps:{color:"red"},onConfirm:async()=>{await(0,v.b)(`wp_bannerize_delete_${t}`,{id:T.map((e=>e.id))}),I([]),X(),w.$e.show({withBorder:!0,color:"orange",title:`${F} Deleted`,message:`The ${F} have been deleted.`})}})}}}),(0,a.createElement)(d.Y,null,(0,a.createElement)(m.W,{shadow:"md",withArrow:!0},(0,a.createElement)(m.W.Target,null,(0,a.createElement)(p.$,{size:"xs",rightSection:(0,a.createElement)(y.A,{style:{width:14}})},"Export")),(0,a.createElement)(m.W.Dropdown,null,(0,a.createElement)(m.W.Item,{onClick:async()=>{(0,k.y)("csv",e)},leftSection:(0,a.createElement)(f.A,{width:18,color:t.colors.blue[6]})},"Export CSV"),(0,a.createElement)(m.W.Item,{onClick:async()=>{(0,k.y)("sql",e)},leftSection:(0,a.createElement)($.A,{width:18,color:t.colors.blue[6]})},"Export SQL")))),(0,a.createElement)(B.Z,{campaigns:Y,onChange:M}),(0,a.createElement)(x.r,{banners:Q,onChange:V})),(0,a.createElement)(S.bQ,{mt:16,striped:!0,pinLastColumn:!0,scrollAreaProps:{type:"scroll"},height:"calc(100vh - 264px)",fetching:J||N,borderRadius:"md",withTableBorder:!0,withColumnBorders:!0,highlightOnHover:!0,records:H.items,selectedRecords:n?T:null,onSelectedRecordsChange:I,totalRecords:+H.total,recordsPerPage:L,page:P,onPageChange:e=>D(e),recordsPerPageOptions:R,onRecordsPerPageChange:O,sortStatus:W,onSortStatusChange:U,columns:[{accessor:"date",sortable:!0,noWrap:!0},{accessor:"banner_id",sortable:!0},{accessor:"title",noWrap:!0},{accessor:"campaigns",render:e=>(0,a.createElement)(d.Y,{gap:2},e.campaigns.split(",").map(((e,t)=>(0,a.createElement)(u.E,{color:"violet."+(t+3)%9,size:"xs",key:e},e))))},{accessor:"referrer",sortable:!0,ellipsis:!0,width:"auto",render:e=>(0,a.createElement)(o.E,{maw:400,size:"sm",c:"dimmed",truncate:!0},e.referrer)},{accessor:"ip",sortable:!0},{accessor:"actions",width:50,textAlign:"center",title:(0,a.createElement)(C.A,{style:{width:16,color:t.colors.blue[5]}}),render:t=>(0,a.createElement)(h.s,null,(0,a.createElement)(b.M,{mx:"auto",disabled:!n,title:n?`Delete ${F}`:"You do not have permission to delete records",variant:"subtle",color:"red",onClick:n=>{n.stopPropagation(),(async t=>{const n=`Date: ${t.date}\nBanner ID: ${t.banner_id}\nTitle: ${t.title}\nCampaigns: ${t.campaigns}`;E.jQ.openConfirmModal({title:"Please confirm your action",centered:!0,children:(0,a.createElement)(o.E,{size:"sm"},"Are your sure you want to delete the record",(0,a.createElement)(c.C,{block:!0},n),"This action cannot be undone."),labels:{confirm:"Confirm",cancel:"Cancel"},confirmProps:{color:"red"},onConfirm:async()=>{await(0,v.b)(`wp_bannerize_delete_${e}`,{id:t.id}),X(),w.$e.show({withBorder:!0,color:"orange",title:`${F} Deleted`,message:`The ${F} has been deleted.`})}})})(t)}},(0,a.createElement)(_.A,{size:18}))),footer:(0,a.createElement)(d.Y,{justify:"center"},(0,a.createElement)(b.M,{variant:"transparent",title:"Refresh",onClick:async()=>{await X()}},(0,a.createElement)(A.A,null)))}]}))}},139:(e,t,n)=>{n.d(t,{r:()=>d});var a=n(1609),r=n(8149),o=n(2538),c=n(4952),l=n(8125),i=n(2648),s=n(792);function d({banners:e,onChange:t}){const{data:n,error:d,isLoading:m,isValidating:p,mutate:u}=(0,i.Ay)("wp_bannerize_get_banners",s.b),h=(0,a.createElement)(l.A,{style:{width:(0,r.D)(16),height:(0,r.D)(16)}}),b=n?n.map((e=>({value:`${e.ID}`,label:e.post_title}))):[];return(0,a.createElement)(o.K,{comboboxProps:{shadow:"md"},leftSectionPointerEvents:"none",leftSection:m||!n?(0,a.createElement)(c.a,{size:"xs"}):h,size:"xs",disabled:m||!n,placeholder:"Pick one or more Banners...",data:b,value:e,onChange:e=>{t(e)},searchable:!0})}},9619:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(1609),r=n(8149),o=n(2538),c=n(4952),l=n(8125),i=n(2648),s=n(792);function d({campaigns:e,onChange:t}){const{data:n,error:d,isLoading:m,isValidating:p,mutate:u}=(0,i.Ay)("wp_bannerize_get_campaigns",s.b),h=(0,a.createElement)(l.A,{style:{width:(0,r.D)(16),height:(0,r.D)(16)}}),b=n?"object"!=typeof n||Array.isArray(n)?n.map((e=>({value:`${e.term_id}`,label:e.name}))):Object.values(n).map((e=>({value:`${e.term_id}`,label:e.name}))):[];return(0,a.createElement)(o.K,{comboboxProps:{shadow:"md"},leftSectionPointerEvents:"none",leftSection:m||!n?(0,a.createElement)(c.a,{size:"xs"}):h,size:"xs",disabled:m||!n,placeholder:"Pick one or more Campaigns...",data:b,value:e,onChange:e=>{t(e)},searchable:!0})}},1521:(e,t,n)=>{n.d(t,{B:()=>a,y:()=>r});const a=(e,t)=>{t=t?`${t}-${(new Date).toISOString().slice(0,10)}`:`bannerize-export-${(new Date).toISOString().slice(0,10)}`;const n=(e=>{const t=Object.keys(e[0]),n=[];return n.push(t.join(",")),e.forEach((e=>{const a=t.map((t=>`"${(""+e[t]).replace(/"/g,'\\"')}"`));n.push(a.join(","))})),n.join("\n")})(e),a=new Blob([n],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a"),o=URL.createObjectURL(a);r.setAttribute("href",o),r.setAttribute("download",`${t}.csv`),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)},r=(e="csv",t="clicks")=>{fetch(window.ajaxurl,{method:"POST",body:new URLSearchParams({action:`wp_bannerize_export_${e}_${t}`,nonce:WPBannerize.nonce}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{if(t.ok)return t.blob();throw new Error(`Error exporting ${e.toLocaleUpperCase()}`)})).then((n=>{const a=`bannerize-${t}-export-${(new Date).toISOString().slice(0,10)}.${e}`,r=document.createElement("a"),o=URL.createObjectURL(n);r.setAttribute("href",o),r.setAttribute("download",a),document.body.appendChild(r),r.click(),document.body.removeChild(r)})).catch((t=>console.error(`Download ${e.toLocaleUpperCase()} failed:`,t)))}}}]);
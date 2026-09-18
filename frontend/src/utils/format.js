export const fcfa=v=>`${new Intl.NumberFormat('fr-FR',{maximumFractionDigits:0}).format(Number(v)||0)} FCFA`;
export const dateFR=v=>new Intl.DateTimeFormat('fr-FR',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(v));
export const monthName=(m,y)=>new Intl.DateTimeFormat('fr-FR',{month:'long',year:'numeric'}).format(new Date(y,m-1,1));

var m=Object.defineProperty;var b=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var c=(t,e,a)=>(b(t,typeof e!="symbol"?e+"":e,a),a);import"./style.c0ed6924.js";import{T as u}from"./tarefa.repository.local-storage.25265096.js";class h{constructor(e){c(this,"tabela");this.repositorioTarefas=e,this.configurarElementos(),this.atualizarTabela()}configurarElementos(){this.tabela=document.getElementById("tabela")}atualizarTabela(){const e=this.repositorioTarefas.selecionarTodos();let a=this.tabela.getElementsByTagName("tbody")[0];e.forEach(r=>{const l=a.insertRow();Object.values(r).forEach(o=>{const d=l.insertCell();d.innerText=o});const s=l.insertCell(),n=document.createElement("a");n.innerText="Editar",n.className="btn btn-primary me-1",n.addEventListener("click",()=>{const o=r.id;window.location.href=`tarefa.create.html?id=${o}`});const i=document.createElement("a");i.innerText="Excluir",i.className="btn btn-outline-warning",i.addEventListener("click",()=>{const o=r.id;this.repositorioTarefas.excluir(o),window.location.reload()}),s.appendChild(n),s.appendChild(i)})}}new h(new u);

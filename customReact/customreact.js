

const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google.com"
}
function customRender(reactElement,container){
    const domEle=document.createElement(reactElement.type);
    domEle.innerHTML=reactElement.children;
    for(prop in reactElement.props){
        domEle.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domEle)
}


const mainContainer=document.getElementById("root");
customRender(reactElement,mainContainer);
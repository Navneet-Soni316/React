function customRender(reactElement, container){
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHtml =reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */
   const  domElement = document.createElement(reactElement.type);
   domElement.innerHtml = reactElement.children ;
   for(const p in reactElement.props){
        domElement.setAttribute(p,reactElement.props[p]);
   }
   container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props :{
        href :"http://www.google.com/",
        target : '_blank'
    },
    children :"click me to  visit google"
}
//document.getElementById("root")
const mainContainer = document.getElementById('root')
//just like render() we create the custom function.
customRender(reactElement,mainContainer)
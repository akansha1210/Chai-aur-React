import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ele=(
  <a href="https://google.com">google me</a>
)
const ele1=React.createElement(
  "a",
  {href:"https://google.com",target:'_blank'},
  "CLick me"
)
function MyApp(){
  return(
    <h1>hi</h1>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  ele1
  //<MyApp/>
  //MyApp()
)

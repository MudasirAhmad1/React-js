import React from 'react'

function App() {
  // alert(sum()) //function call here which we make outside the app component
  return (
    <>
      <h1>Hello World</h1>
      <Mudasir/>
      <Mudasir2/> //coomponent call here which we make outside the app component
      <h1>{sum()}</h1> //function call here which we make outside the app component
    </>
  )
}

function Mudasir(){
  return(
    <div>
      <h1>Mudasir</h1>
      <Mudasir2/> //coomponent call here which we make outside the app component call component inside componenet
    </div>
  )
}

export default App

function sum() {
  return 10+10
}
function Mudasir2(){
  return(
    <div>
      <h1>Mudasir2</h1>
    </div>
  )
}
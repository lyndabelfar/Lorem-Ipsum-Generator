import data from "./data";
import {useState} from 'react'




function App() {
  const [count,setCount]= useState(0)
  const [text, setText] = useState([])

  const handleSubmit= (e)=>{
    e.preventDefault()
    let amount = parseInt(count)
    if(amount<=0){
      amount =1;
    }
    if(amount >8){
      amount=8
    }
    setText(data.splice(0, amount))

  }


  return (
    

    <div className="App">
      <h1>Tired of boring lorem ipsum ?</h1>
      <form onSubmit={handleSubmit}>
        <label>Paragraphs:</label>
        <input 
        value={count}
        type="number"
        onChange={(e)=>{ setCount(e.target.value)}}
        />
        <button type="submit" >Generate</button>

      </form>
      
      
      {text.map((paragraph, index)=>{
        return <p key={index}>{paragraph}</p>
      })}
      
    </div>
  );
}

export default App;

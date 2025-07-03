import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Jokes = () => {

    const [data, setData] = useState([])
    
    const getData = async () =>{
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke')
        setData(response.data)
        console.log(response.data.setup)
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    
    <div style={{ textAlign: 'center', display:'flex', flexDirection:'column',gap:'20px', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh' }}>
        <h1>Random joke generator</h1>
      <div style={{ height:'250px', width:'200px', borderRadius:'10px', boxShadow:'0px 0px 10px black',padding:'10px'}}>
        <h2 style={{height:'60%', borderRadius:'10px', boxShadow:'0px 0px 10px black',display:'flex', justifyContent:'center', alignItems:'center' }}>{data.setup}</h2>
      <p style={{height:'20%',display:'flex', justifyContent:'center', alignItems:'center'}}>{data.punchline}</p>
      <button onClick={getData} style={{height:'20%', borderRadius:'10px',width:'100%', height:'30px',display:'flex', justifyContent:'center', alignItems:'center' }}>Change Joke</button>
      </div>
    </div>
  )
}

export default Jokes
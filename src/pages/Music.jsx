// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const Music = () => {

//     const [data, setData] = useState([])

//     const options = {
//         method: 'GET',
//         url: 'https://genius-song-lyrics1.p.rapidapi.com/song/recommendations/',
//         params: { id: '2396871' },
//         headers: {
//             'x-rapidapi-key': 'd71acb1fc6msh8bf42736d5f6077p1fe007jsnbfdddec63d4f',
//             'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com'
//         }
//     };

//     const getData = async ()=>{
//        try {
//      const resposne = await axios.get(options)
//         setData(resposne.data)        
//         console.log(resposne.data)
//        } catch (error) {
//         console.log("error")
//        }
//     }

//     useEffect(() => {
//       getData()
//     }, [])

//     return <div>
//         hello
//     </div>
    
// }

// export default Music










import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Music = () => {
  const [data, setData] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/song/recommendations/',
    params: { id: '2396871' },
    headers: {
      'x-rapidapi-key': 'd71acb1fc6msh8bf42736d5f6077p1fe007jsnbfdddec63d4f',
      'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  };

  const getData = async () => {
    try {
      const response = await axios.get(options.url, {
        params: options.params,
        headers: options.headers,
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('API error:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recommended Songs:</h2>
      {data ? (
        <ul>
          {data.songs?.map((song) => (
            <li key={song.id}>{song.title} — {song.artist_names}</li>
          ))}
        </ul>
      ) : (
        <p>Loading recommendations...</p>
      )}
    </div>
  );
};

export default Music;

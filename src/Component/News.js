import React, { useEffect, useRef, useState } from "react";
import NewsApp from "./NewsApp";
import "./News.css";
function News() {
  const Apikey = "24caf5239e524757b64c41f103f804f5";

  const [newslist, setnewslist] = useState([]);
  const [query, setquery] = useState("apple");

  const ApiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-01-02&to=2023-01-02&sortBy=popularity&apiKey=24caf5239e524757b64c41f103f804f5`;

  useEffect(() => {
    fetchData();
  }, [query]);

  const selectref = useRef(null);

  async function fetchData() {
    try {
      const Responce = await fetch(ApiUrl);
      const jsonData = await Responce.json();
      setnewslist(jsonData.articles);
    } catch (error) {
      console.log(error, "error");
    }
  }
  const handleChange = (event) => {
    event.preventDefault();
    const roof = selectref.current.value;
    setquery(roof);
  };

  return (
    <div className="cool">
      <form onSubmit={handleChange}>
        <input type="text" ref={selectref} />
        <input onSubmit={handleChange} type="submit" value="submit" />
      </form>
      <div className="news-card">
        {newslist.map((news) => {
          return <NewsApp news={news} />;
        })}
      </div>
    </div>
  );
}

export default News;

// enter click karke value laane ke liye

// import React, { useRef, useState } from 'react'
// import Checkintegrate from './Checkintegrate'


// const Check = () => {
//     const fgref = useRef()
//     const [value1, setvalue] = useState('')
//     // const [han, sethan] = useState('')




//     // const handleClick = () => {
//     // sethan(value1)
//     // }
    

// const Hope = (event) => {
//     event.preventDefault()
//  const rot = (fgref.current.value)
// setvalue(rot)

// }

    
//   return (



//     <>
//         <p>tufdg: {value1}</p>
//         {/* <button onClick={handleClick}> Huppe</button> */}
//         <form onSubmit={Hope}>
//         <input type="text" ref={fgref} />
//         </form>
        
//         {/* <button onClick={() =>  setvalue("mango")}>Click</button>
//         <button onClick={() => setvalue("gawawa")}>Click</button>
//         <button onClick={() => setvalue("sweetmangoo")}>Click</button> */}
         
//         </>
//   )
// }

// export default Check




/// button click karke value laane ke liye



// import React, { useState } from 'react'
// import Checkintegrate from './Checkintegrate'


// const Check = () => {
    
//     const [value1, setvalue] = useState('')
//     const [han, sethan] = useState('')




//     const handleClick = () => {
//     sethan(value1)
//     }
    

// const Hope = (event) => {
// setvalue(event.target.value)
// }

    
//   return (



//     <>
//         <p>tufdg: {han}</p>
//         <button onClick={handleClick}> Huppe</button>
//         <form onSubmit={(e) => e.preventDefault()}>
//         <input type="text" onChange={Hope} />
//         </form>
        
//         {/* <button onClick={() =>  setvalue("mango")}>Click</button>
//         <button onClick={() => setvalue("gawawa")}>Click</button>
//         <button onClick={() => setvalue("sweetmangoo")}>Click</button> */}
         
//         </>
//   )
// }

// export default Check


// without button and enter click  karke value laane ke liye



// import React, { useState } from 'react'



// const Check = () => {
//     const [value, setvalue] = useState('Apple')
//     // const [ hel, sethel] = useState('')


// const Hope = (e) => {
//     setvalue (e.target.value)
// }

    
//   return (



//     <>
//         <p>{value}</p>
//         <input type="text" onChange={Hope} />
//         {/* <button onClick={() =>  setvalue("mango")}>Click</button>
//         <button onClick={() => setvalue("gawawa")}>Click</button>
//         <button onClick={() => setvalue("sweetmangoo")}>Click</button> */}
//         {/* <Checkintegrate note={value}/> */}
//         </>
//   )
// }

// export default Check


// ek data ko dusre component me transfer karte hue

// import React, { useState } from 'react'
// import Checkintegrate from './Checkintegrate'


// const Check = () => {
//     const [value, setvalue] = useState('Apple')

//     // const justClick = (value) => {
//     //   setvalue(value)
//     // }

//   return (

   

//     <>
//         <p>{value}</p>
//         <button onClick={() => setvalue("mango")}>Click</button>
//         <button onClick={() => setvalue("gawawa")}>Click</button>
//         <button onClick={() => setvalue("sweetmangoo")}>Click</button>
//         <Checkintegrate note= {value}/>
//         </>
//   )
// }

// export default Check
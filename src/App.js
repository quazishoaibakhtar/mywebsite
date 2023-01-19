import { Route, Routes } from "react-router-dom";
import "./App.css";
import Avatar from "./Component/Avatar";
import Card from "./Component/Card";
import Check from "./Component/Check";
import News from "./Component/News";

function App() {
  return (
    <div className="App">
       {/* <Check/>  */}
      <Routes>
        <Route path="/News" element={<News />} />
      </Routes>  
       <News />

      <Card
        name="shoaib"
        email="shoaib.akp17el@gmail.com"
        image="https://media.licdn.com/dms/image/C4E03AQHMPb9zm2lIVA/profile-displayphoto-shrink_200_200/0/1624383495431?e=2147483647&v=beta&t=9pZvySmT2JkzVTUChXa-XAf2JAe7nCmS2oaW1VpoPPA"
      />
      <Card
        name="shoaib"
        email="shoaib.akp17el@gmail.com"
        image="https://media.licdn.com/dms/image/C4E03AQHMPb9zm2lIVA/profile-displayphoto-shrink_200_200/0/1624383495431?e=2147483647&v=beta&t=9pZvySmT2JkzVTUChXa-XAf2JAe7nCmS2oaW1VpoPPA"
      />
      <Card
        name="shoaib"
        email="shoaib.akp17el@gmail.com"
        image="https://media.licdn.com/dms/image/C4E03AQHMPb9zm2lIVA/profile-displayphoto-shrink_200_200/0/1624383495431?e=2147483647&v=beta&t=9pZvySmT2JkzVTUChXa-XAf2JAe7nCmS2oaW1VpoPPA"
      />
      
      // <Avatar image="https://media.licdn.com/dms/image/C4E03AQHMPb9zm2lIVA/profile-displayphoto-shrink_200_200/0/1624383495431?e=2147483647&v=beta&t=9pZvySmT2JkzVTUChXa-XAf2JAe7nCmS2oaW1VpoPPA" /> 
    </div>
  );
}

export default App;





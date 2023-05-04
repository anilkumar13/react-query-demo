import { useState } from "react";
import "./App.css";
import Search from "./components/search";
import Query from "./hooks/query";
import SignUpForm from "./components/signupform";
function App() {
  // const [filteredValue, setFilterValue] = useState({});
  const {isLoading,error, data} = Query('posts')
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  // console.log(data);
  const getsearchValue = (value) => {
    // GetAllPost(value);
    // console.log(filteredValue);
  };
  return (
    // <div>
    //   {/* <Search getsearchValue={getsearchValue} /> */}
    //     {data.map((post) => (
    //       <ul>
    //         <li>
    //           {post.id} {"=>  "}
    //           {post.title}
    //         </li>
    //       </ul>
    //     ))}
    // </div>

    <SignUpForm />    
  );
}

export default App;

import React from "react";
import { useState } from "react";


// const App=()=> {
//   const[name,setName]=useState("");
//   const[fullname,setFullname]=useState();
//   const inputHandler=(event)=>{
//     console.log(event.target.value);
//     setName(event.target.value);
//   }
//   const onSubmits=(event)=>{
//     event.preventDefault();
//     setFullname(name);
//   }
//   return (
//     <>
//     <form onSubmit={onSubmits}>
//     <div>
//        <h1>Hello {fullname}</h1>
//        <input type="text" placeholder="Enter your name" onChange={inputHandler} value={name}/>
//        <button type="submit">Click me </button>
//     </div>
//     </form>
//     </>
//   );
// }
//simplifying
const App=()=> {
     const[fullName,setFullName]=useState({
                fname:" ",
                lname:" ",
                email:" ",
                phone:" ",
     });
    const inputEvent=(event)=>{
                // const value=event.target.value;
                // const name=event.target.name;
                 const{value,name}=event.target;
                 setFullName((prevVal)=>{
                        if(name==="fname"){
                          return{
                            fname:value,
                            lname:prevVal.lname,
                            email:prevVal.email,
                            phone:prevVal.phone,
                          };
                        }
                        else if(name==="lname"){
                            return {
                              fname:prevVal.fname,
                              lname:value,
                              email:prevVal.email,
                              phone:prevVal.phone,
                            };
                        }
                        else if(name==="email"){
                          return {
                            fname:prevVal.fname,
                            lname:prevVal.lname,
                            email:value,
                            phone:prevVal.phone,
                          };
                      }
                      else if(name==="phone"){
                        return {
                          fname:prevVal.fname,
                          lname:prevVal.lname,
                          email:prevVal.email,
                           phone:value,
                        };
                    }
                        
                 });

                 
    };

    const onSubmits=(event)=>{
              event.preventDefault();
              alert("form submitted");
    };


      return (
        <>
        <div className="main_div>">
        <form onSubmit={onSubmits}>
        <div>
           <h1>Hello {fullName.fname} {fullName.lname} </h1>
           <p>{fullName.email} </p>
           <p>{fullName.phone}  </p>
           <input type="text" placeholder="Enter your name" name="fname" onChange={inputEvent} value={fullName.fname}/>
           <input type="text" placeholder="Enter your last name" name="lname" onChange={inputEvent} value={fullName.lname}/>
           <input type="email" placeholder="Enter your email" name="email" onChange={inputEvent} value={fullName.email}/>
           <input type="number" placeholder="Enter your phone number" name="phone" onChange={inputEvent} value={fullName.phone}/>
           <button type="submit">Click me </button>
        </div>
        </form>
        </div>
        </>
      );
    }
export default App;

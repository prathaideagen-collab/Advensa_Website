"use client";
export default function page(){
    console.log("Hey is this in server or client?");
    return (
        <>
        <div>
  
   <button onClick={() => alert ("hello")} >Click me </button>
    </div>
     <h1 className="text-center font-bold "> hello </h1>
     </>
     );
}
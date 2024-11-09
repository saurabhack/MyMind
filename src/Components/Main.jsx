import { act, useState } from "react";
import { RiMindMap } from "react-icons/ri";
import { FcIdea, FcShare } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { CiShare2 } from "react-icons/ci";
import { FaPaintBrush } from "react-icons/fa";
import { BsDiagram3 } from "react-icons/bs";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GoMoon } from "react-icons/go";
import { LiaCommentSolid } from "react-icons/lia";
import { FaRegImage } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
function Main(){
    const [position,setPosition]=useState(0)
    const [isActive,setIsActive]=useState(0)
    const arr=[
        {
        id:1,
        icon:<FcIdea/>,
        heading:"Visualize",
        content:"your ideas"
    },
    {
        id:2,
        icon:<FcCollaboration/>,
        heading:"Collaborate",
        content:"your ideas"
    },
    {
        id:3,
        icon:<FcManager/>,
        heading:"Manage",
        content:"your tasks"
    },
    {
        id:4,
        icon:<CiShare2/>,
        heading:"share",
        content:"your tasks"
    },

]

const action=[
    {
    id:1,
    icon:<FaPaintBrush/>,
    heading:"Custom Styling",
    content:"Unique,beatiful mind maps",
    img:"https://cdn2.mindmeister.com/assets/content/home/feature-media-3a0b4c90a01382e6207ba409e01875306e691c459d7e383f5d770c86aaf39816.svg",
    color:"blue"
},
{
    id:2,
    icon:<BsDiagram3/>,
    heading:"Mixed map layouts",
    content:"Mind ,Maps ,org ,charts , lists",
    img:"https://cdn2.mindmeister.com/assets/content/home/feature-styles-a64fa2ca45f6a3d3045b4a93342b64dbc9f9a14a548882da880c7d40d54823bc.svg",
    color:"turquoise"
},
{
    id:3,
    icon:<LiaProjectDiagramSolid/>,
    heading:"Outline Mode",
    content:"List or mind map you decide",
    img:"https://cdn3.mindmeister.com/assets/content/home/feature-layouts-90f9507b298fa2eab6bb6674f310983ae6eedd0c63a0400b5ece189dd2edc276.svg",
    color:"navi"
},
{
    id:4,
    icon:<GoMoon/>,
    heading:"Focus Mode",
    content:"Showcase your best ideas .",
    img:"https://cdn4.mindmeister.com/assets/content/home/feature-outline-4b38d1739e0b18f49f273ccb410d8cb4b7da1ab54379df5b83a732f60a3b6ed9.svg",
    color:"green"
},
{
    id:5,
    icon:<LiaCommentSolid/>,
    heading:"Comments and Notifications",
    content:"Start the discussion.",
    img:"https://cdn6.mindmeister.com/assets/content/home/feature-focus-8511aa567b3a5a42b34e62484caa858a2fda2e60569ede0506e672d39e8d8c81.svg",
    color:"orange"
},
{
    id:6,
    icon:<FaRegImage/>,
    heading:"Embedded Media",
    content:"Add Context to your ideas.",
    img:"https://cdn4.mindmeister.com/assets/content/home/feature-comments-d375db720258cb2c42bcd8fb4878769413379e07aeb767b74a1bb6a72f2ddae4.svg",
    color:"purple"
},

]
const {user} = useAuth()
const navigate=useNavigate()
const location =useLocation()
async function  handleAuthenticationWithGoogle(){
  
  try {
    const result=await signInWithPopup(auth,googleProvider)
    const user=result.user;
    const from = location.state?.from || "/dashboard";
    navigate(from);
    console.log("user information = ",user)
  } catch (error) {
    console.log("something went wrong  ===", error)  
  }
  
}




return(
        <>
        <div className="w-full h-[100vh] pt-[10rem]">
        <div
  className="w-full h-[30%] flex flex-col gap-3 items-center justify-end bg-cover bg-center "

  
>
              <p className="text-3xl max-sm:text-2xl text-gray-400">It all starts with idea</p>
            <p className="text-7xl max-sm:text-5xl font-bold text-gray-500">Collaborative</p>
            <p className="text-7xl  max-sm:text-5xl font-bold text-gray-500">Mind Mapping</p> 
            </div>
            <div
  className="w-full h-[70%] max-sm:h-[50%] flex flex-col gap-3 items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('https://cdn5.mindmeister.com/assets/content/home/octopus-map-e552aba31c8b70ad00d98fd07fa14cbcddbc00fa77dabef51c2c7c1f3765e018.svg')",
  }}
>
                <div className="w-[30%] max-sm:w-[100%] h-[20%] max-sm:h-[30%] max-md:w-[50%] max-lg:w-[60%] max-xl:w-[65%]   bg-white px-10 max-sm:bg-[100%] rounded-full shadow-2xl flex justify-center items-center">
                    <button onClick={handleAuthenticationWithGoogle} className="bg-[#00AAFF] px-10 py-5 max-sm:py-5 max-md:text-lg max-md:gap- max-sm:w-[30rem] rounded-full text-xl text-white flex max-sm:items-center gap-4 max-sm:gap-0 max-sm:text-[17px] shadow-2xl  "><img className="h-[25px]" src="https://sm.pcmag.com/pcmag_me/review/g/google-doc/google-docs-sheets-and-slides_f6we.png" alt="" />Continue With Google</button>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center items-center ">
        
            <div className="grid grid-cols-4 mt-10 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
            {
                arr.map((items,id)=>{
                  return <div key={id} className=" flex justify-center items-center bg-[rgba(0,0,0,0.05)] px-10 rounded-xl p-2">
                    <div className="flex flex-col gap-8  ">
                <div className="text-9xl" >{items.icon}</div>
                <div className="w-[100%]  flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold ">{items.heading}</h1>
                <p className=" text-xl text-gray-400">{items.content}</p>
                </div>
                </div>
            </div>
                })
            }
            </div>
            
                
            

        </div>

        <div className="w-full flex flex-col justify-center items-center mt-12 ">
            <div className="w-[60%] flex flex-col gap-5 max-sm:w-[100%] max-sm:p-2">
            <h3 className="text-gray-500 text-3xl max-sm:text-xl">How to Mind Map, Beautifully</h3>
            <h1 className="text-5xl max-sm:text-3xl font-medium">Features for Your Big Ideas.</h1>
            <p className="text-gray-400 text-justify text-xl max-sm:text-lg">Mind mapping starts with a main idea in the center of your mind map. Create unlimited subtopics and explore your thoughts, color coding for clarity and style. As your map takes shape, add context to topics with attachments, embedded media and more. MindMeister’s features guide you through your first mind maps onto maximum creativity. </p>
            </div>
        </div>
        <div className="w-full h-[50vh] flex justify-center items-center grow mt-[15rem]">
  <div className="w-[80%] flex flex-row-reverse items-center max-md:flex-col-reverse">
    
    {/* Image Container */}
    <div className="w-[70%] bg-cover max-sm:w-full max-md:w-[90%] flex justify-center">
      <img src={action[position].img} alt="" className="w-full h-auto object-cover" />
    </div>

    {/* Text & Action Container */}
    <div className="w-[30%] max-sm:w-full max-md:w-[90%] mt-8 max-md:mt-4">
      {action.map((item, id) => (
        <div
          key={id}
          className={`border-t-2 border-gray-400 flex p-4 gap-6 cursor-pointer ${
            isActive === id ? `text-${item.color}` : "text-gray-400"
          }`}
          onClick={() => setPosition(id)}
          onMouseOver={() => setIsActive(id)}
        >
          {/* Icon */}
          <div className={`text-5xl ${isActive === id ? `text-${item.color}` : "text-gray-400"}`}>
            {item.icon}
          </div>
          
          {/* Heading and Content */}
          <div>
            <h1 className="text-2xl font-medium">{item.heading}</h1>
            <p className="text-sm max-md:hidden max-sm:hidden">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="w-full flex justify-center items-center h-[50vh] mt-28 max-sm:mt-[30rem]">
  <div className="w-[60%] flex flex-col gap-6">
    <div>
    <p className="text-3xl text-gray-400 font-medium">Unlock Your Imagination</p>
    <h1 className="text-5xl max-sm:text-4xl font-medium">Mind Map Online.</h1>
    </div>
    
    <p className="text-xl text-gray-400 max-sm:text-lg">MindMeister makes creating stunning mind maps easy. Our intuitive editor allows you to map your big ideas together with your team, quickly and beautifully. From project planning, to brainstorming, to meeting management, set your collaborative creativity free and create epic mind maps. </p>
  </div>
</div>

<div className="w-full h-[50vh] flex justify-center max-sm:mt-20">
  <div className="w-[60%] max-lg:w-[100%] h-[90%] max-xl:w-[100%] max-xl:p-4 grid grid-cols-2 gap-10 max-lg:p-4 max-sm:grid-cols-1">
    <div className="p-4 flex flex-col gap-5  bg-[rgba(0,0,0,0.05)] rounded-xl w-[100%]">
      <div>
      <p className="text-xl text-gray-400">Develop your big ideas</p>
      <h1 className="text-2xl text-gray-600">What Is Online Mind Mapping?</h1>
      </div>
      <div className="">
      <p className="text-lg text-gray-400 ">Mind mapping is a powerful technique that helps you visualize your thoughts and communicate them to others. MindMeister’s easy-to-use, web-based mind map maker provides an infinite canvas for brainstorming, note taking, project planning and countless other creative tasks, no download required. With MindMeister mobile, you can take your ideas with you wherever you go. </p>
      </div>
    </div>
    <div className="p-4 bg-[rgba(0,0,0,0.05)] rounded-xl flex flex-col gap-5 w-[100%]">
      <div>
      <p className="text-xl text-gray-400">Why Mind Mapping?</p>
      <h1 className="text-2xl text-gray-500">The Benefits of Online Mind Mapping</h1>
      </div>
      <div>
      <p className="text-lg text-gray-400">Mind mapping improves creativity, productivity and collaboration. In one study, 92 percent of respondents said that mind mapping helps “distill information and reach clarity faster,” while 81 percent said it helps “manage projects more efficiently.” It's not just for business: mind maps help students improve knowledge retention and recall, according to some studies by up to 32 percent. </p>
      </div>
      
    </div>
  </div>
</div>
        </>
    )
}
export default Main
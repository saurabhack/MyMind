import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useAuth } from './AuthContext';
import { AccountCircle } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

function NewNavbar(){
    const [isOpen , setIsOpen]=useState(false)
    const {user,logOut} = useAuth()
    console.log("user informations =======",user)
    function open(){
        setIsOpen(!isOpen)
        
    }
    function handleLogOut(){
        logOut()
        navigate("/")
    }
    return(
        <>
        <div className='flex justify-between p-6'>
            <div>
                <h1>WellCome {user.displayName}</h1>

            </div>
            <div className='flex '>
                <SearchIcon className='mr-4 text-4xl'/>
                <NotificationsIcon className='mr-4 text-5xl'/>
                <Avatar onClick={open} className='mr-4 cursor-pointer'
                src="https://lh3.googleusercontent.com/a/ACg8ocJFbf_WJUG0di8g6pjvpzE-mWQ6uSeWeSZFCiLkViGcIAYiOw=s96-c"
                
                />
            </div>
        </div>
        <div  className={`bg-white w-[20%] py-20 flex flex-col justify-center items-center gap-4 border border-gray-300 shadow-2xl ${isOpen ? "flex" :"hidden"}  relative left-[90rem] `} style={{display:"left"}}>
            <div className='flex '>
            <Avatar className='' style={{ width: '100px', height: '100px' }}
                src="https://lh3.googleusercontent.com/a/ACg8ocJFbf_WJUG0di8g6pjvpzE-mWQ6uSeWeSZFCiLkViGcIAYiOw=s96-c"
                />
            </div>
            <div className='flex flex-col gap-5 pt-3 items-center'>
                <h1 className='text-2xl'>{user.displayName}</h1>
                <p className='text-lg text-gray-400'>{user.email}</p>
                
            </div>
            <div className='flex  flex-col items-start gap-3'>
            <p >
                <AccountCircle/><span>Account</span></p>
            <p onClick={handleLogOut}><LogoutIcon/><span>LogOut</span></p>
            </div>

        </div>
        </>
    )
}
export default NewNavbar
import { auth, db } from "../../lib/fiebase";
import "./detail.css";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { format } from "date-fns";
const Detail=()=>{
    
    const { chatId,user,isCurrentUserBlocked,isReceiverBlocked,changeBlock} = useChatStore();
    const {currentUser} = useUserStore();

    const handleBlock = async () =>{
       if(!user) return;

       const userDocRef = doc(db,"users",currentUser.id)

       try{
        await updateDoc(userDocRef,{
            blocked:isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
        });

        changeBlock();

       }catch(err){
        console.log(err)
       }
    }

    // const getLastMessageTime = () => {
    //     if (!chat?.messages || chat.messages.length === 0) {
    //       return "";
    //     }
    //     const lastMessage = chat.messages[chat.messages.length - 1];
    //     return format(new Date(lastMessage.createdAt.seconds * 1000), 'PPpp'); // Adjust this format as needed
    //   };


    return (
    <div className="detail">
        
        <div className="user">
            <img src={user?.avatar || "./avatar.png"}alt="" />
            <h3>{user?.username}</h3>
            {/* <p>{getLastMessageTime()}</p> */}
        </div>

        <div className="info">

            {/* <div className="option">
                <div className="title">
                    <span>Chat Setting</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Privacy & Setting</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Shared photos</span>
                    <img src="./arrowDown.png" alt="" />
                </div>
                <div className="photos">
                    <div className="photoItem">

                        <div className="photoDetail">
                          <img src="https://imgs.search.brave.com/vql5xfHsChucfCdAvXPBfNYZRb7Vq0FVirDtnzuzpwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTgz/MjE4Nzc0L3Bob3Rv/L2xhYnJhZG9yLXB1/cHB5LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1iN2JSZEJX/R3ZSWmxmenVnRWcw/NWxOOWhmTDh5ZXF2/ZmZfSmVNdTc1NVpz/PQ" alt="" />
                          <span>photo_2024_2.png</span>
                        </div>
                        
                        <img src="./download.png" alt="" className="icon"/>

                    </div>
                    <div className="photoItem">
                        
                        <div className="photoDetail">
                          <img src="https://imgs.search.brave.com/vql5xfHsChucfCdAvXPBfNYZRb7Vq0FVirDtnzuzpwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTgz/MjE4Nzc0L3Bob3Rv/L2xhYnJhZG9yLXB1/cHB5LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1iN2JSZEJX/R3ZSWmxmenVnRWcw/NWxOOWhmTDh5ZXF2/ZmZfSmVNdTc1NVpz/PQ" alt="" />
                          <span>photo_2024_2.png</span>
                        </div>
                        
                        <img src="./download.png" alt=""className="icon" />

                    </div>
                    <div className="photoItem">
                        
                        <div className="photoDetail">
                          <img src="https://imgs.search.brave.com/vql5xfHsChucfCdAvXPBfNYZRb7Vq0FVirDtnzuzpwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTgz/MjE4Nzc0L3Bob3Rv/L2xhYnJhZG9yLXB1/cHB5LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1iN2JSZEJX/R3ZSWmxmenVnRWcw/NWxOOWhmTDh5ZXF2/ZmZfSmVNdTc1NVpz/PQ" alt="" />
                          <span>photo_2024_2.png</span>
                        </div>
                        
                        <img src="./download.png" alt=""className="icon" />

                    </div>
                 
                </div>
            </div>

            
            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div> */}

            <button onClick={handleBlock}>{
                isCurrentUserBlocked ? "You are Blocked!" : isReceiverBlocked ? "User Blocked!" : "Block User"}</button>
            <button className="logout" onClick={()=>auth.signOut()}>Logout</button>

        </div>

    </div>
    )
}

export default Detail;
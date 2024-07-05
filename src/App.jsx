import Detail from "./component/detail/Detail";
import List from "./component/list/List";
import Chat from "./component/chat/Chat";
import Login from "./component/login/Login";
import Notification from "./component/notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/fiebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

function App() {
  
  const {currentUser,isLoading,fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();
  
  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user?.uid);
    });

    return ()=>{
      unSub();
    };
    
  },[fetchUserInfo]);
  console.log(currentUser);

  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List></List>
          {chatId && <Chat></Chat>}
          {chatId && <Detail></Detail>}
        </>
      ) : (
        <Login />
      )}

      <Notification/>
    </div>
  );
}

export default App;

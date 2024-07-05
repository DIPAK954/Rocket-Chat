import { create } from 'zustand'
import { useUserStore } from './userStore';

export const useChatStore = create((set) => ({
  chatId: null,
  user:null,
  isCurrentUserBlocked: false,
  isReceiverBlocked:false,
  changeChat: (chatId,user)=>{
    const currentUser = useUserStore.getState().currentUser;


    // Ensure blocked properties are defined and are arrays
    const userBlocked = Array.isArray(user.blocked) ? user.blocked : [];
    const currentUserBlocked = Array.isArray(currentUser.blocked) ? currentUser.blocked : [];

    //CHECK IF CURRENT USER IS BLOCKED

    if(userBlocked.includes(currentUser.id)){
      return set({
        chatId,
        user:null,
        isCurrentUserBlocked: true,
        isReceiverBlocked:false,
      })
    }

    //CHECK IF RECEIVER IS BLOCKED

    else if(currentUserBlocked.includes(user.id)){
      return set({
        chatId,
        user:user,
        isCurrentUserBlocked: false,
        isReceiverBlocked:true,
      })
    }

    else{
      return set({
        chatId,
        user,
        isCurrentUserBlocked:false,
        isReceiverBlocked:false,
      })
    }

  },

  changeBlock: () =>{
    set((state) => ({...state,isReceiverBlocked: !state.isReceiverBlocked}));
  }

}))
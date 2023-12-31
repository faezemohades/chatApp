import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, query, onSnapshot, limit,orderBy } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
  const [messages, setmessages] = useState([]);
  
  useEffect(() => {
    const q = query(
      collection(db, "messages"), orderBy("createdAt"),
      limit(50))
     
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(),id:doc.id});
      });
      console.log(messages)
      setmessages(messages);
    });
    return ()=> unsubscribe;
  }, []);

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;

import React, {useRef, useState} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './Chat.css';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { formatMs } from '@material-ui/core';

firebase.initializeApp({
    apiKey: "AIzaSyCQytXfHlQhmkgBXWmMcOfMfUum_w8aAhg",
    authDomain: "chatapp-e48b7.firebaseapp.com",
    projectId: "chatapp-e48b7",
    storageBucket: "chatapp-e48b7.appspot.com",
    messagingSenderId: "192290500417",
    appId: "1:192290500417:web:81d52d584818851bcfbbc0",
    measurementId: "G-533Z08WVCF"
})

function Chat() {
   <div className="chatbox"></div>
    const auth = firebase.auth();
    const firestore = firebase.firestore();

    const [user] = useAuthState(auth);
    
    function SignIn(){
        const signInWithEmail = () =>{
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider);   
        }
    
        return(
             <button onClick ={signInWithEmail}>Sign in with Email</button>
             )
           
    };
    
    function SignOut(){
        return auth.currentUser &&(
            <button onClick ={() => auth.SignOut()}>Sign in with Email</button>
        )
    }


    function ChatMessage(props){
        const {text, uid} = props.message;

        const messageClass = uid === auth.currentUser ? 'sent' : 'received';
        return (
            <div className={`message ${messageClass}`}>
            <p>{text}</p>
          </div>
        )
    }
    
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    
    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');
    const dummy = useRef();

    function ChatRoom(){
        
        const sendMessage = async(e) =>{
            e.preventDefault();

            const{uid} = auth.currentUser;

            await messagesRef.add({
                text:formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
            }) 
            
            setFormValue('');
            dummy.current.scrollIntoView({behaviour:'smooth'});
        }

    
    
    }
    
    return (

        <>
        <div className="chatbox">
            <header>
                <section>
                    header
                </section>
            </header>
        <main>
            <div className="messagebox">
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                {/* <div ref={dummy}></div> */}
            </div>
        </main>
            <form>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
                <button type = "submit">🕊️</button>
            </form>
        </div>
        <div>
            <section>
                {user? <ChatRoom/> : <SignIn />}
            </section>
        </div>
      
        </>
    )
    
};



export default Chat

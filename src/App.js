import {useState} from "react";
import './App.css';

function App() {
    const [email, setEmail] = useState('rpolek85@gmail.com');

    let msg;
    if(email.length < 6) {
        msg = <div>Twój email jest za krótki</div>;}
    else if(email.length > 20){
        msg = <div>Twój email jest za długi</div>}
    else {
        msg = <div>Twój email jest ok</div>;}


    function handleChange(event) {
        setEmail(event.target.value);


    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}.</h2>
            {msg}
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );
}

export default App;
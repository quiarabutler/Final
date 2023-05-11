import React from "react";
import ContactForm from "./ContactForm";


export default function About () {

    return(
        <div>
        <div className="container text-center  rounded">
            <br></br>
            <h1>About</h1>

        

        
            <br></br>
            <p>The customer management app's purpose is to offer support 
                to businesses with a huge clientele and needs a database that will
                 allow regular maintenance on client information. 
                 </p>

                 <p> Feel free to contact us if you have any further questions.</p>
                 <br></br>
                 <ContactForm />
        </div>
        </div>
    )

}
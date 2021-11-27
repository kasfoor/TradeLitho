import React from 'react';
import Image from '../Images/loginImage.png';



function CreateUser() {

    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8"></meta>
            <title>Tailwind Intro</title>
            <link rel="stylesheet"href="main.css"></link>
        </head>   
        
        <body>
        <div class=" flex flex-hidden  ">
            {/* first half which is the inputs and letters */}
           
             

         <div class="lg:w-1/2  shadow-xl rounded px-1 mb-4 flex flex-col">
             <h1 class="block mt-6 text-7xl font-bold text-litho-grey w-full text-center text-grey-darkest mb-6 ">Find Your Account</h1>
             <h2 class="block mt-6 text-3xl font-bold text-litho-grey w-full text-center text-grey-darkest mb-6">Enter your email or mobile number</h2>

            <div class="md-13">
                <label class="block text-grey-darker text-xl font-bold mb-2" for="email"type="text" placeholder="Email or mobile number">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" ></input>
            </div>
                
            <div class="flex items-center justify-between pb-14">
                <button class="bg-litho-blue hover:bg-litho-blue text-white font-bold py-2 px-rounded" type="button">
                    Find Account
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-litho-grey hover:text-blue-darker" href="/CreateUser">
                    Forgot Password?
                </a>
                
            </div>
        </div>
             {/* second half which is the image */}
             <div class="md:w-1/2  hidden md:block ">
                 <img src={Image} alt="..."class="object-fit" ></img>
             </div>
             
        </div>
        </body>
        </html>


    )
}

export default CreateUser;
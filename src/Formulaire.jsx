import React, { Fragment } from 'react'

function Formulaire() {
  return (
    <>
      
<div class="flex items-center justify-center h-screen">
  
  <div class="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
    <div class="mb-8 flex justify-center">
      <img class="w-24" src="./src/assets/logo sora.PNG" alt="" />
    </div>
    <div class="mt-16 grid space-y-4">
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo"/>
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>                        
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                 <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" class="absolute left-0 w-5" alt="Facebook logo"/>
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                            </div>
                        </button>
                    </div>
    <div class="flex flex-col text-sm p-3 rounded-md">
      <input class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username or Email" />
      <input class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" />
    </div>
    <button class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-blue-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit">Sign in</button>
    <div class="mt-5 flex justify-between text-sm text-gray-600">
      <a href="#">Forgot password?</a>
      <a href="#">Sign up</a>
    </div>
       
    <div class="mt-5 flex text-center text-sm text-gray-400">
      <p>
        This site is protected by reCAPTCHA and the Google <br></br>
        <a class="underline" href="">Privacy Policy</a>  and <a class="underline" href="">Terms of Service</a>  apply.
      </p>
    </div>
  </div>
</div>
</>
  )
}

export default Formulaire

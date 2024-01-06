

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#0a192f] flex items-center justify-center p-4">
       <form action="https://getform.io/f/8e13b51a-7543-481c-b841-ec78fe32c9f7" method="post" className="flex flex-col max-w-[600px] w-full">

         <div className="pb-8">
            <p className="font-bold text-4xl inline border-b-4 border-pink-600 text-gray-300">Contact</p>
         </div>
         <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name='name' />
         <input  className="my-4 p-2 bg-[#ccd6f6]" type="text" placeholder="E-mail" name='email' />
         <textarea className="bg-[#ccd6f6] p-2"  name="message" id="" rows="10" placeholder="Message"></textarea>
         <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-4 mx-auto">Submit</button>
       </form>

    </div>
  )
}

export default Contact

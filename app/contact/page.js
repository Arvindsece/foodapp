import React from 'react'

const page = () => {
  return (
    <div className='w-full h-[80vh] flex '>
        <div className="flex flex-row w-fit">
            <div className="p-10 w-full mx-20">
                <form className='gap-10 flex flex-col w-fit mt-10'>
                    <h1 className='font-bold mx-10 text-lg'>Fill out the form to reach us !</h1>
                    <input className='p-2 w-full mx-5 border' placeholder='Enter your Email'></input>
                    <input className='p-2 w-full mx-5 h-[300px] border' placeholder='Enter your message'></input>
                    <button className='font-bold text-sm py-1 px-5 rounded-lg bg-blue-400 text-white mx-auto'>Submit</button>
                </form>
            </div>
        </div>
        <div className='h-[80vh] items-center w-[60vw] justify-center align-center flex flex-row gap-25'>
          <table>
            <tr>
              <td className='px-10 py-5'>
                Email
              </td>
              <td>
                <p className='font-bold'>message@foodapp.com</p>
              </td>
            </tr>
            <tr>
              <td className='px-10 py-5'>
                Twitter
              </td>
              <td>
              <p className='font-bold'>@foodappOfficial</p>
              </td>
            </tr>
            <tr>
              <td className='px-10 py-5'>
                Instagram
              </td>
              <td>
              <p className='font-bold'>@foodappOfficial</p>
              </td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default page
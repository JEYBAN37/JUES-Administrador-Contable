import React from 'react'
import { HeroData } from '../data/data'
import { LayoutHero, LayoutHeroMo } from '../sections/microcomponents/Layout';



const Hero = () => {


  return (
    <section id='hero' className='pt-[150px] pb-[150px] font-roboto bg-slate-800'>

      <LayoutHero >
        <section id='hero' className=' flex flex-col items-center lg:flex-row lg:justify-around lg:items-end'>
          <aside className=' text-center '>
            <section className='px-4 lg:w-[488px] lg:px-0'>
              <h1 className='font-semibold text-2xl text-white'>
                {HeroData.title}
              </h1>
              <p className='px-10 text-base text-white lg:px-0'>
                {HeroData.subTitle}
              </p>
            </section>

          </aside>


        </section>
      </LayoutHero>

      <div className='mt-8'></div>
      <LayoutHeroMo >

        <div className=' flex flex-col gap-2 '>


          <div className=' flex flex-row gap-2'>

            <div className=' basis-1/2 bg-slate-300 h-[562px] rounded-sm '>

              <div class="relative overflow-x-auto">
                <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Product name
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Color
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Category
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-500 dark:border-x-gray-950">
                      <th scope="row" class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Silver
                      </td>
                      <td class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Laptop
                      </td>
                      <td class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        $2999
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-500 dark:border-x-gray-950">
                      <th scope="row" class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Silver
                      </td>
                      <td class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        Laptop
                      </td>
                      <td class="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                        $2999
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>



            </div>


            <div className='flex flex-col flex-1 gap-2   '>


              <div className='bg-slate-300 h-[90px] rounded-sm '><div className=' flex justify-center py-3'>
                <input type="text" id="first_name" class="ml-3 mr-3 bg-slate-300 border  border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="Codigo de Barras" required />

              </div>
              </div>


              <div className='bg-slate-300 sh-[75px] rounded-sm'>
                <div className=' flex justify-start py-4 ml-4'>
                  <form>
                    <div class="mb-6">
                      <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">Nombre del Comprador</label>
                      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                    </div>
                    <div class="mb-6">
                      <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">Numero de Identificacion</label>
                      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                    </div>
                    <div class="mb-6">
                      <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">TOTAL DE COMPRA</label>
                      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                    </div>
                    <div class="mb-6">
                      <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">Cambio</label>
                      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                    </div>
                  
                    
                  
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vender</button>
                  </form>
                </div>
              </div>
             


            </div>
          </div>




        </div>

</LayoutHeroMo>
    </section>
   
  )
}

export default Hero

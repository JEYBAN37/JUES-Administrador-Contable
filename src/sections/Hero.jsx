import React from 'react'
import { HeroData } from '../data/data'
import { LayoutHero, LayoutHeroMo } from '../sections/microcomponents/Layout';
import { useState } from 'react';
import axios from 'axios';


const Hero = () => {


  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [totalValue, setotalValue] = useState(0);
  const [efectivoEntregado, setEfectivoEntregado] = useState(0);
  const [cambio, setCambio] = useState(0);
  const [nombreComprador, setNombreComprador] = useState('');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState('');

  

  const handleProductIdChange = (event) => {
    const newProductId = event.target.value;
    setProductId(newProductId);
    axios.get(`http://localhost:8080/api/products/${newProductId}`)
      .then((response) => {
        setProduct(response.data);
        setTableData([...tableData, response.data]);
        setotalValue(totalValue + response.data.value);
        setProductId('');
      })
      .catch((error) => {
        console.error(error);
        console.error(error.response);
        setProduct(null);
      });
    ;


  };

  const handleEfectivoEntregadoChange = (event) => {
    const value = event.target.value;
    setEfectivoEntregado(value);
    setNombreComprador
    // Calcular el cambio restando el valor ingresado del total
    const newCambio = parseFloat(value) - totalValue;
    setCambio(newCambio);
  };

  const handleVenderClick = () => {
    // Crea un objeto con todos los datos del formulario
    const dataSale = {
      productId,
      nombreComprador,
      numeroIdentificacion,
      efectivoEntregado,
      cambio,
      totalValue
      // Otras propiedades que desees enviar
    };

    const handleNombreCompradorChange = (event) => {
      const value = event.target.value;
      setNombreComprador(value);
    };
    
    const handleNumeroIdentificacionChange = (event) => {
      const value = event.target.value;
      setNumeroIdentificacion(value);
    };
    

    // Realiza una solicitud POST al backend
    axios.post('http://localhost:8080/api/venta', dataSale)
      .then((response) => {
        // Maneja la respuesta del servidor (éxito)
        console.log('Venta exitosa:', response.data);
        // Restablece los campos del formulario o realiza otras acciones necesarias
      })
      .catch((error) => {
        // Maneja los errores de la solicitud (puedes mostrar un mensaje de error, por ejemplo)
        console.error('Error al vender:', error);
      });
  };

  const handleNombreCompradorChange = (event) => {
    const value = event.target.value;
    setNombreComprador(value);
  };
  
  const handleNumeroIdentificacionChange = (event) => {
    const value = event.target.value;
    setNumeroIdentificacion(value);
  };
  

  return (
    <div>
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

              <div className=' basis-1/2 bg-slate-300 h-[580px] rounded-sm '>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                          Producto
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                          Talla
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                          Valor
                        </th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((product, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-500 dark:border-x-gray-950">
                          <th scope="row" className="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                            {product.nameClothe}
                          </th>
                          <td className="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                          {product.sizeClothe}
                          </td>
                          <td className="px-4 py-2 font-medium text-white whitespace-nowrap dark:text-white">
                            {product.value}
                          </td>
                        
                        </tr>
                      ))}
                    </tbody>
                  </table>


                </div>



              </div>


              <div className='flex flex-col flex-1 gap-2   '>


                <div className='bg-slate-300 h-[90px] rounded-sm '><div className=' flex justify-center py-3'>


                  <input value={productId} onInput={handleProductIdChange} type="text" id="first_name" className="ml-3 mr-3 bg-slate-300 border  border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="Codigo de Barras" required />
                </div>
                </div>



                <div className='bg-slate-300 sh-[75px] rounded-sm'>
                  <div className=' flex justify-center py-4 '>
                    <form>
                      <div className="mb-2">
                        <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">Nombre del Comprador</label>
                        <input type="email"  id="nombreComprador" name="nombreComprador" value={nombreComprador} onChange={handleNombreCompradorChange}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                      </div>
                      <div className="mb-2">
                        <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">Numero de Identificacion</label>
                        <input type="email"   id="numeroIdentificacion" name="numeroIdentificacion" value={numeroIdentificacion} onChange={handleNumeroIdentificacionChange } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                      </div>
                      <div className="mb-2">
                        <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">Total de Compra</label>
                        <input type="email" id="totalValue" value={totalValue} readOnly  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                      </div>
                      <div className="mb-2">
                        <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">Efectivo Entregado</label>
                        <input type="email" id="efectivo-entregado"  value={efectivoEntregado} onChange={handleEfectivoEntregadoChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                      </div>
                      <div className="mb-2">
                        <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-800">Cambio</label>
                        <input type="email" id="cambio"  value={cambio}   readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                      </div>



                      <button type="submit" onClick={handleVenderClick} className="text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-600 dark:focus:ring-blue-800">Facturar</button>
                    </form>
                  </div>
                </div>



              </div>
            </div>




          </div>

        </LayoutHeroMo>
      </section>
    </div>
  )
}

export default Hero

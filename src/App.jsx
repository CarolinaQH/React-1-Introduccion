import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import MyCard from './components/MyCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <>

 <div className='cabecera'>


    <Header titulo="Adopta un perrito" />
    </div>
    
    <div className='galeria'>
      
    <MyCard
    imagen="https://mascotafiel.com/wp-content/uploads/2015/12/perros-San-Bernardo_opt-compressor-1.jpg"
    nombre="San Bernardo"
    descripcion="El san bernardo es una raza de perro originaria de los Alpes suizos y del norte de Italia. Es el perro boyero más famoso junto con el mastín del Pirineo, y es muy próximo al gran boyero suizo. Desciende del extinto mastín de los Alpes, que se mezcló con otras razas como el dogo del Tíbet, el terranova y el gran danés."
    color="success"
    texto="Adóptame"
    
    />
       <MyCard
    imagen="https://t2.ea.ltmcdn.com/es/razas/8/0/1/husky-siberiano_108_0_orig.jpg"
    nombre="Husky siberiano"
    descripcion="El husky siberiano es una raza de perro de trabajo originaria del norte de Siberia (Chukotka, Rusia). Este perro fue creado por la tribu Chukchi como perro de trabajo para tirar de los trineos a través de largas distancias durante sus partidas de caza, sirviendo así como vehículo de transporte rápido para las presas en la vuelta al poblado."
    color="primary"
    texto="Adóptame"
    
    />
       <MyCard
    imagen="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5caf5fdc228c0753837627.jpg"
    nombre="Bobtail"
    descripcion="Es un perro pastor de gran tamaño y envergadura, con una altura que ronda los 63 cm y un peso entre los 30 y los 40 kg. Orejas pequeñas y caídas, recubiertas de pelo, cuello alargado y fuerte, pelo abundante desgreñado y de tacto áspero, con una gama de colores que puede ir desde el negro, gris, grisáceo, azul al blue merle, con o sin manchas blancas en la cabeza, parte baja del vientre o extremidades anteriores. "
    color="danger"
    texto="Adóptame"
    
    />
       <MyCard
    imagen="https://t2.ea.ltmcdn.com/es/razas/7/5/0/chow-chow_57_0_orig.jpg"
    nombre="Chow chow"
    descripcion="El chow chow es una raza de perro originaria del norte de China,​ una de las pocas razas de perros antiguas que todavía existen hoy en día en el mundo, cuyo origen se cree que ocurrió aproximadamente hace 2.000 o 3.000 años. Se cree que fue uno de los perros nativos utilizados como modelo para el león de Fu, los guardianes tradicionales de piedra que se encuentran en las entradas de los templos y palacios budistas."
    color="warning"
    texto="Adóptame"
    
    />
    </div>
   
    <Footer />
    </>
  )
}

export default App

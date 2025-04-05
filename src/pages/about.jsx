import React from 'react';
import ProfileImage from '../assets/Lilian.jpg'; 


function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-8 bg-gray-200 text-center">
            <img
              className="rounded-full w-32 h-32 mx-auto object-cover shadow-md"
              src={ProfileImage}
              alt="Foto de perfil de Lilian Barahona"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Lilian Barahona</h2>
            <p className="text-gray-600">Estudiante de Ingeniería en Ciencias de la Computación</p>
          </div>
          <div className="md:w-2/3 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acerca de Mí</h2>
            <p className="text-gray-700 mb-4">
              ¡Hola! Mi nombre es Lilian Barahona y tengo 21 años. Soy una estudiante de la Ingeniería en Ciencias de la Computación en la Universidad Católica de Honduras.
            </p>
            <p className="text-gray-700 mb-4">
              Actualmente, estoy cursando mis estudios y aprendiendo sobre diversas áreas de la informática, como desarrollo de software, bases de datos etc. 
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Intereses y Habilidades</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Desarrollo Web (Frontend, Backend, Full-Stack )</li>
                <li>Bases de Datos (SQL, NoSQL )</li>
                <li>Algoritmos y Estructuras de Datos</li>
                
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Educación</h3>
              <p className="text-gray-700">
                Ingeniería en Ciencias de la Computación - Universidad Católica de Honduras (En curso)
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
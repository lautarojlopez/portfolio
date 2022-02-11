import {useState} from 'react'
import Head from 'next/head'
import Info from '../components/Info'
import Alerta from '../components/Alerta'
import axios from 'axios'
import {useFormik} from 'formik'
import * as yup from 'yup'
import Swal from 'sweetalert2'

export default function Home() {

	const [cargando, setCargando] = useState(false)

	const form = useFormik({
		initialValues:{
			nombre: '',
			email: '',
			asunto: '',
			mensaje: ''
		},
		validationSchema: yup.object({
			nombre: yup.string().required('Escribí tu nombre'),
			email: yup.string().email('Escribí un e-mail válido').required('Escribí tu e-mail'),
			asunto: yup.string().required('Escribí un asunto'),
			mensaje: yup.string().required('Escribí un mensaje')
		}),
		onSubmit: async (values) => {
			setCargando(true)
			try {
				//Si el mensaje no se envia en 65 segundos, muestra un error
				axios.defaults.timeout = 65000
				const response = await axios.post("https://miportfolio-server.herokuapp.com/", values)
				if(response){
					setCargando(false)
					Swal.fire({
					  title: response.data.title,
					  text: response.data.msg,
					  icon: 'success',
					  confirmButtonColor: '#262626',
					  confirmButtonText: 'Aceptar'
					})

					//Limpiar formulario
					form.values.nombre = ''
					form.values.email = ''
					form.values.asunto = ''
					form.values.mensaje = ''
				}
				else{
					setCargando(false)
					Swal.fire({
					  title: 'Error al enviar el mensaje',
					  text: 'Por favor, intentalo nuevamente',
					  icon: 'error',
					  confirmButtonColor: '#262626',
					  confirmButtonText: 'Aceptar'
					})
				}
			} catch (e) {
				console.log(e);
				setCargando(false)
				Swal.fire({
				  title: e.response.data.title,
				  text: e.response.data.msg,
				  icon: 'error',
				  confirmButtonColor: '#262626',
				  confirmButtonText: 'Aceptar'
				})
			}

		}
	})

 	return (
	  <>
		  <Head>
			  <link href="https://fonts.cdnfonts.com/css/glacial-indifference-2" rel="stylesheet"/>
			  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
			  <title>Lautaro López - Desarollador Web</title>
		  </Head>
		  <div className="flex flex-col lg:flex-row bg-neutral-100 text-neutral-800">
		  	<div className="static lg:fixed">
		  		<Info/>
		  	</div>
			<div className="lg:w-10/12 lg:ml-72 p-4 md:p-10">
				<h1 className="font-bold text-6xl">Lautaro López</h1>
				<p className="pt-5 text-2xl text-neutral-700">Junior Full Stack Developer</p>
				<h2 id="sobre-mi" className="mt-5 border-l-8 border-neutral-800 px-3 font-bold text-4xl">Sobre Mi</h2>
				<p className="py-5 text-lg">Soy estudiante de Ingeniería en Informática. Me considero creativo y con capacidad para resolver problemas rápidamente, atento a los detalles y siempre predispuesto a colaborar. Mi más grande interés es la programación, especialmente el desarrollo web y disfruto de aprender nuevas habilidades y tecnologías. Mi objetivo profesional es formar parte de un equipo que me permita seguir aprendiendo y desarrollando mis conocimientos.</p>

				<h2 id="habilidades" className="border-l-8 border-neutral-800 px-3 font-bold text-4xl">Habilidades</h2>
				<div className="flex flex-wrap justify-center items-center my-5">
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/html.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">HTML</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/css.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">CSS</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/js.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">JavaScript</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/react.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">React</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/node.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">Node.js</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/express.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">Express.js</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/next.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">Next.js</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/redux.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">Redux</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/tailwind.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">Tailwind CSS</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/mongodb.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">MongoDB</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/firebase.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">Firebase</p>
					</div>
					<div className="mt-5 mx-1 skill opacity-100 hover:scale-105 transition-all ease-in-out duration-150">
						<img src='/logos/git.svg' className="h-32 w-32"/>
						<p className="text-center skill-text font-bold">GIT</p>
					</div>
				</div>

			<h2 id="portfolio" className="border-l-8 border-neutral-800 px-3 font-bold text-4xl">Portfolio</h2>
			<div className="flex flex-col">
				<div className="flex flex-col md:flex-row text-lg w-full bg-white mt-5 p-3 shadow">
					<div className="w-full md:w-4/12 flex justify-center items-center">
						<img className="w-full" src="/screenshots/planify.png"/>
					</div>
					<div className="p-3 w-full md:w-8/12 flex flex-col justify-between">
						<h3 className="pb-3 text-3xl font-bold">Planify</h3>
						<p className="py-3">Aplicación de lista de tareas para organizar proyectos. Desarrollada utilizando React, Node.js, Express.js y MongoDB</p>
						<p><i className="fas fa-link"></i> <a href="https://planify-react.netlify.app/" target="_blank" rel="noreferrer" className="font-bold">planify-react.netlify.app</a></p>
						<p><i className="fab fa-github"></i> <a href="https://github.com/lautarojlopez/planify-client" target="_blank" rel="noreferrer" className="font-bold">Repositorio Front-End</a></p>
						<p><i className="fab fa-github"></i> <a href="https://github.com/lautarojlopez/planify-server" target="_blank" rel="noreferrer" className="font-bold">Repositorio Back-End</a></p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row text-lg w-full bg-white mt-5 p-3 shadow">
					<div className="w-full md:w-4/12 flex justify-center items-center">
						<img className="w-full" src='/screenshots/phunt.png'/>
					</div>
					<div className="p-3 w-full md:w-8/12 flex flex-col justify-between">
						<h3 className="pb-3 text-3xl font-bold">Product Hunt Clon</h3>
						<p className="py-3">Clon del sitio web &quot;Product Hunt.&quot; Desarrollado utilizando Next.js y Firebase</p>
						<div className="flex flex-col justify-between">
							<p><i className="fas fa-link"></i> <a href="https://product-hunt-29df2.web.app/" target="_blank" rel="noreferrer" className="font-bold">product-hunt-29df2.web.app</a></p>
							<p><i className="fab fa-github"></i> <a href="https://github.com/lautarojlopez/product-hunt-clon" target="_blank" rel="noreferrer" className="font-bold">Repositorio</a></p>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row text-lg w-full bg-white mt-5 p-3 shadow">
					<div className="w-full md:w-4/12 flex justify-center items-center">
						<img className="w-full" src='/screenshots/songs.png'/>
					</div>
					<div className="p-3 w-full md:w-8/12 flex flex-col justify-between">
						<h3 className="pb-3 text-3xl font-bold">Buscador de Letras de Canciones</h3>
						<p className="py-3">Aplicación que busca letras de canciones mediante API. Desarrollada utilizando Create React App.</p>
						<div className="flex flex-col justify-between">
							<p><i className="fas fa-link"></i> <a href="https://songs-finder-react.netlify.app/" target="_blank" rel="noreferrer" className="font-bold">songs-finder-react.netlify.app</a></p>
							<p><i className="fab fa-github"></i> <a href="https://github.com/lautarojlopez/buscador-de-canciones" target="_blank" rel="noreferrer" className="font-bold">Repositorio</a></p>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row text-lg w-full bg-white mt-5 p-3 shadow">
					<div className="w-full md:w-4/12 flex justify-center items-center">
						<img className="w-full" src='/screenshots/clima.png'/>
					</div>
					<div className="p-3 w-full md:w-8/12 flex flex-col justify-between">
						<h3 className="pb-3 text-3xl font-bold">Clima Argentina</h3>
						<p className="py-3">Aplicación del clima en Argentina. Desarrollada utilizando Create React App.</p>
						<div className="flex flex-col justify-between">
							<p><i className="fas fa-link"></i> <a href="https://clima-argentina-react.netlify.app/" target="_blank" rel="noreferrer" className="font-bold">clima-argentina-react.netlify.app</a></p>
							<p><i className="fab fa-github"></i> <a href="https://github.com/lautarojlopez/clima-argentina-app" target="_blank" rel="noreferrer" className="font-bold">Repositorio</a></p>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row text-lg w-full bg-white mt-5 p-3 shadow">
					<div className="w-full md:w-4/12 flex justify-center items-center">
						<img className="w-full" src='/screenshots/crypto.png'/>
					</div>
					<div className="p-3 w-full md:w-8/12 flex flex-col justify-between">
						<h3 className="pb-3 text-3xl font-bold">Cotizador de Criptomonedas</h3>
						<p className="py-3">Aplicación para conversión de divisas a criptomonedas. Desarrollada utilizando Create Reac App.</p>
						<div className="flex flex-col justify-between">
							<p><i className="fas fa-link"></i> <a href="https://crypto-cotizador-app.netlify.app/" target="_blank" rel="noreferrer" className="font-bold">crypto-cotizador-app.netlify.app</a></p>
							<p><i className="fab fa-github"></i> <a href="https://github.com/lautarojlopez/crypto" target="_blank" rel="noreferrer" className="font-bold">Repositorio</a></p>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row text-lg w-full bg-white mt-5 p-3 shadow">
					<div className="w-full md:w-4/12 flex justify-center items-center">
						<img className="w-full" src='/screenshots/billetera.png'/>
					</div>
					<div className="p-3 w-full md:w-8/12 flex flex-col justify-between">
						<h3 className="pb-3 text-3xl font-bold">Controlador de Gastos</h3>
						<p className="py-3">Aplicación para gastos y presupuestos. Desarrollada utilizando Create Reac App.</p>
						<div className="flex flex-col justify-between">
							<p><i className="fas fa-link"></i> <a href="https://controlgastos-react.netlify.app/" target="_blank" rel="noreferrer" className="font-bold">controlgastos-react.netlify.app</a></p>
							<p><i className="fab fa-github"></i> <a href="https://github.com/lautarojlopez/control-gastos" target="_blank" rel="noreferrer" className="font-bold">Repositorio</a></p>
						</div>
					</div>
				</div>
			</div>


			<h2 id="contacto" className="mt-5 border-l-8 border-neutral-800 px-3 font-bold text-4xl">Contacto</h2>
			<form onSubmit={form.handleSubmit} action="" className="w-full md:w-10/12 m-auto border bg-white shadow p-5 mt-5 flex flex-col items-center justify-center">
				<div className="w-full flex flex-col md:flex-row">
					<input type="text" name="nombre"  value={form.values.nombre} onChange={form.handleChange}  className="w-full p-2 border-b-4 border-neutral-800 text-xl focus:outline-none mb-3 md:mb-0 md:mr-3" placeholder="Tu Nombre"/>
					<input type="email" name="email" value={form.values.email} onChange={form.handleChange}  className="w-full p-2 border-b-4 border-neutral-800 text-xl focus:outline-none" placeholder="Tu E-mail"/>
				</div>
				<div className="w-full flex flex-col md:flex-row">
					{form.errors.nombre && form.touched.nombre ? <Alerta className="my-2" mensaje={form.errors.nombre}/> : null}
					{form.errors.email && form.touched.email ? <Alerta className="my-2" mensaje={form.errors.email}/> : null}
				</div>
				<input type="text" name="asunto" value={form.values.asunto} onChange={form.handleChange}  className="w-full mt-3 p-2 border-b-4 border-neutral-800 text-xl focus:outline-none" placeholder="Asunto"/>
				{form.errors.asunto && form.touched.asunto ? <Alerta className="my-2" mensaje={form.errors.asunto}/> : null}
				<textarea name="mensaje" value={form.values.mensaje} onChange={form.handleChange} className="w-full mt-5 p-3 text-xl border-4 border-neutral-800 h-40" placeholder="Escribí tu mensaje"></textarea>
				{form.errors.mensaje && form.touched.mensaje ? <Alerta className="my-2" mensaje={form.errors.mensaje}/> : null}
				{cargando ? (
					<div className="sk-circle">
					  <div className="sk-circle1 sk-child"></div>
					  <div className="sk-circle2 sk-child"></div>
					  <div className="sk-circle3 sk-child"></div>
					  <div className="sk-circle4 sk-child"></div>
					  <div className="sk-circle5 sk-child"></div>
					  <div className="sk-circle6 sk-child"></div>
					  <div className="sk-circle7 sk-child"></div>
					  <div className="sk-circle8 sk-child"></div>
					  <div className="sk-circle9 sk-child"></div>
					  <div className="sk-circle10 sk-child"></div>
					  <div className="sk-circle11 sk-child"></div>
					  <div className="sk-circle12 sk-child"></div>
					</div>
				) : null}
				<button type="submit" className="p-3 hover:bg-neutral-700 transition-all ease-in-out duration-200 bg-neutral-800 font-bold text-white w-full md:w-2/12 mt-3 text-xl rounded"><i className="fas fa-envelope-open-text"></i> Enviar</button>
			</form>
			</div>
		  </div>
  	</>
  )
}

import fotocv from '../public/fotocv.png'
import Image from 'next/image'
import {Link} from 'react-scroll'

const Info = () => {

	return(
		<div className="text-white w-full lg:w-72 bg-neutral-800 min-h-screen md:h-screen pb-10">
			<h1 className="text-white text-center text-3xl font-bold py-3">Lautaro López</h1>
			<div className="flex justify-center items-center">
				<Image src={fotocv} width={200} height={200}/>
			</div>
			<p className="text-center font-semibold mt-3">¡Hola! Soy Lautaro, bienvenido a mi página personal.</p>
			<div className="my-1 flex justify-center items-center">
				<a className="text-4xl md:text-3xl mr-3 hover:text-neutral-300 transition-all ease-in-out duration-200" href="https://github.com/lautarojlopez" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
				<a className="text-4xl md:text-3xl hover:text-neutral-300 transition-all ease-in-out duration-200" href="https://www.linkedin.com/in/lautarojlopez" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
			</div>
			<div className="flex justify-center items-center mt-3">
				<div className="w-10/12 border-b border-white border-opacity-25"></div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className="flex items-baseline mt-5">
					<Link to="sobre-mi" smooth={true} className="cursor-pointer hover:text-neutral-300 font-bold text-xl"><i className="fas fa-user mr-3"></i> Sobre Mi</Link>
				</div>
				<div className="flex items-baseline mt-5">
					<Link to="habilidades" smooth={true} className="cursor-pointer hover:text-neutral-300 font-bold text-xl"><i className="fas fa-code mr-3"></i> Habilidades</Link>
				</div>
				<div className="flex items-baseline mt-5">
					<Link to="portfolio" smooth={true} className="cursor-pointer hover:text-neutral-300 font-bold text-xl"><i className="fas fa-briefcase mr-3"></i> Portfolio</Link>
				</div>
				<div className="flex items-baseline mt-5">
					<Link to="contacto" smooth={true} className="cursor-pointer hover:text-neutral-300 font-bold text-xl"><i className="fas fa-address-card mr-3"></i> Contacto</Link>
				</div>
				<div className="flex items-baseline mt-5">
					<a href='/Lautaro Lopez.pdf' download="Lautaro Lopez.pdf" className="cursor-pointer hover:bg-neutral-300 transition-all ease-in-out duration-200 font-bold rounded bg-white text-neutral-800 p-3 text-xl"><i className="fas fa-file-download"></i> Descarga mi CV</a>
				</div>
			</div>
		</div>
	)
}

export default Info

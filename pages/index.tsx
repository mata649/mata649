import { Navbar } from "../components/navbar";

export default function Home() {
	return (<>
		<Navbar />
		<section className="grid grid-cols-3 ">
			<div className="col-start-2">Logo</div>
			<div className="col-span-3 flex justify-center  ">
				<h1 className=" text-6xl">Jose Mata</h1>
			</div>
		</section>
	</>
	)
}

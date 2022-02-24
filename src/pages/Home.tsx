import { useEffect, useRef } from 'react'

import three from '../three/index'

export default function Home() {
	const canvas = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		if (canvas.current) {
			three(canvas.current)
		}
	}, [])

	return (
		<div className='mx-auto w-11/12 lg:w-2/3'>
			<div className='flex flex-col'>
				<div className='mx-auto w-full md:w-2/3'>
					<div className='flex justify-center'>
						<div className='text-6xl my-10'>Transport på månen</div>
					</div>
					<div className='font-medium text-3xl'>Hvorfor?</div>
					<div className='mb-4'>
						Hvis os mennesker beslutter os for på et tidpunkt at
						bygge en base på månen, skal der være en mulighed for at
						vi kan transportere os selv rundt på månen. Hvis du
						nogen sinde har tænkt på hvordan det kommer til at
						fungere og gerne vil finde ud af det, har du fundet den
						helt rigtige hjemme side!
					</div>
					<div className='font-medium text-3xl'>Hvordan?</div>
					<div className='mb-4'>
						Månebilen fungere lidt ligesom et hover board. Dette er
						fordi er der på månen næsten ingen tyngdekræft er, det
						er derfor ekstremt nemt at skubbe ting væk fra månen og
						det gør det muligt at transpotere tunge ting meget nemt
						og hurtigt, uden at bruge for mange rescourcer.
					</div>
					<div className='font-medium text-3xl'>Model</div>
					<div className='mb-2'>
						Her under ses en 3D-model af hvordan et en månebil kan
						komme til at se ud se ud i fremtiden når vi for første
						gang prøver at bosætte os på månen. Modelen kan drejes
						og man kan zoome ind og ud så man kan se alle detaljerne
					</div>
					<div className='w-full h-96'>
						<canvas ref={canvas} className='rounded-lg' />
					</div>
				</div>
			</div>
		</div>
	)
}

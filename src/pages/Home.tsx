import Model from '../components/Model'

export default function Home() {
	return (
		<div className='mx-auto w-11/12 md:w-2/3'>
			<div className='flex flex-col'>
				<div className='mx-auto w-full xl:w-2/3'>
					<div className='flex flex-col items-center my-10'>
						<div className='text-6xl mb-8'>Transport på månen</div>
						<div className='text-2xl text-slate-700'>
							Skrevet af Kasper
						</div>
					</div>
					<div className='font-medium text-3xl mb-4'>
						Hvad er problemet?
					</div>
					<div className='mb-12'>
						Hvis du vil kører på månen er der en masse ting du skal
						tage højde for. Det første og mest åbenlyse problem er
						tyngdekraften. Da tyngdekraften på månen er meget svag,
						vil køretøjet meget nemt kunne svæve ud i rummet og det
						vil have meget svært ved at stå fast.
						<br />
						<br />
						Et andet problem ved at kører på månen er månestøvet. Da
						der på månen er et tykt lag støv på overfladen af månen
						betyder det at vores køretøj igen vil have rigtig svært
						ved at stå fast. Det vil være ligesom at kører på et
						tykt lag tørt grus her på jorden.
						<br />
						<br />
						Så er der strålingen. Da der på månen ikke er nogen
						atmosfærer der beskytter mod stråling, betyder det at
						vores bil skal være ekstra beskyttet for at passagererne
						ikke bliver bestrålet uden deres dragt.
						<br />
						<br />
						Endnu et problem på månen er den høje temperatur. Hvis
						man bruger helt normale dæk, ville de meget hurtigt
						smelte eller gå i stykker på anden vis. Derfor skal vi
						bruge speciallavede hjul, lavet til køretøjer der skal
						kører på månen.
						<br />
						<br />
						Til sidst er der problemet med at der ikke er noget
						oxygen på månen. Dette betyder at vores bil ikke kan
						bruge normalt brændstof da det ikke vil kunne brænde
						uden ilt. Derfor skal vores bil finde et alternativ til
						brændstof. Alt dette skal løses for at vi kan kører på
						månen.
					</div>
					<div className='font-medium text-3xl mb-4'>
						Hvordan fungere den?
					</div>
					<div className='mb-12'>
						Da temperaturen på månen ligger mellem -233 °C til 123
						°C ville dækkende på vores bil meget hurtigt gå i
						stykker. Hvis vi vil kører på månen har vi altså brug
						for nogen speciel lavede hjul. Disse hjul er faktisk
						allerede lavet af NASA. Disse hjul er lavet af et
						materiale der hedder titanium nikkel og har ikke brug
						for luft. Hjulene kan holde til ekstrem deformation og
						er derfor rigtig gode til det ukendte terræn på månen.
						Hjulene kan også holde meget mere vægt og derfor behøves
						vi ikke rigtig at tænke på vægten af vores bil. Metallet
						har også et smelte punkt som de høje temperaturer på
						månen ikke kommer tæt på og derfor kan hjulene sagtens
						holde til at kører på månen. Disse hjul løser altså
						vores problem da temperaturen ikke påvirker hjulene.
						<br />
						<br />
						Da der på månen ikke er ilt og vi derfor ikke kan brande
						brændstof, skal vi altså finde en anden energikilde til
						vores køretøj. Her er det åbenlagt at bruge
						bil-batterier. Batterier har nemlig ikke brug for ilt
						for at fungere og derfor vil de fungere fint på månen.
						For at udregne hvor meget strøm vores batteri skal kunne
						indeholde skal vi først finde ud af hvor meget den
						vejer.
						<br />
						<br />
						Da vi gerne vil have at vores køretøj ikke svæver ud i
						rummet, er det en fordel at have et tungere køretøj. En
						klassisk bil vejer cirka 1300 kg. Vi ved at
						tyngdekræften på jorden er cirka 6 gange stærkere og
						derfor skal vores køretøj veje cirka 7900 kg. Dette
						sørger for at vi står bedre fast på månen.
						<br />
						<br />
						Dette betyder også at et normalt batteri altså kan
						trække bilen. Hvis vi siger bilen har et af de nye Tesla
						batterier vil bilen altså kunne kører 550 km ved 60 km/t
						før den skal oplades og dette betyder også at køretøjet
						rent faktisk er effektivt, nemt og hurtigt at bruge.
						<br />
						<br />
						Nu har vi altså vores bil og vi kan derfor give et skud
						på hvordan den kommer til at se ud. 3D-modellen under er
						en altså et markup af hvordan et køretøj på månen kommer
						til at se ud. Modellen kan roteres med mussen og ses fra
						alle vinkler.
					</div>
					<div className='mb-12 w-full h-96'>
						<Model />
					</div>
					<div className='font-medium text-3xl mb-4'>
						Kan man bygge veje på månen?
					</div>
					<div className='mb-12'>
						På månen ville man sagtens kunne bygge veje da terrænet
						ikke er særlig ekstremt. Det ville dog være noget
						sværere at vedligeholde veje på månen. Udover det er det
						ikke nødvendigt da som sagt er månens terræn ikke særlig
						ekstremt.
					</div>
				</div>
			</div>
		</div>
	)
}

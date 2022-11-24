import { useEffect, useState } from 'react';
import Image from 'next/image';

type Supporter = {
	name: string;
	href: string;
	alt: string;
	src: string;
}

interface Props {
	title: string;
	data: string;
}

function Supporters({ title, data }: Props) {
	const [supporters, setSupporters] = useState<Array<Supporter>>([]);

    useEffect(() => {
        const jsonData = require(`../../data/supporters/${data}`);
        setSupporters(jsonData);
    },[data]);

	return ( 
		<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
			<div className="spaceBorder">
				<div className="supporters">
					<h1 style={{color: 'white'}}>{title}</h1>
					<div className="row">
						{
							supporters.map((supporter, index) => {
								return (
									<div className="col-sm" key={`supporter-${index}`}>
										<a href={supporter.href} target="_blank" rel="noreferrer">
											<Image width='125' height='125' className="entidadeImg interactiveImg" alt={supporter.alt} src={supporter.src}/>
										</a>
										<h3 style={{marginTop: "20px", color: "white"}}>{supporter.name}</h3>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Supporters;
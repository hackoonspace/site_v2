import MainPanelStyle from './style';

interface Props {
    title: string;
    description: JSX.Element[];
    image: string;
	reverse?: boolean;
	imgWidth?: number;
	imgHeight?: number;
}

function MainPanel ({ title, description, image, reverse, imgWidth, imgHeight }: Props) {
	const direction = reverse ? 'column-reverse' : 'column';
	const width = imgWidth || 'auto';
	const height = imgHeight || 'auto';
	return (
		<div className='panel-container' id='about' style={{flexDirection: direction}}>
			<div className="containerLogo"> 
				<img className="logo" width={width} height={height} src={image} alt="Logo HackoonWeek"/>
			</div>
			<div className="containerTexto">
				<h1 className="text">{title}</h1>
				<div className='panel-items-container'>
					{ description.map((d, index) => <div className="descricao" key={`d-${index}`}>{d}</div>) }
				</div>
			</div> 
			<style jsx>
				{MainPanelStyle}
			</style>
		</div>
	);
}

export default MainPanel;
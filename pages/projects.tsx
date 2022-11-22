import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Head, Navbar, HorizontalDivider, List, ScrollTop, Footer, Title } from '../components';
import { useWindowSize } from '../utils/resizing';

export default function Projects() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [zoom, setZoom] = useState(false);

    const windowSize = useWindowSize();

    function onDocumentLoadSuccess(params: any) {
        setNumPages(params.numPages);
    }

    const leftPage = () => {
        const newPage = pageNumber - 1;
        if (newPage > 0)
            setPageNumber(newPage);
    }

    const rightPage = () => {
        const newPage = pageNumber + 1;
        if (newPage <= (numPages || 1))
            setPageNumber(newPage);
    }

    const changeZoom = () => {
        setZoom(!zoom);
    }

    const pdfWidth = zoom ? Math.min((windowSize.width || 1000) * 0.9, 1000) : Math.min((windowSize.width || 450) * 0.9, 450);

    return (
        <>
            <Head/>
            <main>
            <Navbar/>
            <List 
                title='Revistas técnicas'
                description='Compilados de artigos e projetos desenvolvidos durante a atividade de extensão semestral/anual do HackoonSpace, ligada a UFSCar - Sorocaba'
                items={[
                    { title: 'Revista - edição 2019', href: '/files/Revista_-_2019.pdf'},
                    { title: 'Revista - edição 2020', href: '/files/Revista_-_2020.pdf'},
                    { title: 'Revista - edição 2021', href: '/files/Revista_-_2021.pdf'}
                ]}
            />
            <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
                <Title text='Revista mais recente'/>
                <div style={{marginTop: 16}}>
                    <Document file='/files/Revista_-_2021.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                        <Page 
                            width={pdfWidth} 
                            pageNumber={pageNumber} 
                            renderAnnotationLayer={false} renderTextLayer={false}
                        />
                        <div>
                            <p className='page-count mt-2'>
                                {pageNumber}/{numPages}
                            </p>
                            <div className='d-flex row justify-content-center gap-3 mt-2 mx-auto'>
                                <button onClick={leftPage} className='col-md page-button'>Anterior</button>
                                <button onClick={changeZoom} className='col-md page-button'>Zoom</button>
                                <button onClick={rightPage} className='col-md page-button'>Próximo</button>
                            </div>
                        </div>
                    </Document>
                </div>
            </div>
            <List 
                title='Playlists de conteúdo'
                description='Compilados de vídeos e lives passados do HackoonSpace'
                items={[
                    { title: 'HackoonWeek 2020', href: 'https://www.youtube.com/watch?v=AHOb6xl9p3M&list=PLSYx7h5HkQPoW5WIdgco9CC3nehcqJYD9'},
                    { title: 'HackoonWeek 2021', href: 'https://www.youtube.com/watch?v=QirPzv4L1qQ&list=PLSYx7h5HkQPq3FyaGPbNyQf6GGhgV0akj'},
                    { title: 'Debates', href: 'https://www.youtube.com/watch?v=LsNiSnrzqq8&list=PLSYx7h5HkQPqPT1vgFMOadh84CZdn235O'}
                ]}
            />
            <List 
                title='Guia para atividade de extensão'
                description='Está interessado na nossa extensão? Ou quer apoiar o Hackoon com um artigo/projeto? Seguem alguns links para te ajudar'
                items={[
                    { title: 'Como fazer artigos e projetos do Hackoon', href: 'https://drive.google.com/file/d/1XgK7N1jNAQZlCngcnfFFAqebvVYOwgJT/view?usp=sharing' },
                    { title: 'Metodologia da atividade', href: 'https://drive.google.com/file/d/1vh1OEVg8hTyP9zycr7VYwlk7MUWgrih4/view?usp=sharing' },
                    { title: 'Template para projetos', href: 'https://github.com/hackoonspace/Hackoonspace-template' },
                    { title: 'Template para artigos', href: 'https://docs.google.com/document/d/1K0a9rRnaQLw8S4OEPLUzsHkiMlewEikI/edit?usp=share_link&ouid=116752840306989541290&rtpof=true&sd=true' }
                ]}
            />
            <ScrollTop />
            <Footer/>
            </main>
        </>
    )
}

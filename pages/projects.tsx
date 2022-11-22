import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Head, Navbar, HorizontalDivider, List, ScrollTop, Footer, Title } from '../components';
import { useWindowSize } from '../utils/resizing';

export default function Projects() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

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
                        <Page width={Math.min((windowSize.width || 500) * 0.9, 500)} pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false}/>
                        <div>
                            <p className='page-count mt-2'>
                                {pageNumber}/{numPages}
                            </p>
                            <div className='d-flex justify-content-center gap-3 mt-2'>
                                <button onClick={leftPage} className='page-button'>Anterior</button>
                                <button onClick={rightPage} className='page-button'>Próximo</button>
                            </div>
                        </div>
                    </Document>
                </div>
            </div>
            <HorizontalDivider />
            <List 
                title='HackoonWeek 2020'
                description='Compilados de artigos e projetos desenvolvidos durante a atividade de extensão semestral/anual do HackoonSpace, ligada a UFSCar - Sorocaba'
                items={[
                    { title: 'Revista - edição 2019', href: '/files/Revista_-_2019.pdf'},
                    { title: 'Revista - edição 2020', href: '/files/Revista_-_2020.pdf'},
                    { title: 'Revista - edição 2021', href: '/files/Revista_-_2021.pdf'}
                ]}
            />
            <ScrollTop />
            <Footer/>
            </main>
        </>
    )
}

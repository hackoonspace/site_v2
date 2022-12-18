import { ChangeEvent, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Head, Navbar, HorizontalDivider, List, ScrollTop, Footer, Title } from '../components';
import { useWindowSize } from '../utils/resizing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import projectsJson from '../data/projects.json';
const { magazines, contents, extension } = projectsJson;

export default function Projects() {
    const [documentIndex, setDocumentIndex] = useState(magazines.length ? (magazines.length - 1) : 0);
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

    const updatePage = (event: ChangeEvent<HTMLInputElement>) => {
        const newPage = Number(event.target.value);

        if (isNaN(newPage) || newPage < 0 || newPage > (numPages || 1))
            return;

        setPageNumber(newPage);
    }

    const changeDocument = (newIndex: number) => {
        if (newIndex > -1 && newIndex < magazines.length)
            setDocumentIndex(newIndex);
    }

    const pdfWidth = zoom ? Math.min((windowSize.width || 1000) * 0.9, 1000) : Math.min((windowSize.width || 450) * 0.9, 450);

    return (
        <>
            <Head/>
            <Navbar/>
            <main>
                <List 
                    title='Revistas técnicas'
                    description='Compilados de artigos e projetos desenvolvidos durante a atividade de extensão semestral/anual do HackoonSpace, ligada a UFSCar - Sorocaba'
                    items={
                        magazines.map((magazine, index) => {
                            return (
                                <li key={`${magazine.title}-item-${index}`} className="list-item list-group-item" onClick={() => changeDocument(index)}>
                                    <button className='project-anchor list-anchor'>
                                        <span 
                                            style={{cursor: 'pointer'}} 
                                            className='list-anchor-text'
                                        >
                                            {magazine.title}
                                        </span>
                                        <a target='__blank' href={magazine.href}>
                                            <FontAwesomeIcon 
                                                style={{
                                                    maxHeight: 22,
                                                    marginLeft: 10,
                                                    verticalAlign: 'text-bottom'
                                                }} 
                                                icon={faFileDownload} 
                                            />
                                        </a>
                                    </button>
                                </li>
                            )
                        })
                    }
                />
                <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
                    <Title text={magazines[documentIndex].title} />
                    <div style={{marginTop: 16}}>
                        <Document 
                            file={magazines[documentIndex].href} 
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading='Carregando documento'
                            error='Problema ao carregar o documento'
                        >
                            <Page 
                                width={pdfWidth} 
                                pageNumber={pageNumber} 
                                noData='Página não encontrada'
                                loading='Carregando página'
                                error='Problema ao carregar a página'
                                renderAnnotationLayer={false} renderTextLayer={false}
                            />
                            <div>
                                <p className='page-count mt-2'>
                                    <input 
                                        className='numeric-input'
                                        type='number' 
                                        step='1' 
                                        value={pageNumber}
                                        onChange={updatePage}
                                    />
                                    /{numPages}
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
                <HorizontalDivider />
                <List 
                    title='Playlists de conteúdo'
                    description='Compilados de vídeos e lives passados do HackoonSpace'
                    items={
                        contents.map((content, index) => {
                            return (
                                <li key={`${content.title}-item-${index}`} className="list-item list-group-item">
                                    <a className='list-anchor' target='__blank' href={content.href}>
                                        <span className='list-anchor-text'>{content.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                />
                <HorizontalDivider />
                <List 
                    title='Guia para atividade de extensão'
                    description='Está interessado na nossa extensão? Ou quer apoiar o Hackoon com um artigo/projeto? Seguem alguns links para te ajudar'
                    items={
                        extension.map((ext, index) => {
                            return (
                                <li key={`${ext.title}-item-${index}`} className="list-item list-group-item">
                                    <a className='list-anchor' target='__blank' href={ext.href}>
                                        <span className='list-anchor-text'>{ext.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                />
                <ScrollTop />
            </main>
            <Footer/>
        </>
    )
}

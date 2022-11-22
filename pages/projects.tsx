import { Head, Navbar, List, ScrollTop, Footer } from '../components';

export default function Home() {
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

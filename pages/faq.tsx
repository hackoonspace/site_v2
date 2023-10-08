import Image from 'next/image';
import { Head, Navbar, HorizontalDivider, FAQ, Footer, ScrollTop } from '../components';

function FAQPage() {
	return ( 
        <>
            <Head />
            <Navbar />
            <main>
                <div className='d-flex align-items-center justify-content-center mt-4'>
                    <Image priority src='/mini_qwerty2.png' alt='' width='250' height='250'/>
                </div>
                <FAQ title='Sobre o HackoonSpace' active data='hackoonspace.json' />
                <HorizontalDivider />
                <FAQ title='Atividades de extensão e complementares' data='extension.json' />
                <HorizontalDivider />
                <div className='d-flex align-items-center justify-content-center mt-4'>
                    <Image priority src='/mini_qwerty1.png' alt='' width='250' height='250'/>
                </div>
                <FAQ title='Atividade do HackoonSpace' data='hackaextension.json' />
                <ScrollTop />
            </main>
            <Footer />
        </>
	)
}

export default FAQPage;
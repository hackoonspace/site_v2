import Image from 'next/image';
import { Head, Navbar, HorizontalDivider, FAQ, Footer, ScrollTop } from '../components';

function FAQPage() {
	return ( 
        <>
            <Head />
            <Navbar />
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <Image priority src='/mini_qwerty2.png' alt='' width='250' height='250'/>
            </div>
            <FAQ title='Dúvidas sobre o HackoonSpace' active data='hackoonspace.json' />
            <HorizontalDivider />
            <FAQ title='Dúvidas sobre a atividade de extensão' data='extension.json' />
            <ScrollTop />
            <Footer />
        </>
	)
}

export default FAQPage;
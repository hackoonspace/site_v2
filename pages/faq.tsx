import Image from 'next/image';
import { Head, Navbar, FAQ, Footer, ScrollTop } from '../components';

function FAQPage() {
	return ( 
        <>
            <Head />
            <Navbar />
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <Image src='/mini_qwerty2.png' alt='' width='250' height='250'/>
            </div>
            <FAQ title='Principais dúvidas sobre o Hackoon' data='hackoonspace.json' />
            <ScrollTop />
            <Footer />
        </>
	)
}

export default FAQPage;
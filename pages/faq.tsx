import { Head, Navbar, FAQ, Footer, ScrollTop } from '../components';

function FAQPage() {
	return ( 
        <>
            <Head />
            <Navbar />
            <FAQ title='FAQ - Principais dúvidas' data='hackoonspace.json' />
            <ScrollTop />
            <Footer />
        </>
	)
}

export default FAQPage;
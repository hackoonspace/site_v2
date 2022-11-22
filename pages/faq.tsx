import { Head, Navbar, FAQ, Panel, Footer, ScrollTop } from '../components';

function FAQPage() {
	return ( 
        <>
            <Head />
            <Navbar />
            <Panel 
                title='Você conhece a HackoonWeek?'
                image='/mini_qwerty2.png'
                description={[
                <p key='panel-1' className='paragraph'>
                    A HackoonWeek é um evento anual sobre cultura hacker, programação e o mundo da computação no geral. Ele é realizado pelo hackerspace <a className='link' href='https://hackoonspace.com' rel='noreferrer' target='_blank'>HackoonSpace</a>, localizado na Universidade Federal de São Carlos, em Sorocaba.
                </p>,
                <p key='panel-2' className='paragraph'>
                    Essa edição, que será entre os dias 12/12 e 16/12, contará com várias atividades diferentes, com o intuito de agregar conhecimento e apresentar nosso trabalho para vocês. Também teremos a participação especial de alguns convidados.
                </p>
                ]}
                reverse
            />
            <FAQ title='Principais dúvidas sobre o Hackoon' data='hackoonspace.json' />
            <ScrollTop />
            <Footer />
        </>
	)
}

export default FAQPage;
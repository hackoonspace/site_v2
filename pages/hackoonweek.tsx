import { Button, Head, Navbar, ScrollTop, Cronogram, Supporters, Footer, Panel, FAQ } from '../components';

export default function HackoonWeek() {
    return (
        <>
            <Head/>
            <main>
                <Navbar/>
                <Panel 
                title="Você conhece a HackoonWeek?"
                image="/hackoonweek2021_logo.png"
                description={[
                    <p key='panel-1'>
                    A HackoonWeek é um evento anual sobre cultura hacker, programação e o mundo da computação no geral. Ele é realizado pelo hackerspace <a className='link' href="https://hackoonspace.com" rel="noreferrer" target="_blank">HackoonSpace</a>, localizado na Universidade Federal de São Carlos, em Sorocaba.
                    </p>,
                    <p key='panel-2'>
                    Essa edição, que será entre os dias 12/12 e 16/12, contará com várias atividades diferentes, com o intuito de agregar conhecimento e apresentar nosso trabalho para vocês. Também teremos a participação especial de alguns convidados.
                    </p>,
                    <p key='panel-3'>
                    Para participar, basta fazer o cadastro neste site, se inscrever nas atividades que você deseja e validar sua presença durante elas. No final do evento, será possível obter um certificado de participação.
                    </p>
                ]}
                />
                <ScrollTop />
                <Cronogram /> 
                <Button text='Inscreva-se agora!' size='bg' href=''/>
                {/* <Sponsors/> */}
                <Supporters />
                <FAQ title='FAQ - Principais dúvidas' data='hackoonweek.json' />
                <Footer/>
            </main>
        </>
    )
}
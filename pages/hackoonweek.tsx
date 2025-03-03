import Image from 'next/image';
import { Button, Head, Navbar, ScrollTop, HorizontalDivider, Cronogram, Supporters, Footer, Panel, FAQ } from '../components';

export default function HackoonWeek() {
    return (
        <>
            <Head/>
            <Navbar/>
            <main>
                <Panel 
                    title="Você conhece a HackoonWeek?"
                    image="/logo-hw2024.png"
                    description={[
                        <p key='panel-1' className='paragraph'>
                            A HackoonWeek é um evento anual sobre cultura hacker, programação e o mundo da computação no geral. Ele é realizado pelo hackerspace <a className='link' href="https://hackoonspace.com" rel="noreferrer" target="_blank">HackoonSpace</a>, localizado na Universidade Federal de São Carlos, em Sorocaba.
                        </p>,
                        <p key='panel-2' className='paragraph'>
                            A edição de 2024 será entre os dias 10/03 e 14/03 e terá várias atividades diferentes, com o intuito de agregar conhecimento e apresentar nosso trabalho para vocês. Também teremos a participação especial de alguns convidados.
                        </p>,
                        <p key='panel-3' className='paragraph'>
                            Para participar, faça o cadastro no formulário do botão abaixo. Se inscreva nas atividades que você deseja e valide sua presença durante elas ao vivo no nosso <a className='link' href='https://youtube.com/@hackoonspace' rel='noreferrer' target='_blank'>canal do Youtube</a>. Ao final do evento, você poderá obter um certificado de participação.
                        </p>
                    ]}
                />
                <Button text='Inscreva-se agora' size='bg' target='__blank' href='https://forms.gle/cmKm2K3SLuyTBgfr7'/>
                <ScrollTop />
                <Cronogram /> 
                <Button text='Assista o evento aqui' size='bg' target='__blank' href='https://www.youtube.com/@hackoonspace'/>
                <Supporters title='Realização' data='hackoonweek.json' />
                <FAQ title='FAQ do evento' active data='hackoonweek.json' />
                <HorizontalDivider />
                <div className='d-flex align-items-center justify-content-center mt-4'>
                    <Image priority src='/tanuki.webp' alt='' width='250' height='250'/>
                </div>
                <FAQ title='FAQ das competições' data='competitions.json' />
            </main>
            <Footer/>
        </>
    )
}
import Head from '../components/head/Head';
import Navbar from '../components/navbar/Navbar';
import MainPanel from '../components/panels/MainPanel';
import Cronogram from '../components/presentation/Cronogram';
import Patrocinio from '../components/home/Sponsors';
import Entidades from '../components/home/Supporters';
import Contact from '../components/home/Contact';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <>
      <Head/>
      <main>
        <Navbar/>
        <MainPanel 
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
        <Cronogram /> 
        <Patrocinio/>
        <Entidades/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

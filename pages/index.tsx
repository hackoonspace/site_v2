import { Head, Navbar, ScrollTop, Contact, Footer, Panel, Supporters } from '../components';

export default function Home() {
  return (
    <>
      <Head/>
      <main>
        <Navbar/>
        <Panel 
          title="Seja bem-vindo(a)"
          image="/HackoonEstampa.webp"
          description={[
            <p key='panel-1' className='paragraph'>
              Você está no site da melhor comunidade hacker desse Brasil!
            </p>,
            <p key='panel-2' className='paragraph'>
              O HackoonSpace é um hackerspace e comunidade ligado a <a className='link' href='https://www.ufscar.br/' target='__blank'>Universidade Federal de São Carlos (UFSCar)</a>, principalmente ao campus de Sorocaba.
            </p>,
            <p key='panel-3' className='paragraph'>
              Nossa missão é desmistificar a figura do hacker, mostrando que ele vai muito além de um simples criminoso. Além disso, queremos trazer, tanto para os alunos da nossa universidade, quanto para as demais pessoas, mais conhecimento sobre computação e hacking.
            </p>,
            <p key='panel-4' className='paragraph'>
              Aproveite a estadia aqui e conheça mais do nosso trabalho!
            </p>
          ]}
          imgWidth={250}
        />
        <ScrollTop />        
        <Contact id='contact' />
        <div className='twitter-list'>
          <a 
            data-width='600' 
            data-height='800' 
            data-lang='pt'
            data-tweet-limit='3'
            data-theme='dark'
            className='twitter-timeline' 
            href='https://twitter.com/HackoonSpace?ref_src=twsrc%5Etfw'
          >
            Tweets do HackoonSpace
          </a> 
        </div>
        <Supporters title='Parceiros' data='hackoonspace.json' />
        <Footer/>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </main>
    </>
  )
}

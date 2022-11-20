import { Button, Head, Navbar, ScrollTop, Cronogram, Supporters, Footer, Panel } from '../components';

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
                {/* <Patrocinio/> */}
                <Supporters />
                <div className="spaceBorder">
                    <div className="termos">
                        <h2>FAQ - Principais dúvidas</h2>
                        <div className="duvida">
                            <h5>O que é a HackoonWeek?</h5>
                            <p>A HackoonWeek é um evento anual, realizado pelo hackerspace <a className='link' target="_blank" rel="noreferrer" href="https://hackoonspace.com">HackoonSpace</a>, localizado na Universidade Federal de São Carlos (UFSCar) em Sorocaba.</p>
                            <p>É uma semana com diversas atividades, como palestras, oficinas, competições e sorteios. Todas elas têm como tema principal as tecnologias ligadas a ciência da computação, como principalmente o mundo hacker e a segurança digital.</p>
                            <p>Este ano, o evento será realizado totalmente online, a partir das inscrições neste site e da transmissão das atividades no canal do <a className='link' target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCPd_Xrz3zH0ySJkcMjRz89w">Youtube do HackoonSpace</a>.</p>
                        </div>
                        <hr className="linhaDuvida"/>
                        <div className="duvida">
                            <h5>Quem pode participar?</h5>
                            <p>Não temos uma restrição sobre quem pode participar. Seja você da UFSCar ou não, formado ou não, ou da área da computação ou não. Apenas atentamos ao fato de que <strong>menores de idade precisam enviar uma autorização direta de seus responsáveis</strong> para a equipe do evento.</p>
                        </div>
                        <hr className="linhaDuvida"/>
                        <div className="duvida">
                            <h5>Como posso participar?</h5>
                            <p>Para participar da HackoonWeek, é necessário criar uma conta aqui no site. Após isso, enviaremos um e-mail pedindo para você confirmar sua conta.</p>
                            <p>Depois de clicar no link de confirmação, basta fazer login e se inscrever nas atividades que você tem interesse! Para cada uma haverá uma transmissão no Youtube na qual os participantes poderão interagir com a equipe do evento e os ministrantes das atividades.</p>
                            <p>Caso você não queira se cadastrar, você ainda pode assistir as transmissões ao vivo no canal do <a className='link' target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCPd_Xrz3zH0ySJkcMjRz89w">Youtube do HackoonSpace</a>. No entanto, você <strong>não</strong> poderá participar <strong>das competições e dos sorteios ou ganhar um certificado de participação</strong>.</p>
                        </div>
                        <hr className="linhaDuvida"/>
                        <div className="duvida">
                            <h5>O que são e como funcionam os certificados?</h5>
                            <p>Os certificados de participação são documentos comprovando a sua participação no evento. Eles são emitidos em conformidade com a Pró-Reitoria de Extensão da UFSCar, a <a className='link' href="https://www.proex.ufscar.br/" rel="noreferrer" target="_blank">PROEX</a> e contam a quantidade de horas de participação que você teve no evento.</p>
                            <p>Alunos de graduação da UFSCar podem usar estes certificados para validar créditos complementares para sua formação acadêmica. Estudantes de escolas e outras instituições de ensino superior precisam conversar diretamente com a coordenação de seus cursos para verificar se há a possibilidade de validar algo semelhante.</p>
                            <p>Todos os certificados serão emitidos e enviados após a finalização do evento, no endereço de e-mail registrado na conta dos participantes cadastrados no site.</p>
                        </div>
                        <hr className="linhaDuvida"/>
                        <div className="duvida">
                            <h5>O que são e como funcionam os sorteios?</h5>
                            <p>
                                No dia 11/12, o último dia do evento, teremos o sorteio, para fins puramente recreativos e sem intenções comerciais, de alguns brindes para os participantes cadastrados no evento. Para participar, basta você se cadastrar no site e confirmar sua presença em pelo menos uma atividade.
                            </p>
                            <p>
                                Quanto mais atividades você participar, mais chances você terá de ganhar o sorteio. Também aumentaremos as chances do participante que vencer o quiz ao vivo (Kahoot) que será realizado no próprio dia 11/12, antes do sorteio.
                            </p>
                            <p>
                                Os prêmios do sorteio serão anúnciados no dia do sorteio. Os vencedores de cada sorteio serão escolhidos ao vivo.
                            </p>
                        </div>
                        <hr className="linhaDuvida"/>
                        <div className="duvida">
                            <h5>Como validar minha presença em uma atividade?</h5>
                            <p>Para validar sua presença, tudo que você precisa fazer é preencher os formulários na plataforma Google Forms que iremos disponibilizar nos 15 primeiros e nos 15 últimos minutos de cada atividade.</p>
                            <p>O primeiro formulário representa a sua &quot;entrada&quot; na atividade. O segundo representa a sua &quot;saída&quot;. Para que possamos confirmar que você participou da atividade, <strong>é necessário que você responda a ambos</strong>.</p>
                            <p>Ambos os formulários serão devidamente anúnciados nas transmissões ao vivo, bem como enviados nos chats de texto das transmissões pela equipe de suporte da HackoonWeek.</p>
                        </div>
                        <hr className="linhaDuvida"/>
                        <div className="duvida">
                            <h5>O que são e como participar das competições?</h5>
                            <p>De todas as atividades da HackoonWeek, as competições talvez sejam as mais especiais. São os momentos em que os participantes do evento podem competir entre si para ganhar prêmios.</p>
                            <p>Cada competição possui regras e prêmios específicos que serão anúnciados previamente e lidos ao vivo em sua abertura. Os participantes que se inscreverem nas competições receberão convites para a plataforma Discord, onde ocorrerão as formações de equipes e a competição em si.</p>
                            <p>Os participantes poderão fazer equipes com conhecidos ou poderão solicitar que a organização da competição os ajude a formar uma equipe.</p>
                        </div>
                        <hr className="linhaDuvida"/>
                        <div className="duvida">
                            <h5>Me inscrevi em uma competição. E agora?</h5>
                            <p>Após se inscrever em uma competição, enviaremos por e-mail as orientações e o convite para o servidor do Discord que abrigará a competição.</p>
                            <p>Caso você deseje apenas assistir a competição, basta não entrar no servidor do Discord. No entanto, você não poderá concorrer aos prêmios ou participar dos desafios.</p>
                            <p>Caso você deseje montar uma equipe e competir, a organização da competição te ajudará com o processo. Depois disso, é só seguir as regras, datas e horários e dar o seu melhor!</p>
                        </div>
                        <hr className="linhaDuvida"/>
                        <div className="duvida">
                            <h5>Minha dúvida não está listada aqui... O que eu faço?</h5>
                            <p>Mande um e-mail ou mensagem pra gente! Estamos correndo bastante para trazer um evento bacana para vocês, mas ao máximo possível iremos te responder e ajudar nas suas dúvidas!</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </>
    )
}
import Image from 'next/image';
import { Head, Navbar, Footer } from '../components';

export default function ErrorPage() {
  return (
    <>
      <Head/>
      <Navbar/>
      <main>
          <div className='d-flex align-items-center justify-content-center h-75'>
              <Image height="450" width="850" src="/error_404.png" alt="Logo HackoonSpace"/> 
          </div>
      </main>
      <Footer/>
    </>
  )
}

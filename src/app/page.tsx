import Link from 'next/link';
import OruForm from './(home)/oru_form';
import OruCard from './(home)/oru_card';

export default function HomePage() {
  return (
    <main className='flex w-full flex-col items-center justify-center p-8'>
      <section>
        <h1 className='text-xl font-semibold'>Welcome to EverDoc</h1>
        <br></br>
      </section>
      <section>
        <OruCard />
      </section>
    </main>
  );
}

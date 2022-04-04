import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section className="container flex flex-col justify-center">
      <div className='w-[25rem] text-center'>
        <h1 className='tracking-tighter font-bold'>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum ipsam ad, repudiandae explicabo quia magni eligendi quidem voluptatem vitae?</p>
      </div>
    </section>
  )
}

export default Home

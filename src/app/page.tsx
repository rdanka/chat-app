import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession();
  redirect('/chat');
  return (
    <div>
      <h1>Home</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.image}</p>
    </div>
  )
}

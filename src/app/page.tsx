import Image from 'next/image'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      <h1>Home</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.image}</p>
    </div>
  )
}

import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";

interface PageProps {
    params: {
        id: string;
    }
}

const Page = async ({params}: PageProps) => {
    const { id } = params;

    return (
        <main className='flex w-full h-screen'>
            <Sidebar />
            <div className='flex-grow flex flex-col items-center  bg-[#2B2D31]'>
                {id}
                <div>message</div>
               <Chat />
            </div>
      </main>
    )
}

export default Page

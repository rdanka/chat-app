interface PageProps {
    params: {
        id: string;
    }
}

const Page = async ({params}: PageProps) => {
    const { id } = params;

    return (
        <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
            asd -  {id} 
        </div>
    )
}

export default Page

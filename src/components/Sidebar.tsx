"use client"

import { Divide, LogOut, MessageCircle, MoreVertical, Plus, Search, UserPlus } from "lucide-react"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import { Input } from "./ui/input"
import { useState } from "react"

const Sidebar = () => {
    const { data: session } = useSession();
    const [nameQuery, setNameQuery] = useState('');
    const users = [{name: 'Lydia Siphron', image: '/Sarah.png'}, {name: 'George Russel', image: '/Adebayo.png'}, {name: 'Charles Leclerc', image: '/Jake.png'}, {name: 'Carlos Sainz', image: '/Lucy.png'}];
    /* if (!session) {
        redirect('/login');
    } */
    return (
        <div className="flex flex-col justify-between  bg-primary h-full gap-4 p-5 w-1/4">
            <div>
                <div className="flex justify-between border-b py-3 mb-3 border-[#3F495C]">
                    <div className="flex">
                        <MessageCircle className="h-8 w-8" />
                        <span>Chat</span>
                    </div>
                    <div className="flex">
                        <Plus className="h-5 w-5" />
                        <UserPlus className="h-5 w-5" />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <Search className="h-4 w-4 absolute left-3 top-3 cursor-pointer" />
                        <Input placeholder="search here..." className="border-none focus:outline-none bg-[#2B2D31] pl-9 rounded-xl" onChange={(e) => setNameQuery(e.currentTarget.value)} />
                    </div>
                    <div className="">
                        {users.filter((item) => item.name.includes(nameQuery)).length === 0 ? <div className="flex justify-center items-center h-20 text-white">No users found</div> : users.filter((item) => item.name.includes(nameQuery)).map((user, index) => ( 
                            <a href={`/chat/${user.name}`} key={index}>
                                <div className="flex justify-between items-center py-2 px-2 my-4 hover:bg-[#2B2D31] rounded-lg cursor-pointer">
                                    <div className="flex gap-4">
                                        <div className="h-12 w-12 overflow-hidden rounded-full">
                                            <Image alt='profile-picture' src={`${user.image}`} width={40} height={40} className="rounded-full h-full w-full object-cover " />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white">{user.name}</span>
                                            <span className="text-sm text-[#828B93]">This is some text to...</span>
                                        </div>
                                    </div>
                                    <MoreVertical className="h-5 w-5 cursor-pointer" />    
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex border-t border-[#3F495C] ">
                <Image alt='profile-picture' src={`/Adebayo.png`} width={50} height={50} className="rounded-full" />
                <span className="text-white">asd</span>
                <LogOut onClick={() => signOut()}/>
            </div>
        </div>
    )
}

export default Sidebar
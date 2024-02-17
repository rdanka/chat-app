import { Send } from "lucide-react"
import { Input } from "./ui/input"

const Chat = () => {
    return (
        <div className="h-full w-full flex justify-end flex-col">
            <div className="p-3 relative">
                <Input className="flex w-full align-bottom outline-none" placeholder="Start typing..."/>
                <Send className="absolute top-5 right-6 hover:text-white cursor-pointer"/>
            </div>
        </div>
    )
}

export default Chat
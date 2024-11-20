import Image from "next/image";
import Link from "next/link";
import logo from '../img/logo.png'
import{Avatar, AvatarImage,AvatarFallback} from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
        <Link href='/'>
        <Image src={logo} alt='dashboard_logo' width={60} />
        </Link>
        
        <DropdownMenu>
      <DropdownMenuTrigger asChild className="focus:outline-none">
      <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn'/>
            <AvatarFallback className="text-black">BT</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem><Link href='/profile'>Profile</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href='/auth'>Logout</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
};
 
export default Navbar;
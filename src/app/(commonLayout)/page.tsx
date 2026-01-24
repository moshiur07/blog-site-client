import { userService } from '@/components/services/user.service';
import {Button} from '@/components/ui/button';
import Image from 'next/image';

export default async function  Home() {
  
 const {data} = await userService.getSession()
 console.log(data);
  return (
    <div className="text-center ">
     <Button> Click me</Button>
     {/* <img src={session.user?.image} alt="use image" /> */}
     
    </div>
  );
}

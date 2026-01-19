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
     <h1>{data?.user.name}</h1>
     <Image src={data?.user.image} alt="" width={500} height={500} className='mx-auto'/>
    </div>
  );
}

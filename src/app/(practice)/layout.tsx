import Link from "next/link";

const PracticeLayout = ({
    children,
    salesSlot,
    marketingSlot
}:{
    children:React.ReactNode,
    salesSlot:React.ReactNode,
    marketingSlot:React.ReactNode,
    
}) => {
    return (
        <div>
            <div className="flex p-16 gap-8 list-none">
                <Link href="/development" className="outline-4 px-4 py-2 rounded-3xl hover:bg-amber-500 hover:text-black hover:cursor-pointer">Development</Link>
                <Link href="/marketing" className="outline-4 px-4 py-2 rounded-3xl hover:bg-amber-500 hover:text-black hover:cursor-pointer">Marketing</Link>
                <Link href="/sales" className="outline-4 px-4 py-2 rounded-3xl hover:bg-amber-500 hover:text-black hover:cursor-pointer">Sales</Link>
                <Link href="/testing" className="outline-4 px-4 py-2 rounded-3xl hover:bg-amber-500 hover:text-black hover:cursor-pointer">Testing</Link>
            </div>
        <div className="flex">
            {salesSlot}
            {marketingSlot}
        </div>
            {children}
        </div>
    );
};

export default PracticeLayout;
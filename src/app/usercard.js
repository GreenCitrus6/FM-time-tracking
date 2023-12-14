import Image from "next/image"
import profilePic from "../../public/images/image-jeremy.png"


export default function UserCard() {
    return(
        <section className="bg-neutral-darkBlue rounded-xl overflow-hidden h-40">
            <div className="userContainer bg-primary-blue rounded-xl flex flex-row justify-center items-center h-[7rem] ">
                <Image 
                    src={profilePic}
                    width={75}
                    alt="Profile Picture"
                    priority="low"
                    className="border-[3px] border-gray-100 rounded-full"
                />

                <div className="nameContainer pl-4">
                    <p className="text-xs font-thin">  
                        Report for
                    </p>
                    <p className="text-xl">
                        Jeremy Robson
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center h-[calc(100%-7rem)] ml-4 mr-4 text-neutral-desaturatedBlue font-normal">
                    <span className="w-1/3 text-center">Daily</span>
                    <span className="w-1/3 text-center">Weekly</span>
                    <span className="w-1/3 text-center">Monthly</span>
            </div>
        </section>
    )
}
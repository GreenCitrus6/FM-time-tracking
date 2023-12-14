import Image from "next/image"
import profilePic from "../../public/images/image-jeremy.png"


export default function UserCard() {
    return(
        <section className="bg-neutral-darkBlue rounded-sm ">
            <div id="userContainer" className="bg-primary-blue">
                <Image 
                    src={profilePic}
                />

                <div id="textContainer">
                    <p className="">  
                        Report for
                        Jeremy Robson
                    </p>
                </div>
            </div>
                <p>
                    Daily
                    Weekly
                    Monthly
                </p>

        </section>
    )
}
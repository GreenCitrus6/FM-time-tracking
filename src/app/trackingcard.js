import Image from 'next/image'
import iconElipsis from '../../public/images/icon-ellipsis.svg'
import iconExercise from '../../public/images/icon-exercise.svg'
import iconPlay from '../../public/images/icon-play.svg'
import iconSelfCare from '../../public/images/icon-self-care.svg'
import iconSocial from '../../public/images/icon-social.svg'
import iconStudy from '../../public/images/icon-study.svg'
import iconWork from '../../public/images/icon-work.svg'


// will use Work as a placeholder while setting up the structure of the page. 
export default function TrackingCard() {
    
    return(
        <section className="bg-primary-lightOrange rounded-xl h-[8.5rem] overflow-hidden z-[-20]">
            <div className="decorBanner flex justify-end overflow-hidden h-16 mb-[-2rem] z-[-10]">
                <Image 
                    src={iconWork}
                    width={79}
                    height={79}
                    alt=""
                    priority="low"
                    className="mt-[-0.6em] mr-4 z-[-1] relative"
                />
            </div>
            <div className="bg-neutral-darkBlue rounded-xl z-30 h-[calc(100%-2rem)] w-full p-4 pt-6">
                <div className="flex justify-between items-center">
                    <h2 className="font-normal text-md">Work</h2>
                    <Image
                        src={iconElipsis}
                        width={21}
                        height={5}
                        alt="..."
                        className="w-[21px] h-[5px]"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-2xl">32hrs</span>
                    <span className="text-neutral-paleBlue text-xs">Last Week - <span>36hrs</span></span>
                </div>
            </div>
        </section>
    )
}
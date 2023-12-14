import Image from 'next/image'
import iconElipsis from '../../public/images/icon-ellipsis.svg'
import iconExercise from '../../public/images/icon-exercise.svg'
import iconPlay from '../../public/images/icon-play.svg'
import iconSelfCare from '../../public/images/icon-self-care.svg'
import iconSocial from '../../public/images/icon-social.svg'
import iconStudy from '../../public/images/icon-study.svg'
import iconWork from '../../public/images/icon-work.svg'
import { promises as fs } from 'fs'

// will use Work as a placeholder while setting up the structure of the page. 
export default async function TrackingCard( {categoryIndex, timeFrame } ) {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    const data = JSON.parse(file);
    
    const categoryStyles = [
        {
            banner: ' bg-primary-lightOrange',
            icon: iconWork
        },
        {
            banner: ' bg-primary-softBlue',
            icon: iconPlay
        },
        {
            banner: ' bg-primary-lightRed',
            icon: iconStudy
        },
        {
            banner: ' bg-primary-limeGreen',
            icon: iconExercise
        },
        {
            banner: ' bg-primary-violet',
            icon: iconSocial
        },
        {
            banner: ' bg-primary-softOrange',
            icon: iconSelfCare
        }
    ];

    return(
        <section className={"rounded-xl h-[8.5rem] max-w-[25rem] overflow-hidden z-[-20]" + categoryStyles[categoryIndex].banner}>
            <div className="decorBanner flex justify-end overflow-hidden h-16 mb-[-2rem] z-[-10]">
                <Image 
                    src={categoryStyles[categoryIndex].icon}
                    width='auto'
                    height='auto'
                    alt=""
                    priority="low"
                    className="mt-[-0.6em] mr-4 z-[-1] relative"
                />
            </div>
            <div className="bg-neutral-darkBlue rounded-xl z-30 h-[calc(100%-2rem)] w-full p-4 pt-6">
                <div className="flex justify-between items-center">
                    <h2 className="font-normal text-md">{data[categoryIndex].title}</h2>
                    <Image
                        src={iconElipsis}
                        width={21}
                        height={5}
                        alt="..."
                        className="w-[21px] h-[5px]"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-2xl">{data[categoryIndex].timeframes[timeFrame].current}hrs</span>
                    <span className="text-neutral-paleBlue text-xs">Last Week - <span>{data[categoryIndex].timeframes[timeFrame].previous}hrs</span></span>
                </div>
            </div>
        </section>
    )
}
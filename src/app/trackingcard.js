'use client';

import Image from 'next/image'
import iconElipsis from '../../public/images/icon-ellipsis.svg'
import iconExercise from '../../public/images/icon-exercise.svg'
import iconPlay from '../../public/images/icon-play.svg'
import iconSelfCare from '../../public/images/icon-self-care.svg'
import iconSocial from '../../public/images/icon-social.svg'
import iconStudy from '../../public/images/icon-study.svg'
import iconWork from '../../public/images/icon-work.svg'
import data from './data.json'

export default function TrackingCard( {categoryIndex, timeFrame } ) {


    const categoryStyles = [
        {
            banner: ' bg-primary-lightOrange',
            icon: iconWork,
        },
        {
            banner: ' bg-primary-softBlue',
            icon: iconPlay,
        },
        {
            banner: ' bg-primary-lightRed',
            icon: iconStudy,
        },
        {
            banner: ' bg-primary-limeGreen',
            icon: iconExercise,
        },
        {
            banner: ' bg-primary-violet',
            icon: iconSocial,
        },
        {
            banner: ' bg-primary-softOrange',
            icon: iconSelfCare,
        }
    ];

    return(
        <section className={"rounded-xl h-[8.5rem] w-full max-w-[25rem] overflow-hidden md:h-full"}>
            <div className={"decorBanner flex justify-end overflow-hidden rounded-b-none h-16 mb-[-2rem] z-[-10] md:h-20 relative" + categoryStyles[categoryIndex].banner}>
                <Image 
                    src={categoryStyles[categoryIndex].icon}
                    alt=""
                    priority="low"
                    className="mt-[-0.6em] mr-4 z-[-1] relative w-auto h-auto max-w-[90px]"
                />
            </div>
            <div className="bg-neutral-darkBlue rounded-xl h-[calc(100%-2rem)] w-full p-4 pt-6
            md:h-[calc(100%-3rem)] md:pl-6
            md:flex md:flex-col
            transition ease-out duration-250
            hover:cursor-pointer
            hover:bg-blue-950
            active:bg-blue-900">
                <div className="flex justify-between items-center">
                    <h2 className="font-normal text-md md:text-lg md:font-bold">{data[categoryIndex].title}</h2>
                    <Image
                        src={iconElipsis}
                        width={21}
                        height={5}
                        alt="..."
                        className="w-[21px] h-[5px] transition ease-out duration-350 hover:cursor-pointer hover:saturate-0 hover:brightness-200"
                    />
                </div>
                <div className="flex justify-between items-center
                md:flex-col md:items-start md:pt-3">
                    <span className="text-2xl lg:text-4xl xl:text-6xl lg:font-extralight">{data[categoryIndex].timeframes[timeFrame].current}hrs</span>
                    <span className="text-neutral-paleBlue text-xs md:pt-2">Last Week - <span>{data[categoryIndex].timeframes[timeFrame].previous}hrs</span></span>
                </div>
            </div>
        </section>
    )
}
import React, {useState} from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import placeholderImage from '../../imgs/placeHolderFundraiserPic.jpg'
import { CgProfile } from 'react-icons/cg'

// Fundraiser Component
const Fundraiser = (props) => {
    const readMoreReadLessCss = 'flex flex-col items-center text-lg text-slate-600 hover:text-blue-300 duration-200 pt-4';

    return (
        <div className='flex-row justify-left text-left w-full'>
            <div className='flex font-bold text-4xl'>{props.title}</div>
            <div className="object-contain pt-4">
                <img src={placeholderImage} className="object-contain pt-4" alt="Logo" />
            </div>
            <div className='flex text-sm italic pt-4'>Created On: {props.createdDate}</div>
            <div className='flex text-sm italic'>Ends On: {props.plannedEndDate}</div>
            <div className='flex text-sm italic'>Tags:  {props.tags.map((tag) => (
                <div key={tag}>
                    <div className="pl-4">{tag}</div>
                </div>
            ))}
            </div>
            <hr className="h-px opacity-25 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex text-2xl">About:</div>
            <div className='pt-4'>
                <ReactReadMoreReadLess
                    charLimit={300}
                    readMoreText={"Read more"}
                    readLessText={"Read less"}
                    readMoreClassName={readMoreReadLessCss}
                    readLessClassName={readMoreReadLessCss}
                    >
                    {props.description != undefined ? props.description : ""}
                </ReactReadMoreReadLess>
            </div>
            {/* <div className='flex pt-4'>{ props.description }</div> */}
            <hr className="h-px opacity-25 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className='flex text-2xl pb-4'>Organizer: </div>
            <div className='pl-4'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <CgProfile  size={40} />
                            </td>
                            <td className='pl-4'>
                                <div className='flex font-bold'>{props.organizerName}</div>
                                <div className='flex'>{props.organizerEmail}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr className="h-px opacity-25 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
    )
}

export default Fundraiser
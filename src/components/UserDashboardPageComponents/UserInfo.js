import React from 'react'
import { CgProfile } from 'react-icons/cg'
import editButtonImage from '../../imgs/icons8-edit-48.png'
import { useNavigate, useParams } from "react-router-dom";

const UserInfo = ({ props }) => {
    const {userId} = useParams();
    const navigate = useNavigate();
  return (
    <div className=' bg-gray-100 w-fit p-8 rounded'>
        <table>
        <tbody>
        <tr>
            <td>
                <CgProfile  size={40} />
            </td>
            <td className='pl-4 flex flex-col flex-wrap'>
                <div className='flex text-lg'>{props.firstName + " " + props.lastName}</div>
                <div className='flex text-lg pt-2'>{props.email}</div>
            </td>
            <td>
                {/* onClick={ navigate(`/dashboard/${userId}/edit`) } */}
                <button onClick={() => navigate(`/dashboard/${userId}/edit`)} className='pl-8'>
                    <img src={editButtonImage} className='w-8'></img>
                </button>
            </td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}

export default UserInfo
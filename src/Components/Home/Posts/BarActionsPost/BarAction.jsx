import React from 'react';
import { BsChat, BsHeart,BsBookmark,BsFillBookmarkFill } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'

import './bar-action.css'
import ButtonBar from './ButtonBar'


const BarAction = () => {


  


    const actions = [<FiSend/>,<BsChat/>,<BsHeart/>]

    return ( 
        <div className="bar-action-post">
            <div>
            {actions.map((ico,id) => <ButtonBar key={id} icon={ico}/>)}
            </div>
            <div >
            <ButtonBar icon={<BsBookmark/>}/>
            </div>
        </div>
     );
}
 
export default BarAction;
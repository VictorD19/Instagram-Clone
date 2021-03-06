import React from 'react';
import { AiFillHome ,AiOutlineCompass,AiOutlineHeart} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import ItemConta from './ItemConta';

import './options-item.css'
const ObtionMenus = () => {
    const listOptions = [<ItemConta/>,<AiOutlineHeart/>,<AiOutlineCompass/>,,<FiSend/>,<AiFillHome/>]
   

    return (
        <ul className="options-container">
            {/* <li className="options-item"><AiFillHome/></li>
            <li className="options-item"><FiSend/></li>
            <li className="options-item"><AiOutlineCompass/></li>
            <li className="options-item"><AiOutlineHeart/></li> */}

            {listOptions.map((icon,id) => <li key={id} className="options-item">{icon}</li>)}
        </ul>
    );
}
 
export default ObtionMenus;
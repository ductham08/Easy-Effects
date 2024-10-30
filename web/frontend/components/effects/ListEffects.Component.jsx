import React, { useState } from 'react'
import "../../assets/scss/Components/ListEffects.Component.scss"
import LoadingComponent from '../Loading.Component';
import { useGetEffectsQuery } from '../../app/apis/effect';

const ListEffectsComponent = () => {
    const [itemActive, setItemActive] = useState(0);
    const {data:dataEffects = [], isLoading: loadingGetEffects} = useGetEffectsQuery()
     
    const handleChangeEffect = (item) => {
        setItemActive(item?._id)
    }

    if (loadingGetEffects){
        return (
            <LoadingComponent/>
        )
    }
    return (
        <div className='ef-list-effects'>
            {
                dataEffects.data.map((item) => (
                    <div onClick={() => handleChangeEffect(item)} key={item._id} className={`ef-effect-item ${itemActive === item._id ? 'active' : ''} `} id={`ef-item-${item._id}`}>
                        <p>{item.effectName}</p>
                    </div>        
                ))
            }   
        </div>
    )
}

export default ListEffectsComponent

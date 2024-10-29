import React, { useState } from 'react'
import "../../assets/scss/Components/ListEffects.Component.scss"

const ListEffectsComponent = () => {
    const [itemActive, setItemActive] = useState(0);

    const listEffect = [
        {
            id: 0,
            effectName: "Effect one",
            effectClass: "effect-one"
        },
        {
            id: 1,
            effectName: "Effect two",
            effectClass: "effect-two"
        },
        {
            id: 2,
            effectName: "Effect three",
            effectClass: "effect-three"
        },
        {
            id: 3,
            effectName: "Effect four",
            effectClass: "effect-four"
        }
    ]

    const handleChangeEffect = (item) => {
        setItemActive(item?.id)
    }

    return (
        <div className='ef-list-effects'>
            {
                listEffect.map((item) => (
                    <div onClick={() => handleChangeEffect(item)} key={item.id} className={`ef-effect-item ${itemActive === item.id ? 'active' : ''} `} id={`ef-item-${item.id}`}>
                        <p>{item.effectName}</p>
                    </div>        
                ))
            }   
        </div>
    )
}

export default ListEffectsComponent

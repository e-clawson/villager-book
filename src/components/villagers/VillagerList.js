import React from 'react'
import { VillagerCard } from './VillagerCard'

export const VillagerList = ({villagers}) => {
    const villagersCards = villagers.map(villager => <VillagerCard villager={villager} />)

    return (
        <div>
            {villagersCards}
        </div>
    )
}

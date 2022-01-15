import { VillagerCard } from './VillagerCard'

export const VillagerList = ({villagers}) => {
    const villagersCards = villagers.map(villager => <VillagerCard villager={villager} key={villager.id}/>)

    return (
        <div>
            <h2>Villagers</h2>
            <div style = {{display:'flex', flexWrap:'wrap'}}>{villagersCards}</div>
        </div>
    )
}

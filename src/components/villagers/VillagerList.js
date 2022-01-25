import { VillagerCard } from './VillagerCard'

export const VillagerList = ({villagers, addToFavorites}) => {
    const villagersCards = villagers.map(villager => <VillagerCard villager={villager} key={villager.id} addToFavorites={addToFavorites}/>)

    return (
        <div>
            <h2>Villagers</h2>
            <div style = {{display:'flex', flexWrap:'wrap'}}>{villagersCards}</div>
        </div>
    )
}

import { VillagerCard } from './VillagerCard'

export const VillagerList = ({villagers}) => {
    const villagersCards = villagers.map(villager => <VillagerCard villager={villager} key={villager.id}/>)

    return (
        <div>
          {villagersCards}
        </div>
    )
}

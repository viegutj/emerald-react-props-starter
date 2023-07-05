import CreatureItem from "../CreatureItem/CreatureItem"

function CreatureList(props) {
    return(
        <ul>
            {
                props.creatureList.map(creatureItem => 
                    (<CreatureItem key={creatureItem.id} creature={creatureItem}/>)
                )
            }
        </ul>
    )
}
export default CreatureList
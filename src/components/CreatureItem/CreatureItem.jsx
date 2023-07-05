// us {} as in props as object destructuring
function CreatureItem({creature}) {
    return(
        (<li>{creature.name} is from {creature.origin}</li>)
    )
}

export default CreatureItem
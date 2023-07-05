import {useState} from 'react';

function CreatureForm(props) {

    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // POST new creature
            // pass the data from the form
        props.addNewCreature({
            name: newCreatureName,
            origin: newCreatureOrigin
        });

        // clear our inputs
        setNewCreatureName('');
        setNewCreatureOrigin('')
    }
    
    return(
        // TODO figure out handleSubmit
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
            onChange={(event) => setNewCreatureName(event.target.value)}
            value={newCreatureName}
        />
        <label>Origin:</label>
        <input 
        onChange={(event) => setNewCreatureOrigin(event.target.value)}
        value={newCreatureOrigin}
        />
        <button type="submit">Add New Creature</button>

    </form>
    );
};

export default CreatureForm
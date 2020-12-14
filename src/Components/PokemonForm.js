import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

export default function PokemonForm({ addPokemon }) {
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [frontUrl, setFrontUrl] = useState('');
    const [backUrl, setBackUrl] = useState('');

    const resetState = () => {
        setName('');
        setHp('')
        setFrontUrl('');
        setBackUrl('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/pokemon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                stats: [{
                        value: hp,
                        name: 'hp'
                }],
                sprites: {
                    front: frontUrl,
                    back: backUrl
                }
            })
        })
            .then(resp => resp.json())
            .then(pokemon => addPokemon(pokemon));
            resetState();
    };

    return (
        <div>
            <h3>Add Pokemon</h3>
            <Form onSubmit={event => handleSubmit(event)}>
            <Form.Group widths="equal">
                <Form.Input
                    fluid
                    name="name"
                    label="Name"
                    placeholder="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <Form.Input
                    fluid
                    name="hp"
                    label="hp"
                    placeholder="hp"
                    value={hp}
                    onChange={event => setHp(event.target.value)}
                />
                <Form.Input
                    fluid
                    name="frontUrl"
                    label="Front Image URL"
                    placeholder="url"
                    value={frontUrl}
                    onChange={event => setFrontUrl(event.target.value)}
                />
                <Form.Input
                    name="backUrl"
                    fluid
                    label="Back Image URL"
                    placeholder="url"
                    value={backUrl}
                    onChange={event => setBackUrl(event.target.value)}
                />
            </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
}
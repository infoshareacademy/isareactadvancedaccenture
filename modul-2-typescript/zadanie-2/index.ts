// Napisz funkcję processValue, która przyjmuje argument typu unknown, a zwraca number. 

// Użyj typeof oraz instanceof do określenia typu danych i wykonaj odpowiednie operacje/
// Jeśli to string czy tablica, zwróć jego długość, a jeśli number, to zwróć jego wartość. 
// W przypadku boolean zwróć 1 lub 0, a dla obiektu rzuć błędem.

const processValue = (arg) => {

}



// Otypuj funckję z uzyciem "never", "void" oraz "unknown"

type Car = {
    brand: string;
    model: string;
    year: number,
    type: 'car'
}

type Bike = {
    brand: string;
    model: string;
    type: 'bike'
}

const logger = (errorOrString) => {
    console.error(errorOrString)
}

const generateVehicle = (vehicle) => {
    switch (vehicle.type) {
        case 'car':
            return `${vehicle.brand} ${vehicle.model} ${vehicle.year}`
        case 'bike':
            return `${vehicle.brand} ${vehicle.model}`
        default:
            logger(vehicle)
    }
}

// Otypuj funckję z uzyciem type gurads

type Pokemon = {
    type: string,
    atack: number,
    defence: number,
    health: number,
    scratch: () => '💅'
}

type FirePokemon = Pokemon & {
    vulnerability: 'water',
    fireball: () => '️‍🔥'
}

type WaterPokemon = Pokemon & {
    vulnerability: 'grass',
    watergun: () => '💦'
}

const usePokemonSpecialPower = (pokemon: Pokemon) => {
    if (pokemon.vulnerability === 'water') {
        pokemon.fireball()
    }

    if (pokemon.vulnerability === 'water') {
        pokemon.watergun()
    }

    pokemon.scratch();
}

// Otypuj funckję z uzyciem słowa kluczowego as

const tabs = [
    [
        { id: 'field1', name: 'asd' },
        { id: 'field2', name: 'asd2' },
        { id: 'field3', name: 'asd3' },
    ],
    [
        { id: 'field4', name: 'asd4' },
        { id: 'field5', name: 'asd5' },
    ]
]

type fieldIds = 'field1' | 'field2' | 'field3' | 'field4' | 'field5'

const getAllFields = (): Record<fieldIds, string> => {
    const fields = {};

    tabs.forEach(tab => {
        tab.forEach(field => {
            fields[field.id] = {
                fieldName: field.name
            }
        })
    })

    return fields;
}



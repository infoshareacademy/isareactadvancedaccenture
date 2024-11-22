// Napisz funkcję processValue, która przyjmuje argument typu unknown, a zwraca number. 

// Użyj typeof oraz instanceof do określenia typu danych i wykonaj odpowiednie operacje/
// Jeśli to string czy tablica, zwróć jego długość, a jeśli number, to zwróć jego wartość. 
// W przypadku boolean zwróć 1 lub 0, a dla obiektu rzuć błędem.

const processValue = (arg: unknown): number => {
    if (typeof arg === 'string') {
        return arg.length
    }

    if (arg instanceof Array) {
        return arg.length
    }

    if (typeof arg === 'number') {
        return arg
    }

    if (typeof arg === 'boolean') {
        return arg === true ? 1 : 0
    }

    if (typeof arg === 'object') {
        throw Error('nie umiem policzyć')
    }

    return 0
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

const logger = (errorOrString: unknown): void => {
    console.error(errorOrString)
}

const generateVehicle = (vehicle: Car | Bike) => {
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
    scratch: () => '💅',
    vulnerability?: string
}

type FirePokemon = Pokemon & {
    vulnerability: 'water',
    fireball: () => '️‍🔥'
}

type WaterPokemon = Pokemon & {
    vulnerability: 'grass',
    watergun: () => '💦'
}

const isFirePokemon = (pokemon: Pokemon): pokemon is FirePokemon => {
    // return (pokemon as FirePokemon).vulnerability === 'water'
    return pokemon.hasOwnProperty('fireball')
}

const isWaterPokemon = (pokemon: Pokemon): pokemon is WaterPokemon => {
    return pokemon.vulnerability === 'grass'
}

const usePokemonSpecialPower = (pokemon: Pokemon) => {
    if (isFirePokemon(pokemon)) {
        pokemon.fireball()
    }

    if (isWaterPokemon(pokemon)) {
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

const getAllFields = (): Record<fieldIds, { fieldName: string }> => {
    const fields = {} as Record<fieldIds, { fieldName: string }>;

    tabs.forEach(tab => {
        tab.forEach(field => {
            fields[field.id] = {
                fieldName: field.name
            }
        })
    })

    return fields;
}



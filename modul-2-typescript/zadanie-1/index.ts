type User = {
    name: string;
}

interface IUser {
    name: string;
}

// Rozszerzanie
// Dodaj nowe pole "role" do User i IUser, które moze przyjąć jedynie opcje "user" lub "admin"


// Nowy typ Admin
// Stwórz nowy typ, który będzie zawierał wszytsko co ma poprzedni typ User / IUser (ale "role" będzie tylko jedną opcją) 
// i dodatkowo będzie pole "permissions" jako tablica ciągów znaku


// Stwórz typ Person który będzie albo User albo Admin oraz type IPerson który będzie IUser albo IAdmin


// --------------------------------------------------------

// Poprawa FetchData tak by mozna sprecyzowac czym jest data i wykorzystaj go w przykładach
type FetchData = {
    isLoading: boolean;
    error: Error | null;
    data: string[]
}

const result: FetchData = {
    isLoading: false,
    error: null,
    data: ['a', 'b', 'c']
}

const result2: FetchData = {
    isLoading: false,
    error: null,
    data: [1, 2, 3]
}

const result3: FetchData = {
    isLoading: false,
    error: null,
    data: { data: [], error: null }
}





// Stwórz typ Store który przyjmuje dwa parametry, 
// który decdydują jaki typ mają przechowywane dane oraz
// oraz jaki typ ma error stack w type StoreError (message jest zawsze string)
// Wykorzystaj go w podanych przykładach

const store: Store = {
    data: {
        key: 'infoshare',
        key2: 'academy'
    },
    error: {
        message: 'message',
        stack: {
            componenet: "App",
            description: 'to jest stack error'
        }
    }
}

const store2: Store = {
    data: ['a', 'b', 'c'],
    error: {
        message: 'message',
        stack: {
            cause: "Caused by: Error",
            message: 'Uncaught Error: Outer Error"
        }
    }
}
type User = {
    name: string;
}

interface IUser {
    name: string;
}

// Rozszerzanie
// Dodaj nowe pole "role" do User i IUser, które moze przyjąć jedynie opcje "user" lub "admin"

interface IUser {
    role: "user" | "admin"
}

const iuser: IUser = {
    name: 'asd',
    role: "user"
}

// nie dziala
// type User = {
//     role: "user" | "admin"
// }
type NewUser = User & {
    role: "user" | "admin"
}

const user: NewUser = {
    name: 'asd',
    role: "user"
}


// Nowy typ Admin
// Stwórz nowy typ, który będzie zawierał wszytsko co ma poprzedni typ User / IUser (ale "role" będzie tylko jedną opcją) 
// i dodatkowo będzie pole "permissions" jako tablica ciągów znaku

interface IAdmin extends IUser {
    role: "admin";
    permissions: string[]
}

const iadmin: IAdmin = {
    name: 'asd',
    role: "admin",
    permissions: ["linux"]
}

type Admin = NewUser & {
    role: "admin";
    permissions: string[]
}

const admin: Admin = {
    name: 'asd',
    role: "admin",
    permissions: ["linux"]
}

// Stwórz typ Person który będzie albo User albo Admin oraz type IPerson który będzie IUser albo IAdmin

type Person = User | Admin;
type IPerson = IUser | IAdmin;

// --------------------------------------------------------

// Poprawa FetchData tak by mozna sprecyzowac czym jest data i wykorzystaj go w przykładach
type FetchData<T> = {
    isLoading: boolean;
    error: Error | null;
    data: T
}

const result: FetchData<string[]> = {
    isLoading: false,
    error: null,
    data: ['a', 'b', 'c']
}

const result2: FetchData<number[]> = {
    isLoading: false,
    error: null,
    data: [1, 2, 3]
}

const result3: FetchData<{ data: string[], error: Error | null }> = {
    isLoading: false,
    error: null,
    data: { data: [], error: null }
}





// Stwórz typ Store który przyjmuje dwa parametry, 
// który decdydują jaki typ mają przechowywane dane oraz
// oraz jaki typ ma error stack w type StoreError (message jest zawsze string)
// Wykorzystaj go w podanych przykładach

interface StoreError<S> {
    message: string;
    stack: S
}

interface Store<T, S> {
    data: T,
    error: StoreError<S>
}

const store: Store<{ key: string, key2: string }, { component: string, description: string }> = {
    data: {
        key: 'infoshare',
        key2: 'academy'
    },
    error: {
        message: 'message',
        stack: {
            component: "App",
            description: 'to jest stack error'
        }
    }
}

const store2: Store<string[], { cause: string, message: string }> = {
    data: ['a', 'b', 'c'],
    error: {
        message: 'message',
        stack: {
            cause: "Caused by: Error",
            message: 'Uncaught Error: Outer Error'
        }
    }
}
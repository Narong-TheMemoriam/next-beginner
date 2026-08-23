export default function TypescriptPage() {
    interface User {
        fullName: string;
        age: number;
        gender: string;
    }

    const greeting=(user:User) => {
        return `Hello, ${user.fullName}! You are ${user.age} years old and your gender is ${user.gender}`;
    };

    const user: User = {
        fullName: 'John Doe',
        age: 30,
        gender: 'Male'
    };
    return (
        <div>
            {greeting(user)}
        </div>
    );
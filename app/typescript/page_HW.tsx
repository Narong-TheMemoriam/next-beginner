import { useState } from "react";

export default function SignUpProps() {
    interface OnSubmit {
        email: string;
        password: string;
    }
    const [email, setEmail] =useState<string>("");
    const [password, setPassword] =useState<string>("");
    const onSubmit: OnSubmit = {
        email: email,
        password: password
    };
    return (
        <div>
            <h1>Sign Up</h1>
        </div>
    );}
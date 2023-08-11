import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "./Auth.css";
import { Link } from "react-router-dom";
import pic1 from ".././images/pic1.jpg";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password, name);

        await signup(email, password, name);
        console.log(error);

    };

    return (
        <div className="grid gap-0 grid-cols-3 mt-10 w-fit mx-auto">

            <form className="signup col-span-2" onSubmit={handleSubmit}>
                <h3 className="text-center font-VesperLibre text-4xl" >Sign Up</h3>
                <label className="text-2xl font-ab  mt-10 mb-3">Name:</label>
                <input
                    className="text-lg"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label className="text-2xl font-ab mt-8 mb-3">Email address:</label>
                <input
                    className="text-lg"
                    type=""
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label className="text-2xl font-ab mt-8 mb-3" >Password:</label>
                <input
                    className="text-lg"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <div className="flex flex-col items-center mt-10">
                    <button disabled={isLoading} className="text-3xl font-f1 rounded-lg mb-3" >Sign Up </button>
                    {error && <div className="error">{error}</div>}
                    <span className="mt-3">Already a member?
                    </span>
                    <Link className="text-blue-700" to="/login">Login</Link>
                </div>


            </form>
            <div>
                <img className="w-72 h-full " src={pic1} alt="motivation"></img>
            </div>
        </div>
    );
};

export default Signup;

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

function Signup(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const navigate = useNavigate();
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true);

        // Input validation
        if (name === "" || email === "" || password === "") {
            setLoading(false);
            toast.error("All fields are required");
            return; // Ensure function stops here
        }

        //password validation
        if(password.length < 6) {
            setLoading(false);
            toast.error("Password must be atleast 6 characters long");
            return;
        }

        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setLoading(false);
            toast.error("Please enter a valid email");
            return;
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);
            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now(),
            };
            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);
            toast.success("Signup is successful");
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('user', JSON.stringify(users))
            props.setIsLogged(true);
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
            navigate("/");
        } catch (error) {
            // Handle error codes explicitly and log them
            console.error("Signup Error:", error); // Log error for debugging
            if (error.code === 'auth/email-already-in-use') {
                toast.error("Email already exists");
            } 
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {loading && <Loader />}
            <div className="bg-gray-800 px-10 py-10 rounded-xl">
                <div className="">
                    <h1 className="text-center text-white text-xl mb-4 font-bold">Signup</h1>
                </div>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Name"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Password"
                    />
                </div>
                <div className="flex justify-center mb-3">
                    <button
                        onClick={signup}
                        className="bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg">
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className="text-white">
                        Have an account?{' '}
                        <Link className="text-red-500 font-bold" to={'/login'}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;

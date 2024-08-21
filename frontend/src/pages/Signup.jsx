import { Heading } from '../components/common/Heading';
import { Subheading } from '../components/Subheading';
import { InputBox } from '../components/common/InputBox';
import { Button } from '../components/common/Button';
import { ButtonWarning } from '../components/BottomWarning';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Signup() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username: Email,
                firstname: FirstName,
                lastname: LastName,
                password: Password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/Dashboard");
        } catch (err) {
            setError("Email already taken");
        }
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <Subheading label={"Enter Your info to make your account"} />
                    <InputBox onChange={e => setFirstName(e.target.value)} label={"FirstName"} placeholder={"Arshit"} />
                    <InputBox onChange={e => setLastName(e.target.value)} label={"LastName"} placeholder={"Sharma"} />
                    <InputBox onChange={e => setEmail(e.target.value)} label={"Email"} placeholder={"arshit@gmail.com"} />
                    <div className="relative">
                        <InputBox
                            type={showPassword ? "text" : "password"}
                            onChange={e => setPassword(e.target.value)}
                            label={"Password"}
                            placeholder={"1234567890"}
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center  pt-5 pr-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁️"} {/* Icon for show/hide password */}
                        </span>
                    </div>
                    <div className="pt-1">
                        <Button onClick={handleSignup} label={"Signup"} />
                    </div>
                    {error && <div className="mt-2 text-red-500">{error}</div>}
                    <ButtonWarning label={"Already Have Account"} buttonText={"Signin"} to={"/signin"} />
                </div>
            </div>
        </div>
    );
}

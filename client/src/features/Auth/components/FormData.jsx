import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const FormData = ({initialMode}) => {



    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 px-4">
        
                    <div className="relative w-full max-w-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8">
        
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>

                        {initialMode === "login" ? <LoginForm /> : <SignUpForm />}
        
                    </div>
                </div>
    )
};

export default FormData;

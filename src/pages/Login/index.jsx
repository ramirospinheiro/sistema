import { Link, useNavigate } from "react-router-dom"
import svg from "/public/tablet-login-animate.svg"  

export default function LoginPage(){
    const navigate = useNavigate()
    return (
        <div className="w-full h-screen flex">
            <div className="w-[40%] h-full flex items-center justify-center ">
                {/* metodo Link: pode incluir links externos */}
                {/* <Link to="/cadastro">Cadastro</Link> */}

                {/* metodo navigate: apenas paginas internas, é mais rapido mas é uma biblioteca, portanto melhor evitar */}
                {/* <button onClick={() => navigate("/cadastro")}>Cadastrar</button> */}

                
                {/* metodo window: apenas paginas internas, mais rapido e é nativa (nao é uma biblioteca) */}
                {/* metodo window é a melhor opção de acordo com o professor */}
                <button onClick={() => window.location.href = "/cadastro"}>Cadastrar</button>
            </div>


            <div className="w-[60%] h-full bg-[#6366ee] rounded-l-lg flex flex-col items-center justify-center">
                <img src={svg} alt="imagem-animada" width={600}/>
                <p className="text-white text-[20px] text-center font-bold w-[300px] ">A melhor experiencia de login que você ja teve na sua vida!</p>
            </div>
        </div>
    )
}
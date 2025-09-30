import { Router } from "react-router-dom"
import { iconos } from "../../assets/iconos"


export default function Home(){
    return(
        <div className="w-screen h-screen bg-neutral-900 w-60 p-3 flex flex-col text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <img src={iconos.home} alt="" className="w-15 h-15" />
            <span className="text-neutral-100 text-lg">Axxion</span>
            </div>
            <p>a</p>
                {/*<div className="fex-1">
                    {Dashbord_Home_Links.map((item)=(
                    <Homelink key={item.key} item={item}/>
                    ))}
                </div>
                    <div>botton part</div>*/}
                    {/*<div className="fex flex-col gap-0.5 border-t border-neutral-700">
                        {Dashboard_Home_links.map (item=>(
                            <Homelink key={item.key} item={item} />
                        ))}

                        <div 
                            className={className("text-red-500 cursor-pointer",linkClasses)}>
                            <span className="text-xl"><HiOutlineLogout/></span>
                            Logout
                        </div>*/}
                        
                    </div>
    )
}

function Homelink({item}){
    return(
        <link to={item.path} className="">
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </link>
    )
}



import { Login } from "./login"
import type {HomeProps} from './home'

type ComponentProps = {
    isLoggedIn : boolean
    component: React.ComponentType<HomeProps>
}

export const Private = ({isLoggedIn,component:Component}: ComponentProps) => {
    if(isLoggedIn){
        return <Component name="saikumar"/>
    }else{
        return <Login/>
    }
}
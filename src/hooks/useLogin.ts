import { useState } from "react";

export default function useLogin(){
    const [loading,setLoading] = useState(false)
    const [authenticated,setAuthenticated] = useState(true)


    return {authenticated,loading}
}
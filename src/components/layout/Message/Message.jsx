import './mensagem.css'
import { useEffect, useState } from 'react'

function Message({ type, msg}){
    const getMessageClass = () =>{
        if (type === 'sucesso'){
            return('success')
        }else if( type === 'error'){
            return('error')
        }
        return ''
    }

    const [visible, setVisible] = useState(false)
    useEffect(() =>{
        if(!msg){
        setVisible(false)
        return
        }
        setVisible(true)

        const timer = setTimeout(() =>{
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])
    return(
        <>
        {visible && (
        <div className={`message ${getMessageClass()}`} >
            {msg}
        </div>
        )}
        </>
    )
}

export default Message
import './style.css'
import { useState, useEffect } from 'react'
import supabase from '../lib/supabase'

function Usuario() {

    const [login, setLogin] = useState(true)
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [clave, setClave] = useState('')
    const [usuario, setUsuario] = useState<any>(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const entrar = async () => {
        if (loading) return
        setLoading(true)
        setError('')

        if (login) {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: correo,
                password: clave
            })
            if (error) {
                setLoading(false)
                return setError(error.message)
            }
            setUsuario(data.user)
            setLoading(false)
        } else {
            const { data, error } = await supabase.auth.signUp({
                email: correo,
                password: clave
            })
            if (error) {
                setLoading(false)
                return setError(error.message)
            }
            setUsuario(data.user)
            setLoading(false)
        }
    }
    const salir = async () => {
        await supabase.auth.signOut()
        setUsuario(null)
    }
    if (usuario) {
        return (
            <div className="usuario">
                <h2>Bienvenido</h2>
                <p>{usuario.email}</p>
                <button onClick={salir}>Cerrar sesión</button>
            </div>
        )
    }
    return (
        <div className="usuario">
            <h2>{login ? 'Iniciar sesión' : 'Registrarse'}</h2>
            {!login &&
                <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
            }
            <input placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={clave} onChange={e => setClave(e.target.value)} />
            {error && <p className="error">{error}</p>}
            <button onClick={entrar}disabled={loading}>
                {loading? 'Cargando...': login? 'Entrar': 'Registrarse'}
            </button>
            <button onClick={() => setLogin(!login)}>
                {login ? 'Crear cuenta' : 'Volver'}
            </button>

        </div>
    )

}

export default Usuario
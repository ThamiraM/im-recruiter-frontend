import { useEffect, useState } from "react"
import authService from '../../../features/auth/authService'

const CSRFTokenComponent = () => {
    const [csrfToken, setCsrfToken] = useState('')

    const getCookie = (name) => {
        let cookieValue = null
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';')
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim()
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                    break
                }
            }
        }
        return cookieValue
    }

    useEffect(() => {
        authService.getCSRFToken()
        setCsrfToken(getCookie('csrfToken'))
    }, [])

    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
    )
}

export default CSRFTokenComponent
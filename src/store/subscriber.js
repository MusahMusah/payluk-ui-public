import store from './store'
import axios  from 'axios'
store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'authentication/SET_TOKEN':
            if (mutation.payload) {
                axios.defaults.headers.common['Authorization'] =  `Bearer ${mutation.payload}`
                 localStorage.setItem("token", mutation.payload)
            } else if(localStorage.getItem('token')) {
                return true
            }
            else {
                axios.defaults.headers.common['Authorization'] =  null
                localStorage.removeItem("token")
            }
        break;
    }
})

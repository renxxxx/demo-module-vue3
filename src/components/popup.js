import { createApp } from 'vue'
import UsernamePopup from './UsernamePopup'

class popup {
    show(data) {
        let app = createApp(UsernamePopup, {
            info: data.info,
            sureback: data.sureback
        }) 
        app.mount(data.id)
    }
}

export default new popup();


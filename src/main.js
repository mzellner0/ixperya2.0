import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowCircleLeft, faHandPointer, faLongArrowAltDown, faHandPaper, faBoxOpen, faBan, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleLeft)
library.add(faHandPointer)
library.add(faHandPaper)
library.add(faBoxOpen)
library.add(faBan)
library.add(faLongArrowAltDown)
library.add(faTimes)

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


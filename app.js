Vue.createApp({
    data() {
        return {
            myHtml: '<h1>Vue 3 App</h1>',
            title: 'Я есть Грут',
            person: {
                firstName: 'Vladilen',
                lastName: 'Minin',
                age: 27
            },
            items: [1, 2, 3, 4, 5, 6],
        }
    },
    computed: {
        eventItems(){
            return this.items.filter(i => i %2 ===0)
        }
    },
    methods: {
        stopPropagation(event) {
            event.stopPropagation()
        },
        addItem(){
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(i){
            this.items.splice(i,1)
        },
        log(item){
            console.log('Log item: ', item)
        }
    }
}).mount('#app')
const App = {
    data(){
        return{
            placeholderString:'Введите название заметок',
            title:'Список заметок',
            inputValue:'',
            notes: ['Заметка 1','Заметка 2']
        }
    },
    methods:{
        inputChangeHandler(event){
            this.inputValue=event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue=''
        },
        removeNote(idx){
            this.notes.splice(idx,1)
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')
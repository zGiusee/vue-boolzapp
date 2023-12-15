// Inizializzo l'applicazione
const { createApp } = Vue

createApp({
    data(){
        return {

            // DEFINISCO LA VARIABILE CHE INDICHI LA POSIZIONE DELL'OGGETTO NELL ARRAY
            visibleChat: 0,

            // DEFINISCO LA VARIABILE DEL NUOVO MESSAGGIO
            newMessage: '',

            // DEFINISCO LA VARIABILE DOVE VERRA INSERITO IL TESTO DI RICERCA CONTATTI
            search: '',

            // DEFINISCO L'ARRAY DI OGGETTI CHE CONTIENE I CONTATTI
            contacts: [

                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                        }
                    ],
                }
            ]

        }
    },
    created() {
        
        
    },
    methods: {
        // DEFINISCO LA FUNZIONE CHE MI PERMETTA DI CAMBIARE L'UTENTE AL CLICK DELLA CHAT
        chatSwitch(index){
            this.visibleChat = index;
        },
        // DEFINISCO LA FUNZIONI DI INVIO DI NUOVI MESSAGGI E DELLA RISPOSTA AUTOMATICA
        sendMessage(){

            // MESSAGGIO INVIATO =
            let obj = {
                date: '10/01/2020 15:50:00',
                message: this.newMessage,
                status: 'sent',
                dropdown: false,
            }

            // RISPOSTA =
            let obj2 = {

                date: '10/01/2020 15:50:00',
                message: 'Ok',
                status: 'received',
                dropdown: false,
            }

            // MESSAGGIO INVIATO =
            this.contacts[this.visibleChat].messages.push(obj);

            // RISPOSTA =
            setTimeout(() => {
                this.contacts[this.visibleChat].messages.push(obj2);
            }, 1000);

            this.newMessage= ' ';
        },
        // DEFINISCO LA FUNZIONE DI RICERCA CONTATTI
        searchContact(){
            this.contacts.forEach((elem) => {
                if(elem.name.toLowerCase().includes(this.search.toLowerCase())){
                    elem.visible = true;
                }
                else{
                    elem.visible = false;
                }
            });
        },
        // DEFINISCO LA FUNZIONE CHE RECUPERI L'ULTIMO MESSAGGIO INVIATO DALL'UTENTE
        lastMessage(index){
            return this.contacts[index].messages[this.contacts[index].messages.length - 1].message.slice(0,20) + '...';
        },
        // DEFINISCO LA FUNZIONE CHE RECUPERI LA DATA DELL'ULTIMO MESSAGGIO
        lastDate(index){
            return this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
        },
        // AGGIUNGO IL DROPDOWN TOGGLE
        showMsgDropdown(index){
            if(this.contacts[this.visibleChat].messages[index].dropdown){
                this.contacts[this.visibleChat].messages[index].dropdown = false;
            }
            else{
                this.contacts[this.visibleChat].messages[index].dropdown = true;               
            }
        },
        // DEFINISCO LA FUNZIONE CHE RIMUOVA I MESSAGGI
        deleteMessage(index){
            this.contacts[this.visibleChat].messages.splice(index, 1);
        }

    },
}).mount('#app')
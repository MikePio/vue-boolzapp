const { createApp } = Vue;

createApp({
  data() {
    return {
      chatActive: 0,
      writtenMessage: '',
      chats: [
        {
          name: 'Michele',
          img: '1',
          activeChat: true,
          visible: true,
          messages: [
            {
              date: '15:30',
              // date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?????????????????????????????????????????????????????????????????????????????????????????',
              status: 'sent'
            },
            {
              date: '15:50',
              // date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni ciao, ciao, ciao, ciao, ciao, ciao, ciao, ciao, ciao, ciao, ciao, ciao.',
              status: 'sent'
            },
            {
              date: '16:15',
              // date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          img: '2',
          activeChat: false,
          visible: true,
          messages: [
            {
              date: '16:30',
              // date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '16:30',
              // date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '16:35',
              // date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          img: '3',
          activeChat: false,
          visible: true,
          messages: [
            {
              date: '10:10',
              // date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '10:20',
              // date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '16:15',
              // date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          img: '4',
          activeChat: false,
          visible: true,
          messages: [
            {
              date: '15:30',
              // date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '15:50',
              // date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          img: '5',
          activeChat: false,
          visible: true,
          messages: [
            {
              date: '15:30',
              // date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '15:50',
              // date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          img: '6',
          activeChat: false,
          visible: true,
          messages: [
            {
              date: '15:30',
              // date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '15:50',
              // date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '15:51',
              // date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          img: '7',
          activeChat: false,
          visible: true,
          messages: [
            {
              date: '15:30',
              // date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '15:50',
              // date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luca',
          img: '2',
          activeChat: false,
          visible: true,
          messages: [
            {
              date: '15:30',
              // date: '10/01/2020 15:30:55',
              message: 'Buonaseraa',
              status: 'sent'
            },
            {
              date: '15:50',
              // date: '10/01/2020 15:50:00',
              message: 'Buonasera!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          img: '8',
          activeChat: false,
          visible: true,
          messages: [
            {
              date: '15:30',
              // date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '15:50',
              // date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '15:51',
              // date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],



    }
  },

  methods: {
    classActive(index) {
      this.chatActive = index;
    },

    getTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const hoursMinutes = `${hours}:${minutes}`;
      return hoursMinutes;
    },

    sendMessage(){
      // console.log('writtenMessage', this.writtenMessage)
      // writtenMessage senza spazi
      const writtenMessageTrim = this.writtenMessage.trim();
      // se writtenMessage è diverso da una stringa vuota
      if (writtenMessageTrim != '') {

        //oggetto creato per pushare il messaggio nell'array di oggetti messaggi
        const newMessage = {
          message: writtenMessageTrim,
          status: 'sent',
          // date: '00:51'
          date: this.getTime()
        }
        const replyMessage = {
          message: 'Ok a dopo',
          status: 'received',
          date: this.getTime()
        }
        //pushare l'oggetto prima nell'array di oggetti di chats con l'indice (chatActive) e successivamente nell'array di oggetti di messages
        this.chats[this.chatActive].messages.push(newMessage);
        //reset dell'input
        this.writtenMessage = '';
        
        //(Messaggio ricevuto istantaneamente) pushare l'oggetto prima nell'array di oggetti di chats con l'indice (chatActive) e successivamente nell'array di oggetti di messages
        // this.chats[this.chatActive].messages.push(replyMessage);
        
        //*soluzione 1
        //(Messaggio ricevuto dopo 1 sec) Bisogna salvare prima il valore di this in una const e pusharlo successivamente
        // const replyMessagePushed = this.chats[this.chatActive].messages;
        // setTimeout(function() {
          //   replyMessagePushed.push(replyMessage);
          // }, 1000);
          
        //*soluzione 2 MIGLIORE
        //Messaggio ricevuto dopo 1 sec con arrow function che non modificano il valore di this e quindi non c'è bisogno di salvarlo in una variabile
        setTimeout(() => {
          this.chats[this.chatActive].messages.push(replyMessage);
        }, 1000);
      }
    }

  }

}).mount('#app');

























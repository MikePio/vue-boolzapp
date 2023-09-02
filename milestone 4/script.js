const { createApp } = Vue;

createApp({
  data() {
    return {
      chatActive: 0,
      writtenMessage: '',
      searchString: '',
      isRecording: false,
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
      // Ottiene l'indice corretto delle chat visibili //* CON arrow function
      // visibleChatsIndexes è un array che contiene gli indici delle chat che soddisfano il criterio di ricerca. Gli indici corrispondono all'array non filtrato di this.chats
      const visibleChatsIndexes = this.chats
        // map() utilizzato per creare un nuovo array che contiene gli indici delle chat che soddisfano il criterio di ricerca. La funzione map() itera attraverso ogni chat nell'array this.chats e restituisce l'indice originale della chat se il nome della chat contiene la stringa di ricerca altrimenti restituisce -1
        .map((chat, originalIndex) => (chat.name.toUpperCase().includes(this.searchString.toUpperCase()) ? originalIndex : -1))
        // Dopo aver creato l'array con gli indici delle chat che soddisfano il criterio di ricerca, la funzione filter() viene utilizzata per rimuovere tutti gli elementi con valore -1, che rappresentano le chat che non soddisfano il criterio di ricerca. Alla fine di questa operazione, otteniamo un array di indici delle chat visibili
        .filter(index => index !== -1);

      // Ottiene l'indice corretto delle chat visibili //* senza arrow function
      // visibleChatsIndexes è un array che contiene gli indici delle chat che soddisfano il criterio di ricerca. Gli indici corrispondono all'array non filtrato di this.chats
      // const searchStringUpper = this.searchString.toUpperCase();
      // // map() utilizzato per creare un nuovo array che contiene gli indici delle chat che soddisfano il criterio di ricerca. La funzione map() itera attraverso ogni chat nell'array this.chats e restituisce l'indice originale della chat se il nome della chat contiene la stringa di ricerca altrimenti restituisce -1
      // const visibleChatsIndexes = this.chats.map(function(chat, originalIndex) {
      //   if (chat.name.toUpperCase().includes(searchStringUpper)) {
      //     return originalIndex;
      //   } else {
      //     return -1;
      //   }
      // // Dopo aver creato l'array con gli indici delle chat che soddisfano il criterio di ricerca, la funzione filter() viene utilizzata per rimuovere tutti gli elementi con valore -1, che rappresentano le chat che non soddisfano il criterio di ricerca. Alla fine di questa operazione, otteniamo un array di indici delle chat visibili
      // }).filter(function(index) {
      //   return index !== -1;
      // });
    
      // Imposta activeChat per tutte le chat su false e quindi rimuove la classe active alla chat precedentemente cliccata
      this.chats.forEach(chat => (chat.activeChat = false));
    
      // Imposta activeChat sulla chat selezionata e quindi aggiunge la classe active alla chat appena cliccata
      if (visibleChatsIndexes[index] !== undefined) {
        this.chatActive = visibleChatsIndexes[index];
        this.chats[visibleChatsIndexes[index]].activeChat = true;
      }
    },

    getTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const hoursMinutes = `${hours}:${minutes}`;
      return hoursMinutes;
    },

    scrollToBottom() {
      setTimeout(() => {
        // Scroll automatico verso il basso
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
        console.log('a capo');
      }, 100);
    },

    scrollToBottomSlow() {
      setTimeout(() => {
        // Scroll automatico verso il basso
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
        console.log('a capo lento');
      }, 1100);
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
        const replyMessageCiao = {
          message: 'Ciaoo',
          status: 'received',
          date: this.getTime()
        }
        const replyMessageComeVa = {
          message: 'Bene grazie. Tu?',
          status: 'received',
          date: this.getTime()
        }
        const replyMessageCheFai = {
          message: 'Niente. Tu?',
          status: 'received',
          date: this.getTime()
        }

        //necessario il setTimeout perché deve comparire il messaggio dell'utente per primo e successivamente quello del bot (senza il setTimeout ci sono problemi dal momento in cui dovessero essere generati tanti messaggi in chat da fa comparire l'overflow e viene mostrato il mio messaggio un secondo dopo che io ho inviato un messaggio dall'input e compare nello stesso momento in cui compare la risposta del bot)
        setTimeout(() => {
        //pushare l'oggetto prima nell'array di oggetti di chats con l'indice (chatActive) e successivamente nell'array di oggetti di messages
        this.chats[this.chatActive].messages.push(newMessage);
        //reset dell'input
        this.writtenMessage = '';
        // }, 100);
        }, 0);

        // Scroll automatico verso il basso
        this.scrollToBottom();
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
          // soluzione semplice SOLO CON RISPOSTA A DOPO
          // this.chats[this.chatActive].messages.push(replyMessage);
          
          // soluzione 1 le parole scritte devono essere UGUALI a quelle scritte qui in basso
          // if (writtenMessageTrim == 'ciao' || 'Ciao' || 'Wee' || 'wee' || 'we' || 'We' || 'ehi' || 'Ehi' || 'Hey' || 'hey' || 'Heyy' || 'heyy') this.chats[this.chatActive].messages.push(replyMessageCiao);
          // else if (writtenMessageTrim == 'come va' || 'Come va' || 'come stai' || 'Come stai' || 'come va?' || 'Come va?' || 'come stai?' || 'Come stai?') this.chats[this.chatActive].messages.push(replyMessageComeVa);
          // else if (writtenMessageTrim == 'che fai' || 'Che fai' || 'che fai?' || 'Che fai?') this.chats[this.chatActive].messages.push(replyMessageCheFai);
          // else this.chats[this.chatActive].messages.push(replyMessage);
          
          // soluzione 2 migliore le parole scritte possono essere INCLUSE a quelle scritte qui in basso
          if (writtenMessageTrim.includes('ciao') || writtenMessageTrim.includes('Ciao') || writtenMessageTrim.includes('Wee') || writtenMessageTrim.includes('wee') || writtenMessageTrim.includes('we') || writtenMessageTrim.includes('We') || writtenMessageTrim.includes('ehi') || writtenMessageTrim.includes('Ehi') || writtenMessageTrim.includes('Hey') || writtenMessageTrim.includes('hey') || writtenMessageTrim.includes('Heyy') || writtenMessageTrim.includes('heyy')) this.chats[this.chatActive].messages.push(replyMessageCiao);
          else if (writtenMessageTrim.includes('come va') || writtenMessageTrim.includes('Come va') || writtenMessageTrim.includes('come stai') || writtenMessageTrim.includes('Come stai') || writtenMessageTrim.includes('come va?') || writtenMessageTrim.includes('Come va?') || writtenMessageTrim.includes('come stai?') || writtenMessageTrim.includes('Come stai?')) this.chats[this.chatActive].messages.push(replyMessageComeVa);
          else if (writtenMessageTrim.includes('che fai') || writtenMessageTrim.includes('Che fai') || writtenMessageTrim.includes('che fai?') || writtenMessageTrim.includes('Che fai?')) this.chats[this.chatActive].messages.push(replyMessageCheFai);
          else this.chats[this.chatActive].messages.push(replyMessage);
        }, 1000);
        // Scroll automatico verso il basso
        this.scrollToBottomSlow();
      }
    },

    //* RICERCA IN CHAT Soluzione 1
    findChat() {
      // se le lettere ricercate sono incluse nell'array di oggetti (chats-->name)
      // se le lettere ricercate  NON ! sono incluse nell'array di oggetti (chats-->name) cambiare visible: true, in visible: false,
      for (const index in this.chats) {
        // Tutti i nomi
        // console.log(this.chats[index].name);
        if(!(this.chats[index].name.includes(this.searchString))){
            console.log(this.chats[index].name); //nome/i
            const nameUser = document.getElementsByClassName("name-chat-js");
            nameUser[index].classList.add("d-none");

            
          }
        }

        //oppure con filter
        // this.chats.forEach(chat => {
        //   chat.visible (this.chats[index].name.toUpperCase().includes(this.searchString.toUpperCase()))
          
        // });

          
    },

    toggleRecording() {
      if (this.isRecording) {
        // mostra l'icona del microfono
        this.isRecording = false;
      } else {
        // mostra l'icona al quadrato
        this.isRecording = true;
      }
    },

  },

  //* RICERCA IN CHAT Soluzione 2 MIGLIORE
  computed:{
    visibleChats(){
      return this.chats.filter(chat => chat.name.toUpperCase().includes(this.searchString.toUpperCase()));
    }
  }

}).mount('#app');

























const {createApp} = Vue;

createApp({
  data(){
    return{
    title: 'To Do List',
        chats: [
          {
            name: 'Michele test',
            img: 'avatar_1',
            activeChat: true
          },
          {
            name: 'Fabio',
            img: 'avatar_2',
            activeChat: false
          },
          {
            name: 'Luca',
            img: 'avatar_3',
            activeChat: false 
          },
          {
            name: 'Franco',
            img: 'avatar_4',
            activeChat: false
          },
          {
            name: 'Dario',
            img: 'avatar_5',
            activeChat: false
          },
          {
            name: 'Maria',
            img: 'avatar_6',
            activeChat: false
          },
          {
            name: 'Massimo',
            img: 'avatar_7',
            activeChat: false
          },
          {
            name: 'Luigi',
            img: 'avatar_8',
            activeChat: false
          },
          {
            name: 'Marco',
            img: 'avatar_2',
            activeChat: false
          },
        ]
      }
    },
    
    methods:{


    }

  }).mount('#app');

























const x = 17

export const getEntries = () => {
  return [
    {
      id: 1,
      author: "Adrian",                                          
            /* jak używamy ` - to można dodawać funkcję taką jak np. ${x} - wtedy damy zamiast x jakąś zmienną i nam się wyświetli */
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${x}     
      Ut faucibus ullamcorper imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, 
      nascetur ridiculus mus. Morbi vitae congue magna. Nullam dignissim quam non sem ultrices pretium eget ut lorem. 
      Nullam pretium accumsan quam, a finibus metus luctus in. Fusce sit amet neque eu mi varius finibus.`,
      date: "16-02-2024",
      likes: 6
    },
    {
        id: 2,
        author: "Martyna",                                          
        text: `Morbi sem lectus, facilisis nec bibendum vel, vestibulum non urna. Integer id iaculis magna. Nullam ultricies turpis
         malesuada orci porta feugiat. Phasellus nisi mi, mattis volutpat augue non, gravida fringilla ante. Proin pretium accumsan blandit.
          Nulla facilisi. Ut molestie porttitor purus, vitae iaculis diam scelerisque eu. 
        In feugiat tortor et mauris eleifend malesuada. Nullam rutrum libero quis pretium efficitur.`,
        date: "18-07-2024",
        likes: 8
      },

      {
        id: 3,
        author: "Martyna",                                          
        text: `Vestibulum viverra, mauris nec molestie gravida, odio mi lobortis enim, nec sodales sem quam non arcu. Phasellus maximus non neque efficitur fringilla. Sed interdum metus eget leo interdum ultrices. Quisque ut enim et mauris dapibus congue non quis massa. Donec nec tortor arcu. Etiam massa orci, consequat in dapibus vel, faucibus vitae diam. Donec sit amet neque efficitur, convallis metus vitae, molestie ex. Phasellus malesuada egestas ipsum, nec egestas metus ullamcorper ac. Integer eu nunc ultricies, consectetur nisl et, euismod nisi.

Morbi fermentum volutpat mauris, tempus rhoncus nibh bibendum eu. Praesent ut enim et magna venenatis semper. Ut placerat varius bibendum. Etiam vel sollicitudin risus, et varius magna. Maecenas ut mi luctus, fermentum nunc at, placerat ex. Maecenas id ante rhoncus, commodo massa non, convallis urna. Curabitur auctor erat in laoreet sollicitudin.

Maecenas eleifend, elit sed lobortis elementum, massa arcu elementum sapien, at maximus ipsum tellus eu quam. Nunc sed velit at mi maximus accumsan. Donec accumsan metus pulvinar dictum pellentesque. Proin vel leo id justo convallis pellentesque. Proin finibus neque sed odio fringilla, sed tristique magna scelerisque. In vel leo purus. Ut erat ex, tincidunt eu faucibus non, facilisis eu lorem. Vestibulum lacinia nunc ac placerat ullamcorper. Etiam luctus ornare aliquet. Pellentesque a pharetra felis. Nulla facilisi.`,
        date: "18-09-2024",
        likes: 66
      
      },
      {
        id: 4,
        author: "Adrian",                                          
              /* jak używamy ` - to można dodawać funkcję taką jak np. ${x} - wtedy damy zamiast x jakąś zmienną i nam się wyświetli */
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${x}     
        Ut faucibus ullamcorper imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Morbi vitae congue magna. Nullam dignissim quam non sem ultrices pretium eget ut lorem. 
        Nullam pretium accumsan quam, a finibus metus luctus in. Fusce sit amet neque eu mi varius finibus.`,
        date: "16-11-2024",
        likes: 6
      },
      {
          id: 5,
          author: "Martyna",                                          
          text: `Morbi sem lectus, facilisis nec bibendum vel, vestibulum non urna. Integer id iaculis magna. Nullam ultricies turpis
           malesuada orci porta feugiat. Phasellus nisi mi, mattis volutpat augue non, gravida fringilla ante. Proin pretium accumsan blandit.
            Nulla facilisi. Ut molestie porttitor purus, vitae iaculis diam scelerisque eu. 
          In feugiat tortor et mauris eleifend malesuada. Nullam rutrum libero quis pretium efficitur.`,
          date: "18-03-2024",
          likes: 8
        },
  
        {
          id: 6,
          author: "Martyna",                                          
          text: `Vestibulum viverra, mauris nec molestie gravida, odio mi lobortis enim, nec sodales sem quam non arcu. Phasellus maximus non neque efficitur fringilla. Sed interdum metus eget leo interdum ultrices. Quisque ut enim et mauris dapibus congue non quis massa. Donec nec tortor arcu. Etiam massa orci, consequat in dapibus vel, faucibus vitae diam. Donec sit amet neque efficitur, convallis metus vitae, molestie ex. Phasellus malesuada egestas ipsum, nec egestas metus ullamcorper ac. Integer eu nunc ultricies, consectetur nisl et, euismod nisi.
  
  Morbi fermentum volutpat mauris, tempus rhoncus nibh bibendum eu. Praesent ut enim et magna venenatis semper. Ut placerat varius bibendum. Etiam vel sollicitudin risus, et varius magna. Maecenas ut mi luctus, fermentum nunc at, placerat ex. Maecenas id ante rhoncus, commodo massa non, convallis urna. Curabitur auctor erat in laoreet sollicitudin.
  
  Maecenas eleifend, elit sed lobortis elementum, massa arcu elementum sapien, at maximus ipsum tellus eu quam. Nunc sed velit at mi maximus accumsan. Donec accumsan metus pulvinar dictum pellentesque. Proin vel leo id justo convallis pellentesque. Proin finibus neque sed odio fringilla, sed tristique magna scelerisque. In vel leo purus. Ut erat ex, tincidunt eu faucibus non, facilisis eu lorem. Vestibulum lacinia nunc ac placerat ullamcorper. Etiam luctus ornare aliquet. Pellentesque a pharetra felis. Nulla facilisi.`,
          date: "18-03-2024",
          likes: 66
        
        },
        {
          id: 7,
          author: "Adrian",                                          
                /* jak używamy ` - to można dodawać funkcję taką jak np. ${x} - wtedy damy zamiast x jakąś zmienną i nam się wyświetli */
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${x}     
          Ut faucibus ullamcorper imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus. Morbi vitae congue magna. Nullam dignissim quam non sem ultrices pretium eget ut lorem. 
          Nullam pretium accumsan quam, a finibus metus luctus in. Fusce sit amet neque eu mi varius finibus.`,
          date: "16-07-2024",
          likes: 6
        },
        {
            id: 8,
            author: "Martyna",                                          
            text: `Morbi sem lectus, facilisis nec bibendum vel, vestibulum non urna. Integer id iaculis magna. Nullam ultricies turpis
             malesuada orci porta feugiat. Phasellus nisi mi, mattis volutpat augue non, gravida fringilla ante. Proin pretium accumsan blandit.
              Nulla facilisi. Ut molestie porttitor purus, vitae iaculis diam scelerisque eu. 
            In feugiat tortor et mauris eleifend malesuada. Nullam rutrum libero quis pretium efficitur.`,
            date: "18-03-2024",
            likes: 8
          },
    
          {
            id: 9,
            author: "Martyna",                                          
            text: `Vestibulum viverra, mauris nec molestie gravida, odio mi lobortis enim, nec sodales sem quam non arcu. Phasellus maximus non neque efficitur fringilla. Sed interdum metus eget leo interdum ultrices. Quisque ut enim et mauris dapibus congue non quis massa. Donec nec tortor arcu. Etiam massa orci, consequat in dapibus vel, faucibus vitae diam. Donec sit amet neque efficitur, convallis metus vitae, molestie ex. Phasellus malesuada egestas ipsum, nec egestas metus ullamcorper ac. Integer eu nunc ultricies, consectetur nisl et, euismod nisi.
    
    Morbi fermentum volutpat mauris, tempus rhoncus nibh bibendum eu. Praesent ut enim et magna venenatis semper. Ut placerat varius bibendum. Etiam vel sollicitudin risus, et varius magna. Maecenas ut mi luctus, fermentum nunc at, placerat ex. Maecenas id ante rhoncus, commodo massa non, convallis urna. Curabitur auctor erat in laoreet sollicitudin.
    
    Maecenas eleifend, elit sed lobortis elementum, massa arcu elementum sapien, at maximus ipsum tellus eu quam. Nunc sed velit at mi maximus accumsan. Donec accumsan metus pulvinar dictum pellentesque. Proin vel leo id justo convallis pellentesque. Proin finibus neque sed odio fringilla, sed tristique magna scelerisque. In vel leo purus. Ut erat ex, tincidunt eu faucibus non, facilisis eu lorem. Vestibulum lacinia nunc ac placerat ullamcorper. Etiam luctus ornare aliquet. Pellentesque a pharetra felis. Nulla facilisi.`,
            date: "18-03-2024",
            likes: 66
          
          },
          {
            id: 10,
            author: "Adrian",                                          
                  /* jak używamy ` - to można dodawać funkcję taką jak np. ${x} - wtedy damy zamiast x jakąś zmienną i nam się wyświetli */
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${x}     
            Ut faucibus ullamcorper imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, 
            nascetur ridiculus mus. Morbi vitae congue magna. Nullam dignissim quam non sem ultrices pretium eget ut lorem. 
            Nullam pretium accumsan quam, a finibus metus luctus in. Fusce sit amet neque eu mi varius finibus.`,
            date: "16-07-2024",
            likes: 6
          },
          {
              id: 11,
              author: "Martyna",                                          
              text: `Morbi sem lectus, facilisis nec bibendum vel, vestibulum non urna. Integer id iaculis magna. Nullam ultricies turpis
               malesuada orci porta feugiat. Phasellus nisi mi, mattis volutpat augue non, gravida fringilla ante. Proin pretium accumsan blandit.
                Nulla facilisi. Ut molestie porttitor purus, vitae iaculis diam scelerisque eu. 
              In feugiat tortor et mauris eleifend malesuada. Nullam rutrum libero quis pretium efficitur.`,
              date: "18-03-2024",
              likes: 8
            },
      
            {
              id: 12,
              author: "Martyna",                                          
              text: `Vestibulum viverra, mauris nec molestie gravida, odio mi lobortis enim, nec sodales sem quam non arcu. Phasellus maximus non neque efficitur fringilla. Sed interdum metus eget leo interdum ultrices. Quisque ut enim et mauris dapibus congue non quis massa. Donec nec tortor arcu. Etiam massa orci, consequat in dapibus vel, faucibus vitae diam. Donec sit amet neque efficitur, convallis metus vitae, molestie ex. Phasellus malesuada egestas ipsum, nec egestas metus ullamcorper ac. Integer eu nunc ultricies, consectetur nisl et, euismod nisi.
      
      Morbi fermentum volutpat mauris, tempus rhoncus nibh bibendum eu. Praesent ut enim et magna venenatis semper. Ut placerat varius bibendum. Etiam vel sollicitudin risus, et varius magna. Maecenas ut mi luctus, fermentum nunc at, placerat ex. Maecenas id ante rhoncus, commodo massa non, convallis urna. Curabitur auctor erat in laoreet sollicitudin.
      
      Maecenas eleifend, elit sed lobortis elementum, massa arcu elementum sapien, at maximus ipsum tellus eu quam. Nunc sed velit at mi maximus accumsan. Donec accumsan metus pulvinar dictum pellentesque. Proin vel leo id justo convallis pellentesque. Proin finibus neque sed odio fringilla, sed tristique magna scelerisque. In vel leo purus. Ut erat ex, tincidunt eu faucibus non, facilisis eu lorem. Vestibulum lacinia nunc ac placerat ullamcorper. Etiam luctus ornare aliquet. Pellentesque a pharetra felis. Nulla facilisi.`,
              date: "18-03-2024",
              likes: 66
            
            },
  ];
};

/*
 * 3. src/api/index.js
 */

export default {
    fetchImages: function(user = null) {
      const aswwu = 'https://aswwu.com/media/img-md/profiles/1819/';
      const branson = aswwu + '01919-2023213.jpg';
      const gabriela = aswwu + '00309-2025200.jpg';
      const sabetai = aswwu + '03293-2045064.jpg';
      const usNews = 'https://www.usnews.com/img/college-photo_';
      const images = [
        {id: 1, 
          src: usNews + '25308.jpg', 
          user: {
            pic: gabriela, 
            name: 'Gabriela'}},
        {id: 2, 
          src: usNews + '25307.jpg', 
          user: {
            pic: sabetai, 
            name: 'Sabetai'}},
        {id: 5, 
          src: usNews + '25305.jpg', 
          user: {
            pic: branson, 
            name: 'Branson'}},
        {id: 3, 
          src: usNews + '25304.jpg', 
          user: {
            pic: gabriela, 
            name: 'Gabriela'}},
        {id: 6, 
          src: usNews + '25302.jpg', 
          user: {
            pic: branson, 
            name: 'Branson'}},
        {id: 4, 
          src: usNews + '25303.jpg', 
          user: {
            pic: branson, 
            name: 'Branson'}},
        {id: 7, 
          src: usNews + '25309.jpg', 
          user: {
            pic: branson, 
            name: 'Branson'}},
      ];
  
      // simulate delay of network call to remote server for above data
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // show full list or only images for a selected user?
          const result = images.filter(img => !user || user === img.user.name);
          resolve( result );
        }, 1500);
      });
    }
  }
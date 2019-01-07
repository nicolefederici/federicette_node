
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'Bananas', 
        chef: 'Nicole',
        ingredients: 'bananas',
        story: 'i ate these once',
        video_url: 'https://www.youtube.com/watch?v=Kgjkth6BRRY',
        photo_url: 'https://duckduckgo.com/?q=bananas&atb=v124-7a_&iax=images&ia=images&iai=https%3A%2F%2Fwww.caloriesecrets.net%2Fwp-content%2Fuploads%2F2016%2F09%2Fbananas.jpg',
        preparation: 'buy bananas and eat them' },
        {id: 2, title: 'Badger Stewe', 
        chef: 'Adam',
        ingredients: 'badgers',
        story: 'Adam ate these once',
        video_url: 'https://www.youtube.com/watch?v=YZVjUAgiB2A',
        photo_url: 'https://1.bp.blogspot.com/-ZbL1hoRpaJA/Tlz9MttW_vI/AAAAAAAAAeU/YbxzcM6amUo/s1600/badger.jpg',
        preparation: 'buy badgers and feed them stewe' },
        
      ]);
    });
};

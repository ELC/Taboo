const categories = require('./data/categories.json');

const data = {
 classic: {},
 biblical: {},
};

const languages = ['de', 'es']

languages.forEach(lang => {
    data.classic[lang] = require('./data/' + lang + '/classic.json');
    data.biblical[lang] = require('./data/' + lang + '/biblical.json');
});


export default class TabooData {

    static categoryImports(language) {
      let result = {}
      let keys = Object.keys(categories[language])
      keys.forEach(key => {
        try{
          result[key] =  data[key][language];
        }catch(e){
          console.error(e)
        }
        
      });
      return result;
    };
  
    static categories() {
      return categories;
    };
  
    static getCategory(category, language) {
      if (typeof this.categoryImports(language)[category] === 'undefined') {
        return null;
      }
  
      return this.categoryImports(language)[category];
    }
  }
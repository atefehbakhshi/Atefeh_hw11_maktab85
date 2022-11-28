class ClassWithPrivateAccessor {
    #shapeName;
  
    get #shape() {
      return this.#shapeName;
    }
    set #shape(name) {
      this.#shapeName = name;
    }
  
    constructor(name) {
      this.#shape =  name;
    }
  }
  
  new ClassWithPrivateAccessor('hi');


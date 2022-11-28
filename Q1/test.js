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
    m(){
        console.log(this.#shapeName)
    }
    
  }
  
let x =  new ClassWithPrivateAccessor('h555i');

x.m()

'use strick'

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('hello ${this.name}');
    };
}

User.prototype.exit = function() {
    console.log('Пользователь ${this.name} ушел');
};

const askarali = new User('Askarali', 28);
const jaxongir = new User('Jaxongir', 20);

askarali.exit();
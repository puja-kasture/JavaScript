class User 
{
    constructor(name,age,email) 
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.course = [];
    }

    login()
    {
        console.log(` ${this.name} has logged in`);
        return this;
    }

    logout()
    {
        console.log(` ${this.name} has logged out`);
        return this;
    }
    
    putData()
    {
        console.log(` Name: ${this.name} \n Email: ${this.email} \n Coins: ${this.coins} \n Course: ${this.course}`);
        return this;
    }

}

class Moderator extends User
{
    constructor(name,age,email)
    {
        super(name,age,email);
    }

    addCoins(user)
    {
        user.coins++;
        console.log(` ${user.name} has ${user.coins} coins`);
        return this;
    }

    removeCoins(user)
    {
        if(user.coins>0)
        {
            user.coins--;
            console.log(` ${user.name} has left ${user.coins} coins in account`);
        }
        else
            console.log(` ${user.name} is not having any coins in account.`);
        return this;
    }
}

class Admin extends Moderator
{
    constructor(name,age,email)
    {
        super(name,age,email);
    }

    addCourse(user,course)
    {
       user.course.push(course);
       console.log(user);
    }

    removeCourse(user,course)
    {
        let index=user.course.indexOf(course);
        user.course.splice(index,1);
        console.log(` ${course} course is completed by ${user.name}.`);
        console.log(user);
    }
}

let U1 = new User('Puja',22,'p@gmail.com')
let U2 = new User('Kasturi',20,'k@gmail.com')
let Mod1 = new Moderator('Pushpa',23,'pk@gmail.com');
let Admin1 = new Admin("Pooja",21,'pkk@gmail.com');
let users = [U1,U2,Mod1,Admin1];

U1.login();
Mod1.addCoins(U1);
Mod1.addCoins(U1);
Admin1.addCourse(U1,"Python");
Admin1.addCourse(U1,"JS");
Mod1.removeCoins(U1);
Admin1.removeCourse(U1,"JS");
U1.putData();
U1.logout();

U2.login();
Mod1.addCoins(U2);
Admin1.addCourse(U2,"Flutter");
Admin1.addCourse(U2,"Django")
Mod1.removeCoins(U2);
Admin1.removeCourse(U2,"Django");
U2.putData();
U2.logout();


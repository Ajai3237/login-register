class UserManagement {
    dataBase = {
        milan: { username: 'milan', email: 'milan121@gmail.com', Password: 'milan123' },
        tode: { username: 'tode', email: 'tode343@gmail.com', Password: 'tode232' },
        tony: { username: 'tony', email: 'tiny676@gmail.com', Password: 'tony787' }
    }
    saveData() {
       localStorage.setItem("userData",JSON.stringify(this.dataBase))

    }
    saveDataInitial(){
        if(!localStorage.getItem('userData')){
            localStorage.setItem("userData",JSON.stringify(this.dataBase))
        }
    }
    getData() {
        this.dataBase = JSON.parse(localStorage.getItem('userData'))
    }
    login() {
        let uname = userName.value
        let pwn = userPassword.value
        if (uname == '' && pwn == '') {
            alert(`please enter the form completely`)
        }
        else {
            this.getData()
            if (uname in this.dataBase) {
                alert(`${uname} login successfully`);
                window.location = 'Home.html'

            }
            else {
                alert("please enter valied username or password")


            }
        }


    }
    register() {
        let uname = userName.value
        let Email = userEmail.value
        let pwn = userPassword.value
        if (uname == '' && Email == '' && pwn == '') {
            alert(`please enter the form completely`)

        }
        else {
            this.getData()
            if (uname in this.dataBase) {
                alert(`${uname} alrady exist in the database`)
                window.location = 'sigin.html'
            }
            else {
                this.dataBase[uname] = { userName: uname, userEmail: Email, userPassword: pwn }
                this.saveData()
                alert(`${uname} added Successfully`)
                window.location = 'sigin.html'

            }
        }


    }
}
const obj = new UserManagement();
obj.saveDataInitial();

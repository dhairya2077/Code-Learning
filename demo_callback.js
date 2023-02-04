// WAP to create an array of users with name, address, email
users = [
    {
        name: "User One",
        email: "one@user.com",
        address: "Kathmandu"
    },
    {
        name: "User Two",
        email: "two@user.com",
        address: "Bhaktapur"  
    },
    {
    name: "User Three",
        email: "three@user.com",
        address: "Lalitpur"
    },
    {
        name: "User Four",
        email: "four@user.com",
        address: "Kathmandu"
    }
]

// Create another array where fill the data from the users whose address is Kathmandu

let user_ktm = [];
/*users.map((item) => {
      if(item.address === 'Kathmandu'){
        user_ktm.push(item)
      }
})
*/

user_ktm = users.filter((item) => item.address === "Kathmandu");
console.log(user_ktm);

const login = (credential, cb)  =>{
    // login logic => DB Cross Check => 2-3sec
    // after login
    cb(false, true);   // success login
    cb(true, false)    // failure login
}

const adminDashboard = (err, succ) =>{
     // after login // 1sec
     // success and fail
}

login({username: '', password:''});
adminDashboard()

//get changed
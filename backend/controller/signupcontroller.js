const User = require("../models/usermodel")
const bcrypt = require('bcrypt');



exports.SignUp = async(req,res)=>{
    try {
        const { username, email, password, confirmPassword } = req.body;
    
  
        if (!username || !email || !password || !confirmPassword) {
          return res.status(400).json({ message: 'All fields are required' });
        }
    
        if (password !== confirmPassword) {
          return res.status(400).json({ message: 'Passwords do not match' });
        }
    
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
          return res.status(400).json({ message: 'Username or email already taken' });
        }
    
    
        const newUser = new User({
          username,
          email,
          password,
        });
    

       const newUserSave =  await newUser.save();
       console.log(newUser)
    
        return res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
      }

}
exports.SignIn = async(req,res)=>{
    try {
        const {  email, password } = req.body;
    
  
        if ( !email || !password ) {
          return res.status(400).json({ message: 'All fields are required' });
        }
    
      
    
        const existingUser = await User.findOne({ $or: [{ email }] });
        if (!existingUser) {
          return res.status(400).json({ message: 'email is not Valid ' });
        }
    
        const isMatch = bcrypt.compare(password ,existingUser.password)
    if(!isMatch){
        return res.status(400).json({ message: 'Password is incorrect  ' });
    }
      
    
console.log('user is valid ')
    
        return res.status(201).json({ message: 'User SignIn successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
      }
}
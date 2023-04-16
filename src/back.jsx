const url = {
    // test 
   BaseUrl:'http://localhost:8000',
   // deploy 
   //BaseUrl:'https://nurdauletryspai.pythonanywhere.com',
   Auth:{
       login: '/api/v1/login/',
       register: '/api/v1/register/'
   },

   userCheck:'/api/v1/user/check/',
   
   
}

export default url;
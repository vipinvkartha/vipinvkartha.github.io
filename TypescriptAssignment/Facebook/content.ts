class FacebookProfile{
    
        private user_name : string;
        private user_email : string;
        private friend_list_count : number;
        private birthday : string;
        private mobile : number;
        private work : string;
        private description? : string;
    
        constructor(user_name : string,
            user_email : string,
            friend_list_count : number,
            education : string,
            birthday : string,
            mobile : number,
            work : string,
            description : string){
            this.user_name = user_name;
            this.user_email = user_email;
            this.friend_list_count = friend_list_count;
            this.birthday = birthday;
            this.mobile = mobile;
            this.work = work;
            this.description = description;
        }
    
        getUserName = () =>{
            return this.user_name;
        }
        setUserName = (name:string) =>{
            this.user_name = name;
        }
    
        getUserEmail = () =>{
            return this.user_email;
        }
        setUserEmail = (email:string) =>{
            this.user_email = email;
        }
        getFriendCount = () =>{
            return this.friend_list_count;
        }

        setFriendCount = (count:number) =>{
            this.friend_list_count = count;
        }
    
        getBirthday = () =>{
            return this.birthday;
        }

        setbirthday = (bday:string) =>{
            this.birthday = bday;
        }
        getMobileNo = () =>{
            return this.mobile;
        }

        setMobileNo = (mobile:number) =>{
            this.mobile = mobile;
        }
        getWork = () =>{
            return this.work;
        }
        setWork = (work:string) =>{
            this.work = work;
        }
        getDescription = () =>{
            return this.description;
        }
        setDescription = (description:string) =>{
            this.description = description;
        }
        FBStories = () =>{
            console.log("Stories are shown below:");
        }
        TimelinePosts = () =>{
            console.log("The timeline view is shown!");
        }
 
    }
    
    let userProfile = new FacebookProfile("John","john123@gmail.com",23,"Degree","12/03/1997",9442332231,"Officer","I am a friendly guy")
    
    let userName = userProfile.getUserName();
    console.log(userName);
    userProfile.setUserName("Dany");
    console.log(userProfile.getUserName());
    console.log(userProfile.getBirthday());
    console.log(userProfile.getDescription());
    console.log(userProfile.getFriendCount());
    console.log(userProfile.getMobileNo());
    userProfile.setUserEmail("dany123@gmail.com");
    console.log(userProfile.getUserEmail());
    console.log(userProfile.getWork());
    userProfile.FBStories();
    userProfile.TimelinePosts();
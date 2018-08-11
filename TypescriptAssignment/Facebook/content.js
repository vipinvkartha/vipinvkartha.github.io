/*This is the class for Social Profile. It contains member variables,constructor and setter and getter functions*/
var FacebookProfile = /** @class */ (function () {
    function FacebookProfile(user_name, user_email, friend_list_count, education, birthday, mobile, work, description) {
        var _this = this;
        this.getUserName = function () {
            return _this.user_name;
        };
        this.setUserName = function (name) {
            _this.user_name = name;
        };
        this.getUserEmail = function () {
            return _this.user_email;
        };
        this.setUserEmail = function (email) {
            _this.user_email = email;
        };
        this.getFriendCount = function () {
            return _this.friend_list_count;
        };
        this.setFriendCount = function (count) {
            _this.friend_list_count = count;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.setbirthday = function (bday) {
            _this.birthday = bday;
        };
        this.getMobileNo = function () {
            return _this.mobile;
        };
        this.setMobileNo = function (mobile) {
            _this.mobile = mobile;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.setWork = function (work) {
            _this.work = work;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.setDescription = function (description) {
            _this.description = description;
        };
        this.FBStories = function () {
            console.log("Stories are shown below:");
        };
        this.TimelinePosts = function () {
            console.log("The timeline view is shown!");
        };
        this.user_name = user_name;
        this.user_email = user_email;
        this.friend_list_count = friend_list_count;
        this.birthday = birthday;
        this.mobile = mobile;
        this.work = work;
        this.description = description;
    }
    return FacebookProfile;
}());
var userProfile = new FacebookProfile("John", "john123@gmail.com", 23, "Degree", "12/03/1997", 9442332231, "Officer", "I am a friendly guy");
var userName = userProfile.getUserName();
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

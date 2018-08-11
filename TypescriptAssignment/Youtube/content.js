/*This is the class for Youtube Video. It contains member variables,constructor and setter and getter functions*/
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(Title, views, likes, dislikes, comments, description, category, quality, age, subtitles) {
        var _this = this;
        this.getTitle = function () {
            return _this.Title;
        };
        this.setTitle = function (title) {
            _this.Title = title;
        };
        this.getNoOfViews = function () {
            return _this.NoOfViews;
        };
        this.setViews = function (views) {
            _this.NoOfViews = views;
        };
        this.getNoOfLikes = function () {
            return _this.NoOflikes;
        };
        this.setLikes = function (likes) {
            _this.NoOflikes = likes;
        };
        this.getNoOfDislikes = function () {
            return _this.NoOfDislikes;
        };
        this.setDisLikes = function (dislikes) {
            _this.NoOfDislikes = dislikes;
        };
        this.getNoOfComments = function () {
            return _this.NoOfcomments;
        };
        this.setComments = function (comments) {
            _this.NoOfcomments = comments;
        };
        this.getDescription = function () {
            return _this.VideoDescription;
        };
        this.setDescription = function (descr) {
            _this.VideoDescription = descr;
        };
        this.getCategory = function () {
            return _this.VideoCategory;
        };
        this.setCategory = function (cat) {
            _this.VideoCategory = cat;
        };
        this.getQuality = function () {
            return _this.VideoQuality;
        };
        this.getAgelimit = function () {
            return _this.AgeLimit;
        };
        this.setAgelimit = function (age) {
            _this.AgeLimit = age;
            ;
        };
        this.IsSubtitleAvailable = function () {
            return _this.SubtitlesAvailable;
        };
        this.setSubtitleAvailable = function (val) {
            _this.SubtitlesAvailable = val;
        };
        this.getRelatedVideos = function () {
            console.log("Related Videos:");
        };
        this.changeVideoQuality = function (quality) {
            _this.VideoQuality = quality;
        };
        this.Title = Title;
        this.NoOfViews = views;
        this.NoOflikes = likes;
        this.NoOfDislikes = dislikes;
        this.NoOfcomments = comments;
        this.VideoDescription = description;
        this.VideoCategory = category;
        this.VideoQuality = quality;
        this.AgeLimit = age;
        this.SubtitlesAvailable = subtitles;
    }
    return YoutubeVideo;
}());
var videoSong = new YoutubeVideo("Song1", 1000, 121, 8, 25, "From Movie1", "CinemaSong", "480p", 17, true);
var title = videoSong.getTitle();
console.log(title);
videoSong.setTitle("Song2");
console.log(videoSong.getTitle());
console.log(videoSong.getCategory());
console.log(videoSong.getNoOfComments());
console.log(videoSong.getNoOfDislikes());
console.log(videoSong.getNoOfLikes());
console.log(videoSong.getNoOfViews());
console.log(videoSong.getQuality());
console.log(videoSong.getAgelimit());
console.log(videoSong.getDescription());
console.log(videoSong.IsSubtitleAvailable());
videoSong.changeVideoQuality("1080p");
console.log(videoSong.getQuality());
videoSong.getRelatedVideos();

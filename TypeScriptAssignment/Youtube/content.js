var Video = /** @class */ (function () {
    function Video(videoTitle, views, likes, dislikes, comments, description, category) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getNumberOfViews = function () {
            return _this.views;
        };
        this.getNumberOfLikes = function () {
            return _this.likes;
        };
        this.getNumberOfDislikes = function () {
            return _this.dislikes;
        };
        this.getNumberOfComments = function () {
            return _this.comments;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getRelatedVideos = function () {
            console.log("These are the related Videos");
        };
        this.autoPlay = function () {
            console.log("Autoplay is Off!");
        };
        this.videoTitle = videoTitle;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        this.description = description;
        this.category = category;
    }
    return Video;
}());
var edwisor = new Video("title", 10000, 132, 5, 43, "some description", "education");
var title = edwisor.getVideoTitle();
console.log(title);
var views = edwisor.getNumberOfViews();
console.log(views);
var likes = edwisor.getNumberOfLikes();
console.log(likes);
var dislikes = edwisor.getNumberOfDislikes();
console.log(dislikes);
var comments = edwisor.getNumberOfComments();
console.log(comments);
var description = edwisor.getDescription();
console.log(description);
var category = edwisor.getCategory();
console.log(category);
var relatedVideos = edwisor.getRelatedVideos();
relatedVideos;
var autoPlay = edwisor.autoPlay();
autoPlay;

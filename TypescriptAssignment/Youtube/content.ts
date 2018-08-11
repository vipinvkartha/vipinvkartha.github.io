/*This is the class for Youtube Video. It contains member variables,constructor and setter and getter functions*/

class YoutubeVideo {

    private Title: string;
    private NoOfViews: number;
    private NoOflikes: number;
    private NoOfDislikes: number;
    private NoOfcomments: number;
    private VideoDescription: string;
    private VideoCategory: string;
    private VideoQuality: string;
    private AgeLimit?: number;
    private SubtitlesAvailable: boolean;

    constructor(Title: string, views: number, likes: number, dislikes: number, comments: number, description: string, category: string,quality:string,age:number,subtitles:boolean) {
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

    getTitle = () => {
        return this.Title;
    }

    setTitle = (title:string) => {
         this.Title = title;
    }

    getNoOfViews = () => {
        return this.NoOfViews;
    }
    setViews = (views:number) => {
        this.NoOfViews = views;
   }

    getNoOfLikes = () => {
        return this.NoOflikes;
    }
    setLikes = (likes:number) => {
        this.NoOflikes = likes;
   }

    getNoOfDislikes = () => {
        return this.NoOfDislikes;
    }
    setDisLikes = (dislikes:number) => {
        this.NoOfDislikes = dislikes;
   }
    getNoOfComments = () => {
        return this.NoOfcomments;
    }
    setComments = (comments:number) => {
        this.NoOfcomments = comments;
   }
    getDescription = () => {
        return this.VideoDescription;
    }
    setDescription = (descr:string) => {
        this.VideoDescription = descr;
   }
    getCategory = () => {
        return this.VideoCategory;
    }
    setCategory = (cat:string) => {
        this.VideoCategory = cat;
   }
    getQuality = () => {
        return this.VideoQuality;
    }
    getAgelimit = () => {
        return this.AgeLimit;
    }
    setAgelimit = (age:number) => {
        this.AgeLimit = age;;
    }
    IsSubtitleAvailable = () => {
        return this.SubtitlesAvailable;
    }
    setSubtitleAvailable = (val:boolean) => {
        this.SubtitlesAvailable = val;
    }

    getRelatedVideos = () => {
        console.log("Related Videos:");
    }

    changeVideoQuality = (quality:string) =>{
        this.VideoQuality = quality;
    }


}

let videoSong = new YoutubeVideo("Song1", 1000, 121, 8, 25, "From Movie1", "CinemaSong","480p",17,true);

let title = videoSong.getTitle();
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
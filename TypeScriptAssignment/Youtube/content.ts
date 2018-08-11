class Video{
    
        videoTitle : string;
        views : number;
        likes : number;
        dislikes : number;
        comments : number;
        description : string;
        category : string;
    
        constructor(videoTitle : string, views : number,likes : number, dislikes : number, comments : number,description : string,category : string){
            this.videoTitle = videoTitle;
            this.views = views;
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = comments;
            this.description = description;
            this.category = category
        }
    
        getVideoTitle = () =>{
            return this.videoTitle;
        }
    
        getNumberOfViews = () =>{
            return this.views;
        }
    
        getNumberOfLikes = () =>{
            return this.likes;
        }
    
        getNumberOfDislikes = () =>{
            return this.dislikes;
        }
    
        getNumberOfComments = () =>{
            return this.comments;
        }
    
        getDescription = () =>{
            return this.description;
        }
    
        getCategory = () =>{
            return this.category;
        }
    
        getRelatedVideos = () =>{
            console.log("These are the related Videos");
        }
    
        autoPlay = () =>{
            console.log("Autoplay is Off!");
        }
    
    
    }
    
    let edwisor = new Video("title",10000,132,5,43,"some description","education")
    
    let title = edwisor.getVideoTitle();
    console.log(title);
    
    let views = edwisor.getNumberOfViews();
    console.log(views);
    
    let likes = edwisor.getNumberOfLikes();
    console.log(likes);
    
    let dislikes = edwisor.getNumberOfDislikes();
    console.log(dislikes);
    
    let comments = edwisor.getNumberOfComments();
    console.log(comments);
    
    let description = edwisor.getDescription();
    console.log(description);
    
    let category = edwisor.getCategory();
    console.log(category);
    
    let relatedVideos = edwisor.getRelatedVideos();
    relatedVideos;
    
    let autoPlay = edwisor.autoPlay();
    autoPlay;
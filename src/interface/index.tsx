export interface Drug {
    id?: number;
    drugName?: string;
    drugDetails?: string;
    createdAt?: string;
  }
  
  interface Advertisement {
    id: number;
    addName: string;
    addImage: string;
    addDetails: string;
    redirectionLink: string;
    createdAt: string;
  }
  
export  interface News {
    id?: number;
    title?: string;
    url?: string;
    urlToImage?: string;
    description?: string;
    speciality?: string;
    newsUniqueId?: string;
    trendingLatest?: number;
    publishedAt?: string;
    metaDescription?: string;
    keywordsList?: string;
    newsImgAltTag?: string;
  }
  
  interface Quiz {
    id: number;
    quizTitle: string;
    quizSpeciality: string;
    companyName: string;
    companyLogo: string;
    companyIntro: string;
    quizImage: string;
    quizReward: string;
    couponText: string;
    couponImage: string;
    quizStatus: number;
    quizUpcomingStatus: number;
    isDeleted: number;
    createdAt: string;
    updatedTime: string;
    quizUniqueId: string;
    quizLink: string;
    quizCreatedBy: number;
    speciality: number;
    quizKeyword: string;
  }
  
  export interface Survey {
    id?: number;
    surveyName?: string;
    points?: number;
    createdAt?: string;
    companyName?: string;
    companyLogo?: string;
    surveycompanyIntroName?: string;
    surveyStatus?: number;
    serveyUniqueId?: string;
    metaDescription?: string;
    keywordsList?: string;
  }
  
  interface Article {
    id: number;
    articleTitle: string;
    redirectLink: string;
    articleImg: string;
    articleDescription: string;
    specialityId: string;
    rewardPoints: number;
    keywordsList: string;
    articleUniqueId: string;
    metaDescription: string;
    createdAt: string;
  }
  
 export interface ExploreMore {
    news?: News;
    quiz?: Quiz;
    survey?: Survey[];
    article?: Article;
  }
  
 export interface Data {
    drugData?: Drug[];
    adds?: Advertisement[];
    exploreMore?: ExploreMore;
  }
  
  
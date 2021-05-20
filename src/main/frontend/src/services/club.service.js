import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class ClubService{
    createClub(clubName){
        return axios.post(API_URL+"createclub",
            {clubName});

    }
    createSubClub(sCName, cName){
        return axios.post(API_URL+"createsubclub",
            {subClubName:sCName,clubName:cName});
    }
    createQuestion(question, answ, cName){
        return axios.post(API_URL+"createquestion",
            {ques:question,
            answer:answ,
            clubName:cName});
    }

    deleteClub(clubId){
        return axios.delete(API_URL+"deleteclub"+"/"+clubId);
    }

    deleteQuestion(clubId){
        return axios.delete(API_URL+"deletequestion"+"/"+clubId);
    }

    deleteUserClubs(clubId){
        return axios.delete(API_URL+"deleteuserclubs"+"/"+clubId);
    }

    createRate(userId, username, clubId, comment, rate){
        return axios.post(API_URL+"createrate",
            {userId:userId,
                userName:username,
            clubId:clubId,
            comment:comment,
            rate:rate});
    }

    getRate(clubId){
        return axios.get(API_URL+"rate"+"/"+clubId);
    }

    getComment(clubId){
        return axios.get(API_URL+"comment"+"/"+clubId);
    }

    getEvent(clubId){
        return axios.get(API_URL+"events/fetch"+"/"+clubId);
    }

    createSubClubRequest(userId, username, offer){
        return axios.post(API_URL+"createsubclubrequest", {
            userId:userId,
            userName:username,
            offer:offer
        });
    }

    getAllOffers(){
        return axios.get(API_URL+"subclubrequest");
    }
    getMessages(clubid,userid){
        return axios.post("http://localhost:8080/api/messages/fetch/"+clubid+"/"+userid
        );
    }

    createMessage(messagetitle,clubid,messagecontent,userid,isprivate){
        return axios.post("http://localhost:8080/api/messages/create", {
            title:messagetitle,
            clubId:clubid,
            content:messagecontent,
            userId: userid,
            isPrivate: isprivate
        });
    }

}

export default new ClubService();
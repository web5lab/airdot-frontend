import verifyTask from "./questService";

const twitteAuth = async (questId,task) => {
    console.log("working ");
    const key = await fetch(`http://31.220.48.246:4000/user/twitter/${localStorage.getItem("jwtToken")}`).then(response => response.json())
    .then(data => {
      console.log("token",data)
      return data})
      if(key.error){
       return await verifyTask(questId,task);
      }
    try {
      const redirect_uri = encodeURIComponent('http://31.220.48.246:3000/callback');
      console.log(redirect_uri); 
        window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${key.token}&oauth_callback=${redirect_uri}`;
    } catch (err) {
      console.error('Error here', err);
    }
  };

  export default twitteAuth
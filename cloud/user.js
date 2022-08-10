Moralis.Cloud.define("getUser", async(request) => {
    const query = new Parse.Query("User");
    const res = await query.find({ useMasterKey: true });
    const usersObj = res.filter((data) => {
        const userName = data.attributes.username;
        if(userName === request.params.userName){
            return data;
        }
    })
    return request.params.userName && request.params.userName.length > 0 ? usersObj : [];
})
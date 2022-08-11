Moralis.Cloud.define("getUser", async(request) => {
    const query = new Parse.Query("User");
    const res = await query.find({ useMasterKey: true });
    const usersObj = res.filter((data) => {
        const username = data.attributes.username;
        if(username === request.params.username){
            return data;
        }
    })
    return request.params.username && request.params.username.length > 0 ? usersObj : [];
})
function checkLoginState(){
    FB.checkLoginState(statusChangeCallback);
}

async function statusChangeCallback(response){
    const { userID, accessToken } = response.authResponse;
    const result = await fetch(
        `https://graph.facebook.com/v8.0/${userID}?fields=picture,id,name&access_token=${accessToken}`,
    { method: "get" }
    );
    const data = await result.json();
    const _csrf = document.getElementsByName("_csrf")[0].value;

    const form = new FormData();
    form.append("username", data.id)
    form.append("email", `${data.id}@facebook.com`)
    form.append("password", `facebook:${data.id}` )


    await fetch("/api/register", { method: "POST", body: form });
}

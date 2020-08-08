function checkLoginState(){
FB:getLoginStatus(statusChangeCallback);
}

async function statusChangeCallback(response){
    //FB.getLoginStatus(function(response)
    const {userID, accessToken}= response.authResponse;
    const result = await fetch(`https://graph.faceboook.com/v8.0/${userID}field=profile_pic&access_tpken=${acessToken},`, 
    {method: "get"})
    const data = await result.json();
    const _csrf = document.getElementsByName("_csrf")[0].nodeValue;

    const form = new FormData();
    form.append("username",data.id)
    form.append("email",`${data.id}@facebook.com`)
    form.append("password", `{data.id}@facebook.com`)

    await fetch("/api/register",{method:"POST",body:form});

    console.log(data)
}

//`
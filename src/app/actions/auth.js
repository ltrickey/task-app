export async function login(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const loginRes = await fetch("http:localhost:3000/login", {
      method: POST,
      body: JSON.stringify({ email: email, password: password }),
    });

    console.log("received resonse: " + loginRes);
    //redirect("/list");

    // Todo: break out into user not found vs bad password

    // Create a JWT token
    // const token = jwt.sign({ email: foundUser.email }, "your_secret_key", {
    //   expiresIn: "1h",
    // });
    // creates a cookie to hold token from
    // Authentication.  For now just use user id
  } catch (err) {
    console.log("caught error: " + err);
    return {
      errors: ["Something went wrong, please try again"],
    };
  }
}

// call JSON-SERVER.  TODO: Replace with call to Auth0

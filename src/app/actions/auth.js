export async function login(state, formData) {
  console.log(state);
  console.log(formData);

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await fetch("http://localhost:4000/users");
    if (!res.ok) {
      return {
        errors: ["Failed to login"],
      };
    }

    const users = await res.json();
    let foundUser;

    for (const user of users) {
      if (user.email == email && user.password == password) {
        // set loged in
        foundUser = user;
      }
    }
    // Todo: break out into user not found vs bad password
    if (!foundUser) {
      return {
        errors: ["Invalid credentials"],
      };
    } else {
      // Create a JWT token
      // const token = jwt.sign({ email: foundUser.email }, "your_secret_key", {
      //   expiresIn: "1h",
      // });
      console.log("Successful Login!");
    }
  } catch (err) {
    console.log("caught error: " + err);
    return {
      errors: ["Something went wrong, please try again"],
    };
  }
}

// call JSON-SERVER.  TODO: Replace with call to Auth0

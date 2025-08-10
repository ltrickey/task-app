// TODO: call this route.js instead of login?

export async function POST(request) {
  const { email, password } = request.body;
  const response = new Response();

  // call JSON-SERVER.  TODO: Replace with call to Auth0
  try {
    const res = await fetch("http://localhost:4000/users");
    if (!res.ok) {
      return res.status(401).json({ message: 'Failed to login' });
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

      return response.status(401).json({ message: 'Invalid credentials' });
    } else {
    // Create a JWT token
      const token = jwt.sign({ email: foundUser.email }, 'your_secret_key', { expiresIn: '1h' });
      return response.status(200).json({ token });
    }

  } catch (err) {
    console.log("caught error: " + err);
    return response.status(401).json({ message: 'Something went wrong, please try again' });
  }
  
}
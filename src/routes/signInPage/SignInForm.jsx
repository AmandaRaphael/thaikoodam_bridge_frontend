import {useState} from 'react'

const SignInForm = () => {
    const [signIn, setSignIn] = useState({ username: "", password: "" })
    function handleChange(e) {
        setSignIn({ ...signIn, [e.target.name]: [e.target.value] })
    }
    return (
      <form>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={signIn.username}
            onchange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" value={signIn.password} onchange={handleChange} />
        </div>
      </form>
    );
}

export default SignInForm

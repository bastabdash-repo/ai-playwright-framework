export function parseSnapshot(snapshot: any) {
  const text = snapshot.content[0].text;

  return {
    username: /textbox "Username".*\[ref=(.*?)\]/.exec(text)?.[1],
    password: /textbox "Password".*\[ref=(.*?)\]/.exec(text)?.[1],
    loginButton: /button "Login".*\[ref=(.*?)\]/.exec(text)?.[1]
  };
}
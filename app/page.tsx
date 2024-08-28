import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import Tasks from "@/components/todosahreen/tasks";

const Home = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action={signInAction}>
        <Button>Log In</Button>
      </form>
    </div>
  );
};

export default Home;

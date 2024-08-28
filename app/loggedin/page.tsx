import Tasks from "@/components/todosahreen/tasks";
import UserProfile from "@/components/todosahreen/UserProfile";

const Home = () => {
  return (
    <div>
      <h1>TodoSahreen</h1>
      <UserProfile />

      <Tasks />
    </div>
  );
};

export default Home;

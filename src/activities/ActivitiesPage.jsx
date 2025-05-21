import { useAuth } from "../auth/AuthContext";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";

export default function ActivitiesPage() {
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ActivityList />
      {token && <ActivityForm />}
    </>
  );
}

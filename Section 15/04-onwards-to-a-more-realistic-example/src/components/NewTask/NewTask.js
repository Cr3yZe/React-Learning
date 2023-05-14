import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttpRequest from '../../hooks/use-httpRequest';

const NewTask = (props) => {
  const { isLoading, error, fetchTasks } = useHttpRequest('POST');

  return (
    <Section>
      <TaskForm onEnterTask={fetchTasks} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

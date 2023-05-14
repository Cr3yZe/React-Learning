import { useState, useCallback } from 'react';

const useHttpRequest = (method = 'GET') => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      let response;
      if (method === 'GET') {
        response = await fetch(
          'https://custom-hooks-7426e-default-rtdb.firebaseio.com/tasks.json'
        );
      } else {
        response = await fetch(
          'https://custom-hooks-7426e-default-rtdb.firebaseio.com/tasks.json',
          {
            method: 'POST',
            body: JSON.stringify({ text: taskText }),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
      }

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    tasks,
    setTasks,
    fetchTasks,
  }
};

export default useHttpRequest;
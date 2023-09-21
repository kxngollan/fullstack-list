import { useState } from 'react';

const UserInput = (props) => {
  const [myTask, setMyTask] = useState('');
  const [theDate, setTheDate] = useState('');
  const [myDescription, setMyDescription] = useState('');

  const onDateChangeHandler = (event) => {
    setTheDate(event.target.value);
  };

  const onTitleChangeHandler = (event) => {
    setMyTask(event.target.value);
  };

  const onDescriptionChangeHandler = (event) => {
    setMyDescription(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: myTask,
      date: theDate,
      description: myDescription,
      id: Math.random().toString(),
      status: 'Pending',
    };

    props.onAddTask(taskData);

    setMyTask('');
    setTheDate('');
    setMyDescription('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <label>Date:</label>
      <br />
      <input
        type="date"
        value={theDate}
        onChange={onDateChangeHandler}
        required
      />
      <br />
      <label>Title:</label>
      <br />
      <input
        type="text"
        value={myTask}
        onChange={onTitleChangeHandler}
        required
      />
      <br />
      <label>Description:</label>
      <br />
      <input
        type="text"
        value={myDescription}
        onChange={onDescriptionChangeHandler}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInput;
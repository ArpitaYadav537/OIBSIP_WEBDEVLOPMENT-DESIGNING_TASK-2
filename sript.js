
    function addTask() {
      // Get the task text and custom date/time from the input fields
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
      const dateTimeInput = document.getElementById('taskDateTime');
      const customDateTime = dateTimeInput.value || new Date().toLocaleString(); // Default to current time if empty

      // If input is empty, show alert and return
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      // Create new list item (task)
      const li = document.createElement('li');
      li.classList.add('task-item');

      // Add task text as a contenteditable span
      const span = document.createElement('span');
      span.textContent = taskText;
      span.contentEditable = true; // Make the task text editable
      span.classList.add('task-text');
      li.appendChild(span);

      // Add the status
      const status = document.createElement('span');
      status.classList.add('status');
      status.textContent = "Pending";  // Initial status is pending
      li.appendChild(status);

      // Add custom date/time of task
      const dateTimeSpan = document.createElement('span');
      dateTimeSpan.classList.add('date-time');
      dateTimeSpan.textContent = `Set for: ${customDateTime}`;
      dateTimeSpan.onclick = function () {
        const newDateTime = prompt("Edit the date and time", customDateTime);
        if (newDateTime !== null && newDateTime.trim() !== "") {
          dateTimeSpan.textContent = `Set for: ${newDateTime.trim()}`;
        }
      };
      li.appendChild(dateTimeSpan);

      // Add Edit Button (for task text)
      const editButton = document.createElement('button');
      editButton.textContent = "Save Edit";
      editButton.onclick = function () {
        const newText = span.textContent.trim();
        if (newText === "") {
          alert("Task description cannot be empty!");
        } else {
          span.textContent = newText; // Save the new task text
        }
      };
      li.appendChild(editButton);

      // Add Delete Button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        li.remove();
        alert("Task has been deleted!");
      };
      li.appendChild(deleteButton);

      // Add Mark as Completed Button
      const completeButton = document.createElement('button');
      completeButton.textContent = "Mark as Completed";
      completeButton.onclick = function () {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
          status.textContent = "Completed";
          status.classList.add('completed');
          alert("Task is completed!");
        } else {
          status.textContent = "Pending";
          status.classList.remove('completed');
        }
      };
      li.appendChild(completeButton);

      // Append task to the task list
      const taskList = document.getElementById('taskList');
      taskList.appendChild(li);

      // Clear input fields after adding task
      taskInput.value = "";
      dateTimeInput.value = "";
    }
  
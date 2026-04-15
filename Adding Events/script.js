// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

// Get DOM elements
const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

// Event 1: Add random task to the list
addItemBtn.addEventListener('click', () => {
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  const li = document.createElement('li');
  li.textContent = randomTask;
  li.className = 'p-2 border-b hover:bg-gray-100';
  itemList.appendChild(li);

});

// Event 2: Display alert with custom message
alertBtn.addEventListener('click', () => {
  alert('Hi,This is a alert message!');
});

// Event 3: Log to console with custom message
consoleBtn.addEventListener('click', () => {
  console.log('Hi,This is a custom message logged to console!');
});

/*
DIFFERENCES BETWEEN addEventListener vs onclick:

1. MULTIPLE LISTENERS:
   - addEventListener: Can attach multiple listeners to the same event
   - onclick: Only one onclick handler can exist (new one overwrites the previous)

2. SYNTAX:
   - addEventListener: element.addEventListener('click', callback)
   - onclick: element.onclick = callback (or inline: onclick="code")

3. EVENT REMOVAL:
   - addEventListener: Can remove with removeEventListener(eventName, callback)
   - onclick: Must set to null to remove (element.onclick = null)

4. FLEXIBILITY:
   - addEventListener: Can specify capture phase (third parameter)
   - onclick: Always uses bubbling phase

5. EVENT OBJECT:
   - addEventListener: Automatically passes the event object
   - onclick: Also passes event object, but less standard

BEST PRACTICE:
Always use addEventListener because it allows multiple listeners and is more flexible.
The onclick property is mostly kept for backward compatibility.
*/

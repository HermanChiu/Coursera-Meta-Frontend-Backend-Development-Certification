// Task 1 solution: The example.com website
// Open your favorite browser and navigate to https://example.com/.

// Next open its developer tools using either the F12 key, or right-clicking onto the page and selecting the contextual menu's Inspect command,
//  or by pressing CTRL SHIFT I or COMMAND SHIFT I.

// Next, click on the Console tab to open it in a dedicated tab, or press the ESC key to have the console open while any tab is in focus.

// Task 2 solution: Get h1 into a variable

// Task 3 solution: Code an array

// Task 4 solution: Write a click-handling function

// Task 5 solution: Add an event listener


// use this in browser
var h1 = document.querySelector('h1')

var arr = [
        'Example Domain',
        'First Click',
        'Second Click',
        'Third Click'
    ]

    
function handleClicks() {
        switch(h1.innerText) {
            case arr[0]:
                h1.innerText = arr[1]
                break
            case arr[1]:
                h1.innerText = arr[2]
                break
            case arr[2]:
                h1.innerText = arr[3]
                break
            default:
                h1.innerText = arr[0]
            }
        }

h1.addEventListener('click', handleClicks);
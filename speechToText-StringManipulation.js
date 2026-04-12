// Siri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...

// Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"

// According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.

// For the purposes of this kata, 12:00am is midnight and 12:00pm is noon.

// // Disclaimer: Yes, those features may already exist in Siri.

// My Solution:

const bot = {
    message(prompt) {
        prompt = prompt.split(' ')
        if(prompt[0] == 'Add'){
          return +prompt[1] + +prompt[3]
        }else if(prompt[0] == 'Subtract'){
          return +prompt[3] - +prompt[1]
        } else {
          let time = prompt[prompt.length - 1].toLowerCase()

          if (time.endsWith('?')) {
            time = time.slice(0, -1)
          }

          let [hour, minute] = [
            time.split(':')[0],
            time.split(':')[1].slice(0, -2)
          ].map(Number)

          if (hour == 12 && time.includes('am')) {
            hour = 0
          }

          let timeInMinutes = hour * 60 + minute

          if (time.includes('pm') && hour !== 12){
            timeInMinutes += 12 * 60
          }

          if(timeInMinutes >= 6 * 60 && timeInMinutes <= 18 * 60) return 'sunny'
          else return 'raining'
        }
    }
};
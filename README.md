# Notes Application

## What is it for?
This application is used to add, remove, list, and read notes.  It was created to be used inside of a terminal using the following commands.

## How it works
This simple node application uses terminal commands to save notes to a local file in the same directory. This file will hold JSON data for all created notes which can be accessed with different terminal commands.

## How to use it
To use this application:

1. Clone the repo to you system locally
2. Create your first note with the add command in the terminal
3. You can then create another, remove the note, list all notes, or read any of the notes with the commands below.


### Commands

#### Add
To add a note, run the command:
```
node app.js add --title="Note Title Here" --body="Note Body Here"
```

##### Arguments
| Argument Name | Data Type | Required |
|---------------|-----------|----------|
| --title="..." | String    | Yes      |
| --body="..."  | String    | Yes      |


#### Remove
To remove a note, run the command:
```
node app.js remove --title="Note Title Here"
```

##### Arguments
| Argument Name | Data Type | Required |
|---------------|-----------|----------|
| --title="..." | String    | Yes      |

#### List
To list all of the saved notes, run the command:
```
node app.js list
```

#### Read
To read a specific note, run the command:
```
node app.js read --title="Note Title Here"
```

##### Arguments
| Argument Name | Data Type | Required |
|---------------|-----------|----------|
| --title="..." | String    | Yes      |


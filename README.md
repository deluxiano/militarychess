# Chinese Military Chess

Chinese military chess (Chinese: 陸戰棋) is a two-player Chinese board game . It bears many similarities to L'Attaque. It is a non-perfect abstract strategy game of partial information, since each player has only limited knowledge concerning the disposition of the opposing pieces. 

- **Objective**: The primary goal is to capture the opponent's flag.
- **Players**: Two players compete against each other, each managing their own army set up on a distinctive battlefield represented on a board.
- **Game Play**: Players take turns to move pieces with the aim to capture the opponent's flag or eliminate opposing pieces.

## Components

### Board

- **Soldier Stations**: Regular playing spaces for movement and attacks.
- **Camps**: Safety spots where pieces cannot be attacked.
- **Headquarters**: Each side has two; one holds the flag.
- **Front Line and Mountain Borders**: Serve as barriers; pieces cannot stop here but must pass over.

### Pieces

Each piece has a specific role and movement ability:

- **Engineer**: Can destroy Landmines without being destroyed and move continuously on railroad tracks.
- **Grenade**: Destroys itself along with any piece it attacks.
- **Landmine**: Does not move; destroys any attacking piece except for the Engineer.
- **Flag**: The game's objective; capturing the flag wins the game.  
| ID  | Chinese | English      |  
|-----|---------|--------------|  
| -1  | 炸彈    | BOMB         |  
| 0   | 軍旗    | FLAG         |  
| 1   | 工兵    | ENG          |  
| 2   | 排長    | LT           |  
| 3   | 連長    | CPT          |  
| 4   | 營長    | MAJ          |  
| 5   | 團長    | COL          |  
| 6   | 旅長    | BG           |  
| 7   | 師長    | MG           |  
| 8   | 軍長    | GEN          |  
| 9   | 司令    | FM           |  
| 10  | 地雷    | MINE         |  

## Installing

1. Clone the repository

```
git clone https://github.com/deluxiano/militarychess.git
cd militarychess
```

2. Install dependencies

```
npm install
```

3. Start the server

```
npm run start
```
Access the server at http://localhost:3000.


## Setting Up

Each player arranges their 25 pieces on their side of the board at the beginning of the game. Strategic placement of pieces like the Flag and Landmines is crucial.

## Playing the Game

Players alternate moves, maneuvering their pieces according to the rules specified for each type. The game continues until one player attacks the opponent's flag.

## Technical details
We did research on many similar board games in many different languages (programming language), translate by ChatGPT and integrated beautiful code into our frame.


### Frontend
The front end was structured to provide a user interface, primarily using EJS templates and custom JavaScript to manage game logic and user interactions. While using full-on React was an option to us, we felt the frontend of the game did not require the advanced features and state management capabilities that React offers. Thus, EJS was used. 

### Backend 
- Nodejs: Provides a robust server-side platform that allows JavaScript to be used for backend development, ideal for handling I/O-bound operations, and capable of supporting thousands of simultaneous connection. 
- Express: Minimal Node.js web application framework that provides a robust set of features. Used to create server-side logic and manage HTTP routes, middleware, and more. Used instead of Flask because it's better for games like this.
- Socket.io: Facilitates instant communication between players and the server

### Components
Here’s a breakdown of the main components in the directory and their roles:

- Board.js: This module constructs and initializes the game board. It handles pre-game functionalities such as setting up the pieces on the board, allowing players to swap pieces according to game rules, and processing each move made during the game.

- Game.js: Manages the game's state, including tracking current player information, game status, and recording each move made. Essential for the flow of the game, ensuring that all game rules and progressions are adhered to.

- GameStore.js: Responsible for generating unique game keys, crucial for session management, allows for the creation and tracking of individual game sessions in a multi-player environment.

- Graph.js: Handles the logical positioning and possible movements of pieces on the board, important for validating legal moves and enforcing the game’s rules.

- Piece.js: Assigns ranks and colors to the chess pieces and includes functionality to compare ranks during gameplay. Vital for the interaction between different pieces on the board, determining the outcome of conflicts.

- RailroadNetwork.js: Given the unique aspects of the game, this module defines the behavior of pieces on the railroad tracks on the board, which involves more complex movement logic than typical path movements. 


## API Endpoints
1. Home Page (`GET /`): Renders the home page of the game where players can either start or join a game.

2. Game Page (`GET /game/:id`): Validates the session to ensure the player is part of the game with the given ID. If validation fails, it redirects to the home page. If successful, it renders the game page for the player.

3. Start Game (`POST /start`): Processes the "Start Game" form submission. It validates the input (player color and name), creates a new game session, and redirects to the game page if successful. If validation fails, it redirects back to the home page.

4. Join Game (`POST /join`): Handles the "Join Game" form where a player can enter a game ID to join an existing game. It validates the game ID and player name, checks if the game exists, and assigns the player a color based on the available slots in the game session. Successful validation redirects to the game page; otherwise, it returns to the home page.


## Acknowledgments
We used the following resources to build the game:
- ["I Made an Online Multiplayer Chess Game in an Hour, Using Node.js and Socket.io" (YouTube)](https://www.youtube.com/watch?v=71BWw_tNhbk)
- [I Coded a Multiplayer Chess Game in React and Node.js](https://www.youtube.com/watch?v=QwUZxCBtfLw)
- [VueChess](https://github.com/gustaYo/vue-chess)[ Luzhanqi_client (Github)](https://github.com/Tranxpotter/Luzhanqi_client), [react-stratego (Github)](https://github.com/LDK/react-stratego), [online-junqi (Github)](https://github.com/edwardli/Junqi), [ Chezz-Multiplyer-Chess
](https://github.com/00xkhaled/Chezz-Multiplyer-Chess)
- [How to Play Army Chess / Luzhanqi / 陸戰棋](https://www.ymimports.com/pages/how-to-play-luzhanqi)
- [How to play the Chinese Land Battle Game
Luzhanqi](https://ancientchess.com/page/play-luzhanqi.htm)

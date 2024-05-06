# # Military Chess

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



## Setting Up

Each player arranges their 25 pieces on their side of the board at the beginning of the game. Strategic placement of pieces like the Flag and Landmines is crucial.

## Playing the Game

Players alternate moves, maneuvering their pieces according to the rules specified for each type. The game continues until one player attacks the opponent's flag.

## Technical details
We did research on many similar board games in many different languages(programming language), translate by chatGPt and integrade beatiful code into our frame.

### Front end
Mainly used react.js that we studied this semster, used css and ejs together to create the UI. For js, we mainly have the structure under lib directory:
-Board.js  
Construct the game board, basic functionality before the game starts, like swap pieces and handle each move.  
-Game.js  
Game status, player info and get each move.  
-GameStore.js  
Generate game key.  
-Graph.js  
Handle chess piece positions on the board.  
-Piece.js  
Assign rank and color to pieces, a function to compare ranks  
-RailroadNetwork.js  
Railroad has complicated logic, define chess pieces' behaviors on railroad  

### Back end 
-socket.io:  
Socket.IO is a JavaScript library that enables real-time, bidirectional communication between web clients and servers, useful for applications like online games, chat apps, and live analytics. It works by establishing a persistent connection that can fall back to long polling if WebSockets are not supported, ensuring continuous data exchange. Socket.IO allows both client and server to emit and listen for events, facilitating real-time updates. Key features include auto-reconnection, binary support, and multiplexing, making it robust and versatile for various real-time applications. This library simplifies complex communication needs, ensuring applications remain responsive across different network conditions.